import { Play, FileText } from 'lucide-react';

const VideoPresentation = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <h2 className="section-title">Ma Présentation en Vidéo</h2>
          <p className="section-subtitle">Découvrez mon parcours et mes ambitions</p>

          <div className="max-w-3xl mx-auto">
            {/* Video placeholder */}
            <div className="portecv-card bg-gradient-to-br from-primary/5 to-muted/30 relative overflow-hidden rounded-2xl aspect-video flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-card/80 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                <p className="text-muted-foreground">Cliquez pour regarder la vidéo</p>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-4 right-6 w-2 h-2 bg-primary/30 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-primary/30 rounded-full"></div>
              <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-primary/20 rounded-full"></div>
            </div>

            {/* Transcription */}
            <div className="portecv-card">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Transcription</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Bonjour, je m'appelle RILOGUE BARRE Innivha. Passionné par le digital et l'innovation, je suis actuellement étudiant en Marketing Digital à Sup de COM. Mon objectif est de transformer mes compétences académiques en solutions concrètes pour contribuer à des projets innovants...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPresentation;
