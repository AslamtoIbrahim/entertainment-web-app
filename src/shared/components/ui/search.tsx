import { cn } from "@/shared/lib/utils";
import { SearchIcon } from "lucide-react";
import * as React from "react";
import { Input } from "./input";

function Search({
  value,
  onSearchange,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  value: string;
  onSearchange: (search: string) => void;
}) {
  return (
    <div className={cn("flex items-center px-4", className)} {...props}>
      <SearchIcon className="text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => onSearchange(e.currentTarget.value)}
        className="truncate border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent"
        type="search"
        placeholder="Search for movies or Tv series"
      />
    </div>
  );
}

export { Search };
