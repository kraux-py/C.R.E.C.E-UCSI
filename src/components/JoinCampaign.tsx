import { useState } from "react";
import { Instagram, Phone } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import useIntersectionObserver from "@/hooks/use-intersection-observer";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  rows = 4,
  className = "",
  labelClassName = "block text-sm font-medium text-white mb-1",
  inputClassName = "w-full px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-campaign-500 focus:border-transparent",
}) => (
  <div className={className}>
    <label htmlFor={id} className={labelClassName}>
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows={rows}
        className={inputClassName}
        placeholder={placeholder}
        required={required}
      />
    ) : (
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={inputClassName}
        placeholder={placeholder}
      />
    )}
  </div>
);

const JoinCampaign = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    career: "",
    year: "",
    email: "",
    phone: "",
    message: "",
    isVolunteer: false,
    isNewsletterChecked: true,
  });

  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useIntersectionObserver();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    toast({
      title: "¡Gracias por tu apoyo!",
      description:
        "Hemos recibido tu información y pronto nos pondremos en contacto contigo.",
    });

    setFormData({
      name: "",
      lastName: "",
      career: "",
      year: "",
      email: "",
      phone: "",
      message: "",
      isVolunteer: false,
      isNewsletterChecked: true,
    });
  };

  return (
    <section
      id="unete"
      className="section-padding relative bg-black text-white overflow-hidden py-16"
      ref={sectionRef}
    >
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¡Tu apoyo hace la diferencia!
            </h2>

            <p className="text-lg mb-8 text-white/90">
              Únete a nuestra campaña y sé parte del cambio que nuestra
              universidad necesita. Juntos podemos transformar nuestra
              experiencia universitaria.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex space-x-4 mt-6 text-white hover:text-campaign-300 transition-colors">
                <Instagram />
                <a
                  href="https://instagram.com/c.r.e.c.e_ucsi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Siguienos en nuestro Instagram
                </a>
              </div>
              <div className="flex space-x-4 mt-6 text-white hover:text-campaign-300 transition-colors">
                <Phone />
                <a
                  href="https://wa.link/n583fb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +595 972 250962
                </a>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                ¡Únete a la campaña!
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-16">
                  <FormField
                    id="name"
                    label="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required={true}
                    rows={4}
                    placeholder="Tu nombre"
                  />
                  <FormField
                    id="lastName"
                    label="Apellido"
                    value={formData.lastName}
                    onChange={handleChange}
                    required={true}
                    rows={4}
                    placeholder="Tu apellido"
                  />
                </div>

                <div className="flex gap-16">
                  <FormField
                    id="career"
                    label="Carrera"
                    value={formData.career}
                    onChange={handleChange}
                    required={true}
                    rows={4}
                    placeholder="Tu carrera"
                  />
                  <FormField
                    id="year"
                    label="Año"
                    value={formData.year}
                    onChange={handleChange}
                    required={true}
                    rows={4}
                    placeholder="El año que estas cursando"
                  />
                </div>

                <FormField
                  id="email"
                  label="Correo electrónico"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required={true}
                  rows={4}
                  placeholder="tu@email.com"
                />

                <FormField
                  id="phone"
                  label="Teléfono (opcional)"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tu número de teléfono"
                />

                <FormField
                  id="message"
                  label="¿Qué iniciativas o sugerencias crees que podrían contribuir a elevar la calidad de la educación y a fomentar un entorno más positivo dentro de la universidad?"
                  type="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="¿Cómo te gustaría colaborar?"
                />

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isVolunteer"
                    checked={formData.isVolunteer}
                    onChange={handleChange}
                    className="h-5 w-5 bg-neutral-800 border-neutral-700 rounded focus:ring-campaign-500 text-campaign-600"
                  />
                  <label
                    htmlFor="isVolunteer"
                    className="ml-2 block text-white"
                  >
                    Quiero formar parte
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white hover:bg-campaign-600 text-black hover:text-white font-semibold py-3 px-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-[1.02] focus:outline-none"
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
