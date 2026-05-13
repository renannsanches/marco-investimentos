/**
 * RD Station Marketing — Conversão via API
 * Docs: https://developers.rdstation.com/reference/conversions
 *
 * TOKEN: coloque no .env como VITE_RD_TOKEN=0b583302870eae833530cf0a4bbf7103
 *
 * CORS: a API do RD não aceita chamadas diretas do browser em produção.
 * Em dev o Vite proxy resolve. Em produção, use uma Edge Function / serverless
 * (ver comentário no final do arquivo).
 */

const RD_TOKEN = import.meta.env.VITE_RD_TOKEN as string;

export interface RDConversionPayload {
  /** Identificador do formulário — aparece como "Identificador" no RD */
  identifier: string;
  name: string;
  email: string;
  /** Telefone no formato (47) 99999-9999 — enviado como mobile_phone */
  mobile_phone?: string;
  /** Campos extras livres */
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
      // Campos extras viram custom fields no RD
      ...buildCustomFields(fields),
    },
  };

  // Em dev: Vite proxy redireciona /rdstation → https://api.rd.services
  // Em produção: troque pela URL da sua Edge Function / serverless
  const url = `/rdstation/platform/events?api_key=${RD_TOKEN}`;

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

/** Remove campos padrão e retorna o restante como custom fields */
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

/*
 * ─── PRODUÇÃO (CORS fix) ────────────────────────────────────────────────────
 *
 * Opção A — Vercel Edge Function (recomendado se hospedar na Vercel):
 *   Crie /api/rdstation.ts na raiz do projeto:
 *
 *   export default async function handler(req, res) {
 *     const response = await fetch(
 *       `https://api.rd.services/platform/events?api_key=${process.env.RD_TOKEN}`,
 *       { method: "POST", headers: { "Content-Type": "application/json" }, body: req.body }
 *     );
 *     res.status(response.status).send(await response.text());
 *   }
 *
 *   E troque a `url` acima para `/api/rdstation`.
 *
 * Opção B — Netlify Function, Cloudflare Worker, etc. — mesma lógica.
 * ────────────────────────────────────────────────────────────────────────────
 */
