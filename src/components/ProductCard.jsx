import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-4/5 sm:aspect-3/4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500"
        />

        {/* Optional discount badge */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[2.8rem]">
          {product.name}
        </h3>

        <div className="mt-auto">
          <p className="text-xl font-bold text-green-700 mb-3">
            ${product.price.toFixed(2)}
          </p>

          <Link
            to={`/product/${product.id}`}
            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-colors duration-200 text-sm sm:text-base"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;