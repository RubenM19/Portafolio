import React from 'react';
import { GraduationCap } from 'lucide-react';

// Traducciones globales
const translations = {
  en: {
    title: "Education",
    degree: "Software Engineering",
    university: "Universidad Nacional Mayor de San Marcos",
    status: "Graduated",
    performance: "Academic Performance: Top 5% of the class",
    scholarship: "Scholarship: PRONABEC Scholarship Recipient",
  },
  es: {
    title: "Educación",
    degree: "Ingeniería de Software",
    university: "Universidad Nacional Mayor de San Marcos",
    status: "Graduado",
    performance: "Rendimiento Académico: Top 5% de la clase",
    scholarship: "Beca: Beneficiario de la Beca PRONABEC",
  },
};

const Education = ({ language }) => {
  const t = translations[language]; // Traducciones dinámicas según el idioma

  return (
    <section
      id="education"
      className="p-6 bg-white dark:bg-gray-900"
      aria-labelledby="education-title"
    >
      {/* Encabezado */}
      <div className="flex items-center mb-6">
        <GraduationCap className="w-6 h-6 mr-3 text-primary-600" />
        <h2
          id="education-title"
          className="text-2xl font-bold text-primary-700 dark:text-primary-300"
        >
          {t.title}
        </h2>
      </div>

      {/* Contenido */}
      <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {t.degree}
            </h3>
            <p className="text-primary-600 dark:text-primary-300">
              {t.university}
            </p>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t.status}
            </span>
          </div>
        </div>

        {/* Detalles */}
        <div className="space-y-2 text-gray-600 dark:text-gray-300">
          <p className="text-sm">
            <strong>{t.performance.split(":")[0]}:</strong> {t.performance.split(":")[1]}
          </p>
          <p className="text-sm">
            <strong>{t.scholarship.split(":")[0]}:</strong> {t.scholarship.split(":")[1]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
  