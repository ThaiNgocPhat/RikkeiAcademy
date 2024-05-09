import React from 'react'
import { Outlet, Link } from 'react-router-dom'
export default function Category() {  
      return (
    <>
    <div>
        <h2>Category</h2>
        <Link to="laptop">Laptop</Link>
        <Link to="mobile">Mobile</Link>
        <Link to="other">Other</Link>
        <Link to="test">Test</Link>
        <Outlet />
    </div>
    </>
  )
}
