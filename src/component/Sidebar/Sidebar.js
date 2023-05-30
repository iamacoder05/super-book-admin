import React from 'react'
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className="logo">Admin</span>
        </div>
        <hr/>
      <div className='center'>
        <ul>
          <p className='title'>Main</p>
            <li>
              <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className='title'>Lists</p>
            <li>
              <PersonOutlineIcon className='icon'/>
                <span>Players</span>
            </li>
            <p className='title'>User</p>
            <li>
              <AccountCircleOutlinedIcon className='icon'/>
                <span>Profile</span>
                </li>
                <li>
              <ExitToAppOutlinedIcon className='icon' />
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className='bottom'>color options</div>
    </div>
  )
}

export default Sidebar
