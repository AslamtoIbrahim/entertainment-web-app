import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchRecommendedFilms } from "../dashboard.service";

export const useRecommendedQuery = () => {
  return useInfiniteQuery({
    queryKey: ["recommends"],
    queryFn: fetchRecommendedFilms,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.total_pages > lastPage.page ? lastPage.page + 1 : null,
  });
};
