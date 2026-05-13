import { useState, useCallback } from "react";
import { sendRDConversion, RDConversionPayload } from "@/lib/rdstation";

interface UseRDStationReturn {
  submit: (payload: RDConversionPayload) => Promise<boolean>;
  loading: boolean;
  error: string | null;
}

/**
 * Hook para enviar conversões ao RD Station Marketing.
 *
 * Uso:
 *   const { submit, loading, error } = useRDStation();
 *   const ok = await submit({ identifier: "site-contato", name, email, mobile_phone });
 *   if (ok) { fechar modal / mostrar sucesso }
 */
export function useRDStation(): UseRDStationReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(async (payload: RDConversionPayload): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await sendRDConversion(payload);
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro desconhecido";
      setError(message);
      console.error("[RDStation]", message);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return { submit, loading, error };
}
