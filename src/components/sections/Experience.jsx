import React from 'react';
import { Briefcase } from 'lucide-react';

// Traducciones globales
const translations = {
  en: {
    title: "Professional Experience",
    experiences: [
      {
        title: "Volunteer Programming Instructor",
        company: "GDIT - 'CONTACTO JOVEN PROGRAMMING FROM 0'",
        period: "April 2023",
        responsibilities: [
          "Teach Python to high school 5th-grade students via Zoom",
          "Foster interest in programming",
          "Use digital tools like Visual Studio Code, Google Collab, and Jupyter",
        ],
      },
      {
        title: "Pre-Professional Business Intelligence Intern",
        company: "Santander Microfinanzas",
        period: "July 2023 - Present",
        responsibilities: [
          "Design Power BI dashboards for commercial variable monitoring",
          "Data cleaning and transformation using SQL and Excel (PowerQuery)",
          "Automate workflows with Power Automate and Excel macros",
          "Data access and queries in Databricks and Azure Storage",
          "Create low-code solutions in Power Apps (e.g., corporate 360 feedback)",
          "Extract, transform, and import data to Power BI for interactive dashboards",
        ],
      },
    ],
  },
  es: {
    title: "Experiencia Profesional",
    experiences: [
      {
        title: "Instructor Voluntario de Programación",
        company: "GDIT - 'CONTACTO JOVEN PROGRAMMING FROM 0'",
        period: "Abril 2023",
        responsibilities: [
          "Enseñar Python a estudiantes de 5° grado de secundaria vía Zoom",
          "Fomentar el interés en la programación",
          "Usar herramientas digitales como Visual Studio Code, Google Collab y Jupyter",
        ],
      },
      {
        title: "Practicante Pre-Profesional de Business Intelligence",
        company: "Santander Microfinanzas",
        period: "Julio 2023 - Presente",
        responsibilities: [
          "Diseñar dashboards de Power BI para el monitoreo de variables comerciales",
          "Limpieza y transformación de datos usando SQL y Excel (PowerQuery)",
          "Automatizar flujos de trabajo con Power Automate y macros de Excel",
          "Acceso y consultas de datos en Databricks y Azure Storage",
          "Crear soluciones low-code en Power Apps (e.g., feedback corporativo 360)",
          "Extraer, transformar e importar datos a Power BI para dashboards interactivos",
        ],
      },
    ],
  },
};

// Componente para mostrar un ítem de experiencia
const ExperienceItem = ({ title, company, period, responsibilities }) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg mb-4 shadow-md">
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-primary-600 dark:text-primary-300">{company}</p>
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
    </div>
    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
      {responsibilities.map((resp, index) => (
        <li key={index} className="text-sm">{resp}</li>
      ))}
    </ul>
  </div>
);

// Componente principal
const Experience = ({ language }) => {
  const t = translations[language]; // Traducciones dinámicas según el idioma

  return (
    <section
      id="experience"
      className="p-6 bg-white dark:bg-gray-900"
      aria-labelledby="experience-title"
    >
      <div className="flex items-center mb-6">
        <Briefcase className="w-6 h-6 mr-3 text-primary-600" />
        <h2
          id="experience-title"
          className="text-2xl font-bold text-primary-700 dark:text-primary-300"
        >
          {t.title}
        </h2>
      </div>

      {/* Listado de experiencias */}
      {t.experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          title={exp.title}
          company={exp.company}
          period={exp.period}
          responsibilities={exp.responsibilities}
        />
      ))}
    </section>
  );
};

export default Experience;
