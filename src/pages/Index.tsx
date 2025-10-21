import { useEffect } from 'react';
import PorteCVHeader from '@/components/PorteCVHeader';
import PorteCVHero from '@/components/PorteCVHero';
import Objectives from '@/components/Objectives';
import ProfessionalExperiences from '@/components/ProfessionalExperiences';
import TechnicalSkills from '@/components/TechnicalSkills';
import SoftSkills from '@/components/SoftSkills';
import Languages from '@/components/Languages';
import Projects from '@/components/Projects';
import Documents from '@/components/Documents';
import PorteCVFooter from '@/components/PorteCVFooter';

/* PAGE PRINCIPALE - PorteCV Portfolio Étudiant
   Portfolio étudiant professionnel pour jobs de vacances, stages et alternances
   Avec système de thème clair/sombre et multi-langue FR/EN
   
   STRUCTURE :
   - Header : Navigation avec theme toggle et language switcher
   - Hero : Photo profil + CTA + Stats rapides
   - Objectives : Objectifs chiffrés avec KPIs et timeline
   - ProfessionalExperiences : Cartes d'expérience avec photos et résultats
   - TechnicalSkills : Compétences techniques avec barres de progression
   - SoftSkills : Compétences comportementales avec visualisation
   - Languages : Langues et outils de communication
   - Projects : Projets académiques avec métriques
   - Documents : CV, certifications, lettres avec QR code
   - Footer : Contact et réseaux sociaux
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
    <div className="min-h-screen bg-background relative">
      {/* Animation de fond PorteCV */}
      <div className="portecv-background">
        <div className="portecv-text-pattern" style={{ top: '10%', left: '0' }}>
          PorteCV PorteCV PorteCV PorteCV
        </div>
        <div className="portecv-text-pattern" style={{ top: '40%', left: '20%' }}>
          PorteCV PorteCV PorteCV PorteCV
        </div>
        <div className="portecv-text-pattern" style={{ top: '70%', left: '10%' }}>
          PorteCV PorteCV PorteCV PorteCV
        </div>
      </div>

      {/* NAVIGATION */}
      <PorteCVHeader />
      
      {/* CONTENU PRINCIPAL */}
      <main className="relative z-10">
        <PorteCVHero />
        <Objectives />
        <ProfessionalExperiences />
        <TechnicalSkills />
        <SoftSkills />
        <Languages />
        <Projects />
        <Documents />
      </main>
      
      {/* FOOTER */}
      <PorteCVFooter />
    </div>
  );
};

export default Index;
