import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products as allProducts } from '../data/products';
import Footer from '../components/Footer';

const Products = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high', 'name'

  useEffect(() => {
    // Small delay to simulate loading (you can remove in production)
    const timer = setTimeout(() => setIsLoading(false), 800);

    // Filter + Sort
    let result = [...allProducts];

    // Filter by search term
    if (searchTerm?.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // keep original order or you can add featured/popular logic
        break;
    }

    setFilteredProducts(result);

    return () => clearTimeout(timer);
  }, [searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mt-9 mx-auto px-4 py-8 md:py-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              All Products
            </h1>
            <p className="text-gray-600 mt-2">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-gray-700 font-medium">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="default">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="flex items-center gap-3 text-green-600">
              <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-lg font-medium">Loading products...</span>
            </div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              No products found
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;