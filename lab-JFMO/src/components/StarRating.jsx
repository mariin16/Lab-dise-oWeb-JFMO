const StarRating = ({ rating, onRate, readOnly = false }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-1">
      {stars.map((star) => {
        const filled = star <= rating;
        return (
          <button
            key={star}
            type="button"
            disabled={readOnly}
            onClick={() => !readOnly && onRate(star)}
            className={`text-lg transition-colors ${
              filled ? "text-yellow-400" : "text-gray-600"
            } ${
              readOnly
                ? "cursor-default"
                : "cursor-pointer hover:text-yellow-300"
            }`}
          >
            {filled ? "★" : "☆"}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;