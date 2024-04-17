let details = document.getElementById("details");
let product = JSON.parse(localStorage.getItem('product')) || [];
// console.log(product.fullname);

function displayProduct() {
    details.innerHTML = `
    <div class="product-details">
        <div class = "details-img-btn">
            <div class = "details-img">
            <img src="${product.image}" alt="..." />
            </div>
            <div class = "details-btn">
            <button onclick = "handleDecrease()">-</button>
            <span id = "quantity"></span>
            <button onclick = "handleIncrease()">+</button>
            </div>
        </div>
        <div class="product-description">
            <span>${product.fullname}</span>
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
            <button onclick="addToCart()">Buy now</button>
        </div>
    </div>
    `;
}
displayProduct();

let quantity = 1; 
let quantitySpan = document.getElementById('quantity');
function displayNumberProduct() {
    quantitySpan.innerHTML = quantity;
}
displayNumberProduct();

function handleDecrease() {
    if (quantity > 1) {
        quantity--;
        displayNumberProduct();
    }
}

function handleIncrease() {
    if (quantity < product.quantity) {
        quantity++;
        displayNumberProduct();
    }
}

let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
console.log(currentUser);
console.log(currentUser.products);
function addToCart() {
    if (currentUser.access_token === "" || currentUser.access_token === undefined) {
        FuiToast.error("Please must login");
        window.location.href = '../Login/Login.html';
    } else {
        const findProductIndex = currentUser.products.findIndex(ele => ele.name == product.fullname);
        console.log(findProductIndex);
        if (findProductIndex !== -1) {
            currentUser.products[findProductIndex].quantity += quantity;
        } else {
            currentUser.products.push({
                name: product.fullname,
                price: product.price,
                quantity: quantity,
                image: product.image,
                id: product.id
            });
        }
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location.href = '../Pay/Pay.html';
    }
}




let sumQuantity = 0;
for(i in currentUser.products){
    sumQuantity += currentUser.products[i].quantity;
}
let cartNumber = document.querySelector('#cart-number');
function displayCartNumber(){
    if(sumQuantity > 0 ){
        cartNumber.innerHTML = sumQuantity;
    }
} 
displayCartNumber();


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