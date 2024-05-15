import React, { useState, useEffect } from "react";
import axios from "axios";
import Delete from "./components/Delete";
import Edit from "./components/Edit";
import Header from "./components/Header";
import "./App.css";
import AddStudent from "./components/AddSudent";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const res = await axios.get("http://localhost:3000/students");
        setStudents(res.data);
      } catch (error) {
        console.log("Đã xảy ra lỗi khi lấy danh sách sinh viên:", error);
      }
    };
    getAllStudents();
  }, []);

  const handleNewAddStudents = async (newStudent) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/students",
        newStudent
      );
      setStudents([...students, res.data]);
      console.log(res.data)
    } catch (error) {
      console.log("Đã xảy ra lỗi khi thêm sinh viên:", error);
    }
    setIsShow(false);
  };
 
   const handleDeleteStudent = (id) => {
  console.log("id",id)
  localStorage.setItem("id", id);
   setIsDelete((prev) => {
     if (!prev) {
       setIsShow(false);
       setIsEdit(false);
     }
     return !prev;
   });
 };


    const handleDelete = async () => {
      const id = localStorage.getItem("id")
        const index = students.findIndex((student) => student.id == id);
        console.log(index)

        try {
          await axios.delete(`http://localhost:3000/students/${id}`);
          students.splice(index, 1);
          setStudents([...students]);
          console.log("AAA")
        } catch (error) {
          console.log("Đã xảy ra lỗi khi xóa sinh viên:", error);
        }
    };





  const handleAddStudent = () => {
    setIsShow((prev) => {
      if (!prev) {
        setIsEdit(false);
        setIsDelete(false);
      }
      return !prev;
    });
  };
  const handleCancel = () => {
    setIsShow(false);
    setIsEdit(false);
    setIsDelete(false);
  };

  const handleEditStudent = (student) => {
    localStorage.setItem("student", JSON.stringify(student));
    setIsEdit((prev) => {
      if (!prev) {
        setIsShow(false);
        setIsDelete(false);
      }
      return !prev;
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  }
const handleSubmitEdit = (e) => {
  e.preventDefault();
  // 
  console.dir(e.target)
  // 
  console.log(e.target[0].value,'a')
  axios
    .patch(`http://localhost:3000/students/${student.id}`, {
      student_name: e.target[1].value,
      email: e.target[2].value,
      address: e.target[3].value,
      phone: e.target[4].value,
    })
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        const index = students.findIndex((ele) => ele.id == student.id);
        students[index].student_name = e.target[1].value;
        students[index].email = e.target[2].value;
        students[index].address = e.target[3].value;
        students[index].phone = e.target[4].value;
        setStudents([...students]);
        setIsEdit(false);
      }
    })
    .catch((err) => {
      console.log("Đã xảy ra lỗi khi cập nhật sinh viên:", err);
    });
};


const [sortStatus, setSortStatus] = useState(""); 
const handleSort = () => {
  if (sortStatus === "") {
    const sortedStudents = [...students].sort((a, b) =>
      a.student_name.localeCompare(b.student_name)
    );
    setStudents(sortedStudents);
    setSortStatus("sorted"); 
  } else {
    axios
      .get(`http://localhost:3000/students`)
      .then((res) => {
        setStudents(res.data);
        setSortStatus("");
      })
      .catch((error) => {
        console.log("Đã xảy ra lỗi khi trở về trạng thái ban đầu:", error);
      });
  }
};
const handleSearchSubmit = (event) => {
  event.preventDefault();
  const searchTerm = event.target[0].value;
  const filteredStudents = students.filter((student) =>
    student.student_name.toLowerCase().includes(searchTerm.toLowerCase()));
  try{
    axios.get(`http://localhost:3000/students?q=${searchTerm}`)
    .then((res) => {
      setStudents(res.data);
    });
  }catch(error){
    console.log("Đã xảy ra lỗi khi tìm kiếm sinh viên:", error);
  }
}




  const student = JSON.parse(localStorage.getItem("student")) || [];
  return (
    <>
      <Header
        handleAddStudent={handleAddStudent}
        handleDeleteStudent={handleDeleteStudent}
        handleEditStudent={handleEditStudent}
        students={students}
        handleSort = {handleSort}
        handleSearchSubmit = {handleSearchSubmit}
      />
      {isShow && <AddStudent 
      handleSubmit = {handleSubmit}
      handleCancel={handleCancel} 
      handleNewAddStudents = {handleNewAddStudents}
      />}
      {isDelete && <Delete 
      handleCancel={handleCancel} 
      handleDelete = {handleDelete}
      />}
      {isEdit && <Edit 
      handleCancel={handleCancel} 
      handleSubmitEdit = {handleSubmitEdit}
      student = {student}
      />}
    </>
  );
}
