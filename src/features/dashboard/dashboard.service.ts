export const IMG_URL = "https://image.tmdb.org/t/p";
const API_KEY = 'ad5a071b9678eb7768bdc204670822bb' 

export const fetchTrendingFilms = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`)
    return await res.json()
};

export const fetchFilms = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`)
    return await res.json()
};