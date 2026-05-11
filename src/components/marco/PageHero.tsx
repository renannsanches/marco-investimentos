interface PageHeroProps {
  children: React.ReactNode;
  /** 0 = sem overlay, 1 = completamente preto. Padrão: 0.55 */
  overlayOpacity?: number;
}

export default function PageHero({ children, overlayOpacity = 0.55 }: PageHeroProps) {
  return (
    <section
      className="relative pt-40 pb-[120px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/marco-building.jpg'), url('/images/marco-2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Overlay preto ajustável */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
      />

      {/* Gradiente na base para transição suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-deep to-transparent" />

      <div className="relative z-10 container mx-auto">
        {children}
      </div>
    </section>
  );
}
