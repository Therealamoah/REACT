import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* <!-- Footer Section --> */}
    <footer className="bg-blue-900 text-white relative">
        {/* <!-- Wave Divider --> */}
        <div className="absolute top-0 left-0 w-full h-12 overflow-hidden">
            <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113.64,31.08,1200,56.86V0Z" fill="#f3f4f6"></path>
            </svg>
        </div>
        <div className="w-[1000px] mx-auto px-6 py-12">
            <div className="flex gap-6">
                <div className="w-[250px]">
                    <h3 className="text-lg font-semibold mb-4 text-indigo-300">DentaCare</h3>
                    <p className="text-gray-300 text-sm">A small river named Duden flows by, offering a serene dental experience.</p>
                </div>
                <div className="w-[250px]">
                    <h3 className="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300">Home</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300">About</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300">Services</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300">Doctors</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300">Blog</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300">Contact</a></li>
                    </ul>
                </div>
                <div className="w-[250px]">
                    <h3 className="text-lg font-semibold mb-4 text-indigo-300">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300">Teeth Whitening</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300">Teeth Cleaning</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300">Quality Brackets</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300">Dental Implants</a></li>
                    </ul>
                </div>
                <div className="w-[250px]">
                    <h3 className="text-lg font-semibold mb-4 text-indigo-300">Contact Us</h3>
                    <p className="text-gray-300 text-sm flex items-center">
                        <i className="fas fa-map-marker-alt mr-2 text-indigo-300"></i>
                        123 Duden Road, Dental City, DC 12345
                    </p>
                    <p className="text-gray-300 text-sm flex items-center">
                        <i className="fas fa-phone-alt mr-2 text-indigo-300"></i>
                        <a href="tel:+1234567890" className="hover:text-indigo-400 transition">+ (123) 456 7890</a>
                    </p>
                    <p className="text-gray-300 text-sm flex items-center">
                        <i className="fas fa-envelope mr-2 text-indigo-300"></i>
                        <a href="mailto:info@dentacare.com" className="hover:text-indigo-400 transition">info@dentacare.com</a>
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300"><i className="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300"><i className="fab fa-twitter fa-lg"></i></a>
                        <a href="#" className="text-gray-300 hover:text-indigo-400 transition-all duration-300"><i className="fab fa-instagram fa-lg"></i></a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 text-gray-300 text-sm">
                <p>© 2025 DentaCare. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer