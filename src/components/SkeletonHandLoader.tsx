
import React from 'react';

export const SkeletonHandLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-[220px]">
      {/* Skeleton Hand SVG with multi-segment fingers */}
      <svg viewBox="0 0 260 300" className="w-[220px] h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Bone gradient definition */}
        <defs>
          <linearGradient id="boneShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dadada" />
            <stop offset="50%" stopColor="#c8c8c8" />
            <stop offset="100%" stopColor="#bcbcbc" />
          </linearGradient>
        </defs>
        
        {/* Palm with secondary motion */}
        <g className="animate-palm">
          
          {/* Index Finger - 3 segments */}
          <g id="index">
            <g id="index-prox" style={{ transformOrigin: '100px 115px', transformBox: 'fill-box' }} 
               className="animate-index-prox">
              <path d="M85 115 L115 115 Q118 115 118 118 L118 157 Q118 160 115 160 L85 160 Q82 160 82 157 L82 118 Q82 115 85 115 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
            <g id="index-mid" style={{ transformOrigin: '101px 162px', transformBox: 'fill-box' }} 
               className="animate-index-mid">
              <path d="M87 162 L115 162 Q117 162 117 164 L117 197 Q117 200 115 200 L87 200 Q85 200 85 197 L85 164 Q85 162 87 162 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
            <g id="index-dist" style={{ transformOrigin: '103px 202px', transformBox: 'fill-box' }} 
               className="animate-index-dist">
              <path d="M89 202 L117 202 Q119 202 119 204 L119 235 Q119 240 115 240 L93 240 Q89 240 89 235 L89 204 Q89 202 89 202 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
          </g>
          
          {/* Middle Finger - 3 segments */}
          <g id="middle">
            <g id="middle-prox" style={{ transformOrigin: '145px 100px', transformBox: 'fill-box' }} 
               className="animate-middle-prox">
              <path d="M130 100 L160 100 Q163 100 163 103 L163 147 Q163 150 160 150 L130 150 Q127 150 127 147 L127 103 Q127 100 130 100 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
            <g id="middle-mid" style={{ transformOrigin: '146px 152px', transformBox: 'fill-box' }} 
               className="animate-middle-mid">
              <path d="M132 152 L160 152 Q162 152 162 154 L162 187 Q162 190 160 190 L132 190 Q130 190 130 187 L130 154 Q130 152 132 152 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
            <g id="middle-dist" style={{ transformOrigin: '148px 192px', transformBox: 'fill-box' }} 
               className="animate-middle-dist">
              <path d="M134 192 L162 192 Q164 192 164 194 L164 227 Q164 232 160 232 L138 232 Q134 232 134 227 L134 194 Q134 192 134 192 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
          </g>
          
          {/* Ring Finger - 3 segments */}
          <g id="ring">
            <g id="ring-prox" style={{ transformOrigin: '195px 110px', transformBox: 'fill-box' }} 
               className="animate-ring-prox">
              <path d="M180 110 L210 110 Q213 110 213 113 L213 152 Q213 155 210 155 L180 155 Q177 155 177 152 L177 113 Q177 110 180 110 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
            <g id="ring-mid" style={{ transformOrigin: '196px 157px', transformBox: 'fill-box' }} 
               className="animate-ring-mid">
              <path d="M182 157 L210 157 Q212 157 212 159 L212 192 Q212 195 210 195 L182 195 Q180 195 180 192 L180 159 Q180 157 182 157 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
            <g id="ring-dist" style={{ transformOrigin: '198px 197px', transformBox: 'fill-box' }} 
               className="animate-ring-dist">
              <path d="M184 197 L212 197 Q214 197 214 199 L214 230 Q214 235 210 235 L188 235 Q184 235 184 230 L184 199 Q184 197 184 197 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
          </g>
          
          {/* Pinky Finger - 3 segments */}
          <g id="pinky">
            <g id="pinky-prox" style={{ transformOrigin: '245px 125px', transformBox: 'fill-box' }} 
               className="animate-pinky-prox">
              <path d="M230 125 L260 125 Q262 125 262 128 L262 167 Q262 170 260 170 L230 170 Q228 170 228 167 L228 128 Q228 125 230 125 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
            <g id="pinky-mid" style={{ transformOrigin: '246px 172px', transformBox: 'fill-box' }} 
               className="animate-pinky-mid">
              <path d="M232 172 L260 172 Q262 172 262 174 L262 207 Q262 210 260 210 L232 210 Q230 210 230 207 L230 174 Q230 172 232 172 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
            <g id="pinky-dist" style={{ transformOrigin: '248px 212px', transformBox: 'fill-box' }} 
               className="animate-pinky-dist">
              <path d="M234 212 L262 212 Q264 212 264 214 L264 245 Q264 250 260 250 L238 250 Q234 250 234 245 L234 214 Q234 212 234 212 Z" 
                    fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            </g>
          </g>
          
          {/* Static Thumb - 2 segments */}
          <g id="thumb">
            <path d="M50 180 L75 180 Q77 180 77 182 L77 212 Q77 215 75 215 L50 215 Q47 215 47 212 L47 182 Q47 180 50 180 Z" 
                  fill="url(#boneShade)" stroke="black" strokeWidth="1" />
            <path d="M45 217 L70 217 Q72 217 72 219 L72 244 Q72 247 70 247 L45 247 Q42 247 42 244 L42 219 Q42 217 45 217 Z" 
                  fill="url(#boneShade)" stroke="black" strokeWidth="1" />
          </g>
          
          {/* Palm - overlapping segments */}
          <path d="M20 160 L100 160 Q110 160 110 170 L110 270 Q110 280 100 280 L30 280 Q20 280 20 270 L20 170 Q20 160 20 160 Z" 
                fill="url(#boneShade)" stroke="black" strokeWidth="1" />
          
        </g>
      </svg>
      
      {/* Progress Bar - moved closer */}
      <div className="w-full h-2 mt-1 bg-gray-700 rounded overflow-hidden">
        <div className="h-full bg-gray-400 animate-pulse" style={{ width: '40%' }} />
      </div>
    </div>
  );
};
