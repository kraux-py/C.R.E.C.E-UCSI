import emailjs from '@emailjs/browser';

// Inicializar EmailJS con la clave pública
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// Configuración de los IDs de servicio y plantillas
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const OWNER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID;
const USER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID;

// Función para enviar correo al administrador
export const sendEmailToOwner = async (formData) => {
  try {
    const templateParams = {
      from_name: `${formData.name} ${formData.lastName}`,
      career: formData.career,
      year: formData.year,
      email: formData.email,
      phone: formData.phone || 'No proporcionado',
      message: formData.message,
      is_volunteer: formData.isVolunteer ? 'Sí' : 'No',
      to_name: 'Administrador de C.R.E.C.E',
    };

    const response = await emailjs.send(
      SERVICE_ID,
      OWNER_TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: 'Correo enviado exitosamente al administrador',
      response,
    };
  } catch (error) {
    console.error('Error al enviar el correo al administrador:', error);
    return {
      success: false,
      message: 'Error al enviar el correo al administrador',
      error,
    };
  }
};

// Función para enviar correo al usuario
export const sendEmailToUser = async (formData) => {
  try {
    const templateParams = {
      to_name: `${formData.name} ${formData.lastName}`,
      email: formData.email,
      message: 'Gracias por contactarnos. Hemos recibido tu mensaje.',
    };

    const response = await emailjs.send(
      SERVICE_ID,
      USER_TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: 'Correo de confirmación enviado al usuario',
      response,
    };
  } catch (error) {
    console.error('Error al enviar el correo de confirmación al usuario:', error);
    return {
      success: false,
      message: 'Error al enviar el correo de confirmación al usuario',
      error,
    };
  }
};