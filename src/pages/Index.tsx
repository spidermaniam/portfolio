import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import LoadingScreen from "../components/LoadingScreen";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ExitIntentModal } from "@/components/ExitIntentModal";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress
      const progress = (currentScrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Enhanced scroll-based animations
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

      // Improved section detection
      const sections = ["home", "about", "experience", "projects", "skills", "certifications", "contact"];
      let newActiveSection = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          
          // Check if section is in the viewport center
          if (sectionTop <= windowHeight / 2 && sectionTop + sectionHeight > windowHeight / 2) {
            newActiveSection = section;
          }
        }
      }
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }

      // Section fade effects
      const sectionElements = document.querySelectorAll('.section-fade');
      sectionElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25;
        
        if (isInView) {
          element.classList.add('in-view');
        }
      });
    };

    // Throttled scroll handler
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

    if (!isLoading) {
      window.addEventListener("scroll", throttledScroll, { passive: true });
      handleScroll(); // Initial call
    }
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [activeSection, isLoading]);

  useEffect(() => {
    if (isLoading) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if modal hasn't been shown in this session.
      if (!sessionStorage.getItem('exit-intent-shown')) {
        setIsExitModalOpen(true);
        sessionStorage.setItem('exit-intent-shown', 'true');
      }
    };

    // Use `mouseleave` on the document element for better exit detection.
    // This event fires when the pointer has moved out of the entire page.
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden flex flex-col">
      <CustomCursor />
      <ExitIntentModal isOpen={isExitModalOpen} onOpenChange={setIsExitModalOpen} />
      
      {/* Enhanced scroll progress indicator */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Enhanced section navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-6">
          {["home", "about", "experience", "projects", "skills", "certifications", "contact"].map((section) => (
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
      <main className="flex-grow">
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
          <ProjectsSection />
        </div>
        <div className="section-fade">
          <SkillsSection />
        </div>
        <div className="section-fade">
          <CertificationsSection />
        </div>
        <div className="section-fade">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
