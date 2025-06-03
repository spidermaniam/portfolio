
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const sections = ["home", "about", "experience", "skills", "contact"];
      const scrollPosition = currentScrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress
      const progress = (currentScrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Enhanced scroll-based animations with precise intersection detection
      const animateElements = document.querySelectorAll('.scroll-animate');
      animateElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const threshold = windowHeight * 0.15;
        
        const isVisible = elementTop < windowHeight - threshold && 
                         elementTop + elementHeight > threshold;
        
        if (isVisible) {
          element.classList.add('animate-in');
          element.classList.remove('animate-out');
        } else {
          element.classList.remove('animate-in');
          element.classList.add('animate-out');
        }
      });

      // Text reveal animations
      const textElements = document.querySelectorAll('.text-reveal');
      textElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });

      // Timeline animations
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.7;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });

      // Enhanced section detection with smoother transitions
      let newActiveSection = activeSection;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionStart = offsetTop - windowHeight / 2;
          const sectionEnd = offsetTop + offsetHeight - windowHeight / 2;
          
          if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
            newActiveSection = section;
            break;
          }
        }
      }
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }

      // Section fade effects with enhanced timing
      const sectionElements = document.querySelectorAll('.section-fade');
      sectionElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25;
        
        if (isInView) {
          element.classList.add('in-view');
        }
      });

      // Parallax effects
      const parallaxElements = document.querySelectorAll('.parallax-slow');
      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const speed = 0.5;
        const yPos = -(currentScrollY * speed);
        (element as HTMLElement).style.setProperty('--scroll-offset', `${yPos}px`);
      });
    };

    // Throttled scroll handler for better performance
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
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Enhanced scroll progress indicator */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Section navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {["home", "about", "experience", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => {
                const element = document.getElementById(section);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`nav-dot ${activeSection === section ? 'active' : ''}`}
              title={section.charAt(0).toUpperCase() + section.slice(1)}
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
