import React from "react";
import { query } from "../dbConfig/dbConfig";
import FeaturedShows from "@/Components/FeaturedShows"
import CategoryCard from "@/Components/CategoryCard"
import Navbar from "@/Components/Navbar"
import SearchBar from "@/Components/SearchBox"


export async function getAllAnimes() {
  const result = await query("SELECT * FROM Animes ORDER BY ReleaseDate DESC");
  return result.rows;
}



// Categories Section
const Categories = () => {
  const categories = [
    { title: "Animation", image: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", link: "/animation" },
    { title: "Comedy", image: "https://image.tmdb.org/t/p/w500/yzXniZFkPjpfroSSQoG4aCCKT7B.jpg", link: "/comedy" },
    { title: "Action & Adventure", image: "https://image.tmdb.org/t/p/w500/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg", link: "/action" },
    { title: "Drama", image: "https://image.tmdb.org/t/p/w500/eobAuhCJA8oRp814V67WhezVXtQ.jpg", link: "/drama" },
    { title: "Mystery", image: "https://image.tmdb.org/t/p/w500/mCdT4GCPLDvgc1WNZDM3HKboAqg.jpg", link: "/mystery" },
    { title: "Kids", image: "https://image.tmdb.org/t/p/w500/fBidRE6eaO41CqApwkpXyj9v9hi.jpg", link: "/kids" },
  ];
  return (
    <section className="p-4">
      <h2 className="text-white text-lg font-bold">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category.title} image={category.image} link={category.link} />
        ))}
      </div>
    </section>
  );
};

// Main Component
export default function Main() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <SearchBar />
      <FeaturedShows />
      <Categories />
    </div>
  );
}
