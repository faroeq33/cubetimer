import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

function Scrambles({
  //   children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-full bg-purple-400", props.className)}>
      scrambles thing
    </div>
  );
}

export default Scrambles;
