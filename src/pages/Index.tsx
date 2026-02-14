import { useEffect } from 'react';
import PorteCVHeader from '@/components/PorteCVHeader';
import PorteCVHero from '@/components/PorteCVHero';
import LanguageSkills from '@/components/LanguageSkills';
import VideoPresentation from '@/components/VideoPresentation';
import ProfessionalCompetencies from '@/components/ProfessionalCompetencies';
import ProfessionalExperiences from '@/components/ProfessionalExperiences';
import Documents from '@/components/Documents';
import ContactCTA from '@/components/ContactCTA';
import PorteCVFooter from '@/components/PorteCVFooter';

const Index = () => {
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
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      elementsToAnimate.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    };
    const timer = setTimeout(observeElements, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <div className="portecv-background">
        <div className="portecv-text-pattern" style={{ top: '10%', left: '0' }}>PortCV PortCV PortCV PortCV</div>
        <div className="portecv-text-pattern" style={{ top: '40%', left: '20%' }}>PortCV PortCV PortCV PortCV</div>
        <div className="portecv-text-pattern" style={{ top: '70%', left: '10%' }}>PortCV PortCV PortCV PortCV</div>
      </div>

      <PorteCVHeader />

      <main className="relative z-10">
        <PorteCVHero />
        <LanguageSkills />
        <VideoPresentation />
        <ProfessionalCompetencies />
        <ProfessionalExperiences />
        <Documents />
        <ContactCTA />
      </main>

      <PorteCVFooter />
    </div>
  );
};

export default Index;
