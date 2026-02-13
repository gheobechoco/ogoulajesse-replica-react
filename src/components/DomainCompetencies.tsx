import { useState } from 'react';
import { Briefcase, CheckCircle, FileText, Users, Share2, X, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Progress } from './ui/progress';

type TabType = 'competences' | 'preuves' | 'temoignages';

interface Competence {
  nom: string;
  description?: string;
  score?: number;
  niveau?: string;
  preuves?: { type: string; lieu: string }[];
  projets?: string;
}

interface Temoignage {
  nom: string;
  role: string;
}

interface Domaine {
  nom: string;
  icon: string;
  nbCompetences: number;
  scoreMoyen: number;
  competences: Competence[];
  temoignages: Temoignage[];
}

const DomainCompetencies = () => {
  const [selectedDomain, setSelectedDomain] = useState<Domaine | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('competences');

  const domaines: Domaine[] = [
    {
      nom: 'Informatique et bureautique',
      icon: '💻',
      nbCompetences: 6,
      scoreMoyen: 46,
      competences: [
        {
          nom: 'Word',
          description: 'Rapports, mémoires, mise en forme professionnelle',
          score: 50,
          niveau: 'Opérationnel',
          preuves: [{ type: 'Formation', lieu: 'Distribution CECA Gabon · Assistant Logistique' }],
        },
        {
          nom: 'Excel',
          description: 'Tableaux croisés dynamiques, formules, analyse de données',
          score: 100,
          niveau: 'Opérationnel',
          preuves: [{ type: 'Formation', lieu: 'Distribution CECA Gabon · Assistant Logistique' }],
          projets: 'Scène · 1 projet',
        },
        {
          nom: 'PowerPoint',
          description: 'Présentations professionnelles et supports visuels',
          score: 45,
          niveau: 'Opérationnel',
          preuves: [{ type: 'Formation', lieu: 'Sup de COM Libreville' }],
        },
        {
          nom: 'Navigation Web',
          description: 'Recherche avancée, outils collaboratifs en ligne',
          score: 60,
          niveau: 'Opérationnel',
          preuves: [{ type: 'Formation', lieu: 'Sup de COM Libreville' }],
        },
        {
          nom: 'Réseaux Sociaux',
          description: 'Community management, création de contenu',
          score: 35,
          niveau: 'Débutant',
          preuves: [{ type: 'Formation', lieu: 'Événementiel Sup de COM' }],
        },
        {
          nom: 'Outils Numériques',
          description: 'Canva, Google Suite, outils de gestion de projet',
          score: 40,
          niveau: 'Débutant',
          preuves: [{ type: 'Formation', lieu: 'Sup de COM Libreville' }],
        },
      ],
      temoignages: [
        { nom: 'Jena Karlis', role: 'Propriétaire du magasin' },
        { nom: 'Matt Brandon', role: 'Travailleur indépendant' },
        { nom: 'John Larson', role: 'Entrepreneur' },
      ],
    },
    {
      nom: 'Commerce & Vente',
      icon: '🛒',
      nbCompetences: 5,
      scoreMoyen: 54,
      competences: [
        { nom: 'Prospection commerciale', description: 'Recherche de nouveaux clients et partenaires', score: 60, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
        { nom: 'Négociation', description: 'Techniques de vente et closing', score: 50, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
        { nom: 'Service client', description: 'Accueil, conseil et fidélisation', score: 65, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'Restaurant Chez Maman Gabonaise' }] },
        { nom: 'Gestion de caisse', description: 'Encaissement et gestion financière', score: 45, niveau: 'Débutant', preuves: [{ type: 'Formation', lieu: 'Restaurant Chez Maman Gabonaise' }] },
        { nom: 'Merchandising', description: 'Mise en valeur des produits', score: 50, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
      ],
      temoignages: [
        { nom: 'Jena Karlis', role: 'Propriétaire du magasin' },
        { nom: 'Matt Brandon', role: 'Travailleur indépendant' },
        { nom: 'John Larson', role: 'Entrepreneur' },
      ],
    },
    {
      nom: 'Marketing & Communication',
      icon: '📢',
      nbCompetences: 3,
      scoreMoyen: 65,
      competences: [
        { nom: 'Communication visuelle', description: 'Création de supports graphiques', score: 70, niveau: 'Autonome', preuves: [{ type: 'Formation', lieu: 'Événementiel Sup de COM' }] },
        { nom: 'Organisation événementielle', description: 'Planification et coordination d\'événements', score: 65, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'Événementiel Sup de COM' }] },
        { nom: 'Stratégie digitale', description: 'Marketing digital et réseaux sociaux', score: 60, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'Sup de COM Libreville' }] },
      ],
      temoignages: [
        { nom: 'Jena Karlis', role: 'Propriétaire du magasin' },
        { nom: 'Matt Brandon', role: 'Travailleur indépendant' },
        { nom: 'John Larson', role: 'Entrepreneur' },
      ],
    },
    {
      nom: 'Logistique & Distribution',
      icon: '📦',
      nbCompetences: 3,
      scoreMoyen: 47,
      competences: [
        { nom: 'Gestion des stocks', description: 'Inventaire et suivi des marchandises', score: 55, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
        { nom: 'Coordination logistique', description: 'Planification des livraisons', score: 45, niveau: 'Débutant', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
        { nom: 'Suivi des commandes', description: 'Traçabilité et satisfaction client', score: 40, niveau: 'Débutant', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
      ],
      temoignages: [
        { nom: 'Jena Karlis', role: 'Propriétaire du magasin' },
        { nom: 'Matt Brandon', role: 'Travailleur indépendant' },
        { nom: 'John Larson', role: 'Entrepreneur' },
      ],
    },
    {
      nom: 'Droit & Gestion',
      icon: '⚖️',
      nbCompetences: 2,
      scoreMoyen: 25,
      competences: [
        { nom: 'Droit commercial', description: 'Notions de droit des affaires et contrats', score: 30, niveau: 'Débutant', preuves: [{ type: 'Formation', lieu: 'Sup de COM Libreville' }] },
        { nom: 'Gestion administrative', description: 'Organisation et suivi administratif', score: 20, niveau: 'Débutant', preuves: [{ type: 'Formation', lieu: 'Sup de COM Libreville' }] },
      ],
      temoignages: [
        { nom: 'Jena Karlis', role: 'Propriétaire du magasin' },
        { nom: 'Matt Brandon', role: 'Travailleur indépendant' },
        { nom: 'John Larson', role: 'Entrepreneur' },
      ],
    },
  ];

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'competences', label: 'Compétences', icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'preuves', label: 'Preuves', icon: <FileText className="w-4 h-4" /> },
    { id: 'temoignages', label: 'Témoignages', icon: <Users className="w-4 h-4" /> },
  ];

  const openDomain = (domaine: Domaine) => {
    setSelectedDomain(domaine);
    setActiveTab('competences');
  };

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">Mes domaines de compétences</h2>
          </div>
          <p className="section-subtitle">Cliquez sur un domaine pour explorer les détails</p>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {domaines.map((domaine, index) => (
              <button
                key={index}
                onClick={() => openDomain(domaine)}
                className="portecv-card text-left hover:scale-[1.03] transition-transform duration-300 cursor-pointer group"
              >
                <div className="text-3xl mb-3">{domaine.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{domaine.nom}</h3>
                <p className="text-xs text-muted-foreground mb-3">{domaine.nbCompetences} compétences • Score moyen : {domaine.scoreMoyen}%</p>
                <Progress value={domaine.scoreMoyen} className="h-2" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Dialog */}
      <Dialog open={!!selectedDomain} onOpenChange={(open) => !open && setSelectedDomain(null)}>
        <DialogContent className="max-w-[600px] max-h-[85vh] overflow-y-auto rounded-[20px] p-0">
          {selectedDomain && (
            <>
              {/* Header */}
              <div className="bg-[hsl(var(--primary)/0.9)] text-primary-foreground p-6 rounded-t-[20px]">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-primary-foreground flex items-center gap-3">
                    <span className="text-2xl">{selectedDomain.icon}</span>
                    {selectedDomain.nom}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-sm text-primary-foreground/80 mt-1">
                  {selectedDomain.nbCompetences} compétences • Score moyen : {selectedDomain.scoreMoyen} %
                </p>
              </div>

              {/* Tabs */}
              <div className="px-6 pt-4">
                <div className="flex gap-6 border-b border-border">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 pb-3 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-primary border-b-2 border-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                {activeTab === 'competences' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedDomain.competences.map((comp, i) => (
                      <div key={i} className="border border-border rounded-xl p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-foreground text-sm">{comp.nom}</h4>
                          {comp.niveau && (
                            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                              {comp.niveau}
                            </span>
                          )}
                        </div>
                        {comp.description && (
                          <p className="text-xs text-muted-foreground mb-3">{comp.description}</p>
                        )}
                        {comp.score !== undefined && (
                          <div className="mb-3">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-muted-foreground">Score</span>
                              <span className="font-bold text-primary">{comp.score} %</span>
                            </div>
                            <Progress value={comp.score} className="h-1.5" />
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {comp.preuves?.map((p, j) => (
                            <span key={j} className="text-[10px] bg-destructive/10 text-destructive px-2 py-0.5 rounded-full">
                              ✦ {p.type}
                            </span>
                          ))}
                          {comp.projets && (
                            <span className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-full">
                              📁 {comp.projets}
                            </span>
                          )}
                        </div>
                        {comp.preuves?.[0] && (
                          <div className="flex items-center gap-1 mt-2 text-[10px] text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {comp.preuves[0].lieu}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'preuves' && (
                  <div className="space-y-4">
                    {selectedDomain.competences.filter(c => c.preuves?.length).map((comp, i) => (
                      <div key={i} className="border border-border rounded-xl p-4">
                        <h4 className="font-semibold text-foreground text-sm mb-2">{comp.nom}</h4>
                        {comp.preuves?.map((p, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <FileText className="w-3 h-3 text-primary" />
                            <span>{p.type} — {p.lieu}</span>
                          </div>
                        ))}
                        <button className="text-xs text-primary mt-2 hover:underline flex items-center gap-1">
                          📄 Voir les preuves
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'temoignages' && (
                  <div className="grid grid-cols-3 gap-4">
                    {selectedDomain.temoignages.map((t, i) => (
                      <div key={i} className="text-center">
                        <div className="text-primary/30 text-2xl mb-2">"</div>
                        <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-3 flex items-center justify-center">
                          <Users className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h4 className="font-semibold text-foreground text-sm">{t.nom}</h4>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-6 pb-6">
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fermer
                </button>
                <button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Share2 className="w-4 h-4" />
                  Partager ce domaine
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DomainCompetencies;
