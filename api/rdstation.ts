export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const token = process.env.RD_TOKEN;

  // DEBUG — remover depois de confirmar que funciona
  if (!token) {
    return new Response(JSON.stringify({ error: "RD_TOKEN ausente no servidor" }), { status: 500 });
  }

  try {
    const body = await req.text();

    const response = await fetch(
      `https://api.rd.services/platform/events?api_key=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
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
