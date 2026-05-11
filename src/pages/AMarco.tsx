import Header from "@/components/marco/Header";
import Footer from "@/components/marco/Footer";
import CtaFinal from "@/components/marco/CtaFinal";
import PageHero from "@/components/marco/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    title: "Foco no cliente",
    text: "Sua Prioridade é a Nossa: Mantemos você no centro de cada ação. Estabelecemos relações sólidas, baseadas na confiança, transformando planos em legados.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="6" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="#C9A84C" />
      </svg>
    ),
  },
  {
    title: "Alinhamento",
    text: "Com o método Marco trazemos maior transparência ao cliente. Valorizamos relações de longo prazo, adequando nossos serviços às suas necessidades.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16H28M10 9L4 16L10 23M22 9L28 16L22 23" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Comprometimento",
    text: "Nos comprometemos com sua jornada, com sua história e ajudamos na construção do seu futuro.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L19.5 12.5L28.5 13.5L22 20L24 29L16 24.5L8 29L10 20L3.5 13.5L12.5 12.5L16 4Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AMarco() {
  useScrollAnimation();

  return (
    <>
      <Header />

      {/* Hero */}
      <PageHero overlayOpacity={0.85}>
        <div className="w-[60px] h-[1px] bg-gold mb-10 animate-fade-in-up" />
        <div className="max-w-[720px]">
          <h1
            className="font-heading font-semibold text-white-soft leading-tight mb-8 animate-fade-in-up animate-delay-150"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", letterSpacing: "-0.02em" }}
          >
            Somos especialistas em{" "}
            <span className="text-gold">credibilidade e confiança</span>
          </h1>
          <p className="font-body text-lg text-white-soft/70 leading-relaxed max-w-[560px] animate-fade-in-up animate-delay-300">
            Somos o maior escritório de investimentos do interior do Brasil.
            Isso se deve ao nosso modelo <strong className="text-white-soft">MARCO</strong> de
            atendimento, que coloca o cliente em primeiro lugar e elimina qualquer conflito de interesse.
          </p>
        </div>
      </PageHero>

      {/* Pillars */}
      <section className="bg-black-deep py-[120px]">
        <div className="container mx-auto">
          <div className="w-full h-[1px] bg-gold/20 mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                data-animate
                className="flex flex-col gap-6 p-8 lg:p-10 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10">
                  {pillar.icon}
                </div>
                <div>
                  <h3
                    className="font-heading font-semibold text-white-soft mb-3"
                    style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", letterSpacing: "-0.01em" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="font-body text-white-soft/60 text-base leading-relaxed">
                    {pillar.text}
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
