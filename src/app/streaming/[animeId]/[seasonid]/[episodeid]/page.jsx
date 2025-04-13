"use client";

import { useState, useEffect } from "react";
import { redirect, useParams } from "next/navigation";
import Navbar from "@/Components/Navbar";

export default function AnimeStreamingPage() {
  const { animeId, seasonid, episodeid } = useParams();

  const [anime, setAnime] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [inWatchlist, setInWatchlist] = useState(false);

  useEffect(() => {
    const fetchAnime = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/anime/${animeId}`);
        const data = await res.json();
        setAnime(data);

        const token = localStorage.getItem("token");

        if (token) {
          
          await fetch("/api/watchhistory", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              animeId,
              progress: 0,
              seasonID: seasonid,
              episodeID: episodeid,
            }),
          });
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnime();
  }, [animeId, seasonid, episodeid]);

  const handlePostComment = () => {
    if (!newComment.trim()) return;

    setComments([
      {
        id: Date.now(),
        text: newComment,
        user: "You",
        time: "Just now",
      },
      ...comments,
    ]);
    setNewComment("");
  };

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false); // Reset dislike if already disliked
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false); // Reset like if already liked
  };

  const handleAddToWatchlist = async ()  => {
    setInWatchlist(!inWatchlist);
    try {

      const token = localStorage.getItem("token");

      if (token) {
        
        await fetch("/api/watchlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            animeId,
            status: 0,
          }),
        });
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Navbar />
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Video Player & Anime Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-black aspect-video rounded-xl shadow-lg relative overflow-hidden">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 animate-pulse">Loading video...</span>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <span>Video Player Placeholder</span>
                </div>
              )}
            </div>

            {/* Like/Dislike/Add to Watchlist Buttons */}
            <div className="mt-4 flex gap-4">
              <button
                onClick={handleLike}
                className={`px-6 py-2 rounded-lg transition ${
                  liked ? "bg-green-600" : "bg-gray-700"
                } hover:bg-green-700`}
              >
                {liked ? "Liked" : "Like"}
              </button>
              <button
                onClick={handleDislike}
                className={`px-6 py-2 rounded-lg transition ${
                  disliked ? "bg-red-600" : "bg-gray-700"
                } hover:bg-red-700`}
              >
                {disliked ? "Disliked" : "Dislike"}
              </button>
              <button
                onClick={handleAddToWatchlist}
                className={`px-6 py-2 rounded-lg transition ${
                  inWatchlist ? "bg-blue-600" : "bg-gray-700"
                } hover:bg-blue-700`}
              >
                {inWatchlist ? "Added to Watchlist" : "Add to Watchlist"}
              </button>
            </div>

            {/* Anime Info */}
            <div className="mt-6 space-y-4">
              <h1 className="text-4xl font-bold text-red-500">{anime?.title || "Anime Title"}</h1>
              <p className="text-gray-300">{anime?.description || "Description not available."}</p>
              <p className="text-gray-300">
                Casts: {anime?.cast?.join(", ") || "Cast information not available."}
              </p>
            </div>

            {/* Comments Section */}
            <section className="mt-12">
              <h3 className="text-xl font-bold text-red-500 mb-6">Comments</h3>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-6">
                {/* New Comment Input */}
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write your comment..."
                  className="w-full bg-gray-800 p-4 rounded-lg text-white focus:outline-none focus:ring focus:ring-red-500"
                ></textarea>
                <button
                  onClick={handlePostComment}
                  className="w-full bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Post Comment
                </button>

                {/* Comments List */}
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <div key={comment.id} className="flex gap-4 items-start bg-gray-800 p-4 rounded-lg">
                      <div className="w-[40px] h-[40px] bg-gray-700 rounded-full"></div>
                      <div>
                        <p className="text-sm text-white">{comment.text}</p>
                        <span className="text-xs text-gray-400">{comment.time}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                )}
              </div>
            </section>
          </div>

          {/* Episodes & Seasons List */}
          <div className="space-y-8">
            {/* Episodes List */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-800">
              <h3 className="text-xl font-bold text-red-500 mb-4">Episodes</h3>
              {isLoading ? (
                <p className="text-gray-500">Loading episodes...</p>
              ) : (
                [...Array(anime?.noofepisodes || 0)].map((_, i) => (
                  <button
                    key={i}
                    className="w-full bg-gray-800 p-4 rounded-lg hover:bg-red-600 transition mb-2 flex items-center justify-between"
                    onClick={() => redirect(`/streaming/${animeId}/${seasonid}/${i+1}`)}
                  >
                  <span className={`font-bold ${+episodeid === i + 1 ? 'text-red-500' : 'text-white'}`}>
                    Episode {i + 1}
                  </span>

                  </button>
                ))
              )}
            </div>

            {/* Seasons List */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800">
              <h3 className="text-xl font-bold text-blue-500 mb-4"> Seasons</h3>
              {isLoading ? (
                <p className="text-gray-500">Loading seasons...</p>
              ) : (
                [...Array(anime?.noofseasons || 0)].map((_, i) => (
                  <button
                    key={i}
                    className="w-full bg-gray-800 p-4 rounded-lg hover:bg-blue-600 transition mb-2 flex items-center justify-between"
                    onClick={() => redirect(`/streaming/${anime.animeId}/${i+1}/1`)}
                  >
                    <span className={`text-white font-bold ${seasonid === i +1 ? 'text-red-800' : ''}`}>
                    Season {i + 1}
                  </span>
                    <span className="text-sm text-gray-400">View</span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
