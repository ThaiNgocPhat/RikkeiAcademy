import React, { useState } from 'react';

const Form = ({ calculateBMI }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
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
