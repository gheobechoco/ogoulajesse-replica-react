import { useEffect, useRef, useState } from 'react';

/* ABOUT SECTION - Section À propos
   POUR MODIFIER LE CONTENU : Changez les variables text ci-dessous
   POUR MODIFIER LES EXPERTISES : Modifiez le tableau expertises
   POUR CHANGER LES COULEURS : Utilisez les classes du design system
*/

const About = () => {
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
  const mainText = "Product & Growth Manager / Formateur engagé, passionné par le numérique comme levier de croissance et d'autonomisation en Afrique. Après plus de 7 ans en logistique, j'ai choisi en 2020 de me former à la conception de produits numériques et à l'accompagnement à la transformation digitale. Depuis, j'ai accompagné plus de 20 entreprises et porteurs de projets, en les aidant à créer des solutions centrées sur l'utilisateur, à optimiser leurs processus et à renforcer leur compétitivité. En parallèle, je forme et encadre des dizaines de jeunes aux compétences clés du digital, notamment en tant que tuteur en marketing digital pour le programme D-CLIC de l'OIF, qui impacte des milliers d'apprenants francophones.";

  // POUR MODIFIER LES EXPERTISES : Changez les éléments ci-dessous
  const expertises = [
    "Product Management",
    "Growth Marketing", 
    "développement web",
    "transformation digitale",
    "intelligence artificielle",
    "outils no-code",
    "pédagogie active"
  ];

  const mission = "transformer vos idées en produits innovants et transmettre les compétences qui feront grandir vos équipes et vos projets.";

  return (
    <section id="about" ref={sectionRef} className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <h2 className="section-title">À propos</h2>
            <div className="w-16 h-1 bg-accent-red mx-auto mb-6"></div>
            <p className="section-subtitle">Mon parcours et ma vision</p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-12">
            {/* Texte principal dans une carte */}
            <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
              <p className="text-lg leading-relaxed">
                {mainText}
              </p>
            </div>

            {/* Expertise et mission */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mes expertises */}
              <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  <span className="text-accent-red">Mes expertises :</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {expertises.map((expertise, index) => (
                    <span 
                      key={index}
                      className="bg-accent-red/10 text-accent-red px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {expertise}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ma mission */}
              <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  <span className="text-accent-red">Ma mission :</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;