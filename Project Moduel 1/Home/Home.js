

 function handlePay() {
        let productName = document.getElementById('productName').textContent;
        let price = document.getElementById('price').textContent;
        let img = document.getElementById('img').src;
        let product = {
            name: productName,
            price: price,
            img: img
        };
        let productList = JSON.parse(localStorage.getItem('products')) || [];
        productList.push(product);
        localStorage.setItem('products', JSON.stringify(productList));
        displayProducts();
    }

    function displayProducts() {
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = '';

        // Lấy danh sách sản phẩm từ local storage
        let productList = JSON.parse(localStorage.getItem('products')) || [];

        // Hiển thị thông tin sản phẩm trên bảng
        productList.forEach(function(product, index) {
            let newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${index + 1}</td>
                <td><img src="path_to_image.jpg" alt="${product.name}"></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
            `;
            tbody.appendChild(newRow);
        });
    }

    // Hiển thị thông tin sản phẩm ban đầu khi tải trang
    displayProducts();