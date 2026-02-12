import { useState } from 'react';
import { Volume2, Play } from 'lucide-react';

const LanguageSkills = () => {
  const [selectedLang, setSelectedLang] = useState('FR');

  const languages = [
    { code: 'FR', langue: 'Français', niveau: 'C2 - Natif', flag: '🇫🇷' },
    { code: 'GB', langue: 'Anglais', niveau: 'B2 - Intermédiaire Supérieur', flag: '🇬🇧' },
    { code: 'ES', langue: 'Espagnol', niveau: 'B1 - Intermédiaire', flag: '🇪🇸' },
  ];

  const selected = languages.find(l => l.code === selectedLang) || languages[0];

  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <h2 className="section-title">Mes Compétences Linguistiques</h2>
          <p className="section-subtitle">Écoutez ma maîtrise des langues étrangères</p>

          <div className="max-w-3xl mx-auto">
            {/* Language tabs */}
            <div className="flex justify-center gap-4 mb-8">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLang(lang.code)}
                  className={`portecv-card text-center px-8 py-4 cursor-pointer transition-all duration-300 ${
                    selectedLang === lang.code
                      ? 'border-2 border-primary bg-primary/5'
                      : 'hover:border-primary/30'
                  }`}
                >
                  <div className="text-2xl font-bold text-foreground mb-1">{lang.code}</div>
                  <div className="text-sm font-medium text-foreground">{lang.langue}</div>
                  <div className="text-xs text-muted-foreground">{lang.niveau}</div>
                </button>
              ))}
            </div>

            {/* Selected language detail with audio player */}
            <div className="portecv-card">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{selected.flag}</span>
                <div>
                  <div className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <span>{selected.code}</span>
                    <div>
                      <div className="text-lg">{selected.langue}</div>
                      <div className="text-sm text-muted-foreground font-normal">{selected.niveau}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Audio player UI */}
              <div className="flex items-center gap-3 mb-4">
                <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity">
                  <Play className="w-5 h-5 ml-0.5" />
                </button>
                <div className="flex-1">
                  <div className="w-full bg-secondary rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">1:23 / 3:45</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Volume2 className="w-4 h-4" />
                <div className="w-20 bg-secondary rounded-full h-1">
                  <div className="bg-primary h-1 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageSkills;
