import { Grid } from "../../design/interfaces/Grid";
import { MovieCard } from "../../design/molecules/MovieCard";
import { Movie } from "../../repository/models/Movie";

export const MovieList = ({movies} : {movies: Movie[]}) => {
    return (
        <Grid>
            {movies.map((movie) => (
                <MovieCard key={movie.id} id={movie.id} poster_path={movie.poster_path} />
            ))}
        </Grid>
    );
};