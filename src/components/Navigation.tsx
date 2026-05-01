import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Warum WANDT', href: '#warum-wandt' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src="/5004252F-A822-472B-86AC-BB296AA82276.png"
              alt="WANDT Orthopädie-Schuhtechnik Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleLink(link.href); }}
                className="text-sm font-medium text-gray-600 hover:text-[#0C2D55] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+4939253251790"
              className="ml-4 px-5 py-2 bg-[#0C2D55] text-white text-sm font-medium rounded hover:bg-[#0e3870] transition-colors duration-200"
            >
              Anrufen
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-[#0C2D55]"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); handleLink(link.href); }}
              className="text-base font-medium text-gray-700 hover:text-[#0C2D55] py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+4939253251790"
            className="mt-2 px-5 py-3 bg-[#0C2D55] text-white text-sm font-medium rounded text-center hover:bg-[#0e3870] transition-colors duration-200"
          >
            Jetzt anrufen
          </a>
        </div>
      )}
    </header>
  );
}
