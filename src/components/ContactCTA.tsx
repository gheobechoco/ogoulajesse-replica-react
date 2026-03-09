import { Calendar, Mail } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);


const ContactCTA = () => {
  return (
    <section id="contact" className="relative section-spacing overflow-hidden">
      {/* Gradient background matching reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-400/90 via-red-400/80 to-slate-500/70"></div>
      <div className="absolute inset-0 bg-background/5 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="fade-in-up text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Disponible pour entretiens</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Prêt à Me Rencontrer ?
          </h2>
          <p className="text-lg text-white/80 mb-12 max-w-xl mx-auto">
            Planifiez un entretien directement depuis mon portfolio
          </p>

          {/* Glass card with buttons */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href="mailto:moueletgeoff@gmail.com"
                  className="flex items-center justify-center gap-3 bg-white text-rose-500 px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg text-base"
                >
                  <Calendar className="w-5 h-5" />
                  Réserver un Appel
                </a>
                <a
                  href="https://wa.me/241077657635"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/90 text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-200 shadow-lg text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Notification */}
          <div className="mt-10 flex items-center justify-center gap-2 text-white/70">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Notifications envoyées à <strong className="text-white">moueletgeoff@gmail.com</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
