import { Play } from 'lucide-react';

const VideoPresentation = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Ma présentation en vidéo</h2>
          <p className="text-muted-foreground mb-8">Découvrez mon parcours et mes ambitions</p>

          <div className="max-w-2xl">
            {/* Video placeholder with gradient */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-rose-200/60 via-rose-100/40 to-muted/30 flex items-center justify-center cursor-pointer group">
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 flex gap-1">
                <span className="w-2 h-2 rounded-full bg-destructive/40"></span>
                <span className="w-2 h-2 rounded-full bg-destructive/30"></span>
                <span className="w-2 h-2 rounded-full bg-destructive/20"></span>
              </div>
              <div className="absolute bottom-8 left-8 flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive/30"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-destructive/20"></span>
              </div>

              {/* Play button */}
              <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-foreground ml-1" />
              </div>

              {/* Label */}
              <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-muted-foreground">
                Cliquez pour regarder la vidéo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPresentation;
