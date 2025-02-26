const API_KEY = "c8cedf9fb4304ca1c065b934bd2ea3d5";
const BASE_URL = "https://api.themoviesdb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movies/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.result
};

export const searchMovies = async () => {
    const response = await fetch(
        `${BASE_URL}/movies/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    );
    const data = await response.json()
    return data.result
};
