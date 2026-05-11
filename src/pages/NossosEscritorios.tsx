import Header from "@/components/marco/Header";
import Footer from "@/components/marco/Footer";
import CtaFinal from "@/components/marco/CtaFinal";
import PageHero from "@/components/marco/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const estados = [
  {
    estado: "Rio Grande do Sul",
    sigla: "RS",
    escritorios: [
      {
        cidade: "Pelotas",
        endereco: "Av. Dom Joaquim, 1515",
        complemento: "Loja 02 – Três Vendas",
        cep: "CEP: 96020-260",
      },
      {
        cidade: "Porto Alegre",
        endereco: "Av. Diários de Notícias, 400",
        complemento: "Salas 304 e 305 | Diamond Tower",
        cep: "CEP: 90810-080",
      },
      {
        cidade: "Novo Hamburgo",
        endereco: "Rua Almirante Barroso, 15",
        complemento: "Sala 02",
        cep: "CEP: 93510-290",
      },
      {
        cidade: "Passo Fundo",
        endereco: "Avenida Brasil, 560",
        complemento: "Salas 2002 e 2003 | Offices Bella Citta",
        cep: "CEP: 99010-000",
      },
    ],
  },
  {
    estado: "Santa Catarina",
    sigla: "SC",
    escritorios: [
      {
        cidade: "Joinville",
        endereco: "Rua Ministro Calógeras, 343",
        complemento: "Andar 11 – Centro",
        cep: "CEP: 89202-207",
      },
    ],
  },
];

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
        fill="#C9A84C"
      />
    </svg>
  );
}

export default function NossosEscritorios() {
  useScrollAnimation();

  return (
    <>
      <Header />

      {/* Hero */}
      <PageHero overlayOpacity={0.85}>
        <div className="w-[60px] h-[1px] bg-gold mb-10 animate-fade-in-up" />
        <div className="max-w-[640px]">
          <h1
            className="font-heading font-semibold text-white-soft leading-tight mb-6 animate-fade-in-up animate-delay-150"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", letterSpacing: "-0.02em" }}
          >
            Marco{" "}
            <span className="text-gold">presença global</span>
          </h1>
          <p className="font-body text-lg text-white-soft/60 animate-fade-in-up animate-delay-300">
            Nossos escritórios estão presentes em diferentes cidades, sempre prontos para atendê-lo com excelência.
          </p>
        </div>
      </PageHero>

      {/* Offices */}
      <section className="bg-black-deep py-[100px]">
        <div className="container mx-auto space-y-20">
          {estados.map((grupo, gi) => (
            <div key={grupo.sigla} data-animate style={{ transitionDelay: `${gi * 100}ms` }}>
              {/* State header */}
              <div className="flex items-center gap-5 mb-10">
                <span
                  className="font-heading font-bold text-gold/25 select-none"
                  style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
                >
                  {grupo.sigla}
                </span>
                <div>
                  <div className="w-8 h-[1px] bg-gold mb-2" />
                  <h2
                    className="font-heading font-semibold text-white-soft"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", letterSpacing: "-0.01em" }}
                  >
                    {grupo.estado}
                  </h2>
                </div>
              </div>

              {/* Office cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {grupo.escritorios.map((office, oi) => (
                  <div
                    key={office.cidade}
                    data-animate
                    className="office-card flex flex-col gap-4 p-7 rounded-2xl"
                    style={{ transitionDelay: `${gi * 100 + oi * 80}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <PinIcon />
                      <span className="font-heading font-semibold text-white-soft text-base">
                        {office.cidade}
                      </span>
                    </div>
                    <div className="w-full h-[1px] bg-gold/15" />
                    <div className="font-body text-sm text-white-soft/55 leading-relaxed space-y-0.5">
                      <p>{office.endereco}</p>
                      <p>{office.complemento}</p>
                    </div>
                    <p className="font-body text-xs text-gold/70 tracking-wider">{office.cep}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaFinal />
      <Footer />
    </>
  );
}
