
document.addEventListener("DOMContentLoaded", function() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  displayUsers(users);
});
function displayUsers(users) {
  var tbody = document.getElementById("tbody1");
  tbody.innerHTML = "";
  users.forEach(function(user, index) {
    var row = `<tr>
                  <td>${index + 1}</td>
                  <td>${user.name}</td>
                  <td>${user.email}</td>
                  <td>${user.password}</td>
                  <td><input onclick="handleActive(${users[index].id})" checked=${users[index].isActived === true} type="checkbox"/></td>
                  <td>
                    <button onclick="deleteUser(${index})">Delete</button>
                </tr>`;
    tbody.innerHTML += row;
  });
}
displayUsers(users);
//xoá tài khoản với id và xoá luôn trong localstorage
function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
}
displayUsers(users);
//active tài khoản với id và active luôn trong localstorage
function handleActive(id) {
  var index = users.findIndex(function(user) {
    return user.id === id;
  });
  users[index].isActived = !users[index].isActived;
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers(users);
}
handleActive(id);