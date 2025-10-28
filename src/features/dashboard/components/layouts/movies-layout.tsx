import { Search } from "@/shared/components/ui/search";
import { useState } from "react";
import { useSearchDebounce } from "../../hooks/use-debounce";
import { useSearchQuery } from "../../hooks/use-search";
import FilmList from "../ui/film-list";
import { useMoviesQuery } from "../../hooks/use-movies";

function MoviesLayout() {
  const [search, setSearch] = useState("");
  const searchDebounce = useSearchDebounce(search);
  const searcheQuery = useSearchQuery(searchDebounce);
  const moviesQuery = useMoviesQuery();

  const onSearchangeHandler = (search: string) => {
    setSearch(search.trim());
  };
  return (
    <div className="space-y-6 py-4 lg:py-8">
      <Search value={search} onSearchange={onSearchangeHandler} />
      <div className="h-screen w-screen overflow-y-auto">
        {search.trim() ? (
          <FilmList query={searcheQuery} />
        ) : (
          <FilmList query={moviesQuery} />
        )}
      </div>
    </div>
  );
}

export default MoviesLayout;
