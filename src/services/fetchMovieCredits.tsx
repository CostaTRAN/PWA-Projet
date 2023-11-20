import { useQuery } from "react-query";
import { configServices } from "./configServices";

//Filtrage credits des 10 premiers acteurs, un réalisateur et un compositeur
const fetchMovieCredits = async (id: string) => {
    const response = await fetch(`${configServices.apiURL}${id}/credits`, { headers: { "Authorization": `Bearer ${configServices.apiBearerToken} `} });
    const credits = await response.json();
    return credits;
}

export const useFetchMovieCredits = (id: string) => {
    return useQuery(['movieCredits', id], () => fetchMovieCredits(id));
}