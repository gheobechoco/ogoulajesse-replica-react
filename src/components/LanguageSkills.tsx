import { useState } from 'react';
import { Play, Volume2, FileText } from 'lucide-react';

const LanguageSkills = () => {
  const [selectedLang, setSelectedLang] = useState(0);

  const languages = [
    {
      code: 'FR',
      langue: 'Français',
      niveau: 'C2 - Natif',
      transcription: "Bonjour, je m'appelle RILOGUE BARRE Innivha. Passionné par le digital et l'innovation...",
    },
    {
      code: 'GB',
      langue: 'Anglais',
      niveau: 'B2 - Intermédiaire Supérieur',
      transcription: "Hello, my name is RILOGUE BARRE Innivha. Passionate about digital and innovation...",
    },
    {
      code: 'ES',
      langue: 'Espagnol',
      niveau: 'B1 - Intermédiaire',
      transcription: "Hola, me llamo RILOGUE BARRE Innivha. Apasionado por lo digital y la innovación...",
    },
  ];

  const selected = languages[selectedLang];

  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          {/* Side-by-side layout matching image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Left: Video Presentation */}
            <div>
              <VideoBlock />
            </div>

            {/* Right: Language Skills */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Mes Compétences Linguistiques</h2>
              <p className="text-muted-foreground mb-6">Écoutez ma maîtrise des langues étrangères</p>

              {/* Language selector tabs */}
              <div className="flex gap-3 mb-6">
                {languages.map((lang, i) => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLang(i)}
                    className={`flex-1 rounded-xl border-2 py-4 px-3 text-center transition-all duration-300 ${
                      selectedLang === i
                        ? 'border-destructive bg-destructive/5'
                        : 'border-border bg-card hover:border-muted-foreground/30'
                    }`}
                  >
                    <div className="text-2xl font-bold text-foreground">{lang.code}</div>
                    <div className="text-sm font-medium text-foreground">{lang.langue}</div>
                    <div className="text-xs text-muted-foreground">{lang.niveau}</div>
                  </button>
                ))}
              </div>

              {/* Selected language detail card */}
              <div className="bg-card rounded-2xl border border-border p-5 space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-foreground">{selected.code}</span>
                  <div>
                    <div className="font-semibold text-foreground">{selected.langue}</div>
                    <div className="text-sm text-muted-foreground">{selected.niveau}</div>
                  </div>
                </div>

                {/* Audio player */}
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 hover:bg-destructive/90 transition-colors">
                    <Play className="w-4 h-4 text-destructive-foreground ml-0.5" />
                  </button>
                  <div className="flex-1">
                    <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-destructive rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">1:23 / 3:45</span>
                </div>

                {/* Volume */}
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                  <div className="w-20 h-1 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-destructive rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                {/* Transcription */}
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-semibold text-foreground">Transcription</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selected.transcription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Video block extracted to keep layout clean */
const VideoBlock = () => (
  <div>
    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Ma présentation en vidéo</h2>
    <p className="text-muted-foreground mb-6">Découvrez mon parcours et mes ambitions</p>
    <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-rose-200/60 via-rose-100/40 to-muted/30 flex items-center justify-center cursor-pointer group">
      <div className="absolute top-4 right-4 flex gap-1">
        <span className="w-2 h-2 rounded-full bg-destructive/40"></span>
        <span className="w-2 h-2 rounded-full bg-destructive/30"></span>
        <span className="w-2 h-2 rounded-full bg-destructive/20"></span>
      </div>
      <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <Play className="w-7 h-7 text-foreground ml-1" />
      </div>
      <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-muted-foreground">
        Cliquez pour regarder la vidéo
      </p>
    </div>
  </div>
);

export default LanguageSkills;
