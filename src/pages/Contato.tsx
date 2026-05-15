import { useState } from "react";
import Header from "@/components/marco/Header";
import Footer from "@/components/marco/Footer";
import CarouselBg from "@/components/marco/CarouselBg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRDStation } from "@/hooks/useRDStation";
import { SEO } from "@/components/SEO";

function applyPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 font-body text-sm text-white-soft placeholder:text-white/30 outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/40 transition-all duration-200";

const labelClass = "font-body text-xs text-white-soft/50 uppercase tracking-wider";

function CheckIcon() {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Contato() {
  useScrollAnimation();
  const { submit, loading } = useRDStation();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    celular: "",
    mensagem: "",
    comunicacoes: false,
  });
  const [sent, setSent] = useState(false);

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange("celular", applyPhoneMask(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ok = await submit({
      identifier: "site-pagina-contato",   // aparece assim no RD Marketing
      name: form.nome,
      email: form.email,
      mobile_phone: form.celular,
      cf_mensagem: form.mensagem,
      cf_aceita_comunicacoes: form.comunicacoes ? "sim" : "nao",
    });

    if (ok) setSent(true);
  };

  return (
    <>
      <SEO
        title="Fale com Nossos Assessores | Marco Investimentos Joinville"
        description="Entre em contato com a Marco Investimentos em Joinville, SC. WhatsApp, e-mail e escritórios disponíveis para você."
        canonical="/contato"
      />
      <Header />

      {/* Hero */}
      <section className="relative bg-dark-grey pt-40 pb-[100px] overflow-hidden">
        <CarouselBg images={["/images/marco-1.webp"]} />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-deep to-transparent" />
        <div className="relative z-10 container mx-auto">
          <div className="w-[60px] h-[1px] bg-gold mb-10 animate-fade-in-up" />
          <div className="max-w-[620px]">
            <h1
              className="font-heading font-semibold text-white-soft leading-tight mb-6 animate-fade-in-up animate-delay-150"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", letterSpacing: "-0.02em" }}
            >
              Fale com a <span className="text-gold">Marco</span>
            </h1>
            <p className="font-body text-lg text-white-soft/70 leading-relaxed animate-fade-in-up animate-delay-300">
              Preencha o formulário e um de nossos assessores entrará em contato em breve.
            </p>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-black-deep py-[120px]" id="contato">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            {/* Left — info */}
            <div data-animate className="flex flex-col gap-10">
              <div className="w-full h-[1px] bg-gold/20" />

              <div className="flex flex-col gap-8">
                {[
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M21 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.06 2.82 2 2 0 012.05 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121 16.92z" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                    label: "WhatsApp",
                    value: "(47) 99254-7654",
                    href: "https://api.whatsapp.com/send?phone=5547992547654",
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="22,6 12,13 2,6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                    label: "E-mail",
                    value: "contato@marcoinvestimentos.com.br",
                    href: "mailto:contato@marcoinvestimentos.com.br",
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="10" r="3" stroke="#C9A84C" strokeWidth="1.5" />
                      </svg>
                    ),
                    label: "Sede",
                    value: "Joinville, SC — Brasil",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gold/10 shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <p className="font-body text-xs text-white-soft/40 uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-body text-white-soft/80 hover:text-gold transition-colors duration-200 text-sm">{item.value}</a>
                      ) : (
                        <p className="font-body text-white-soft/80 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-7 mt-4" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                <p className="font-heading text-white-soft/80 leading-relaxed" style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                  "Sua jornada financeira começa com uma conversa. Estamos aqui para ouvir e transformar seus objetivos em realidade."
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-6 h-[1px] bg-gold/50" />
                  <span className="font-body text-gold/70 text-xs uppercase tracking-widest">Marco Investimentos</span>
                </div>
              </div>
            </div>

            {/* Right — form card */}
            <div data-animate style={{ transitionDelay: "120ms" }}>
              <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
                <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

                <div className="p-8 lg:p-10">
                  {sent ? (
                    <div className="flex flex-col items-center text-center py-10 gap-6">
                      <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-white-soft text-xl mb-2">Mensagem enviada!</h3>
                        <p className="font-body text-white-soft/60 text-sm leading-relaxed">Em breve um de nossos assessores entrará em contato com você.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => { setSent(false); setForm({ nome: "", email: "", celular: "", mensagem: "", comunicacoes: false }); }}
                        className="font-body text-sm text-gold/70 hover:text-gold transition-colors duration-200 underline underline-offset-4"
                      >
                        Enviar outra mensagem
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <label className={labelClass}>Nome</label>
                        <input type="text" placeholder="Nome Sobrenome" value={form.nome} onChange={(e) => handleChange("nome", e.target.value)} required className={inputClass} />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className={labelClass}>E-mail</label>
                        <input type="email" placeholder="seu@email.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} required className={inputClass} />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className={labelClass}>Celular / WhatsApp</label>
                        <input type="tel" placeholder="(47) 99999-9999" value={form.celular} onChange={handlePhone} maxLength={15} required className={inputClass} />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className={labelClass}>Mensagem</label>
                        <textarea placeholder="Como podemos ajudar você?" value={form.mensagem} onChange={(e) => handleChange("mensagem", e.target.value)} required rows={5} className={`${inputClass} resize-none`} />
                      </div>

                      <label className="flex items-start gap-3 cursor-pointer group mt-1">
                        <div className="relative mt-0.5 shrink-0">
                          <input type="checkbox" checked={form.comunicacoes} onChange={(e) => handleChange("comunicacoes", e.target.checked)} className="sr-only" />
                          <div className="w-4 h-4 rounded border transition-all duration-200 flex items-center justify-center" style={{ background: form.comunicacoes ? "#C9A84C" : "rgba(255,255,255,0.06)", borderColor: form.comunicacoes ? "#C9A84C" : "rgba(255,255,255,0.20)" }}>
                            {form.comunicacoes && <CheckIcon />}
                          </div>
                        </div>
                        <span className="font-body text-xs text-white-soft/45 leading-relaxed group-hover:text-white-soft/65 transition-colors">Eu concordo em receber comunicações.</span>
                      </label>

                      <button
                        type="submit"
                        disabled={loading}
                        className="mt-1 w-full font-body font-semibold text-sm py-4 rounded-xl transition-all duration-200 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ background: "linear-gradient(135deg, #C9A84C, #a8884d)", color: "white", boxShadow: "0 4px 24px rgba(201,168,76,0.30)" }}
                      >
                        {loading ? "Enviando..." : "Enviar mensagem"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
