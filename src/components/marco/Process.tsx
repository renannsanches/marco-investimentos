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
  return (
    <section className="bg-palladian py-24 lg:py-32">
      <div className="container mx-auto text-center mb-16">
        <h2
          data-animate
          className="font-heading font-semibold text-dark-grey mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          Como funciona a Marco?
        </h2>
        <p data-animate className="font-body text-dark-grey/70 text-lg">
          A nossa Jornada de Atendimento segue 4 etapas
        </p>
      </div>

      <div className="container mx-auto relative">
        {/* Dashed connector line (desktop) */}
        <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] border-t-2 border-dashed border-oatmeal z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step) => (
            <div
              key={step.num}
              data-animate
              className="bg-white-soft border border-oatmeal rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="font-heading font-semibold text-gold text-4xl mb-4">{step.num}</div>
              <div className="font-heading font-semibold text-dark-grey text-lg mb-3">{step.title}</div>
              <p className="font-body text-dark-grey/75 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
