
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
          <div className="skeleton-hand-container">
            <svg
              className="skeleton-hand-svg"
              viewBox="0 0 1280 720"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Wrist and Palm Base */}
              <g id="wrist" className="wrist-group">
                <g id="palm" className="palm-group">
                  {/* Palm structure */}
                  <ellipse cx="640" cy="500" rx="180" ry="100" fill="url(#boneGradient)" className="palm-base"/>
                  
                  {/* Index Finger - The animated one */}
                  <g id="index-finger" className="index-finger-group">
                    {/* Metacarpal */}
                    <g className="metacarpal-index">
                      <rect x="580" y="450" width="20" height="125" rx="10" fill="url(#boneGradient)" className="bone-segment"/>
                    </g>
                    
                    {/* Proximal Phalanx */}
                    <g className="proximal-index" style={{ transformOrigin: '590px 450px' }}>
                      <rect x="580" y="334" width="20" height="116" rx="10" fill="url(#boneGradient)" className="bone-segment"/>
                    </g>
                    
                    {/* Middle Phalanx */}
                    <g className="middle-index" style={{ transformOrigin: '590px 334px' }}>
                      <rect x="580" y="241" width="18" height="93" rx="9" fill="url(#boneGradient)" className="bone-segment"/>
                    </g>
                    
                    {/* Distal Phalanx */}
                    <g className="distal-index" style={{ transformOrigin: '589px 241px' }}>
                      <rect x="581" y="163" width="16" height="78" rx="8" fill="url(#boneGradient)" className="bone-segment"/>
                      <ellipse cx="589" cy="155" rx="10" ry="8" fill="url(#boneGradient)" className="fingertip"/>
                    </g>
                  </g>
                  
                  {/* Static Fingers */}
                  {/* Middle Finger */}
                  <g id="middle-finger">
                    <rect x="640" y="430" width="20" height="125" rx="10" fill="url(#boneGradient)"/>
                    <rect x="640" y="305" width="20" height="125" rx="10" fill="url(#boneGradient)"/>
                    <rect x="641" y="212" width="18" height="93" rx="9" fill="url(#boneGradient)"/>
                    <rect x="642" y="134" width="16" height="78" rx="8" fill="url(#boneGradient)"/>
                    <ellipse cx="650" cy="126" rx="10" ry="8" fill="url(#boneGradient)"/>
                  </g>
                  
                  {/* Ring Finger */}
                  <g id="ring-finger">
                    <rect x="700" y="440" width="20" height="125" rx="10" fill="url(#boneGradient)"/>
                    <rect x="700" y="320" width="20" height="120" rx="10" fill="url(#boneGradient)"/>
                    <rect x="701" y="232" width="18" height="88" rx="9" fill="url(#boneGradient)"/>
                    <rect x="702" y="159" width="16" height="73" rx="8" fill="url(#boneGradient)"/>
                    <ellipse cx="710" cy="151" rx="10" ry="8" fill="url(#boneGradient)"/>
                  </g>
                  
                  {/* Pinky Finger */}
                  <g id="pinky-finger">
                    <rect x="750" y="460" width="18" height="110" rx="9" fill="url(#boneGradient)"/>
                    <rect x="750" y="350" width="18" height="110" rx="9" fill="url(#boneGradient)"/>
                    <rect x="751" y="272" width="16" height="78" rx="8" fill="url(#boneGradient)"/>
                    <rect x="752" y="209" width="14" height="63" rx="7" fill="url(#boneGradient)"/>
                    <ellipse cx="759" cy="201" rx="8" ry="6" fill="url(#boneGradient)"/>
                  </g>
                </g>
              </g>
              
              {/* Table Surface */}
              <rect x="0" y="680" width="1280" height="40" fill="url(#tableGradient)" className="table-surface"/>
              
              {/* Dynamic Shadow under index finger */}
              <ellipse cx="589" cy="680" rx="25" ry="8" fill="rgba(0,0,0,0.4)" className="finger-shadow"/>
              
              {/* Gradients */}
              <defs>
                <radialGradient id="boneGradient" cx="0.3" cy="0.3">
                  <stop offset="0%" stopColor="#f8f8f8"/>
                  <stop offset="70%" stopColor="#eae3d0"/>
                  <stop offset="100%" stopColor="#d4ccb8"/>
                </radialGradient>
                
                <linearGradient id="tableGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b3b3b"/>
                  <stop offset="100%" stopColor="#2f2f2f"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Loading text */}
        <h1 className="text-4xl font-bold mb-4 font-mono tracking-wider text-foreground">LOADING</h1>
        
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
