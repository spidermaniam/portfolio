
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
        {/* Enhanced Skeleton Hand Animation */}
        <div className="mb-8 relative">
          <div className="skeleton-hand-container">
            {/* Hand Palm/Wrist Base */}
            <div className="hand-base">
              {/* Palm bones structure */}
              <div className="palm-bone palm-1"></div>
              <div className="palm-bone palm-2"></div>
              <div className="palm-bone palm-3"></div>
              <div className="palm-bone palm-4"></div>
              <div className="palm-bone palm-5"></div>
            </div>
            
            {/* Fingers with proper bone segments */}
            <div className="finger-container">
              {/* Index Finger */}
              <div className="finger finger-index">
                <div className="bone-segment proximal"></div>
                <div className="bone-segment middle"></div>
                <div className="bone-segment distal"></div>
                <div className="finger-shadow shadow-index"></div>
              </div>
              
              {/* Middle Finger */}
              <div className="finger finger-middle">
                <div className="bone-segment proximal"></div>
                <div className="bone-segment middle"></div>
                <div className="bone-segment distal"></div>
                <div className="finger-shadow shadow-middle"></div>
              </div>
              
              {/* Ring Finger */}
              <div className="finger finger-ring">
                <div className="bone-segment proximal"></div>
                <div className="bone-segment middle"></div>
                <div className="bone-segment distal"></div>
                <div className="finger-shadow shadow-ring"></div>
              </div>
              
              {/* Pinky Finger */}
              <div className="finger finger-pinky">
                <div className="bone-segment proximal"></div>
                <div className="bone-segment middle"></div>
                <div className="bone-segment distal"></div>
                <div className="finger-shadow shadow-pinky"></div>
              </div>
            </div>
            
            {/* Table Surface */}
            <div className="table-surface"></div>
          </div>
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
