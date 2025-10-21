import { Download, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PorteCVHero = () => {
  const { t } = useLanguage();

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center section-spacing relative">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          {/* Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
                  alt="Student profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-success rounded-full flex items-center justify-center border-4 border-background">
                <span className="text-2xl">🎓</span>
              </div>
            </div>
          </div>

          {/* Titre */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
            {t('heroSubtitle')}
          </p>

          {/* Description courte */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Étudiant motivé et dynamique avec une expérience solide dans la restauration 
            et le service client. À la recherche d'opportunités pour développer mes compétences 
            en environnement professionnel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn-primary flex items-center gap-2 icon-hover">
              <Download className="w-5 h-5" />
              {t('downloadCV')}
            </button>
            <button className="btn-success flex items-center gap-2 icon-hover">
              <Mail className="w-5 h-5" />
              {t('contactMe')}
            </button>
          </div>

          {/* Stats rapides */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="portecv-card">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Années d'expérience</div>
            </div>
            <div className="portecv-card">
              <div className="text-4xl font-bold text-success mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Compétences maîtrisées</div>
            </div>
            <div className="portecv-card">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorteCVHero;
