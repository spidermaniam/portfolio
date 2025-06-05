
import React from 'react';

export const SkeletonHandLoader: React.FC<{
  size?: number;
  speed?: number;
}> = ({ size = 160, speed = 1.4 }) => (
  <div
    aria-label="Loading…"
    role="img"
    className="inline-block"
    style={{ width: size, height: size }}
  >
    <svg
      viewBox="0 0 512 512"
      className="w-full h-full drop-shadow-bone"
      style={{ filter: 'blur(0px)' }}
    >
      {/* Palm base - static */}
      <path
        d="M180 420 C180 420 160 380 160 340 L160 280 C160 260 175 245 195 245 L315 245 C335 245 350 260 350 280 L350 340 C350 380 330 420 330 420 L300 450 L210 450 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      
      {/* Thumb - static */}
      <g id="thumb">
        <path
          d="M160 300 C140 290 120 270 120 240 C120 220 130 200 150 200 C170 200 180 220 180 240"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M150 200 C150 185 155 170 170 170 C185 170 190 185 190 200"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>

      {/* Index finger - animated */}
      <g
        id="finger-index"
        className="finger"
        style={{ 
          transformBox: 'fill-box',
          transformOrigin: 'center bottom',
          animation: `tap ${speed}s linear infinite`,
          animationDelay: '0s'
        }}
      >
        <path
          d="M210 245 L210 180 C210 165 220 150 235 150 C250 150 260 165 260 180 L260 120 C260 105 270 90 285 90 C300 90 310 105 310 120 L310 80 C310 65 320 50 335 50 C350 50 360 65 360 80 L360 100"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* Finger segments */}
        <circle cx="235" cy="165" r="4" fill="#ffffff" opacity="0.7" />
        <circle cx="285" cy="105" r="4" fill="#ffffff" opacity="0.7" />
        <circle cx="335" cy="65" r="4" fill="#ffffff" opacity="0.7" />
      </g>

      {/* Middle finger - animated */}
      <g
        id="finger-middle"
        className="finger"
        style={{ 
          transformBox: 'fill-box',
          transformOrigin: 'center bottom',
          animation: `tap ${speed}s linear infinite`,
          animationDelay: `${speed * 0.25}s`
        }}
      >
        <path
          d="M240 245 L240 170 C240 155 250 140 265 140 C280 140 290 155 290 170 L290 110 C290 95 300 80 315 80 C330 80 340 95 340 110 L340 60 C340 45 350 30 365 30 C380 30 390 45 390 60 L390 80"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="265" cy="155" r="4" fill="#ffffff" opacity="0.7" />
        <circle cx="315" cy="95" r="4" fill="#ffffff" opacity="0.7" />
        <circle cx="365" cy="45" r="4" fill="#ffffff" opacity="0.7" />
      </g>

      {/* Ring finger - animated */}
      <g
        id="finger-ring"
        className="finger"
        style={{ 
          transformBox: 'fill-box',
          transformOrigin: 'center bottom',
          animation: `tap ${speed}s linear infinite`,
          animationDelay: `${speed * 0.5}s`
        }}
      >
        <path
          d="M270 245 L270 180 C270 165 280 150 295 150 C310 150 320 165 320 180 L320 120 C320 105 330 90 345 90 C360 90 370 105 370 120 L370 80 C370 65 380 50 395 50 C410 50 420 65 420 80 L420 100"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="295" cy="165" r="4" fill="#ffffff" opacity="0.7" />
        <circle cx="345" cy="105" r="4" fill="#ffffff" opacity="0.7" />
        <circle cx="395" cy="65" r="4" fill="#ffffff" opacity="0.7" />
      </g>

      {/* Pinky finger - animated */}
      <g
        id="finger-pinky"
        className="finger"
        style={{ 
          transformBox: 'fill-box',
          transformOrigin: 'center bottom',
          animation: `tap ${speed}s linear infinite`,
          animationDelay: `${speed * 0.75}s`
        }}
      >
        <path
          d="M300 245 L300 190 C300 175 310 160 325 160 C340 160 350 175 350 190 L350 140 C350 125 360 110 375 110 C390 110 400 125 400 140 L400 110 C400 95 410 80 425 80 C440 80 450 95 450 110 L450 130"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="325" cy="175" r="4" fill="#ffffff" opacity="0.7" />
        <circle cx="375" cy="125" r="4" fill="#ffffff" opacity="0.7" />
        <circle cx="425" cy="95" r="4" fill="#ffffff" opacity="0.7" />
      </g>
    </svg>
  </div>
);
