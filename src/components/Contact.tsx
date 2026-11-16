import { MapPin, Phone, Clock, Star } from 'lucide-react';

const hours = [
  { day: 'Montag', time: '09:00 – 17:00 Uhr' },
  { day: 'Dienstag', time: '09:00 – 17:00 Uhr' },
  { day: 'Mittwoch', time: '09:00 – 17:00 Uhr' },
  { day: 'Donnerstag', time: '09:00 – 17:00 Uhr' },
  { day: 'Freitag', time: '09:00 – 17:00 Uhr' },
  { day: 'Samstag', time: 'Geschlossen' },
  { day: 'Sonntag', time: 'Geschlossen' },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#0C2D55] tracking-widest uppercase mb-4">
            Kontakt
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            So finden Sie uns
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto text-base">
            Besuchen Sie uns zu unseren Öffnungszeiten – ganz ohne Termin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-7">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0C2D55]/8 flex items-center justify-center">
                <MapPin size={18} className="text-[#0C2D55]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Adresse</p>
                <p className="text-gray-800 font-medium">Bodestr. 5</p>
                <p className="text-gray-600 text-sm">39418 Staßfurt</p>
                <a
                  href="https://www.google.com/maps/search/Bodestr.+5,+39418+Sta%C3%9Ffurt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#0C2D55] hover:underline mt-1 inline-block"
                >
                  In Google Maps öffnen &rarr;
                </a>
              </div>
            </div>

            <div className="h-px bg-gray-100" />

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0C2D55]/8 flex items-center justify-center">
                <Phone size={18} className="text-[#0C2D55]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Telefon</p>
                <a
                  href="tel:+493925325179"
                  className="text-gray-800 font-medium hover:text-[#0C2D55] transition-colors"
                >
                  03925/325179
                </a>
              </div>
            </div>

            <div className="h-px bg-gray-100" />

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0C2D55]/8 flex items-center justify-center">
                <Clock size={18} className="text-[#0C2D55]" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Öffnungszeiten</p>
                <table className="w-full text-sm">
                  <tbody>
                    {hours.map(({ day, time }) => (
                      <tr key={day} className="border-b border-gray-50 last:border-0">
                        <td className="py-1.5 pr-4 text-gray-600 font-medium">{day}</td>
                        <td className={`py-1.5 text-right ${time === 'Geschlossen' ? 'text-gray-400' : 'text-gray-800'}`}>
                          {time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="h-px bg-gray-100" />

            {/* Review link */}
            <a
              href="https://www.google.com/search?q=WANDT+Orthopadie+Schuhtechnik+Sta%C3%9Ffurt#lrd=0x0:0x0,3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0C2D55]/8 flex items-center justify-center">
                <Star size={18} className="text-[#0C2D55]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">Bewertung hinterlassen</p>
                <p className="text-sm text-[#0C2D55] group-hover:underline">Google Rezension schreiben &rarr;</p>
              </div>
            </a>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 min-h-[420px] bg-white">
            <iframe
              title="WANDT Orthopädie-Schuhtechnik Standort"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.0!2d11.5730!3d51.8570!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6b4a8a7a7a7a7%3A0x0!2sBodestr.+5%2C+39418+Sta%C3%9Ffurt!5e0!3m2!1sde!2sde!4v1000000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="tel:+493925325179"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0C2D55] text-white font-semibold rounded hover:bg-[#0e3870] transition-colors duration-200 text-sm tracking-wide"
          >
            <Phone size={16} />
            03925/325179 – Jetzt anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
