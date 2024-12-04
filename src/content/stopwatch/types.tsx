import { HTMLAttributes } from "react";

export type SpaceButtonProps = HTMLAttributes<HTMLButtonElement> & {
  toggleTime: () => void;
};
