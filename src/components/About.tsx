import { Check } from 'lucide-react';

const highlights = [
  'Individuelle Beratung',
  'Fußanalyse',
  'Maßanfertigungen',
  'Langjährige Erfahrung',
  'Persönlicher Service',
  'Besuch ohne Termin möglich',
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold text-[#0C2D55] tracking-widest uppercase mb-4">
              Über uns
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              Handwerkliche Präzision.<br />
              <span className="text-[#0C2D55]">Persönliche Beratung.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Bei WANDT Orthopädie-Schuhtechnik steht der Mensch im Mittelpunkt. Mit jahrelanger
              Erfahrung im orthopädischen Handwerk versorgen wir unsere Patienten
              individuell, kompetent und mit echtem Engagement.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Von der ersten Beratung über die professionelle Fußanalyse bis zur fertigen Maßanfertigung
              begleiten wir Sie persönlich – ohne lange Wartezeiten und ohne bürokratischen Aufwand.
              Kommen Sie einfach vorbei.
            </p>
            <a
              href="tel:+4939253251790"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C2D55] hover:underline"
            >
              03925 325179 &rarr;
            </a>
          </div>

          {/* Highlights */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <p className="text-xs font-semibold text-[#0C2D55] tracking-widest uppercase mb-6">
              Unsere Stärken
            </p>
            <ul className="space-y-4">
              {highlights.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#0C2D55]/10 flex items-center justify-center">
                    <Check size={12} className="text-[#0C2D55]" strokeWidth={2.5} />
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
