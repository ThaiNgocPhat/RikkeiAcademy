import React from 'react';

const ListSongs = ({ songs, handleDelete }) => {
  return (
    <ul>
      {songs.map((song, index) => (
        <li key={index}>
          {song}
          <button onClick={() => handleDelete(index)}>Xoá</button>
        </li>
      ))}
    </ul>
  );
};

export default ListSongs;
