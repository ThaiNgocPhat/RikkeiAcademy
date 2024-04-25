import React, { useState } from 'react';
import ListSongs from './component/ListSong';
import InputSong from './component/InputSong';

const App = () => {
  const [songs, setSongs] = useState([]);

  const addNewSong = (newSong) => {
    setSongs([...songs, newSong]);
  };

  const handleDelete = (index) => {
    const newSongs = [...songs];
    newSongs.splice(index, 1);
    setSongs(newSongs);
  };

  return (
    <div>
      <h1>Quản lý danh sách bài hát</h1>
      <InputSong addNewSong={addNewSong} />
      <ListSongs songs={songs} handleDelete={handleDelete} />
    </div>
  );
};

export default App;

