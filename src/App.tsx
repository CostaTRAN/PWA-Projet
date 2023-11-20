  import styled from "@emotion/styled";
  import MovieList from "./pages/MovieList/MovieList";
  import { useFetchMovies } from "./services/fetchMovies";
  import { useFetchMovieByName } from "./services/fetchMovieByName";
  import { Search } from "./design/atoms/Search";
  import { Title } from "./design/atoms/Title";
  import { useState } from "react";

  function App() {

    const { data:moviesCurrent , isLoading: isLoadingCurrent , isError: isErrorCurrent } = useFetchMovies();

    const [Input, setInput] = useState("");
    const { data:moviesSearched , isLoading: isLoadingSearched, isError: isErrorSearched } = useFetchMovieByName(Input);

    const MovieListContainer = styled("main")({
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      padding: "3rem",
      minHeight: "100vh",
      "@media (prefers-color-scheme: dark)": {
          backgroundColor: "rgb(31 41 55);",
      },
    })
    
    const Header = styled("div")({
      display: "flex",
      flexWrap: "wrap",
      "@media (min-width:640px)":{
        justifyContent: "space-between",
      },
      gap: "1rem"
    })

    const handleInputChange = (value: string) => {
      setInput(value);
    }

    return (
      <MovieListContainer>
        <Header>
          <Title>🎬🍿 Movie library</Title>
          <Search type="text" placeholder=' 🔎 Search for movie' value={Input} onChange={(event) => handleInputChange(event.target.value)} id="searchInput" autoFocus/>
        </Header>

      { Input == "" ? (
          <>
            {isLoadingCurrent ? <div>Loading...</div> : <MovieList movies={moviesCurrent} />}
            {isErrorCurrent && <div>Error</div>}
          </>
        ) : (
          <>
            {isLoadingSearched ? <div>Loading...</div> : <MovieList movies={moviesSearched} />}
            {isErrorSearched && <div>Error</div>}
          </>
        )
      }

      </MovieListContainer>
    )
  }

  export default App
