import { Grid } from "../../design/interfaces/Grid";
import { MovieCard } from "../../design/molecules/MovieCard";
import { Movie } from "../../repository/models/Movie";

function MovieList ({movies} : {movies: Movie[]}) {
    if (!Array.isArray(movies)) {
        return <div>No movies available</div>;
      }
    return (
        <Grid>
            {movies.map((movie) => (
                <MovieCard key={movie.id} id={movie.id} poster_path={ movie.poster_path} />
            ))}
        </Grid>
    );
};

export default MovieList;