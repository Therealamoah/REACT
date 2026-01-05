import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCartIcon, 
  MagnifyingGlassIcon, 
  Bars3Icon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

const Header = ({ cartItems, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      navigate('/products');
      setSearchTerm(''); 
    }
  };

  return (
    <header className="bg-green-700 text-white shadow-md fixed w-full top-0 z-50">
      {/* Main header bar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">
            ElectroMart
          </Link>

          {/* Desktop Navigation + Search */}
          <div className="hidden md:flex items-center space-x-6 flex-1 max-w-3xl mx-8">
            {/* Navigation */}
            <nav className="flex space-x-6">
              <Link to="/" className="hover:text-green-200 transition-colors">
                Home
              </Link>
              <Link to="/products" className="hover:text-green-200 transition-colors">
                Products
              </Link>
            </nav>

            {/* Search - centered */}
            <form 
              onSubmit={handleSearch} 
              className="flex-1 max-w-xl"
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-4 pr-12 py-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Cart + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon - always visible */}
            <Link to="/cart" className="relative p-2 hover:bg-green-800 rounded-full transition-colors">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold 
                               rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-green-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-800 border-t border-green-600">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-4 pr-12 py-2.5 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="py-2 hover:bg-green-700 px-3 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="py-2 hover:bg-green-700 px-3 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/cart" 
                className="py-2 hover:bg-green-700 px-3 rounded-md transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart 
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;