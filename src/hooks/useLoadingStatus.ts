
import { useState, useCallback } from "react";

export const useLoadingStatus = () => {
  const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem("hasLoadedBefore"));

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    sessionStorage.setItem("hasLoadedBefore", "true");
  }, []);

  return { isLoading, handleLoadingComplete };
};
