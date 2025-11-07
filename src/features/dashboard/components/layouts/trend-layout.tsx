import { Spinner } from "@/shared/components/ui/spinner";
import { InView } from "react-intersection-observer";
import { useTrendingQuery } from "../../hooks/trending-query";
import TrendItem from "../ui/trend-item";

function TrendLayout() {
  const { data, error, status, hasNextPage, fetchNextPage } =
    useTrendingQuery();
  const onChangeHandler = (inView: boolean) => {
    if (inView) {
      fetchNextPage();
    }
  };
  return (
    <div className="ml-4 space-y-4 lg:ml-0">
      <h1 className="text-popover-foreground font-robo text-2xl font-light">
        Trending
      </h1>
      {status === "error" && (
        <div className="flex h-40 items-center justify-center md:h-44 lg:h-52 xl:h-50">
          <p className="text-red-500">{error.message}</p>
        </div>
      )}
      {status === "pending" && (
        <div className="flex h-40 items-center justify-center md:h-44 lg:h-52 xl:h-50">
          <Spinner />
        </div>
      )}
      {status === "success" && (
        <div className="overflow-x-auto scroll-smooth lg:w-screen">
          <section className="flex w-max items-center gap-x-4 lg:gap-x-5 xl:gap-x-6">
            {data?.pages.map((p) =>
              p.results.map((f) => (
                <TrendItem key={f.title || f.name} film={f} />
              )),
            )}
            {hasNextPage && (
              <InView className="pr-4" onChange={onChangeHandler}>
                <Spinner />
              </InView>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default TrendLayout;
