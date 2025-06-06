
import React from 'react';

export const SkeletonHandLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-[220px]">
      {/* Anatomically Correct Skeleton Hand SVG */}
      <svg viewBox="0 0 320 280" className="w-[220px] h-auto drop-shadow-bone" xmlns="http://www.w3.org/2000/svg">
        {/* Bone gradient definition for realistic shading */}
        <defs>
          <linearGradient id="boneShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0f0f0" />
            <stop offset="20%" stopColor="#e8e8e8" />
            <stop offset="60%" stopColor="#d8d8d8" />
            <stop offset="100%" stopColor="#c8c8c8" />
          </linearGradient>
          <linearGradient id="palmShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8e8e8" />
            <stop offset="50%" stopColor="#d8d8d8" />
            <stop offset="100%" stopColor="#c8c8c8" />
          </linearGradient>
        </defs>
        
        {/* Palm with secondary motion */}
        <g className="animate-palm" style={{ transformOrigin: '160px 200px' }}>
          
          {/* Index Finger - anatomically correct 3-segment structure */}
          <g id="index-finger">
            {/* Proximal phalanx */}
            <g className="animate-index-proximal bone-segment" style={{ transformOrigin: '100px 115px' }}>
              <path d="M85 115 Q85 112 88 112 L112 112 Q115 112 115 115 L115 155 Q115 158 112 158 L110 158 L110 160 L95 160 L95 158 L88 158 Q85 158 85 155 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
            {/* Middle phalanx */}
            <g className="animate-index-middle bone-segment" style={{ transformOrigin: '102px 162px' }}>
              <path d="M90 162 Q90 160 92 160 L112 160 Q114 160 114 162 L114 195 Q114 198 112 198 L110 198 L110 200 L94 200 L94 198 L92 198 Q90 198 90 195 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
            {/* Distal phalanx */}
            <g className="animate-index-distal bone-segment" style={{ transformOrigin: '102px 202px' }}>
              <path d="M92 202 Q92 200 94 200 L110 200 Q112 200 112 202 L112 230 Q112 235 108 238 Q104 240 100 238 Q96 235 96 230 L96 202 Q96 200 92 202 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
          </g>
          
          {/* Middle Finger - longest finger */}
          <g id="middle-finger">
            {/* Proximal phalanx */}
            <g className="animate-middle-proximal bone-segment" style={{ transformOrigin: '145px 100px' }}>
              <path d="M130 100 Q130 97 133 97 L157 97 Q160 97 160 100 L160 145 Q160 148 157 148 L155 148 L155 150 L135 150 L135 148 L133 148 Q130 148 130 145 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
            {/* Middle phalanx */}
            <g className="animate-middle-middle bone-segment" style={{ transformOrigin: '146px 152px' }}>
              <path d="M133 152 Q133 150 135 150 L157 150 Q159 150 159 152 L159 187 Q159 190 157 190 L155 190 L155 192 L137 192 L137 190 L135 190 Q133 190 133 187 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
            {/* Distal phalanx */}
            <g className="animate-middle-distal bone-segment" style={{ transformOrigin: '146px 194px' }}>
              <path d="M135 194 Q135 192 137 192 L155 192 Q157 192 157 194 L157 225 Q157 230 153 233 Q149 235 145 233 Q141 230 141 225 L141 194 Q141 192 135 194 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
          </g>
          
          {/* Ring Finger */}
          <g id="ring-finger">
            {/* Proximal phalanx */}
            <g className="animate-ring-proximal bone-segment" style={{ transformOrigin: '195px 110px' }}>
              <path d="M180 110 Q180 107 183 107 L207 107 Q210 107 210 110 L210 150 Q210 153 207 153 L205 153 L205 155 L185 155 L185 153 L183 153 Q180 153 180 150 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
            {/* Middle phalanx */}
            <g className="animate-ring-middle bone-segment" style={{ transformOrigin: '196px 157px' }}>
              <path d="M183 157 Q183 155 185 155 L207 155 Q209 155 209 157 L209 192 Q209 195 207 195 L205 195 L205 197 L187 197 L187 195 L185 195 Q183 195 183 192 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
            {/* Distal phalanx */}
            <g className="animate-ring-distal bone-segment" style={{ transformOrigin: '196px 199px' }}>
              <path d="M185 199 Q185 197 187 197 L205 197 Q207 197 207 199 L207 228 Q207 233 203 236 Q199 238 195 236 Q191 233 191 228 L191 199 Q191 197 185 199 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
          </g>
          
          {/* Pinky Finger - smallest finger */}
          <g id="pinky-finger">
            {/* Proximal phalanx */}
            <g className="animate-pinky-proximal bone-segment" style={{ transformOrigin: '245px 125px' }}>
              <path d="M232 125 Q232 122 235 122 L255 122 Q258 122 258 125 L258 162 Q258 165 255 165 L253 165 L253 167 L237 167 L237 165 L235 165 Q232 165 232 162 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
            {/* Middle phalanx */}
            <g className="animate-pinky-middle bone-segment" style={{ transformOrigin: '246px 169px' }}>
              <path d="M235 169 Q235 167 237 167 L255 167 Q257 167 257 169 L257 202 Q257 205 255 205 L253 205 L253 207 L239 207 L239 205 L237 205 Q235 205 235 202 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
            {/* Distal phalanx */}
            <g className="animate-pinky-distal bone-segment" style={{ transformOrigin: '246px 209px' }}>
              <path d="M237 209 Q237 207 239 207 L253 207 Q255 207 255 209 L255 235 Q255 240 251 243 Q247 245 243 243 Q239 240 239 235 L239 209 Q239 207 237 209 Z" 
                    fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            </g>
          </g>
          
          {/* Thumb - 2 segments with subtle response motion */}
          <g id="thumb" className="animate-thumb" style={{ transformOrigin: '65px 190px' }}>
            {/* Proximal phalanx */}
            <path d="M50 175 Q50 172 53 172 L75 172 Q78 172 78 175 L78 202 Q78 205 75 205 L73 205 L73 207 L55 207 L55 205 L53 205 Q50 205 50 202 Z" 
                  fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            {/* Distal phalanx */}
            <path d="M53 209 Q53 207 55 207 L73 207 Q75 207 75 209 L75 232 Q75 237 71 240 Q67 242 63 240 Q59 237 59 232 L59 209 Q59 207 53 209 Z" 
                  fill="url(#boneShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
          </g>
          
          {/* Palm - multi-segment structure with overlapping metacarpals */}
          <g id="palm-bones">
            {/* Main palm structure */}
            <path d="M30 165 Q30 160 35 160 L120 160 Q125 160 125 165 L125 255 Q125 260 120 260 L35 260 Q30 260 30 255 Z" 
                  fill="url(#palmShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
            
            {/* Metacarpal ridges for anatomical detail */}
            <path d="M85 160 Q87 160 87 162 L87 250 Q87 252 85 252 Q83 252 83 250 L83 162 Q83 160 85 160 Z" 
                  fill="#d0d0d0" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.5" />
            <path d="M105 160 Q107 160 107 162 L107 248 Q107 250 105 250 Q103 250 103 248 L103 162 Q103 160 105 160 Z" 
                  fill="#d0d0d0" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.5" />
            
            {/* Wrist connection */}
            <path d="M40 260 Q40 258 42 258 L113 258 Q115 258 115 260 L115 275 Q115 277 113 277 L42 277 Q40 277 40 275 Z" 
                  fill="url(#palmShade)" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.7" />
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
