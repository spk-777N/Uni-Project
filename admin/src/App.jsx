import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Nav/Navbar';
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import AllAppointments from './pages/Admin/AllAppointments/AllAppointments';
import AddDoctors from './pages/Admin/AddDoctor/AddDoctors';
import DoctorsList from './pages/Admin/DoctorsList/DoctorsList';
import AdminContext from './context/AdminContext'
import './App.css'

import Sidebar from './components/Sidebar/Sidebar';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='app-div'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-doctor' element={<AddDoctors />} />
          <Route path='/doctor-list' element={<DoctorsList />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App