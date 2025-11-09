import React from 'react'

export const Coza = () => {
  return (
    <>
    {/* Nav Bar */}
    <header>
        <nav className='bg-gray-800 text-white'>
            {/* Desktop screen and bigger screens */}
            <div className='hidden md:block lg:block'>
                <div className='flex justify-between items-center'>
                    {/* colorib */}
                    <div className='p-3 flex items-center'>
                        <p className='text-4xl'>Colorlib</p>
                        <p className='pl-5 text-md flex bg-green-900 text-gray-400'>+ COZA STORE</p>
                    </div>
                    {/* Icons */}
                    <div className='flex space-x-5 mr-10 text-gray-400 cursor-pointer'>
                        <p className='flex'><i className='fa-solid fa-desktop text-3xl border-r-2 p-2'></i></p>
                        <p className="flex"><i class="fa-solid fa-tablet-screen-button text-3xl p-2"></i></p>
                        <p className="flex"><i class="fa-solid fa-mobile-screen text-3xl p-2"></i></p>
                        <p><i className="fa-solid fa-cart-shopping text-3xl bg-green-900 p-2"></i></p>
                         <p><i className="fa-solid fa-xmark text-3xl p-2"></i></p>
                    </div>
                </div>

            </div>
            {/* Desktop Screen and bigger Screens */}
        </nav>
    </header>

    {/* Hero Page */}
    <section className='bg-gray-900 hidden lg:flex'>
        <div className='lg:flex lg:space-x-120 text-gray-200 p-3'>
            {/* items */}
        <div className="flex pl-20">
            <p>Free shipping for standard order over $100</p>
        </div>
         {/* links  */}
        <div className="flex space-x-10 ">
            <a href="#" className="">Help & FAQs</a>
            <a href="#">My Account</a>
            <a href="#">EN</a>
            <a href="#">USD</a>
        </div>
        </div>
    </section>
     {/* section */}
      <section>
        <div className="flex items-center justify-between p-2">
             {/* store  */}
            <div className="lg:pl-20 md:pl-5 ">
                <p className="text-2xl"><strong>COZA</strong> STORE</p>
            </div>
            {/* links */}
            <div className="space-x-10 pr-30 hidden lg:flex">
                <a href="#" className="text-blue-500 hover:text-blue-400">Home</a>
                <a href="#" className="font-medium hover:text-blue-500 hover:underline">Shop</a>
                <a href="#" className="font-medium hover:text-blue-500 hover:underline">Features</a>
                <a href="#" className="font-medium hover:text-blue-500 hover:underline">Blog</a>
                <a href="#" className="font-medium hover:text-blue-500 hover:underline">About</a>
                <a href="#" className="font-medium hover:text-blue-500 hover:underline">contact</a>
            </div>
            {/* icons  */}
            <div className="lg:space-x-10 md:space-x-6 space-x-3 lg:mr-50 md:mr-20">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping text-xl p-2"></i>
                <i className="fa-regular fa-heart"></i>
            </div>
        </div>
      </section>
      
    </>
  )
}

export default Coza
