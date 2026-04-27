export default function Credibility() {
  return (
    <section className="relative py-[120px] overflow-hidden" id="sobre">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Joinville.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto flex items-center justify-center lg:justify-start px-4">
        <div
          className="w-full max-w-[560px] rounded-2xl p-10 lg:p-14"
          style={{
            background: "rgba(20, 20, 20, 0.55)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          data-animate
        >
          <div className="w-[60px] h-[1px] bg-gold mb-8" />

          <h2
            className="font-heading font-semibold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
          >
            Somos especialistas em{" "}
            <span className="text-gold">credibilidade e confiança</span>
          </h2>

          <p className="font-body text-white/75 text-lg leading-relaxed mb-8">
            Somos o maior escritório de investimentos do interior do Brasil, isso se deve ao nosso modelo{" "}
            <strong className="text-white">MARCO</strong> de atendimento, que coloca o cliente em primeiro lugar e
            elimina qualquer conflito de interesse.
          </p>

          <button className="px-8 py-3 bg-gold text-black font-body font-semibold text-base rounded-[4px] hover:bg-gold/85 transition-colors">
            Falar com um especialista
          </button>
        </div>
      </div>
    </section>
  );
}