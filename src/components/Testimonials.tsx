import { useEffect, useRef, useState } from 'react';

/* TESTIMONIALS SECTION - Section des témoignages
   POUR MODIFIER LES TÉMOIGNAGES : Changez le tableau testimonials ci-dessous
   POUR AJOUTER UN TÉMOIGNAGE : Ajoutez un objet au tableau testimonials
   POUR MODIFIER LES PHOTOS : Remplacez les avatars par de vraies photos
*/

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // POUR MODIFIER LES TÉMOIGNAGES : Changez ce tableau
  const testimonials = [
    {
      name: "Nel Brunel Mankou Madouma",
      role: "Web Designer | UI-UX Designer",
      avatar: "👨‍💼", // POUR MODIFIER : Remplacez par une vraie photo
      rating: 5,
      text: "Grâce à la formation à École 241, j'ai eu l'opportunité de rencontrer le coach Jesse. Son accompagnement m'a permis de structurer mes compétences existantes et d'en développer de nouvelles. Aujourd'hui encore, j'apprends à ses côtés. Sa passion pour l'apprentissage et sa veille constante lui permettent de toujours progresser et de nous inspirer à faire de même."
    },
    {
      name: "Marie Dubois",
      role: "CEO | Startup Tech",
      avatar: "👩‍💼", // POUR MODIFIER : Remplacez par une vraie photo
      rating: 5,
      text: "Jesse a transformé notre approche produit. Grâce à ses conseils stratégiques, nous avons augmenté notre taux de conversion de 45% en 3 mois. Un vrai professionnel avec une vision claire du digital."
    },
    {
      name: "Ahmed Ben Ali",
      role: "Product Manager | Fintech",
      avatar: "👨‍💻", // POUR MODIFIER : Remplacez par une vraie photo
      rating: 5,
      text: "La formation de Jesse en Product Management m'a donné les clés pour structurer ma démarche. Méthodique, pédagogue et toujours disponible, c'est un formateur exceptionnel."
    }
  ];

  // Navigation automatique du carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
          {/* Titre de section */}
          <h2 className="section-title">Témoignages</h2>
          <div className="w-16 h-1 bg-accent-red mx-auto mb-6"></div>
          <p className="section-subtitle">
            Découvrez ce que disent mes clients et apprenants de leur expérience
          </p>
        </div>

        {/* Carousel des témoignages */}
        <div className="relative max-w-4xl mx-auto">
          <div className={`${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.3s' }}>
            {/* Carte du témoignage actuel */}
            <div className="bg-gradient-to-br from-secondary/30 to-background rounded-xl p-8 md:p-12 text-center">
              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-accent-red/20 to-primary/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                {testimonials[currentTestimonial].avatar}
              </div>

              {/* Étoiles */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>

              {/* Texte du témoignage */}
              <blockquote className="text-lg leading-relaxed text-muted-foreground italic mb-8 max-w-3xl mx-auto">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Informations de l'auteur */}
              <div className="space-y-1">
                <h4 className="font-bold text-accent-red text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            {/* Navigation du carousel */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              {/* Bouton précédent */}
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent-red hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Indicateurs de pagination */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentTestimonial 
                        ? 'bg-accent-red' 
                        : 'bg-secondary hover:bg-accent-red/50'
                    }`}
                  />
                ))}
              </div>

              {/* Bouton suivant */}
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent-red hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CTA pour laisser un témoignage */}
        <div className={`text-center mt-12 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`} style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground mb-4">
            Vous avez travaillé avec moi ?
          </p>
          <button 
            onClick={() => {
              // POUR MODIFIER : Changez l'action selon vos besoins
              window.open('mailto:contact@ogoulajesse.pro?subject=Témoignage', '_blank');
            }}
            className="btn-secondary"
          >
            Partager votre expérience
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;