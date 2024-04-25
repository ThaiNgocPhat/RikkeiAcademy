import React, { useState } from 'react';
import ListSongs from './component/ListSong';
import InputSong from './component/InputSong';

const App = () => {
  const [songs, setSongs] = useState([]);//tạo mảng rỗng để chứa danh sách bài hát
  const addNewSong = (newSong) => { 
    setSongs([...songs, newSong]); //thêm bài hát mới vào mảng
  };

  const handleDelete = (index) => {
     const newSong = [...songs];//tạo newSong để chứa mảng bài hát
     newSong.splice(index,1)//xoá vị trí bài hát
     setSongs(...newSong)//cập nhật lại giá trị
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

