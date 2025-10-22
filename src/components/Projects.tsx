import { FolderOpen, Users, Eye, Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Portfolio Interactif Designer',
      category: 'Design & Communication',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      description: 'Site portfolio moderne avec animations et expérience utilisateur immersive pour présenter mes compétences.',
      teamSize: 2,
      views: 1240,
      ranking: '1er',
      metrics: [
        { label: 'Visites', value: '1.2K' },
        { label: 'Projets', value: '18' },
        { label: 'Conversion', value: '12%' },
      ],
      tags: ['Design', 'Web', 'UI/UX'],
    },
    {
      title: 'Étude d\'Optimisation des Flux Logistiques',
      category: 'Logistique & Transport',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      description: 'Analyse et optimisation des flux logistiques au Port de Port-Gentil pour réduire les temps d\'attente.',
      teamSize: 5,
      views: 890,
      ranking: '2ème',
      metrics: [
        { label: 'Réduction délais', value: '-18%' },
        { label: 'Containers analysés', value: '2.5K' },
        { label: 'Économies', value: '850K FCFA' },
      ],
      tags: ['Logistique', 'Analyse', 'Optimisation'],
    },
    {
      title: 'Système de Gestion des Ressources Minières',
      category: 'Mines & Ressources',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop',
      description: 'Conception d\'un système de suivi pour minimiser les pertes et optimiser l\'exploitation des ressources.',
      teamSize: 4,
      views: 720,
      ranking: '1er',
      metrics: [
        { label: 'Pertes réduites', value: '-25%' },
        { label: 'Sites suivis', value: '8' },
        { label: 'ROI', value: '+32%' },
      ],
      tags: ['Mines', 'Gestion', 'Données'],
    },
    {
      title: 'Plateforme PME Gabonaises',
      category: 'Économie Numérique',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Application mobile pour connecter les PME gabonaises avec leurs clients et faciliter la gestion.',
      teamSize: 3,
      views: 1580,
      ranking: '1er',
      metrics: [
        { label: 'PME inscrites', value: '145' },
        { label: 'Transactions', value: '3.2K' },
        { label: 'Satisfaction', value: '89%' },
      ],
      tags: ['Mobile', 'E-commerce', 'PME'],
    },
    {
      title: 'Chaîne de Valeur du Manioc',
      category: 'Agriculture & Agro-industrie',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
      description: 'Étude complète de la filière manioc au Gabon avec propositions d\'amélioration de la transformation.',
      teamSize: 6,
      views: 650,
      ranking: '3ème',
      metrics: [
        { label: 'Rendement', value: '+42%' },
        { label: 'Producteurs', value: '230' },
        { label: 'Produits', value: '12' },
      ],
      tags: ['Agriculture', 'Transformation', 'Développement'],
    },
    {
      title: 'Solutions Habitat Durable',
      category: 'BTP & Construction',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop',
      description: 'Conception de solutions de construction à moindre coût adaptées au climat tropical gabonais.',
      teamSize: 4,
      views: 940,
      ranking: '2ème',
      metrics: [
        { label: 'Coût réduit', value: '-35%' },
        { label: 'Prototypes', value: '5' },
        { label: 'Durabilité', value: '+50 ans' },
      ],
      tags: ['BTP', 'Innovation', 'Écologie'],
    },
  ];

  return (
    <section id="projets" className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FolderOpen className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">{t('projectsTitle')}</h2>
          </div>
          <p className="section-subtitle">{t('projectsSubtitle')}</p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="portecv-card group hover:border-primary/50">
                {/* Image avec overlay */}
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button className="flex items-center gap-2 text-white text-sm font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Voir le projet
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Award className="w-5 h-5 text-success flex-shrink-0 icon-pulse" />
                  </div>

                  <p className="text-sm text-primary font-medium">{project.category}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="bg-secondary/50 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.teamSize}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {project.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-success" />
                      {project.ranking}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;