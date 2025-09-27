import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

/* CTA SECTION - Section d'appel à l'action finale
   POUR MODIFIER LE TITRE : Changez la variable title
   POUR MODIFIER LE TEXTE : Changez la variable subtitle
   POUR MODIFIER L'ACTION : Changez la fonction handleCTA
*/

const CTA = () => {
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

  // POUR MODIFIER LE CONTENU : Changez ces variables
  const title = "Prêt à Accélérer Votre Croissance ?";
  const subtitle = "Réservez un appel découverte de 30 minutes et discutons de votre vision";

  const handleCTA = () => {
    // POUR MODIFIER L'ACTION : Changez cette fonction selon vos besoins
    // Exemple : redirection vers Calendly
    // window.open('https://calendly.com/ogoulajesse', '_blank');
    
    // Ou scroll vers la section contact
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" ref={sectionRef} className="section-spacing bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          {/* Carte principale CTA */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-border text-center">
            {/* Icône */}
            <div className={`w-16 h-16 bg-gradient-to-br from-accent-red/20 to-primary/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 ${isVisible ? 'fade-in animate' : 'fade-in'}`} style={{ animationDelay: '0.2s' }}>
              🚀
            </div>

            {/* Titre principal */}
            <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-6 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.3s' }}>
              {title}
            </h2>

            {/* Ligne décorative */}
            <div className={`w-16 h-1 bg-accent-red mx-auto mb-6 ${isVisible ? 'fade-in animate' : 'fade-in'}`} style={{ animationDelay: '0.4s' }}></div>

            {/* Sous-titre */}
            <p className={`text-lg text-muted-foreground mb-8 max-w-2xl mx-auto ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.5s' }}>
              {subtitle}
            </p>

            {/* Bouton CTA principal */}
            <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.6s' }}>
              <Button
                onClick={handleCTA}
                className="btn-primary text-lg px-8 py-4"
              >
                📅 Réserver un Appel
              </Button>
            </div>

            {/* Informations complémentaires */}
            <div className={`mt-8 grid md:grid-cols-3 gap-6 text-center ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.7s' }}>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-accent-red">⏱️</span>
                </div>
                <h4 className="font-semibold text-primary">30 minutes</h4>
                <p className="text-sm text-muted-foreground">Appel découverte gratuit</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-8 h-8 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-accent-red">💡</span>
                </div>
                <h4 className="font-semibold text-primary">Sur-mesure</h4>
                <p className="text-sm text-muted-foreground">Solutions adaptées à vos besoins</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-8 h-8 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-accent-red">📈</span>
                </div>
                <h4 className="font-semibold text-primary">Résultats</h4>
                <p className="text-sm text-muted-foreground">Croissance mesurable garantie</p>
              </div>
            </div>

            {/* Note de confiance */}
            <div className={`mt-8 text-center ${isVisible ? 'fade-in animate' : 'fade-in'}`} style={{ animationDelay: '0.8s' }}>
              <p className="text-sm text-muted-foreground italic">
                ✅ Aucun engagement • ✅ Conseils personnalisés • ✅ Expérience prouvée
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;