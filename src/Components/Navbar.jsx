


function Navbar() {
  return (
    <header className="bg-blue-400 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">Mycrude</div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-700 hover:text-black">Home</a>
            <a href="#" className="text-gray-700 hover:text-black">Shop</a>
            <a href="#" className="text-gray-700 hover:text-black">About</a>
            <a  className="text-gray-700 hover:text-blue-500">Cart </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
