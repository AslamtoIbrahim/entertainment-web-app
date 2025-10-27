import { cn } from "@/shared/lib/utils";
import * as React from "react";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi";

function Bookmark({
  isBookmark,
  className,
  ...props
}: React.ComponentProps<"button"> & { isBookmark: boolean }) {
  return (
    <button
      className={cn("bookmark bg-popover/65 rounded-full p-1.5", className)}
      {...props}
    >
      {isBookmark ? (
        <BiSolidBookmark className="size-4" />
      ) : (
        <BiBookmark className="size-4" />
      )}
    </button>
  );
}

export default Bookmark;
