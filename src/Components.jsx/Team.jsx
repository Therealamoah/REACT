import React from 'react'

const Team = () => {
  return (
    <div>
        <section className="py-20 bg-linear-to-b from-gray-50 to-white">
        <div className="w-[1000px] mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">Meet Our Expert Team</h2>
            <div className="flex gap-6">
                <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                    <img src="src/assets/Images/doctor1.jpg" alt="Doctor 1" className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Malik Osman</h3>
                        <p className="text-gray-600">Dentist</p>
                    </div>
                </div>
                <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                    <img src="src/assets/Images/doctor2.jpg" alt="Doctor 2" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Sampson</h3>
                        <p className="text-gray-600">Dentist</p>
                    </div>
                </div>
                <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                    <img src="src/assets/Images/Doctor3.jpg" alt="Doctor 3" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">James</h3>
                        <p className="text-gray-600">Dentist</p>
                    </div>
                </div>
                <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                    <img src="src/assets/Images/doctor4.jpg" alt="Doctor 4" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Mr.Amoah</h3>
                        <p className="text-gray-600">Dentist</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Team