import { Headphones, FileText, Play, Pause } from 'lucide-react';
import { useState } from 'react';

const VideoPresentation = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <h2 className="section-title">Ma Présentation en Vidéo</h2>
          <p className="section-subtitle">Découvrez mon parcours et mes ambitions</p>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Audio Player */}
            <div className="portecv-card">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-primary" />
                  ) : (
                    <Play className="w-6 h-6 text-primary ml-0.5" />
                  )}
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🎧</span>
                    <h3 className="font-semibold text-foreground">Écouter ma présentation audio</h3>
                  </div>
                  {/* Audio progress bar placeholder */}
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: isPlaying ? '35%' : '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transcription */}
            <div className="portecv-card bg-secondary/30">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Transcription</h3>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-sm leading-relaxed">
                « Bonjour, je m'appelle RILOGUE BARRE Innivha. Passionné par le digital et l'innovation, j'ai développé au cours de mon parcours une solide expérience dans la restauration, le service client et la coordination d'événements. Actuellement étudiant en Marketing Digital, je recherche activement des opportunités de stage ou d'alternance pour mettre à profit mes compétences et continuer à apprendre. Mon objectif est de contribuer à des projets innovants tout en développant mon expertise professionnelle. Je suis motivé, dynamique et prêt à relever de nouveaux défis. N'hésitez pas à me contacter pour échanger sur mes expériences et mes ambitions. »
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPresentation;
