const CategoryCard = ({ title, image, link }) => {
    return (
      <a href={link} className="block">
        <div className="bg-gray-800 rounded-lg p-2 overflow-hidden relative hover:opacity-80">
          <img src={image} alt={title} className="w-full h-50 object-cover opacity-80" />
          <h3 className="absolute bottom-2 left-2 text-white font-bold">{title}</h3>
        </div>
      </a>
    );
  };

export default CategoryCard;