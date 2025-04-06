
export default function MovieDescription({ anime }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={anime.coverimage}
        alt={anime.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{anime.title}</h2>
      <p className="text-sm text-gray-300 line-clamp-3">{anime.description}</p>
      <div className="text-sm text-gray-400 mt-2">
        <p><span className="font-semibold">Studio:</span> {anime.studio}</p>
        <p><span className="font-semibold">Release:</span> {anime.releasedate}</p>
        <p><span className="font-semibold">Rating:</span> {anime.averagerating}/10</p>
      </div>
    </div>
  );
}
