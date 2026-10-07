import { useState } from "react";
import { movies } from "./data/movies";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";

function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    genre: "all",
    year: "all",
    minRating: 0,
    onlyFavorites: false,
  });
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  // Filtrado combinado
  const filteredMovies = movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear = filters.year === "all" || movie.year === Number(filters.year);
    const matchesRating = movie.rating >= filters.minRating;
    const matchesFavorites = !filters.onlyFavorites || favorites.includes(movie.id);

    return matchesQuery && matchesGenre && matchesYear && matchesRating && matchesFavorites;
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const setRating = (id, value) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };

  const selectedMovie = movies.find((m) => m.id === selectedId);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <Header query={query} setQuery={setQuery} />

      <Filters filters={filters} setFilters={setFilters} movies={movies} />

      {selectedId ? (
        <MovieDetail
          movie={selectedMovie}
          onClose={() => setSelectedId(null)}
          isFavorite={favorites.includes(selectedId)}
          onToggleFavorite={toggleFavorite}
          userRating={ratings[selectedId] || 0}
          onRate={(value) => setRating(selectedId, value)}
        />
      ) : (
        <>
          <Favorites favorites={favorites} movies={movies} onSelect={setSelectedId} />
          <MovieList
            movies={filteredMovies}
            favorites={favorites}
            ratings={ratings}
            onToggleFavorite={toggleFavorite}
            onSelect={setSelectedId}
          />
        </>
      )}
    </div>
  );
}

export default App;