import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

/* SERVICES SECTION - Section des services
   POUR MODIFIER LES SERVICES : Changez le tableau services ci-dessous
   POUR AJOUTER UN SERVICE : Ajoutez un objet au tableau services
   POUR MODIFIER LES COULEURS : Utilisez les classes du design system
*/

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // POUR MODIFIER LES SERVICES : Changez ce tableau
  const services = [
    {
      id: 'consulting',
      title: 'Consulting Growth',
      description: 'Stratégies de croissance personnalisées pour accélérer votre développement business.',
      features: [
        'Audit croissance',
        'Stratégie acquisition multicanales',
        'Recommandations actionnables & coaching stratégique',
        'Optimisation conversion',
        'Tableaux de bord & analytics avancés'
      ],
      color: 'accent-red'
    },
    {
      id: 'formation',
      title: 'Formation',
      description: 'Formation en marketing numérique et transformation digitale.',
      features: [
        'Marketing digital (réseaux sociaux, acquisition, SEO)',
        'Acculturation numérique (vocabulaire, enjeux, culture digitale)',
        'Suivi personnalisé',
        'Initiation à l\'IA pour les pros (ChatGPT, outils no-code, automatisation)'
      ],
      color: 'primary'
    }
  ];

  const handleLearnMore = (serviceId: string) => {
    // POUR MODIFIER L'ACTION : Changez cette fonction selon vos besoins
    console.log(`En savoir plus sur: ${serviceId}`);
    // Exemple: redirection vers une page détaillée
    // window.location.href = `/services/${serviceId}`;
  };

  return (
    <section id="services" ref={sectionRef} className="section-spacing bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          {/* Titre de section */}
          <h2 className="section-title">Mes Services</h2>
          <div className="w-16 h-1 bg-accent-red mx-auto mb-6"></div>
          <p className="section-subtitle">
            Des solutions sur-mesure pour impulser votre croissance et co-créer votre succès numérique
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`custom-card ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Barre de couleur en haut */}
              <div className={`h-1 w-full rounded-t-xl mb-6 ${
                service.color === 'accent-red' ? 'bg-accent-red' : 'bg-primary'
              }`}></div>

              {/* Contenu de la carte */}
              <div className="space-y-6">
                {/* Titre du service */}
                <h3 className="text-2xl font-bold text-primary">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground">
                  {service.description}
                </p>

                {/* Liste des fonctionnalités */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        service.color === 'accent-red' ? 'bg-accent-red' : 'bg-primary'
                      }`}></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bouton CTA */}
                <Button
                  onClick={() => handleLearnMore(service.id)}
                  className={`w-full ${
                    service.color === 'accent-red' ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  En savoir plus
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA additionnelle */}
        <div className={`text-center mt-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.6s' }}>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-border max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">
              Besoin d'une solution sur-mesure ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Chaque projet est unique. Discutons de vos besoins spécifiques pour créer la solution parfaite.
            </p>
            <Button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Parlons de votre projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;