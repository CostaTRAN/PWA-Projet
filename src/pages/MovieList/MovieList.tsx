import { Grid } from "./design/atoms/Grid";
import { MovieCard } from "./design/molecules/MovieCard";
import { Movie } from "./repository/interfaces/Movie";

function MovieList ({movies} : {movies: Movie[]}) {
    return (
        <Grid>
            {movies.map((movie) => (
                <MovieCard key={movie.id} id={movie.id} poster_path={movie.poster_path} />
            ))}
        </Grid>
    );
};

export default MovieList;