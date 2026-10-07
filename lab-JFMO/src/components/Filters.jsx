const Filters = ({ filters, setFilters, movies }) => {
  const genres = [...new Set(movies.map((m) => m.genre))];
  const years = [...new Set(movies.map((m) => m.year))].sort((a, b) => a - b);

  const update = (key, value) => setFilters({ ...filters, [key]: value });

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        value={filters.genre}
        onChange={(e) => update("genre", e.target.value)}
        className="bg-gray-800 p-2 rounded"
      >
        <option value="all">Todos los géneros</option>
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <select
        value={filters.year}
        onChange={(e) => update("year", e.target.value)}
        className="bg-gray-800 p-2 rounded"
      >
        <option value="all">Todos los años</option>
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

      <select
        value={filters.minRating}
        onChange={(e) => update("minRating", Number(e.target.value))}
        className="bg-gray-800 p-2 rounded"
      >
        <option value={0}>Cualquier calificación</option>
        <option value={7}>7+</option>
        <option value={8}>8+</option>
        <option value={9}>9+</option>
      </select>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={filters.onlyFavorites}
          onChange={(e) => update("onlyFavorites", e.target.checked)}
        />
        Solo favoritas
      </label>
    </div>
  );
};

export default Filters;