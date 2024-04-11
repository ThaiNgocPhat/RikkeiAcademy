//   <div class="box-body overflow-scroll">
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>NO.</th>
//                       <th>Code</th>
//                       <th>Name</th>
//                       <th>Type</th>
//                       <th>Price</th>
//                       <th>Edit/Delete</th>
            
//                     </tr>
//                   </thead>
//                   <tbody id="tbody1"></tbody>
//                 </table>
//               </div>
//                <!-- Modal -->
//           <div id="myModal" class="modal">
//             <!-- Nội dung modal -->
//             <div class="modal-content">
//               <span class="close">&times;</span>
//               <h2>Add Product</h2>
//               <form class="addProductForm" onsubmit="handleProduct()">
//                 <div class="code">
//                   <label for="productCode">Code:</label>
//                   <input type="text" id="productCode" name="productCode" required>
//                 </div>
//               <div class="name">
//                 <label for="productName">Name:</label>
//                 <input type="text" id="productName" name="productName" required>
//               </div>
//                 <div class="type">
//                   <label for="productType">Type:</label>
//                   <input type="text" id="productType" name="productType" required>
//                 </div>
//                 <div class="price">
//                   <label for="productPrice">Price:</label>
//                   <input type="text" id="productPrice" name="productPrice" required>
//                 </div>
//                 <button type="submit" id="saveProductBtn" onclick="handleSaveProduct()">Save Product</button>
//               </form>
//             </div>
//           </div>
const products = JSON.parse(localStorage.getItem("products")) || [];
console.log(products);
function displayProduct(){
    let tbody = document.getElementById("tbody1");
    let html = "";
    for(let i in products){
          html +=`
    <tr>
    <td>${index+1}</td>
    <td>${products[index].code}</td>
    <td>${products[index].name}</td>
    <td>${products[index].type}</td>
    <td>${products[index].price}</td>
    <td>
      <button onclick="handleEdit(${products[index].id})">Edit</button>
      <button onclick="handleDelete(${products[index].id})">Delete</button>
    </td>
  </tr>
    `;
    }
    tbody.innerHTML = html;
}
displayProduct();

// function handleAdd(){
//     var modal = document.getElementById("myModal");
//     modal.style.display = "block";
// }
function handleClose(){
   let add = document.getElementById("add");
   let modalContent = document.getElementsByClassName("modal-content")[0];
   let close = document.getElementsByClassName("close")[0];
   let dom = document.getElementsByClassName("tile"); 
}

// <div class="container">
//<h1>Modal Example</h1>
//<button id="openModal" onClick="">Open Modal</button>
//<p id="modal">Some text in the Modal</p>
//<p id="xicon">x</p>
//</div>
// const openModal = document.getElementById("openModal")
// const modal = document.getElementById("modal")
// const xicon = document.getElementById("xicon")
// const dom = document.getElementsByClassName("title-icon")[0]
// console.log(dom)
// openModal.addEventListener("click", function(){
//     dom.style.display = "flex"
// })
// xicon.addEventListener("click",function(){
//     dom.style.display = "none"
// })
