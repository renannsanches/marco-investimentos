import { useState } from "react";
import { X } from "lucide-react";

interface InvestModalProps {
  open: boolean;
  onClose: () => void;
}

const INVESTMENT_OPTIONS = [
  "0 a R$300 mil",
  "R$300 mil a R$1 milhão",
  "R$1 milhão a R$10 milhões",
  "acima de R$10 milhões",
];

const CONTACT_OPTIONS = ["Whatsapp", "Email", "Telefone"];

export default function InvestModal({ open, onClose }: InvestModalProps) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    investimento: "",
    contato: "",
  });

  if (!open) return null;

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com backend/CRM
    console.log("Form submitted:", form);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-dark-grey/50 hover:text-dark-grey transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="px-8 py-8">
          <h2 className="font-heading text-xl font-bold text-dark-grey mb-6">
            Quero Investir
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Nome */}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-sm text-dark-grey/80">
                Seu nome
              </label>
              <input
                type="text"
                placeholder="Nome Sobrenome"
                value={form.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                required
                className="w-full bg-gray-100 rounded-xl px-4 py-3 font-body text-sm text-dark-grey placeholder:text-dark-grey/40 outline-none focus:ring-2 focus:ring-gold/60 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-sm text-dark-grey/80">
                Email
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="w-full bg-gray-100 rounded-xl px-4 py-3 font-body text-sm text-dark-grey placeholder:text-dark-grey/40 outline-none focus:ring-2 focus:ring-gold/60 transition"
              />
            </div>

            {/* Telefone */}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-sm text-dark-grey/80">
                Seu telefone/whatsapp
              </label>
              <input
                type="tel"
                placeholder="(00) 00000 0000"
                value={form.telefone}
                onChange={(e) => handleChange("telefone", e.target.value)}
                required
                className="w-full bg-gray-100 rounded-xl px-4 py-3 font-body text-sm text-dark-grey placeholder:text-dark-grey/40 outline-none focus:ring-2 focus:ring-gold/60 transition"
              />
            </div>

            {/* Investimento */}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-sm text-dark-grey/80">
                Quanto você tem disponível para investir (ou já investido)?
              </label>
              <div className="relative">
                <select
                  value={form.investimento}
                  onChange={(e) => handleChange("investimento", e.target.value)}
                  required
                  className="w-full appearance-none bg-gray-100 rounded-xl px-4 py-3 font-body text-sm text-dark-grey outline-none focus:ring-2 focus:ring-gold/60 transition cursor-pointer"
                >
                  <option value="" disabled>
                    Selecione...
                  </option>
                  {INVESTMENT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dark-grey/50">
                  ›
                </span>
              </div>
            </div>

            {/* Canal de contato */}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-sm text-dark-grey/80">
                Por onde prefere receber o contato?
              </label>
              <div className="relative">
                <select
                  value={form.contato}
                  onChange={(e) => handleChange("contato", e.target.value)}
                  required
                  className="w-full appearance-none bg-gray-100 rounded-xl px-4 py-3 font-body text-sm text-dark-grey outline-none focus:ring-2 focus:ring-gold/60 transition cursor-pointer"
                >
                  <option value="" disabled>
                    Selecione...
                  </option>
                  {CONTACT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dark-grey/50">
                  ›
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-1 w-full bg-dark-grey text-white font-body font-semibold text-sm py-3.5 rounded-xl hover:brightness-110 transition-all duration-200"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
