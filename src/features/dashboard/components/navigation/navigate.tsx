import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { Tv } from "lucide-react";
import { BiSolidBookmark, BiSolidFilm, BiSolidGridAlt } from "react-icons/bi";
import { MdMovieCreation } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navigator() {
  return (
    <div className="bg-card flex items-center justify-between p-4 md:m-6 md:rounded-md lg:m-0 lg:flex-col lg:justify-start lg:gap-14">
      <MdMovieCreation className="text-primary size-8" />

      <div className="flex items-center gap-x-4 md:gap-x-12 lg:flex-1 lg:flex-col lg:gap-6">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-foreground" : "nav-icons"
          }
        >
          <BiSolidGridAlt className="size-6" />
        </NavLink>
        <NavLink
          to={"/movies"}
          className={({ isActive }) =>
            isActive ? "text-foreground" : "nav-icons"
          }
        >
          <BiSolidFilm className="size-6" />
        </NavLink>
        <NavLink
          to={"/tvseries"}
          className={({ isActive }) =>
            isActive ? "text-foreground" : "nav-icons"
          }
        >
          <Tv className="size-6" />
        </NavLink>
        <NavLink
          to={"/saves"}
          className={({ isActive }) =>
            isActive ? "text-foreground" : "nav-icons"
          }
        >
          <BiSolidBookmark className="size-6" />
        </NavLink>
      </div>

      <div className="nav-icons">
        <NavLink to={"/settings"}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigator;
