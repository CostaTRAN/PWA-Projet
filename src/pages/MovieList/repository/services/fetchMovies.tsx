import { useQuery } from "react-query";
import { configServices } from "./configServices";

const fetchMoviesNowPlaying = async () => {
    const response = await fetch(`${configServices.apiURL}now_playing`, { headers: { "Authorization": `Bearer ${configServices.apiBearerToken} `} });
    const {results} = await response.json();
    return results;
}

export const useFetchMovies = () => {
    return useQuery('movies', fetchMoviesNowPlaying);
}