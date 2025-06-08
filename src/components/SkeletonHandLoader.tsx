
import React from 'react';

interface SkeletonHandLoaderProps {
  size?: number;
  speed?: number;
  label?: string;
}

export const SkeletonHandLoader: React.FC<SkeletonHandLoaderProps> = ({ 
  size = 220, 
  speed = 1.6,
  label = "Loading animation"
}) => {
  return (
    <div className="flex flex-col items-center relative -mt-6 ml-3" style={{ width: `${size}px` }}>
      {/* Skeleton Hand SVG matching reference frames exactly */}
      <svg 
        viewBox="0 0 280 320" 
        className="w-full h-auto" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label={label}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Enhanced bone gradient for realistic depth */}
        <defs>
          <linearGradient id="boneShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8f8f8" />
            <stop offset="30%" stopColor="#e0e0e0" />
            <stop offset="70%" stopColor="#c8c8c8" />
            <stop offset="100%" stopColor="#a8a8a8" />
          </linearGradient>
          <linearGradient id="palmShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8e8e8" />
            <stop offset="50%" stopColor="#d0d0d0" />
            <stop offset="100%" stopColor="#b8b8b8" />
          </linearGradient>
          <radialGradient id="shadowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>
        
        {/* Ground shadow for realism */}
        <ellipse cx="140" cy="290" rx="80" ry="12" fill="url(#shadowGradient)" opacity="0.4" />
        
        {/* Palm with enhanced motion including compression and weight */}
        <g className="animate-palm bone-segment" style={{ transformOrigin: '140px 240px' }}>
          
          {/* Index Finger - leftmost, 3 segments with natural arc */}
          <g id="index-finger">
            {/* Proximal phalanx (base) */}
            <g className="animate-index-proximal bone-segment" style={{ transformOrigin: '80px 155px' }}>
              <rect x="66" y="117" width="28" height="38" rx="12" ry="12" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                    vectorEffect="non-scaling-stroke" />
              
              {/* Middle phalanx */}
              <g className="animate-index-middle bone-segment" style={{ transformOrigin: '80px 115px' }}>
                <rect x="68" y="82" width="24" height="33" rx="10" ry="10" 
                      fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                      vectorEffect="non-scaling-stroke" />
                
                {/* Distal phalanx (tip) */}
                <g className="animate-index-distal bone-segment" style={{ transformOrigin: '80px 80px' }}>
                  <rect x="70" y="50" width="20" height="30" rx="10" ry="10" 
                        fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                        vectorEffect="non-scaling-stroke" />
                </g>
              </g>
            </g>
          </g>
          
          {/* Middle Finger - tallest finger with proper proportions */}
          <g id="middle-finger">
            {/* Proximal phalanx (base) */}
            <g className="animate-middle-proximal bone-segment" style={{ transformOrigin: '120px 155px' }}>
              <rect x="106" y="112" width="28" height="43" rx="12" ry="12" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                    vectorEffect="non-scaling-stroke" />
              
              {/* Middle phalanx */}
              <g className="animate-middle-middle bone-segment" style={{ transformOrigin: '120px 110px' }}>
                <rect x="108" y="72" width="24" height="38" rx="10" ry="10" 
                      fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                      vectorEffect="non-scaling-stroke" />
                
                {/* Distal phalanx (tip) */}
                <g className="animate-middle-distal bone-segment" style={{ transformOrigin: '120px 70px' }}>
                  <rect x="110" y="35" width="20" height="35" rx="10" ry="10" 
                        fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                        vectorEffect="non-scaling-stroke" />
                </g>
              </g>
            </g>
          </g>
          
          {/* Ring Finger with natural proportions */}
          <g id="ring-finger">
            {/* Proximal phalanx (base) */}
            <g className="animate-ring-proximal bone-segment" style={{ transformOrigin: '160px 155px' }}>
              <rect x="146" y="117" width="28" height="38" rx="12" ry="12" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                    vectorEffect="non-scaling-stroke" />
              
              {/* Middle phalanx */}
              <g className="animate-ring-middle bone-segment" style={{ transformOrigin: '160px 115px' }}>
                <rect x="148" y="82" width="24" height="33" rx="10" ry="10" 
                      fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                      vectorEffect="non-scaling-stroke" />
                
                {/* Distal phalanx (tip) */}
                <g className="animate-ring-distal bone-segment" style={{ transformOrigin: '160px 80px' }}>
                  <rect x="150" y="50" width="20" height="30" rx="10" ry="10" 
                        fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                        vectorEffect="non-scaling-stroke" />
                </g>
              </g>
            </g>
          </g>
          
          {/* Pinky Finger - smallest with proper proportions */}
          <g id="pinky-finger">
            {/* Proximal phalanx (base) */}
            <g className="animate-pinky-proximal bone-segment" style={{ transformOrigin: '200px 145px' }}>
              <rect x="188" y="117" width="24" height="28" rx="10" ry="10" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                    vectorEffect="non-scaling-stroke" />
              
              {/* Middle phalanx */}
              <g className="animate-pinky-middle bone-segment" style={{ transformOrigin: '200px 115px' }}>
                <rect x="190" y="92" width="20" height="23" rx="8" ry="8" 
                      fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                      vectorEffect="non-scaling-stroke" />
                
                {/* Distal phalanx (tip) */}
                <g className="animate-pinky-distal bone-segment" style={{ transformOrigin: '200px 90px' }}>
                  <rect x="192" y="70" width="16" height="20" rx="8" ry="8" 
                        fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                        vectorEffect="non-scaling-stroke" />
                </g>
              </g>
            </g>
          </g>
          
          {/* Thumb - on the right side with subtle twitch animation */}
          <g id="thumb" className="animate-thumb bone-segment" style={{ transformOrigin: '235px 180px' }}>
            {/* Proximal phalanx */}
            <rect x="223" y="187" width="24" height="30" rx="10" ry="10" 
                  fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                  vectorEffect="non-scaling-stroke" />
            {/* Distal phalanx */}
            <rect x="225" y="160" width="20" height="25" rx="10" ry="10" 
                  fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                  vectorEffect="non-scaling-stroke" />
          </g>
          
          {/* Palm - grounded and segmented for realism */}
          <g id="palm-bones">
            {/* Main palm structure - wider for grounding */}
            <rect x="50" y="160" width="170" height="80" rx="25" ry="25" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                  vectorEffect="non-scaling-stroke" />
            
            {/* Palm metacarpal segments for anatomical detail */}
            <rect x="60" y="170" width="40" height="60" rx="15" ry="15" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.6" 
                  vectorEffect="non-scaling-stroke" />
            <rect x="110" y="170" width="40" height="60" rx="15" ry="15" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.6" 
                  vectorEffect="non-scaling-stroke" />
            <rect x="160" y="170" width="40" height="60" rx="15" ry="15" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.6" 
                  vectorEffect="non-scaling-stroke" />
            
            {/* Wrist connection - grounded positioning */}
            <rect x="70" y="240" width="120" height="35" rx="15" ry="15" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" 
                  vectorEffect="non-scaling-stroke" />
          </g>
          
        </g>
      </svg>
      
      {/* Progress Bar - positioned precisely beneath knuckles */}
      <div className="w-full h-2 mt-2 bg-gray-700 rounded overflow-hidden">
        <div className="h-full bg-gray-400 animate-pulse" style={{ width: '40%' }} />
      </div>
    </div>
  );
};
