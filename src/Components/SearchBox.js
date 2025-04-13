"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="w-full max-w-md px-4">
      <div className="flex items-center bg-white/10 backdrop-blur-md text-white rounded-full shadow-lg px-4 py-2 focus-within:ring-2 focus-within:ring-orange-400 transition-all duration-200">
        <Search className="text-orange-300 w-5 h-5 mr-2" />

        <input
          type="text"
          placeholder="Search anime..."
          className="flex-grow bg-transparent placeholder-orange-200 text-white focus:outline-none text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={handleSearch}
          className="ml-2 px-3 py-1 text-sm font-semibold bg-orange-500 hover:bg-orange-600 rounded-full transition-transform transform hover:scale-105"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default SearchBar;