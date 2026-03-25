import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Cliente",
    text: "Na Marco o cliente é o ponto central.",
  },
  {
    num: "02",
    title: "Assessor",
    text: "O assessor é a ponte que conecta você com as soluções de acordo com o seu perfil.",
  },
  {
    num: "03",
    title: "Marco",
    text: "Coletamos as informações do assessor junto ao nosso time de especialistas e entregamos uma solução personalizada.",
  },
  {
    num: "04",
    title: "Solução",
    text: "Assim, entregamos investimentos personalizados, adequados a você.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-active");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="process-timeline bg-palladian py-[120px]">
      {/* Gold separator */}
      <div className="container mx-auto mb-16">
        <div className="w-full h-[1px] bg-gold/30" />
      </div>

      <div className="container mx-auto text-center mb-16">
        <h2
          data-animate
          className="font-heading font-semibold text-dark-grey mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
        >
          Como funciona a Marco?
        </h2>
        <p data-animate className="font-body text-dark-grey/70 text-lg">
          A nossa Jornada de Atendimento segue 4 etapas
        </p>
      </div>

      <div className="container mx-auto">
        <div className="process-track">
          {/* Progress line */}
          <div className="process-line-bg">
            <div className="process-line-fill" />
          </div>

          {/* Steps */}
          {steps.map((step, i) => (
            <div key={step.num} className="process-step" style={{ "--step-index": i } as React.CSSProperties}>
              <div className="process-dot" />
              <div className="process-content">
                <div className="font-heading font-semibold text-gold text-3xl mb-2">{step.num}</div>
                <div className="font-heading font-semibold text-dark-grey text-lg mb-2">{step.title}</div>
                <p className="font-body text-dark-grey/75 text-sm leading-relaxed max-w-[220px] mx-auto lg:mx-0">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
