import MovieCard from "./MovieCard";

const MovieList = ({ movies, favorites, ratings, onToggleFavorite, onSelect }) => {
  if (movies.length === 0) {
    return <p className="text-center text-gray-500 py-10">No se encontraron películas.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          userRating={ratings[movie.id] || 0}
          onToggleFavorite={onToggleFavorite}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default MovieList;