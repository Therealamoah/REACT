import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import Footer from '../components/Footer';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = products.find(p => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto pt-24 pb-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
        <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-square sm:aspect-[4/5] bg-gray-50 flex items-center justify-center p-6">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl md:text-4xl font-bold text-green-700">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity Selector + Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 text-lg font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onAddToCart({ ...product, quantity })}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-lg shadow-md"
                >
                  Add to Cart
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium text-gray-800">Category:</span> Electronics
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">In Stock:</span> Yes
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Shipping:</span> Free
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Returns:</span> 30 days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;