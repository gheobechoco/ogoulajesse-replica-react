import { Code, Palette, Database, Globe, Zap, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Progress } from './ui/progress';

const TechnicalSkills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: 'Développement Web',
      icon: Code,
      color: 'text-primary',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 75 },
        { name: 'React', level: 70 },
        { name: 'TypeScript', level: 65 },
      ],
    },
    {
      category: 'Design & Créativité',
      icon: Palette,
      color: 'text-success',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Canva', level: 92 },
        { name: 'Adobe Photoshop', level: 70 },
        { name: 'UI/UX Design', level: 75 },
      ],
    },
    {
      category: 'Outils & Productivité',
      icon: Zap,
      color: 'text-primary',
      skills: [
        { name: 'Microsoft Office', level: 95 },
        { name: 'Google Workspace', level: 90 },
        { name: 'Notion', level: 88 },
        { name: 'Trello', level: 85 },
      ],
    },
  ];

  const certifications = [
    { name: 'Google Digital Marketing', issuer: 'Google', year: '2024' },
    { name: 'React Fundamentals', issuer: 'freeCodeCamp', year: '2024' },
    { name: 'UX Design Certificate', issuer: 'Coursera', year: '2023' },
  ];

  return (
    <section id="competences" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">{t('technicalSkillsTitle')}</h2>
          </div>

          {/* Skills Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="portecv-card">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className={`w-8 h-8 ${category.color} icon-hover`} />
                    <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
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
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-success icon-pulse" />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="portecv-card bg-gradient-to-br from-success/10 to-primary/10 border-success/30">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <span className="inline-block mt-2 text-xs font-medium text-success">{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
