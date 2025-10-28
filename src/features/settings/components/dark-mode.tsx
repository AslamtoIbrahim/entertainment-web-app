import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import Switch from "./ui/switch";

function Darkmode() {
  const [isDark, setIsDark] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  const onSwitchHandler = () => {
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.theme = isDark ? "light" : "dark";
    setIsDark((prv) => !prv);
  };

  return (
    <div className="relative flex items-center justify-between">
      <div>
        <Sun
          className={`theme-anime ${isDark ? "invisible scale-0 opacity-10" : "visible scale-100 opacity-100"}`}
        />
        <Moon
          className={`theme-anime ${!isDark ? "invisible scale-0 opacity-10" : "visible scale-100 opacity-100"}`}
        />
      </div>
      <Switch isOn={isDark} onSwitchClick={onSwitchHandler} />
    </div>
  );
}

export default Darkmode;
