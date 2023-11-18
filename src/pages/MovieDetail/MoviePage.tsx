import styled from "@emotion/styled";
import MovieDetail from "./MovieDetail";
import MovieCredits from "./MovieCredits";

function MoviePage() {

    return (
        <div style={{ padding: '3rem', overflow:'hidden', gap:"1rem", }}>
            <MovieDetail/>
            <MovieCredits/>
        </div>
    );
}

export default MoviePage;