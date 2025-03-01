
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana García",
    role: "Estudiante de Derecho",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "Sus propuestas sobre los espacios de estudio me convencieron. Realmente entiende las necesidades de los estudiantes y tiene un plan claro para mejorar nuestra experiencia universitaria."
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Estudiante de Ingeniería",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "He trabajado con él en varios proyectos estudiantiles y puedo dar fe de su compromiso, integridad y capacidad de liderazgo. Es exactamente lo que nuestra universidad necesita."
  },
  {
    id: 3,
    name: "Laura Jiménez",
    role: "Representante Estudiantil",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "Como representante estudiantil, valoro su enfoque en la comunicación efectiva y la transparencia. Sus ideas para mejorar la representación estudiantil son muy necesarias."
  },
  {
    id: 4,
    name: "Miguel Rodríguez",
    role: "Estudiante de Medicina",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "Sus propuestas sobre bienestar estudiantil abordan problemas reales que enfrentamos los estudiantes de medicina. Aprecio su enfoque holístico y su preocupación genuina."
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonios" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto container-padding">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block bg-campaign-100 text-campaign-800 text-sm font-semibold py-1 px-3 rounded-full mb-4">
            Testimonios
          </div>
          <h2 className="section-title">
            Lo que dicen sobre <span className="text-campaign-600">nuestro candidato</span>
          </h2>
          <p className="section-subtitle">
            Conoce las opiniones de quienes ya confían en nuestra visión para el futuro de la universidad.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full min-w-full"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full border-4 border-campaign-100"
                        />
                      </div>
                      <div className="flex-1">
                        <Quote className="h-10 w-10 text-campaign-200 mb-4" />
                        <p className="text-gray-700 text-lg md:text-xl italic mb-6">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-campaign-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white text-campaign-600 p-2 rounded-full shadow-lg hover:bg-campaign-50 transition-colors z-10"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white text-campaign-600 p-2 rounded-full shadow-lg hover:bg-campaign-50 transition-colors z-10"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full ${
                  currentIndex === index ? "bg-campaign-600" : "bg-gray-300"
                } transition-colors duration-300`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
