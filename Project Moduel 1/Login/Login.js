let email = document.getElementById("email");
let password = document.getElementById("password");
let errorEmail = document.getElementById("error-email");
let errorPassword = document.getElementById("error-password");
let isCheckEmail = false;
function handleEmailChange() {
  console.log(email.value, "Value");
  if (email.value === "") {
    isCheckEmail = false;
    errorEmail.innerHTML = "Email can not empty";
    errorEmail.style.display = "flex";
  } else {
    isCheckEmail = true;
    errorEmail.innerHTML = "";
  }
}

let isCheckPassword = false;
function handlePasswordChange() {
  if (password.value === "") {
    isCheckPassword = false;
    errorPassword.innerHTML = "Password can not empty";
    errorPassword.style.display = "flex";
  } else {
    isCheckPassword = true;
    errorPassword.innerHTML = "";
  }
}

// Tài khoản đăng nhập phải giống với tài khoản trong local, nếu đúng mới cho login, nếu sai báo tài khoản/email không có trong hệ thống
const users = JSON.parse(localStorage.getItem("users"));
console.log(users);

function handleLogin(event) {
  event.preventDefault();
  let isCheckExistedEmail = false;
  let isCheckExistedPassword = false; // biến kiểm tra password có trùng với email đăng nhập hay không
  let indexUser = users.findIndex((user) => user.email == email.value); //Không nhập thông tin submit form thì indexUser = -1
  if (indexUser !== -1) {
    isCheckExistedEmail = true;
    if (users[indexUser].password === password.value) {
      isCheckExistedPassword = true;
    }
  }
  if (isCheckEmail === true && isCheckPassword === true) {
    // Check tài khoản -> check mật khẩu
    if (isCheckExistedEmail === true) {
      if (isCheckExistedPassword === false) {
        alert("Password is incorrect");
      } else {
        window.location.href = "../Home/Home.html";
        event.target.reset();
      }
    } else {
      alert("Email is not exist!");
    }
  } else {
    alert("Ban phai nhap day du thong tin!");
  }
}