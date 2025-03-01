
import { BookOpen, Award, Coffee, Users, Library } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface ProposalProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

const ProposalCard = ({ icon, title, description, isVisible, delay }: ProposalProps) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md p-6 border-t-4 border-campaign-600 hover:shadow-lg transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-3 bg-campaign-50 inline-flex rounded-full text-campaign-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Proposals = () => {
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
//
  const proposals = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Más Becas y Apoyo Financiero",
      description: "Implementaremos un sistema de becas más inclusivo que permita a más estudiantes acceder a oportunidades educativas sin preocuparse por las limitaciones financieras.",
    },
    {
      icon: <Library className="h-6 w-6" />,
      title: "Mejores Espacios de Estudio",
      description: "Renovaremos y ampliaremos las áreas de estudio en el campus, con tecnología moderna, mejores muebles y espacios diseñados para el trabajo colaborativo e individual.",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Bienestar Estudiantil",
      description: "Crearemos nuevos programas de bienestar que incluyen apoyo psicológico, actividades recreativas y espacios de descanso para promover una vida universitaria equilibrada.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Representación Estudiantil Efectiva",
      description: "Fortaleceremos los canales de comunicación entre estudiantes y administración, asegurando que la voz estudiantil sea escuchada en todas las decisiones importantes.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Innovación Académica",
      description: "Trabajaremos para actualizar los planes de estudio, incorporar nuevas tecnologías en el aprendizaje y fomentar métodos pedagógicos innovadores en todas las carreras.",
    },
  ];

  return (
    <section id="propuestas" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-campaign-100 text-campaign-800 text-sm font-semibold py-1 px-3 rounded-full mb-4">
            Mis Propuestas
          </div>
          <h2 className="section-title">
            Propuestas que <span className="text-campaign-600">transformarán</span> nuestra universidad
          </h2>
          <p className="section-subtitle">
            He desarrollado un plan concreto y realista que aborda las necesidades más importantes de nuestra comunidad universitaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {proposals.map((proposal, index) => (
            <ProposalCard
              key={index}
              icon={proposal.icon}
              title={proposal.title}
              description={proposal.description}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const joinSection = document.getElementById("unete");
              if (joinSection) {
                const yOffset = -80;
                const y = joinSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="btn-primary"
          >
            ¡Apoya estas propuestas!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Proposals;
