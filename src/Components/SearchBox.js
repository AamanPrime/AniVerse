"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="p-4 flex items-center gap-2">
      <input
        type="text"
        placeholder="Search for your favorite anime..."
        className="flex-grow p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSearch}
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
