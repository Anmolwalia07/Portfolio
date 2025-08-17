"use client";
import { useState, useEffect } from "react";
import Hero from "@/Component/Hero";
import TechStack from "@/Component/Skill";
import Projects from "@/Component/Project";
import Contact from "@/Component/Contacts";
import Footer from "@/Component/Footer";
import Header from "@/Component/Header"; 

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">  
    <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
