import { Instagram, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToSection } from "@/lib/utils";

const footerNavItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre Mí" },
  { id: "propuestas", label: "Propuestas" },
  { id: "testimonios", label: "Testimonios" },
];

const FooterNavLink = ({ id, label }) => (
  <li>
    <button
      onClick={() => scrollToSection(id)}
      className="text-gray-400 hover:text-white flex items-center transition-colors"
    >
      <ChevronRight className="h-4 w-4 mr-1" />
      {label}
    </button>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a
              href="#"
              className="text-2xl font-bold mb-4 flex items-center"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="text-campaign-400 mr-2">C.R.E.C.E</span>UCSI
            </a>
            <p className="text-gray-400 mt-4">
              Trabajando juntos para construir una universidad más inclusiva,
              innovadora y centrada en los estudiantes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <FooterNavLink key={item.id} id={item.id} label={item.label} />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Contáctanos
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400"></li>
              <li className="text-gray-400">
                Campus Universitario
                <br />
                Universidad Catolica Nuestra Señora de la Asuncion 'San Ignacio
                Guazu'
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("unete")}
                  className="mt-2 bg-campaign-600/30 hover:bg-campaign-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  ¡Únete ahora!
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Síguenos
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/c.r.e.c.e_ucsi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-campaign-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Recibe actualizaciones sobre nuestra campaña y eventos próximos.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} Campaña Universitaria. Todos los derechos
            reservados.
          </p>
          <p className="mt-4 text-campaign-400 italic">
            "¡Gracias por creer en el cambio!"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
