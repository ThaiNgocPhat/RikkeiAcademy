import React, { useState } from "react";
import SearchStudent from "./SearchStudent";
import ListStudent from "./ListStudent";
import EditStudent from "./EditStudent";
import "./App.css";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const toggleAddStudentForm = () => {
    setShowAddForm(!showAddForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const handleAdd = (studentData) => {
    const newStudent = {
      id: studentData.id,
      name: studentData.name,
      age: studentData.age,
      gender: studentData.gender,
    };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    toggleAddStudentForm();
  };

  const handleDelete = (index) => {
    const newStudents = students.filter((student, i) => i !== index);
    setStudents(newStudents);
    localStorage.setItem("students", JSON.stringify(newStudents));
  };

  const handleEdit = (index) => {
    const studentToEdit = students[index];
    setEditingStudent(studentToEdit);
  };

  const handleView = (index) => {
    const studentInfo = students[index];
    const infoString = `Thông tin sinh viên:\n
                      STT: ${index + 1}\n
                      Mã sinh viên: ${studentInfo.id}\n
                      Tên: ${studentInfo.name}\n
                      Tuổi: ${studentInfo.age}\n
                      Giới tính: ${studentInfo.gender}`;

    alert(infoString);
  };

  const handleSave = (editedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === editedStudent.id ? editedStudent : student
    );
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    setEditingStudent(null);
  };

  const handleCancel = () => {
    setEditingStudent(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditingStudent({
      ...editingStudent,
      [name]: value,
    });
  };

  const handleSort = () => {
    const sortedStudents = [...students].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setStudents(sortedStudents);
  };

  return (
    <div className="App">
      <SearchStudent
        showAddForm={showAddForm}
        toggleAddStudentForm={toggleAddStudentForm}
        handleSubmit={handleSubmit}
        handleAdd={handleAdd}
        onSubmit={handleSubmit}
        onSort={handleSort}
        setSearchValue={setSearchValue}
      />
      <ListStudent
        students={students}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleView={handleView}
      />
      {editingStudent && (
        <EditStudent
          editingStudent={editingStudent}
          handleSave={handleSave}
          handleCancel={handleCancel}
          handleChange={handleChange}
        />
      )}
    </div>
  );
}

export default App;
