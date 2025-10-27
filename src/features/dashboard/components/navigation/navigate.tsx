import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { Tv } from "lucide-react";
import { BiSolidBookmark, BiSolidFilm, BiSolidGridAlt } from "react-icons/bi";
import { MdMovieCreation } from "react-icons/md";

function Navigator() {
  return (
    <div className="bg-card flex items-center justify-between md:m-6 lg:m-0 p-4 md:rounded-md lg:flex-col lg:justify-start lg:gap-14">
      <MdMovieCreation className="text-primary size-8" />
 
      <div className="flex items-center gap-x-4 md:gap-x-12 lg:flex-1 lg:flex-col lg:gap-6">
        <BiSolidGridAlt className="header-icons" />
        <BiSolidFilm className="header-icons" />
        <Tv className="header-icons" />
        <BiSolidBookmark className="header-icons" />
      </div>

      <div className="">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Navigator;
