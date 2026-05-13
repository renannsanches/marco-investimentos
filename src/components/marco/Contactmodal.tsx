import { useState } from "react";
import { X } from "lucide-react";
import { useRDStation } from "@/hooks/useRDStation";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#25D366" className="shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function applyPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const { submit, loading } = useRDStation();
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    mensagem: "",
    comunicacoes: false,
  });

  if (!open) return null;

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange("whatsapp", applyPhoneMask(e.target.value));
  };

  const resetForm = () => {
    setForm({ nome: "", whatsapp: "", email: "", mensagem: "", comunicacoes: false });
    setSent(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ok = await submit({
      identifier: "site-fale-conosco",
      name: form.nome,
      email: form.email,
      mobile_phone: form.whatsapp,
      cf_mensagem: form.mensagem,
      cf_aceita_comunicacoes: form.comunicacoes ? "sim" : "nao",
    });

    if (ok) setSent(true);
  };

  const inputClass =
    "w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-white/35 outline-none focus:ring-2 focus:ring-[#C2A161]/70 focus:border-[#C2A161]/50 transition backdrop-blur-sm";

  const labelClass = "font-body text-xs text-white/55 uppercase tracking-wider";

  return (
    <>
      <style>{`
        @media (max-width: 640px) { .contact-modal-image { display: none; } }
      `}</style>

      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" role="dialog" aria-modal="true">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={handleClose} />

        <div
          className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl flex"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 100%)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: "1px solid rgba(255,255,255,0.13)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.10)",
            maxHeight: "90vh",
          }}
        >
          {/* Left — image */}
          <div className="contact-modal-image w-[45%] shrink-0 relative overflow-hidden">
            <img src="/images/shakinh-hands.webp" alt="Assessor Marco Investimentos" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(10,8,6,0.85) 100%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,8,6,0.6) 0%, transparent 50%)" }} />
          </div>

          {/* Right — form */}
          <div className="flex-1 overflow-y-auto">
            <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, transparent, #C2A161, transparent)" }} />

            <button onClick={handleClose} className="absolute right-4 top-4 text-white/40 hover:text-white transition-colors z-20" aria-label="Fechar">
              <X size={18} />
            </button>

            <div className="px-8 py-7">
              {sent ? (
                <div className="flex flex-col items-center text-center py-8 gap-5">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(194,161,97,0.15)", border: "1px solid rgba(194,161,97,0.3)" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#C2A161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-xl mb-2">Mensagem enviada!</h3>
                    <p className="font-body text-white/60 text-sm leading-relaxed">Em breve um de nossos assessores entrará em contato com você.</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-2 w-full font-body font-semibold text-sm py-3.5 rounded-xl transition-all duration-200"
                    style={{ background: "linear-gradient(135deg, #C2A161, #a8884d)", color: "white", boxShadow: "0 4px 20px rgba(194,161,97,0.35)", cursor: "pointer" }}
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-xl font-bold text-white mb-1">Fale conosco:</h2>
                  <div className="h-px w-full mb-5" style={{ background: "linear-gradient(90deg, rgba(194,161,97,0.6), transparent)" }} />

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Nome</label>
                      <input type="text" placeholder="Nome Sobrenome" value={form.nome} onChange={(e) => handleChange("nome", e.target.value)} required className={inputClass} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className={`${labelClass} flex items-center gap-1.5`}><WhatsAppIcon />WhatsApp</label>
                      <input type="tel" placeholder="(99) 99999-9999" value={form.whatsapp} onChange={handlePhone} maxLength={15} required className={inputClass} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Seu melhor e-mail</label>
                      <input type="email" placeholder="seu@email.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} required className={inputClass} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>Escreva a sua mensagem</label>
                      <textarea placeholder="Como podemos ajudar você?" value={form.mensagem} onChange={(e) => handleChange("mensagem", e.target.value)} required rows={4} className={`${inputClass} resize-none`} />
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer group mt-1">
                      <div className="relative mt-0.5 shrink-0">
                        <input type="checkbox" checked={form.comunicacoes} onChange={(e) => handleChange("comunicacoes", e.target.checked)} className="sr-only" />
                        <div className="w-4 h-4 rounded border transition-all duration-200 flex items-center justify-center" style={{ background: form.comunicacoes ? "#C2A161" : "rgba(255,255,255,0.08)", borderColor: form.comunicacoes ? "#C2A161" : "rgba(255,255,255,0.25)" }}>
                          {form.comunicacoes && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          )}
                        </div>
                      </div>
                      <span className="font-body text-xs text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">Eu concordo em receber comunicações.</span>
                    </label>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-2 w-full font-body font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: "linear-gradient(135deg, #C2A161, #a8884d)", color: "white", boxShadow: "0 4px 20px rgba(194,161,97,0.35)", cursor: "pointer" }}
                    >
                      {loading ? "Enviando..." : "Enviar mensagem"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
