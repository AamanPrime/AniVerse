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
        const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
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

  // Handle filtering and sorting
  useEffect(() => {
    let updated = [...animes];

    // Apply filter
    if (filter === "mostReviewed") {
      updated = updated.filter((anime) => anime.reviewcount); // example threshold
    }

    updated.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (sortOrder === "asc") return titleA.localeCompare(titleB);
      else return titleB.localeCompare(titleA);
    });

    setFilteredAnimes(updated);
  }, [filter, sortOrder, animes]);

  if (loading) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold capitalize mb-6">{category} Animes</h1>

        {/* 🔽 Filter and Sort Dropdowns */}
        <div className="flex gap-4 mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            <option value="none">All</option>
            <option value="mostReviewed">Most Reviewed</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            <option value="asc">Sort A → Z</option>
            <option value="desc">Sort Z → A</option>
          </select>
        </div>

        {/* 🧱 Anime Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredAnimes.map((anime) => (
            <MovieDescription key={anime.animeid || anime.AnimeID} anime={anime} />
          ))}
        </div>
      </div>
    </div>
  );
}