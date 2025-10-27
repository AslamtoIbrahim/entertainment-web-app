import { useState } from "react";
import type { Film } from "../../utils/types";
import Rated from "@/shared/components/ui/rated";
import Bookmark from "@/shared/components/ui/bookmark";
import { IMG_URL } from "../../dashboard.service";
import Type from "@/shared/components/ui/type";

function RecommendItme({ film }: { film: Film }) {
  const { name, first_air_date, original_language, poster_path, media_type } =
    film;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const onSetIsBookmarkedClick = () => {
    setIsBookmarked((prv) => !prv);
  };
  return (
    <div className="hlg:w-60 flex w-full flex-col gap-y-2 overflow-clip rounded-lg">
      <div className="flex-1">
        <picture className="relative">
          {/* <div className="dark:bg-popover/35 absolute top-0 left-0 flex  flex-col items-end justify-between rounded-lg p-1.5 md:p-3">
            <Bookmark
              className=""
              isBookmark={isBookmarked}
              onClick={onSetIsBookmarkedClick}
            />
          </div> */}
          <source
            media="(min-width: 768px)"
            srcSet={`${IMG_URL}/w500/${poster_path}`}
            sizes="w500"
          />
          <img
            className="xxs:h-48 xs:h-54 h-42 w-full rounded-lg object-cover xl:h-60"
            src={`${IMG_URL}/w200/${poster_path}`}
          />
        </picture>
      </div>

      <div className="text-foreground/90 font-quick flex flex-2 flex-col gap-x-4 py-2 text-[12px] font-medium">
        <div className="text-foreground/70 flex items-center gap-x-1">
          <p>{first_air_date.slice(0, 4)}</p>
          <span className="bg-foreground/70 size-1 rounded-full" />
          <Type size="size-3" type={media_type} />
          <span className="bg-foreground/70 size-1 rounded-full" />
          <Rated className="bg-transparent" text={original_language} />
        </div>
        <p className="xxs:w-fit w-32 max-w-max truncate text-sm font-semibold text-nowrap capitalize">
          {name}
        </p>
      </div>
    </div>
  );
}

export default RecommendItme;
