import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchTvSeries } from "../dashboard.service";

export const useTvSeriesQuery = () => {
  return useInfiniteQuery({
    queryKey: ["tvseries"],
    queryFn: fetchTvSeries,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.total_pages > lastPage.page ? lastPage.page + 1 : null,
  });
};
