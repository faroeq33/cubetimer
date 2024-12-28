"use client";
import { useState } from "react";
import { cn, generateScramble } from "@/lib/utils";
import { HTMLAttributes } from "react";
import useSpacebar from "../../hooks/use-spacebar";

/*
- should show a different scramble when pressing spacebar
  - should be 25 moves long
  - should be a random scramble
  - should be a valid scramble
  - should be a valid scramble for the current cube

  arguments:
    - current scramble
    - current cube
    - current scramble length
    - current scramble type
*/
function Scrambles({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const [scramble, setScramble] = useState(
    "D U2 B L2 U2 D' L' U2 D' B2 L' D' L' B' D' F' B U R' F R' F2 B2 D' F'"
  );

  useSpacebar(() => {
    setScramble(generateScramble(25));
  });

  return (
    <div className={cn("w-full bg-purple-400", props.className)}>
      {scramble}
    </div>
  );
}

export default Scrambles;
