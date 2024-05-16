import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Header({handleAddStudent, handleEditStudent, handleDeleteStudent, students, handleSort, handleSearchSubmit}) {
  return (
    <>
      <div>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Quản lý <b>sinh viên</b>
                    </h2>
                  </div>
                  <div className="add-student">
                    <button onClick={handleAddStudent}>
                      Thêm mới sinh viên <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button onClick={handleSort}>Sort</button>
                    <form onSubmit={handleSearchSubmit}>
                      <input type="search" name="search" id="search" placeholder="Search" />
                      <button type="submit">Tìm kiếm</button>
                    </form>
                   </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label htmlFor="selectAll" />
                      </span>
                    </th>
                    <th>STT</th>
                    <th>Tên sinh viên</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th>Số điện thoại</th>
                    <th>Lựa chọn</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={student.id}>
                      <td>
                        <span className="custom-checkbox">
                          <input type="checkbox" />
                          <label htmlFor="checkbox1" />
                        </span>
                      </td>
                      <td>{index + 1}</td>
                      <td>{student.student_name}</td>
                      <td>{student.email}</td>
                      <td>{student.address}</td>
                      <td>{student.phone}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faPen}
                          style={{ color: "orange", paddingRight: "10px" }}
                          onClick={() => handleEditStudent(student)}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "red" }}
                          onClick={() => handleDeleteStudent(student.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="clearfix">
                <div className="hint-text">
                  Hiển thị {students.length} bản ghi
                </div>
                {/* <ul className="pagination">
                  <li className="page-item disabled">
                    <a href="#">Trước</a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      Sau
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";

// export default function Header({
//   handleAddStudent,
//   handleEditStudent,
//   handleDeleteStudent,
//   students,
//   handleSort,
//   handleSearchSubmit,
// }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [studentsPerPage] = useState(3);

//   const indexOfLastStudent = currentPage * studentsPerPage;
//   const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
//   const currentStudents = students.slice(
//     indexOfFirstStudent,
//     indexOfLastStudent
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <>
//       <div>
//         <div className="container-xl">
//           <div className="table-responsive">
//             <div className="table-wrapper">
//               <div className="table-title">
//                 <div className="row">
//                   <div className="col-sm-6">
//                     <h2>
//                       Quản lý <b>sinh viên</b>
//                     </h2>
//                   </div>
//                   <div className="add-student">
//                     <button onClick={handleAddStudent}>
//                       Thêm mới sinh viên <FontAwesomeIcon icon={faPlus} />
//                     </button>
//                     <button onClick={handleSort}>Sort</button>
//                     <form onSubmit={handleSearchSubmit}>
//                       <input
//                         type="search"
//                         name="search"
//                         id="search"
//                         placeholder="Search"
//                       />
//                       <button type="submit">Tìm kiếm</button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//               <table className="table table-striped table-hover">
//                 <thead>
//                   <tr>
//                     <th>STT</th>
//                     <th>Tên sinh viên</th>
//                     <th>Email</th>
//                     <th>Địa chỉ</th>
//                     <th>Số điện thoại</th>
//                     <th>Lựa chọn</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentStudents.map((student, index) => (
//                     <tr key={student.id}>
//                       <td>{index + indexOfFirstStudent + 1}</td>
//                       <td>{student.student_name}</td>
//                       <td>{student.email}</td>
//                       <td>{student.address}</td>
//                       <td>{student.phone}</td>
//                       <td>
//                         <FontAwesomeIcon
//                           icon={faPen}
//                           style={{ color: "orange", paddingRight: "10px" }}
//                           onClick={() => handleEditStudent(student)}
//                         />
//                         <FontAwesomeIcon
//                           icon={faTrash}
//                           style={{ color: "red" }}
//                           onClick={() => handleDeleteStudent(student.id)}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               <div className="clearfix">
//                 <div className="hint-text">
//                   Hiển thị {currentStudents.length} trong tổng số{" "}
//                   {students.length} bản ghi
//                 </div>
//                 <ul className="pagination">
//                   <li
//                     className={`page-item ${
//                       currentPage === 1 ? "disabled" : ""
//                     }`}
//                   >
//                     <button onClick={() => paginate(currentPage - 1)}>
//                       Trước
//                     </button>
//                   </li>
//                   {Array.from(
//                     { length: Math.ceil(students.length / studentsPerPage) },
//                     (_, i) => (
//                       <li
//                         key={i}
//                         className={`page-item ${
//                           currentPage === i + 1 ? "active" : ""
//                         }`}
//                       >
//                         <button onClick={() => paginate(i + 1)}>{i + 1}</button>
//                       </li>
//                     )
//                   )}
//                   <li
//                     className={`page-item ${
//                       currentPage ===
//                       Math.ceil(students.length / studentsPerPage)
//                         ? "disabled"
//                         : ""
//                     }`}
//                   >
//                     <button onClick={() => paginate(currentPage + 1)}>
//                       Sau
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
