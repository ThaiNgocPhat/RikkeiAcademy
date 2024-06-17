import React from 'react'
import AddToCart from './components/AddToCart'
import Product from './components/Product'
import './App.css'

export default function App() {
  return (
    <>
    <div className='container'>
      <AddToCart/>
      <Product/>
    </div>
    </>
  )
}
