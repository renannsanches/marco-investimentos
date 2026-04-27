import type React from "react";

export default function ClientSection() {
  const images = [
    "/images/carrossel-1.webp",
    "/images/carrossel-2.webp",
    "/images/carrossel-3.webp",
  ];

  return (
    <section className="relative py-[120px] overflow-hidden" id="solucoes">
      {/* Imagens empilhadas com crossfade */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 cf-img-${i + 1} client-bg-slide`}
          style={{ "--slide-bg-url": `url('${src}')` } as React.CSSProperties}
        />
      ))}

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto max-w-[720px] text-center px-4">
        {/* Glass box */}
        <div
  className="rounded-2xl px-10 py-14 lg:px-16"
  style={{
    background: "rgba(15, 15, 15, 0.30)", /* ← só mudar o último número */
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
  }}
>
          <h2
            data-animate
            className="font-heading font-semibold text-white leading-tight mb-8 client-heading"
          >
            <span className="font-body italic text-gold">"Você"</span> é a razão por trás
            <br />
            de todo o nosso trabalho
          </h2>

          <a
            href="#solucoes"
            data-animate
            className="inline-flex items-center gap-2 font-body font-semibold text-sm text-white bg-gold rounded-full px-8 py-3 hover:brightness-110 transition-all duration-[250ms] ease group"
          >
            conheça nossas soluções
            <span className="transition-transform duration-[250ms] ease group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}