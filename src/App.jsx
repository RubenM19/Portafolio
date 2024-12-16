import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTheme } from "./hooks/useTheme";

// Import components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Profile from "./components/sections/Profile";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import ThemeToggle from "./components/common/ThemeToggle";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState("en"); // Estado para el idioma

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Helmet>
          <title>
            {language === "en"
              ? "Rubén Mondragón - Software Engineering Portfolio"
              : "Rubén Mondragón - Portafolio de Ingeniería de Software"}
          </title>
          <meta
            name="description"
            content={
              language === "en"
                ? "Portfolio of Rubén Mondragón, Software Engineering graduate"
                : "Portafolio de Rubén Mondragón, graduado en Ingeniería de Software"
            }
          />
        </Helmet>

        {/* Botones fijos: Idioma y Tema */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-6">
  {/* Botón de cambio de idioma */}
  <button
    onClick={toggleLanguage}
    className="flex items-center justify-center px-4 py-2 bg-primary-500 dark:bg-primary-700 text-white rounded-md shadow-md hover:bg-primary-600 dark:hover:bg-primary-500 transition duration-300"
  >
    <img
      src={
        language === "en"
          ? "https://flagcdn.com/w40/es.png" // Bandera de España
          : "https://flagcdn.com/w40/gb.png" // Bandera de UK
      }
      alt="Language Flag"
      className="w-5 h-5 mr-2"
    />
    {language === "en" ? "Español" : "English"}
  </button>

  {/* Botón de cambio de tema */}
  <div>
    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
  </div>
</div>

        {/* Contenedor principal */}
        <div className="w-screen min-h-screen px-4 md:px-8 py-8">
          {/* Componentes */}
          <Header language={language} toggleLanguage={toggleLanguage} />

          <main className="space-y-12">
            <Profile language={language} />
            <Skills language={language} />
            <Experience language={language} />
            <Education language={language} />
            <Projects language={language} />
          </main>

          <Footer language={language} />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;
