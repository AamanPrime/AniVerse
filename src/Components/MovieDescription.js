export default function MovieDescription({ anime }) {
  if (!anime) return null;

  return (
    <div className="w-64 h-96 perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
        
        
        <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <img
            src={anime.coverimage}
            alt={anime.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-800 rounded-xl shadow-lg p-4 text-gray-200 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold mb-2 text-center">{anime.title}</h2>
            <p className="text-sm mb-2 line-clamp-4 text-center">{anime.description}</p>
          </div>
          <div className="text-sm text-gray-400 space-y-1">
            <p><span className="font-semibold">Studio:</span> {anime.studio}</p>
            <p><span className="font-semibold">Release:</span> {anime.releasedate}</p>
            <p><span className="font-semibold">Rating:</span> {anime.averagerating}/10</p>
          </div>
        </div>

      </div>
    </div>
  );
}
