import { useQuery } from "react-query";
import { configServices } from "./configServices";
import { Movie } from "../repository/models/Movie";

const fetchMovieByName = async (name: string) => {
    const response = await fetch(`${configServices.apiSearchURL}${name}`, { headers: { "Authorization": `Bearer ${configServices.apiBearerToken} `} });
    const {results} = await response.json();
    return results;
}

export const useFetchMovieByName = (name: string) => {
    return useQuery<Movie[]>(['movies', name], async () => {
      const movies = await fetchMovieByName(name);
      return Array.isArray(movies) ? movies : [];
    });
  };