function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="Search employees by name, department or role..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {value && (
        <button
          type="button"
          className="search-clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;