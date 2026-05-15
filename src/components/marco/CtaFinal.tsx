import { useState } from "react";
import CarouselBg from "./CarouselBg";
import ContactModal from "./Contactmodal";

const IMAGES = [
  "/images/carrossel/Foto 01.webp",
  "/images/carrossel/Foto 04.webp",
  "/images/carrossel/Foto 05.webp",
];

export default function CtaFinal() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative py-[120px] overflow-hidden" id="assessores">
      <CarouselBg images={IMAGES} overlay="bg-black/[0.65]" />

      <div className="relative z-10 container mx-auto">
        <div className="w-full h-[1px] bg-gold/30 mb-16" />
        <button
          onClick={() => setContactOpen(true)}
          data-animate
          className="group flex items-center justify-center gap-4 text-white-soft hover:text-gold transition-colors duration-[250ms] ease w-full bg-transparent border-none cursor-pointer"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
        >
          <span
            className="font-heading font-semibold leading-tight text-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            Converse com um de{" "}
            <span className="text-gold">nossos assessores</span>
          </span>
          <span className="transition-transform duration-[250ms] ease group-hover:translate-x-2">
            →
          </span>
        </button>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
