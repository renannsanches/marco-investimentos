import { useState, useRef } from "react";
import { Paperclip, Upload } from "lucide-react";
import Header from "@/components/marco/Header";
import Footer from "@/components/marco/Footer";
import PageHero from "@/components/marco/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SEO } from "@/components/SEO";

const CUSTODIA_OPTIONS = [
  "0M → 10M",
  "10M → 25M",
  "25M → 50M",
  "50M → 100M",
  "100M+",
];

function applyPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

function CheckIcon({ checked }: { checked: boolean }) {
  return (
    <div
      className="w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all duration-200"
      style={{
        background: checked ? "#C2A161" : "rgba(255,255,255,0.08)",
        borderColor: checked ? "#C2A161" : "rgba(255,255,255,0.25)",
      }}
    >
      {checked && (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

export default function Carreiras() {
  useScrollAnimation();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    celular: "",
    custodia: "",
    mensagem: "",
    comunicacoes: false,
  });

  const set = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    set("celular", applyPhoneMask(e.target.value));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Carreiras form submitted:", form, fileName);
  };

  const inputClass =
    "w-full bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-[#C2A161]/60 focus:border-[#C2A161]/50 transition";

  const selectClass =
    "w-full appearance-none bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-3 font-body text-sm text-white outline-none focus:ring-2 focus:ring-[#C2A161]/60 focus:border-[#C2A161]/50 transition cursor-pointer";

  const labelClass = "font-body text-xs text-white/50 uppercase tracking-wider";

  return (
    <>
      <style>{`
        .carreiras-select option {
          background-color: #1a1a1a;
          color: white;
        }
        .carreiras-select option:disabled {
          color: rgba(255,255,255,0.35);
        }
      `}</style>

      <SEO
        title="Trabalhe Conosco | Marco Investimentos Joinville"
        description="Faça parte da Marco Investimentos em Joinville, SC. Oportunidades para assessores e profissionais do mercado financeiro."
        canonical="/sobre/carreiras"
      />
      <Header />

      {/* Hero */}
      <PageHero overlayOpacity={0.85}>
        <div className="w-[60px] h-[1px] bg-gold mb-10 animate-fade-in-up" />
        <div className="max-w-[700px]">
          <h1
            className="font-heading font-semibold text-white-soft leading-tight mb-6 animate-fade-in-up animate-delay-150"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            Seu próximo passo em direção a um{" "}
            <span className="text-gold">futuro de sucesso!</span>
          </h1>
        </div>
      </PageHero>

      {/* Form section */}
      <section className="bg-black-deep py-[100px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left — pitch */}
            <div data-animate className="flex flex-col gap-8">
              <p className="font-body text-lg text-white-soft/70 leading-relaxed">
                Aqui, o potencial de crescimento é incomparável. Somos o maior escritório com o melhor
                modelo de remuneração <strong className="text-white-soft">(Fee Based)</strong>, totalmente
                alinhado com as necessidades dos nossos clientes.
              </p>
              <p className="font-body text-base text-white-soft/55 leading-relaxed">
                Não somos apenas um escritório; formamos um time de improváveis, vindo de diversos
                backgrounds, que alcançaram o sucesso ao desbravar o mercado financeiro. Se você é um
                assessor de investimentos e tem o nosso DNA, junte-se a nós para construir um futuro
                marcante.
              </p>

              <div className="w-full h-[1px] bg-gold/15" />

              <div className="flex flex-col gap-3">
                <p className="font-heading font-semibold text-white-soft/80 text-sm uppercase tracking-widest">
                  Digite seus dados e sua mensagem abaixo.
                </p>
                <p className="font-body text-xs text-white-soft/40 leading-relaxed max-w-sm">
                  Seus dados não serão utilizados para envio de qualquer tipo de SPAM. Ao prosseguir, você
                  declara ter lido e estar ciente das condições de tratamento dos seus dados e do seu
                  consentimento conforme descrito em nossa{" "}
                  <a
                    href="#"
                    className="text-gold/70 underline underline-offset-2 hover:text-gold transition-colors"
                  >
                    política de privacidade
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div data-animate style={{ transitionDelay: "120ms" }}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Nome */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Nome</label>
                  <input
                    type="text"
                    placeholder="Nome Sobrenome"
                    value={form.nome}
                    onChange={(e) => set("nome", e.target.value)}
                    required
                    className={inputClass}
                  />
                </div>

                {/* E-mail */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Celular */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Celular / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(99) 99999-9999"
                    value={form.celular}
                    onChange={handlePhone}
                    maxLength={15}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Volume de custódia */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Volume de custódia</label>
                  <div className="relative">
                    <select
                      value={form.custodia}
                      onChange={(e) => set("custodia", e.target.value)}
                      required
                      className={`${selectClass} carreiras-select`}
                    >
                      <option value="" disabled>Selecione...</option>
                      {CUSTODIA_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35 text-lg">
                      ›
                    </span>
                  </div>
                </div>

                {/* Mensagem */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Mensagem</label>
                  <textarea
                    placeholder="É hora de se destacar, escreva algo importante."
                    value={form.mensagem}
                    onChange={(e) => set("mensagem", e.target.value)}
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Upload de arquivo */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Currículo</label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFile}
                    className="sr-only"
                    aria-label="Carregar arquivo"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-3 w-full bg-white/[0.06] border border-white/[0.12] border-dashed rounded-xl px-4 py-3 font-body text-sm transition hover:border-gold/40 hover:bg-white/[0.09] group"
                  >
                    {fileName ? (
                      <>
                        <Paperclip size={16} className="text-gold shrink-0" />
                        <span className="text-white/70 truncate">{fileName}</span>
                      </>
                    ) : (
                      <>
                        <Upload size={16} className="text-white/35 shrink-0 group-hover:text-gold transition-colors" />
                        <span className="text-white/35 group-hover:text-white/55 transition-colors">
                          Carregar arquivo (PDF, DOC)
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group mt-1">
                  <div className="mt-0.5">
                    <input
                      type="checkbox"
                      checked={form.comunicacoes}
                      onChange={(e) => set("comunicacoes", e.target.checked)}
                      className="sr-only"
                    />
                    <CheckIcon checked={form.comunicacoes} />
                  </div>
                  <span className="font-body text-xs text-white/45 leading-relaxed group-hover:text-white/65 transition-colors">
                    Eu concordo em receber comunicações.
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-1 w-full font-body font-semibold text-sm py-4 rounded-xl transition-all duration-200 hover:brightness-110"
                  style={{
                    background: "linear-gradient(135deg, #C2A161, #a8884d)",
                    color: "white",
                    boxShadow: "0 4px 24px rgba(194,161,97,0.30)",
                  }}
                >
                  Enviar Mensagem
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
