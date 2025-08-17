"use client";
import { motion } from "framer-motion";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };


  const sections = ["home", "skills", "projects", "contact"];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => scrollToSection(section)}
                className={`${
                  activeSection === section
                    ? "text-blue-500"
                    : "text-gray-400 hover:text-white"
                } capitalize transition-colors duration-300`}
              >
                {section}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Header;
