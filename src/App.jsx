import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTheme } from "./hooks/useTheme";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Profile from "./components/sections/Profile";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

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
        </Helmet>

        {/* Sanguchito */}
        <div className="fixed top-4 right-4 z-50">
          <button
            className="flex items-center justify-center w-12 h-12 bg-primary-500 dark:bg-primary-700 text-white rounded-full shadow-md hover:bg-primary-600 dark:hover:bg-primary-500 transition duration-300"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>

          {/* Menú desplegable */}
          {menuOpen && (
            <div className="absolute top-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 space-y-4">
              {/* Botón de cambio de idioma */}
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center w-full px-4 py-2 bg-primary-500 dark:bg-primary-700 text-white rounded-md hover:bg-primary-600 dark:hover:bg-primary-500 transition duration-300"
              >
                <img
                  src={
                    language === "en"
                      ? "https://flagcdn.com/w40/es.png"
                      : "https://flagcdn.com/w40/gb.png"
                  }
                  alt="Language Flag"
                  className="w-5 h-5 mr-2"
                />
                {language === "en" ? "Español" : "English"}
              </button>

              {/* Botón de cambio de tema */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-full px-4 py-2 bg-primary-500 dark:bg-primary-700 text-white rounded-md hover:bg-primary-600 dark:hover:bg-primary-500 transition duration-300"
              >
                <img
                  src={
                    theme === "dark"
                      ? "https://img.icons8.com/ios-filled/50/000000/sun--v1.png"
                      : "https://img.icons8.com/ios-filled/50/000000/moon-symbol.png"
                  }
                  alt="Theme Icon"
                  className="w-5 h-5 mr-2"
                />
                {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
              </button>
            </div>
          )}
        </div>
        <div className="w-screen min-h-screen px-4 md:px-8 py-8">
          <Header language={language} />
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
