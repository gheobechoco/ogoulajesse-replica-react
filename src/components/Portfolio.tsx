import { useEffect, useRef, useState } from 'react';

/* PORTFOLIO SECTION - Section des réalisations
   POUR MODIFIER LES PROJETS : Changez le tableau projects ci-dessous
   POUR AJOUTER UN PROJET : Ajoutez un objet au tableau projects
   POUR MODIFIER LES IMAGES : Remplacez les images dans src/assets/
*/

const Portfolio = () => {
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

  // POUR MODIFIER LES PROJETS : Changez ce tableau
  const projects = [
    {
      id: 'africakard',
      title: 'Africakard',
      category: 'Gestion de produit',
      duration: '4 mois',
      description: 'plateforme en ligne, spécialisée dans la vente de cartes cadeaux numériques et d\'abonnements pour divers services de divertissement et de jeux.',
      image: '💳', // POUR MODIFIER : Remplacez par une vraie image
      stats: [
        { label: 'Utilisateurs actifs', value: '+1500%', color: 'accent-red' },
        { label: 'Transactions', value: '+200%', color: 'primary' },
        { label: 'Taux de rétention', value: '85%', color: 'accent-red' }
      ],
      tags: ['E-commerce', 'Product Management', 'Growth']
    },
    {
      id: 'ecole241',
      title: 'École 241',
      category: 'Formation',
      duration: '24 mois',
      description: 'établissement de formation aux métiers du numérique basé au Gabon. Fondée en 2018 par l\'incubateur Ogooué Labs, elle vise à démocratiser l\'accès aux compétences numériques pour les jeunes, les femmes et les personnes éloignées de l\'emploi.',
      image: '🎓', // POUR MODIFIER : Remplacez par une vraie image
      stats: [
        { label: 'Étudiants formés', value: '15+', color: 'primary' },
        { label: 'Taux d\'insertion', value: '75%', color: 'accent-red' },
        { label: 'Satisfaction', value: '92%', color: 'primary' }
      ],
      tags: ['Éducation', 'Digital', 'Formation']
    },
    {
      id: 'other-project',
      title: 'Autres Projets',
      category: 'Site web',
      duration: '2 mois',
      description: 'Découvrez d\'autres projets significatifs sur lesquels j\'ai eu l\'opportunité d\'avoir un impact.',
      image: '🚀', // POUR MODIFIER : Remplacez par une vraie image
      stats: [
        { label: 'Projets réalisés', value: '20+', color: 'accent-red' },
        { label: 'Clients satisfaits', value: '100%', color: 'primary' },
        { label: 'Croissance moyenne', value: '35%', color: 'accent-red' }
      ],
      tags: ['Web Development', 'Consulting', 'Growth']
    }
  ];

  return (
    <section id="realisations" ref={sectionRef} className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          {/* Titre de section */}
          <h2 className="section-title">Réalisations</h2>
          <div className="w-16 h-1 bg-accent-red mx-auto mb-6"></div>
          <p className="section-subtitle">
            Découvrez quelques projets significatifs sur lesquels j'ai eu l'opportunité d'avoir un impact.
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group cursor-pointer ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="custom-card h-full">
                {/* En-tête du projet */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    {/* Badge catégorie */}
                    <span className="bg-accent-red/10 text-accent-red px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {project.duration}
                    </div>
                  </div>
                  
                  {/* Icône du projet - POUR MODIFIER : Remplacez par une vraie image */}
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-red/20 to-primary/20 rounded-xl flex items-center justify-center text-2xl">
                    {project.image}
                  </div>
                </div>

                {/* Contenu */}
                <div className="space-y-4">
                  {/* Titre */}
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent-red transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Statistiques */}
                  <div className="grid grid-cols-3 gap-4 py-4">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className={`text-lg font-bold ${
                          stat.color === 'accent-red' ? 'text-accent-red' : 'text-primary'
                        }`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Indicateur hover */}
                <div className="mt-6 flex items-center text-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-sm font-medium">Voir le détail</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA pour voir plus de projets */}
        <div className={`text-center mt-12 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-6">
            Intéressé par mes autres réalisations ?
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Discutons de votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;