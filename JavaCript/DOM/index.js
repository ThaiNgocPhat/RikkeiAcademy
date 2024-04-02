// const p = document.getElementById("demo")
// console.log("p", typeof p)

// p.innerHTML = "Hello cac ban"

// const tag = document.getElementsByTagName("p")
// for (var el in tag) {
//     tag[el].innerHTML = "Hello cac ban"
// }

// const title = document.getElementsByClassName("title")
// console.log("title", title)

// const title = document.querySelector("#title")
// title.innerHTML = `
//     <button>Submit</button>
// `

// const linkGG = document.getElementById("linkGG")
// linkGG.style.color = "red"
// linkGG.style.textDecoration = "none"

// //thêm attribute cho element
// title.class = "title"

// console.log("title", title)

// const inp = document.getElementById("submit")
// inp.placeholder = "Your full name"

//setAttribute => tham số 1: attribute, tham số 2: value
// inp.setAttribute("placeholder", "Your password")

//Các phương thức để thao tác với phần tử trong DOM


// const congTinh = document.getElementById("congTinh")
// const h3 = document.createElement("h3")

// h3.textContent = "Cong Tinh yeu mau hong, ghet su gia doi"
// h3.style.color = "pink"
// congTinh.appendChild(h3)

// document.body.onload = function() {
    // const newDiv = document.createElement("div")
    // const newContent = document.createTextNode("Cong Tinh dep trai")
    // newDiv.appendChild(newContent)

    // const currentDiv = document.getElementById('div1')
    // document.body.insertBefore(newDiv, currentDiv)

//     const tabl = document.createElement("table")
//     tabl.innerHTML = `
//         <tr>
//             <th>ID</th>
//             <th>Username</th>
//         </tr>
//         <tbody>
//             <td>1</td>
//             <td>Nguyen Minh Hung</td>
//         </tbody>
    
//     `
//     tabl.style.border = "1px solid #000"
//     tabl.style.marginTop = "15px"
    
//     const div1 = document.getElementById("div1")
//     div1.appendChild(tabl)
// };

// const btnEl = document.getElementById("btn")
// btnEl.addEventListener("click", function(event) {
    
// })

// const cT = document.getElementById("congTinh")
// cT.addEventListener("click", function() {
//     cT.innerHTML = "Oopps!"
// })

// function displayDate() {
//     document.getElementById("demo").innerHTML = Date()
// }

// function mOver() {
//    const listDiv= document.getElementsByTagName("div")[1]
//    listDiv.innerHTML = "Thank You "
// }

// function mOut(obj) {
//     obj.innerHTML = "Mouse over me"
// }



//BÀI TẬP VỀ DOM:

//bài tập 1:
//Cho layout:this is a text.this is a text.this is a text
//khi ấn nút "Hide text",dòng chữ ẩn đi
//khi ấn nút "Show text" dòng chữ hiện lên
// const hideText = document.getElementById("hideText")
// const showText = document.getElementById("showText")
// const text = document.getElementById("text")
// showText.addEventListener("click", function() {
//     text.style.display = " flex " //hiện đoạn text lên 
// })
// hideText.addEventListener("click", function(){
//     text.style.display = " none " //ẩn đoan text đi
// })


//bai tập 2:cho một layout:
//Khi click vào nút Open Modal, một hộp chứa dòng text “Some text in the 
//Modal” sẽ được hiển thị ra và màn hình xung quanh phải tối đi.
//Khi click vào nút “x” hoặc màn hình tối xung quanh, Modal ở trên phải ẩn đi.
const openModal = document.getElementById("openModal")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const overlay = document.getElementById("overlay")

openModal.addEventListener("click", function() {
    modal.style.display = "block"
    overlay.style.display = "block"
})


