import { UserCheck, Award, Ruler, CalendarOff } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Persönliche Betreuung',
    description:
      'Sie werden bei uns nicht als Nummer behandelt. Wir nehmen uns Zeit für Ihre Anliegen und begleiten Sie durch den gesamten Versorgungsprozess.',
  },
  {
    icon: Award,
    title: 'Orthopädisches Handwerk',
    description:
      'Präzision, Erfahrung und handwerkliche Sorgfalt – das sind die Grundlagen jeder Versorgung, die wir für Sie anfertigen.',
  },
  {
    icon: Ruler,
    title: 'Individuelle Maßarbeit',
    description:
      'Jeder Fuß ist einzigartig. Deshalb sind es auch unsere Lösungen. Maßgefertigte Einlagen und Schuhe, abgestimmt auf Ihren Fuß und Ihre Lebensweise.',
  },
  {
    icon: CalendarOff,
    title: 'Kein Termin nötig',
    description:
      'Kommen Sie einfach in unserem Betrieb vorbei  – ganz ohne Voranmeldung, zu unseren Öffnungszeiten.',
  },
];

export default function WhyWandt() {
  return (
    <section id="warum-wandt" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Heading column */}
          <div className="md:sticky md:top-28">
            <p className="text-xs font-semibold text-[#0C2D55] tracking-widest uppercase mb-4">
              Warum WANDT
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              Ihr Vertrauen ist<br />
              <span className="text-[#0C2D55]">unser Anspruch.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-base mb-8">
              Wir stehen für Verlässlichkeit, handwerkliche Exzellenz und echte Nähe zu unseren
              Patienten.
            </p>
            <div className="w-12 h-1 bg-[#0C2D55] rounded" />
          </div>

          {/* Reasons */}
          <div className="space-y-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0C2D55]/8 flex items-center justify-center mt-0.5">
                    <Icon size={18} className="text-[#0C2D55]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-gray-900 mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
