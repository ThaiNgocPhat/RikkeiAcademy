const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const sex = document.getElementById('sex')
let tbody = document.getElementById('tbody1');
// yêu cầu 1: Danh sách học viên được lưu trong một mảng với tên students vào local storage
let students = JSON.parse(localStorage.getItem('students')) || [];
console.log(JSON.parse(localStorage.getItem('students')))
function displayData(){
    let html = '';
    for(let i in students){
        html += `
        <tr>
            <td>${students[i].id}</td>
            <td>${students[i].fullName}</td>
            <td>${students[i].email}</td>
            <td>${students[i].phone}</td>
            <td>${students[i].address}</td>
            <td>${students[i].sex}</td>
            <td><button>Edit</button></td>
            <td><button onclick="deleteStudent('${students[i].id}')>Delete</button></td>
        </tr>
        `;
    }
    tbody.innerHTML = html;
    fullName.value = '';
    email.value = '';
    phone.value = '';
    address.value = '';
}

//Add thông tin sinh viên vào để hiển thị trên tbody và lưu trữ vào local storage
function addStudent(){
    let newStudent = {
        id: students,
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        address: address.value
    };
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    displayData();
    alert("Thêm học sinh mới thành công!!!!");
}
displayData();

function handleSubmit(event){
    event.preventDefault();
}


//delete sinh viên
function deleteStudents(studentId){
    console.log(studentId)
    const index = students.findIndex((student) => student.id == studentId);
    students.spile(index,1);
    localStorage.setItem("students", JSON.stringify(students));
    displayData();
    alert("Xoá thành công")
    console.log(index)
}
displayData();