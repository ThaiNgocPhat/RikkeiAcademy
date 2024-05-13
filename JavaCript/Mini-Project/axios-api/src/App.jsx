import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Đã xảy ra lỗi khi lấy danh sách sinh viên:", error);
      }
    };
    getAllStudents();
  }, []);

  useEffect(() => {
    const getStudentById = async () => {
      try {
        const response = await axios.get("http://localhost:3000/students/1");
        console.log(response.data);
      } catch (error) {
        console.error("Đã xảy ra lỗi khi lấy sinh viên:", error);
      }
    };

    getStudentById();
  }, []);

  return (
    <div>
      <h1>Danh sách sinh viên</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            Tên: {student.student_name}, Email: {student.email}, Địa chỉ:{" "}
            {student.address}, Số điện thoại: {student.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
