import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { Tv } from "lucide-react";
import { BiSolidBookmark, BiSolidFilm, BiSolidGridAlt } from "react-icons/bi";
import { MdMovieCreation } from "react-icons/md";

function HeaderSidebar() {
  return (
    <div className="bg-card margin-x flex items-center justify-between py-4 md:my-6 md:rounded-md md:px-8">
      <MdMovieCreation className="text-primary size-8" />

      <div className="flex items-center gap-x-4 md:gap-x-12">
        <BiSolidGridAlt className="header-icons" />
        <BiSolidFilm className="header-icons" />
        <Tv className="header-icons" />
        <BiSolidBookmark className="header-icons" />
      </div>

      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default HeaderSidebar;
