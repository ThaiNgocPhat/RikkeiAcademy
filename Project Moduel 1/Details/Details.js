let details = document.getElementById('details');
let product = JSON.parse(localStorage.getItem('product')) || {};
console.log(product);

function displayProduct() {
    details.innerHTML = `
    <div class="product-details">
        <img src="${product.image}" alt="..." />
        <div class="product-description">
            <span>${product.fullname}</span>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button onclick="handleBuyNow()">Buy now</button>
        </div>
    </div>
    `;
}
displayProduct();
function handleBuyNow() {
    window.location.href = '../Pay/Pay.html';
}