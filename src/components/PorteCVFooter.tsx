import { Mail, Phone, MapPin } from 'lucide-react';

const PorteCVFooter = () => {
  const navigation = ['Présentation', 'Compétences', 'Documents', 'Rendez-vous'];
  const liensRapides = ['Présentation Vidéo', 'Compétences Linguistiques', 'Mes Compétences', 'Prendre Rendez-vous'];

  return (
    <footer className="bg-card border-t border-border section-spacing relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-success/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">PC</span>
                </div>
                <span className="text-lg font-bold text-primary">PortCV Étudiant</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">RILOGUE BARRE Innivha</h3>
              <p className="text-sm text-muted-foreground">
                Étudiant passionné transformant mes compétences en opportunités professionnelles
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Liens rapides */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                {liensRapides.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:moueletgeoff@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    moueletgeoff@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/24177657635" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    +241 077 65 76 35
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Port-Gentil,+Gabon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Port-Gentil, GABON
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RILOGUE BARRE Innivha. Tous droits réservés.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Développé par Geoff MOUELET
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PorteCVFooter;
