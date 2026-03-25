import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Assessores", href: "#assessores" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[250ms] ease ${
        scrolled ? "bg-dark-grey/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollTo("#inicio"); }} aria-label="Marco Investimentos">
          <img
            src="/images/logo-marco.svg"
            alt="Marco Investimentos"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="font-body text-sm text-white-soft/80 hover:text-gold transition-colors duration-[250ms] ease"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={(e) => { e.preventDefault(); scrollTo("#contato"); }}
            className="font-body font-semibold text-xs uppercase tracking-widest bg-gold text-dark-grey px-6 py-2.5 rounded-[4px] hover:brightness-90 transition-all duration-[250ms] ease border border-gold"
          >
            Quero Investir
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white-soft p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-0 bg-dark-grey z-40 flex flex-col pt-20 px-8 gap-6 transition-transform duration-[250ms] ease lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            className="font-heading text-2xl text-white-soft/90 hover:text-gold transition-colors duration-[250ms] ease"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contato"
          onClick={(e) => { e.preventDefault(); scrollTo("#contato"); }}
          className="mt-4 font-body font-semibold text-xs uppercase tracking-widest bg-gold text-dark-grey px-6 py-3 rounded-[4px] text-center border border-gold"
        >
          Quero Investir
        </a>
      </div>
    </header>
  );
}
