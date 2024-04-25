import React, { useState } from 'react'
import Form from './Form'


function App() {
  const [result, setResult] = useState('')
 const [valueWeight, setValueWeight] = useState('')
  const [valueHeigth, setValueHeigth] = useState('')
  const handleWeightChange = (e) => {
    setValueWeight(e.target.value)
  }
  const handleHeigthChange = (e) => {
    setValueHeigth(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const bmi = valueWeight / (valueHeigth * valueHeigth);
    if(bmi < 18.5){
      setResult('Gầy')
    }else if(bmi >= 18.5 && bmi <= 24.9){
      setResult('Bình thường')
    }else if(bmi >= 25 && bmi <= 29.9){
      setResult('Tiền béo phì')
    }else if(bmi >= 30 && bmi <= 34.9){
      setResult('Béo phì cấp độ 1 ')
    }else if(bmi >= 35 && bmi <= 39.9){
      setResult('Béo phì độ 2')
    }else{
      setResult('Béo phì độ 3')
    }
    e.target.reset();
  }
  return (
    <>
    <Form valueHeigth={valueHeigth}
          valueWeight={valueWeight}
          handleWeightChange={handleWeightChange}
          handleHeigthChange={handleHeigthChange}
          handleSubmit={handleSubmit}      
    />
    <p>Ket qua: {result}</p>
    </>
  )
}

export default App
