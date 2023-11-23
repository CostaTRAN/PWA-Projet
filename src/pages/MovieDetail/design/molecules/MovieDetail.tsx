import styled from "@emotion/styled";
import moment from 'moment';

import { useParams } from "react-router-dom";
import { useFetchMovieById } from "../../repository/services/fetchMovieById";
import { imageBaseURL } from "../../repository/services/configServices";

import { MovieDate } from "../atoms/MovieDate";
import { MovieGenres } from "../atoms/MovieGenres";
import { MovieSynopsis } from "../atoms/MovieSynopsis";
import { MovieTitle } from "../atoms/MovieTitle";
import { MoviePoster } from "../atoms/MoviePoster";

import ReturnArrow from "./ReturnArrow";
import NoImage from "/NoImagePoster.svg?url";

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const { data:movie , isLoading , isError } = useFetchMovieById(id as unknown as string);
  
  return (
    <>
      <ReturnArrow/>
      
      <div>
        {
          isLoading ? <div>Loading...</div> :

          <MovieDetailContainer>
            {
              movie.poster_path != null ?
                <MoviePoster src={imageBaseURL + movie.poster_path} alt={movie.title} width="300"/>
                :
                <MoviePoster src={NoImage} alt="no image poster" width="300" height="450"/>
            }

            <MovieTextContainer>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieSynopsis>{movie.overview}</MovieSynopsis>
              <MovieGenres>{movie.genres.map((genre: { name: string; }) => genre.name).join(", ")}</MovieGenres>
              <MovieDate>{moment(movie.release_date).format("MMM D, YYYY")}</MovieDate>
            </MovieTextContainer>
          </MovieDetailContainer> 
        }
        { isError && <div>Error</div> }
      </div>
    </>
  )
}

export default MovieDetail

const MovieDetailContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "center",

  "@media (min-width:640px)": {
    flexDirection: "row",
    alignItems: "flex-end",
  }
})

const MovieTextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: "1 1 0%",
})