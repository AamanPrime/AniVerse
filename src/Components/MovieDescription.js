export default function MovieDescription({ anime }) {
  if (!anime) return null;

  // Genre-to-color mapping
  const genreColors = {
    Action: "bg-red-600",
    Adventure: "bg-yellow-600",
    Fantasy: "bg-purple-600",
    Comedy: "bg-green-600",
    Horror: "bg-gray-700",
    Drama: "bg-pink-500",
    SciFi: "bg-blue-500",
    Animation: "bg-indigo-500",
    Romance: "bg-rose-500",
    Thriller: "bg-teal-500",
    Mystery: "bg-fuchsia-600",
    Supernatural: "bg-emerald-600",
    Default: "bg-slate-500",
  };

  // Safely parse genres
  let genres = [];
  try {
    if (typeof anime.genres === "string") {
      genres = JSON.parse(anime.genres);
    } else if (Array.isArray(anime.genres)) {
      genres = anime.genres;
    }
  } catch (error) {
    console.error("Failed to parse genres:", error);
  }

  return (
    <div className="w-full h-[26rem] [perspective:1000px] group">
      <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <img
            src={anime.coverimage}
            alt={anime.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-4 text-gray-100 flex flex-col justify-between border border-white/10">
          <div>
            <h2 className="text-lg font-bold mb-2 text-center">
              {anime.title}
            </h2>
            <p className="text-sm mb-2 line-clamp-4 text-center">
              {anime.description}
            </p>

            {/* Genre Badges */}
            {genres.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 my-3">
                {genres.map((genre) => {
                  const colorClass =
                    genreColors[genre.name] || genreColors.Default;
                  return (
                    <span
                      key={genre.id}
                      className={`text-xs px-3 py-1 rounded-full ${colorClass} text-white shadow font-medium`}
                    >
                      {genre.name}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* Anime Info */}
          <div className="text-sm text-gray-300 space-y-1 mb-3 text-center">
            <p>
              <span className="font-semibold">Studio:</span> {anime.studio}
            </p>
            <p>
              <span className="font-semibold">Release:</span>{" "}
              {anime.releasedate}
            </p>
            <p>
              <span className="font-semibold">Rating:</span>{" "}
              {anime.averagerating}/10
            </p>
          </div>

          {/* Watch Button */}
          <div className="flex justify-center">
            <a
              href={`/anime/${anime.animeid}/reviews`}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300"
            >
              ▶ Watch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}