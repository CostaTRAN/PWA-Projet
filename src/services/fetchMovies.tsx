import { useQuery } from "react-query";
import { configServices } from "./configServices";

const fetchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing`, { headers: { "Authorization": `Bearer ${configServices.apiBearerToken} `} });
    const {results} = await response.json();
    return results;
}

export const useFetchMovies = () => {
    return useQuery('movies', fetchMovies);
}