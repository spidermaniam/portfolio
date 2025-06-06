
import React from 'react';

export const SkeletonHandLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-[220px]">
      {/* Skeleton Hand SVG */}
      <svg viewBox="0 0 457 394" className="w-[220px] h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Index Finger */}
        <g id="index" style={{ transformOrigin: '100px 115px', transformBox: 'fill-box' }} className="animate-tap delay-[0s]">
          <rect x="85" y="115" width="30" height="45" rx="5" fill="#ccc" stroke="black" />
          <rect x="87" y="160" width="30" height="40" rx="5" fill="#bbb" stroke="black" />
          <rect x="89" y="200" width="30" height="40" rx="5" fill="#aaa" stroke="black" />
        </g>
        
        {/* Middle Finger */}
        <g id="middle" style={{ transformOrigin: '145px 100px', transformBox: 'fill-box' }} className="animate-tap delay-[0.2s]">
          <rect x="130" y="100" width="30" height="50" rx="5" fill="#ccc" stroke="black" />
          <rect x="132" y="150" width="30" height="40" rx="5" fill="#bbb" stroke="black" />
          <rect x="134" y="190" width="30" height="40" rx="5" fill="#aaa" stroke="black" />
        </g>
        
        {/* Ring Finger */}
        <g id="ring" style={{ transformOrigin: '195px 110px', transformBox: 'fill-box' }} className="animate-tap delay-[0.4s]">
          <rect x="180" y="110" width="30" height="45" rx="5" fill="#ccc" stroke="black" />
          <rect x="182" y="155" width="30" height="40" rx="5" fill="#bbb" stroke="black" />
          <rect x="184" y="195" width="30" height="40" rx="5" fill="#aaa" stroke="black" />
        </g>
        
        {/* Pinky Finger */}
        <g id="pinky" style={{ transformOrigin: '245px 125px', transformBox: 'fill-box' }} className="animate-tap delay-[0.6s]">
          <rect x="230" y="125" width="30" height="45" rx="5" fill="#ccc" stroke="black" />
          <rect x="232" y="170" width="30" height="40" rx="5" fill="#bbb" stroke="black" />
          <rect x="234" y="210" width="30" height="40" rx="5" fill="#aaa" stroke="black" />
        </g>
        
        {/* Static Thumb */}
        <g id="thumb">
          <rect x="50" y="180" width="25" height="35" rx="5" fill="#ccc" stroke="black" />
          <rect x="45" y="215" width="25" height="30" rx="5" fill="#bbb" stroke="black" />
        </g>
        
        {/* Palm */}
        <rect x="20" y="160" width="80" height="120" rx="10" fill="#ddd" stroke="black" strokeWidth="2" />
      </svg>
      
      {/* Progress Bar */}
      <div className="w-full h-2 mt-4 bg-gray-700 rounded overflow-hidden">
        <div className="h-full bg-gray-400 animate-pulse" style={{ width: '40%' }} />
      </div>
    </div>
  );
};
