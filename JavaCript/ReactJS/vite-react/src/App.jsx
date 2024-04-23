import React from 'react'
import Test from './Test';

function App() {
  let a = 5;
  return (
    <>
      ComApp Value a: {a}
      <Test 
        number={a} 
        number2={a + 5}  
        xyz={{ 
          id: 1,
          name: 'John'
        }} 
        />
    </>
  );
}

export default App
