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

const Index = () => {
  useScrollAnimation();

  return (
    <>
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
