import StarRating from "./StarRating";

const MovieCard = ({ movie, isFavorite, userRating, onToggleFavorite, onSelect }) => (
  <div
    onClick={() => onSelect(movie.id)}
    className="group bg-gray-900 rounded-xl overflow-hidden cursor-pointer 
               shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <div className="relative">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-60 object-cover "
      />
      <span className="absolute top-2 left-2 bg-black/70 text-yellow-400 text-xs font-semibold px-2 py-1 rounded">
        {movie.rating}
      </span>
    </div>

    <div className="p-4">
      <h3 className="font-bold text-lg truncate">{movie.title}</h3>
      <p className="text-xs text-gray-400 mb-3">
        {movie.genre} · {movie.year}
      </p>

      <div className="flex items-center justify-between">
        <StarRating rating={userRating} readOnly />

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(movie.id);
          }}
          className={`text-xs font-semibold px-3 py-1 rounded-md border transition-colors ${
            isFavorite
              ? "bg-red-600 border-red-600 text-white hover:bg-red-700"
              : "border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-400"
          }`}
        >
          {isFavorite ? "Quitar" : "Favorito"}
        </button>
      </div>
    </div>
  </div>
);

export default MovieCard;