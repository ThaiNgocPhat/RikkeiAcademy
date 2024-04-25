import React from 'react';

const InputSong = ({ addNewSong }) => { 
  return (
    <form onSubmit={addNewSong}>
      <input
        type="text"
        placeholder="Enter song"
      />
      <button type="submit">Add new song</button>
    </form>
  );
};

export default InputSong;

