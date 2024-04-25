import React, { useState } from 'react';

const InputSong = ({ addNewSong }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addNewSong(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputSong;

