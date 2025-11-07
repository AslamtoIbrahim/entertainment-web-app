import Darkmode from "@/features/settings/components/dark-mode";
import Profile from "@/features/settings/components/profile";

function SettingsPopup() {
  const onDivCliclHanler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div
      onClick={onDivCliclHanler}
      className="bg-background absolute bottom-5 left-10 z-20 h-86 w-64 space-y-6 rounded p-8 shadow"
    >
      <Darkmode />
      <Profile />
    </div>
  );
}

export default SettingsPopup;
