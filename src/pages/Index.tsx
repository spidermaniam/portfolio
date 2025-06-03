
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
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      
      const sections = ["home", "about", "experience", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress
      const progress = (window.scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      // Enhanced scroll-based animations with intersection observer logic
      const animateElements = document.querySelectorAll('.scroll-animate');
      animateElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        const threshold = windowHeight * 0.1; // Start animation when element is 10% visible
        
        const isVisible = elementTop < windowHeight - threshold && elementBottom > threshold;
        
        if (isVisible) {
          element.classList.add('animate-in');
          element.classList.remove('animate-out');
        } else if (elementTop > windowHeight || elementBottom < 0) {
          element.classList.remove('animate-in');
          element.classList.add('animate-out');
        }
      });

      // Enhanced section detection with smoother transitions
      let newActiveSection = activeSection;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionStart = offsetTop - windowHeight / 3;
          const sectionEnd = offsetTop + offsetHeight - windowHeight / 3;
          
          if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
            newActiveSection = section;
            break;
          }
        }
      }
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }

      // Add section fade effects
      const sectionElements = document.querySelectorAll('.section-fade');
      sectionElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
        
        if (isInView) {
          element.classList.add('in-view');
        }
      });

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Enhanced scroll event with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Enhanced scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 z-50 transition-all duration-300 shadow-lg shadow-yellow-500/30"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Scroll indicator dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-3">
          {["home", "about", "experience", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => {
                const element = document.getElementById(section);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section
                  ? "bg-yellow-400 border-yellow-400 scale-125"
                  : "bg-transparent border-gray-600 hover:border-yellow-400"
              }`}
            />
          ))}
        </div>
      </div>
      
      <Navigation activeSection={activeSection} />
      <main>
        <div className="section-fade">
          <HeroSection />
        </div>
        <div className="section-fade">
          <AboutSection />
        </div>
        <div className="section-fade">
          <ExperienceSection />
        </div>
        <div className="section-fade">
          <SkillsSection />
        </div>
        <div className="section-fade">
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
