import { useEffect, useState } from "react";
import { fetchFilms } from "../../dashboard.service";
import type { MoviesDB } from "../../utils/types";
import RecommendItme from "../ui/recommend-itme";

function RecommendLayout() {
  const [moviesDb, setmoviesDb] = useState<MoviesDB | null>(null);
  useEffect(() => {
    (async () => {
      const data = await fetchFilms();
      if (!data) return;
      setmoviesDb(data);
    })();
  }, []);

  if (!moviesDb) {
    return <p>Sorry</p>;
  }
  return (
    <div className="space-y-4 px-4 lg:w-[88%] xl:w-11/12">
      <h1 className="text-popover-foreground font-robo text-2xl font-light [word-spacing:-8px]">
        Recommended for you
      </h1>
      <section className="grid grid-cols-2 gap-1.5 md:grid-cols-3 md:gap-3 xl:grid-cols-4
         xl:gap-x-6 overflow-x-hidden">
        {moviesDb.results.map((f) => (
          <RecommendItme key={f.name} film={f} />
        ))}
      </section>
    </div>
  );
}

export default RecommendLayout;
