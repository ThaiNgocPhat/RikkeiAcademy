
let email = document.getElementById("email");
let oldPassword = document.getElementById("oldPassword");
let newPassword = document.getElementById("newPassword");
let confirmNewpassword = document.getElementById("confirmNewPassword");
let errorEmail = document.getElementById("error-email");
let errorOldPassword = document.getElementById("error-old-password");
let errorNewPassword = document.getElementById("error-new-password");
let errorConfirmPassword = document.getElementById(
  "error-confirm-new-password"
);
let checkEmail = false;
function handleEmailChange() {
  if (email.value == "") {
    errorEmail.innerHTML = "email khong duoc de trong";
    checkEmail = false;
    errorEmail.style.display = "flex";
  } else {
    errorEmail.innerHTML = "";
    errorEmail.style.display = "none";
    checkEmail = true;
  }
}
let checkPassword = false;
function handlePasswordChange() {
  if (oldPassword.value == "") {
    errorOldPassword.innerHTML = "password cu khong duoc de trong";
    checkPassword = false;
    errorOldPassword.style.display = "flex";
  } else {
    errorOldPassword.innerHTML = "";
    errorOldPassword.style.display = "none";
    checkPassword = true;
  }
}
let checkNewPassword = false;
function handleNewPasswordChange() {
  if (newPassword.value == "") {
    errorNewPassword.innerHTML = "password moi khong duoc de trong";
    checkNewPassword = false;
    errorNewPassword.style.display = "flex";
  } else {
    errorNewPassword.innerHTML = "";
    errorNewPassword.style.display = "none";
    checkNewPassword = true;
  }
}
let checkConfirmNewPassword = false;
function handleConfirmPasswordChange() {
  if (confirmNewpassword.value == "") {
    errorConfirmPassword.innerHTML = "password nhap lai khong duoc de trong";
    checkConfirmNewPassword = false;
    errorConfirmPassword.style.display = "flex";
  } else if (newPassword.value !== confirmNewpassword.value) {
    errorConfirmPassword.innerHTML = "password moi phai giong password cu";
    errorConfirmPassword.style.display = "flex";
    checkConfirmNewPassword = false;
  } else {
    errorConfirmPassword.innerHTML = "";
    errorConfirmPassword.style.display = "none";
    checkConfirmNewPassword = true;
  }
}
let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);
function handleSubmit(event) {
  event.preventDefault();
  if (
    checkPassword &&
    checkEmail &&
    checkNewPassword &&
    checkConfirmNewPassword
  ) {
    let index = users.findIndex((user) => user.email == email.value);
    if (index == -1) {
      alert("email khong ton tai tren he thong");
    } else {
      if (users[index].password !== oldPassword.value) {
        alert("mat khau khong dung");
      } else {
        users[index].password = newPassword.value;
        alert("doi mat khau thanh cong");
        event.target.reset();
        localStorage.setItem("users", JSON.stringify("users"));
      }
    }
  } else {
    alert("ban phai nhap day du thong tin");
  }
}
