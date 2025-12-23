import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
   return (
      <div className='hidden lg:block border-b'>
         <div className='container mx-auto px-4 py-4 flex items-center gap-8 '>
            <div className='flex items-center gap-3'>
               <img src="src/Images/ChatGPT Image Dec 1, 2025, 04_43_01 PM.png" alt="Swift Mart Logo" class="w-16 h-12 object-contain"></img>
               <NavLink to="/" className="text-2xl font-bold text-green-600 hover:text-green-900">Wonder Mart</NavLink>
            </div>

            <div className='flex place-self-center space-x-8'>
               <NavLink to="/categories" className="font-medium text-green-600 hover:text-green-700">Shop By Categories</NavLink>
               <NavLink to="/Features" className="font-medium text-green-600 hover:text-green-700">Deals</NavLink>
            </div>

            <div className='ml-auto flex items-center gap-6'>
               <NavLink to="/cart" className="relative font-medium hover:text-green-600">
                <i className="fa-solid fa-basket-shopping"></i>
                <span className="cart-badge absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
               </NavLink>

               {/* add signup */}
               <NavLink to="/signup" className="font-medium hover:text-green-600">
               <i class="fa-solid fa-user"></i>
               
               </NavLink>

               
            </div>

         </div>
         
         
         
      </div>
   )
}

export default NavBar