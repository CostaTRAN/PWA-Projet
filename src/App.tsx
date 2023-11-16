import MovieHeader from "./design/molecules/MovieHeader";
import { MovieList } from "./pages/MovieList/MovieList";
import { MovieListContainer } from "./pages/MovieList/MovieList";
//import movies from "./repository/data.json";
import { useFetchMovies } from "./services/fetchMovies";

function App() {

  const { data:movies , isLoading , isError } = useFetchMovies();

  return (
    <MovieListContainer>
      <MovieHeader/>
      { isLoading ? <div>Loading...</div> : <MovieList movies={ movies }/>}
      { isError && <div>Error</div>}
    </MovieListContainer>
  )
}

export default App
