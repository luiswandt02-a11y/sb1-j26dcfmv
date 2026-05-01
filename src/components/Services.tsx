import { Layers, Footprints, Wrench, Heart, Scissors, ShoppingBag, ScanLine } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Orthopädische Einlagen nach Maß',
    description:
      'Individuell gefertigte Einlagen für exakte Passform, optimale Druckverteilung und nachhaltige Entlastung.',
  },
  {
    icon: Footprints,
    title: 'Orthopädische Maßschuhe',
    description:
      'Maßgefertigte Schuhe, die sich anatomisch an Ihren Fuß anpassen – für Komfort, Stabilität und ein sicheres Gangbild.',
  },
  {
    icon: Wrench,
    title: 'Schuhzurichtungen',
    description:
      'Gezielte Modifikationen an konfektionierten Schuhen zur Korrektur von Fehlstellungen und zur Druckentlastung.',
  },
  {
    icon: Heart,
    title: 'Diabetiker-Versorgung',
    description:
      'Schützende Versorgung für empfindliche Diabetikerfüße – druckentlastend, sorgfältig angepasst und sicher.',
  },
  {
    icon: Scissors,
    title: 'Schuhreparaturen',
    description:
      'Professionelle Reparatur Ihrer Schuhe: Sohlen, Absätze, Nähte und mehr – schnell und zuverlässig.',
  },
  {
    icon: ShoppingBag,
    title: 'Verkauf',
    description:
      'Auswahl an Qualitätsschuhen und orthopädischen Hilfsmitteln für Ihren individuellen Bedarf.',
  },
  {
    icon: ScanLine,
    title: 'Fußanalyse',
    description:
      'Fachkundige Analyse Ihrer Fußstellung als Grundlage für eine präzise, auf Sie abgestimmte Versorgung.',
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#0C2D55] tracking-widest uppercase mb-4">
            Leistungen
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            Was wir für Sie tun
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            Umfassende orthopädische Schuhtechnik aus einer Hand – individuell, handwerklich und mit
            persönlichem Anspruch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-7 border border-gray-100 hover:border-[#0C2D55]/20 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#0C2D55]/8 flex items-center justify-center mb-5 group-hover:bg-[#0C2D55] transition-colors duration-200">
                  <Icon
                    size={20}
                    className="text-[#0C2D55] group-hover:text-white transition-colors duration-200"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-base font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
