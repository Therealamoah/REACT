import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>HOME PAGE</h1>
    <Link to='/about'>Go to About Page</Link><br/>
    </>
  )
}

export default Home