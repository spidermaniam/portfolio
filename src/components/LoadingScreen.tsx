
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
            <rect x="80" y="80" width="40" height="30" rx="5" fill="#eae3d0" className="animate-pulse" />
            
            {/* Fingers */}
            <rect x="70" y="60" width="8" height="25" rx="4" fill="#eae3d0" className="skeleton-finger finger-1" />
            <rect x="82" y="50" width="8" height="35" rx="4" fill="#eae3d0" className="skeleton-finger finger-2" />
            <rect x="94" y="48" width="8" height="37" rx="4" fill="#eae3d0" className="skeleton-finger finger-3" />
            <rect x="106" y="52" width="8" height="33" rx="4" fill="#eae3d0" className="skeleton-finger finger-4" />
            <rect x="118" y="62" width="8" height="23" rx="4" fill="#eae3d0" className="skeleton-finger finger-5" />
            
            {/* Thumb */}
            <rect x="65" y="75" width="12" height="20" rx="6" fill="#eae3d0" className="skeleton-finger finger-thumb" />
            
            {/* Surface line */}
            <line x1="0" y1="110" x2="200" y2="110" stroke="#3b3b3b" strokeWidth="3" />
            
            {/* Finger shadows */}
            <ellipse cx="74" cy="110" rx="4" ry="2" fill="#2f2f2f" opacity="0.3" className="finger-shadow shadow-1" />
            <ellipse cx="86" cy="110" rx="4" ry="2" fill="#2f2f2f" opacity="0.3" className="finger-shadow shadow-2" />
            <ellipse cx="98" cy="110" rx="4" ry="2" fill="#2f2f2f" opacity="0.3" className="finger-shadow shadow-3" />
            <ellipse cx="110" cy="110" rx="4" ry="2" fill="#2f2f2f" opacity="0.3" className="finger-shadow shadow-4" />
            <ellipse cx="122" cy="110" rx="4" ry="2" fill="#2f2f2f" opacity="0.3" className="finger-shadow shadow-5" />
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
