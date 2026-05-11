import Header from "@/components/marco/Header";
import Footer from "@/components/marco/Footer";
import CtaFinal from "@/components/marco/CtaFinal";
import CarouselBg from "@/components/marco/CarouselBg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    title: "Câmbio",
    text: "Envio e recebimento de recursos para outros países.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 9l-4 4 4 4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 7l4 4-4 4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 13h18M3 11h18" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Crédito Colateralizado",
    text: "Crédito com investimentos em garantia.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#C9A84C" strokeWidth="1.4" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="#C9A84C" />
      </svg>
    ),
  },
  {
    title: "Derivativos",
    text: "Soluções de proteção de acordo com a necessidade do seu negócio.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L4 7.5V13c0 4.418 3.4 8.535 8 9.5 4.6-.965 8-5.082 8-9.5V7.5L12 3Z" stroke="#C9A84C" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Investments",
    text: "Impulsione o crescimento da sua empresa com nossas soluções de investimento. Estratégias adaptadas aos seus objetivos para retornos sólidos e sustentáveis.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="3,17 9,11 13,14 21,6" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="16,6 21,6 21,11" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="3" y1="21" x2="21" y2="21" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Antecipa",
    text: "Sua solução completa em antecipação de recebíveis. Desde operações de risco sacado a remuneração de caixa.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="#C9A84C" strokeWidth="1.4" />
        <path d="M3 9h18" stroke="#C9A84C" strokeWidth="1.4" />
        <path d="M8 2v4M16 2v4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M8 14h4l-2 3h4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Mercado de Capitais",
    text: "A XP oferece um portfólio completo de serviços e soluções para adequação de estrutura de capital.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="5" y="13" width="4" height="8" stroke="#C9A84C" strokeWidth="1.2" />
        <rect x="10" y="9" width="4" height="12" stroke="#C9A84C" strokeWidth="1.2" />
        <rect x="15" y="5" width="4" height="16" stroke="#C9A84C" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Financiamento Imobiliário",
    text: "Comprar seu imóvel nunca foi tão simples.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5 21V9l7-5 7 5v12" stroke="#C9A84C" strokeWidth="1.4" strokeLinejoin="round" />
        <circle cx="17" cy="15" r="1" fill="#C9A84C" />
        <path d="M17 16v1.5" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" />
        <rect x="9" y="14" width="5" height="7" stroke="#C9A84C" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Home Equity",
    text: "Utilize o valor dos seus imóveis como garantia para obter crédito estratégico. Maximize oportunidades de negócios com o Home Equity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5 21V9l7-5 7 5v12" stroke="#C9A84C" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M12 11v6M10 13h4M10 15.5h3" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Crédito XP",
    text: "Acesso a crédito para apoiar suas estratégias financeiras, sem comprometer seu capital principal.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="20" height="14" rx="2" stroke="#C9A84C" strokeWidth="1.4" />
        <path d="M2 10h20" stroke="#C9A84C" strokeWidth="1.4" />
        <path d="M6 15h4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="17" cy="15" r="1.5" stroke="#C9A84C" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export default function Corporativas() {
  useScrollAnimation();

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative bg-dark-grey pt-40 pb-[120px] overflow-hidden">
        {/* Carousel BG — add image paths below to enable, e.g. "/images/carrossel/Foto 01.webp" */}
        <CarouselBg images={["/images/marco-3.webp"]} />

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-deep to-transparent" />

        <div className="relative z-10 container mx-auto">
          <div className="w-[60px] h-[1px] bg-gold mb-10 animate-fade-in-up" />
          <div className="max-w-[800px]">
            <p className="font-body text-sm tracking-widest uppercase text-gold/70 mb-5 animate-fade-in-up animate-delay-100">
              Soluções · Corporativas
            </p>
            <h1
              className="font-heading font-semibold text-white-soft leading-tight mb-8 animate-fade-in-up animate-delay-150"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", letterSpacing: "-0.02em" }}
            >
              Conte com nossas soluções{" "}
              <span className="text-gold">Corporativas</span> para alavancar
              os resultados da sua empresa.
            </h1>
            <p className="font-body text-lg text-white-soft/70 leading-relaxed max-w-[620px] animate-fade-in-up animate-delay-300">
              Ecossistema completo de produtos, soluções e networking que conecta
              empresas e empreendedores a diversos parceiros financeiros, gestoras
              de recursos e uma ampla gama de serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-black-deep py-[120px]">
        <div className="container mx-auto">
          <div className="w-full h-[1px] bg-gold/20 mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div
                key={product.title}
                data-animate
                className="office-card flex flex-col gap-4 p-8 rounded-2xl cursor-default"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gold/10">
                  {product.icon}
                </div>
                <div>
                  <h3
                    className="font-heading font-semibold text-white-soft mb-2"
                    style={{ fontSize: "1.1rem", letterSpacing: "-0.01em" }}
                  >
                    {product.title}
                  </h3>
                  <p className="font-body text-white-soft/55 text-sm leading-relaxed">
                    {product.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
      <Footer />
    </>
  );
}
