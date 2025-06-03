
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');

    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress
      const progress = (window.scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      // Add scroll-based animations to elements
      const animateElements = document.querySelectorAll('.scroll-animate');
      animateElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25;
        
        if (isVisible) {
          element.classList.add('animate-in');
          element.classList.remove('animate-out');
        } else {
          element.classList.remove('animate-in');
          element.classList.add('animate-out');
        }
      });

      // Determine active section with more precise detection
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionMiddle = offsetTop + offsetHeight / 2;
          const viewportMiddle = scrollPosition + windowHeight / 2;
          
          if (Math.abs(sectionMiddle - viewportMiddle) < offsetHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
