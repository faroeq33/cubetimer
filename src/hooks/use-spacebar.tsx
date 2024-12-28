import { useCallback, useEffect } from "react";

/**
 * Custom hook that triggers a callback function when the spacebar key is pressed. useful for adding any event after pressing the spacebar.
 *
 * @param {() => void} callback - The function to be called when the spacebar is pressed.
 *
 * @example
 * ```tsx
 * useSpacebar(() => {
 *   console.log("Spacebar pressed!");
 * });
 * ```
 *
 * @returns {void}
 */
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
