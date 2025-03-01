import { PROPOSALS } from "@/constants/data";
import useIntersectionObserver from "@/hooks/use-intersection-observer";
import { scrollToSection } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

interface ProposalProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

const ProposalCard = ({
  icon,
  title,
  description,
  isVisible,
  delay,
}: ProposalProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 border-t-4 border-campaign-600 hover:shadow-lg transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
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
  const { ref: sectionRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id="propuestas"
      className="section-padding bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-campaign-100 text-campaign-800 text-sm font-semibold py-1 px-3 rounded-full mb-4">
            Mis Propuestas
          </div>
          <h2 className="section-title">
            Propuestas que{" "}
            <span className="text-campaign-600">transformarán</span> nuestra
            universidad
          </h2>
          <p className="section-subtitle">
            He desarrollado un plan concreto y realista que aborda las
            necesidades más importantes de nuestra comunidad universitaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROPOSALS.map((proposal, index) => (
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
            onClick={() => scrollToSection("unete")}
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
