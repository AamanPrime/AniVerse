"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import SearchBar from "@/Components/SearchBox";
import Navbar from "@/Components/Navbar";

export default function AnimeStreamingPage() {
  const { animeId } = useParams();
  
  const [anime, setAnime] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchAnime = async () => {
      const res = await fetch(`/api/anime/${animeId}`);
      const data = await res.json();
      console.log(anime)
      setAnime(data);
    };
    fetchAnime();
  }, [animeId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <div className="max-w-7.5xl mx-auto p-6">
        {/* Video & Next Episode */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-black aspect-video rounded-lg shadow-lg"></div>
          {/* <h3 className="text-red-500 text-lg font-semibold mb-2 inline">Next Episode</h3> */}
          <div className="w-full md:w-1/3 bg-gray-900 p-4 rounded-lg shadow-md h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">

            
            {[...Array(anime?.noofepisodes)].map((_, i) => (
              <button key={i} className="w-full bg-gray-800 p-3 rounded-md text-left hover:bg-red-600 transition mb-2">
                {/* <p className="text-sm text-gray-400">Episode {i + 1}</p> */}
                <p className="text-white font-bold">Episode {i + 1}</p>
              </button>
            ))}

            {/* <button className="w-full bg-gray-800 p-3 rounded-md text-left hover:bg-red-600 transition">
              <p className="text-sm text-gray-400">Episode 1</p>
              <p className="text-white font-bold">Episode Title</p>
            </button> */}
          </div>
        </div>

        {/* Anime Info */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-red-500">{anime?.title || "Anime Name"}</h1>
          <p className="bg-gray-800 p-4 mt-4 rounded shadow-md">{anime?.description || "Description"}</p>
          <p className="bg-gray-800 p-4 mt-4 rounded shadow-md">Casts: {anime?.cast?.join(", ") || "Casts"}</p>
        </div>

        {/* Comments Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-red-500 mb-4">Comments</h3>
          <div className="bg-gray-900 p-4 rounded-lg">
            {/* Sample comment */}
            <div className="flex gap-4 items-start mb-6">
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              <div className="flex-1 bg-gray-800 p-3 rounded-lg">
                <p className="text-sm text-gray-200">This anime is amazing! 😍</p>
                <div className="flex gap-4 text-gray-400 mt-2 text-xs">
                  <button>Like</button>
                  <button>Dislike</button>
                  <button>Reply</button>
                  <button>Delete</button>
                  <span className="ml-auto">2 hours ago</span>
                </div>
              </div>
            </div>

            {/* New Comment Input */}
            <textarea
              className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4"
              placeholder="Write your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button className="bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
