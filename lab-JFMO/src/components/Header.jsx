import SearchBar from "./SearchBar";

const Header = ({ query, setQuery }) => (
  <header className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-bold">NETFLIX</h1>
    <SearchBar query={query} setQuery={setQuery} />
  </header>
);

export default Header;