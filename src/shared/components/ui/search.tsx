import { cn } from "@/shared/lib/utils";
import { SearchIcon } from "lucide-react";
import * as React from "react";
import { Input } from "./input";

function Search({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center px-4", className)}
      {...props}
    >
      <SearchIcon className="text-muted-foreground" />
      <Input
        className="border-0 bg-transparent truncate dark:bg-transparent focus-visible:ring-0 shadow-none"
        type="search"
        placeholder="Search for movies or Tv series"
      />
    </div>
  );
}

export { Search };
