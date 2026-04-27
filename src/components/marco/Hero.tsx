export default function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector("#sobre");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden" id="inicio">
      {/* YouTube video background */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-screen min-w-[177.78vh]"
          src="https://www.youtube.com/embed/F5UusvAJ1w8?autoplay=1&mute=1&loop=1&playlist=F5UusvAJ1w8&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          title="Marco Investimentos"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Mobile fallback bg */}
      <div className="absolute inset-0 z-0 bg-dark-grey md:hidden" />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black-deep/[0.72]" />

      {/* Bottom gradient blending into next section */}
      <div className="hero-bottom-gradient absolute bottom-0 left-0 right-0 z-[2] h-48 pointer-events-none" />

      {/* Content — left-aligned, single column, max-width 680px */}
      <div className="relative z-[3] container mx-auto py-40 md:py-0">
        <div className="max-w-[680px]">
          <p className="font-body text-sm tracking-widest uppercase text-oatmeal mb-6 animate-fade-in-up">
            Consultório Financeiro · Parceiro XP Investimentos
          </p>

          <h1 className="font-heading font-semibold text-white-soft leading-tight mb-6 animate-fade-in-up animate-delay-150"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", letterSpacing: "-0.02em" }}>
            O nosso DNA é<br />
            cuidar do seu<br />
            <span className="text-gold">patrimônio</span>
          </h1>

          <p className="font-body text-lg text-white-soft/80 max-w-md mb-10 animate-fade-in-up animate-delay-300">
            Oferecendo um serviço transparente<br />
            e alinhado aos seus interesses.
          </p>

          <a
            href="#contato"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-block font-body font-semibold text-xs uppercase tracking-widest border border-gold text-gold px-8 py-3 rounded-[4px] hover:bg-gold hover:text-dark-grey transition-all duration-[250ms] ease animate-fade-in-up animate-delay-450"
          >
            Abrir uma conta
          </a>

          <button
            onClick={scrollToAbout}
            className="block mt-16 text-oatmeal/60 hover:text-gold transition-colors duration-[250ms] ease text-sm font-body animate-fade-in-up animate-delay-450"
          >
            ↓ Conheça a Marco
          </button>
        </div>
      </div>
    </section>
  );
}
