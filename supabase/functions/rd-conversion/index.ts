import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const ALLOWED_ORIGINS = [
  "https://marcoinvestimentos.com.br",
  "https://www.marcoinvestimentos.com.br",
]

// In development, add extra origins via env var (never hardcode localhost in prod)
const devOrigins = Deno.env.get("ALLOWED_ORIGIN_DEV")
if (devOrigins) {
  ALLOWED_ORIGINS.push(...devOrigins.split(",").map((o) => o.trim()))
}

function getCorsHeaders(origin: string) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : null
  if (!allowed) return null
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  }
}

async function validateTurnstile(token: string, origin: string): Promise<boolean> {
  const isDev = origin.includes("localhost")
  const secret = isDev
    ? (Deno.env.get("TURNSTILE_SECRET_DEV") ?? Deno.env.get("TURNSTILE_SECRET"))
    : Deno.env.get("TURNSTILE_SECRET")
  if (!secret) return false

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, response: token }),
  })
  const data = await res.json()
  return data.success === true
}

serve(async (req) => {
  const origin = req.headers.get("origin") ?? ""
  const corsHeaders = getCorsHeaders(origin)

  if (!corsHeaders) {
    return new Response("Forbidden", { status: 403 })
  }

  const cors = corsHeaders

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: cors })
  }

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: cors })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return new Response("Invalid JSON", { status: 400, headers: cors })
  }

  if (!body.email || !body.identificador) {
    return new Response("Missing required fields", { status: 400, headers: cors })
  }

  const turnstileToken = body["cf-turnstile-response"]
  if (!turnstileToken || typeof turnstileToken !== "string") {
    return new Response("Missing verification token", { status: 400, headers: cors })
  }

  const valid = await validateTurnstile(turnstileToken, origin)
  if (!valid) {
    return new Response("Verification failed", { status: 403, headers: cors })
  }

  const rdToken = Deno.env.get("RD_TOKEN")
  if (!rdToken) {
    return new Response("Server configuration error", { status: 500, headers: cors })
  }

  const payload = { ...body, token_rdstation: rdToken }
  delete payload["cf-turnstile-response"]

  const response = await fetch("https://www.rdstation.com.br/api/1.3/conversions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const text = await response.text()
  return new Response(text, {
    status: response.status,
    headers: { ...cors, "Content-Type": "application/json" },
  })
})
