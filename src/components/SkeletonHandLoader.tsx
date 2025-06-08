
import React from 'react';

interface SkeletonHandLoaderProps {
  size?: number;
  label?: string;
}

export const SkeletonHandLoader: React.FC<SkeletonHandLoaderProps> = ({ 
  size = 220, 
  label = "Loading animation"
}) => {
  return (
    <div className="flex flex-col items-center" style={{ width: `${size}px` }}>
      <img 
        src="https://i.postimg.cc/R0rwLV2n/loading2-2d2e3a.webp" 
        alt={label}
        aria-label={label}
        className="w-full h-auto"
      />
      <div className="w-full h-2 mt-2 bg-gray-700 rounded overflow-hidden">
        <div className="h-full bg-gray-400 animate-pulse" style={{ width: '40%' }} />
      </div>
    </div>
  );
};
