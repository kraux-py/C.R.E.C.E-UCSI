import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual EmailJS public key

// Email service configuration
const SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID

// Function to send email
export const sendEmail = async (formData) => {
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
      TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: 'Correo enviado exitosamente',
      response
    };
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return {
      success: false,
      message: 'Error al enviar el correo',
      error
    };
  }
};