
import { useState, useEffect } from "react";
import { SkeletonHandLoader } from "./SkeletonHandLoader";

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
        <div className="mb-8 flex justify-center">
          <SkeletonHandLoader size={200} speed={1.4} />
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
