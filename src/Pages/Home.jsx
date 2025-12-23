import React from 'react'

const Home = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center text-white py-28"
        style={{ backgroundImage: "url('src/Images/img2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-950/50"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Fresh Groceries, Delivered Fast
          </h1>

          <p className="text-lg mb-8">
            Your favorite local grocery store, now online. Quality and convenience at your fingertips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto text-white">
            <input
              type="text"
              id="hero-search"
              placeholder="Search for bananas, milk, chicken..."
              className="w-full px-6 py-4 text-white text-lg rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500 transition"
              autoComplete="off"
            />

            <button
              id="hero-search-btn"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-xl transition flex items-center gap-3 shadow-lg"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
