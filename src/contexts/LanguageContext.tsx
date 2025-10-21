import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    objectives: 'Objectifs',
    experiences: 'Expériences',
    skills: 'Compétences',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Étudiant en recherche de',
    heroSubtitle: 'Jobs de vacances • Stages • Alternances',
    downloadCV: 'Télécharger mon CV',
    contactMe: 'Me contacter',
    
    // Objectifs
    objectivesTitle: 'Mes Objectifs',
    objectivesSubtitle: 'Des objectifs clairs et mesurables pour mon parcours professionnel',
    mainGoal: 'Objectif Principal',
    mainGoalDesc: 'Décrocher un stage de 6 mois en entreprise',
    kpi1: 'Candidatures envoyées',
    kpi2: 'Entretiens obtenus',
    kpi3: 'Taux de réponse',
    
    // Expériences
    experiencesTitle: 'Expériences Professionnelles',
    experiencesSubtitle: 'Mon parcours avec des résultats concrets et mesurables',
    responsibilities: 'Responsabilités',
    results: 'Résultats',
    skillsDeveloped: 'Compétences développées',
    
    // Compétences
    technicalSkillsTitle: 'Compétences Techniques',
    softSkillsTitle: 'Compétences Comportementales',
    languagesTitle: 'Langues & Outils',
    
    // Soft Skills
    communication: 'Communication',
    teamwork: 'Travail d\'équipe',
    leadership: 'Leadership',
    creativity: 'Créativité',
    adaptability: 'Adaptabilité',
    criticalThinking: 'Esprit critique',
    
    // Langues
    french: 'Français',
    english: 'Anglais',
    nativeLanguage: 'Langue maternelle',
    professionalLevel: 'Niveau professionnel',
    
    // Projets
    projectsTitle: 'Projets Académiques',
    projectsSubtitle: 'Projets universitaires avec résultats mesurables',
    
    // Documents
    documentsTitle: 'Documents & Certifications',
    documentsSubtitle: 'Téléchargez mes documents officiels',
  },
  en: {
    // Navigation
    home: 'Home',
    objectives: 'Objectives',
    experiences: 'Experiences',
    skills: 'Skills',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Student looking for',
    heroSubtitle: 'Summer Jobs • Internships • Apprenticeships',
    downloadCV: 'Download my CV',
    contactMe: 'Contact me',
    
    // Objectifs
    objectivesTitle: 'My Objectives',
    objectivesSubtitle: 'Clear and measurable goals for my professional journey',
    mainGoal: 'Main Goal',
    mainGoalDesc: 'Secure a 6-month internship',
    kpi1: 'Applications sent',
    kpi2: 'Interviews obtained',
    kpi3: 'Response rate',
    
    // Expériences
    experiencesTitle: 'Professional Experience',
    experiencesSubtitle: 'My journey with concrete and measurable results',
    responsibilities: 'Responsibilities',
    results: 'Results',
    skillsDeveloped: 'Skills Developed',
    
    // Compétences
    technicalSkillsTitle: 'Technical Skills',
    softSkillsTitle: 'Soft Skills',
    languagesTitle: 'Languages & Tools',
    
    // Soft Skills
    communication: 'Communication',
    teamwork: 'Teamwork',
    leadership: 'Leadership',
    creativity: 'Creativity',
    adaptability: 'Adaptability',
    criticalThinking: 'Critical Thinking',
    
    // Langues
    french: 'French',
    english: 'English',
    nativeLanguage: 'Native language',
    professionalLevel: 'Professional level',
    
    // Projets
    projectsTitle: 'Academic Projects',
    projectsSubtitle: 'University projects with measurable results',
    
    // Documents
    documentsTitle: 'Documents & Certifications',
    documentsSubtitle: 'Download my official documents',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
