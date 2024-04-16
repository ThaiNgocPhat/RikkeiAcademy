let electricTwo = document.getElementById('electric-two');
let products =JSON.parse(localStorage.getItem('products')) || [];
console.log(products);
function getElectricTwo() {
    let html = '';
    for (let i = 9; i < 18 && i < products.length; i++) {
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
