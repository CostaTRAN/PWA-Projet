import { useQuery } from "react-query";
import { configServices } from "./configServices";

//Filtrage uniquement les images en no language
const fetchMovieImages = async (id: string) => {
    const response = await fetch(`${configServices.apiURL}${id}/images`, { headers: { "Authorization": `Bearer ${configServices.apiBearerToken} `} });
    const images = await response.json();
    return images;
}

export const useFetchMovieImages = (id: string) => {
    return useQuery(['movieImages', id], () => fetchMovieImages(id));
}