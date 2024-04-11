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


const users = JSON.parse(localStorage.getItem("users"));
function handleLogin(event) {
  event.preventDefault();
  let isCheckExistedEmail = false;
  let isCheckExistedPassword = false;
  let indexUser = users.findIndex((user) => user.email == email.value);
  if (indexUser !== -1) {
    isCheckExistedEmail = true;
    if (users[indexUser].password === password.value) {
      isCheckExistedPassword = true;
    }
    
  }
if (isCheckEmail === true && isCheckPassword === true) {
    if (isCheckExistedEmail === true) {
        if (isCheckExistedPassword === true) {
            if(users[indexUser].isActive == false){
                alert("Account is not active");
            } else {
                alert("Login Success!");
                window.location.href = "../Home/Home.html";
                event.target.reset();
            }
        } else {
            alert("Password is incorrect");
        }
    } else {
        alert("Email is not exist");
    }
} else {
    alert("Please enter valid email and password!");
}

}