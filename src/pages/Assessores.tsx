import { useQuery } from "@tanstack/react-query";
import Header from "@/components/marco/Header";
import Footer from "@/components/marco/Footer";
import CtaFinal from "@/components/marco/CtaFinal";
import CarouselBg from "@/components/marco/CarouselBg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SEO } from "@/components/SEO";
import { supabase, type Assessor } from "@/lib/supabase";

export default function Assessores() {
  useScrollAnimation();

  const { data: assessores = [], isLoading } = useQuery({
    queryKey: ['assessores'],
    queryFn: async (): Promise<Assessor[]> => {
      const { data, error } = await supabase
        .from('assessores')
        .select('*')
        .order('order_index', { ascending: true })
      if (error) throw error
      return data
    },
    staleTime: 5 * 60 * 1000,
  });

  return (
    <>
      <SEO
        title="Assessores de Investimentos Joinville | Marco XP"
        description="Conheça os assessores de investimentos da Marco em Joinville. Especialistas em planejamento financeiro para médicos, empresários e profissionais liberais."
        canonical="/assessores"
      />
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
            {isLoading &&
              Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white-soft/5 animate-pulse"
                  style={{ aspectRatio: "3 / 4" }}
                />
              ))}
            {assessores.map((assessor, i) => (
              <div
                key={assessor.id}
                data-animate
                className="group relative overflow-hidden rounded-xl"
                style={{
                  aspectRatio: "3 / 4",
                  transitionDelay: `${(i % 5) * 60}ms`,
                }}
              >
                {/* Foto */}
                {assessor.image_url && (
                <img
                  src={assessor.image_url}
                  alt={assessor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                )}

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
