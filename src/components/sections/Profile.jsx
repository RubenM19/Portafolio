import React from "react";
import { Mail, Phone, Github } from "lucide-react";

const Profile = ({ language }) => {
  // Traducciones
  const translations = {
    en: {
      title: "Rubén Alberto Mondragón Zúñiga",
      subtitle: "Software Engineering Graduate",
      email: "rubenamondragon1909@gmail.com",
      phone: "+51 947 561 740",
      github: "GitHub Profile",
      description:
        "A proactive person, excellent team player, organized and responsible. I greatly enjoy learning new things. Graduated in Software Engineering, with experience in the development of dashboards in Power BI and automated flows in Power Automate to optimize processes. My interest in tools such as ETL, SQL, and Databricks is combined with collaboration and a hands-on approach, which allows me to work in a team to create efficient solutions in challenging environments.",
    },
    es: {
      title: "Rubén Alberto Mondragón Zúñiga",
      subtitle: "Graduado en Ingeniería de Software",
      email: "rubenamondragon1909@gmail.com",
      phone: "+51 947 561 740",
      github: "Perfil de GitHub",
      description:
        "Proactivo, bueno para trabajar en equipo, organizado y responsable. Disfruto mucho aprender cosas nuevas. Graduado en Ingeniería de Software, con experiencia en el desarrollo de tableros en Power BI y flujos automatizados en Power Automate para optimizar procesos. Mi interés en herramientas como ETL, SQL y Databricks se combina con la colaboración y un enfoque práctico, lo que me permite trabajar en equipo para crear soluciones eficientes en entornos desafiantes.",
    },
  };

  const t = translations[language]; // Selecciona el idioma actual

  return (
    <section
      id="profile"
      className="flex flex-col md:flex-row items-start justify-between p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      aria-labelledby="profile-title"
    >
      {/* Contenido Izquierdo */}
      <div className="flex-1 text-left mb-4 md:mb-0">
        <h1
          id="profile-title"
          className="text-3xl font-bold text-primary-700 dark:text-primary-300 mb-2"
        >
          {t.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          {t.subtitle}
        </p>

        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-primary-600" />
            <a
              href={`mailto:${t.email}`}
              className="hover:text-primary-700 dark:hover:text-primary-300 text-gray-700 dark:text-gray-300"
            >
              {t.email}
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-primary-600" />
            <span className="text-gray-700 dark:text-gray-300">
              {t.phone}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Github className="w-5 h-5 text-primary-600" />
            <a
              href="https://github.com/RubenM19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-700 dark:hover:text-primary-300 text-gray-700 dark:text-gray-300"
            >
              {t.github}
            </a>
          </div>
        </div>
      </div>

      {/* Recuadro Derecho */}
      <div className="flex-1 md:ml-8">
        <div className="p-6 bg-gray-50 dark:bg-gray-700 border-l-4 border-primary-600 dark:border-primary-300 rounded-lg shadow-md">
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
