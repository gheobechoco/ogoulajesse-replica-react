import { useEffect, useState } from 'react';

/* FOOTER COMPONENT - Pied de page du site
   POUR MODIFIER LES INFORMATIONS DE CONTACT : Changez les variables de contact
   POUR MODIFIER LES LIENS : Modifiez les tableaux services et resources
   POUR CHANGER LES RÉSEAUX SOCIAUX : Modifiez le tableau socialLinks
*/

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // POUR MODIFIER LES INFORMATIONS DE CONTACT : Changez ces variables
  const contactInfo = {
    email: 'contact@ogoulajesse.pro',
    phone: '+241 066 19 57 86',
    location: 'Libreville, Gabon'
  };

  // POUR MODIFIER LES SERVICES : Changez ce tableau
  const services = [
    { name: 'Consulting Growth', href: '#services' },
    { name: 'Formation', href: '#services' },
    { name: 'Product Management', href: '#services' },
    { name: 'Accompagnement', href: '#services' }
  ];

  // POUR MODIFIER LES RESSOURCES : Changez ce tableau
  const resources = [
    { name: 'Certifications', href: '#certifications' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Portfolio', href: '#realisations' },
    { name: 'À propos', href: '#about' }
  ];

  // POUR MODIFIER LES RÉSEAUX SOCIAUX : Changez ce tableau
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/ogoulajesse', 
      icon: '💼'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/ogoulajesse', 
      icon: '🐦'
    },
    { 
      name: 'Email', 
      href: `mailto:${contactInfo.email}`, 
      icon: '✉️'
    }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4 py-16">
        <div className={`grid md:grid-cols-4 gap-8 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          
          {/* Colonne 1 : Informations principales */}
          <div className="md:col-span-2 space-y-6">
            {/* Logo et description */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-red rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">OJ</span>
                </div>
                <span className="ml-3 text-xl font-bold">Jesse Ogoula</span>
              </div>
              <p className="text-primary-foreground/80 max-w-md leading-relaxed">
                Product & Growth Manager / Formateur engagé, j'aide les entreprises et les talents à innover, se transformer et prospérer dans l'écosystème numérique.
              </p>
            </div>

            {/* Informations de contact */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-2">
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent-red transition-colors duration-200"
                >
                  <span>✉️</span>
                  <span>{contactInfo.email}</span>
                </a>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent-red transition-colors duration-200"
                >
                  <span>📞</span>
                  <span>{contactInfo.phone}</span>
                </a>
                <div className="flex items-center space-x-3 text-primary-foreground/80">
                  <span>📍</span>
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Services */}
          <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-primary-foreground/80 hover:text-accent-red transition-colors duration-200 text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Ressources */}
          <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.4s' }}>
            <h4 className="font-semibold text-lg mb-6">Ressources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(resource.href)}
                    className="text-primary-foreground/80 hover:text-accent-red transition-colors duration-200 text-left"
                  >
                    {resource.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className={`mt-12 pt-8 border-t border-primary-foreground/20 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-6">
              <span className="text-primary-foreground/80">Suivez-moi :</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent-red transition-colors duration-200"
                  title={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              ))}
            </div>

            {/* Bouton retour en haut */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent-red transition-colors duration-200"
            >
              <span>Retour en haut</span>
              <span>⬆️</span>
            </button>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className={`flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60 ${isVisible ? 'fade-in animate' : 'fade-in'}`} style={{ animationDelay: '0.8s' }}>
            <p>
              © {currentYear} Jesse Ogoula. Tous droits réservés.
            </p>
            <p className="mt-2 md:mt-0">
              Fait avec ❤️ pour l'écosystème numérique francophone
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;