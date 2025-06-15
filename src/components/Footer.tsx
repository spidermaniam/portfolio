
import { useState, useEffect } from "react";

const Footer = () => {
  const [localTime, setLocalTime] = useState(new Date());
  const [visitorCount, setVisitorCount] =useState(1247);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setLocalTime(new Date());
    }, 1000);

    const visitorInterval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 30000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(visitorInterval);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <footer className="w-full border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground font-mono text-sm text-center md:text-left">
            © 2025 Dhruv Puri. Built with React, TypeScript, and Tailwind CSS.
          </p>

          <div className="flex items-center space-x-4 md:space-x-8 text-xs text-muted-foreground font-mono">
            <div>
              <span className="opacity-70">LOCAL TIME:</span>
              <span className="ml-2">{formatTime(localTime)}</span>
            </div>
            <div>
              <span className="opacity-70">VISITORS:</span>
              <span className="ml-2">{visitorCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

