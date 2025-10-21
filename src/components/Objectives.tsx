import { Target, TrendingUp, Calendar, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Objectives = () => {
  const { t } = useLanguage();

  const kpis = [
    { label: t('kpi1'), value: '50+', icon: TrendingUp, color: 'text-primary' },
    { label: t('kpi2'), value: '12', icon: CheckCircle2, color: 'text-success' },
    { label: t('kpi3'), value: '68%', icon: Target, color: 'text-primary' },
  ];

  const timeline = [
    { month: 'Janvier', goal: 'Perfectionnement CV & Portfolio', status: 'completed' },
    { month: 'Février', goal: 'Candidatures intensives', status: 'in-progress' },
    { month: 'Mars', goal: 'Entretiens & Follow-ups', status: 'upcoming' },
    { month: 'Avril', goal: 'Signature de contrat', status: 'upcoming' },
  ];

  return (
    <section id="objectifs" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">{t('objectivesTitle')}</h2>
          </div>
          <p className="section-subtitle">{t('objectivesSubtitle')}</p>

          {/* Objectif Principal */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="portecv-card bg-gradient-to-br from-primary/10 to-success/10 border-2 border-primary/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary-foreground icon-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">{t('mainGoal')}</h3>
                  <p className="text-lg text-foreground mt-1">{t('mainGoalDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon;
              return (
                <div key={index} className="portecv-card text-center">
                  <Icon className={`w-12 h-12 ${kpi.color} mx-auto mb-4 icon-hover`} />
                  <div className="text-4xl font-bold text-primary mb-2">{kpi.value}</div>
                  <div className="text-sm text-muted-foreground">{kpi.label}</div>
                </div>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-primary icon-hover" />
              <h3 className="text-2xl font-bold text-foreground">Timeline 2025</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`portecv-card ${
                    item.status === 'completed'
                      ? 'bg-success/10 border-success'
                      : item.status === 'in-progress'
                      ? 'bg-primary/10 border-primary'
                      : 'bg-card'
                  }`}
                >
                  <div className="text-sm font-semibold text-primary mb-2">{item.month}</div>
                  <div className="text-sm text-foreground mb-3">{item.goal}</div>
                  <div className="flex items-center gap-2">
                    {item.status === 'completed' && (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span className="text-xs text-success font-medium">Complété</span>
                      </>
                    )}
                    {item.status === 'in-progress' && (
                      <>
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        <span className="text-xs text-primary font-medium">En cours</span>
                      </>
                    )}
                    {item.status === 'upcoming' && (
                      <span className="text-xs text-muted-foreground">À venir</span>
                    )}
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

export default Objectives;
