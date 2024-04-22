
let fullName = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let gender = document.getElementsByName('gender');
// yêu cầu 1:Danh sách học viên được lưu trong một mảng với tên students 
let students = JSON.parse(localStorage.getItem("students")) || [];

const tbody = document.getElementById("tbody1");

// Hàm hiển thị dữ liệu
function displayData(){
    let html = "";
    for(let i in students){
        html += `<tr>
                    <td>${students[i].id}</td>
                    <td>${students[i].fullName}</td>
                    <td>${students[i].email}</td>
                    <td>${students[i].phone}</td>
                    <td>${students[i].address}</td>
                    <td>${students[i].gender}</td>
                    <td><button onclick="editStudent('${students[i].id}')">Edit</button>|<button onclick="deleteStudent('${students[i].id}')">Delete</button></td>
                </tr>`;
    }
    
    tbody.innerHTML = html;
    fullName.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    gender[0].checked = true;
}


//yêu cầu 2:Nhập đầy đủ thông tin các trường trong form “Thông tin học viên” khi nhấn lưu lại sẽ thêm thông tin học viên vào students và được hiển thị thông tin tất cả học viên trên“Danh sách học viên” 
function addStudent(){
    let genderValue;
    for(let i in gender){
        if(gender[i].checked) genderValue = gender[i].value;
     
    }
    let newStudent = {
        id: students.length + 1,
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        gender:genderValue
    };
    console.log("aaaaa",newStudent)
    students.push(newStudent);
    localStorage.setItem("students", JSON.stringify(students));
    alert("Thêm thông tin thành công!!!");
    displayData();
}    
//yêu cầu 3:Khi nhấn delete sẽ xoá học viên trong students[],xoá đúng vị trí của sinh viên đấy
function deleteStudent(id){
    let index = students.findIndex(student => student.id == id);
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayData();
    alert("Xoá thông tin thành công!!!");
}
//yêu cầu 4:.Khi nhấn edit, dữ liệu được hiển thị trên form “Thông tin học viên” 
function editStudent(id){
    localStorage.setItem("studentId", id);
     let index = students.findIndex(student => student.id == id);
    // console.log(typeof id,'ssss') //string
    document.getElementById("add").style.display = "none";
    document.getElementById("save").style.display = "block";
    for(let i in gender){
        if(gender[i].value == students[index].gender){
            gender[i].checked =true;
        }
    }
    fullName.value = students[index].fullName;
    email.value = students[index].email;
    phone.value = students[index].phone;
    address.value = students[index].address
    gender.value = students[index].gender;
}


// yêu cầu 5:Khi nhấn nút Save, thực hiện cập nhật thông tin học viên trong students và hiển thị lại thông tin các học viên trên “Danh sách học viên”
function saveStudent(){
   const gender = document.querySelector('input[name="gender"]:checked').value;
    document.getElementById("add").style.display = "block";
    document.getElementById("save").style.display = "none";
    let index = students.findIndex(student => student.id == localStorage.getItem("studentId"));
    students[index] = {
        id: students[index].id,
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        gender:gender
    };
    localStorage.setItem("students", JSON.stringify(students));
    alert("Chỉnh sửa thông tin thành công!!!");
    displayData();
}
displayData();



//yêu cầu 6:Khi nhấn vào nút sắp xếp (anpha b), sắp xếp học viên và hiển thị danh sách học viên đã
function sortStudent() {
  students.sort((a, b) => {
    if (a.fullName < b.fullName) return -1; // `a` đứng trước `b`
    if (a.fullName > b.fullName) return 1; // `a` đứng sau `b`
    return 0; // Hai chuỗi bằng nhau
  });
  displayData();
}

//yêu cầu 7:Ở ô tìm kiếm có thế tìm kiếm học viên theo tên học viên và hiển thị kết quả ở bảng “Danh sách học viên".sau khi xoá dữ diệu sẽ hiển thị lại toàn bộ danh sách học viên
function searchStudents() {
    let search = document.getElementById("search").value;
    let result = students.filter((student) => {
        return student.fullName.toLowerCase().includes(search.toLowerCase());
    });
    let html = "";
    for (let i in result) {
        html += `<tr>
                        <td>${result[i].id}</td>
                        <td>${result[i].fullName}</td>
                        <td>${result[i].email}</td>
                        <td>${result[i].phone}</td>
                        <td>${result[i].address}</td>
                        <td>${result[i].gender}</td>
                </tr>`;
}   
    tbody.innerHTML = html;
    if (search === "") {
        displayData();
    }
}



//yêu cầu 8:Validate dữ liệu nhập vào form “Thông tin học viên”:
// Họ và tên: không được để trống
//Email: phải nhập đúng định dạng email
//Số điện thoại: phải nhập đúng định dạng số điện thoại di động ở Việt Nam
//Quê quán: không được để trống
//Giới tính: default là Nam
function handleInputPhone(){
    let error = document.getElementById("errorPhone");
    if(phone.value.length < 10 || phone.value.length > 11){
        error.innerHTML = "Số điện thoại không hợp lệ";
        error.style.color = "red";
    }else if(isNaN(phone.value)){
        error.innerHTML = "Số điện thoại phải là số";
        error.style.color = "red";
    }else if(phone.value.length == 0){
        error.innerHTML = "Không được để trống";
        error.style.color = "red";
    }else{
        error.innerHTML = "";
    }
}
function handleInputName(){
    let error = document.getElementById("errorName");
    if( fullName.value.length == 0){
        error.innerHTML = "Không được để trống";
        error.style.color = "red";
    }else{
        error.innerHTML = "";
    }
}
function handleInputEmail(){
    let error = document.getElementById("errorEmail");
    if(email.value.length == 0){
        error.innerHTML = "Không được để trống";
        error.style.color = "red";
    }else if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        error.innerHTML = "Email không hợp lệ";
        error.style.color = "red";
    }else{
        error.innerHTML = "";
    }
}
function handleInputAddress(){
    let error = document.getElementById("errorAddress");
    if(address.value.length == 0){
        error.innerHTML = "Không được để trống";
        error.style.color = "red";
}
function handleSubmit(event) {
  event.preventDefault(); 
}
}
