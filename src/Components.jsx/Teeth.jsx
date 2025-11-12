import React from 'react'

const Teeth = () => {
  return (
    <div>
        <section className="py-16 bg-white">
        <div className="w-[1000px] mx-auto px-6">
            <div className="flex gap-6 text-center">
                <div className="w-[250px] bg-linear-to-b from-gray-50 to-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <i className="fas fa-tooth text-4xl text-indigo-600 mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-800">Teeth Whitening</h3>
                </div>
                <div className="w-[250px] bg-linear-to-b from-gray-50 to-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <i className="fas fa-teeth-open text-4xl text-indigo-600 mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-800">Teeth Cleaning</h3>
                </div>
                <div className="w-[250px] bg-linear-to-b from-gray-50 to-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <i className="fas fa-ruler-combined text-4xl text-indigo-600 mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-800">Quality Brackets</h3>
                </div>
                <div className="w-[250px] bg-linear-to-b from-gray-50 to-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <i className="fas fa-tooth text-4xl text-indigo-600 mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-800">Dental Implants</h3>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Teeth