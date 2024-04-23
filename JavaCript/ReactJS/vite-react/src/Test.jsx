import React from 'react';
import Test2 from './Test2';

export default function Test({ number, number2, xyz }) {
  return (
    <div>
      Test {number}  {number2}  {xyz.name} 
      <Test2 />
    </div>
  );
}

