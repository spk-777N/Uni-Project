import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import './Navbar.css'
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';

function Navbar() {

    const navigate = useNavigate();

    const { authHeader, setAuthHeader } = useContext(AdminContext)

    const logout = () => {

        navigate('/')
        authHeader && setAuthHeader('')
        authHeader && localStorage.removeItem('authHeader')

    }

    return (
        // <div className='main-nav-div'>
        //     <div className='site-logo'>
        //         <p onClick={() => navigate('/')}>Doctor Appointment Booking</p>
        //     </div>
        //     <div className='pages'>
        //         <ul className='pages-list'>
        //             <li onClick={() => navigate('/')}>HOME</li>
        //             <li onClick={() => navigate('/doctors')}>DOCTORS</li>
        //             <li onClick={() => navigate('/about')}>ABOUT</li>
        //             <li onClick={() => navigate('/contact')}>CONTACT</li>
        //         </ul>
        //     </div>
        //     <div className='sign-login'>
        //         <Button variant="contained" onClick={() => navigate('/login')}>Login</Button>
        //         <Button variant="contained" onClick={() => navigate('/sign-up')}>Sign Up</Button>
        //     </div>
        // </div>
        <div className='main-nav-div'>
            <div className='dashboard-banner'>
                <img src={assets.admin_logo} alt='...' />
                <p>Admin</p>
            </div>
            <Button onClick={() => logout()} variant="contained" >Logout</Button>
        </div>
    )
}

export default Navbar
