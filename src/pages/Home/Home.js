import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
      {/* <h1 className='title'>
        Super Book
      </h1> */}
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        home container </div>
    </div>
  )
}

export default Home
