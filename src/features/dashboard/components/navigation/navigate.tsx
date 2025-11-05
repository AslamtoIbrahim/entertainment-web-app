import { useSession } from "@/features/auth/hooks/use-session-auth";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { twofl } from "@/shared/lib/utils";
import { Tv } from "lucide-react";
import { BiSolidBookmark, BiSolidFilm, BiSolidGridAlt } from "react-icons/bi";
import { MdMovieCreation } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

function Navigator() {
  // const URL_IMG = "https://github.com/shadcn.png";
  const navigate = useNavigate();
  const { session } = useSession({
    onSuccess: (result) => {
      console.log("welcome mr", result.username);
    },
    onError: () => {
      navigate("/login");
    },
  });

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
            <AvatarImage src={session?.image || undefined} />
            <AvatarFallback className="bg-primary text-black">
              {twofl(session?.username || "User name")}
            </AvatarFallback>
          </Avatar>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigator;
