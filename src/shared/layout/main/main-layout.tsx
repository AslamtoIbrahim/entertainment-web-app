import { Search } from "../../components/ui/search";
import TrendLayou from "./trend-layout";

function MainLayout() {
  return (
    <div className="space-y-2 py-4">
      <Search />
      <TrendLayou />
    </div>
  );
}

export default MainLayout;
