import React, { useState } from 'react';

function App() {
  const [info, setInfo] = useState({
    number: "",
    array: [],
    total: 0,
  });

  const handleNumberChange = (event) => {
    setInfo({ ...info, number: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInfo({
      total: info.total + parseInt(info.number),
      array: [...info.array, parseInt(info.number)],
      number: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter a number"
          id="number"
          value={info.number}
          onChange={handleNumberChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Các số đã nhập: {info.array.join(', ')}</p>
        <p>Có tổng là: {info.total}</p>
      </div>
    </>
  );
}

export default App;






