import { Mail, Linkedin, MessageCircle, Twitter, MapPin, Phone } from 'lucide-react';

const PorteCVFooter = () => {
  const socials = [
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: MessageCircle, url: 'https://wa.me/24177657635', label: 'WhatsApp' },
    { icon: Twitter, url: '#', label: 'Twitter' },
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border section-spacing">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Contact CTA */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Travaillons ensemble ! 🚀
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Je suis disponible pour des opportunités de stage, jobs étudiants et alternances
            </p>
            <a 
              href="mailto:moueletgeoff@gmail.com"
              className="btn-primary flex items-center gap-2 mx-auto icon-hover"
            >
              <Mail className="w-5 h-5" />
              moueletgeoff@gmail.com
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:moueletgeoff@gmail.com"
              className="text-center group cursor-pointer"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-3 icon-hover" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                moueletgeoff@gmail.com
              </p>
            </a>
            <a 
              href="https://wa.me/24177657635"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group cursor-pointer"
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-3 icon-hover" />
              <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                +241 077 65 76 35
              </p>
            </a>
            <a 
              href="https://www.google.com/maps/place/Port-Gentil,+Gabon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group cursor-pointer"
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3 icon-hover" />
              <h3 className="font-semibold text-foreground mb-2">Localisation</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Port-Gentil, Gabon
              </p>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  className="w-12 h-12 bg-secondary hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 icon-hover group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PorteCV - Portfolio Étudiant Professionnel
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Créé avec ❤️ pour maximiser vos opportunités professionnelles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PorteCVFooter;
