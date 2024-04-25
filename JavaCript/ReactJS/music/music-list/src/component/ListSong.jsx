import React from 'react';

const ListSongs = ({ ListSong, handleDelete }) => { 
  return (
    <ul>
      { ListSong?.map((song) => ( <li key = {song.id} > 
      <span>{song.title}</span> 
      <button onClick= {() => handleDelete(song.id)}>Delete</button>
      </li>)) ?? "No songs found"}
    </ul>
  );
};

export default ListSongs;
