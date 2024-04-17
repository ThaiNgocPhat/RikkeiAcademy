let electricTwo = document.getElementById('electric-two');
let products =JSON.parse(localStorage.getItem('products')) || [];
console.log(products);
function getElectricTwo() {
    let html = '';
    for (let i = 8; i < 19 && i < products.length; i++) {
        html += `
            <div id="electric-two">
                <span></span>
                <div class = "electric-two"> 
                    <div class="electric-two-description">
                        <span>${products[i].fullname}</span>
                        <p>${products[i].price}</p>
                    </div>
                    <img src="${products[i].image}" alt="..." />
                    <div class="button-accessories">
                    <button onclick="handlePay('${products[i].name}')">Buy now</button>
                    </div>
                </div>
            </div>
        `;
    }
    electricTwo.innerHTML = html;
}

getElectricTwo()

 //lấy email hiển thị lên trang chủ,ẩn user và hiện lên button logout
 let currentEmail = document.getElementById('current-email');
 let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
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