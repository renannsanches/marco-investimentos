export default function ClientSection() {
  return (
    <section className="bg-dark-grey relative py-[120px]" id="solucoes">
      {/* Pattern bg */}
      <div className="absolute inset-0 bg-pattern opacity-[0.05]" />

      <div className="relative z-10 container mx-auto max-w-[720px] text-center px-4">
        <h2
          data-animate
          className="font-heading font-semibold text-white-soft leading-tight mb-8"
          style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
        >
          <span className="font-body italic text-gold">"Você"</span> é a razão por trás
          <br />
          de todo o nosso trabalho
        </h2>

        <a
          href="#solucoes"
          data-animate
          className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-wider text-gold border-b border-gold/40 pb-1 hover:gap-3 transition-all duration-[250ms] ease group"
        >
          conheça nossas soluções
          <span className="transition-transform duration-[250ms] ease group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
