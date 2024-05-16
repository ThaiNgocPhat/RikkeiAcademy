let input_fields = document.querySelectorAll("input");
for (let i = 0; i < input_fields.length; i++) {
  let field = input_fields[i];
  field.addEventListener("input", function (e) {
    if (e.target.value != "") {
      e.target.parentNode.classList.add("has-content");
    } else if (e.target.value == "") {
      e.target.parentNode.classList.remove("has-content");
    }
  });
}

let login = document.getElementById("login");
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "admin" && password === "123456") {
    window.location.href = "index.html";
  } else {
    FuiToast.error("Username or password is incorrect. Please try again.")
  }
}); 