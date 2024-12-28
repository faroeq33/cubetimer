import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomElement(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateScramble(length: number) {
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
