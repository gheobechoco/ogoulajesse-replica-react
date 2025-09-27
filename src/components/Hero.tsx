import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import jesseProfile from '@/assets/jesse-profile.jpg';

/* HERO SECTION - Section principale d'accueil
   POUR MODIFIER L'IMAGE : Remplacez jesseProfile par votre image dans src/assets/
   POUR MODIFIER LE TEXTE : Changez les variables ci-dessous
   POUR MODIFIER LES STATISTIQUES : Modifiez le tableau stats
*/

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // POUR MODIFIER LE CONTENU : Changez ces variables
  const title = "De l'idée au produit,";
  const subtitle = "du talent à l'expertise.";
  const badge = "Product & Growth Manager / Formateur";
  const description = "Entrepreneur du numérique, Product & Growth Manager et formateur engagé : je crée, j'accompagne et je forme pour que vos projets deviennent des réussites durables.";

  // POUR MODIFIER LES STATISTIQUES : Changez les valeurs ci-dessous
  const stats = [
    { number: "20+", label: "projets réalisés" },
    { number: "35%", label: "croissance moyenne" },
    { number: "200+", label: "apprenants" }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
            {/* Badge - POUR MODIFIER : Changez la variable badge */}
            <div className="inline-block">
              <span className="bg-accent-red/10 text-accent-red px-4 py-2 rounded-full text-sm font-medium">
                {badge}
              </span>
            </div>

            {/* Titre principal - POUR MODIFIER : Changez les variables title et subtitle */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                {title}
                <br />
                <span className="text-foreground">{subtitle}</span>
              </h1>
              
              {/* Description - POUR MODIFIER : Changez la variable description */}
              <p className="text-lg text-muted-foreground max-w-xl">
                {description}
              </p>
            </div>

            {/* Boutons CTA - POUR MODIFIER LES ACTIONS : Modifiez les onClick */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="btn-primary"
              >
                📞 Réserver un call
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => {
                  // POUR MODIFIER : Remplacez par le lien de votre CV
                  window.open('/cv-ogoula-jesse.pdf', '_blank');
                }}
              >
                📄 Télécharger CV
              </Button>
            </div>

            {/* Statistiques - POUR MODIFIER : Changez le tableau stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image - POUR MODIFIER : Remplacez jesseProfile par votre image */}
          <div className={`relative ${isVisible ? 'fade-in animate' : 'fade-in'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Cercle décoratif */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-red/20 to-primary/20 rounded-full transform rotate-6"></div>
              
              {/* Image principale */}
              <div className="relative bg-white rounded-full p-4 shadow-2xl">
                <img
                  src={jesseProfile}
                  alt="Jesse Ogoula - Product & Growth Manager"
                  className="w-full h-auto rounded-full object-cover"
                />
              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">Disponible pour projets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;