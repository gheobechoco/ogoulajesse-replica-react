import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Trust from '@/components/Trust';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Certifications from '@/components/Certifications';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

/* PAGE PRINCIPALE - Clone du site ogoulajesse.pro
   STRUCTURE DU SITE :
   - Header : Navigation avec scroll effect
   - Hero : Section d'accueil avec photo et statistiques  
   - About : Présentation et expertise
   - Trust : Logos des entreprises partenaires
   - Services : Consulting Growth et Formation
   - Portfolio : Projets réalisés (Africakard, École 241...)
   - Certifications : Diplômes et certifications
   - Testimonials : Témoignages clients
   - CTA : Appel à l'action final
   - Footer : Contact et liens

   POUR PERSONNALISER : Modifiez chaque composant individuellement
   POUR AJOUTER UNE SECTION : Importez et ajoutez le composant ici
   POUR MODIFIER L'ORDRE : Réorganisez les composants ci-dessous
*/

const Index = () => {
  // Animation des sections au scroll
  useEffect(() => {
    const observeElements = () => {
      const elementsToAnimate = document.querySelectorAll('.fade-in-up, .fade-in');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      elementsToAnimate.forEach((el) => observer.observe(el));
      
      return () => observer.disconnect();
    };

    // Démarrer l'observation après un court délai
    const timer = setTimeout(observeElements, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* NAVIGATION PRINCIPALE */}
      <Header />
      
      {/* SECTIONS DU SITE - POUR MODIFIER L'ORDRE : Réorganisez ces composants */}
      <main>
        {/* Section d'accueil avec photo et CTA */}
        <Hero />
        
        {/* Présentation personnelle et parcours */}
        <About />
        
        {/* Entreprises partenaires */}
        <Trust />
        
        {/* Services proposés */}
        <Services />
        
        {/* Portfolio de projets */}
        <Portfolio />
        
        {/* Certifications et formations */}
        <Certifications />
        
        {/* Témoignages clients */}
        <Testimonials />
        
        {/* Appel à l'action final */}
        <CTA />
      </main>
      
      {/* PIED DE PAGE */}
      <Footer />
    </div>
  );
};

export default Index;
