import React from 'react';

const ListSongs = ({ songs, handleDelete }) => { //truyền props cho ListSong từ App
  return (
    <ul>
      {songs.map((song, index) => ( //duyệt qua từng phần tử của mảng songs
        //đặt key cho từng phần tử trong mảng
        <li key={index}> 
          {song} 
          <button onClick={() => handleDelete(index)}>Xoá</button>
        </li>//tạo nút xoá để xoá bài hát 
      ))}
    </ul>
  );
};

export default ListSongs;
