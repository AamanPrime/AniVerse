"use client";
import React, { useEffect, useState } from "react";
import MovieDescription from "@/Components/MovieDescription";

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
    <section className="p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-orange-400 border-l-4 border-orange-500 pl-4 mb-6">
        Featured Shows
      </h2>

      {animes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {animes.map((anime) => (
            <MovieDescription key={anime.animeid} anime={anime} />
          ))}
        </div>
      ) : (
        <div className="text-gray-400 animate-pulse">
          Loading Featured Shows...
        </div>
      )}
    </section>
  );
};

export default FeaturedShows;