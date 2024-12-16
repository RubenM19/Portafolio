import React from 'react';
import { Link } from 'react-scroll';

// Traducciones globales
const translations = {
  en: {
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
  },
  es: {
    skills: "Habilidades",
    experience: "Experiencia",
    education: "Educación",
    projects: "Proyectos",
  },
};

const Header = ({ language }) => {
  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-4 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navegación */}
        <nav className="flex-1">
          <ul className="flex justify-around items-center">
            <li>
              <Link
                to="skills"
                smooth
                duration={500}
                className="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer transition-colors duration-300"
              >
                {translations[language].skills}
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth
                duration={500}
                className="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer transition-colors duration-300"
              >
                {translations[language].experience}
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth
                duration={500}
                className="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer transition-colors duration-300"
              >
                {translations[language].education}
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth
                duration={500}
                className="hover:text-primary-500 dark:hover:text-primary-300 cursor-pointer transition-colors duration-300"
              >
                {translations[language].projects}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
