import { useCountUp } from "@/hooks/useCountUp";

function SmallStat({ end, prefix = "", suffix = "", label }: { end: number; prefix?: string; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-heading font-semibold text-white-soft numbers-stat-value">
        {prefix}{count.toLocaleString("pt-BR")}{suffix}
      </div>
      <div className="font-body text-white-soft/50 text-base mt-1">{label}</div>
    </div>
  );
}

function BigStat({ end, prefix = "", suffix = "", label }: { end: number; prefix?: string; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-heading font-bold text-white-soft numbers-bigstat-value">
        {prefix}{count.toLocaleString("pt-BR")}{suffix}
      </div>
      <div className="font-body text-white-soft/50 text-base mt-2">{label}</div>
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
    <section className="relative py-20 numbers-section" id="numeros">
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <h2 className="font-heading font-bold text-white-soft numbers-heading leading-tight">
              Resultados que<br />falam por si
            </h2>
            <p className="font-body text-white-soft/60 text-base max-w-sm leading-relaxed">
              Mais de 10 anos de experiência, +R$2 bilhões sob custódia, 52 assessores dedicados e clientes em todo o Brasil.
            </p>
            <div>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 font-body font-medium text-sm bg-gold text-dark-grey px-5 py-3 rounded-full hover:bg-white-soft hover:text-dark-grey transition-colors"
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
            <div className="border-b border-white/10 pb-8">
              <BigStat end={3} prefix="+R$" suffix="B" label="Mais de R$ 2 Bilhões de reais sob custódia" />
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
