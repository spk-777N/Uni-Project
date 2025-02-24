import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login"
import Sign_up from './pages/Sign-up/Sign_up';
import Home from './pages/Home/Home'
import Doctors from './pages/Doctors/Doctors';
import Navbar from './components/Nav/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Sign_up />} />
        <Route path="/login" element={<Login />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:' element={<Doctors />} />
        <Route path="/google" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
