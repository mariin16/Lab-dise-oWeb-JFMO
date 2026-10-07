const SearchBar = ({ query, setQuery }) => (
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Buscar película..."
    className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
  />
);

export default SearchBar;