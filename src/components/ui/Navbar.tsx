import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre Mí" },
  { id: "propuestas", label: "Propuestas" },
  // { id: "testimonios", label: "Testimonios" },
  // { id: "eventos", label: "Eventos" },
  { id: "contacto", label: "Contacto" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        scrolled ? "shadow-md py-3" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-campaign-700 font-bold text-xl md:text-2xl flex items-center"
          onClick={scrollToTop}
        >
          <span className="text-campaign-600 mr-2">C.R.E.C.E</span>UCSI
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-gray-800 hover:text-campaign-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("unete")}
            className="btn-primary"
          >
            ¡Vota por mí!
          </button>
        </div>

        <button
          className="md:hidden text-gray-800 hover:text-campaign-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-800 hover:text-campaign-600 py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("unete")}
              className="btn-primary w-full text-center py-3"
            >
              ¡Vota por mí!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
