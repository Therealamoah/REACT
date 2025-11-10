import React from 'react'
import image from '../assets/1fashion.jpg'

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
                    <div className='p-3 flex items-center '>
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

      {/* Men collections */}
      {/* Bigger Screen */}
      <section>
        <div className='relative'>
            <img src={image} alt="Fashion Image" className='bg-cover bg-center w-full lg:h-140' />
        </div>
        <div className='hidden md:block lg:block place-self-center absolute top-32 left-10'>
            <h1 className='absolute top-30 m-10 text-white text-4xl font-bold leading-tight'>MEN COLLECTION</h1>
            <p className='absolute top-55 m-10 text-white text-3xl font-bold'>NEW ARRIVAL</p>
            <div className='pt-15'>
                <button className='absolute top-90 ml-8 mb-9 w-25 h-9 bg-blue-400 rounded-full font-semibold hover:text-white'>Shop Now</button>
            </div>
        </div>
        {/* Small Screen */}
        <div className='block md:hidden lg:hidden'>
            <h1 className='absolute top-16 m-10 text-white text-3xl font-bold'>MEN COLLECTION</h1>
            <p className='absolute top-40 m-10 text-white text-3xl font-bold'>NEW ARRIVAL</p>
            <div className='pt-15'>
                <button className='absolute top-65 ml-8 mb-9 w-25 h-9 bg-blue-400 rounded-full font-semibold hover:text-white'>Shop Now</button>
            </div>
        </div>

        {/* Small Screens */}
        
      </section>
      <div className='flex justify-center items-center flex-wrap gap-7  mt-10 cursor-pointer'>

        {/* Image 1 */}
        <div className='bg-white border border-gray-200 hover:opacity-50'>
            <p className='text-4xl m-3 font-bold'>WOMEN</p>
            <p className='text-1g m-3 font-medium'>Spring</p>
            <img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg" alt="Woman" className='w-90' />
        </div>

        {/* Image 2 */}

        <div className='bg-white border border-gray-200 hover:opacity-50'>
            <p className='text-4xl m-3 font-bold'>WOMEN</p>
            <p className='text-1g m-3 font-medium'>Spring</p>
            <img src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg" alt="Woman" className='w-90' />
        </div>

        {/* Image 3 */}

        <div className='bg-white border border-gray-200 hover:opacity-50'>
            <p className='text-4xl m-3 font-bold'>WOMEN</p>
            <p className='text-1g m-3 font-medium'>Spring</p>
            <img src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg" alt="Woman" className='w-90' />
        </div>
      </div>

      <div className='mt-10 md:mt-20 mx-4 sm:mx-10 md:mx-28'>
        <h1 className='flex text-2xl md:text-5xl lg:6xl font-bold place-self-center '>PRODUCT OVERVIEW</h1>
        <div className=''>
            <div className='container mx-auto grid grid-cols-2 sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-10 gap-6 place-items-center mt-6 lg:ml-70'>
                <a href="#" class="font-medium text-xl underline text-black hover:text-blue-500 "><span class="md:-ml-8 w-full">All Products</span></a>
               <a href="#" class="font-medium text-xl hover:underline text-black hover:text-blue-500">Women</a>
               <a href="#" class="font-medium text-xl hover:underline text-black hover:text-blue-500">Men</a>
               <a href="#" class="font-medium text-xl hover:underline text-black hover:text-blue-500">Bag</a>
               <a href="#" class="font-medium text-xl hover:underline text-black hover:text-blue-500">Shoes</a>
               <a href="#" class="font-medium text-xl hover:underline text-black hover:text-blue-500">Watches</a>

               {/* Button container */}
               <div className='flex space-x-4 -mt-4 lg:ml-76 md:ml-56'>
                
                {/* Filter  */}
                <button className='flex items-center ml-45 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-500 cursor-pointer'>
                    <i className="fa-solid fa-filter mr-2 "></i>
                    Filter</button>

                    {/* Search button */}
                <button className='flex items-center px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-500 cursor-pointer'>
                    <i className="fa-solid fa-arrow-down-wide-short mr-2 "></i>Search</button>
               </div>
            </div>

        </div>

      </div>
      <section className='p-5 '>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

            {/* Card 1 */}
            <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-01.jpg" alt="Product 1" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Esprit Ruffle Shirt</h2>
                    <p className='text-gray-500'>$16.64</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* Card 2 */}
              <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-02.jpg" alt="Product 2" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Herschel supply</h2>
                    <p className='text-gray-500'>$35.31</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* Card 3 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-03.jpg" alt="Product 3" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Only Check Trouser</h2>
                    <p className='text-gray-500'>$25.50</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* Card 4 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-04.jpg" alt="Product 4" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Classic Trench Coat</h2>
                    <p className='text-gray-500'>$75.00</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* Card 5 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-05.jpg" alt="Product 5" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Front Pocket Jumper</h2>
                    <p className='text-gray-500'>$34.75</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div> 

             {/*Card 6  */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-06.jpg" alt="Product 6" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Vintage Inspired Classic</h2>
                    <p className='text-gray-500'>$93.20</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* card 7 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-07.jpg" alt="Product 7" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Shirt in Stretch Cotton</h2>
                    <p className='text-gray-500'>$52.66</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* Card 8 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-08.jpg" alt="Product 8" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Pieces Metallic Printed</h2>
                    <p className='text-gray-500'>$18.96</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* card 9 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-09.jpg" alt="Product 9" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Converse All Star Hi Plimsolls</h2>
                    <p className='text-gray-500'>$75.00</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* Card 10 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-10.jpg" alt="Product 10" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Femme T-Shirt In Stripe</h2>
                    <p className='text-gray-500'>$25.85</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* card 11 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-11.jpg" alt="Product 11" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Pretty Little Thing</h2>
                    <p className='text-gray-500'>$54.79</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* card 12 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-12.jpg" alt="Product 12" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Mini Silver Mesh Watch</h2>
                    <p className='text-gray-500'>$86.85</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* Card 13 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-13.jpg" alt="Product 13" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Square Neck Back</h2>
                    <p className='text-gray-500'>$29.64</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* card 14 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-14.jpg" alt="Product 14" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Sleeve Linen Shirt</h2>
                    <p className='text-gray-500'>$39.75</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* Card 15 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-15.jpg" alt="Product 15" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Lightweight Jacket</h2>
                    <p className='text-gray-500'>$20.50</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

            {/* Card 16 */}
                <div className='border border-gray-200 hover:shadow-lg cursor-pointer'>
                <img src="https://preview.colorlib.com/theme/cozastore/images/product-16.jpg" alt="Product 16" className='w-full rounded-2xl' />
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>Classic White Shirt</h2>
                    <p className='text-gray-500'>$19.00</p>
                    <i className='far fa-heart text-gray-400 hover:text-red-500'></i>
                </div>
            </div>

        </div>
        
        <div className='p-14 flex justify-center'>
            <button className='ml-8 mb-12 w-52 h-12 bg-gray-800 text-white rounded-full font-semibold hover:text-white hover:scale-110'>Shop Now</button>

        </div>

       
        

      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-300 px-6 py-15'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
            {/* categories */}
            <div>
                <h2 className='text-lg font-bold mb-4'>CATEGORIES</h2>
                <ul className='space-y-2'>
                    <li><a href="#" className='hover:text-white'>Women</a></li>
                    <li><a href="#" className='hover:text-white'>Men</a></li>
                    <li><a href="#" className='hover:text-white'>Shoes</a></li>
                    <li><a href="#" className='hover:text-white'>Watches</a></li>
                </ul>
            </div>

            {/* Help */}
            <div>
                <h2 className='text-lg font-bold mb-4'>HELP</h2>
                <ul className='space-y-2'>
                    <li><a href="#" className='hover:text-white'>Track Order</a></li>
                    <li><a href="#" className='hover:text-white'>Returns</a></li>
                    <li><a href="#" className='hover:text-white'>Shipping</a></li>
                    <li><a href="#" className='hover:text-white'>FAQs</a></li>
                </ul>
            </div>

            {/* Get in Touch */}
            <div>
                <h2 className='text-lg font-bold mb-4'>GET IN TOUCH</h2>
                <p className='mb-4'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                <div className='flex space-x-4'>
                    <i className="fa-brands fa-facebook-f hover:text-white cursor-pointer"></i>
                    <i className="fa-brands fa-instagram hover:text-white cursor-pointer"></i>
                    <i className="fa-brands fa-pinterest-p hover:text-white cursor-pointer"></i>
                </div>
            </div>

            {/* Newsletter */}
            <div>
                <h2 className='text-lg font-bold mb-4'>NEWSLETTER</h2>
                <p className='mb-4'>Subscribe to our newsletter to get the latest updates and offers.</p>
                <form className='flex'>
                    <input type="email" placeholder="Enter Your Email Address" className='w-full p-2 rounded-l-md focus:outline-none' />
                    <button type="submit" className='bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600'>Subscribe</button>
                </form>
            </div>

        </div>

      </footer>


      

         
      
    </>
  )
}

export default Coza
