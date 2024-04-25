import React, { useState } from 'react';
import ListSongs from './component/ListSong';
import InputSong from './component/InputSong';

const App = () => {
  const [songs, setSongs] = useState([]);
  const addNewSong = (event) => { 
      event.preventDefault();
      const newSong = {
        id: Math.floor(Math.random()*1000),
        title:event.target[0].value,
      };
      setSongs([...songs, newSong]);
      event.target.reset();
  };
  const deleteSong = (id) => {
    const index = songs.findIndex((songs) => songs.id == id)
    console.log(index)
    songs.splice(index, 1);
    setSongs([...songs]);
  }

  return (
    <div>
      <h1>Quản lý danh sách bài hát</h1>
      <InputSong addNewSong={addNewSong} />
      <ListSongs ListSong = {songs} handleDelete= {deleteSong}/>
    </div>
  );
};

export default App;

