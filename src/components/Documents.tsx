import { Download, FileText, ExternalLink, Award, Mail } from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      type: 'Curriculum Vitae',
      category: 'CV',
      description: 'CV complet avec parcours académique et projets',
      taille: '245 KB',
      badge: 'Mis à jour',
      badgeColor: 'bg-primary text-primary-foreground',
      icon: FileText,
    },
    {
      type: 'Lettre de Motivation',
      category: 'Lettre',
      description: 'Lettre personnalisable selon l\'entreprise',
      taille: '128 KB',
      badge: 'Modèle',
      badgeColor: 'bg-muted text-foreground',
      icon: Mail,
    },
    {
      type: 'Certifications',
      category: 'Diplômes',
      description: 'Ensemble des certifications obtenues',
      taille: '892 KB',
      badge: 'Validé',
      badgeColor: 'bg-success text-success-foreground',
      icon: Award,
    },
  ];

  return (
    <section id="documents" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <h2 className="section-title">Mes Documents Académiques</h2>
          <p className="section-subtitle">Diplômes, attestations et certifications disponibles en téléchargement</p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <div key={index} className="portecv-card group hover:border-primary/50 relative">
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${doc.badgeColor}`}>
                      {doc.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1">{doc.type}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{doc.category}</p>
                  <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>

                  <div className="mb-4">
                    <span className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">{doc.taille}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm py-2">
                      <Download className="w-4 h-4" />
                      Télécharger
                    </button>
                    <button className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
