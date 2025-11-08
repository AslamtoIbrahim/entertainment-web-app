import { useState } from "react";
import { Search } from "../../../../shared/components/ui/search";
import { useRecommendedQuery } from "../../hooks/recommended-query";
import { useSearchDebounce } from "../../hooks/use-debounce";
import { useSearchQuery } from "../../hooks/use-search";
import FilmList from "../ui/film-list";
import TrendLayout from "./trend-layout";

function MainLayout() {
  const [search, setSearch] = useState("");
  const searchDebounce = useSearchDebounce(search);
  const searches = useSearchQuery(searchDebounce);
  const recommendeds = useRecommendedQuery();

  const onSearchangeHandler = (search: string) => {
    setSearch(search);
  };
  return (
    <div className="space-y-6 py-4 lg:py-8">
      <Search value={search} onSearchange={onSearchangeHandler} />
      {search.trim() ? (
        <div className="h-screen w-screen space-y-4 overflow-x-hidden overflow-y-auto">
          <FilmList query={searches} />
        </div>
      ) : (
        <div className="h-screen w-screen space-y-4 overflow-x-hidden overflow-y-auto">
          <TrendLayout />
          <h1 className="text-popover-foreground px-4 font-robo text-2xl font-light [word-spacing:-8px]">
            Recommended for you
          </h1>
          <FilmList query={recommendeds} />
        </div>
      )}
    </div>
  );
}

export default MainLayout;
