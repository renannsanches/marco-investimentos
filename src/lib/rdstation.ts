/**
 * RD Station Marketing — Conversão via API
 * Docs: https://developers.rdstation.com/reference/conversions
 *
 * Em dev: Vite proxy /rdstation → https://api.rd.services (token no .env como VITE_RD_TOKEN)
 * Em produção: Edge Function /api/rdstation (token seguro no painel Vercel como RD_TOKEN)
 */

export interface RDConversionPayload {
  identifier: string;
  name: string;
  email: string;
  mobile_phone?: string;
  [key: string]: string | undefined;
}

export async function sendRDConversion(payload: RDConversionPayload): Promise<void> {
  const { identifier, ...fields } = payload;

  const body = {
    event_type: "CONVERSION",
    event_family: "CDP",
    payload: {
      conversion_identifier: identifier,
      name: fields.name,
      email: fields.email,
      mobile_phone: fields.mobile_phone,
      ...buildCustomFields(fields),
    },
  };

  // Dev: proxy Vite → usa VITE_RD_TOKEN no .env
  // Produção: Edge Function → usa RD_TOKEN seguro no servidor
  const isDev = import.meta.env.DEV;
  const url = isDev
    ? `/rdstation/platform/events?api_key=${import.meta.env.VITE_RD_TOKEN}`
    : `/api/rdstation`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`RD Station error ${res.status}: ${text}`);
  }
}

function buildCustomFields(fields: Record<string, string | undefined>) {
  const standard = new Set(["name", "email", "mobile_phone"]);
  const extras: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields)) {
    if (!standard.has(key) && value !== undefined && value !== "") {
      extras[key] = value;
    }
  }
  return extras;
}
