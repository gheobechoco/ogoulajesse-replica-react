import { useEffect, useRef, useState } from 'react';

/* TRUST SECTION - Section "Ils me font confiance"
   POUR MODIFIER LES LOGOS : Remplacez les logos dans le tableau companies
   POUR AJOUTER/SUPPRIMER DES ENTREPRISES : Modifiez le tableau companies
   POUR CHANGER LE TITRE : Modifiez la variable title
*/

const Trust = () => {
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

  // POUR MODIFIER LES ENTREPRISES : Changez ce tableau
  // Remplacez les logos par vos vrais logos d'entreprises
  const companies = [
    {
      name: "Jimmy",
      logo: "🏢", // Remplacez par votre logo
      category: "Tech Startup"
    },
    {
      name: "Dressing For Kids", 
      logo: "👶", // Remplacez par votre logo
      category: "E-commerce"
    },
    {
      name: "FGTTO",
      logo: "🏓", // Remplacez par votre logo  
      category: "Sports"
    },
    {
      name: "École 241",
      logo: "🎓", // Remplacez par votre logo
      category: "Formation"
    },
    {
      name: "AfricaCard",
      logo: "💳", // Remplacez par votre logo
      category: "Fintech"
    },
    {
      name: "D-CLIC OIF",
      logo: "🌍", // Remplacez par votre logo
      category: "International"
    }
  ];

  return (
    <section id="trust" ref={sectionRef} className="section-spacing bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className={`text-center ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          {/* Titre de section - POUR MODIFIER : Changez le texte ci-dessous */}
          <h2 className="section-title">Ils me font confiance</h2>
          <div className="w-16 h-1 bg-accent-red mx-auto mb-6"></div>
          <p className="section-subtitle">
            Des entreprises et organisations avec lesquelles j'ai eu le plaisir de collaborer
          </p>

          {/* Grille des logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div 
                key={index}
                className={`group cursor-pointer ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2 border border-border">
                  {/* Logo - POUR MODIFIER : Remplacez les emojis par vos vrais logos */}
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </div>
                  
                  {/* Nom de l'entreprise */}
                  <h3 className="font-semibold text-primary text-sm mb-1">
                    {company.name}
                  </h3>
                  
                  {/* Catégorie */}
                  <p className="text-xs text-muted-foreground">
                    {company.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message additionnel */}
          <div className={`mt-12 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.8s' }}>
            <p className="text-muted-foreground italic">Et bien d'autres encore...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;