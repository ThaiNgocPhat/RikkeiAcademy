import React, { useState } from 'react';

const Form = ({ calculateBMI }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleCalculate = () => {
    if (!height || !weight) return;
    calculateBMI(parseFloat(weight), parseFloat(height));
  };

  return (
    <div>
      <label>
        Chiều cao (m):
        <input type="number" value={height} onChange={handleHeightChange} />
      </label>
      <br />
      <label>
        Cân nặng (kg):
        <input type="number" value={weight} onChange={handleWeightChange} />
      </label>
      <br />
      <button onClick={handleCalculate}>Tính BMI</button>
    </div>
  );
};

export default Form;
