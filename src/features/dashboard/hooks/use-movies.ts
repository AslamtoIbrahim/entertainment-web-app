import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "../dashboard.service";

export const useMoviesQuery = () => {
  return useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.total_pages > lastPage.page ? lastPage.page + 1 : null,
  });
};
