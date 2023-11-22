import styled from "@emotion/styled";
import moment from 'moment';
import { useParams } from "react-router-dom";
import { useFetchMovieById } from "../../services/fetchMovieById";
import { imageBaseURL } from "../../services/configServices";
import ReturnArrow from "../../design/molecules/ReturnArrow";
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
            <MovieImage src={imageBaseURL + movie.poster_path} alt={movie.title} width="300"/>
            :
            
            <MovieImage src={NoImage} alt="no image poster" width="300" height="450"/>
          }
            <MovieTextContainer>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieSynopsis>{movie.overview}</MovieSynopsis>
              <MovieGenre>{movie.genres.map((genre: { name: string; }) => genre.name).join(", ")}</MovieGenre>
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

const MovieImage = styled("img")({
  borderRadius: "0.375rem",
  objectFit: "cover",
  height: "auto",
  display: "block",
  verticalalign: "middle"
})

const MovieTextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: "1 1 0%",
})

const MovieTitle = styled("p")({
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexShrink: 0,
  fontSize: "36px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "40px",

  margin: "inherit",
})

const MovieSynopsis = styled("p")({
  color: "white",
  fontSize: "16px",
  fontWeight: "400",

  margin: "inherit",
  padding: "2.5px 0px 2.5px 0px",
})

const MovieGenre = styled("p")({
  color: "white",
  fontSize: "16px",
  lineHeight: "24px", 
  fontWeight: "400",
  fontStyle: "italic",
  margin: "inherit",
  padding: "2.5px 0px 2.5px 0px",
  marginTop: "8px",
})

const MovieDate = styled("p")({
  color: "white",
  fontSize: "16px",
  fontWeight: "400",
  fontStyle: "italic",

  height:"24px",
  margin: "inherit",
  lineHeight: "24px",
  padding: "2.5px 0px 2.5px 0px",
})