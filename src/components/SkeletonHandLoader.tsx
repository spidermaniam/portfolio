
import React from 'react';

export const SkeletonHandLoader: React.FC<{
  size?: number;
  speed?: number;
  className?: string;
  label?: string;
}> = ({ size = 260, speed = 1.6, className = '', label = 'Loading' }) => (
  <div
    role="img"
    aria-label={label}
    className={`inline-block ${className}`}
    style={{ width: size, height: size }}
  >
    <svg
      viewBox="0 0 480 220"
      className="w-full h-full"
      style={{ filter: 'blur(0px)' }}
    >
      {/* Gradient definition for bone segments */}
      <defs>
        <linearGradient id="boneGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="50%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
      </defs>

      {/* Static palm - large rounded rectangle */}
      <rect
        x="20"
        y="60"
        width="90"
        height="80"
        rx="14"
        className="stroke-gray-800 vector-fixed drop-shadow-bone"
        strokeWidth="6"
        fill="url(#boneGrad)"
      />

      {/* Static thumb - two segments */}
      <rect
        x="110"
        y="80"
        width="70"
        height="38"
        rx="12"
        className="stroke-gray-800 vector-fixed"
        strokeWidth="6"
        fill="url(#boneGrad)"
      />
      <rect
        x="180"
        y="85"
        width="65"
        height="32"
        rx="12"
        className="stroke-gray-800 vector-fixed"
        strokeWidth="6"
        fill="url(#boneGrad)"
      />

      {/* Animated fingers - index, middle, ring, pinky */}
      {[
        { x: 110, y: 25, w: 60, delay: 0, name: 'index' },
        { x: 170, y: 15, w: 60, delay: speed * 0.1875, name: 'middle' },
        { x: 230, y: 25, w: 60, delay: speed * 0.375, name: 'ring' },
        { x: 290, y: 38, w: 55, delay: speed * 0.5625, name: 'pinky' },
      ].map(({ x, y, w, delay, name }, i) => (
        <g
          key={name}
          className="knuckle animate-tap"
          style={{
            animationDuration: `${speed}s`,
            animationDelay: `${delay}s`,
          }}
        >
          {/* Proximal segment (closer to palm) */}
          <rect
            x={x}
            y={y}
            width={w}
            height="45"
            rx="10"
            className="stroke-gray-800 vector-fixed"
            strokeWidth="6"
            fill="url(#boneGrad)"
          />
          {/* Distal segment (fingertip) */}
          <rect
            x={x + w}
            y={y}
            width={w}
            height="45"
            rx="10"
            className="stroke-gray-800 vector-fixed"
            strokeWidth="6"
            fill="url(#boneGrad)"
          />
        </g>
      ))}
    </svg>
  </div>
);
