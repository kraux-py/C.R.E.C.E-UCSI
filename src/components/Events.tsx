
import { useState, useEffect, useRef } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Debate Presidencial",
    date: "15 de Mayo, 2023",
    time: "14:00 - 16:00",
    location: "Auditorio Principal",
    description: "Participa en el debate donde presentaré mis propuestas y responderé preguntas de los estudiantes."
  },
  {
    id: 2,
    title: "Café con Candidatos",
    date: "18 de Mayo, 2023",
    time: "10:00 - 12:00",
    location: "Cafetería Central",
    description: "Una reunión informal para conversar sobre las preocupaciones y sugerencias de los estudiantes."
  },
  {
    id: 3,
    title: "Presentación de Plan de Gobierno",
    date: "22 de Mayo, 2023",
    time: "13:00 - 15:00",
    location: "Sala de Conferencias B",
    description: "Presentación detallada de mi plan de gobierno y propuestas específicas para cada facultad."
  },
  {
    id: 4,
    title: "Día de las Elecciones",
    date: "29 de Mayo, 2023",
    time: "08:00 - 18:00",
    location: "Pabellones de cada facultad",
    description: "¡El gran día! No olvides llevar tu credencial universitaria y ejercer tu derecho al voto."
  }
];

const EventCard = ({ event, isVisible, delay }: { event: Event, isVisible: boolean, delay: number }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{event.title}</h3>
        
        <div className="space-y-3 text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-campaign-600 mr-2" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-campaign-600 mr-2" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-campaign-600 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="mt-4 text-gray-700">{event.description}</p>
        
        <button className="mt-4 text-campaign-600 font-semibold hover:text-campaign-700 transition-colors">
          Añadir a calendario →
        </button>
      </div>
    </div>
  );
};

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="eventos" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-campaign-100 text-campaign-800 text-sm font-semibold py-1 px-3 rounded-full mb-4">
            Agenda
          </div>
          <h2 className="section-title">
            Próximos <span className="text-campaign-600">eventos</span> y actividades
          </h2>
          <p className="section-subtitle">
            Participa en nuestros eventos para conocer más sobre nuestras propuestas y compartir tus ideas para mejorar la universidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <EventCard 
              key={event.id} 
              event={event} 
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            Ver calendario completo →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
