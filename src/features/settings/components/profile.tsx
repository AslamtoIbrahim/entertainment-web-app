import { User2Icon } from "lucide-react";
import { BiEnvelope } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

function Profile() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4 font-bold">
        <User2Icon />
        <h2>Ibrahim Mustapha</h2>
      </div>
      <div className="flex items-center gap-4">
        <BiEnvelope className="size-5" />
        <div>
          <h4>Email</h4>
          <p className="text-sm">ibrahim@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-red-500">
        <MdLogout className="size-5" />
        <h4>Sign out</h4>
      </div>
    </section>
  );
}

export default Profile;
