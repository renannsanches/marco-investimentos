import Header from "@/components/marco/Header";
import Footer from "@/components/marco/Footer";
import CtaFinal from "@/components/marco/CtaFinal";
import CarouselBg from "@/components/marco/CarouselBg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const assessores = [
  { name: "Thales Nóbrega", file: "Thales-Nobrega.webp", role: "CEO" },
  { name: "Abraham Alcalay", file: "Abraham-Alcalay.webp" },
  { name: "André Narval", file: "Andre-Narval.webp" },
  { name: "Cícero Interaminense", file: "Cicero-Interaminense.webp" },
  { name: "Deivid Alves", file: "Deivid-Alves.jpg" },
  { name: "Diego Cavalheiro", file: "Diego-Cavalheiro.webp" },
  { name: "Douglas Lages", file: "Douglas-Lages.webp" },
  { name: "Felipe Guadagnin", file: "Felipe-Guadagnin.webp" },
  { name: "Fernanda Simon", file: "Fernanda-Simon.webp" },
  { name: "Filipe Assis", file: "Filipe-Assis-2.png" },
  { name: "Filipe Dias", file: "Filipe-dias.webp" },
  { name: "Filipe Santos", file: "Filipe-Santos.webp" },
  { name: "Gabriel Boff", file: "gabriel-boff.webp" },
  { name: "Gabriel Pereira", file: "Gabriel-Pereira.webp" },
  { name: "Geizi Amarante", file: "Geizi-Amarante.webp" },
  { name: "Giordano Fiorese", file: "Giordano-Fiorese.webp" },
  { name: "Gregori Zamprogna", file: "Gregori-Zamprogna.png" },
  { name: "Guilherme Cepeda", file: "Guilherme-Cepeda.png" },
  { name: "Guilherme Chaves", file: "WhatsApp-Image-2025-03-17-at-15.18.08.jpeg" },
  { name: "Gustavo Piva", file: "Gustavo-Piva.webp" },
  { name: "Gustavo Ponzoni", file: "Gustavo-Ponzoni.webp" },
  { name: "Henrique Jandt", file: "Henrique-Jandt.webp" },
  { name: "Henrique Kopp", file: "Henrique-Kopp.webp" },
  { name: "Igor Farias", file: "Igor-Farias.png" },
  { name: "Jacson Telles", file: "Jacson-Telles.webp" },
  { name: "João Grassini", file: "Joao-Grassini.webp" },
  { name: "Lennon Bandeira", file: "Lennon-Bandeira.webp" },
  { name: "Leonardo Maciel", file: "Leonardo-Maciel.webp" },
  { name: "Lucas Machado", file: "Lucas-Machado.png" },
  { name: "Luciano Crusius", file: "Luciano-Crusius.webp" },
  { name: "Luiz Felipe de Souza", file: "Luiz-Felipe-de-Souza.png" },
  { name: "Marcellus Schneider", file: "Marcellus-Schneider.webp" },
  { name: "Marcelo Barros", file: "Marcelo-Barros.webp" },
  { name: "Mateus Scheunemann", file: "Mateus-Scheunemann.webp" },
  { name: "Matheus Alquati", file: "Matheus-Alquati.webp" },
  { name: "Matheus Gusi", file: "Matheus-Gusi-3.png" },
  { name: "Natália Petry", file: "Natalia-Petry.webp" },
  { name: "Nicolas Paes", file: "Nicolas-Paes.webp" },
  { name: "Pedro Streck", file: "Pedro-Streck.webp" },
  { name: "Roberto Albrecht", file: "Roberto-Albrecht.webp" },
  { name: "Sílvio Filho", file: "Silvio-Filho.webp" },
  { name: "Tales Jost", file: "Tales-Jost.webp" },
  { name: "Tiago Corte", file: "Tiago-Corte.webp" },
  { name: "Uriel Viegas", file: "uriel-viegas.webp" },
  { name: "Vinícius Crizel", file: "Vinicius-Crizel.webp" },
  { name: "Vinícius Ferreira", file: "Vinicius-ferreira.webp" },
];

export default function Assessores() {
  useScrollAnimation();

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative bg-dark-grey pt-40 pb-[100px] overflow-hidden">
        {/* Carousel BG — add image paths below to enable, e.g. "/images/carrossel/Foto 01.webp" */}
        <CarouselBg images={["/images/carrossel-1.webp"]} />

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-deep to-transparent" />

        <div className="relative z-10 container mx-auto">
          <div className="w-[60px] h-[1px] bg-gold mb-10 animate-fade-in-up" />
          <div className="max-w-[680px]">
            <h1
              className="font-heading font-semibold text-white-soft leading-tight mb-6 animate-fade-in-up animate-delay-150"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", letterSpacing: "-0.02em" }}
            >
              Nossos{" "}
              <span className="text-gold">assessores</span>
            </h1>
            <p className="font-body text-lg text-white-soft/70 leading-relaxed max-w-[520px] animate-fade-in-up animate-delay-300">
              A Marco conta com uma equipe especializada, que oferece a excelência
              que os nossos clientes merecem.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de assessores */}
      <section className="bg-black-deep py-[100px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {assessores.map((assessor, i) => (
              <div
                key={assessor.file}
                data-animate
                className="group relative overflow-hidden rounded-xl"
                style={{
                  aspectRatio: "3 / 4",
                  transitionDelay: `${(i % 5) * 60}ms`,
                }}
              >
                {/* Foto */}
                <img
                  src={`/images/assessores/${assessor.file}`}
                  alt={assessor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* CEO badge */}
                {assessor.role && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-body text-[10px] tracking-widest uppercase bg-gold text-dark-grey px-2.5 py-1 rounded-full font-semibold">
                      {assessor.role}
                    </span>
                  </div>
                )}

                {/* Overlay com nome */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-black-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-heading font-semibold text-white-soft text-sm leading-tight">
                    {assessor.name}
                  </p>
                  {assessor.role && (
                    <p className="font-body text-gold text-xs mt-0.5">{assessor.role}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
      <Footer />
    </>
  );
}
