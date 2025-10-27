import { cn } from "@/shared/lib/utils";
import { Tv } from "lucide-react";
import * as React from "react";
import { BiSolidFilm } from "react-icons/bi";

function Type({
  size,
  type,
  className,
}: React.ComponentProps<"div"> & { type: string; size?: string }) {
  return (
    <div className={cn("flex items-center gap-x-1", className)}>
      {type.includes("tv") ? (
        <Tv className={cn("size-4", size)} />
      ) : (
        <BiSolidFilm className={cn("size-4", size)} />
      )}
      <p className="mt-0.5 capitalize">{type}</p>
    </div>
  );
}

export default Type;
