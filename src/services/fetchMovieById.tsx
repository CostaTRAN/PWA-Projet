import { useQuery } from "react-query";
import { configServices } from "./configServices";

const fetchMovieById = async (id: string) => {
    const response = await fetch(`${configServices.apiURL}${id}`, { headers: { "Authorization": `Bearer ${configServices.apiBearerToken} `} });
    const movie = await response.json();
    return movie;
}

export const useFetchMovieById = (id: string) => {
    return useQuery(['movie', id], () => fetchMovieById(id));
}