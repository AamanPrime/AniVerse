"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MovieDescription from "@/Components/MovieDescription";

export default function CategoryMovies() {
  const [animes, setAnimes] = useState([]);
  const [filteredAnimes, setFilteredAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("none");

  const params = useParams();
  const category = params?.category;

  useEffect(() => {
    if (!category) return;

    const fetchAnimes = async () => {
      try {
        const capitalized =
          category.charAt(0).toUpperCase() + category.slice(1);
        const res = await fetch(`/api/${capitalized}`);
        const data = await res.json();
        setAnimes(data);
        setFilteredAnimes(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimes();
  }, [category]);

  // Filter and sort whenever dependencies change
  useEffect(() => {
    let updated = [...animes];

    if (filter === "mostReviewed") {
      updated = updated
        .filter((anime) => anime.reviewcount > 0)
        .sort((a, b) => b.reviewcount - a.reviewcount);
    }

    updated.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return sortOrder === "asc"
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });

    setFilteredAnimes(updated);
  }, [filter, sortOrder, animes]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 border-solid"></div>
        <p className="ml-4 text-lg">Loading {category} anime...</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-orange-400 capitalize mb-8">
          {category} 
        </h1>

        {/* Filter and Sort Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          >
            <option value="none">All</option>
            <option value="mostReviewed">Most Reviewed</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          >
            <option value="asc">Sort A → Z</option>
            <option value="desc">Sort Z → A</option>
          </select>
        </div>

        {/* Anime Grid */}
        {filteredAnimes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {filteredAnimes.map((anime) => (
              <MovieDescription
                key={anime.animeid || anime.AnimeID}
                anime={anime}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-10">
            No anime found in this category.
          </p>
        )}
      </div>
    </div>
  );
}