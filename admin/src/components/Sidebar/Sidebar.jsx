import { React, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets'
import './Sidebar.css'
import AddDoctors from '../../pages/Admin/AddDoctor/AddDoctors';
import { Fragment } from 'react';

const Sidebar = () => {


  // const { authHeader } = useContext(AddDoctors)

  const setActiveClass = () => {
    document.querySelectorAll(".nav-link").forEach(item => {
      item.addEventListener("click", event => {
        document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
        event.target.classList.add("active");
      });
    });
  };


  return (
    <div className='sidebar-div'>
      <div className='dashboard-list'>
        {
          // authHeader &&
          <Fragment>
            {/* <NavLink className='nav-link' onClick={() => { setActiveClass() }} to={'/admin-dashboard'}>
              <img src={assets.home_icon} alt='...' />
              <p>Dashboard</p>
            </NavLink> */}

            <NavLink className='nav-link' to={'/all-appointments'}>
              <img src={assets.appointment_icon} alt='...' />
              <p>Appointments</p>
            </NavLink>

            <NavLink className='nav-link' to={'/add-doctor'}>
              <img src={assets.add_icon} alt='...' />
              <p>Add Doctor</p>
            </NavLink>

            <NavLink className='nav-link' to={'/doctor-list'}>
              <img src={assets.people_icon} alt='...' />
              <p>Docters List</p>
            </NavLink>
          </Fragment>
        }
      </div>
    </div>
  )
}

export default Sidebar
