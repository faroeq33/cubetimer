"use client";
import { getRandomElement } from "../lib/utils";

function useGenerateScramble(length: number) {
  const moves = ["U", "D", "L", "R", "F", "B"];
  const modifiers = ["", "'", "2"];
  const scramble = [];
  let lastMove = "";

  for (let i = 0; i < length; i++) {
    let move = getRandomElement(moves);

    // Ensure no consecutive moves are the same
    while (move === lastMove) {
      move = getRandomElement(moves);
    }

    lastMove = move;
    scramble.push(move + getRandomElement(modifiers));
  }

  return scramble.join(" ");
}

export default useGenerateScramble;
