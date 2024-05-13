import React from "react";

export default function ListStudents({ students, handleEdit, handleDelete }) {
  return (
    <>
      <h2>Danh sách sinh viên</h2>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td>
                <button onClick={() => handleEdit(student)}>Sửa</button>
                <button onClick={() => handleDelete(student.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
