import useProjects from '../hooks/useProjects';

function SearchBar() {
  const { searchTerm, setSearch } = useProjects();

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;