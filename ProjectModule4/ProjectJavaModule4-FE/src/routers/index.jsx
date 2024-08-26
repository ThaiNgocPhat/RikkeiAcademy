import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Facilities from '../pages/Facilities/Facilities' 

export default function index() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/facilities" element={<Facilities />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}
