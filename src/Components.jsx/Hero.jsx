import React from 'react'

const Hero = () => {
  return (
    <div>
         <section className="bg-[url('/src/assets/Images/Dentistry.jpg')] pt-20 bg-cover bg-no-repeat relative pb-20">
            <div className="bg-linear-to-b from-blue-900/60 to to-black/50 absolute inset-0"></div>
             <div className="w-[1000px] mx-auto px-6 relative z-10">
                 <div className="text-white w-[700px]">
                     <h1 className="text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md">Modern Dentistry in a calm environment</h1>
                      <p className="text-lg text-gray-200">A small river named Duden flows by their place, providing a serene backdrop for your dental care.</p>
                        <button className="mt-8 bg-linear-to-r from bg-indigo-600 to blue-600 text-white px-8 py-3 rounded-full  shadow-lg">Book An Appointment</button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero