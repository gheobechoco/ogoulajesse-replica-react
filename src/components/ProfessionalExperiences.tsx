import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProfessionalExperiences = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: 'Serveur - Restaurant Le Gourmet',
      period: 'Juin 2023 - Août 2024',
      location: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      responsibilities: [
        'Accueil et conseil des clients (50+ couverts/jour)',
        'Prise de commandes et service à table',
        'Gestion de la caisse et encaissements',
        'Formation des nouveaux serveurs',
      ],
      results: [
        { metric: '+15%', label: 'Pourboires vs moyenne' },
        { metric: '4.8/5', label: 'Note satisfaction client' },
        { metric: '95%', label: 'Taux de fidélisation' },
      ],
      skills: ['Service client', 'Gestion du stress', 'Travail d\'équipe', 'Communication'],
    },
    {
      title: 'Assistant Manager - Café Central',
      period: 'Septembre 2022 - Mai 2023',
      location: 'Lyon, France',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
      responsibilities: [
        'Supervision d\'une équipe de 5 personnes',
        'Gestion des stocks et commandes',
        'Ouverture/fermeture de l\'établissement',
        'Résolution des réclamations clients',
      ],
      results: [
        { metric: '+22%', label: 'Augmentation CA' },
        { metric: '98%', label: 'Satisfaction équipe' },
        { metric: '-12%', label: 'Réduction déchets' },
      ],
      skills: ['Leadership', 'Gestion', 'Organisation', 'Résolution problèmes'],
    },
  ];

  return (
    <section id="experiences" className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">{t('experiencesTitle')}</h2>
          </div>
          <p className="section-subtitle">{t('experiencesSubtitle')}</p>

          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="portecv-card group">
                <div className="grid md:grid-cols-5 gap-6">
                  {/* Image */}
                  <div className="md:col-span-2">
                    <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{exp.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Responsabilités */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {t('responsibilities')}
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Résultats */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-success mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        {t('results')}
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {exp.results.map((result, i) => (
                          <div key={i} className="bg-success/10 rounded-lg p-2 text-center">
                            <div className="text-lg font-bold text-success">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Compétences */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="badge-skill text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default ProfessionalExperiences;
