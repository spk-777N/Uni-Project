import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import './Navbar.css'
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { DoctorContext } from '../../context/DoctorContext';

function Navbar() {

    const navigate = useNavigate();

    const { authHeader, setAuthHeader } = useContext(DoctorContext)

    const logout = () => {

        navigate('/')
        authHeader && setAuthHeader('')
        authHeader && localStorage.removeItem('authHeader')

    }

    return (
        <div className='main-nav-div'>
            <div className='dashboard-banner'>
                <img src={assets.admin_logo} alt='...' />
                <p>Doctor</p>
            </div>
            <Button onClick={() => logout()} variant="contained" >Logout</Button>
        </div>
    )
}

export default Navbar
