import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchSearch } from "../dashboard.service";

export const useSearchQuery = (search: string) => {
  return useInfiniteQuery({
    queryKey: ["trends", search] as [string, string],
    queryFn: fetchSearch,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.total_pages > lastPage.page ? lastPage.page + 1 : null,
  });
};
