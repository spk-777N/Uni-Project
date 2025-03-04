import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import './Navbar.css'

function Navbar() {

    const navigate = useNavigate();

    return (
        <div className='main-nav-div'>
            <div className='site-logo'>
                <p onClick={() => navigate('/')}>Doctor Appointment Booking</p>
            </div>
            <div className='pages'>
                <ul className='pages-list'>
                    <li onClick={() => navigate('/')}>HOME</li>
                    <li onClick={() => navigate('/doctors')}>DOCTORS</li>
                    <li onClick={() => navigate('/about')}>ABOUT</li>
                    <li onClick={() => navigate('/contact')}>CONTACT</li>
                </ul>
            </div>
            <div className='sign-login'>
                <Button variant="contained" onClick={() => navigate('/login')}>Login</Button>
                <Button variant="contained" onClick={() => navigate('/sign-up')}>Sign Up</Button>
            </div>
        </div>
    )
}

export default Navbar
