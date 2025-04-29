import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Nav/Navbar';
import DoctorDashboard from './pages/Doctor/DoctorDashboard/DoctorDashboard'
import DoctorAppointments from './pages/Doctor/DoctorAppointments/DoctorAppointments'
import DoctorProfile from './pages/Doctor/DoctorProfile/DoctorProfile'
import Login from './pages/Login/Login'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';
import { Fragment } from 'react';
import { DoctorContext } from './context/DoctorContext';

const App = () => {

  const { authHeader } = useContext(DoctorContext)

  //   return authHeader ? (
  //     <BrowserRouter>
  //       <Navbar />
  //       <div className='app-div'>
  //         <Sidebar />
  //         <Routes>
  //            <Route path='/' element={<></>} />
  //            <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
  //            <Route path='/doctor-appointments' element={<DoctorAppointments />} />
  //            <Route path='/doctor-profile' element={<DoctorProfile />} />
  //         </Routes>
  //       </div>

  //     </BrowserRouter>
  //   ) : (
  //     <BrowserRouter>
  //       <>
  //         <Login />
  //         <ToastContainer />
  //       </>
  //     </BrowserRouter>
  //   )
  // }

  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <div className='app-div'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
          <Route path='/doctor-appointments' element={<DoctorAppointments />} />
          <Route path='/doctor-profile' element={<DoctorProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App