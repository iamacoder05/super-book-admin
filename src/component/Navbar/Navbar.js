import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
        <SearchOutlinedIcon />
        </div>
        <div className='items'>
          <div className='item'>
          <ListOutlinedIcon className='icon' />
          </div>
          <div className='item'>
          <NotificationsNoneIcon className='icon'/>
          <div className='counter'>1</div>
          </div>
          <div className='item'>
          <ExitToAppOutlinedIcon className='icon'/>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
