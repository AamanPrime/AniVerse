"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/Components/Navbar";

const AnimeReviews = () => {
  const { animeId } = useParams();
  const [anime, setAnime] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

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
      } catch (error) {
        console.error("Error fetching anime details or reviews:", error);
      }
    };

    fetchAnimeDetails();
  }, [animeId]);

  const handleReviewSubmit = async () => {
    if (!newReview.trim() || rating <= 0) return;

    try {
      const res = await fetch(`/api/anime/${animeId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewText: newReview, rating }),
      });

      if (res.ok) {
        const newReviewData = await res.json();
        setReviews((prev) => [...prev, newReviewData]);
        setNewReview("");
        setRating(0);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      {anime ? (
        <div className="max-w-5xl mx-auto p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={anime.coverImage}
              alt={anime.title}
              className="w-64 h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4 text-red-500">{anime.title}</h1>
              <p className="text-gray-300 mb-4">{anime.description}</p>
              <ul className="text-gray-400 space-y-2">
                <li><strong>Release Date:</strong> {anime.releaseDate}</li>
                <li><strong>Number of Episodes:</strong> {anime.noOfEpisodes}</li>
                <li><strong>Number of Seasons:</strong> {anime.noOfSeasons}</li>
                <li><strong>Studio:</strong> {anime.studio}</li>
                <li><strong>Average Rating:</strong> {anime.averageRating}/10</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Reviews</h2>
            {reviews.length > 0 ? (
              <ul className="space-y-4">
                {reviews.map((review) => (
                  <li key={review.reviewId} className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <p className="text-sm text-gray-300">{review.reviewText}</p>
                    <p className="text-sm text-gray-400 mt-2">Rating: {review.rating}/10</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No reviews yet. Be the first to review!</p>
            )}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4 text-red-500">Add Your Review</h3>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4 shadow-md"
              placeholder="Write your review..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                  rating <= 3
                    ? 'bg-red-500'
                    : rating <= 7
                    ? 'bg-yellow-500'
                    : 'bg-green-500'
                }`}
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              />
              <span className={`font-bold text-lg ${
                rating <= 3
                  ? 'text-red-500'
                  : rating <= 7
                  ? 'text-yellow-500'
                  : 'text-green-500'
              }`}>{rating}</span>
            </div>
            <button
              onClick={handleReviewSubmit}
              className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition"
            >
              Submit Review
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400">Loading anime details...</p>
      )}
    </div>
  );
};

export default AnimeReviews;