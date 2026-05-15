import Header from "@/components/marco/Header";
import Hero from "@/components/marco/Hero";
import Numbers from "@/components/marco/Numbers";
import Credibility from "@/components/marco/Credibility";
import ClientSection from "@/components/marco/ClientSection";
import Process from "@/components/marco/Process";
import Media from "@/components/marco/Media";
import CtaFinal from "@/components/marco/CtaFinal";
import Footer from "@/components/marco/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SEO } from "@/components/SEO";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Marco Investimentos",
  "url": "https://www.marcoinvestimentos.com.br",
  "logo": "https://www.marcoinvestimentos.com.br/images/logo-marco.png",
  "description": "Assessoria de investimentos em Joinville, SC. Parceiro XP Investimentos. Especialistas em planejamento financeiro para empresários, médicos e profissionais liberais.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Joinville",
    "addressRegion": "SC",
    "addressCountry": "BR"
  },
  "areaServed": ["Joinville", "Santa Catarina", "Brasil"],
  "telephone": "+55-47-99254-7654",
  "email": "contato@marcoinvestimentos.com.br",
  "knowsAbout": [
    "assessoria de investimentos Joinville",
    "planejamento financeiro Joinville",
    "planejamento tributário",
    "planejamento sucessório",
    "holding patrimonial",
    "gestão de patrimônio",
    "XP Investimentos",
    "fee based"
  ],
  "sameAs": [
    "https://www.facebook.com/marcoinvestimentos/",
    "https://www.instagram.com/marcoinvestimentos/",
    "https://www.linkedin.com/company/marcoinvestimentos/"
  ]
};

const Index = () => {
  useScrollAnimation();

  return (
    <>
      <SEO
        title="Assessoria de Investimentos em Joinville | Parceiro XP"
        description="Marco Investimentos — assessoria de investimentos em Joinville, SC. Parceiro XP Investimentos. Planejamento financeiro para empresários e profissionais liberais."
        canonical="/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Header />
      <Hero />
      <Numbers />
      <Credibility />
      <ClientSection />
      <Process />
      <Media />
      <CtaFinal />
      <Footer />
    </>
  );
};

export default Index;
