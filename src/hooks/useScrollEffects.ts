
import { useState, useEffect } from 'react';

const SECTIONS = ["home", "about", "experience", "projects", "skills", "certifications", "contact"];

export const useScrollEffects = (isLoading: boolean) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const progress = (currentScrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

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

      const textElements = document.querySelectorAll('.text-reveal');
      textElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });

      let newActiveSection = "home";
      for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          
          if (sectionTop <= windowHeight / 2 && sectionTop + sectionHeight > windowHeight / 2) {
            newActiveSection = section;
          }
        }
      }
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }

      const sectionElements = document.querySelectorAll('.section-fade');
      sectionElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25;
        
        if (isInView) {
          element.classList.add('in-view');
        }
      });
    };

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
  }, [isLoading, activeSection]);

  return { activeSection, scrollProgress };
};
