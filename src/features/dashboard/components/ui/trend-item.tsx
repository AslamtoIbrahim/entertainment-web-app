import Bookmark from "@/shared/components/ui/bookmark";
import Rated from "@/shared/components/ui/rated";
import Type from "@/shared/components/ui/type";
import { useEffect, useState } from "react";
import { IMG_URL } from "../../dashboard.service";
import type { Film } from "../../utils/types";
import {
  useAddFavorite,
  useGetFavoriteByTitle,
  useRemoveFavorite,
} from "../../hooks/use-favorites";

function TrendItem({ film }: { film: Film }) {
  const { original_language, poster_path, media_type } = film;
  const title = film.title ?? film.name ?? "No Title";
  const date = film.first_air_date ?? film.release_date ?? "";
  const { data } = useGetFavoriteByTitle(title);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const addFav = useAddFavorite();
  const removeFav = useRemoveFavorite();

  useEffect(() => {
    setIsBookmarked(data?.title === title);
  }, [data, title]);

  const onSetIsBookmarkedClick = () => {
    const newBook = !isBookmarked;

    setIsBookmarked(newBook);
    console.log("data", data);
    if (newBook) {
      addFav.mutate({
        title,
        date,
        language: original_language,
        path: poster_path,
        type: media_type,
      });
    } else {
      if (data) removeFav.mutate(data.id);
    }
  };

  return (
    <div className="xs:w-64 relative h-40 w-60 overflow-clip rounded-lg md:h-44 md:w-86 lg:h-52 xl:h-50 xl:w-md">
      <div className="dark:bg-popover/35 absolute top-0 left-0 flex h-full w-full flex-col items-end justify-between p-4 md:p-5">
        <Bookmark isBookmark={isBookmarked} onClick={onSetIsBookmarkedClick} />
        <div className="font-quick flex w-full items-center justify-between gap-x-4 text-sm font-medium">
          <div>
            <div className="text-muted/80 flex items-center gap-x-2">
              <p>{date.slice(0, 4)}</p>
              <span className="bg-muted/80 size-1 rounded-full" />
              <Type type={media_type} />
            </div>
            <p className="text-muted xs:w-44 w-40 truncate text-base font-semibold text-nowrap capitalize md:w-60">
              {title}
            </p>
          </div>
          <Rated text={original_language} />
        </div>
      </div>
      <picture className="rounded-md">
        <source
          media="(min-width: 1024px)"
          srcSet={`${IMG_URL}/w500/${poster_path}`}
          sizes="w500"
        />
        <img
          className="object-scale-down"
          src={`${IMG_URL}/w500/${poster_path}`}
        />
      </picture>
    </div>
  );
}

export default TrendItem;
