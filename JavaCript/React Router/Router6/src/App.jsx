import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Exprenses from './components/Exprenses'
import Invoices from './components/Invoices'


export default function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/expenses">Expenses</a>
            </li>
            <li>
              <a href="/invoices">Invoices</a>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/expenses" element={<Exprenses />} />
        <Route path="/invoices" element={<Invoices />} />
        
      </Routes>
    </>
  )
}
