import "./App.css";
import MainLayout from "./features/dashboard/components/layouts/main-layout";
import Navigator from "./features/dashboard/components/navigation/navigate";
const App = () => {
  return (
    <div className="lg:flex lg:gap-x-4 lg:p-8 lg:h-screen overflow-hidden ">
      <Navigator />
      <MainLayout />
    </div>
  );
};

export default App;
