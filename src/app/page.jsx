"use client";
import React from "react";
import Navbar from "@/Components/Navbar";
import SearchBar from "@/Components/SearchBox";
import FeaturedShows from "@/Components/FeaturedShows";
import CategoryCard from "@/Components/CategoryCard";

const categoryList = [
  {
    title: "Animation",
    image: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    link: "animes/animation",
  },
  {
    title: "Comedy",
    image: "https://image.tmdb.org/t/p/w500/yzXniZFkPjpfroSSQoG4aCCKT7B.jpg",
    link: "animes/comedy",
  },
  {
    title: "Action & Adventure",
    image: "https://image.tmdb.org/t/p/w500/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg",
    link: "animes/action",
  },
  {
    title: "Drama",
    image: "https://image.tmdb.org/t/p/w500/eobAuhCJA8oRp814V67WhezVXtQ.jpg",
    link: "animes/drama",
  },
  {
    title: "Mystery",
    image: "https://image.tmdb.org/t/p/w500/mCdT4GCPLDvgc1WNZDM3HKboAqg.jpg",
    link: "animes/mystery",
  },
  {
    title: "Kids",
    image: "https://image.tmdb.org/t/p/w500/fBidRE6eaO41CqApwkpXyj9v9hi.jpg",
    link: "animes/kids",
  },
];

const CategoriesSection = () => (
  <section className="px-6 sm:px-10 py-8">
    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-[1px] rounded-md mb-6">
      <h2 className="text-2xl font-semibold text-white bg-black px-4 py-2 rounded-md">
        Explore by Category
      </h2>
    </div>
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {categoryList.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          image={category.image}
          link={category.link}
        />
      ))}
    </div>
  </section>
);

export default function Main() {
  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp8969444.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Transparent Navbar */}
        
          <Navbar />
        

        {/* Hero Section with Search */}
        <div className="flex flex-col justify-center items-center h-[85vh] text-center px-4 sm:px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to AniVerse!
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Watch Your favorite anime movies and shows!
          </p>

          <div className="w-full max-w-2xl flex justify-center">
            <SearchBar />
          </div>
        </div>

        {/* Main Sections */}
        <main className="bg-[#0f0f0f] bg-opacity-90">
          <FeaturedShows />
          <CategoriesSection />
        </main>
      </div>
    </div>
  );
}