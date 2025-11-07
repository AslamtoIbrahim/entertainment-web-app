import { Search } from "@/shared/components/ui/search";
import { useState } from "react";
import { useSearchDebounce } from "../../hooks/use-debounce";
import { useFavoritesQuery } from "../../hooks/use-favorites";
import FavoriteList from "../ui/favorite-list";

function FavoritesLayout() {
  const [search, setSearch] = useState("");
  const searchDebounce = useSearchDebounce(search);
  const favoritesQuery = useFavoritesQuery(searchDebounce);

  const onSearchangeHandler = (search: string) => {
    setSearch(search.trim());
  };


  return (
    <div className="space-y-6 py-4 lg:py-8">
      {favoritesQuery.data && favoritesQuery.data.pages.length > 0 && (
        <Search value={search} onSearchange={onSearchangeHandler} />
      )}
      <div className="h-screen w-screen overflow-y-auto">
        <FavoriteList query={favoritesQuery} />
      </div>
    </div>
  );
}

export default FavoritesLayout;
