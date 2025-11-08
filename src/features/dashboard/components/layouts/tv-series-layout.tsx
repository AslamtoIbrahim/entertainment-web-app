import { useState } from "react";
import { useSearchDebounce } from "../../hooks/use-debounce";
import { useSearchQuery } from "../../hooks/use-search";
import { useTvSeriesQuery } from "../../hooks/use-tvseries";
import { Search } from "@/shared/components/ui/search";
import FilmList from "../ui/film-list";

function TvseriesLayout() {
  const [search, setSearch] = useState("");
  const searchDebounce = useSearchDebounce(search);
  const searcheQuery = useSearchQuery(searchDebounce);
  const tvseriesQuery = useTvSeriesQuery();

  const onSearchangeHandler = (search: string) => {
    setSearch(search);
  };
  
  return (
    <div className="space-y-6 py-4 lg:py-8">
      <Search value={search} onSearchange={onSearchangeHandler} />
      <div className="h-screen w-screen overflow-y-auto">
        {search.trim() ? (
          <FilmList query={searcheQuery} />
        ) : (
          <FilmList query={tvseriesQuery} />
        )}
      </div>
    </div>
  );
}

export default TvseriesLayout;
