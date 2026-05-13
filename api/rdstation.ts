import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.RD_TOKEN;
  if (!token) {
    return res.status(500).json({ error: "RD_TOKEN não configurado" });
  }

  try {
    const response = await fetch(
      `https://api.rd.services/platform/events?api_key=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: typeof req.body === "string" ? req.body : JSON.stringify(req.body),
      }
    );

    const text = await response.text();
    return res.status(response.status).send(text);
  } catch (err) {
    console.error("[RDStation Edge Function]", err);
    return res.status(500).json({ error: "Erro interno ao contatar RD Station" });
  }
}
