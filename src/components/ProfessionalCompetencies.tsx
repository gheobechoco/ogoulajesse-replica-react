import { Briefcase, User, Clock, TrendingUp } from 'lucide-react';
import { Progress } from './ui/progress';

const ProfessionalCompetencies = () => {
  const profil = {
    statut: 'Étudiant – Commerce',
    disponibilite: 'Stage / Contrat junior',
    niveauGlobal: 60,
    experience: '+12 mois cumulés',
  };

  const domaines = [
    { nom: 'Commerce & Vente', pourcentage: 54, competences: 5 },
    { nom: 'Logistique & Distribution', pourcentage: 47, competences: 3 },
    { nom: 'Marketing & Communication', pourcentage: 65, competences: 3 },
  ];

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">Compétences Professionnelles</h2>
          </div>
          <p className="section-subtitle">Compétences opérationnelles validées par des preuves concrètes</p>

          <div className="max-w-4xl mx-auto">
            {/* Profil summary */}
            <div className="portecv-card mb-8 bg-gradient-to-br from-primary/5 to-success/5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Statut</div>
                    <div className="text-sm font-semibold text-foreground">{profil.statut}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-success" />
                  <div>
                    <div className="text-xs text-muted-foreground">Disponibilité</div>
                    <div className="text-sm font-semibold text-foreground">{profil.disponibilite}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Niveau global</div>
                    <div className="text-sm font-semibold text-foreground">Opérationnel ({profil.niveauGlobal}%)</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-success" />
                  <div>
                    <div className="text-xs text-muted-foreground">Expérience</div>
                    <div className="text-sm font-semibold text-foreground">{profil.experience}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Domaines */}
            <div className="space-y-6">
              {domaines.map((domaine, index) => (
                <div key={index} className="portecv-card">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground">{domaine.nom}</h3>
                    <span className="text-sm font-medium text-muted-foreground">{domaine.competences} compétences</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Progress value={domaine.pourcentage} className="h-3 flex-1" />
                    <span className="text-lg font-bold text-primary min-w-[50px] text-right">{domaine.pourcentage}%</span>
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

export default ProfessionalCompetencies;
