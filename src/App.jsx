import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ErrorPage from './ErrorPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path ='*' element={<ErrorPage/>}></Route>

    </Routes>
    </BrowserRouter>
    {/* <Home />
    <About />
    <Contact /> */}

    </>
  )
}

export default App