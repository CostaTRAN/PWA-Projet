import styled from "@emotion/styled";
import { useFetchMovieById } from "../../services/fetchMovieById";
import { useParams } from "react-router-dom";
import { imageBaseURL } from "../../services/configServices"
import MovieDetail from "./MovieDetail";
import MovieCredits from "./MovieCredits";
import MovieImages from "./MovieImages";

function MoviePage() {
    const { id } = useParams<{ id: string }>();
    const { data:movie , isLoading , isError } = useFetchMovieById(id as unknown as string);

    return (
        <>
            { isLoading ? <div>Loading...</div> :
                <Main path={movie.backdrop_path}>
                    <MovieContainer>
                        <MovieDetail/>
                        <MovieCredits/>
                        <MovieImages/>
                    </MovieContainer>
                </Main>
            }
            { isError && <div>Error</div> }
        </>
    );
}

export default MoviePage;

const Main = styled("main")(({path}:{path:string}) => ({
    display: "flex",
    minHeight: "100vh",
    minWidth: "100%",
    backgroundSize: "cover",
    backgroundImage: `url("${(path != null) ? imageBaseURL + path : "none"}")`,
}));

const MovieContainer = styled("div")({
    display: "flex",
    WebkitBackdropFilter: "blur(40px)",
    flexDirection: "column",
    padding: "3rem",
    overflow: "hidden",
    gap: "1rem",
    backdropFilter: "blur(20px)",
    background: "rgba(30, 41, 59, 0.40)",
    "@media (min-width: 1024px)": {
        overflow: "hidden",
    }
});