import { useCallback, useEffect } from "react";
import { SpaceButtonProps } from "./stopwatch/types";

export const SpaceButton = ({
  children,
  toggleTime,
  ...props
}: SpaceButtonProps) => {
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
  return <button {...props}>{children}</button>;
};
