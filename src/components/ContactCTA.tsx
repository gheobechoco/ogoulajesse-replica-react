import { Calendar, MessageCircle, Mail } from 'lucide-react';

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
