export type Film = {
  title?: string;
  name?: string;
  first_air_date?: string;
  release_date?: string;
  poster_path: string;
  original_language: string;
  media_type: "movie" | "tv";
};

export type Films = {
  page: number;
  results: Film[];
  total_pages: number;
};

export type Favorite = {
  id: string;
  userId: string;
  title: string;
  date: string;
  language: string;
  path: string;
  type: string;
};

export type Heart = {
  title: string;
  date: string;
  language: string;
  path: string;
  type: string;
};

export type PageFavorites = {
  favorites: Favorite[];
  nextCursor: string | null;
};

