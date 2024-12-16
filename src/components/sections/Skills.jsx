import React from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

// Traducciones globales
const translations = {
  en: {
    title: "Skills & Tools",
    categories: {
      programming: "Programming & Data",
      microsoft: "Microsoft Technologies",
      cloud: "Cloud & Data Services",
      languages: "Languages",
    },
    skills: {
      programming: [
        "Python (Intermediate)",
        "SQL (Advanced)",
        "React (Intermediate)",
        "Javascript (Intermediate)",
        "HTML & CSS (Intermediate)",
        "Excel Macros (Advanced)",
      ],
      microsoft: [
        "Power BI (Intermediate)",
        "Power Apps (Intermediate)",
        "Power Automate (Intermediate)",
      ],
      cloud: [
        "Azure Databricks (Intermediate)",
        "Azure Storage (Intermediate)",
        "Data Factory (Basic)",
      ],
      languages: ["English (Advanced)", "Portuguese (Intermediate)"],
    },
  },
  es: {
    title: "Habilidades y Herramientas",
    categories: {
      programming: "Programación y Datos",
      microsoft: "Tecnologías de Microsoft",
      cloud: "Servicios en la Nube y Datos",
      languages: "Idiomas",
    },
    skills: {
      programming: [
        "Python (Intermedio)",
        "SQL (Avanzado)",
        "React (Intermedio)",
        "Javascript (Intermedio)",
        "HTML y CSS (Intermedio)",
        "Macros de Excel (Avanzado)",
      ],
      microsoft: [
        "Power BI (Intermedio)",
        "Power Apps (Intermedio)",
        "Power Automate (Intermedio)",
      ],
      cloud: [
        "Azure Databricks (Intermedio)",
        "Azure Storage (Intermedio)",
        "Data Factory (Básico)",
      ],
      languages: ["Inglés (Avanzado)", "Portugués (Intermedio)"],
    },
  },
};

const SkillCategory = ({ title, skills, Icon }) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <div className="flex items-center mb-3">
      <Icon className="w-6 h-6 mr-2 text-primary-600" />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
        >
          <span className="w-2 h-2 mr-2 bg-primary-500 rounded-full"></span>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const Skills = ({ language }) => {
  const t = translations[language]; // Traducciones dinámicas según el idioma

  return (
    <section 
      id="skills" 
      className="grid md:grid-cols-2 gap-6 p-6 bg-white dark:bg-gray-900"
      aria-labelledby="skills-title"
    >
      <h2 
        id="skills-title" 
        className="col-span-full text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4"
      >
        {t.title}
      </h2>

      <SkillCategory 
        title={t.categories.programming} 
        skills={t.skills.programming} 
        Icon={Code} 
      />
      
      <SkillCategory 
        title={t.categories.microsoft} 
        skills={t.skills.microsoft} 
        Icon={Wrench} 
      />
      
      <SkillCategory 
        title={t.categories.cloud} 
        skills={t.skills.cloud} 
        Icon={Database} 
      />
      
      <SkillCategory 
        title={t.categories.languages} 
        skills={t.skills.languages} 
        Icon={Globe} 
      />
    </section>
  );
};

export default Skills;
