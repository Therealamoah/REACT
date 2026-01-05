import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen relative bg-gray-900 text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/02/97/30/07/360_F_297300732_pfJHla4gl5vCCUzQMHpovN7MokCWbfzG.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 lg:pt-40 lg:pb-60">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-2xl">
              Welcome to ElectroMart
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-lg">
              Explore cutting-edge technology • Premium quality • Great prices
            </p>
            <Link
              to="/products"
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-12 py-5 rounded-full 
                       transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Shop Now →
            </Link>
          </div>
        </section>

        {/* Featured Products - White section for better contrast */}
        <section className="py-16 md:py-20 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured Products
              </h2>
              <Link
                to="/products"
                className="text-green-600 hover:text-green-800 font-medium flex items-center gap-2 hover:underline"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
                >
                  <div className="aspect-[4/4] bg-gray-50 flex items-center justify-center p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full w-auto object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-12 text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-green-700 font-bold text-xl">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promo Banner */}
        <section className="bg-gradient-to-r from-green-700 to-teal-700 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
              Special Offer This Week!
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Up to <span className="font-extrabold text-yellow-300">30% OFF</span> on selected electronics
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-green-800 font-bold px-12 py-5 rounded-full 
                       hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Shop Deals Now
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;