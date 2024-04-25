import React from 'react'

export default function Form({handleSubmit}) {
   
 return (
     <>
     <form onSubmit={handleSubmit}>
         <input 
        type="number"
        placeholder='weight'
        />
        <input 
        type="number"
        placeholder='height'
        />
        <button type='submit'>Caculator BMI</button>
     </form>
       
     </>
  )
}
