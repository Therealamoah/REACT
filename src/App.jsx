import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Pages/Product'
import ShoppingCart from './Pages/ShoppingCart'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import ErrorPage from './Pages/ErrorPage'
import About from './Pages/About'
import Categories from './Pages/Categories'
import Features from './Pages/features'
import Cart from './Pages/Cart'
import Signup from './Pages/signup'



const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/about' element={<About />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/features' element={<Features />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<Signup />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
