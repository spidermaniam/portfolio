
import { useState, useEffect } from "react";

export const useExitIntent = (isLoading: boolean) => {
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    const handleMouseLeave = () => {
      // Only trigger if modal hasn't been shown in this session.
      if (!sessionStorage.getItem('exit-intent-shown')) {
        setIsExitModalOpen(true);
        sessionStorage.setItem('exit-intent-shown', 'true');
      }
    };

    // Use `mouseleave` on the document element for better exit detection.
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isLoading]);

  return { isExitModalOpen, setIsExitModalOpen };
};
