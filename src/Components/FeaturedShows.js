"use client"
import React, { useEffect, useState } from "react";
import CategoryCard from "@/Components/CategoryCard"
import MovieDescription from "@/Components/MovieDescription"
const FeaturedShows = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const res = await fetch("/api/getallanimes");
        const data = await res.json();
        setAnimes(data);
      } catch (error) {
        console.error("Error fetching animes:", error);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <section className="p-4">
      <h2 className="text-white text-lg font-bold">Featured Shows</h2>
      <div className="grid grid-cols-5 md:grid-cols-5 gap-4 mt-2">
        {animes.length > 0 ? (
          animes.map((anime) => (
            <MovieDescription key={anime.AnimeID} anime={anime} />
            // <CategoryCard key={anime.animeid} title={anime.title} image={anime.coverimage} link={`/anime/${anime.animeid}`} />
          ))
        ) : (
          <p className="text-gray-400">Loading...</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedShows;
