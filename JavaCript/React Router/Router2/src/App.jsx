import React from 'react'
import Header from './components/Header'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Team from './components/Team'
import Client from './components/Client'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Service />
      <Portfolio />
      <About />
      <Team />
      <Client />
      <Contact />
      <Footer />
    </>
  )
}
