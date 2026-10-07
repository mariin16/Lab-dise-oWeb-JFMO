import StarRating from "./StarRating";

const MovieDetail = ({ movie, onClose, isFavorite, onToggleFavorite, userRating, onRate }) => {
  if (!movie) return null;

  return (
    <div className="bg-gray-900 rounded-lg p-6 max-w-2xl mx-auto">
      <button onClick={onClose} className="text-sm text-gray-400 mb-4">← Volver</button>

      <img src={movie.image} alt={movie.title} className="w-full h-80 object-cover rounded" />

      <h2 className="text-2xl font-bold mt-4">{movie.title}</h2>
      <p className="text-gray-400">{movie.genre} · {movie.year} · Calificación: {movie.rating}</p>
      <p className="mt-3 text-gray-300">{movie.description}</p>

      <button
        onClick={() => onToggleFavorite(movie.id)}
        className="mt-4 text-red-400"
      >
        {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      </button>

      <div className="mt-4">
        <p className="text-sm text-gray-400 mb-1">Tu calificación:</p>
        <StarRating rating={userRating} onRate={onRate} />
      </div>
    </div>
  );
};

export default MovieDetail;