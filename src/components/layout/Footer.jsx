import React from 'react';

// Traducciones para el pie de página
const footerTranslations = {
  en: {
    rights: "All rights reserved.",
  },
  es: {
    rights: "Todos los derechos reservados.",
  },
};

const Footer = ({ language }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-6 transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <p className="text-center">
          &copy; 2024 Rubén Mondragón. {footerTranslations[language].rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
