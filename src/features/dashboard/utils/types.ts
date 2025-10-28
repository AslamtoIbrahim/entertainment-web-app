 

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
 
// api key :  ad5a071b9678eb7768bdc204670822bb
