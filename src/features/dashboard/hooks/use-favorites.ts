import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getFavoritByTitle,
  getFavorites,
  removeFavorit,
  saveFavorite,
} from "../dashboard.service";

export const useAddFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["favorites"],
    mutationFn: saveFavorite,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      queryClient.invalidateQueries({ queryKey: ["favorite", res.title] });
    },
    onError: (err) => console.log("err: 😫", err),
  });
};

export const useFavoritesQuery = (search: string) => {
  return useInfiniteQuery({
    queryKey: ["favorites", search] as [string, string],
    queryFn: getFavorites,
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useRemoveFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["favorites"],
    mutationFn: removeFavorit,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      queryClient.invalidateQueries({ queryKey: ["favorite", res.title] });
    },
    onError: (err) => console.log("err: 😫", err),
  });
};

export const useGetFavoriteByTitle = (title: string) => {
  return useQuery({
    queryKey: ["favorite", title] as [string, string],
    queryFn: getFavoritByTitle,
    enabled: !!title,
  });
};
