import styled from "@emotion/styled";
import MovieHeader from "./design/molecules/MovieHeader";
import { MovieList } from "./pages/MovieList/MovieList";
import { useFetchMovies } from "./services/fetchMovies";

function App() {

  const { data:movies , isLoading , isError } = useFetchMovies();

  //à revérifier avec movieDetails
  const MovieListContainer = styled("main")({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  padding: "3rem",
  minHeight: "100vh",
  "@media (prefers-color-scheme: dark)": {
      backgroundColor: "rgb(31 41 55);",
  },
});

  return (
    <MovieListContainer>
      <MovieHeader/>
      { isLoading ? <div>Loading...</div> : <MovieList movies={ movies }/>}
      { isError && <div>Error</div>}
    </MovieListContainer>
  )
}

export default App
