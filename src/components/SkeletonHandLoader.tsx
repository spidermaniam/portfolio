
import React from 'react';

interface SkeletonHandLoaderProps {
  size?: number;
  label?: string;
  progress?: number;
}

export const SkeletonHandLoader: React.FC<SkeletonHandLoaderProps> = ({ 
  size = 220, 
  label = "Loading animation",
  progress = 40
}) => {
  return (
    <div className="flex flex-col items-center space-y-4" style={{ width: `${size}px` }}>
      <img 
        src="https://i.postimg.cc/R0rwLV2n/loading2-2d2e3a.webp" 
        alt={label}
        aria-label={label}
        className="w-full h-auto"
      />
      <div className="w-full h-2 bg-[#2e2e2e] rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#d3d3d3] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
