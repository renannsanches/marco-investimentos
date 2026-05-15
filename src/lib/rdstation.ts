export interface RDConversionPayload {
  identifier: string;
  name: string;
  email: string;
  mobile_phone?: string;
  [key: string]: string | undefined;
}

export async function sendRDConversion(payload: RDConversionPayload): Promise<void> {
  const { identifier, name, email, mobile_phone, ...rest } = payload;

  const body: Record<string, string | undefined> = {
    identificador: identifier,
    nome: name,
    email,
    ...(mobile_phone ? { celular: mobile_phone } : {}),
    ...buildCustomFields(rest),
  };

  body.token_rdstation = "0b583302870eae833530cf0a4bbf7103";

  const res = await fetch("https://www.rdstation.com.br/api/1.3/conversions", {
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
