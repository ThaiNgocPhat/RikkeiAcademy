
// 1. Tạo 1 mảng lưu trữ thông tin học sinh:
// truthy: khi ep kieu boolean 1 bien ra gia tri true
// console.log(Boolean(NaN));
// Các loại falsy trong JS: NaN, 0, "", undefined, null, false
// Toán tử ||: trả về giá trị truthy đầu tiên
// push, filter, sort: chỉ thao tác được với mảng
// null, string,... không dùng được các phương thức này
// Lấy dữ liệu từng ô input
const fullName = document.getElementById("fullName");
const date = document.getElementById("date");
const gender = document.getElementById("gender");
const classmate = document.getElementById("classmate");
const image = document.getElementById("image");
let students = JSON.parse(localStorage.getItem("students")) || [];//lấy dữ liệu từ local storage, nếu không có thì trả về mảng rỗng và bắt đầu lưu trữ
console.log(JSON.parse(localStorage.getItem("students")));
let tbody = document.getElementById("tbody1");//lấy id của thẻ tbody
// Hiển thị thông tin sinh viên:
function displayData() {
  let html = "";//tạo một mảng rỗng để lưu trữ thông tin sinh viên
  for (let i in students) { // Duyệt qua từng phần tử trong mảng students
    html += ` 
  <tr> 
    <td>${students[i].fullName}</td>
    <td>${students[i].date}</td>
    <td>${students[i].gender}</td>
    <td>${students[i].classmate}</td>
    <td>${students[i].image}</td>
    <td><button onclick="editStudent('${students[i].id}')">Edit</button></td>
    <td><button onclick="deleteStudent('${students[i].id}')">Delete</button></td>
    </tr>  
  `;
  }
  tbody.innerHTML = html;
  // Set giá trị value thành chuỗi rỗng
  // Sau khi submit form cần reset lại các giá trị ô input
  fullName.value = "";
  date.value = "";
  gender.value = "";
  classmate.value = "";
  image.value = "";
}
// Edit student:
function editStudent(studentId) {
  console.log(studentId, "ID");
  localStorage.setItem("studentId", studentId);//lưu id vào local storage
  document.getElementById("add").style.display = "none";//ẩn nút thêm
  document.getElementById("save").style.display = "block";//hiển thị nút lưu
  let index = students.findIndex((student) => student.id == studentId);
  console.log(students[index]);
  fullName.value = students[index].fullName;
  date.value = students[index].date;
  gender.value = students[index].gender;
  classmate.value = students[index].classmate;
  image.value = students[index].image;
  displayData();
}
displayData();

// Save student:
function saveStudent() {
  document.getElementById("add").style.display = "block";
  document.getElementById("save").style.display = "none";
  let index = students.findIndex((student) => student.id == localStorage.getItem("studentId"));//tìm vị trí của phần tử có id trong mảng
  console.log(index, "index");
  students[index] = {
    id: students[index].id,//lấy id cũ của phần tử
    fullName: fullName.value,//lấy giá trị từ ô input để thay thế
    date: date.value,//lấy giá trị từ ô input để thay thế
    gender: gender.value,//lấy giá trị từ ô input để thay thế
    classmate: classmate.value,//lấy giá trị từ ô input để thay thế
    image: image.value,//lấy giá trị từ ô input để thay thế
  };
  localStorage.setItem("students", JSON.stringify(students));//lưu dữ liệu vào local storage
  displayData();//hiển thị lại giá trị sau khi chỉnh sửa
  alert("Chỉnh sửa thông tin thành công!!!");
}

// Delete student:
function deleteStudent(studentId) {
  console.log(studentId);
  const index = students.findIndex((student) => student.id == studentId);// Tìm được vị trí của phần tử có id trong mảng
  students.splice(index, 1);// Xóa phần tử trong mảng tại vị trí index
  localStorage.setItem("students", JSON.stringify(students));// Lưu dữ liệu vào local storage
  displayData();//hiển thị lại giá trị sau khi xóa
  alert("Xóa student thành công!");
  console.log(index);
}

displayData();

// Thêm sinh viên
function addStudent() {
  const newStudent = {
    id: Math.floor(Math.random() * 1000),
    fullName: fullName.value,//lấy giá trị từ ô input
    date: date.value,//lấy giá trị từ ô input
    gender: gender.value,//lấy giá trị từ ô input
    classmate: classmate.value,//lấy giá trị từ ô input
    image: image.value,//lấy giá trị từ ô input
  };
  students.push(newStudent);//sau đó push vào mảng students để lưu trữ
  localStorage.setItem("students", JSON.stringify(students));//lưu dữ liệu vào local storage
  displayData();//hiển thị lại dữ liệu khi bị thay đổi
  alert("Thêm học sinh mới thành công!!!!");
}
