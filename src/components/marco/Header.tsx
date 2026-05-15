import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import InvestModal from "./InvestModal";

const sobreSubmenus = [
  { label: "A Marco", href: "/sobre/a-marco" },
  { label: "Nossos Escritórios", href: "/sobre/nossos-escritorios" },
  { label: "Carreiras", href: "/sobre/carreiras" },
];

const solucoesSubmenus = [
  { label: "Investimentos", href: "/solucoes/investimentos" },
  { label: "Corporativas", href: "/solucoes/corporativas" },
];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sobreOpen, setSobreOpen] = useState(false);
  const [mobileSobreOpen, setMobileSobreOpen] = useState(false);
  const [solucoesOpen, setSolucoesOpen] = useState(false);
  const [mobileSolucoesOpen, setMobileSolucoesOpen] = useState(false);
  const sobreRef = useRef<HTMLDivElement>(null);
  const solucoesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sobreRef.current && !sobreRef.current.contains(e.target as Node)) {
        setSobreOpen(false);
      }
      if (solucoesRef.current && !solucoesRef.current.contains(e.target as Node)) {
        setSolucoesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (!isHome) {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleSubLink = (href: string) => {
    setSobreOpen(false);
    setMobileSobreOpen(false);
    setSolucoesOpen(false);
    setMobileSolucoesOpen(false);
    setMenuOpen(false);
    if (href.startsWith("/")) return;
    scrollTo(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[250ms] ease ${scrolled || !isHome ? "bg-dark-grey/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" aria-label="Marco Investimentos">
          <img
            src="/images/logo-marco.svg"
            alt="Marco Investimentos"
            className="h-10 w-auto"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Início */}
          {isHome ? (
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollTo("#inicio"); }}
              className="font-body text-sm text-white-soft/80 hover:text-gold transition-colors duration-[250ms] ease"
            >
              Início
            </a>
          ) : (
            <Link to="/" className="font-body text-sm text-white-soft/80 hover:text-gold transition-colors duration-[250ms] ease">
              Início
            </Link>
          )}

          {/* Sobre Nós dropdown */}
          <div ref={sobreRef} className="relative">
            <button
              onClick={() => { setSobreOpen((v) => !v); setSolucoesOpen(false); }}
              type="button"
              className="flex items-center gap-1 font-body text-sm text-white-soft/80 hover:text-gold transition-colors duration-[250ms] ease"
            >
              Sobre Nós
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${sobreOpen ? "rotate-180" : ""}`}
              />
            </button>

            {sobreOpen && (
              <div className="header-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl py-2 shadow-2xl">
                {sobreSubmenus.map((item) =>
                  item.href.startsWith("/") ? (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setSobreOpen(false)}
                      className="block px-5 py-2.5 font-body text-sm text-white-soft/75 hover:text-gold hover:bg-white/5 transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleSubLink(item.href)}
                      className="w-full text-left px-5 py-2.5 font-body text-sm text-white-soft/75 hover:text-gold hover:bg-white/5 transition-colors duration-150"
                    >
                      {item.label}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Soluções dropdown */}
          <div ref={solucoesRef} className="relative">
            <button
              onClick={() => { setSolucoesOpen((v) => !v); setSobreOpen(false); }}
              type="button"
              className="flex items-center gap-1 font-body text-sm text-white-soft/80 hover:text-gold transition-colors duration-[250ms] ease"
            >
              Soluções
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${solucoesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {solucoesOpen && (
              <div className="header-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl py-2 shadow-2xl">
                {solucoesSubmenus.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setSolucoesOpen(false)}
                    className="block px-5 py-2.5 font-body text-sm text-white-soft/75 hover:text-gold hover:bg-white/5 transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Assessores */}
          <Link
            to="/assessores"
            className="font-body text-sm text-white-soft/80 hover:text-gold transition-colors duration-[250ms] ease"
          >
            Assessores
          </Link>

          {/* Contato */}
          <Link
            to="/contato"
            className="font-body text-sm text-white-soft/80 hover:text-gold transition-colors duration-[250ms] ease"
          >
            Contato
          </Link>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="font-body font-semibold text-xs uppercase tracking-widest bg-gold text-dark-grey px-6 py-2.5 rounded-[4px] hover:brightness-90 transition-all duration-[250ms] ease border border-gold"
          >
            Quero Investir
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden text-white-soft p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-0 bg-dark-grey z-40 flex flex-col pt-20 px-8 gap-2 transition-transform duration-[250ms] ease lg:hidden overflow-y-auto ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {isHome ? (
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); scrollTo("#inicio"); }}
            className="font-heading text-2xl text-white-soft/90 hover:text-gold transition-colors duration-[250ms] ease py-2"
          >
            Início
          </a>
        ) : (
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="font-heading text-2xl text-white-soft/90 hover:text-gold transition-colors duration-[250ms] ease py-2"
          >
            Início
          </Link>
        )}

        {/* Mobile Sobre Nós accordion */}
        <div>
          <button
            type="button"
            onClick={() => setMobileSobreOpen((v) => !v)}
            className="flex items-center justify-between w-full font-heading text-2xl text-white-soft/90 hover:text-gold transition-colors duration-[250ms] ease py-2"
          >
            Sobre Nós
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${mobileSobreOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileSobreOpen && (
            <div className="flex flex-col pl-4 mt-1 mb-1 border-l border-gold/30 gap-1">
              {sobreSubmenus.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => { setMobileSobreOpen(false); setMenuOpen(false); }}
                    className="font-body text-lg text-white-soft/70 hover:text-gold transition-colors duration-150 py-1.5"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleSubLink(item.href)}
                    className="text-left font-body text-lg text-white-soft/70 hover:text-gold transition-colors duration-150 py-1.5"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          )}
        </div>

        {/* Mobile Soluções accordion */}
        <div>
          <button
            type="button"
            onClick={() => setMobileSolucoesOpen((v) => !v)}
            className="flex items-center justify-between w-full font-heading text-2xl text-white-soft/90 hover:text-gold transition-colors duration-[250ms] ease py-2"
          >
            Soluções
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${mobileSolucoesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileSolucoesOpen && (
            <div className="flex flex-col pl-4 mt-1 mb-1 border-l border-gold/30 gap-1">
              {solucoesSubmenus.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => { setMobileSolucoesOpen(false); setMenuOpen(false); }}
                  className="font-body text-lg text-white-soft/70 hover:text-gold transition-colors duration-150 py-1.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Assessores */}
        <Link
          to="/assessores"
          onClick={() => setMenuOpen(false)}
          className="font-heading text-2xl text-white-soft/90 hover:text-gold transition-colors duration-[250ms] ease py-2"
        >
          Assessores
        </Link>

        {/* Contato */}
        <Link
          to="/contato"
          onClick={() => setMenuOpen(false)}
          className="font-heading text-2xl text-white-soft/90 hover:text-gold transition-colors duration-[250ms] ease py-2"
        >
          Contato
        </Link>

        <button
          type="button"
          onClick={() => { setMenuOpen(false); setModalOpen(true); }}
          className="mt-4 font-body font-semibold text-xs uppercase tracking-widest bg-gold text-dark-grey px-6 py-3 rounded-[4px] text-center border border-gold"
        >
          Quero Investir
        </button>
      </div>

      <InvestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
