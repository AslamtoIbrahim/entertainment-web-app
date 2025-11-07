import { useLogout } from "@/features/auth/hooks/use-log-out";
import { useSession } from "@/features/auth/hooks/use-session-auth";
import { Spinner } from "@/shared/components/ui/spinner";
import { twofl } from "@/shared/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { BiEnvelope } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { signout, error, pending } = useLogout();
  const { session } = useSession({
    onError: () => {
      navigate("/login");
    },
  });
  const navigate = useNavigate();

  const onLogOutClickHandler = async () => {
    const message = await signout();
    if (message) {
      navigate("/login");
    }
  };

  if (pending) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (session) {
    return (
      <section className="space-y-4">
        <div className="flex items-center gap-4 lg:gap-2 font-bold">
          <Avatar>
            <AvatarImage
              className="size-6 overflow-clip rounded-full"
              src={session.image || undefined}
            />
            <AvatarFallback className="bg-primary rounded-full p-1 font-medium text-black lg:px-1.5 lg:py-2 lg:text-sm lg:-ml-1">
              {twofl(session.username || "User name")}
            </AvatarFallback>
          </Avatar>
          {/* <User2Icon /> */}

          <h2>{session.username}</h2>
        </div>
        <div className="flex items-center gap-4">
          <BiEnvelope className="size-5" />
          <div>
            <h4>Email</h4>
            <p className="text-sm">{session.email}</p>
          </div>
        </div>
        <div onClick={onLogOutClickHandler} className="">
          <button className="hover:text-chart-2 flex cursor-pointer items-center gap-4 text-red-500">
            <MdLogout className="size-5" />
            <h4>Sign out</h4>
            {pending && <Spinner />}
            {error instanceof Error && <p>{error?.message}</p>}
          </button>
        </div>
      </section>
    );
  }
}

export default Profile;
