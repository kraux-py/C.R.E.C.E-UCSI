import useIntersectionObserver from "@/hooks/use-intersection-observer";
import { scrollToSection } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

const AboutMe = () => {
  const { ref: sectionRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id="sobre-mi"
      className="section-padding bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-24 w-24 border-t-4 border-l-4 border-campaign-600"></div>
              <img
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Candidato"
                className="rounded-lg shadow-xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-campaign-600"></div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block bg-campaign-100 text-campaign-800 text-sm font-semibold py-1 px-3 rounded-full mb-4">
              Sobre Nosotros como C.R.E.C.E
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Comprometido con el futuro de nuestra comunidad universitaria
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Somos C.R.E.C.E, estudiante de Diversas Carreras con pasión por
                el liderazgo y el servicio a nuestra comunidad universitaria.
                Nuestro Objetivo es mejorar la experiencia estudiantil y
                asegurar que cada voz sea escuchada.
              </p>
              <p>
                Durante mis años en la universidad, he participado activamente
                en el Centro de Estudiantes con diversos cargos, lo que me ha
                permitido comprender de primera mano las necesidades de los
                estudiantes.
              </p>
              <p className="text-xl font-semibold text-campaign-700 italic mt-6 border-l-4 border-campaign-600 pl-4">
                "Creo firmemente que el cambio empieza con nosotros, y juntos
                podemos construir una universidad más inclusiva, moderna y
                comprometida con el éxito de cada estudiante."
              </p>

              <div className="mt-8">
                <button
                  onClick={() => scrollToSection("propuestas")}
                  className="btn-primary"
                >
                  Conoce mis propuestas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
