import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useFetchMovieById } from "../../services/fetchMovieById";
import ReturnArrow from "../../design/molecules/ReturnArrow";

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
})

const MovieSynopsis = styled("p")({
  color: "white",
  fontSize: "16px",
  fontWeight: "400",
})

const MovieGenre = styled("p")({
  color: "white",
  fontSize: "16px",
  fontWeight: "400",
  fontStyle: "italic",
})

const MovieDate = styled("p")({
  color: "white",
  fontSize: "16px",
  fontWeight: "400",
  fontStyle: "italic",
})

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const { data:movie , isLoading , isError } = useFetchMovieById(id as unknown as string);
  
  return (

    <>
      <ReturnArrow/>
      
      <div>
        { isLoading ? <div>Loading...</div> :
          <MovieDetailContainer>
            <MovieImage src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt={movie.title} width="300"/>
            <MovieTextContainer>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieSynopsis>{movie.overview}</MovieSynopsis>
              <MovieGenre>{movie.genres.map((genre: { name: string; }) => genre.name).join(", ")}</MovieGenre>
              <MovieDate>{movie.release_date}</MovieDate>
            </MovieTextContainer>
          </MovieDetailContainer>
        }
        { isError && <div>Error</div> }
      </div>
    </>
  )
}

export default MovieDetail