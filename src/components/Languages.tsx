import { Globe, MessageSquare, Slack, Trello, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Progress } from './ui/progress';

const Languages = () => {
  const { t } = useLanguage();

  const languages = [
    {
      name: t('french'),
      flag: '🇫🇷',
      level: 100,
      description: t('nativeLanguage'),
    },
    {
      name: t('english'),
      flag: '🇬🇧',
      level: 80,
      description: t('professionalLevel'),
    },
  ];

  const tools = [
    { name: 'Canva', icon: '🎨', level: 92, category: 'Design' },
    { name: 'Notion', icon: '📝', level: 88, category: 'Productivité' },
    { name: 'Slack', icon: Slack, level: 85, category: 'Communication' },
    { name: 'Trello', icon: Trello, level: 80, category: 'Gestion de projet' },
    { name: 'Zoom', icon: Video, level: 90, category: 'Visioconférence' },
    { name: 'Microsoft Teams', icon: MessageSquare, level: 82, category: 'Collaboration' },
  ];

  return (
    <section id="langues" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">{t('languagesTitle')}</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Langues */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary" />
                Langues parlées
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {languages.map((lang, index) => (
                  <div key={index} className="portecv-card">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl">{lang.flag}</span>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground mb-1">{lang.name}</h4>
                        <p className="text-sm text-muted-foreground">{lang.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={lang.level} className="h-3 flex-1" />
                      <span className="text-lg font-bold text-primary">{lang.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outils de communication */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-success" />
                Outils de communication & collaboration
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {tools.map((tool, index) => {
                  const isIcon = typeof tool.icon !== 'string';
                  const Icon = isIcon ? tool.icon : null;
                  
                  return (
                    <div key={index} className="portecv-card group hover:border-primary/50">
              <div className="flex items-center gap-3 mb-3">
                {isIcon && Icon ? (
                  <Icon className="w-8 h-8 text-primary icon-hover" />
                ) : (
                  <span className="text-3xl icon-hover">{tool.icon as string}</span>
                )}
                        <div>
                          <h4 className="font-semibold text-foreground">{tool.name}</h4>
                          <p className="text-xs text-muted-foreground">{tool.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={tool.level} className="h-2 flex-1" />
                        <span className="text-sm font-bold text-primary">{tool.level}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
