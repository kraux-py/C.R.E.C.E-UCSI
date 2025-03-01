import { scrollToSection } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("sobre-mi");
    if (nextSection) {
      const yOffset = -80;
      const y = nextSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.imgur.com/lVtaHHH.png') no-repeat center center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        paddingBottom: "100px",
      }}
    >
      <div className="container mx-auto px-4 md:px-8 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight animate-fade-in" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            ¡Juntos podemos transformar 
            <span className="text-campaign-400"> nuestra universidad</span>!
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in animation-delay-300" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
            Conoce las propuestas que harán la diferencia en la vida estudiantil
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-500">
            <button 
              onClick={() => {
                const proposalsSection = document.getElementById("propuestas");
                if (proposalsSection) {
                  const yOffset = -80;
                  const y = proposalsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="bg-campaign-600 hover:bg-campaign-700 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-campaign-400 focus:ring-opacity-50"
            >
              Ver propuestas
            </button>
            
            <button 
              onClick={() => {
                const joinSection = document.getElementById("unete");
                if (joinSection) {
                  const yOffset = -80;
                  const y = joinSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="bg-white text-campaign-600 font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-campaign-400 focus:ring-opacity-50"
            >
              ¡Apóyame!
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={scrollToNextSection}
          aria-label="Desplazar hacia abajo"
          className="text-white bg-campaign-600 rounded-full p-2 shadow-md hover:bg-campaign-700 transition-colors"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;