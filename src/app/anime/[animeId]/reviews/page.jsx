"use client";
import { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";
import Navbar from "@/Components/Navbar";
import {jwtDecode} from "jwt-decode";
import { Trash2 } from "lucide-react";


export function getUserFromToken(token) {
  try {
    const decoded = jwtDecode(token);
    return { userId: decoded.userId, email: decoded.email ,role: decoded.role}; // adjust fields based on your token structure
  } catch (err) {
    console.error("JWT Decode Error:", err);
    return null;
  }
}

const AnimeReviews = () => {
  const { animeId } = useParams();
  const [anime, setAnime] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mostLikedEpisode, setMostLikedEpisode] = useState(null); // New state for most liked episode
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
    const checkAuthStatus = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
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
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        console.log("Fetching anime details...");
        const animeRes = await fetch(`/api/anime/${animeId}`);
        const animeData = await animeRes.json();
        console.log("Anime details fetched:", animeData);
        setAnime(animeData);

        console.log("Fetching reviews...");
        const reviewsRes = await fetch(`/api/anime/${animeId}/reviews`);
        const reviewsData = await reviewsRes.json();
        console.log("Reviews fetched:", reviewsData);
        setReviews(reviewsData);

        // Fetch most liked episode details
        console.log("Fetching most liked episode...");
        const episodeRes = await fetch(`/api/anime/${animeId}/mostlikedepisode`);
        const episodeData = await episodeRes.json();
        console.log("Most liked episode fetched:", episodeData);
        setMostLikedEpisode(episodeData);
      } catch (error) {
        console.error("Error fetching anime details or reviews:", error);
      }
    };

    fetchAnimeDetails();
  }, [animeId]);

  const handleReviewSubmit = async () => {
    if (!newReview.trim() || rating <= 0) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`/api/anime/${animeId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
         }, 
        body: JSON.stringify({ reviewText: newReview, rating:rating, user:user }),
      });

      if (res.ok) {
        const newReviewData = await res.json();
        setReviews((prev) => [...prev, newReviewData]);
        setNewReview("");
        setRating(0);
      }
      else {
        alert("You must be logged in to post a review.");
      }
    } catch (error) {
      

      console.error("Error submitting review:", error);
    }
  };

  const formatList = (data) => {
    if (!Array.isArray(data)) return "Not available";
    return data
      .map((item) =>
        typeof item === "object"
          ? item.name || item.title || JSON.stringify(item)
          : item
      )
      .join(", ");
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {anime && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center blur-sm brightness-50 scale-105"
          style={{
            backgroundImage: `url(${anime.coverimage || anime.CoverImage})`,
          }}
        />
      )}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-20">
        <Navbar />

        {anime ? (
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img
                src={anime.coverimage || anime.CoverImage}
                alt={anime.title || anime.Title}
                className="w-64 h-96 object-cover rounded-xl shadow-2xl border-2 border-orange-500"
              />
              <div className="flex-1">
                <h1 className="text-4xl font-extrabold text-orange-400 mb-4">
                  {anime.title || anime.Title}
                </h1>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {anime.description || anime.Description}
                </p>

                <div className="space-y-2 text-sm text-gray-400">
                  <p>
                    <span className="text-orange-500 font-semibold">
                      Release Date:
                    </span>{" "}
                    {anime.releasedate || anime.ReleaseDate}
                  </p>
                  <p>
                    <span className="text-orange-500 font-semibold">
                      Episodes:
                    </span>{" "}
                    {anime.noofepisodes || anime.NoOfEpisodes}
                  </p>
                  <p>
                    <span className="text-orange-500 font-semibold">
                      Seasons:
                    </span>{" "}
                    {anime.noofseasons || anime.NoOfSeasons}
                  </p>
                  <p>
                    <span className="text-orange-500 font-semibold">
                      Studio:
                    </span>{" "}
                    {anime.studio || anime.Studio}
                  </p>
                  <p>
                    <span className="text-orange-500 font-semibold">
                      Avg Rating:
                    </span>{" "}
                    {anime.averagerating || anime.AverageRating}/10
                  </p>
                  <p>
                    <span className="text-orange-500 font-semibold">
                      Genres:
                    </span>{" "}
                    {formatList(anime.genres || anime.Genres)}
                  </p>
                  <p>
                    <span className="text-orange-500 font-semibold">
                      Languages:
                    </span>{" "}
                    {formatList(anime.languages || anime.Languages)}
                  </p>
                  <p>
                    <span className="text-orange-500 font-semibold">
                      Actors:
                    </span>{" "}
                    {formatList(anime.actors || anime.Actors)}
                  </p>
                  <p>
                    <span className="text-orange-500 font-semibold">
                      Subtitles:
                    </span>{" "}
                    {formatList(anime.subtitles || anime.Subtitles)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-900 transition"
                onClick={() => redirect(`/streaming/${animeId}/1/1`)}
              >
                🎬 Watch Now
              </button>
            </div>

            {/* Most Liked Episode Section */}
            {mostLikedEpisode && (
              <div className="mt-12 bg-gray-800/90 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-orange-300 mb-4">
                  Most Liked Episode
                </h3>
                <div className="space-y-2">
                  <p className="text-lg text-gray-200">
                    <strong>Episode Number:</strong> {mostLikedEpisode.episodenumber}
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong>Likes:</strong> {mostLikedEpisode.nooflikes}
                  </p>

                  <button
                    className="text-orange-500 hover:text-orange-700 transition-all mt-2"
                    onClick={() => redirect(`/streaming/${animeId}/1/${mostLikedEpisode.episodenumber}`)}
                  >
                    🎬 Watch Episode
                  </button>
                </div>
              </div>
            )}

            {/* Reviews Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-orange-300 mb-6">
                What fans are saying
              </h2>
              {reviews.length > 0 ? (
                  <div className="space-y-5">
                    {reviews.map((review) => (
                      <div
                        key={review.reviewid}
                        className="bg-gradient-to-br from-gray-800 to-gray-700 p-5 rounded-2xl shadow-md border-l-4 border-orange-400 relative"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-gray-200 whitespace-pre-wrap">{review.reviewtext}</p>
                            <p className="text-xs text-orange-300 mt-2 font-semibold">
                              Rating: <span className="text-white">{review.rating}/10</span>
                            </p>
                            <p className="text-xs text-gray-400 mt-1 italic">
                              By <span className="font-medium text-orange-200">{review.username}</span> •{" "}
                              {new Date(review.timestamp).toLocaleString()}
                            </p>
                          </div>
                          {role === "admin" && (
                            <button
                              className="text-red-500 hover:text-red-700 transition duration-200"
                              onClick={async () => {
                                const token = localStorage.getItem("token");
                                try {
                                  const res = await fetch(
                                    `/api/anime/${animeId}/reviews/${review.reviewid}`,
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
                                  const gotReviews = await fetch(`/api/anime/${animeId}/reviews`);
                                  const commentData = await gotReviews.json();
                                  setReviews(commentData);
                                } catch (err) {
                                  console.error("Delete error:", err);
                                  alert("Failed to delete comment.");
                                }
                              }}
                              title="Delete Review"
                            >
                              <Trash2 size={18} />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm text-center mt-4">
                    No reviews yet. Be the first to share your thoughts!
                  </p>
                )}
            </div>

            {/* Add Review */}
            <div className="mt-12 bg-gray-900/80 p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-orange-300 mb-4">
                Leave a Review
              </h3>
              <textarea
                className="w-full h-24 bg-gray-800 text-white p-4 rounded-lg shadow-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your thoughts..."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              />
              <div className="mt-4 flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer transition-all ${
                    rating <= 3
                      ? "bg-red-500"
                      : rating <= 7
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                />
                <span
                  className={`text-lg font-bold ${
                    rating <= 3
                      ? "text-red-500"
                      : rating <= 7
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {rating}
                </span>
              </div>
              <button
                onClick={handleReviewSubmit}
                className="mt-6 bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg"
              >
                Submit Review
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400 pt-10 text-lg">
            Loading anime details...
          </p>
        )}
      </div>
    </div>
  );
};

export default AnimeReviews;
