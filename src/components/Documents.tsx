import { useState } from 'react';
import { Download, ChevronLeft, ChevronRight, ExternalLink, FileText, FileCheck, Award } from 'lucide-react';

const Documents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const documents = [
    {
      type: 'Curriculum vitae',
      category: 'CV',
      description: 'CV complet avec parcours académique et projets',
      taille: '245 Ko',
      badge: 'Mis à jour',
      badgeColor: 'bg-emerald-500',
      icon: FileText,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500',
    },
    {
      type: 'Lettre de Motivation',
      category: 'Lettre',
      description: "Lettre personnalisable selon l'entreprise",
      taille: '128 Ko',
      badge: 'Modèle',
      badgeColor: 'bg-slate-700',
      icon: FileText,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-500',
    },
    {
      type: 'Certifications',
      category: 'Diplômes',
      description: 'Ensemble des certifications obtenues',
      taille: '892 Ko',
      badge: 'Validé',
      badgeColor: 'bg-emerald-600',
      icon: Award,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-600',
    },
    {
      type: 'Recommandations',
      category: 'Lettres',
      description: 'Lettres de recommandation professeurs',
      taille: '456 Ko',
      badge: 'Vérifié',
      badgeColor: 'bg-blue-500',
      icon: FileCheck,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-500',
    },
    {
      type: 'Relevé de Notes',
      category: 'Bulletins',
      description: 'Bulletins et relevés de notes officiels',
      taille: '678 Ko',
      badge: 'Officiel',
      badgeColor: 'bg-amber-500',
      icon: FileText,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-500',
    },
  ];

  const visibleCount = 3;
  const maxIndex = Math.max(0, documents.length - visibleCount);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="documents" className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">Mes documents académiques</h2>
          <p className="text-center text-muted-foreground mb-12">Diplômes, attestations et certifications disponibles en téléchargement</p>

          <div className="max-w-5xl mx-auto relative">
            {/* Left arrow */}
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-card rounded-full shadow-md border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            {/* Right arrow */}
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-card rounded-full shadow-md border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            {/* Cards */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount + 2)}%)` }}
              >
                {documents.map((doc, index) => {
                  const Icon = doc.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card rounded-2xl border border-border p-6 flex-shrink-0 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300"
                      style={{ width: `calc(${100 / visibleCount}% - 16px)` }}
                    >
                      {/* Top row: icon + badge */}
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-14 h-14 ${doc.iconBg} rounded-2xl flex items-center justify-center`}>
                          <Icon className={`w-7 h-7 ${doc.iconColor}`} />
                        </div>
                        <span className={`${doc.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                          {doc.badge}
                        </span>
                      </div>

                      {/* Text */}
                      <h3 className="text-lg font-bold text-foreground mb-1">{doc.type}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{doc.category}</p>
                      <p className="text-sm text-muted-foreground mb-5">{doc.description}</p>

                      {/* Size */}
                      <div className="mb-5">
                        <span className="text-xs px-3 py-1.5 border border-border rounded-full text-muted-foreground">{doc.taille}</span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 mt-auto">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-destructive text-destructive-foreground font-semibold py-3 rounded-xl hover:bg-destructive/90 transition-colors text-sm">
                          <Download className="w-4 h-4" />
                          Télécharger
                        </button>
                        <button className="w-11 h-11 border border-border rounded-xl flex items-center justify-center hover:bg-secondary transition-colors">
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-border'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
