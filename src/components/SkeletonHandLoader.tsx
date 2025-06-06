
import React from 'react';

export const SkeletonHandLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-[220px]">
      {/* Anatomically Correct Skeleton Hand SVG */}
      <svg viewBox="0 0 320 280" className="w-[220px] h-auto drop-shadow-bone" xmlns="http://www.w3.org/2000/svg">
        {/* Enhanced bone gradient for depth and realism */}
        <defs>
          <linearGradient id="boneShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5f5f5" />
            <stop offset="30%" stopColor="#e8e8e8" />
            <stop offset="70%" stopColor="#d0d0d0" />
            <stop offset="100%" stopColor="#b8b8b8" />
          </linearGradient>
          <linearGradient id="palmShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8e8e8" />
            <stop offset="50%" stopColor="#d0d0d0" />
            <stop offset="100%" stopColor="#b8b8b8" />
          </linearGradient>
        </defs>
        
        {/* Palm with enhanced motion including compression */}
        <g className="animate-palm" style={{ transformOrigin: '160px 200px' }}>
          
          {/* Index Finger - 3-segment structure with proper joint gaps */}
          <g id="index-finger">
            {/* Proximal phalanx */}
            <g className="animate-index-proximal bone-segment" style={{ transformOrigin: '100px 158px' }}>
              <path d="M85 118 Q85 115 88 115 L112 115 Q115 115 115 118 L115 156 Q115 158 112 158 L88 158 Q85 158 85 156 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
            {/* 2px gap between segments */}
            {/* Middle phalanx */}
            <g className="animate-index-middle bone-segment" style={{ transformOrigin: '100px 192px' }}>
              <path d="M88 160 Q88 160 90 160 L110 160 Q112 160 112 160 L112 190 Q112 192 110 192 L90 192 Q88 192 88 190 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
            {/* 2px gap between segments */}
            {/* Distal phalanx - tapered tip */}
            <g className="animate-index-distal bone-segment" style={{ transformOrigin: '100px 210px' }}>
              <path d="M90 194 Q90 194 92 194 L108 194 Q110 194 110 194 L110 220 Q110 225 105 228 Q100 230 100 230 Q95 228 90 225 L90 194 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
          </g>
          
          {/* Middle Finger - longest finger with enhanced proportions */}
          <g id="middle-finger">
            {/* Proximal phalanx */}
            <g className="animate-middle-proximal bone-segment" style={{ transformOrigin: '145px 148px' }}>
              <path d="M130 105 Q130 102 133 102 L157 102 Q160 102 160 105 L160 146 Q160 148 157 148 L133 148 Q130 148 130 146 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
            {/* Middle phalanx */}
            <g className="animate-middle-middle bone-segment" style={{ transformOrigin: '145px 182px' }}>
              <path d="M133 150 Q133 150 135 150 L155 150 Q157 150 157 150 L157 180 Q157 182 155 182 L135 182 Q133 182 133 180 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
            {/* Distal phalanx - tapered tip */}
            <g className="animate-middle-distal bone-segment" style={{ transformOrigin: '145px 202px" }}>
              <path d="M135 184 Q135 184 137 184 L153 184 Q155 184 155 184 L155 215 Q155 220 150 223 Q145 225 145 225 Q140 223 135 220 L135 184 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
          </g>
          
          {/* Ring Finger - proportional scaling */}
          <g id="ring-finger">
            {/* Proximal phalanx */}
            <g className="animate-ring-proximal bone-segment" style={{ transformOrigin: '195px 155px' }}>
              <path d="M180 112 Q180 109 183 109 L207 109 Q210 109 210 112 L210 153 Q210 155 207 155 L183 155 Q180 155 180 153 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
            {/* Middle phalanx */}
            <g className="animate-ring-middle bone-segment" style={{ transformOrigin: '195px 187px' }}>
              <path d="M183 157 Q183 157 185 157 L205 157 Q207 157 207 157 L207 185 Q207 187 205 187 L185 187 Q183 187 183 185 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
            {/* Distal phalanx - tapered tip */}
            <g className="animate-ring-distal bone-segment" style={{ transformOrigin: '195px 207px' }}>
              <path d="M185 189 Q185 189 187 189 L203 189 Q205 189 205 189 L205 218 Q205 223 200 226 Q195 228 195 228 Q190 226 185 223 L185 189 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
          </g>
          
          {/* Pinky Finger - smallest proportions */}
          <g id="pinky-finger">
            {/* Proximal phalanx */}
            <g className="animate-pinky-proximal bone-segment" style={{ transformOrigin: '245px 162px' }}>
              <path d="M232 125 Q232 122 235 122 L255 122 Q258 122 258 125 L258 160 Q258 162 255 162 L235 162 Q232 162 232 160 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
            {/* Middle phalanx */}
            <g className="animate-pinky-middle bone-segment" style={{ transformOrigin: '245px 190px' }}>
              <path d="M235 164 Q235 164 237 164 L253 164 Q255 164 255 164 L255 188 Q255 190 253 190 L237 190 Q235 190 235 188 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
            {/* Distal phalanx - tapered tip */}
            <g className="animate-pinky-distal bone-segment" style={{ transformOrigin: '245px 210px' }}>
              <path d="M237 192 Q237 192 239 192 L251 192 Q253 192 253 192 L253 220 Q253 225 248 228 Q243 230 243 230 Q238 228 233 225 L237 192 Z" 
                    fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            </g>
          </g>
          
          {/* Thumb - 2 segments with slower response cycle */}
          <g id="thumb" className="animate-thumb" style={{ transformOrigin: '65px 190px' }}>
            {/* Proximal phalanx */}
            <path d="M50 175 Q50 172 53 172 L75 172 Q78 172 78 175 L78 205 Q78 207 75 207 L53 207 Q50 207 50 205 Z" 
                  fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            {/* Distal phalanx - tapered tip */}
            <path d="M53 209 Q53 209 55 209 L73 209 Q75 209 75 209 L75 232 Q75 237 70 240 Q65 242 65 242 Q60 240 55 237 L53 209 Z" 
                  fill="url(#boneShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
          </g>
          
          {/* Palm - multi-segment structure with overlapping metacarpals */}
          <g id="palm-bones">
            {/* Main palm structure with compression capability */}
            <path d="M30 165 Q30 160 35 160 L120 160 Q125 160 125 165 L125 255 Q125 260 120 260 L35 260 Q30 260 30 255 Z" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
            
            {/* Metacarpal ridges for anatomical detail */}
            <path d="M85 160 Q87 160 87 162 L87 250 Q87 252 85 252 Q83 252 83 250 L83 162 Q83 160 85 160 Z" 
                  fill="#c0c0c0" stroke="#2a2a2a" strokeWidth="0.5" strokeOpacity="0.5" />
            <path d="M105 160 Q107 160 107 162 L107 248 Q107 250 105 250 Q103 250 103 248 L103 162 Q103 160 105 160 Z" 
                  fill="#c0c0c0" stroke="#2a2a2a" strokeWidth="0.5" strokeOpacity="0.5" />
            
            {/* Wrist connection */}
            <path d="M40 260 Q40 258 42 258 L113 258 Q115 258 115 260 L115 275 Q115 277 113 277 L42 277 Q40 277 40 275 Z" 
                  fill="url(#palmShade)" stroke="#2a2a2a" strokeWidth="1" strokeOpacity="0.7" />
          </g>
          
        </g>
      </svg>
      
      {/* Progress Bar - positioned closer to hand */}
      <div className="w-full h-2 mt-1 bg-gray-700 rounded overflow-hidden">
        <div className="h-full bg-gray-400 animate-pulse" style={{ width: '40%' }} />
      </div>
    </div>
  );
};
