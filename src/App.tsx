import { Route, Routes } from "react-router-dom";
import MovieListPage from "./pages/MovieList/MovieListPage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";

function App() {
    return (
      <Routes>

        <Route path="/" element={<MovieListPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />

      </Routes>
    );
}

export default App;