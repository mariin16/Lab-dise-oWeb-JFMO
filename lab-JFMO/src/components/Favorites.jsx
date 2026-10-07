const Favorites = ({ favorites, movies, onSelect }) => {
  const favoriteMovies = movies.filter((m) => favorites.includes(m.id));

  if (favoriteMovies.length === 0) return null;

  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-3 text-white-400">Tus favoritas</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {favoriteMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => onSelect(movie.id)}
            className="flex-shrink-0 w-32 cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-32 h-48 object-cover rounded-lg"
            />
            <p className="text-sm mt-1 text-center truncate">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;