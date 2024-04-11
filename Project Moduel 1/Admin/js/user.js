var users = JSON.parse(localStorage.getItem("users")) || [];
let tbody1 = document.getElementById("tbody1");
function displayData(){
  let html = "";
  users.forEach(user => {
  html += `
    <tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td><input type="checkbox" onclick="handleChangeCheckbox('${user.id}')" ${user.isActive ? "checked" : ""}/></td>
      <td>
        <button onclick="handleDelete(${user.id})">Delete</button>
      </td>
    </tr>`;
});

  tbody1.innerHTML = html;
}
displayData();

function handleDelete(id){
  console.log(id);
  let index = users.findIndex(user => user.id == id);
  console.log(index);
  users.splice(index,1);
  localStorage.setItem("users",JSON.stringify(users));
  displayData();
}
function handleChangeCheckbox(id){
  let index = users.findIndex(user => user.id == id);
  console.log(index);
  users[index].isActive = !users[index].isActive;
  console.log(users[index].isActive);
  localStorage.setItem("users",JSON.stringify(users));
  displayData();
}

function handleSearch(){
  let searchValue = document.getElementById("search").value;
  let result = users.filter(user => user.name.includes(searchValue));
  let html = "";
  result.forEach(user => {
    html += `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td><input type="checkbox" onclick="handleChangeCheckbox('${user.id}')" ${user.isActive ? "checked" : ""}/></td>
        <td>
          <button onclick="handleDelete(${user.id})">Delete</button>
        </td>
      </tr>`;
  });
  tbody1.innerHTML = html;

}