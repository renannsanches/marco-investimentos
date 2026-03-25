export default function Credibility() {
  return (
    <section className="bg-palladian py-[120px]" id="sobre">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div data-animate>
          <div className="w-[60px] h-[1px] bg-gold mb-8" />
          <h2 className="font-heading font-semibold text-dark-grey leading-tight mb-6"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            Somos especialistas em{" "}
            <span className="text-gold">credibilidade e confiança</span>
          </h2>
          <p className="font-body text-dark-grey/80 text-lg leading-relaxed max-w-lg">
            Somos o maior escritório de investimentos do interior do Brasil, isso se deve ao nosso modelo MARCO de
            atendimento, que coloca o cliente em primeiro lugar e elimina qualquer conflito de interesse.
          </p>
        </div>

        {/* Image placeholder — max 400px, centered */}
        <div data-animate className="flex items-center justify-center">
          <div className="w-full max-w-[400px] aspect-[4/5] bg-oatmeal rounded-[4px] relative">
            {/* Decorative element */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-gold rounded-[2px] opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
