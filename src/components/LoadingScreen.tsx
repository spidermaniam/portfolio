
import { useState, useEffect } from "react";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-background z-[9999] flex items-center justify-center">
      <div className="text-center">
        {/* Skeleton Hand Animation */}
        <div className="mb-8 relative">
          <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
            {/* Hand base */}
            <rect x="80" y="80" width="40" height="30" rx="5" fill="#666" className="animate-pulse" />
            
            {/* Fingers */}
            <rect x="70" y="60" width="8" height="25" rx="4" fill="#888" className="animate-wiggle origin-bottom" style={{ animationDelay: '0s' }} />
            <rect x="82" y="50" width="8" height="35" rx="4" fill="#888" className="animate-wiggle origin-bottom" style={{ animationDelay: '0.2s' }} />
            <rect x="94" y="48" width="8" height="37" rx="4" fill="#888" className="animate-wiggle origin-bottom" style={{ animationDelay: '0.4s' }} />
            <rect x="106" y="52" width="8" height="33" rx="4" fill="#888" className="animate-wiggle origin-bottom" style={{ animationDelay: '0.6s' }} />
            <rect x="118" y="62" width="8" height="23" rx="4" fill="#888" className="animate-wiggle origin-bottom" style={{ animationDelay: '0.8s' }} />
            
            {/* Thumb */}
            <rect x="65" y="75" width="12" height="20" rx="6" fill="#888" className="animate-wiggle origin-bottom" style={{ animationDelay: '0.3s' }} />
            
            {/* Surface line */}
            <line x1="0" y1="110" x2="200" y2="110" stroke="#444" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Loading text */}
        <h1 className="text-4xl font-bold mb-4 font-mono tracking-wider">LOADING</h1>
        
        {/* Progress bar */}
        <div className="w-64 h-1 bg-muted mx-auto rounded-full overflow-hidden">
          <div 
            className="h-full bg-foreground transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress percentage */}
        <div className="mt-4 text-sm font-mono text-muted-foreground">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
