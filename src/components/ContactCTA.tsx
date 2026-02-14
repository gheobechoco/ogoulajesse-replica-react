import { Calendar, MessageCircle, Mail } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative section-spacing overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-destructive/60"></div>
      <div className="absolute inset-0 bg-background/10 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="fade-in-up text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur border border-card/30 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Disponible pour entretiens</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Prêt à Me Rencontrer ?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Planifiez un entretien directement depuis mon portfolio
          </p>

          {/* Action buttons */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card/10 backdrop-blur-md border border-card/20 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:moueletgeoff@gmail.com"
                  className="flex items-center justify-center gap-3 bg-card text-primary px-8 py-4 rounded-full font-semibold hover:bg-card/90 transition-all duration-200 shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  📞 Réserver un Appel
                </a>
                <a
                  href="https://wa.me/241077657635"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg text-white"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  📱 Message WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Notification */}
          <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/70">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Notifications envoyées à <strong className="text-primary-foreground">moueletgeoff@gmail.com</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
