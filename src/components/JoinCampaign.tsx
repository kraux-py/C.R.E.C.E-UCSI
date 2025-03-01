
import { useState, useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const JoinCampaign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isVolunteer, setIsVolunteer] = useState(false);
  const [isNewsletterChecked, setIsNewsletterChecked] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar los datos a un servidor
    console.log({
      name,
      email,
      phone,
      message,
      isVolunteer,
      isNewsletterChecked
    });
    
    // Mostrar mensaje de éxito
    toast({
      title: "¡Gracias por tu apoyo!",
      description: "Hemos recibido tu información y pronto nos pondremos en contacto contigo.",
    });
    
    // Limpiar formulario
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setIsVolunteer(false);
  };

  return (
    <section 
      id="unete" 
      className="section-padding relative bg-black text-white overflow-hidden py-16"
      ref={sectionRef}
    >
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¡Tu apoyo hace la diferencia!
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              Únete a nuestra campaña y sé parte del cambio que nuestra universidad necesita. Juntos podemos transformar nuestra experiencia universitaria.
            </p>
            
            <div className="space-y-4 mt-8">
              
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-white/70" />
                <a href="https://wa.link/n583fb" className="text-white hover:text-campaign-300 transition-colors">
                +595 972 250962
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              
              <a href="https://instagram.com/c.r.e.c.e_ucsi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-campaign-300 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">¡Únete a la campaña!</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-campaign-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-campaign-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-campaign-500 focus:border-transparent"
                    placeholder="Tu número de teléfono"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                  ¿Qué iniciativas o sugerencias crees que podrían contribuir a elevar la calidad de la educación y a fomentar un entorno más positivo dentro de la universidad? 
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-campaign-500 focus:border-transparent"
                    placeholder="¿Cómo te gustaría colaborar?"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="volunteer"
                    checked={isVolunteer}
                    onChange={(e) => setIsVolunteer(e.target.checked)}
                    className="h-5 w-5 bg-neutral-800 border-neutral-700 rounded focus:ring-campaign-500 text-campaign-600"
                  />
                  <label htmlFor="volunteer" className="ml-2 block text-white">
                    Quiero ser voluntario
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={isNewsletterChecked}
                    onChange={(e) => setIsNewsletterChecked(e.target.checked)}
                    className="h-5 w-5 bg-neutral-800 border-neutral-700 rounded focus:ring-campaign-500 text-campaign-600"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-white">
                    Quiero recibir actualizaciones
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-[1.02] focus:outline-none"
                >
                  ¡Únete ahora!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCampaign;
