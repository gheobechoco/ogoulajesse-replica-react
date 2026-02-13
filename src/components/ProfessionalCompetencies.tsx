import { useState } from 'react';
import { Briefcase, User, Clock, TrendingUp, Filter, CheckCircle, FileText, Users, Share2, MapPin, ShoppingCart, Truck, MessageSquare, Monitor, Scale } from 'lucide-react';
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
  pourcentage: number;
  nbCompetences: number;
  iconBg: string;
  icon: React.ReactNode;
  competences: Competence[];
  temoignages: Temoignage[];
}

const defaultTemoignages: Temoignage[] = [
  { nom: 'Jena Karlis', role: 'Propriétaire du magasin' },
  { nom: 'Matt Brandon', role: 'Travailleur indépendant' },
  { nom: 'John Larson', role: 'Entrepreneur' },
];

const ProfessionalCompetencies = () => {
  const [filtre, setFiltre] = useState('Tous les domaines');
  const [selectedDomain, setSelectedDomain] = useState<Domaine | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('competences');

  const profil = {
    statut: 'Étudiant – Commerce',
    disponibilite: 'Stage / Contrat junior',
    niveauGlobal: 60,
    experience: '+12 mois cumulés',
  };

  const domaines: Domaine[] = [
    {
      nom: 'Commerce & Vente',
      pourcentage: 54,
      nbCompetences: 5,
      iconBg: 'bg-gradient-to-br from-orange-400 to-orange-500',
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      competences: [
        { nom: 'Prospection commerciale', description: 'Recherche de nouveaux clients et partenaires', score: 60, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
        { nom: 'Négociation', description: 'Techniques de vente et closing', score: 50, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
        { nom: 'Service client', description: 'Accueil, conseil et fidélisation', score: 65, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'Restaurant Chez Maman Gabonaise' }] },
        { nom: 'Gestion de caisse', description: 'Encaissement et gestion financière', score: 45, niveau: 'Débutant', preuves: [{ type: 'Formation', lieu: 'Restaurant Chez Maman Gabonaise' }] },
        { nom: 'Merchandising', description: 'Mise en valeur des produits', score: 50, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
      ],
      temoignages: defaultTemoignages,
    },
    {
      nom: 'Logistique & Distribution',
      pourcentage: 47,
      nbCompetences: 3,
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      icon: <Truck className="w-8 h-8 text-white" />,
      competences: [
        { nom: 'Gestion des stocks', description: 'Inventaire et suivi des marchandises', score: 55, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
        { nom: 'Coordination logistique', description: 'Planification des livraisons', score: 45, niveau: 'Débutant', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
        { nom: 'Suivi des commandes', description: 'Traçabilité et satisfaction client', score: 40, niveau: 'Débutant', preuves: [{ type: 'Formation', lieu: 'CECACabonDistribution' }] },
      ],
      temoignages: defaultTemoignages,
    },
    {
      nom: 'Marketing & Communication',
      pourcentage: 65,
      nbCompetences: 3,
      iconBg: 'bg-gradient-to-br from-pink-500 to-rose-500',
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      competences: [
        { nom: 'Communication visuelle', description: 'Création de supports graphiques', score: 70, niveau: 'Autonome', preuves: [{ type: 'Formation', lieu: 'Événementiel Sup de COM' }] },
        { nom: 'Organisation événementielle', description: "Planification et coordination d'événements", score: 65, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'Événementiel Sup de COM' }] },
        { nom: 'Stratégie digitale', description: 'Marketing digital et réseaux sociaux', score: 60, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'Sup de COM Libreville' }] },
      ],
      temoignages: defaultTemoignages,
    },
    {
      nom: 'Informatique & Numérique',
      pourcentage: 79,
      nbCompetences: 3,
      iconBg: 'bg-gradient-to-br from-teal-400 to-cyan-500',
      icon: <Monitor className="w-8 h-8 text-white" />,
      competences: [
        { nom: 'Word', description: 'Rapports, mémoires, mise en forme professionnelle', score: 50, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'Distribution CECA Gabon · Assistant Logistique' }] },
        { nom: 'Excel', description: 'Tableaux croisés dynamiques, formules, analyse de données', score: 100, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'Distribution CECA Gabon · Assistant Logistique' }], projets: 'Scène · 1 projet' },
        { nom: 'PowerPoint', description: 'Présentations professionnelles et supports visuels', score: 45, niveau: 'Opérationnel', preuves: [{ type: 'Formation', lieu: 'Sup de COM Libreville' }] },
      ],
      temoignages: defaultTemoignages,
    },
    {
      nom: 'Droit & Gestion',
      pourcentage: 55,
      nbCompetences: 2,
      iconBg: 'bg-gradient-to-br from-slate-500 to-slate-600',
      icon: <Scale className="w-8 h-8 text-white" />,
      competences: [
        { nom: 'Droit commercial', description: "Notions de droit des affaires et contrats", score: 30, niveau: 'Débutant', preuves: [{ type: 'Formation', lieu: 'Sup de COM Libreville' }] },
        { nom: 'Gestion administrative', description: 'Organisation et suivi administratif', score: 20, niveau: 'Débutant', preuves: [{ type: 'Formation', lieu: 'Sup de COM Libreville' }] },
      ],
      temoignages: defaultTemoignages,
    },
  ];

  const filtres = ['Tous les domaines', ...domaines.map(d => d.nom)];
  const domainesFiltres = filtre === 'Tous les domaines' ? domaines : domaines.filter(d => d.nom === filtre);

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'competences', label: 'Compétences', icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'preuves', label: 'Preuves', icon: <FileText className="w-4 h-4" /> },
    { id: 'temoignages', label: 'Témoignages', icon: <Users className="w-4 h-4" /> },
  ];

  const openDomain = (d: Domaine) => {
    setSelectedDomain(d);
    setActiveTab('competences');
  };

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">Mes Domaines de Compétences</h2>
          </div>
          <p className="section-subtitle">Compétences opérationnelles validées par des preuves concrètes</p>

          <div className="max-w-5xl mx-auto">
            {/* Profil summary */}
            <div className="portecv-card mb-8 bg-gradient-to-br from-primary/5 to-success/5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Profil</div>
                    <div className="text-sm font-semibold text-foreground">{profil.statut}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Disponibilité</div>
                    <div className="text-sm font-semibold text-foreground">{profil.disponibilite}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Niveau Global</div>
                    <div className="text-sm font-semibold text-foreground">Opérationnel ({profil.niveauGlobal}%)</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Expérience</div>
                    <div className="text-sm font-semibold text-foreground">{profil.experience}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filtre */}
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground italic mb-2">Filtrer par domaine professionnel</p>
              <div className="flex justify-center">
                <div className="relative inline-flex items-center gap-2">
                  <Filter className="w-4 h-4 text-primary" />
                  <select
                    value={filtre}
                    onChange={(e) => setFiltre(e.target.value)}
                    className="bg-card border border-border rounded-lg px-6 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-w-[300px] appearance-none cursor-pointer"
                  >
                    {filtres.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Domain cards grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {domainesFiltres.map((domaine, index) => (
                <button
                  key={index}
                  onClick={() => openDomain(domaine)}
                  className="portecv-card text-center p-5 cursor-pointer hover:scale-[1.04] transition-all duration-300 group relative"
                >
                  {/* Badge icon top-right */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <FileText className="w-3 h-3 text-primary-foreground" />
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${domaine.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    {domaine.icon}
                  </div>

                  <h3 className="text-sm font-bold text-foreground mb-2 leading-tight">{domaine.nom}</h3>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary font-bold">{domaine.pourcentage}%</span>
                    {' '}{domaine.nbCompetences} compétences
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Dialog */}
      <Dialog open={!!selectedDomain} onOpenChange={(open) => !open && setSelectedDomain(null)}>
        <DialogContent className="max-w-[600px] max-h-[85vh] overflow-y-auto rounded-[20px] p-0">
          {selectedDomain && (
            <>
              <div className="bg-[hsl(var(--primary)/0.9)] text-primary-foreground p-6 rounded-t-[20px]">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-primary-foreground flex items-center gap-3">
                    <div className={`w-10 h-10 ${selectedDomain.iconBg} rounded-xl flex items-center justify-center`}>
                      {selectedDomain.icon}
                    </div>
                    {selectedDomain.nom}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-sm text-primary-foreground/80 mt-1">
                  {selectedDomain.nbCompetences} compétences • Score moyen : {selectedDomain.pourcentage} %
                </p>
              </div>

              <div className="px-6 pt-4">
                <div className="flex gap-6 border-b border-border">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 pb-3 text-sm font-medium transition-colors ${
                        activeTab === tab.id ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-4">
                {activeTab === 'competences' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedDomain.competences.map((comp, i) => (
                      <div key={i} className="border border-border rounded-xl p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-foreground text-sm">{comp.nom}</h4>
                          {comp.niveau && (
                            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{comp.niveau}</span>
                          )}
                        </div>
                        {comp.description && <p className="text-xs text-muted-foreground mb-3">{comp.description}</p>}
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
                            <span key={j} className="text-[10px] bg-destructive/10 text-destructive px-2 py-0.5 rounded-full">✦ {p.type}</span>
                          ))}
                          {comp.projets && <span className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-full">📁 {comp.projets}</span>}
                        </div>
                        {comp.preuves?.[0] && (
                          <div className="flex items-center gap-1 mt-2 text-[10px] text-muted-foreground">
                            <MapPin className="w-3 h-3" />{comp.preuves[0].lieu}
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
                        <button className="text-xs text-primary mt-2 hover:underline flex items-center gap-1">📄 Voir les preuves</button>
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

              <div className="flex items-center justify-between px-6 pb-6">
                <button onClick={() => setSelectedDomain(null)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Fermer</button>
                <button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Share2 className="w-4 h-4" />Partager ce domaine
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProfessionalCompetencies;
