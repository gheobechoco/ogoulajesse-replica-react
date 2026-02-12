import { Users } from 'lucide-react';
import { Progress } from './ui/progress';

const BehavioralSkills = () => {
  const skills = [
    { name: 'Adaptabilité', level: 85, emoji: '🔄' },
    { name: "Travail d'équipe", level: 90, emoji: '👥' },
    { name: 'Communication', level: 80, emoji: '💬' },
    { name: 'Résolution de problèmes', level: 75, emoji: '🧠' },
    { name: 'Organisation', level: 85, emoji: '📋' },
    { name: 'Créativité', level: 70, emoji: '🎨' },
  ];

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">Profil de compétences comportementales</h2>
          </div>
          <p className="section-subtitle">Les qualités qui font la différence en situation professionnelle</p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="portecv-card group hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-3xl">{skill.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{skill.name}</h3>
                    <div className="flex items-center gap-3">
                      <Progress value={skill.level} className="h-2 flex-1" />
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
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

export default BehavioralSkills;
