
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-campaign-700 font-bold text-xl md:text-2xl flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-campaign-600 mr-2">C.R.E.C.E</span>UCSI
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavClick("inicio")}
            className="text-gray-800 hover:text-campaign-600 transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick("sobre-mi")}
            className="text-gray-800 hover:text-campaign-600 transition-colors"
          >
            Sobre Mí
          </button>
          <button
            onClick={() => handleNavClick("propuestas")}
            className="text-gray-800 hover:text-campaign-600 transition-colors"
          >
            Propuestas
          </button>
          <button
            onClick={() => handleNavClick("testimonios")}
            className="text-gray-800 hover:text-campaign-600 transition-colors"
          >
            Testimonios
          </button>
          <button
            onClick={() => handleNavClick("eventos")}
            className="text-gray-800 hover:text-campaign-600 transition-colors"
          >
            Eventos
          </button>
          <button
            onClick={() => handleNavClick("contacto")}
            className="text-gray-800 hover:text-campaign-600 transition-colors"
          >
            Contacto
          </button>
          <button
            onClick={() => handleNavClick("unete")}
            className="btn-primary"
          >
            ¡Vota por mí!
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-campaign-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <button
              onClick={() => handleNavClick("inicio")}
              className="text-gray-800 hover:text-campaign-600 py-2 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick("sobre-mi")}
              className="text-gray-800 hover:text-campaign-600 py-2 transition-colors"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => handleNavClick("propuestas")}
              className="text-gray-800 hover:text-campaign-600 py-2 transition-colors"
            >
              Propuestas
            </button>
            <button
              onClick={() => handleNavClick("testimonios")}
              className="text-gray-800 hover:text-campaign-600 py-2 transition-colors"
            >
              Testimonios
            </button>
            <button
              onClick={() => handleNavClick("eventos")}
              className="text-gray-800 hover:text-campaign-600 py-2 transition-colors"
            >
              Eventos
            </button>
            <button
              onClick={() => handleNavClick("contacto")}
              className="text-gray-800 hover:text-campaign-600 py-2 transition-colors"
            >
              Contacto
            </button>
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
