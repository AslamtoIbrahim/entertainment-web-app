import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Navigator from "./features/dashboard/components/navigation/navigate";
import { useSession } from "./features/auth/hooks/use-session-auth";
import { Spinner } from "./shared/components/ui/spinner";
const App = () => {
  const navigate = useNavigate();
  const { session, pending } = useSession({
    onSuccess: (result) => {
      console.log("welcome mr", result.username);
    },
    onError: () => {
      navigate("/login");
    },
  });

  if (pending) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (session) {
    return (
      <div className="overflow-hidden lg:flex lg:h-screen lg:gap-x-4 lg:p-8">
        <Navigator />
        <Outlet />
      </div>
    );
  }
};

export default App;
