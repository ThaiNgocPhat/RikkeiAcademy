import React, { useState } from 'react';

const InputSong = ({ addNewSong }) => { //truyền props từ App
  const [inputValue, setInputValue] = useState('');//tạo useState với giá trị mặc định là rỗng

  const handleSubmit = (event) => {
    event.preventDefault();//ngăn chặn hành vi mặc định của form
    addNewSong(inputValue);//gọi hàm addNewSong từ App.jsx
    setInputValue('');//xóa giá trị của input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}//lấy giá trị từ inputValue
        onChange={(event) => setInputValue(event.target.value)}//lấy giá trị từ ô input và gán vào inputValue
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputSong;

