import { useState } from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

function ImpressumModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="font-display text-xl font-bold text-gray-900 mb-4">Impressum</h2>
        <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
          <p><strong>WANDT Orthopädie-Schuhtechnik</strong><br />Inhaber: Dirk Wandt</p>
          <p>Bodestr. 5<br />39418 Staßfurt</p>
          <p>Telefon: <a href="tel:+493925325179" className="text-[#0C2D55]">03925/325179</a></p>
          <p>
            <strong>Berufsbezeichnung:</strong> Orthopädie-Schuhmachermeister
          </p>
          <p>
            <strong>Zuständige Handwerkskammer:</strong><br />
            Handwerkskammer Magdeburg
          </p>
          <p>
            <strong>Hinweis gemäß § 36 VSBG:</strong><br />
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          <p className="text-xs text-gray-400">
            Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV: Dirk Wandt, Bodestr. 5, 39418 Staßfurt
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-5 py-2 bg-[#0C2D55] text-white text-sm rounded hover:bg-[#0e3870] transition-colors"
        >
          Schließen
        </button>
      </div>
    </div>
  );
}

function DatenschutzModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="font-display text-xl font-bold text-gray-900 mb-4">Datenschutzerklärung</h2>
        <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
          <div>
            <p className="font-semibold text-gray-800 mb-1">1. Verantwortliche Stelle</p>
            <p>WANDT Orthopädie-Schuhtechnik, Inhaber Dirk Wandt, Bodestr. 5, 39418 Staßfurt</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-1">2. Erhebung und Verarbeitung personenbezogener Daten</p>
            <p>Diese Website erhebt keine personenbezogenen Daten über Formulare oder Tracking-Tools.
            Beim Aufruf der Website werden technisch notwendige Daten (IP-Adresse, Browsertyp, Datum/Uhrzeit)
            in Server-Logfiles gespeichert. Diese Daten dienen ausschließlich der Sicherstellung des
            Betriebs und werden nicht an Dritte weitergegeben.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-1">3. Google Maps</p>
            <p>Diese Website verwendet Google Maps zur Darstellung von Kartenmaterial. Durch die Nutzung
            von Google Maps können Daten an Google LLC übermittelt werden. Weitere Informationen finden
            Sie in der Datenschutzerklärung von Google unter policies.google.com/privacy.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-1">4. Ihre Rechte</p>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
            Ihrer personenbezogenen Daten. Wenden Sie sich dazu an die oben genannte Adresse.</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-5 py-2 bg-[#0C2D55] text-white text-sm rounded hover:bg-[#0e3870] transition-colors"
        >
          Schließen
        </button>
      </div>
    </div>
  );
}

export default function Footer() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  return (
    <>
      {showImpressum && <ImpressumModal onClose={() => setShowImpressum(false)} />}
      {showDatenschutz && <DatenschutzModal onClose={() => setShowDatenschutz(false)} />}

      <footer className="bg-[#0C2D55] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <img
                src="/5004252F-A822-472B-86AC-BB296AA82276.png"
                alt="WANDT Orthopädie-Schuhtechnik"
                className="h-16 w-auto mb-4"
              />
              <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
                Individuelle orthopädische Versorgung für Alltag, Beruf und Bewegung.
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-blue-300 mb-5">
                Kontakt
              </p>
              <ul className="space-y-3 text-sm text-blue-100">
                <li className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Bodestr. 5, 39418 Staßfurt</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={15} className="text-blue-400 flex-shrink-0" />
                  <a href="tel:+493925325179" className="hover:text-white transition-colors">
                    03925/325179
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={15} className="text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@wandt-ost.de" className="hover:text-white transition-colors">
                    info@wandt-ost.de
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Mo – Fr &nbsp;09:00 – 17:00 Uhr</span>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-blue-300 mb-5">
                Rechtliches
              </p>
              <ul className="space-y-2.5 text-sm text-blue-100">
                <li>
                  <button
                    onClick={() => setShowImpressum(true)}
                    className="hover:text-white transition-colors"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowDatenschutz(true)}
                    className="hover:text-white transition-colors"
                  >
                    Datenschutz
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-blue-400">
            <p>&copy; {new Date().getFullYear()} WANDT Orthopädie-Schuhtechnik, Inhaber Dirk Wandt</p>
            <p>Bodestr. 5, 39418 Staßfurt</p>
          </div>
        </div>
      </footer>
    </>
  );
}
