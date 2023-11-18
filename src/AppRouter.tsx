import { Route, Routes } from "react-router-dom";
import App from "./App";
import MoviePage from "./pages/MovieDetail/MoviePage";

function AppRouter() {
    return (
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MoviePage />} />

      </Routes>
    );
}

export default AppRouter;