import Header from "@/components/marco/Header";
import Footer from "@/components/marco/Footer";
import CtaFinal from "@/components/marco/CtaFinal";
import CarouselBg from "@/components/marco/CarouselBg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SEO } from "@/components/SEO";

const objectives = [
  {
    title: "Proteger",
    subtitle: "Estratégias para fortalecer sua segurança financeira",
    text: "Liquidez para manutenção do padrão de vida e atendimento a necessidades cotidianas.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3L5 7.5V15c0 6.075 4.675 11.725 11 13 6.325-1.275 11-6.925 11-13V7.5L16 3Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 16l3.5 3.5L21 12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Rentabilizar",
    subtitle: "Crescimento consistente dos investimentos",
    text: "Evolução financeira por meio de estratégias alinhadas aos seus objetivos.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="4,24 12,14 18,19 28,8" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,8 28,8 28,14" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4" y1="28" x2="28" y2="28" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Perpetuar",
    subtitle: "Geração de renda passiva sustentável",
    text: "Estratégias para geração de renda passiva, permitindo que os rendimentos sustentem o padrão de vida sem comprometer o capital principal.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 16C7 11.029 11.029 7 16 7c3.182 0 5.978 1.57 7.702 3.976" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M25 16c0 4.971-4.029 9-9 9-3.182 0-5.978-1.57-7.702-3.976" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="20,7 23.702,10.976 27,8" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="12,25 8.298,21.024 5,24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const products = [
  {
    title: "Renda Fixa",
    text: "Os melhores investimentos de Renda Fixa com Taxa Zero você só encontra na XP. Diversifique sua carteira com segurança e garanta a liquidez do seu patrimônio.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="#C9A84C" strokeWidth="1.4" />
        <path d="M3 10h18" stroke="#C9A84C" strokeWidth="1.4" />
        <path d="M7 15h4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ações",
    text: "Investir em Ações torna você um sócio da empresa. Saiba como nossos Experts e plataformas te potencializam a comprar ações de destaque no mercado.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="3,17 9,11 13,14 21,6" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="16,6 21,6 21,11" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="3" y1="21" x2="21" y2="21" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fundos de Investimento",
    text: "Aplicando em Fundos de Investimento seus recursos são administrados por gestores profissionais. Diversifique sua carteira com praticidade e simplicidade.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#C9A84C" strokeWidth="1.4" />
        <path d="M12 3v9l6 3.5" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Agro",
    text: "Soluções para produtores, cooperativas e negociantes se protegerem da oscilação de preços das commodities. Para exportadores, opções de hedge cambial.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22V12" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 12C12 12 7 10 5 5c4 0 7 3 7 7Z" stroke="#C9A84C" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(201,168,76,0.1)" />
        <path d="M12 12C12 12 17 9 19 4c-4.5 0.5-7 4-7 8Z" stroke="#C9A84C" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(201,168,76,0.1)" />
        <path d="M6 18h12" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ofertas Públicas",
    text: "Você pode investir nas empresas que estão estreando na Bolsa de Valores através do IPO, a Oferta Pública Inicial, ou Oferta Pública de Ações.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="10" width="18" height="11" rx="1" stroke="#C9A84C" strokeWidth="1.4" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1.5" stroke="#C9A84C" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Fundos Imobiliários",
    text: "Investindo em FIIs você investe em imóveis e recebe \"aluguéis mensais\" na bolsa, sem preocupações com burocracias.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5 21V9l7-5 7 5v12" stroke="#C9A84C" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" stroke="#C9A84C" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Previdência Privada",
    text: "Com a Previdência Privada você investe planejando seu futuro e o de quem você ama. Conheça nossos planos PGBL e VGBL.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C9.5 5.5 4 7 4 12a8 8 0 0 0 16 0c0-5-5.5-6.5-8-10Z" stroke="#C9A84C" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M12 22V12" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 15l3-3 3 3" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Private",
    text: "Assessoria de investimentos com foco na preservação e aumento do patrimônio. Acesso a fundos de investimento exclusivos pela área Privata da XP.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.5 7.1 17.2l.9-5.5-4-3.9 5.5-.8L12 2Z" stroke="#C9A84C" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Futuros",
    text: "Quer negociar Ativos, como Índices e Dólar, com alta liquidez e alavancagem? Invista no mercado futuro com a XP.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12h14" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M13 6l6 6-6 6" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 6v12" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

export default function Investimentos() {
  useScrollAnimation();

  return (
    <>
      <SEO
        title="Soluções em Investimentos Joinville | XP Investimentos"
        description="Renda Fixa, Ações, Fundos, FII e Previdência Privada em Joinville. Assessoria de investimentos fee based com a Marco XP Investimentos."
        canonical="/solucoes/investimentos"
      />
      <Header />

      {/* Hero */}
      <section className="relative bg-dark-grey pt-40 pb-[120px] overflow-hidden">
        {/* Carousel BG — add image paths below to enable, e.g. "/images/carrossel/Foto 01.webp" */}
        <CarouselBg images={["/images/marco-3.webp"]} />

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-deep to-transparent" />

        <div className="relative z-10 container mx-auto">
          <div className="w-[60px] h-[1px] bg-gold mb-10 animate-fade-in-up" />
          <div className="max-w-[760px]">
            <p className="font-body text-sm tracking-widest uppercase text-gold/70 mb-5 animate-fade-in-up animate-delay-100">
              Soluções · Investimentos
            </p>
            <h1
              className="font-heading font-semibold text-white-soft leading-tight mb-8 animate-fade-in-up animate-delay-150"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", letterSpacing: "-0.02em" }}
            >
              Somos referência em{" "}
              <span className="text-gold">investimentos</span>
            </h1>
            <p className="font-body text-lg text-white-soft/70 leading-relaxed max-w-[580px] animate-fade-in-up animate-delay-300">
              Na <strong className="text-white-soft">MARCO</strong> Investimentos ajudamos você nas decisões
              relacionadas aos seus investimentos, sempre de acordo com seus objetivos e perfil.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives: Proteger, Rentabilizar, Perpetuar */}
      <section className="bg-black-deep py-[120px]">
        <div className="container mx-auto">
          <div className="w-full h-[1px] bg-gold/20 mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {objectives.map((obj, i) => (
              <div
                key={obj.title}
                data-animate
                className="flex flex-col gap-6 p-8 lg:p-10 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10">
                  {obj.icon}
                </div>
                <div>
                  <h3
                    className="font-heading font-semibold text-white-soft mb-1"
                    style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", letterSpacing: "-0.01em" }}
                  >
                    {obj.title}
                  </h3>
                  <p className="font-body text-gold/80 text-sm mb-3">{obj.subtitle}</p>
                  <p className="font-body text-white-soft/60 text-base leading-relaxed">
                    {obj.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEE FIXO Banner */}
      <section className="bg-dark-grey relative py-[100px] overflow-hidden">

        <div className="relative z-10 container mx-auto">
          <div className="max-w-[640px]" data-animate>
            <span className="inline-block font-body text-xs tracking-[0.2em] uppercase text-gold border border-gold/40 px-4 py-1.5 rounded-full mb-6">
              Fee Fixo
            </span>
            <h2
              className="font-heading font-semibold text-white-soft leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Investimentos
            </h2>
            <p className="font-body text-lg text-white-soft/70 leading-relaxed">
              Somos pioneiros em assessoria e temos tudo em um só lugar.
              Conheça todos os nossos produtos.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-black-deep py-[120px]">
        <div className="container mx-auto">
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
