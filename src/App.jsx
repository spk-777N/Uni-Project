import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login"
import Sign_up from './pages/Sign-up/Sign_up';
import Home from './pages/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Sign_up />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
