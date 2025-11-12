import React from 'react'

const Feed = () => {
  return (
    <div>
        <section className="py-20 bg-gray-100">
        <div className="w-[1000px] mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">What Our Patients Say</h2>
            <p className="text-gray-600 text-center mb-12 w-[700px] mx-auto">
                A small river named Duden flows by their place, offering a serene dental experience.
            </p>
            <div className="flex gap-6">
                <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
                    <p className="text-gray-600 mb-4">"The best dental experience! The staff is friendly and the environment is so calming."</p>
                    <p className="font-semibold text-gray-800">David</p>
                </div>
                <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
                    <p className="text-gray-600 mb-4">"I was nervous, but the team made me feel so comfortable. Highly recommend!"</p>
                    <p className="font-semibold text-gray-800">Jawrell</p>
                </div>
                <div className="w-[333px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
                    <p className="text-gray-600 mb-4">"Professional and efficient. My teeth have never looked better!"</p>
                    <p className="font-semibold text-gray-800">Sandra</p>
                </div>
            </div>
        </div>
    </section>
        
    </div>
  )
}

export default Feed