import React from 'react'

const Contact = () => {
  return (
    <>
  {/* <!-- Contact Section --> */}
    <section className="py-20 bg-linear-to-br from-gray-100 to-gray-200 relative">
        <div className="w-[1000px] mx-auto px-6">
            {/* <!-- Wave Divider --> */}
            <div className="absolute top-0 left-0 w-full h-12 overflow-hidden">
                <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113.64,31.08,1200,56.86V0Z" fill="#ffffff"></path>
                </svg>
            </div>
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4 pt-12 tracking-tight">Get in Touch</h2>
            <p className="text-gray-600 text-center mb-12 w-[700px] mx-auto">
                A small river named Duden flows by, creating a serene setting for your inquiries.
            </p>
            <div className="flex gap-8">
                {/* <!-- Contact Form --> */}
                <div className="w-[500px]">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition-all duration-300">
                        <form>
                            <select className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                                <option value="">Select Inquiry Type</option>
                                <option value="appointment">Appointment</option>
                                <option value="billing">Billing</option>
                                <option value="general">General Inquiry</option>
                            </select>
                            <input type="text" placeholder="Name" className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>
                            <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>
                            <textarea placeholder="Message" className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"></textarea>
                            <button type="submit" className="w-full bg-linear-to-r from-indigo-600 to-blue-600 text-white p-3 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-md">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                {/* <!-- Contact Info --> */}
                <div className="w-[500px]">
                    <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <p className="mb-4 flex items-center">
                            <i className="fas fa-map-marker-alt mr-2 text-indigo-300"></i>
                            123 Duden Road, Dental City, DC 12345
                        </p>
                        <p className="mb-4 flex items-center">
                            <i className="fas fa-phone-alt mr-2 text-indigo-300"></i>
                            <a href="tel:+1234567890" className="hover:text-indigo-300 transition">+ (123) 456 7890</a>
                        </p>
                        <p className="mb-4 flex items-center">
                            <i className="fas fa-envelope mr-2 text-indigo-300"></i>
                            <a href="mailto:info@dentacare.com" className="hover:text-indigo-300 transition">info@dentacare.com</a>
                        </p>
                        <p className="mb-6 flex items-center">
                            <i className="fas fa-clock mr-2 text-indigo-300"></i>
                            Mon-Fri 9 AM - 5 PM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact