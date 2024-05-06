import React, { useState } from 'react'
import Form from './Form'

function App() {
  const [result, setResult] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const weight = event.target[0].value;//giá trị ô input của weight
    const height = event.target[1].value;//giá trị ô input của height
    const bmi = weight / (height * height);//phép tính BMI
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
    event.target.reset;//reset lại form
  }
  return (
    <>
    <Form handleSubmit={handleSubmit}/>
    <p>Kết quả: {result}</p>
    </>
  )
}

export default App
