import { Search } from "../../../../shared/components/ui/search";
import RecommendLayout from "./recommend-layout";
import TrendLayout from "./trend-layout";

function MainLayout() {
  return (
    <div className="space-y-6 py-4 lg:py-8">
      <Search />
      <div className="h-screen w-screen space-y-4 overflow-y-auto overflow-x-hidden">
        <TrendLayout />
        <RecommendLayout />
      </div>
    </div>
  );
}

export default MainLayout;
