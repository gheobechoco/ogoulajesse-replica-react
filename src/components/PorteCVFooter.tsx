import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from 'lucide-react';

const PorteCVFooter = () => {
  const socials = [
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Github, url: '#', label: 'GitHub' },
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
            <button className="btn-primary flex items-center gap-2 mx-auto icon-hover">
              <Mail className="w-5 h-5" />
              etudiant@portecv.fr
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3 icon-hover" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">etudiant@portecv.fr</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3 icon-hover" />
              <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
              <p className="text-sm text-muted-foreground">+33 6 12 34 56 78</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3 icon-hover" />
              <h3 className="font-semibold text-foreground mb-2">Localisation</h3>
              <p className="text-sm text-muted-foreground">Paris, France</p>
            </div>
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
