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
      bgImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    },
    {
      entreprise: 'CECACabonDistribution',
      poste: 'Assistant Commercial & Logistique',
      periode: 'Juin - Août 2023',
      lieu: 'Libreville, Gabon',
      domaine: 'Logistique',
      realisations: ['Prospection terrain réussie', 'Gestion des stocks', 'Prospection commerciale', 'Coordination logistique'],
      bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    },
    {
      entreprise: 'Événementiel Sup de Com',
      poste: 'Coordinateur Événements',
      periode: '2024',
      lieu: 'Libreville, Gabon',
      domaine: 'Marketing',
      realisations: ['3 événements organisés', 'Organisation événementielle', 'Communication visuelle', 'Gestion de projet'],
      bgImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    },
  ];

  const niveaux = [
    { label: 'Avancé', value: '90%+', color: 'bg-success' },
    { label: 'Autonome', value: '75-89%', color: 'bg-primary' },
    { label: 'Opérationnel', value: '60-74%', color: 'bg-primary/60' },
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

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative rounded-[20px] overflow-hidden shadow-xl group hover:scale-[1.03] transition-transform duration-300"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img src={exp.bgImage} alt={exp.entreprise} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 pt-32">
                  <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {exp.domaine}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.entreprise}</h3>
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
                    <h4 className="text-sm font-semibold text-success flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
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
            ))}
          </div>

          {/* Niveaux légende */}
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
