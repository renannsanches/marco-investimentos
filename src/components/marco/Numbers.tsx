import { useCountUp } from "@/hooks/useCountUp";

function StatItem({ end, prefix = "", suffix = "", label }: { end: number; prefix?: string; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center py-6">
      <div className="font-heading font-semibold text-dark-grey" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
        {prefix}{count.toLocaleString("pt-BR")}{suffix}
      </div>
      <div className="font-body text-dark-grey/75 mt-1 text-sm">{label}</div>
    </div>
  );
}

export default function Numbers() {
  return (
    <section className="bg-gold py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatItem end={10000} prefix="+" label="Clientes satisfeitos" />
        <StatItem end={2} prefix="+" suffix=" bilhões" label="de reais sob custódia" />
        <StatItem end={5} label="Sedes" />
        <StatItem end={52} label="Assessores" />
      </div>
    </section>
  );
}
