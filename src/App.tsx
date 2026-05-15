import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = lazy(() => import("./pages/Index.tsx"));
const AMarco = lazy(() => import("./pages/AMarco.tsx"));
const NossosEscritorios = lazy(() => import("./pages/NossosEscritorios.tsx"));
const Carreiras = lazy(() => import("./pages/Carreiras.tsx"));
const Investimentos = lazy(() => import("./pages/Investimentos.tsx"));
const Corporativas = lazy(() => import("./pages/Corporativas.tsx"));
const Assessores = lazy(() => import("./pages/Assessores.tsx"));
const Contato = lazy(() => import("./pages/Contato.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade.tsx"));
const PoliticaCookies = lazy(() => import("./pages/PoliticaCookies.tsx"));
const Admin = lazy(() => import("./pages/Admin.tsx"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre/a-marco" element={<AMarco />} />
            <Route path="/sobre/nossos-escritorios" element={<NossosEscritorios />} />
            <Route path="/sobre/carreiras" element={<Carreiras />} />
            <Route path="/solucoes/investimentos" element={<Investimentos />} />
            <Route path="/solucoes/corporativas" element={<Corporativas />} />
            <Route path="/assessores" element={<Assessores />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/lgpd/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/lgpd/politica-de-cookies" element={<PoliticaCookies />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      {/* WhatsApp floating button */}
      <a
        href="https://api.whatsapp.com/send?phone=5547992547654"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
        aria-label="Falar pelo WhatsApp"
      >
        <span className="relative inline-flex w-16 h-16">
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping" />
          <span className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.492a.5.5 0 0 0 .614.614l5.652-1.478A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.585-.5-5.082-1.375l-.361-.214-3.754.981.999-3.648-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </span>
        </span>
      </a>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
