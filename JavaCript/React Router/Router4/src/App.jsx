import React, { Profiler } from 'react'
import './App.css'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Event from './components/Event'
import Login from './components/Login'
import Resgister from './components/Register'
import Profile from './components/Profile'

export default function App() {
  return (
    <>
      <Contact /> 
      <Dashboard />
      <Event/>
      <Login/>
      <Resgister/>
      <Profile/>
    </>
  )
}
