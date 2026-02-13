import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';

const ProfessionalExperiences = () => {
  const experiences = [
    {
      entreprise: 'Restaurant Chez Maman Gabonaise',
      poste: 'Service & Accueil Client',
      periode: '2022 - 2023',
      lieu: 'Libreville, Gabon',
      domaine: 'Commerce',
      realisations: ['+15% de pourboires', 'Gestion de flux clients', 'Service client premium', 'Travail en équipe coordonnée'],
    },
    {
      entreprise: 'CECACabonDistribution',
      poste: 'Assistant Commercial & Logistique',
      periode: 'Juin - Août 2023',
      lieu: 'Libreville, Gabon',
      domaine: 'Logistique',
      realisations: ['Prospection terrain réussie', 'Gestion des stocks', 'Prospection commerciale', 'Coordination logistique'],
    },
    {
      entreprise: 'Événementiel Sup de Com',
      poste: 'Coordinateur Événements',
      periode: '2024',
      lieu: 'Libreville, Gabon',
      domaine: 'Marketing',
      realisations: ['3 événements organisés', 'Organisation événementielle', 'Communication visuelle', 'Gestion de projet'],
    },
  ];

  const niveaux = [
    { label: 'Avancé', value: '90%+', color: 'bg-primary' },
    { label: 'Autonome', value: '75-89%', color: 'bg-primary/70' },
    { label: 'Opérationnel', value: '60-74%', color: 'bg-primary/40' },
    { label: 'Certifié', value: '100%', color: 'bg-success' },
  ];

  return (
    <section id="experiences" className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">Expériences Professionnelles Acquises</h2>
          </div>
          <p className="section-subtitle">Compétences démontrées dans des contextes réels</p>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Card */}
                <div className={`w-[calc(50%-24px)] ${index % 2 === 0 ? 'pr-0' : 'pl-0'}`}>
                  <div className="portecv-card hover:scale-[1.02] transition-transform duration-300">
                    <h3 className="text-lg font-bold text-foreground mb-1">{exp.entreprise}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{exp.poste}</p>

                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.periode}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.lieu}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Réalisations
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.realisations.map((r, i) => (
                          <span key={i} className="badge-skill text-xs">{r}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 top-4 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 z-10 shadow-md"></div>

                {/* Spacer */}
                <div className="w-[calc(50%-24px)]"></div>
              </div>
            ))}
          </div>

          {/* Indicateurs */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="portecv-card">
              <h4 className="text-sm font-semibold text-foreground mb-3">Indicateurs de niveaux</h4>
              <div className="flex flex-wrap gap-4">
                {niveaux.map((n, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${n.color}`}></div>
                    <span className="text-xs text-muted-foreground">{n.label}: {n.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Les scores sont calculés automatiquement à partir des preuves fournies : Formation (20%) + Dynamique/Droits/Stratégie (35%) + Certification (25%) + Environnement (20%)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperiences;
