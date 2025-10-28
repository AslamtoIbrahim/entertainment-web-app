import Darkmode from "@/features/settings/components/dark-mode";
import Profile from "@/features/settings/components/profile";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

function SettingsPage() {
  return (
    <div className="font-robo space-y-8 p-4 md:p-8">
      <section className="flex items-center gap-4">
        <NavLink to={"/"}>
          <ArrowLeft className="nav-icons" />
        </NavLink>
        <h1>Settings</h1>
      </section>
      <Profile />
      <Darkmode />
    </div>
  );
}

export default SettingsPage;
