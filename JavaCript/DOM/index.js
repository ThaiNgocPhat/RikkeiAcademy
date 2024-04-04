// const p = document.getElementById("demo")
// console.log("p", typeof p)

// p.innerHTML = "Hello cac ban"

// const tag = document.getElementsByTagName("p")
// for (var el in tag) {
//     tag[el].innerHTML = "Hello cac ban"
// }

// const title = document.getElementsByClassName("title")
// console.log("title", title)

// const title = document.querySelector("#title")
// title.innerHTML = `
//     <button>Submit</button>
// `

// const linkGG = document.getElementById("linkGG")
// linkGG.style.color = "red"
// linkGG.style.textDecoration = "none"

// //thêm attribute cho element
// title.class = "title"

// console.log("title", title)

// const inp = document.getElementById("submit")
// inp.placeholder = "Your full name"

//setAttribute => tham số 1: attribute, tham số 2: value
// inp.setAttribute("placeholder", "Your password")

//Các phương thức để thao tác với phần tử trong DOM

// const congTinh = document.getElementById("congTinh")
// const h3 = document.createElement("h3")

// h3.textContent = "Cong Tinh yeu mau hong, ghet su gia doi"
// h3.style.color = "pink"
// congTinh.appendChild(h3)

// document.body.onload = function() {
// const newDiv = document.createElement("div")
// const newContent = document.createTextNode("Cong Tinh dep trai")
// newDiv.appendChild(newContent)

// const currentDiv = document.getElementById('div1')
// document.body.insertBefore(newDiv, currentDiv)

//     const tabl = document.createElement("table")
//     tabl.innerHTML = `
//         <tr>
//             <th>ID</th>
//             <th>Username</th>
//         </tr>
//         <tbody>
//             <td>1</td>
//             <td>Nguyen Minh Hung</td>
//         </tbody>

//     `
//     tabl.style.border = "1px solid #000"
//     tabl.style.marginTop = "15px"

//     const div1 = document.getElementById("div1")
//     div1.appendChild(tabl)
// };

// const btnEl = document.getElementById("btn")
// btnEl.addEventListener("click", function(event) {

// })

// const cT = document.getElementById("congTinh")
// cT.addEventListener("click", function() {
//     cT.innerHTML = "Oopps!"
// })

// function displayDate() {
//     document.getElementById("demo").innerHTML = Date()
// }

// function mOver() {
//    const listDiv= document.getElementsByTagName("div")[1]
//    listDiv.innerHTML = "Thank You "
// }

// function mOut(obj) {
//     obj.innerHTML = "Mouse over me"
// }

// TEST USERNAME AND PASSWORD
// const username = document.getElementById("username");
// const password = document.getElementById("password");
// const errorUsername = document.getElementById("errorUsername")
// const errorPassword = document.getElementById("errorPassword")

// function handleInput() {
//     if(username.value === ""){
//         errorUsername.innerHTML = "Username can not empty"
//         errorUsername.style.color = "red"
//     }else if(username.value.length < 8){
//         errorUsername.innerHTML = "Username phải có ít nhất 8 ký tự"
//         errorUsername.style.color = "red"
//     }else if(username.value === username.value.toLowerCase()){
//         errorUsername.innerHTML = "Username phải có ít nhất một ký tự viết hoa"
//     }else{
//         errorUsername.innerHTML = ""
//     }

// }
// function handleInputPassword(){
//     if(password.value === ""){
//         errorPassword.innerHTML = "Password can not empty"
//         errorPassword.style.color = "red"
//     } else if (password.value.length < 8) {
//         errorPassword.innerHTML = "Password chưa đủ 8 ký tự"
//         errorPassword.style.color = "red"
//     } else {
//         errorPassword.innerHTML = " "
//     }
// }
// const users = []
// function handleSubmit(event){
//     event.preventDefault(); //ngăn chặn hành động reset sau mỗi lần bấm submit
//     const newUser = {
//         username: username.value,
//         password: password.value
//     };
//     users.push(newUser);
//     console.log(newUser, "new User")
//     console.log(users, "All user")
// }

//BÀI TẬP VỀ DOM:

//bài tập 1:
//Cho layout:this is a text.this is a text.this is a text
//khi ấn nút "Hide text",dòng chữ ẩn đi
//khi ấn nút "Show text" dòng chữ hiện lên
// const hideText = document.getElementById("hideText")
// const showText = document.getElementById("showText")
// const text = document.getElementById("text")
// showText.addEventListener("click", function() {
//     text.style.display = " flex " //hiện đoạn text lên
// })
// hideText.addEventListener("click", function(){
//     text.style.display = " none " //ẩn đoan text đi
// })

//bai tập 2:cho một layout:
//Khi click vào nút Open Modal, một hộp chứa dòng text “Some text in the Modal” sẽ được hiển thị ra và màn hình xung quanh phải tối đi.
//Khi click vào nút “x” hoặc màn hình tối xung quanh, Modal ở trên phải ẩn đi.
// <div class="container">
//<h1>Modal Example</h1>
//<button id="openModal" onClick="">Open Modal</button>
//<p id="modal">Some text in the Modal</p>
//<p id="xicon">x</p>
//</div>
// const openModal = document.getElementById("openModal")
// const modal = document.getElementById("modal")
// const xicon = document.getElementById("xicon")
// const dom = document.getElementsByClassName("title-icon")[0]
// console.log(dom)
// openModal.addEventListener("click", function(){
//     dom.style.display = "flex"
// })
// xicon.addEventListener("click",function(){
//     dom.style.display = "none"
// })

//bài tập 3:cho một playouyt
//Khi click chuột đi qua ô vuông nào, background phải đổi màu sắc theo ô vuông đó:
// const dom = document.getElementById("div1");
// const checkBox1 = document.getElementById("box1");
// const checkBox2 = document.getElementById("box2");
// const checkBox3 = document.getElementById("box3");
// checkBox1.addEventListener("click",function(){
//     dom.style.background = "yellow"
// })
// checkBox2.addEventListener("click",function(){
//     dom.style.background = "brown"
// })
// checkBox3.addEventListener("click",function(){
//     dom.style.background = "gray"
// })

//bài tập 4:cho một playout
//Khi hover chuột đi qua dòng text “Hover over me”, một Tooltip sẽ được hiện ra.
//Khi hover chuột ra ngoài dòng text “Hover over me”, Tooltip sẽ biến mất.
// const abbr = document.getElementById("abbr");
// const abbr1 = document.getElementById("abbr1");
// function displayTooltip(){
//     abbr.style.display = "flex"
// }
// function hideTooltip(){
//     abbr.style.display = "none"
// }

//bài tập 4:xây dựng một đăng ký và js cho nó
//yêu cầu 1: Name: không được để trống, phải có trên 6 ký tự, 1 ký tự viết hoa
//yêu cầu 2: Email: không được để trống, phải có trên 8 ký tự, 1 ký tự viết hoa, 1 ký tự viết thường
//yêu cầu 3: Password: không được để trống, phải có trên 8 ký tự, 1 ký tự viết hoa, 1 ký tự viết thường và có 1 số
//yêu cầu 4: Confirm password: không được để trống, phải có trên 8 ký tự, 1 ký tự viết hoa, 1 ký tự viết thường và có 1 số, confirm phải giống với mật khẩu create
//yêu cầu 5: Phải tick vào checkbox, nếu không sẽ báo lỗi
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const checkBox = document.getElementById("checkbox");
const errorUsername = document.getElementById("errorUsername");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmPassword = document.getElementById("errorConfirmPassword");
const errorCheckBox = document.getElementById("errorCheckBox");
function isAllCharPresent(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) return true; //isNaN là không phải số,thêm ! để phủ định lại thì nó sẽ là số
  } //nếu là số thì trả về true.không thì false
  return false;
}

//yêu cầu 1: Name: không được để trống, phải có trên 6 ký tự, 1 ký tự viết hoa
//check toàn bộ logic về nó
var checkName = false;

function handleInput() {
  if (username.value == " ") {
    errorUsername.innerHTML = "Username can not empty";
    errorUsername.style.color = "red";
    checkName = false;
  } else if (username.value < 6) {
    errorUsername.innerHTML = "Please enter more than 6 characters";
    errorUsername.style.color = "red";
    checkName = false;
  } else if (username.value === username.value.toLowerCase()) {
    errorUsername.innerHTML = "Must contain a capital letter";
    errorUsername.style.color = "red";
    checkName = false;
  } else {
    errorUsername.innerHTML = " ";
    checkName = true;
  }
}
//yêu cầu 2: Email: không được để trống, phải có trên 8 ký tự, 1 ký tự viết hoa, 1 ký tự viết thường
//check toàn bộ logic về nó
var checkMail = false;
function handleInputEmail() {
  if (email.value == 0) {
    errorEmail.innerHTML = "Email can not empty";
    errorEmail.style.color = "red";
    checkMail = false;
  } else if (email.value < 8) {
    errorEmail.innerHTML = "Please enter more than 6 characters";
    errorEmail.style.color = "red";
    checkMail = false;
  } else if (email.value === username.value.toLowerCase()) {
    errorEmail.innerHTML = "Must contain a capital letter";
    errorEmail.style.color = "red";
    checkMail = false;
  } else if (email.value !== email.value.toLowerCase()) {
    errorEmail.innerHTML = "Must contain a lowercase letter";
    errorEmail.style.color = "red";
    checkMail = false;
  } else {
    errorEmail.innerHTML = " ";
    checkMail = true;
  }
}
//yêu cầu 3: Password: không được để trống, phải có trên 8 ký tự, 1 ký tự viết hoa, 1 ký tự viết thường và có 1 số trong mật khẩu
//check toàn bộ logic về nó
var checkPassword = false;
function handleInputPassword() {
  if (password.value == 0) {
    errorPassword.innerHTML = "Password can not empty";
    errorPassword.style.color = "red";
    checkPassword = false;
  } else if (password.value < 8) {
    errorPassword.innerHTML = "Please enter more than 8 characters";
    errorPassword.style.color = "red";
    checkPassword = false;
  } else if (password.value === password.value.toLowerCase()) {
    errorPassword.innerHTML = "Must contain a capital letter";
    errorPassword.style.color = "red";
    checkPassword = false;
  } else if (!isAllCharPresent(password.value)) {
    errorPassword.innerHTML = "Must contain a number";
    errorPassword.style.color = "red";
    checkPassword = false;
  } else {
    errorPassword.innerHTML = " ";
    checkPassword = true;
  }
}
//yêu cầu 4: Confirm password: không được để trống, phải có trên 8 ký tự, 1 ký tự viết hoa, 1 ký tự viết thường và có 1 số, confirm phải giống với mật khẩu create
//check toàn bộ logic về nó
var checkConfirm = false;
function handleInputConfirmPassword() {
  if (confirmPassword.value === "") {
    errorConfirmPassword.innerHTML = "Repassword can not empty";
    errorConfirmPassword.style.color = "red";
    checkConfirm = false;
  } else if (confirmPassword.value !== password.value) {
    errorConfirmPassword.innerHTML = "Repassword must match password";
    errorConfirmPassword.style.color = "red";
    checkConfirm = false;
  } else {
    errorConfirmPassword.innerHTML = " ";
    checkConfirm = true;
  }
}
//yêu cầu 5: Phải tick vào checkbox, nếu không sẽ báo lỗi
//check toàn bộ logic về nó
var checkCheckBox = false;
function handleCheckBox() {
  if (checkBox.checked) {
    errorCheckBox.innerHTML = " ";
    checkCheckBox = true;
  } else {
    errorCheckBox.innerHTML = "Please tick the box";
    errorCheckBox.style.color = "red";
    checkCheckBox = false;
  }
}

//yêu cầu 6: nagwn chặn reset sau mỗi lần submit
const congTinh = document.getElementById("congtinh");
const user = JSON.parse(localStorage.getItem("user")) || [];
for (let i in user) {
  congTinh.innerHTML += `<div> ${user[i].name} - ${user[i].email} </div>`;
}

function handleSubmit(event) {
  event.preventDefault();
  if (checkName && checkMail && checkConfirm && checkCheckBox) {
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      username: username.value,
      email: email.value,
      password: password.value,
    };
    const index = user.findIndex((user) => user.email == email.value);
    if (index === -1) {
      user.push(newUser);
      console.log(newUser);
      localStorage.setItem("user", JSON.stringify(user));
      FuiToast.success("You have successfully registered");
    } else {
      FuiToast.error("Email already exists in the system");
    }
    //cách 2:
    // let isChecked = false;
    // for(let i in user){
    //     if(user[i].email == email.value){
    //         isChecked = true;
    //     }
    // }
    // if(isChecked){
    //     FuiToast.error('Email already exists in the system')
    // }else{
    //     FuiToast.success('You have successfully registered')
    //     user.push(newUser)
    //     console.log(newUser);
    // }
    // user.push(newUser)
    // console.log(newUser);
    event.target.reset();
    // window.location.href = "login.html"
  } else {
    FuiToast.warning("Please enter all information completely!!!");
  }
}