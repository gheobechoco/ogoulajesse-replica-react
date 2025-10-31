import { Calculator, Megaphone, Laptop, Users, Scale, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TechnicalSkills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      emoji: '🧮',
      category: 'Gestion comptable et financière',
      icon: Calculator,
      color: 'text-primary',
      skills: [
        'Maîtrise des principes de la comptabilité générale',
        'Capacité à enregistrer et analyser les opérations financières',
        'Compréhension du fonctionnement des états financiers',
      ],
      matiere: 'Comptabilité générale',
    },
    {
      emoji: '📢',
      category: 'Marketing et analyse du marché',
      icon: Megaphone,
      color: 'text-success',
      skills: [
        'Connaissance des fondamentaux du marketing',
        'Capacité à comprendre les besoins du consommateur et la segmentation du marché',
        'Aptitude à concevoir des stratégies de communication et de vente',
      ],
      matiere: 'Marketing fondamental',
    },
    {
      emoji: '💻',
      category: 'Utilisation des outils numériques de gestion',
      icon: Laptop,
      color: 'text-primary',
      skills: [
        'Utilisation des logiciels de bureautique et de gestion',
        'Gestion et traitement de données informatisées',
        'Initiation aux systèmes d\'information de gestion',
      ],
      matiere: 'Informatique de gestion',
    },
    {
      emoji: '👔',
      category: 'Management et coordination des équipes',
      icon: Users,
      color: 'text-success',
      skills: [
        'Compréhension des bases du management et du leadership',
        'Organisation et répartition du travail',
        'Suivi de la performance et motivation du personnel',
      ],
      matiere: 'Introduction au management',
    },
    {
      emoji: '⚖',
      category: 'Compréhension du cadre juridique et économique de l\'entreprise',
      icon: Scale,
      color: 'text-primary',
      skills: [
        'Connaissance des notions fondamentales du droit civil et commercial',
        'Capacité à analyser l\'environnement économique d\'une entreprise',
        'Compréhension des règles juridiques encadrant les activités économiques',
      ],
      matiere: 'Droit civil / Droit des affaires / Analyse économique',
    },
    {
      emoji: '🌍',
      category: 'Communication et langues des affaires',
      icon: Globe,
      color: 'text-success',
      skills: [
        'Expression écrite et orale en contexte professionnel',
        'Communication interculturelle et terminologie économique',
        'Capacité à rédiger et comprendre des documents professionnels multilingues',
      ],
      matiere: 'Français / Anglais / Espagnol des affaires',
    },
    {
      emoji: '📊',
      category: 'Analyse quantitative et résolution de problèmes',
      icon: TrendingUp,
      color: 'text-primary',
      skills: [
        'Maîtrise des outils mathématiques appliqués à la gestion',
        'Capacité à interpréter des données statistiques',
        'Aptitude à la modélisation et à la prise de décision basée sur les chiffres',
      ],
      matiere: 'Mathématiques générales / Statistiques descriptives',
    },
  ];

  return (
    <section id="competences" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">{t('technicalSkillsTitle')}</h2>
          </div>

          {/* Skills Grid */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="portecv-card">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{category.emoji}</span>
                    <Icon className={`w-7 h-7 ${category.color} icon-hover`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{category.category}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-primary">Sous-compétences :</p>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs font-medium text-foreground">
                      <span className="text-success">Matière(s) : </span>
                      {category.matiere}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
