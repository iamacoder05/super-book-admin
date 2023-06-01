import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import './Home.css';
import Navbar from '../../component/Navbar/Navbar';
import Widget from '../../component/Widget/Widget';
const Home = () => {
  return (
    <div className='home'>

      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
       <div className='widget'>
        <Widget />
       </div>
        </div>
    </div>
  )
}

export default Home
