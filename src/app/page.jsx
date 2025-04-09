"use client";
import React, { useEffect, useState } from "react";
import FeaturedShows from "@/Components/FeaturedShows";
import CategoryCard from "@/Components/CategoryCard";
import Navbar from "@/Components/Navbar";
import SearchBar from "@/Components/SearchBox";

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

export default function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        return;
      }

      try {
        const res = await fetch("/api/authstatus", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (data.authenticated) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar status={isAuthenticated} />
      <SearchBar />
      
      <div className="p-4 text-sm text-gray-300">
        {isAuthenticated ? (
          <p>Welcome back, <span className="font-semibold text-white">{user?.username}</span>!</p>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>

      <FeaturedShows />
      <Categories />
    </div>
  );
}
