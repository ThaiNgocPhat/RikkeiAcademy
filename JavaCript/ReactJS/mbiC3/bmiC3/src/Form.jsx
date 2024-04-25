import React from 'react'

export default function Form({handleSubmit, valueWeight, handleWeightChange, valueHeigth, handleHeigthChange}) {
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter weight' value={valueWeight} onChange={handleWeightChange} />
        <input type="text" placeholder='Enter heigth' value={valueHeigth} onChange={handleHeigthChange} />
        <button type='submit'>Calculate</button>
    </form>
    
    </>
  )
}
