
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ["Full-Stack Engineer", "Software Developer", "SDET"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[currentIndex];
      
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Dhruv Puri</span>
          </h1>
          <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 min-h-[1.5em]">
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Results-driven developer with 2+ years of experience in building HMIs, automation frameworks, 
            and scalable applications. Passionate about building distributed systems that solve customer pain points.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105"
            >
              Learn More About Me
            </button>
            <a
              href="mailto:dhruvpuri00766@gmail.com"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
