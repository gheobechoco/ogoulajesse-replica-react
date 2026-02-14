import { useState } from 'react';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';

const Documents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const documents = [
    { type: 'Certifications', description: 'Ensemble des certifications obtenues', taille: '892 KB', colorClass: 'bg-purple-500' },
    { type: 'Recommandations', description: 'Lettres de recommandation professeurs', taille: '456 KB', colorClass: 'bg-emerald-500' },
    { type: 'Relevé de Notes', description: 'Bulletins et relevés de notes officiels', taille: '678 KB', colorClass: 'bg-amber-500' },
    { type: 'CV', description: 'CV complet avec parcours académique', taille: '245 KB', colorClass: 'bg-blue-500' },
    { type: 'Lettre de Motivation', description: "Lettre personnalisable selon l'entreprise", taille: '128 KB', colorClass: 'bg-red-500' },
  ];

  const visibleCount = 3;
  const maxIndex = Math.max(0, documents.length - visibleCount);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="documents" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <h2 className="section-title">Mes Documents Académiques</h2>
          <p className="section-subtitle">Diplômes, attestations et certifications disponibles en téléchargement</p>

          <div className="max-w-5xl mx-auto relative">
            {/* Navigation arrows */}
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>

            {/* Cards container */}
            <div className="overflow-hidden">
              <div
                className="flex gap-5 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount + 1.5)}%)` }}
              >
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="portecv-card group hover:border-primary/50 flex-shrink-0"
                    style={{ width: `calc(${100 / visibleCount}% - 14px)` }}
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 ${doc.colorClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <span className="text-2xl">📂</span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-1">{doc.type}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>

                    <div className="mb-4">
                      <span className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">{doc.taille}</span>
                    </div>

                    <button className="w-full btn-primary flex items-center justify-center gap-2 text-sm py-2.5">
                      <Download className="w-4 h-4" />
                      Télécharger
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
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
