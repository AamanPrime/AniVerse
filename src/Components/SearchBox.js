const SearchBar = () => {
    return (
      <div className="p-4">
        <input
          type="text"
          placeholder="Search for your favorite anime..."
          className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>
    );
  };

  export default SearchBar;