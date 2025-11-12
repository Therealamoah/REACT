import React from 'react'

const Blog = () => {
  return (
    <div>
        <section className="py-20 bg-white">
        <div className="w-[1000px] mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">Latest Blog Posts</h2>
            <p className="text-gray-600 text-center mb-12 w-[700px] mx-auto">
                Stay updated with our latest dental care tips and news.
            </p>
            <div className="flex gap-6">
                <div className="w-[333px] bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img src="src/assets/Images/checkup.jpg" alt="Blog 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Top 5 Tips for a Brighter Smile</h3>
                    <p className="text-gray-600 mb-4">Learn how to maintain a healthy and bright smile with these simple tips.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-all duration-300">Read More</a>
                </div>
                <div className="w-[333px] bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img src="src/assets/Images/teeth1.jpg" alt="Blog 2" className="w-full h-48 object-cover rounded-lg mb-4"/>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Benefits of Regular Checkups</h3>
                    <p className="text-gray-600 mb-4">Discover why regular dentist visits are crucial for oral health.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-all duration-300">Read More</a>
                </div>
                <div className="w-[333px] bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img src="src/assets/Images/Dentist.jpg" alt="Blog 3" className="w-full h-48 object-cover rounded-lg mb-4"/>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Understanding Dental Implants</h3>
                    <p className="text-gray-600 mb-4">Everything you need to know about dental implants.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-all duration-300">Read More</a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Blog