export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const token = process.env.RD_TOKEN;
  if (!token) {
    return new Response(JSON.stringify({ error: "RD_TOKEN ausente no servidor" }), { status: 500 });
  }

  try {
    const incoming = await req.json();
    const body = { ...incoming, token_rdstation: token };

    const response = await fetch(
      "https://www.rdstation.com.br/api/1.3/conversions",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();
    return new Response(text, { status: response.status });
  } catch (err) {
    console.error("[RDStation Edge Function]", err);
    return new Response(JSON.stringify({ error: "Erro interno ao contatar RD Station" }), { status: 500 });
  }
}

export const config = {
  runtime: "edge",
};
