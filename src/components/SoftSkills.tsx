import { MessageCircle, Users, Flag, Lightbulb, RefreshCw, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Progress } from './ui/progress';

const SoftSkills = () => {
  const { t } = useLanguage();

  const softSkills = [
    { name: t('communication'), level: 90, icon: MessageCircle, emoji: '💬' },
    { name: t('teamwork'), level: 85, icon: Users, emoji: '👥' },
    { name: t('leadership'), level: 75, icon: Flag, emoji: '🚩' },
    { name: t('creativity'), level: 88, icon: Lightbulb, emoji: '💡' },
    { name: t('adaptability'), level: 92, icon: RefreshCw, emoji: '🔄' },
    { name: t('criticalThinking'), level: 80, icon: Search, emoji: '🔍' },
  ];

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">{t('softSkillsTitle')}</h2>
          </div>
          <p className="section-subtitle">
            {t('softSkillsSubtitle')}
          </p>

          <div className="max-w-5xl mx-auto">
            {/* Grid Layout */}
            <div className="grid md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="portecv-card group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <span className="text-3xl icon-hover">{skill.emoji}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-5 h-5 text-primary" />
                          <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress value={skill.level} className="h-2 flex-1" />
                          <span className="text-sm font-bold text-primary">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Radar Chart Alternative - Visual Representation */}
            <div className="mt-12 portecv-card bg-gradient-to-br from-primary/5 to-success/5">
              <h3 className="text-xl font-bold text-center text-foreground mb-8">
                Profil de compétences comportementales
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {softSkills.map((skill, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="44"
                          stroke="hsl(var(--secondary))"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="44"
                          stroke="hsl(var(--primary))"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 44}`}
                          strokeDashoffset={`${2 * Math.PI * 44 * (1 - skill.level / 100)}`}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl">{skill.emoji}</span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-foreground">{skill.name}</div>
                    <div className="text-lg font-bold text-primary">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
