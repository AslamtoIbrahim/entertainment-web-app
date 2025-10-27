import { useEffect, useState } from "react";
import TrendItem from "../ui/trend-item";
import type { MoviesDB } from "../../utils/types";
import { fetchTrendingFilms } from "../../dashboard.service";

function TrendLayout() {
  const [moviesDb, setmoviesDb] = useState<MoviesDB | null>(null);
  useEffect(() => {
    (async () => {
      const data = await fetchTrendingFilms();
      if (!data) return;
      setmoviesDb(data);
    })();
  }, []);

  if (!moviesDb) {
    return <p>Sorry</p>;
  }
  return (
    <div className=" ml-4 lg:ml-0 space-y-4">
      <h1 className="text-popover-foreground font-robo font-light text-2xl">Trending</h1>
      <div className="overflow-x-auto scroll-smooth lg:w-screen">
        <section className="flex items-center w-max gap-x-4 lg:gap-x-5 xl:gap-x-6">
          {moviesDb.results.map((f) => (
            <TrendItem key={f.name} film={f} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default TrendLayout;
