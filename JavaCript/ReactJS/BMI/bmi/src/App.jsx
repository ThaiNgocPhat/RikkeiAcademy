import React, { useState } from 'react';
import Form from './Form';

const App = () => {
  const [bmiResult, setBmiResult] = useState(null);
  const calculateBMI = (weight, height) => {
    const bmi = weight / (height * height);
    setBmiResult(bmi.toFixed(2));
  };

  return (
    <div>
      <h1>Chỉ số BMI Calculator</h1>
      <Form calculateBMI={calculateBMI} />
      <p>
        Kết quả BMI của bạn là: {bmiResult ? bmiResult : 'Hãy nhập chiều cao và cân nặng'}
      </p>
    </div>
  );
};

export default App;
