export default function CtaFinal() {
  return (
    <section className="bg-dark-grey relative py-[120px]" id="assessores">
      <div className="absolute inset-0 bg-pattern opacity-[0.05]" />
      <div className="relative z-10 container mx-auto">
        {/* Gold separator */}
        <div className="w-full h-[1px] bg-gold/30 mb-16" />
        <a
          href="#contato"
          data-animate
          className="group flex items-center justify-center gap-4 text-white-soft hover:text-gold transition-colors duration-[250ms] ease"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
        >
          <span className="font-heading font-semibold leading-tight text-center" style={{ letterSpacing: "-0.02em" }}>
            Converse com um de{" "}
            <span className="text-gold">nossos assessores</span>
          </span>
          <span className="transition-transform duration-[250ms] ease group-hover:translate-x-2">→</span>
        </a>
      </div>
    </section>
  );
}
