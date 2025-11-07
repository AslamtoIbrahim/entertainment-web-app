import { BACKEND_URL } from "@/shared/lib/utils";
import axios from "axios";
import type { Favorite, Films, Heart, PageFavorites } from "./utils/types";
export const IMG_URL = "https://image.tmdb.org/t/p";
const API_KEY = "ad5a071b9678eb7768bdc204670822bb";

export const fetchTrendingFilms = async ({
  pageParam,
}: {
  pageParam: number;
}) => {
  const res = await axios.get<Films>(
    `https://api.themoviedb.org/3/trending/all/day`,
    {
      params: { api_key: API_KEY, page: pageParam },
    },
  );
  return res.data;
};

export const fetchSearch = async ({
  pageParam,
  queryKey,
}: {
  pageParam: number;
  queryKey: [string, string];
}) => {
  const [_, search] = queryKey;
  const res = await axios.get<Films>(
    `https://api.themoviedb.org/3/search/multi`,
    {
      params: {
        api_key: API_KEY,
        page: pageParam,
        query: search,
      },
    },
  );
  return res.data;
};

export const fetchRecommendedFilms = async ({
  pageParam,
}: {
  pageParam: number;
}) => {
  const res = await axios.get<Films>(
    `https://api.themoviedb.org/3/trending/all/week`,
    {
      params: { api_key: API_KEY, page: pageParam },
    },
  );
  return res.data;
};

export const fetchTvSeries = async ({ pageParam }: { pageParam: number }) => {
  const res = await axios.get<Films>(
    `https://api.themoviedb.org/3/trending/tv/week`,
    {
      params: { api_key: API_KEY, page: pageParam },
    },
  );
  return res.data;
};

export const fetchMovies = async ({ pageParam }: { pageParam: number }) => {
  const res = await axios.get<Films>(
    `https://api.themoviedb.org/3/trending/movie/week`,
    {
      params: { api_key: API_KEY, page: pageParam },
    },
  );
  return res.data;
};

export const saveFavorite = async (heart: Heart) => {
  const res = await axios.post<Favorite>(`${BACKEND_URL}/favorite`, heart, {
    withCredentials: true,
  });

  return res.data;
};

export const getFavorites = async ({
  pageParam,
  queryKey,
}: {
  pageParam: string | null;
  queryKey: [string, string];
}) => {
  const [_, search] = queryKey;
  const res = await axios.get<PageFavorites>(`${BACKEND_URL}/favorite`, {
    params: {
      cursor: pageParam,
      search,
    },
    withCredentials: true,
  });
  return res.data;
};

export const removeFavorit = async (id: string) => {
  const res = await axios.delete<Favorite>(`${BACKEND_URL}/favorite/${id}`, {
    withCredentials: true,
  });

  return res.data;
};

export const getFavoritByTitle = async ({
  queryKey,
}: {
  queryKey: readonly unknown[];
}) => {
  const [_, title] = queryKey as [string, string];
  const res = await axios.get<Favorite>(`${BACKEND_URL}/favorite/one`, {
    params: { title },
    withCredentials: true,
  });
  return res.data;
};
