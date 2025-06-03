
import { useState, useEffect } from "react";

const ScrollCounter = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [localTime, setLocalTime] = useState(new Date());
  const [visitorCount, setVisitorCount] = useState(1247);

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setLocalTime(new Date());
    }, 1000);

    // Simulate visitor count updates
    const visitorInterval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(visitorInterval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <>
      {/* Section Counter */}
      <div className="counter-display hidden lg:block">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">
            {currentSection.toString().padStart(2, '0')}
          </div>
          <div className="text-xs opacity-70">
            SECTION
          </div>
        </div>
      </div>

      {/* Stats Display */}
      <div className="stats-display hidden lg:block">
        <div className="space-y-2 text-xs">
          <div>
            <span className="opacity-70">LOCAL TIME:</span>
            <br />
            <span className="font-mono">{formatTime(localTime)}</span>
          </div>
          <div>
            <span className="opacity-70">VISITORS:</span>
            <br />
            <span className="font-mono">{visitorCount.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollCounter;
