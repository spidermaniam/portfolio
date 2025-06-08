// SkeletonHandLoader.tsx
import React from "react";

interface Props {
  label?: string;
  fullscreen?: boolean;
}

export const SkeletonHandLoader: React.FC<Props> = ({
  label = "Loading…",
  fullscreen = false,
}) => {
  return (
    <div
      role="status"
      aria-label={label}
      className={`flex items-center justify-center ${
        fullscreen ? "fixed inset-0 z-50 backdrop-blur-md" : ""
      }`}
    >
      <img
        src="/images/loading-hand.webp"
        alt={label}
        className="w-full max-w-md h-auto select-none pointer-events-none"
      />
    </div>
  );
};
