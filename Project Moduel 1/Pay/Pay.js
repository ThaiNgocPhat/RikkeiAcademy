let tbody = document.getElementById('tbody');
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
const allProduct = currentUser.products;
console.log(allProduct);
function displayProduct(){
    let html = '';
    for(let i in allProduct){
        html +=`
        <tr>
            <td>${parseInt(i)+1}</td>
            <td>${allProduct[i].name}</td>
            <td><img src="${allProduct[i].image}" style="width: 250px; height: 250px"></td>
            <td>${parseInt(allProduct[i].price)}</td>
            <td>${allProduct[i].quantity}</td>
            <td>${parseInt(allProduct[i].price)* allProduct[i].quantity}</td>
            <td><button onclick = "handleDelete(${allProduct[i].fullname})">Delete</button></td>
        </tr>
        `;
    }
    tbody.innerHTML = html;
}
displayProduct();
const totalPrice = document.getElementById('totalPrice');
function displayMoney(){
    let sum = 0;
    for(let i in currentUser.products){
        sum += parseInt(currentUser.products[i].price) * currentUser.products[i].quantity;
    }
    totalPrice.innerHTML = `Total price: ${sum}$` ;
}
displayMoney();


function handleCheckOut(){
    alert("Thank you for your purchase");
    window.location.href = '../Home/Home.html';
    currentUser.products = [];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

function handleDelete(name){
    let index = currentUser.products.findIndex(product => product.fullname === name);
    currentUser.products.splice(index, 1);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    displayProduct();
    displayMoney();
}



 //lấy email hiển thị lên trang chủ,ẩn user và hiện lên button logout
 let currentEmail = document.getElementById('current-email');
 if(currentUser.access_token !== undefined && currentUser.access_token !== ""){ //điều kiện check xem đã đăng nhập chưa 
     document.getElementById('btn-sign-out').style.display = 'flex';//nếu đã đăng nhập thì hiện button logout
     document.getElementById('btn-sign-in').style.display = 'none';//ẩn button login
 }else{
    document.getElementById('btn-sign-out').style.display = 'none';//ẩn button logout
     document.getElementById('btn-sign-in').style.display = 'flex';//hiện button login
 }
 currentEmail.innerHTML = currentUser.email;
 
 //khi ấn vào logout thì sẽ xóa thông tin user và chuyển về trang login
 function handleSignOut(){
     localStorage.removeItem('currentUser');//xoá curentUser trên local
     window.location.href = '../Login/Login.html';//chuyển về trang login
     FuiToast.success('Sign out successfully.'); //thông báo đăng xuất thành công
 }