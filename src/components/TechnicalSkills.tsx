import { Calculator, Megaphone, Laptop, Users, Scale, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Progress } from './ui/progress';

const TechnicalSkills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      emoji: '🧮',
      category: 'Gestion comptable et financière',
      icon: Calculator,
      color: 'text-primary',
      skills: [
        { name: 'Maîtrise des principes de la comptabilité générale', level: 85 },
        { name: 'Capacité à enregistrer et analyser les opérations financières', level: 80 },
        { name: 'Compréhension du fonctionnement des états financiers', level: 75 },
      ],
      matiere: 'Comptabilité générale',
    },
    {
      emoji: '📢',
      category: 'Marketing et analyse du marché',
      icon: Megaphone,
      color: 'text-success',
      skills: [
        { name: 'Connaissance des fondamentaux du marketing', level: 90 },
        { name: 'Capacité à comprendre les besoins du consommateur et la segmentation du marché', level: 85 },
        { name: 'Aptitude à concevoir des stratégies de communication et de vente', level: 80 },
      ],
      matiere: 'Marketing fondamental',
    },
    {
      emoji: '💻',
      category: 'Utilisation des outils numériques de gestion',
      icon: Laptop,
      color: 'text-primary',
      skills: [
        { name: 'Utilisation des logiciels de bureautique et de gestion', level: 95 },
        { name: 'Gestion et traitement de données informatisées', level: 85 },
        { name: 'Initiation aux systèmes d\'information de gestion', level: 75 },
      ],
      matiere: 'Informatique de gestion',
    },
    {
      emoji: '👔',
      category: 'Management et coordination des équipes',
      icon: Users,
      color: 'text-success',
      skills: [
        { name: 'Compréhension des bases du management et du leadership', level: 80 },
        { name: 'Organisation et répartition du travail', level: 85 },
        { name: 'Suivi de la performance et motivation du personnel', level: 75 },
      ],
      matiere: 'Introduction au management',
    },
    {
      emoji: '⚖',
      category: 'Compréhension du cadre juridique et économique de l\'entreprise',
      icon: Scale,
      color: 'text-primary',
      skills: [
        { name: 'Connaissance des notions fondamentales du droit civil et commercial', level: 80 },
        { name: 'Capacité à analyser l\'environnement économique d\'une entreprise', level: 85 },
        { name: 'Compréhension des règles juridiques encadrant les activités économiques', level: 78 },
      ],
      matiere: 'Droit civil / Droit des affaires / Analyse économique',
    },
    {
      emoji: '🌍',
      category: 'Communication et langues des affaires',
      icon: Globe,
      color: 'text-success',
      skills: [
        { name: 'Expression écrite et orale en contexte professionnel', level: 90 },
        { name: 'Communication interculturelle et terminologie économique', level: 85 },
        { name: 'Capacité à rédiger et comprendre des documents professionnels multilingues', level: 80 },
      ],
      matiere: 'Français / Anglais / Espagnol des affaires',
    },
    {
      emoji: '📊',
      category: 'Analyse quantitative et résolution de problèmes',
      icon: TrendingUp,
      color: 'text-primary',
      skills: [
        { name: 'Maîtrise des outils mathématiques appliqués à la gestion', level: 82 },
        { name: 'Capacité à interpréter des données statistiques', level: 80 },
        { name: 'Aptitude à la modélisation et à la prise de décision basée sur les chiffres', level: 78 },
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
                  
                  <div className="space-y-4 mb-4">
                    <p className="text-sm font-semibold text-primary">Sous-compétences :</p>
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-primary font-bold">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
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
