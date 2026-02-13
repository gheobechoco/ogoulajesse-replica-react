import { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageSkills = () => {
  const [selectedLang, setSelectedLang] = useState('FR');

  const languages = [
    { code: 'FR', langue: 'Français', niveau: 'C2 - Natif', flag: '🇫🇷' },
    { code: 'GB', langue: 'Anglais', niveau: 'B2 - Intermédiaire Supérieur', flag: '🇬🇧' },
    { code: 'ES', langue: 'Espagnol', niveau: 'B1 - Intermédiaire', flag: '🇪🇸' },
  ];

  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">Mes Compétences Linguistiques</h2>
          </div>
          <p className="section-subtitle">Écoutez ma maîtrise des langues étrangères</p>

          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-4 mb-8">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLang(lang.code)}
                  className={`portecv-card text-center px-8 py-4 cursor-pointer transition-all duration-300 ${
                    selectedLang === lang.code
                      ? 'border-2 border-primary bg-primary/5 scale-105'
                      : 'hover:border-primary/30'
                  }`}
                >
                  <div className="text-3xl mb-2">{lang.flag}</div>
                  <div className="text-2xl font-bold text-foreground mb-1">{lang.code}</div>
                  <div className="text-sm font-medium text-foreground">{lang.langue}</div>
                  <div className="text-xs text-muted-foreground">{lang.niveau}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageSkills;
