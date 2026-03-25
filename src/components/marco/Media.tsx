const outlets = [
  {
    name: "InfoMoney",
    logo: "/images/infomoney.png",
    url: "https://www.infomoney.com.br/patrocinados/xp-investimentos/marco-investimento-e-xp-fazem-parceria-para-curso-direcionado-para-assessores-de-investimento/",
  },
  {
    name: "Forbes",
    logo: "/images/forbes.png",
    url: "https://forbes.com.br/forbes-tech/2021/08/exclusivo-startup-do-mercado-financeiro-capta-r-65-milhoes-para-democratizar-o-acesso-a-investimentos/",
  },
  {
    name: "GZH",
    logo: "/images/ghz.png",
    url: "https://gauchazh.clicrbs.com.br/colunistas/marta-sfredo/noticia/2021/09/startup-gaucha-recebe-aporte-de-r-65-milhoes-e-vai-treinar-jovens-sem-experiencia-ckt3cxevz009s013b3ysus4rv.html",
  },
];

export default function Media() {
  return (
    <section
      className="relative py-[120px]"
      style={{
        backgroundImage: "url('/images/office.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white-soft/90" />

      {/* Gold separator */}
      <div className="relative z-10 container mx-auto mb-16">
        <div className="w-full h-[1px] bg-gold/30" />
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div data-animate>
          <h2
            className="font-heading font-semibold text-dark-grey"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
          >
            Marco <span className="text-gold">na mídia.</span>
          </h2>
        </div>

        <div data-animate className="flex items-center gap-14 flex-wrap">
          {outlets.map((outlet) => (
            <a
              key={outlet.name}
              href={outlet.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={outlet.logo}
                alt={outlet.name}
                className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-[250ms] ease grayscale hover:grayscale-0 cursor-pointer"
              />
            </a>
          ))}
      </div>
    </div>
    </section >
  );
}