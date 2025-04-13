const CategoryCard = ({ title, image, link }) => {
  return (
    <a
      href={link}
      className="block group transition-transform transform hover:scale-105"
    >
      <div className="relative rounded-xl overflow-hidden shadow-lg h-60 bg-gray-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:opacity-85 transition duration-300"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

        {/* Title */}
        <div className="absolute bottom-2 left-2 right-2 text-white font-semibold text-lg z-10">
          {title}
        </div>
      </div>
    </a>
  );
};

export default CategoryCard;