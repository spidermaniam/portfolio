
import React from 'react';

export const SkeletonHandLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-[220px]">
      {/* Front-facing Skeleton Hand SVG matching reference image exactly */}
      <svg viewBox="0 0 280 320" className="w-[220px] h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Enhanced bone gradient for depth and realism */}
        <defs>
          <linearGradient id="boneShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8f8f8" />
            <stop offset="30%" stopColor="#e0e0e0" />
            <stop offset="70%" stopColor="#c8c8c8" />
            <stop offset="100%" stopColor="#a8a8a8" />
          </linearGradient>
          <linearGradient id="palmShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0e0e0" />
            <stop offset="50%" stopColor="#c8c8c8" />
            <stop offset="100%" stopColor="#a8a8a8" />
          </linearGradient>
        </defs>
        
        {/* Palm with enhanced motion including compression */}
        <g className="animate-palm" style={{ transformOrigin: '140px 250px' }}>
          
          {/* Index Finger - leftmost, 3 segments pointing upward */}
          <g id="index-finger">
            {/* Distal phalanx (tip) */}
            <g className="animate-index-distal bone-segment" style={{ transformOrigin: '80px 85px' }}>
              <rect x="70" y="60" width="20" height="25" rx="8" ry="8" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
            {/* 2px gap */}
            {/* Middle phalanx */}
            <g className="animate-index-middle bone-segment" style={{ transformOrigin: '80px 115px' }}>
              <rect x="68" y="87" width="24" height="28" rx="8" ry="8" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
            {/* 2px gap */}
            {/* Proximal phalanx */}
            <g className="animate-index-proximal bone-segment" style={{ transformOrigin: '80px 155px' }}>
              <rect x="66" y="117" width="28" height="38" rx="10" ry="10" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
          </g>
          
          {/* Middle Finger - tallest finger */}
          <g id="middle-finger">
            {/* Distal phalanx (tip) */}
            <g className="animate-middle-distal bone-segment" style={{ transformOrigin: '120px 75px' }}>
              <rect x="110" y="45" width="20" height="30" rx="8" ry="8" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
            {/* 2px gap */}
            {/* Middle phalanx */}
            <g className="animate-middle-middle bone-segment" style={{ transformOrigin: '120px 110px' }}>
              <rect x="108" y="77" width="24" height="33" rx="8" ry="8" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
            {/* 2px gap */}
            {/* Proximal phalanx */}
            <g className="animate-middle-proximal bone-segment" style={{ transformOrigin: '120px 155px' }}>
              <rect x="106" y="112" width="28" height="43" rx="10" ry="10" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
          </g>
          
          {/* Ring Finger */}
          <g id="ring-finger">
            {/* Distal phalanx (tip) */}
            <g className="animate-ring-distal bone-segment" style={{ transformOrigin: '160px 85px' }}>
              <rect x="150" y="60" width="20" height="25" rx="8" ry="8" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
            {/* 2px gap */}
            {/* Middle phalanx */}
            <g className="animate-ring-middle bone-segment" style={{ transformOrigin: '160px 115px' }}>
              <rect x="148" y="87" width="24" height="28" rx="8" ry="8" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
            {/* 2px gap */}
            {/* Proximal phalanx */}
            <g className="animate-ring-proximal bone-segment" style={{ transformOrigin: '160px 155px' }}>
              <rect x="146" y="117" width="28" height="38" rx="10" ry="10" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
          </g>
          
          {/* Pinky Finger - smallest */}
          <g id="pinky-finger">
            {/* Distal phalanx (tip) */}
            <g className="animate-pinky-distal bone-segment" style={{ transformOrigin: '200px 95px' }}>
              <rect x="192" y="75" width="16" height="20" rx="6" ry="6" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
            {/* 2px gap */}
            {/* Middle phalanx */}
            <g className="animate-pinky-middle bone-segment" style={{ transformOrigin: '200px 120px' }}>
              <rect x="190" y="97" width="20" height="23" rx="6" ry="6" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
            {/* 2px gap */}
            {/* Proximal phalanx */}
            <g className="animate-pinky-proximal bone-segment" style={{ transformOrigin: '200px 150px' }}>
              <rect x="188" y="122" width="24" height="28" rx="8" ry="8" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            </g>
          </g>
          
          {/* Thumb - on the right side, 2 segments */}
          <g id="thumb" className="animate-thumb" style={{ transformOrigin: '235px 190px' }}>
            {/* Distal phalanx */}
            <rect x="225" y="170" width="20" height="25" rx="8" ry="8" 
                  fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            {/* Proximal phalanx */}
            <rect x="223" y="197" width="24" height="30" rx="8" ry="8" 
                  fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
          </g>
          
          {/* Palm - rounded and segmented */}
          <g id="palm-bones">
            {/* Main palm structure */}
            <rect x="50" y="160" width="170" height="80" rx="25" ry="25" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
            
            {/* Palm segments for detail */}
            <rect x="60" y="170" width="40" height="60" rx="15" ry="15" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.6" vectorEffect="non-scaling-stroke" />
            <rect x="110" y="170" width="40" height="60" rx="15" ry="15" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.6" vectorEffect="non-scaling-stroke" />
            <rect x="160" y="170" width="40" height="60" rx="15" ry="15" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.6" vectorEffect="non-scaling-stroke" />
            
            {/* Wrist connection */}
            <rect x="70" y="240" width="120" height="30" rx="15" ry="15" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1.5" strokeOpacity="0.9" vectorEffect="non-scaling-stroke" />
          </g>
          
        </g>
      </svg>
      
      {/* Progress Bar - positioned closer to hand */}
      <div className="w-full h-2 mt-4 bg-gray-700 rounded overflow-hidden">
        <div className="h-full bg-gray-400 animate-pulse" style={{ width: '40%' }} />
      </div>
    </div>
  );
};
