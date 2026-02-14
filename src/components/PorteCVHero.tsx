import supDeComLogo from '@/assets/sup-de-com-logo.png';

const PorteCVHero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center section-spacing relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-success/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="fade-in-up space-y-6 order-2 lg:order-1">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Étudiant en Marketing Digital
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              RILOGUE BARRE
              <br />
              <span className="text-primary">Innivha</span>
            </h1>

            <p className="text-xl text-primary font-semibold">
              De l'idée au projet, du potentiel à l'opportunité
            </p>

            <p className="text-sm text-success font-medium">
              📌 Recherche Job étudiant • Stages • Alternances
            </p>

            <p className="text-base text-muted-foreground max-w-xl">
              Étudiant passionné et déterminé, je transforme mes compétences académiques en solutions concrètes avec une vision claire : contribuer à des projets innovants et développer mon expertise professionnelle.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="portecv-card text-center">
                <div className="text-3xl font-bold text-primary mb-1">12+</div>
                <div className="text-sm text-muted-foreground">Projets</div>
              </div>
              <div className="portecv-card text-center">
                <div className="text-3xl font-bold text-success mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Compétences</div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative order-1 lg:order-2 flex justify-center fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-success/20 rounded-full transform rotate-6 scale-105"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl bg-card">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="RILOGUE BARRE Innivha - Photo professionnelle"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Sup de Com badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card rounded-xl px-4 py-2 shadow-lg border border-border flex items-center gap-2">
                <img src={supDeComLogo} alt="Sup de COM" className="w-8 h-8 object-contain" />
                <span className="text-sm font-semibold text-primary">Sup de COM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default PorteCVHero;
