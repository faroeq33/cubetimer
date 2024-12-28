import { useCallback, useEffect } from "react";

function useSpacebar(callback: () => void) {
  const handleSpacebar = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Space") {
        console.info("pressed");
      }
      callback();
    },
    [callback]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleSpacebar);
    return () => {
      window.removeEventListener("keydown", handleSpacebar);
    };
  }, [handleSpacebar]);
}

export default useSpacebar;
