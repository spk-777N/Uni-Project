import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login"
import Forgot_password from './pages/Forget-password/Forgot_password';
import Sign_up from './pages/Sign-up/Sign_up';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forgot-password" element={<Forgot_password />} />
        <Route path="/sign-up" element={<Sign_up />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
