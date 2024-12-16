import React from 'react';
import { GitBranch } from 'lucide-react';

// Traducciones globales
const translations = {
  en: {
    title: "Projects",
    viewProject: "View Project",
    projects: [
      {
        name: "GitHub Projects",
        description: "Explore my open-source projects and contributions",
        technologies: ["Python", "Data Analysis", "Web Development"],
        link: "https://github.com/RubenM19",
      },
    ],
  },
  es: {
    title: "Proyectos",
    viewProject: "Ver Proyecto",
    projects: [
      {
        name: "Proyectos de GitHub",
        description: "Explora mis proyectos de código abierto y contribuciones",
        technologies: ["Python", "Análisis de Datos", "Desarrollo Web"],
        link: "https://github.com/RubenM19",
      },
    ],
  },
};

const ProjectCard = ({ name, description, technologies, link, viewProjectText }) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 dark:text-primary-300"
        >
          {viewProjectText}
        </a>
      )}
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded-full text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const Projects = ({ language }) => {
  const t = translations[language]; // Traducciones dinámicas según el idioma

  return (
    <section
      id="projects"
      className="p-6 bg-white dark:bg-gray-900"
      aria-labelledby="projects-title"
    >
      <div className="flex items-center mb-6">
        <GitBranch className="w-6 h-6 mr-3 text-primary-600" />
        <h2
          id="projects-title"
          className="text-2xl font-bold text-primary-700 dark:text-primary-300"
        >
          {t.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {t.projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            viewProjectText={t.viewProject}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
