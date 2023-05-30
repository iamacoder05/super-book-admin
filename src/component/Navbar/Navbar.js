import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
          <input type='text' placeholder='Search...' />
        <SearchOutlinedIcon />
        </div>
      
    </div>
  )
}

export default Navbar
