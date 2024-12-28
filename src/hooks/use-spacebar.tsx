import { useCallback, useEffect } from "react";

function useSpacebar(toggleTime: () => void) {
  const handleSpacebar = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Space") {
        console.log("pressed");
      }
      toggleTime();
    },
    [toggleTime]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleSpacebar);
    return () => {
      window.removeEventListener("keydown", handleSpacebar);
    };
  }, [handleSpacebar]);
}

export default useSpacebar;
