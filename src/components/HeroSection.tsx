
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
    <section id="home" className="min-h-screen flex items-center justify-center relative section-padding overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="scroll-animate">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
              Hi, I'm <span className="gradient-text">Dhruv Puri</span>
            </h1>
          </div>
          
          <div className="scroll-animate">
            <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 min-h-[1.5em]">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{displayText}</span>
              <span className="animate-pulse text-purple-400">|</span>
            </div>
          </div>
          
          <div className="scroll-animate">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed hover:text-foreground transition-colors duration-300">
              Results-driven developer with 2+ years of experience in building HMIs, automation frameworks, 
              and scalable applications. Passionate about building distributed systems that solve customer pain points.
            </p>
          </div>
          
          <div className="scroll-animate">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
              >
                Learn More About Me
              </button>
              <a
                href="mailto:dhruvpuri00766@gmail.com"
                className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all hover:scale-105 hover:border-purple-500/50"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-animate">
        <button
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-purple-400 transition-all duration-300 hover:scale-110 group"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Scroll down</span>
            <ArrowDown size={24} className="animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
