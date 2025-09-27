import { useEffect, useRef, useState } from 'react';

/* CERTIFICATIONS SECTION - Section des certifications et distinctions
   POUR MODIFIER LES CERTIFICATIONS : Changez le tableau certifications ci-dessous
   POUR AJOUTER UNE CERTIFICATION : Ajoutez un objet au tableau certifications
*/

const Certifications = () => {
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

  // POUR MODIFIER LES CERTIFICATIONS : Changez ce tableau
  const certifications = [
    {
      title: 'Product Manager Certifié',
      organization: 'École 241',
      year: '2022',
      description: 'Certification complète en Product Management avec focus sur les métriques et la stratégie produit.',
      icon: '🏆',
      color: 'accent-red'
    },
    {
      title: 'Formateur Simplon certifié en pédagogie active',
      organization: 'Simplon Africa',
      year: '2024',
      description: 'Habilitation officielle pour former aux métiers du numérique et de la tech.',
      icon: '🎯',
      color: 'primary'
    },
    {
      title: 'Tuteur D-CLIC (OIF)',
      organization: 'Organisation Internationale de la Francophonie',
      year: '2025',
      description: 'Tuteur certifié pour le programme de formation numérique francophone D-CLIC.',
      icon: '🌍',
      color: 'accent-red'
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="section-spacing bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          {/* Titre de section */}
          <h2 className="section-title">Certifications & Distinctions</h2>
          <div className="w-16 h-1 bg-accent-red mx-auto mb-6"></div>
        </div>

        {/* Sous-titre */}
        <div className={`text-center mb-12 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold text-primary mb-4">Certifications Professionnelles</h3>
        </div>

        {/* Liste des certifications */}
        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`custom-card ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <div className="flex items-start space-x-6">
                {/* Icône */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                  cert.color === 'accent-red' 
                    ? 'bg-accent-red/10 text-accent-red' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {cert.icon}
                </div>

                {/* Contenu */}
                <div className="flex-1 space-y-3">
                  {/* Titre et année */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-bold text-primary">
                      {cert.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {cert.year}
                    </span>
                  </div>

                  {/* Organisation */}
                  <p className={`font-medium ${
                    cert.color === 'accent-red' ? 'text-accent-red' : 'text-primary'
                  }`}>
                    {cert.organization}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Citation inspirante */}
        <div className={`mt-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-primary text-primary-foreground rounded-xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-lg italic text-center leading-relaxed">
              "En tant que professionnel du numérique, je m'efforce chaque jour de perfectionner mes compétences et d'élargir mon expertise. Mon engagement dans l'accompagnement des apprenants et le soutien aux entreprises dans leur transformation digitale témoigne de ma volonté d'avoir un impact positif dans l'écosystème numérique francophone. Je continue à travailler avec passion et détermination, en espérant que mon expertise et mon dévouement contribueront à façonner l'avenir numérique de notre communauté."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;