import { useCountUp } from "@/hooks/useCountUp";

function SmallStat({ end, prefix = "", suffix = "", label }: { end: number; prefix?: string; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-heading font-semibold text-dark-grey" style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
        {prefix}{count.toLocaleString("pt-BR")}{suffix}
      </div>
      <div className="font-body text-dark-grey/60 text-base mt-1">{label}</div>
    </div>
  );
}

function BigStat({ end, prefix = "", suffix = "", label }: { end: number; prefix?: string; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-heading font-bold text-dark-grey" style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
        {prefix}{count.toLocaleString("pt-BR")}{suffix}
      </div>
      <div className="font-body text-dark-grey/60 text-base mt-2">{label}</div>
    </div>
  );
}

// Simple SVG chart
function MiniChart() {
  const points = [0, 18, 10, 28, 20, 32, 24, 38, 30, 50, 35, 44, 42, 60, 50, 55, 58, 72, 65, 68, 75, 90, 80, 85, 90, 100];
  const w = 300, h = 100;
  const pts = points.reduce((acc, v, i) => {
    if (i % 2 === 0) return acc;
    const x = (points[i - 1] / 100) * w;
    const y = h - (v / 100) * h;
    return acc + `${x},${y} `;
  }, "");

  const areaPoints = `0,${h} ` + pts + `${w},${h}`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-xs" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill="url(#chartGrad)" />
      <polyline points={pts} fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export default function Numbers() {
  return (
    <section className="relative py-20" id="numeros" style={{ backgroundImage: "url('/images/bg-white-ruido.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Overlay ajustável — mude a opacidade em rgba() para controlar a intensidade */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(255, 255, 255, 0.55)" }} />
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <h2
              className="font-heading font-bold text-dark-grey leading-tight"
              style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Resultados que<br />falam por si
            </h2>
            <p className="font-body text-dark-grey/65 text-base max-w-sm leading-relaxed">
              Mais de 10 anos de experiência, +R$2 bilhões sob custódia, 52 assessores dedicados e clientes em todo o Brasil.
            </p>
            <div>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 font-body font-medium text-sm bg-dark-grey text-white px-5 py-3 rounded-full hover:bg-[#C9A84C] hover:text-dark-grey transition-colors"
              >
                Fale com um assessor <span>›</span>
              </a>
            </div>
            <div className="mt-1">
              <MiniChart />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-10">
            {/* Big stat */}
            <div className="border-b border-dark-grey/15 pb-8">
              <BigStat end={2} prefix="+R$" suffix="B" label="Mais de R$ 2 Bilhões de reais sob custódia" />
            </div>

            {/* Small stats grid */}
            <div className="grid grid-cols-2 gap-8">
              <SmallStat end={10000} prefix="+" label="Clientes satisfeitos" />
              <SmallStat end={52} label="Assessores" />
              <SmallStat end={5} label="Sedes" />
              <SmallStat end={10} prefix="+" suffix=" anos" label="de experiência" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
