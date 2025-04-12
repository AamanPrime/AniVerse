"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MovieDescription from "@/Components/MovieDescription";
import Navbar from "@/Components/Navbar"
import SearchBar from "@/Components/SearchBox";
const SearchedMovies = () => {
  const { moviename } = useParams(); // dynamic route param
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!moviename) return;
  
      try {
        const res = await fetch(`/api/search/${moviename}`);
        const data = await res.json();
  
        console.log("Search response:", data);
  
        // If data is an array, set it. Otherwise, fallback to empty array
        if (Array.isArray(data)) {
          setMovies(data);
          data.map((e) => {
            console.log("Ho")
            console.log(e);
          })
        } else {
          console.warn("Expected an array but got:", data);
          setMovies([]);
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchMovies();
  }, [moviename]);
  

  return (
    
    <div className="text-white">
      <Navbar/>
      <SearchBar/>
      <h1 className="text-xl font-bold mb-4">Search Results for: <span className="text-red-500">{moviename}</span></h1>

      {loading ? (
        <p>Loading...</p>
      ) : movies.length === 0 ? (
        <p>No results found ....</p>
        
      ) : (
        
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 p-4">
          {console.log(movies)}
          {movies.map((movie) => {
  console.log("Rendering movie:", movie);
  return <MovieDescription key={movie.animeid} anime={movie} />;
})}
        </div>
      )}
    </div>
  );
};

export default SearchedMovies;
