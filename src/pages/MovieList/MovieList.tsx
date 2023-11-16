import styled from "@emotion/styled";
import { Grid } from "../../design/interfaces/Grid";
import { MovieCard } from "../../design/molecules/MovieCard";
import { Movie } from "../../repository/models/Movie";

//à déplacer dans un autre fichier .tsx
export const MovieListContainer = styled("main")({
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "3rem",
    minHeight: "100vh",
    "@media (prefers-color-scheme: dark)": {
        backgroundColor: "rgb(31 41 55);",
    },
});

export const MovieList = ({movies} : {movies: Movie[]}) => {
    return (
        <Grid>
            {movies.map((movie) => (
                <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
        </Grid>
    );
};