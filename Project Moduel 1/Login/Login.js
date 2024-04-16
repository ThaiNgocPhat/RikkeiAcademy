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
  const email = event.target.email;
  const password = event.target.password;

  let indexUser = users.findIndex((user) => user.email === email.value);
  
  if (indexUser !== -1) {
    isCheckExistedEmail = true;
    if (users[indexUser].password === password.value) {
      isCheckExistedPassword = true;
    }
  }
  if (isCheckExistedEmail && isCheckExistedPassword) {
    if (users[indexUser].isActive == false) {
      FuiToast.error("Account is not active!")
    } else {
      FuiToast.success('Login successfully.')
      window.location.href = "../Home/Home.html";
      
      const currentUser = {
        access_token: "10000000-1000-4000-8000-100000000000".replace(
          /[018]/g, (c) =>
            (
              c ^
              (crypto.getRandomValues(new Uint8Array(1))[0] &
                (15 >> (c / 4)))
            ).toString(16)
        ), // tạo token cho user
        email: users[indexUser].email, // lưu email của user
        products: [], //tạo một mảng rỗng để khi mua sản phẩm để lưu vào
      };
      localStorage.setItem("currentUser", JSON.stringify(currentUser));//lưu thông tin user vào local
    }
  } else {
    if (!isCheckExistedEmail) {
      FuiToast.error("Email is not exist");
    } else if (!isCheckExistedPassword) {
      FuiToast.error("Password is not correct")
    } else {
      FuiToast.error("Login failed")
    }
  }
}
