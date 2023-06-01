import React from 'react';
import './Widget.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const widget = () => {
    return (
        <div className='widgets' >
            <div className='left' >
                <span className='title' >TOTAL REGISTERED USERS</span>
                <span className='counter' >100</span>
                <span className='link' >See all user</span>


            </div>
            <div className='right' >
            <PersonOutlineIcon className='icon' />
            </div>
            
        </div>
    )
}

export default widget;