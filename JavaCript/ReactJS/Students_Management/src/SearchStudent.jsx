import React from "react";

export default function SearchStudent({
  showAddForm,
  toggleAddStudentForm,
  handleSubmit,
  handleAdd,
  onSubmit, onSort, setSearchValue
}) {
  return (
    <div className="search-student">
       <div className="add-new">
         <button onClick={toggleAddStudentForm}>Thêm mới sinh viên</button>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nhập mã số hoặc tên sinh viên"
            className="search"
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button type="submit">Tìm kiếm</button>
          <button type="button" onClick={onSort}>Sắp xếp</button>
        </form>
       </div>
      {showAddForm && (
        <div className="add-student">
          <form onSubmit={handleSubmit}>
            <div className="student">
              <label htmlFor="student-id">Mã sinh viên</label>
              <input type="text" id="student-id" />
            </div>
            <div className="student">
              <label htmlFor="student-name">Tên sinh viên</label>
              <input type="text" id="student-name" />
            </div>
            <div className="student">
              <label htmlFor="student-age">Tuổi</label>
              <input type="text" id="student-age" />
            </div>
            <div className="student">
              <label htmlFor="gender">Giới tính</label>
              <input type="text" id="gender" />
            </div>
            <button
              onClick={() =>
                handleAdd({
                  id: document.getElementById("student-id").value,
                  name: document.getElementById("student-name").value,
                  age: document.getElementById("student-age").value,
                  gender: document.getElementById("gender").value,
                })
              }
            >
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
