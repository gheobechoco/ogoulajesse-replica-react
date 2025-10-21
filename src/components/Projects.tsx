import { FolderOpen, Users, Eye, Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Application de Gestion de Restaurant',
      category: 'Développement Web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Application complète de gestion pour restaurants avec système de réservation et commandes en ligne.',
      teamSize: 4,
      views: 1250,
      ranking: '1er',
      metrics: [
        { label: 'Utilisateurs', value: '200+' },
        { label: 'Note', value: '4.8/5' },
        { label: 'Réservations', value: '500+' },
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'UI/UX'],
    },
    {
      title: 'Plateforme E-learning Étudiante',
      category: 'Projet Académique',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      description: 'Plateforme collaborative d\'apprentissage avec partage de ressources et forums de discussion.',
      teamSize: 3,
      views: 850,
      ranking: '2ème',
      metrics: [
        { label: 'Étudiants', value: '150+' },
        { label: 'Cours', value: '45' },
        { label: 'Engagement', value: '92%' },
      ],
      tags: ['Vue.js', 'Firebase', 'Tailwind'],
    },
    {
      title: 'Portfolio Interactif Designer',
      category: 'Design & Créativité',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      description: 'Site portfolio moderne avec animations 3D et expérience utilisateur immersive.',
      teamSize: 2,
      views: 2100,
      ranking: '1er',
      metrics: [
        { label: 'Visites', value: '2.1K' },
        { label: 'Projets', value: '28' },
        { label: 'Conversion', value: '15%' },
      ],
      tags: ['React', 'Three.js', 'Framer Motion'],
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
