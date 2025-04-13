"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../Components/Navbar";

export default function Main() {
  const [watchList, setwatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(true); // auth flag

  useEffect(() => {
    const fetchWatchList = async () => {
      const token = localStorage.getItem("token");
        
      if (!token) {
        console.log("hi")
        setAuthorized(false); // not logged in
        setLoading(false);
        return;
      }
      console.log("i")

      try {
        const res = await fetch("/api/watchlist", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        console.log(data)
        if (res.ok) {
          setwatchList(data.watchlist || []);
        } else {
          console.error("Error fetching history:", data.error);
          setAuthorized(false); // invalid or expired token
        }
      } catch (err) {
        console.error("Failed to fetch:", err);
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchList();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mb-10 py-10">Your WatchList</h1>

      {loading ? (
        <p className="text-center text-gray-400 text-lg">Loading...</p>
      ) : !authorized ? (
        <p className="text-center text-red-500 text-lg">Not authorized. Please log in to view your watch history.</p>
      ) : watchList.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Nothing Here....
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {watchList.map((anime) => (
            <Link
              href={`/streaming/${anime.animeid}/${anime.seasonnumber}/${anime.episodenumber}`}
              key={anime.animeid}
              className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl shadow-lg overflow-hidden group"
            >
              <img
                src={anime.coverimage || "/placeholder.jpg"}
                alt={anime.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{anime.title}</h2>
                <p className="text-sm text-gray-400 line-clamp-4">{anime.description}</p>
                <p className="text-xs text-orange-400 mt-2">
                  
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
