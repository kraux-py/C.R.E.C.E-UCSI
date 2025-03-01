
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Proposals from "../components/Proposals";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";
import JoinCampaign from "../components/JoinCampaign";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Efecto para manejar la animación de los elementos al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        // Si el elemento está en el viewport
        if (position.top < window.innerHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    // Verificar elementos visibles inicialmente
    handleScroll();
    
    // Agregar el listener de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Limpieza
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Proposals />
        <Testimonials />
        <Events />
        <JoinCampaign />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
