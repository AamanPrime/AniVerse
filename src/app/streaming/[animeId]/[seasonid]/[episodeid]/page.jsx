"use client";

import { useState, useEffect } from "react";
import { redirect, useParams } from "next/navigation";
import Navbar from "@/Components/Navbar";

import {jwtDecode} from "jwt-decode";

function getUserFromToken(token) {
  try {
    const decoded = jwtDecode(token);
    return { userId: decoded.userId, email: decoded.email ,role: decoded.role}; // adjust fields based on your token structure
  } catch (err) {
    console.error("JWT Decode Error:", err);
    return null;
  }
}

export default function AnimeStreamingPage() {
  const { animeId, seasonid, episodeid } = useParams();

  const [anime, setAnime] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [inWatchlist, setInWatchlist] = useState(false);

  const [role, setRole] = useState("");

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        setRole(decoded.role); // assuming role is part of the token
      }
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  }, []);


  useEffect(() => {
    const fetchAnime = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/anime/${animeId}`);
        const data = await res.json();
        setAnime(data);
        
        const gotComments = await fetch(`/api/addcomment/${animeId}/${seasonid}/${episodeid}`);
        const commentData = await gotComments.json();
        console.log(commentData)
        setComments(commentData);

        const token = localStorage.getItem("token");

        if (token) {
          console.log(seasonid);
          console.log(episodeid);
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

const handlePostComment = async () => {
  if (!newComment.trim()) return;

  const token = localStorage.getItem("token");
  if (!token) return alert("You must be logged in to comment.");

  try {
    const res = await fetch(`/api/addcomment/${animeId}/${seasonid}/${episodeid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ commentText: newComment }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Failed to post comment");
    const gotComments = await fetch(`/api/addcomment/${animeId}/${seasonid}/${episodeid}`);
    const commentData = await gotComments.json();
    console.log(commentData)
    setComments(commentData);
  } catch (err) {
    console.error("Comment Error:", err);
    alert("Failed to post comment.");
  }
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
                {comments?.length > 0 ? (
                  comments.map((comment) => (
                    <div
                      key={comment.commentid}
                      className="flex gap-4 items-start bg-[#1f1f1f] p-4 rounded-2xl shadow-md border border-gray-700 hover:shadow-lg transition"
                    >
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                        {comment.username.charAt(0).toUpperCase()}
                      </div>

                      {/* Comment */}
                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex justify-between items-center text-gray-400 text-xs">
                          <span>{comment.timestamp.split("T")[0]}</span>
                          <span>{comment.timestamp.split("T")[1].split(".")[0]}</span>
                        </div>

                        <p className="text-white text-sm leading-relaxed">
                          {comment.commenttext}
                        </p>

                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-xs italic">
                            — {comment.username}
                          </span>

                          {role === "admin" && (
                            <button
                              onClick={async () => {
                                const token = localStorage.getItem("token");
                                try {
                                  const res = await fetch(
                                    `/api/addcomment/${animeId}/${seasonid}/${episodeid}/${comment.commentid}`,
                                    {
                                      method: "DELETE",
                                      headers: {
                                        Authorization: `Bearer ${token}`,
                                      },
                                    }
                                  );
                                  const data = await res.json();
                                  if (!res.ok) throw new Error(data.error || "Failed to delete comment");

                                  // Refresh comments
                                  const gotComments = await fetch(`/api/addcomment/${animeId}/${seasonid}/${episodeid}`);
                                  const commentData = await gotComments.json();
                                  setComments(commentData);
                                } catch (err) {
                                  console.error("Delete error:", err);
                                  alert("Failed to delete comment.");
                                }
                              }}
                              className="text-xs text-red-400 hover:text-red-600 underline ml-4"
                            >
                              Delete
                            </button>
                          )}
                        </div>
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
                [...Array(anime?.noofepisodes || 0)]
                  .slice(0, 3)
                  .map((_, i) => (
                    <button
                      key={i}
                      className="w-full bg-gray-800 p-4 rounded-lg hover:bg-red-600 transition mb-2 flex items-center justify-between"
                      onClick={() => redirect(`/streaming/${animeId}/${seasonid}/${i + 1}`)}
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
