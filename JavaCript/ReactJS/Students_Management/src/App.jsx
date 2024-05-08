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

  const toggleAddStudentForm = () => {
    setShowAddForm(!showAddForm);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  // const handleSort = () => {
  //   const sortedStudents = [...students].sort((a, b) =>
  //     (a.name).localeCompare(b.name)
  //   );
  //   setStudents(sortedStudents);
  // };
  const [isCheck, setIsCheck] = useState(false);
  const handleSort = () => {
    setIsCheck(!isCheck);
    if(!isCheck){
      const sortedStudents = [...students].sort((a, b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      });
      setStudents(sortedStudents);
    }else{
      const studentSortBegin = JSON.parse(localStorage.getItem("students"));
      setStudents(studentSortBegin);
    }
  } 

  const handleAdd = (studentData) => {
    const newStudent = {
      id: Math.floor(Math.random() * 1000),
      name: studentData.name,
      age: studentData.age,
      gender: studentData.gender,
    };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    toggleAddStudentForm();
  };
  //Search Student
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchFilter = event.target[0].value;
    if(searchFilter === ""){
      const studentSearchBegin = JSON.parse(localStorage.getItem("students"));
      setStudents(studentSearchBegin);
    }else{
      const searchResult = students.filter((student) =>
      student.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
    setStudents(searchResult);
    }
  };
 
    const handleSave = (editedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === editedStudent.id ? editedStudent : student
    );
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    alert("Cập nhật thông tin thành công!");
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
  //List Student
  const handleDelete = (index) => {
    const studentToDelete = students[index];
    if(!window.confirm(`Bạn có chắc chắn muốn xóa sinh viên ${studentToDelete.name}?`)) return;
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
  return (
    <div className="App">
      <SearchStudent
        showAddForm={showAddForm}
        toggleAddStudentForm={toggleAddStudentForm}
        handleSubmit={handleSubmit}
        handleAdd={handleAdd}
        handleSearchSubmit={handleSearchSubmit}
        onSort={handleSort}
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
