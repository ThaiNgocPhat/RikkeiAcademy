import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Facilities from '../pages/Facilities/Facilities' 
import Rooms from '../pages/Rooms/Rooms'

export default function index() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/rooms" element={<Rooms />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}
