import { Phone, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0C2D55] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 60%, white 1px, transparent 1px),
                              radial-gradient(circle at 75% 40%, white 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Light diagonal accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-tl from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-2xl">
          {/* Logo image */}
          <div className="mb-10">
            <img
              src="/5004252F-A822-472B-86AC-BB296AA82276.png"
              alt="WANDT Orthopädie-Schuhtechnik"
              className="h-24 md:h-32 w-auto"
            />
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            WANDT<br />
            <span className="font-light text-blue-200">Orthopädie-Schuhtechnik</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 font-light max-w-xl">
            Individuelle orthopädische Lösungen für Alltag, Beruf und Bewegung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+493925325179"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0C2D55] font-semibold rounded hover:bg-blue-50 transition-colors duration-200 text-sm tracking-wide"
            >
              <Phone size={16} />
              Anrufen
            </a>
            <a
              href="https://www.google.com/maps/search/Bodestr.+5,+39418+Sta%C3%9Ffurt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white font-medium rounded hover:bg-white/10 transition-colors duration-200 text-sm tracking-wide"
            >
              <MapPin size={16} />
              Anfahrt anzeigen
            </a>
          </div>

          {/* Quick info bar */}
          <div className="mt-14 pt-8 border-t border-white/20 flex flex-col sm:flex-row gap-6 text-sm text-blue-200">
            <span>Bodestr. 5, 39418 Staßfurt</span>
            <span className="hidden sm:inline text-blue-400">|</span>
            <span>Mo – Fr &nbsp;09:00 – 17:00 Uhr</span>
            <span className="hidden sm:inline text-blue-400">|</span>
            <a href="tel:+493925325179" className="hover:text-white transition-colors">03925/325179</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300 opacity-70">
        <button
          onClick={() => scrollTo('#ueber-uns')}
          aria-label="Nach unten scrollen"
          className="flex flex-col items-center gap-1 hover:opacity-100 transition-opacity"
        >
          <span className="text-xs tracking-widest uppercase">Mehr erfahren</span>
          <span className="block w-px h-8 bg-blue-300/60 mx-auto mt-1" />
        </button>
      </div>
    </section>
  );
}
