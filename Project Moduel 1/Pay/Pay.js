let payDescription = document.getElementById('pay-description');
let tbody = document.getElementById('tbody');
let totalPrice = document.getElementById('total-price');
let products =JSON.parse(localStorage.getItem('products')) || [];
function getPay() {
    let html = '';
    for(let i in products){
        html += `
            <tr>
                <td>${parseInt(i)+1}</td>
                <td><img src="${products[i].image}" alt="..." class = "pay-img" /></td>
                <td>${products[i].fullname}</td>
                <td>${products[i].quantity}</td>
                <td>${products[i].price}</td>
                <td><button onclick = "handleDeltePay(${products[i].name})">Delete</button></td>
            </tr>
            `;
    }
    tbody.innerHTML = html;
}
getPay();
function getTotalPrice(){
    let total = 0;
    for(let i in products){
        total += products[i].quantity * products[i].price;
    }
    totalPrice.innerHTML = total;
}
getTotalPrice();

//xoá sản phẩm
function handleDeltePay(name){
    const index = products.findIndex(product => product.name === name);
    products.splice(index,1);
    localStorage.setItem('products',JSON.stringify(products));
    getPay();
    getTotalPrice();
}
