import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProfessionalExperiences = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: 'Stagiaire Logistique - Gabon Oil Company',
      period: 'Juillet 2024 - Septembre 2024',
      location: 'Port-Gentil, Gabon',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      responsibilities: [
        'Gestion des stocks de matériel parapétrolier',
        'Coordination des livraisons sur sites offshore (15+ navettes/semaine)',
        'Suivi documentaire des équipements sensibles',
        'Reporting quotidien auprès du superviseur logistique',
      ],
      results: [
        { metric: '-12%', label: 'Délais de livraison' },
        { metric: '98%', label: 'Taux de conformité' },
        { metric: '850K', label: 'FCFA économisés' },
      ],
      skills: ['Logistique', 'Gestion stocks', 'Coordination', 'Rigueur'],
    },
    {
      title: 'Assistant Junior-Entreprise - JE Gabon Business',
      period: 'Janvier 2024 - Juin 2024',
      location: 'Libreville, Gabon',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      responsibilities: [
        'Réalisation d\'études de marché pour PME locales',
        'Accompagnement de 8 entreprises gabonaises',
        'Développement d\'outils de gestion commerciale',
        'Animation d\'ateliers de formation (40+ participants)',
      ],
      results: [
        { metric: '8', label: 'Projets réalisés' },
        { metric: '4.6/5', label: 'Satisfaction clients' },
        { metric: '+28%', label: 'CA moyen clients' },
      ],
      skills: ['Conseil', 'Analyse', 'Communication', 'Gestion de projet'],
    },
    {
      title: 'Assistant Administratif - Caisse Nationale d\'Assurance Maladie',
      period: 'Juin 2023 - Août 2023',
      location: 'Libreville, Gabon',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      responsibilities: [
        'Traitement des dossiers d\'adhésion (120+ dossiers/mois)',
        'Accueil et renseignement des assurés',
        'Archivage et numérisation des documents',
        'Support à l\'équipe administrative',
      ],
      results: [
        { metric: '+35%', label: 'Productivité équipe' },
        { metric: '650+', label: 'Dossiers traités' },
        { metric: '92%', label: 'Satisfaction usagers' },
      ],
      skills: ['Administration', 'Organisation', 'Service public', 'Informatique'],
    },
    {
      title: 'Bénévole - Association Gabon Vert',
      period: 'Mars 2023 - Décembre 2023',
      location: 'Libreville, Gabon',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      responsibilities: [
        'Organisation de campagnes de sensibilisation environnementale',
        'Coordination d\'équipes de volontaires (25+ personnes)',
        'Gestion des réseaux sociaux de l\'association',
        'Collecte de fonds pour projets écologiques',
      ],
      results: [
        { metric: '1.2M', label: 'FCFA collectés' },
        { metric: '450+', label: 'Participants mobilisés' },
        { metric: '5', label: 'Campagnes menées' },
      ],
      skills: ['Engagement', 'Mobilisation', 'Communication digitale', 'Événementiel'],
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