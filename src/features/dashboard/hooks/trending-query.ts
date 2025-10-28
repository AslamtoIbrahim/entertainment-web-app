import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchTrendingFilms } from "../dashboard.service";

export const useTrendingQuery = () => {
  return useInfiniteQuery({
    queryKey: ["trends"],
    queryFn: fetchTrendingFilms,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.total_pages > lastPage.page ? lastPage.page + 1 : null,
  });
};
