export default function ClientSection() {
  return (
    <section className="bg-dark-grey relative py-24 lg:py-32" id="solucoes">
      {/* Pattern bg */}
      <div className="absolute inset-0 bg-pattern opacity-[0.05]" />

      <div className="relative z-10 container mx-auto max-w-[720px] text-center">
        <h2
          data-animate
          className="font-heading font-semibold text-white-soft leading-tight mb-8"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          <span className="font-body italic text-gold">"Você"</span> é a razão por trás
          <br />
          de todo o nosso trabalho
        </h2>

        <a
          href="#solucoes"
          data-animate
          className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-wider text-gold border-b border-gold/40 pb-1 hover:gap-3 transition-all duration-200 group"
        >
          conheça nossas soluções
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
