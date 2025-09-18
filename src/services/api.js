const API_KEY = "0938677f388bb834535f28d0cb337ae9";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
    try {
        const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
        const data = await res.json();
        return data.results || []; // fallback
    } catch(error) {
        console.error(error);
        return []; // important!
    };
};

export const searchMovies = async (query) => {
    try {
        const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await res.json();
        return data.results;
    } catch(error) {
        console.error(error);
    };
};