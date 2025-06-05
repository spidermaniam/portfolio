
import React from 'react';

export const SkeletonHandLoader: React.FC<{
  size?: number;
  speed?: number;
  label?: string;
}> = ({ size = 160, speed = 1.4, label = 'Loading' }) => (
  <div
    role="img"
    aria-label={label}
    className="inline-block"
    style={{ width: size, height: size }}
  >
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full drop-shadow-bone"
      style={{ filter: 'blur(0px)' }}
    >
      {/* Forearm - static */}
      <rect
        x="160"
        y="240"
        width="80"
        height="60"
        rx="8"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
      
      {/* Palm base - static */}
      <path
        d="M140 240 L260 240 C270 240 280 230 280 220 L280 180 C280 170 270 160 260 160 L140 160 C130 160 120 170 120 180 L120 220 C120 230 130 240 140 240 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      
      {/* Thumb - static */}
      <g id="thumb">
        <ellipse cx="120" cy="200" rx="15" ry="25" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <ellipse cx="105" cy="185" rx="12" ry="20" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <ellipse cx="95" cy="170" rx="10" ry="15" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </g>

      {/* Index finger - animated */}
      <g
        id="finger-index"
        className="origin-knuckle"
        style={{ 
          transformBox: 'fill-box',
          transformOrigin: 'bottom center',
          animation: `tap ${speed}s linear infinite`,
          animationDelay: '0s'
        }}
      >
        <ellipse cx="155" cy="140" rx="12" ry="25" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <ellipse cx="155" cy="110" rx="10" ry="20" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <ellipse cx="155" cy="85" rx="8" ry="15" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </g>

      {/* Middle finger - animated */}
      <g
        id="finger-middle"
        className="origin-knuckle"
        style={{ 
          transformBox: 'fill-box',
          transformOrigin: 'bottom center',
          animation: `tap ${speed}s linear infinite`,
          animationDelay: `${speed * 0.25}s`
        }}
      >
        <ellipse cx="185" cy="135" rx="12" ry="30" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <ellipse cx="185" cy="100" rx="10" ry="25" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <ellipse cx="185" cy="70" rx="8" ry="18" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </g>

      {/* Ring finger - animated */}
      <g
        id="finger-ring"
        className="origin-knuckle"
        style={{ 
          transformBox: 'fill-box',
          transformOrigin: 'bottom center',
          animation: `tap ${speed}s linear infinite`,
          animationDelay: `${speed * 0.5}s`
        }}
      >
        <ellipse cx="215" cy="140" rx="12" ry="28" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <ellipse cx="215" cy="108" rx="10" ry="22" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <ellipse cx="215" cy="80" rx="8" ry="16" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </g>

      {/* Pinky finger - animated */}
      <g
        id="finger-pinky"
        className="origin-knuckle"
        style={{ 
          transformBox: 'fill-box',
          transformOrigin: 'bottom center',
          animation: `tap ${speed}s linear infinite`,
          animationDelay: `${speed * 0.75}s`
        }}
      >
        <ellipse cx="245" cy="145" rx="10" ry="22" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <ellipse cx="245" cy="118" rx="8" ry="18" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <ellipse cx="245" cy="95" rx="6" ry="13" fill="none" stroke="#ffffff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </g>

      {/* Knuckle joints - static */}
      <circle cx="155" cy="160" r="3" fill="#ffffff" opacity="0.8" />
      <circle cx="185" cy="160" r="3" fill="#ffffff" opacity="0.8" />
      <circle cx="215" cy="160" r="3" fill="#ffffff" opacity="0.8" />
      <circle cx="245" cy="160" r="3" fill="#ffffff" opacity="0.8" />
    </svg>
  </div>
);
