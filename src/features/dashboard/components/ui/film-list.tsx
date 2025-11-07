import { Spinner } from "@/shared/components/ui/spinner";
import type {
  InfiniteData,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { InView } from "react-intersection-observer";
import type { Films } from "../../utils/types";
import FilmItem from "./film-itme";

type QueryLayoutProp = {
  query: UseInfiniteQueryResult<InfiniteData<Films, unknown>, Error>;
};
function FilmList({ query }: QueryLayoutProp) {
  const { data, error, status, hasNextPage, fetchNextPage } = query;

  const onChangeHandler = (inView: boolean) => {
    if (inView) {
      fetchNextPage();
    }
  };
  return (
    <div className="space-y-4 px-4 lg:w-[88%] xl:w-11/12">
      {status === "error" && (
        <div className="flex items-center justify-center">
          <p className="text-red-500">{error.message}</p>
        </div>
      )}
      {status === "pending" && (
        <div className="flex h-96 items-center justify-center">
          <Spinner />
        </div>
      )}
      {status === "success" && (
        <div>
          <section className="grid grid-cols-2 gap-1.5 overflow-x-hidden md:grid-cols-3 md:gap-3 xl:grid-cols-4 xl:gap-x-6">
            {data?.pages.map((p) =>
              p.results.map((f) => (
                <FilmItem key={f.title || f.name} film={f} />
              )),
            )}
          </section>
          {hasNextPage && (
            <InView
              className="flex items-center justify-center py-4 lg:pb-32"
              onChange={onChangeHandler}
            >
              <Spinner />
            </InView>
          )}
        </div>
      )}
    </div>
  );
}

export default FilmList;
