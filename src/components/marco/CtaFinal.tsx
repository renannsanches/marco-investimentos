export default function CtaFinal() {
  return (
    <section className="bg-dark-grey relative py-20 lg:py-24" id="assessores">
      <div className="absolute inset-0 bg-pattern opacity-[0.05]" />
      <div className="relative z-10 container mx-auto">
        <a
          href="#contato"
          data-animate
          className="group flex items-center justify-center gap-4 text-white-soft hover:text-gold transition-colors duration-300"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
        >
          <span className="font-heading font-semibold leading-tight text-center">
            Converse com um de{" "}
            <span className="text-gold">nossos assessores</span>
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
        </a>
      </div>
    </section>
  );
}
