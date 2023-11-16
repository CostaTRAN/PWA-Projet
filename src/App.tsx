import MovieHeader from "./design/molecules/MovieHeader";
import { MovieList } from "./MovieList/MovieList";
import { MovieListContainer } from "./MovieList/MovieList";
import movies from "./repository/data.json";

function App() {

  return (
    <MovieListContainer>
      <MovieHeader/>
      <MovieList movies={ movies.results }/>
    </MovieListContainer>
  )
}

export default App
