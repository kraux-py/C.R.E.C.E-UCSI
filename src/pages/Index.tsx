import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Proposals from "../components/Proposals";
import JoinCampaign from "../components/JoinCampaign";
import Footer from "../components/Footer";
import { useEffect, useCallback } from "react";

const Index = () => {
  const handleScrollAnimations = useCallback(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.8) {
        element.classList.add("visible");
      }
    });
  }, []);

  useEffect(() => {
    handleScrollAnimations();

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollAnimations, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [handleScrollAnimations]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Proposals />
        {/* <Testimonials />
        <Events /> */}
        <JoinCampaign />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
