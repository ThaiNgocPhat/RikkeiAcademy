import React from "react";

function EditStudent({ editingStudent, handleSave, handleCancel }) {
  const [editedStudent, setEditedStudent] = React.useState(editingStudent);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedStudent({
      ...editedStudent,
      [name]: value,
    });
  };

  const cancelEditing = () => {
    handleCancel(); 
  };

  return (
    <div className="information-student">
      <h1>Chỉnh sửa thông tin</h1>
      <div className="student">
        <label htmlFor="student-id">Mã sinh viên</label>
        <input
          type="text"
          id="student-id"
          name="id"
          value={editedStudent.id}
          onChange={handleChange}
        />
      </div>
      <div className="student">
        <label htmlFor="student-name">Tên sinh viên</label>
        <input
          type="text"
          id="student-name"
          name="name"
          value={editedStudent.name}
          onChange={handleChange}
        />
      </div>
      <div className="student">
        <label htmlFor="student-age">Tuổi</label>
        <input
          type="text"
          id="student-age"
          name="age"
          value={editedStudent.age}
          onChange={handleChange}
        />
      </div>
      <div className="student">
        <label htmlFor="gender">Giới tính</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={editedStudent.gender}
          onChange={handleChange}
        />
      </div>
      <div className="edit-buttons">
        <button type="button" onClick={() => handleSave(editedStudent)}>
          Save
        </button>
        <button type="button" onClick={cancelEditing}>
          Đóng
        </button>
      </div>
    </div>
  );
}

export default EditStudent;
