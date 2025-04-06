"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/Components/Navbar";
import SearchBar from "@/Components/SearchBox";
import MovieDescription from "@/Components/MovieDescription";

export default function CategoryMovies() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const params = useParams();
  const category = params?.category;

  useEffect(() => {
    if (!category) return;

    const fetchAnimes = async () => {
      try {
        const capitalized = category.charAt(0).toUpperCase() + category.slice(1)
        const res = await fetch(`/api/${capitalized}`);
        const data = await res.json();
        setAnimes(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimes();
  }, [category]);

  if (loading) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold capitalize mb-6">
          {category} Animes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animes.map((anime) => (
            <MovieDescription key={anime.AnimeID} anime={anime} />
          ))}
        </div>
      </div>
    </div>
  );
}
