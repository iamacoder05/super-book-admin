import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import PlayerTable from '../../component/PlayerTable/PlayerTable'
import './List.css';

const List = () => {
  return (
    <div className='list'>
        <Sidebar />
    <div className='list-container'>
        <Navbar />
        <PlayerTable />
      
    </div>
    </div>
  )
}

export default List
