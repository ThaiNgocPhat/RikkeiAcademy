//{} id,title, des, status
//yêu cầu 1:clg tất cả việc đã hoàn thành làm trong nghày ra
//yêu cầu 2:CLG tất cả việc chưa hoàn thành trong ngày ra
//yêu cầu 3:thêm mới việc làm
//yêu cầu 4:cập nhập lại một việc làm

// let listWork = [{
//     id: 1,
//     title: "Đi chợ",
//     des:"Mua thịt",
//     status:true
// },
// {
//     id: 2,
//     title: "Nấu cơm",
//     des:"Chín chưa",
//     status:false
// }
// ]
// console.log(listWork);
//yêu cầu 1:clg tất cả việc đã hoàn thành làm trong nghày ra
// function doneWork(){
//     for( let i in listWork){
//         if(listWork[i].status == true){
//             console.log(listWork[i]);
//         }
//     }
// }
// doneWork();
//yêu cầu 2:clg tất cả việc chưa hoàn thành trong ngày ra
// function notDoneWork(){
//     for(let i in listWork){
//         if(listWork[i].status == false){
//             console.log(listWork[i]);
//         }
//     }
// }
// notDoneWork();
//yêu cầu 3:thêm mới việc làm
// function addWork(id,title,des,status){
//     let newWork = {
//         id: id,
//         title: title,
//         des: des,
//         status: status
//     }
//     listWork.push(newWork);
// }
// addWork(3,"Đi học","Đi học lập trình",false);

//yêu cầu 4:cập nhập lại một việc làm
// function updateWork(id){
//     for(let i in listWork){
//         if(listWork[i].id == id){
//             listWork[i].status = true;
//         }
//     }
// }
// updateWork(2);
// console.log(listWork);

//bài tập 2: Tạo một đối tượng chứa thông tin về một người
//bao gồm tên, tuổi, địa chỉ và số điện thoại.
// Sau đó truy xuất các thuộc tính của đối tượng trên
// let person = {
//     Name: 'Nguyễn Văn A',
//     age: 30,
//     adress: 'HCM',
//     phoneNumber:'0123456789'
// }
// console.log(person.phoneNumber);
// for(let i in person){
//     console.log(i + ":" + person[i]);
// }
// for (const property in person){
//     console.log(`${property}:${person[property]}`);
// }
//bài tập 3:Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây
//sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự (value tự điền)
//Sau đó tạo mảng “students” để chứa chúng
//Cuối cùng truy xuất các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”
// let student = {
//     id: 1,
//     name: 'Nguyễn Văn A',
//     gender: 'nam',
//     age: 20,
//     mark: 8
// }
// let newStudents = {
//     id: 2,
//     name:'Lê Thị B',
//     gender: 'nữ',
//     age: 22,
//     mark: 9
// }
// let students = [];
// students.push(student,newStudents);
// console.log(students);
//Với dữ liệu từ bài 3 hãy tìm ra học sinh có điểm trung bình cao hơn
//và in ra toàn bộ thông tin của học sinh đó
// let max = 0;
// let index = 0;
// for(let i in students){
//     if(students[i].mark > max){
//         max = students[i].mark;
//         index = i;
//     }
// }
// console.log(students[index]);
// console.log(max);
//Tạo thêm đối tượng “newStudent2” với các thuộc tính tương tự như đối tượng “newStudent” với value bất kỳ.
// Sau đó thêm vào mảng “students” (ở bài 2).
//Tính điểm trung bình của các học sinh trong mảng students trên.
//Nếu trên 7.5 thì đánh giá lớp khá, từ 5 đến 7.5 thì đánh giá lớp trung bình, dưới 5 là lớp yếu
// let newStudents2 ={
//     id: 3,
//     name:'Trần Văn C',
//     gender: 'other',
//     age: 21,
//     mark: 7
// }
// students.push(newStudents2);
// console.log(students);
// let TB = 0;
// for(let i in students){
//     TB += students[i].mark;
// }
// const avg = TB/students.length;
// console.log(avg);

// if(avg > 7.5){
//     console.log("Khá")
// }else if(5 < avg && avg < 7.5){
//     console.log("Trung bình")
// }else{
//     console.log("Yếu")
// }

//bài tập 4:let products = [{ id: 1, name: "Milk", count: 100}, {id: 2, name: "Yakult", count: 100},{id: 3, name: "Butter", count: 100,}];
// yêu cầu 1:Thêm đối tượng có các thuộc tính tương tự các đối tượng có trong mảng “products”
// let products = [{ id: 1, name: "Milk", count: 100}, {id: 2, name: "Yakult", count: 100},{id: 3, name: "Butter", count: 100,}];
// let newProduct = {
//     id: 4,
//     name:"Cheese",
//     count: 100
// }
// products.push(newProduct);
// console.log(products);

// yêu cầu 2:Xóa đối tượng có id là 2

// *****cách 1:
// ****const index = products.findIndex(product => product.id === 2) // tim kiem vi tri phan tu dau tien thoa man dieu kien, neu khong tim thay tra ve -1
// if(index !== -1) products.splice(index,1);
// else console.log("Khong tim thay phan tu")

// *****cách 2:
// *****Filter: de loc cac phan tu thoa man,xoa phan tu do va tra ve mang moi ma khong co phan tu do
// products = products.filter(product => product.id !==2)
// console.log(products)

// yêu cầu 3:Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
// for(let i in products){
//     if(products[i].id == 3){
//         products[i].count = 0;
//     }
// }
// console.log(products);

// ******cách 2:dùng findIndex
// const index = products.findIndex(product => product.id === 3)
// products[index].count = 0;
// console.log(products[index]);

// yêu cầu 4:Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không? Nếu Có in toàn bộ thông tin,
// nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”
// let isCheck = false
// let result = ""
// for(let i in products){
//     if(products[i].name === "Butter"){
//         isCheck = true
//         result = products[i];
//     }
// }
// if(isCheck){
//     console.log(result)
// }else{
//         console.log(`Không tìm thấy dữ liệu bạn cần tìm`);
//     }
// cách 2:dùng filter
// const filterButter = products.filter(product => product.name === "Butter")
// if(filterButter.length === 0) console.log("Không tìm thấy phần tử thoả mãn")
// else console.log(filterButter)

// cách 3:findIndex:
// const index = products.findIndex(product => product.name === "Butter")
//     if(index === -1){
//         console.log("Không tìm thấy dữ liệu cần tìm")
//     }else{
//         console.log(products[index]);
//     }

//bài tập 2:Tạo một class Dog có những thuộc tính:
//yêu cầu 1:Tên và tốc độ di chuyển
//yêu cầu 2:Có khả năng thực hiện sủa
//yêu cầu 3:Có khả năng bắt được mèo nếu tốc độ của chó lớn hơn
//yêu cầu 4:Tạo class Cat có những thuộc tính sau:Tên và tốc dộ di chuyển

// class Dog{
//     constructor(name,speed){
//         this.name = name;
//         this.speed = speed;
//     }
//     bark(){
//         console.log("Gâu gâu");
//     }
//     catchCat(cat){
//         if(this.speed > cat.speed){
//             console.log("Bắt được mèo");
//         }else{
//             console.log("Không bắt được mèo");
//         }
//     }
// }
// class Cat{
//     constructor(name,speed){
//         this.name = name;
//         this.speed = speed;
//     }
// }
// let dog = new Dog("Dog",10);
// let cat = new Cat("Cat",5);
// dog.bark();
// dog.catchCat(cat);

//bài tập 3:Tạo một đối tượng User chưa thông tin người dùng bao gồm: tên, email, địa chỉ, điện thoại. Tạo class Admin kế thừa từ class User.
//Thêm thuộc tính “role” vào 2 đối tượng Admin (value=1) và User (value =0)
//yêu cầu 1:Tạo danh sách người dùng (dạng mảng) và thêm vào 3 user, 1 admin
// class User{
//     constructor(name,email,adress,phone){
//         this.name = name;
//         this.email = email;
//         this.adress = adress;
//         this.phone = phone;
//         this.role = 0;
//     }
// }
// class Admin extends User{
//     constructor(name,email,adress,phone){
//         super(name,email,adress,phone);
//         this.role = 1;
//     }
// }
// let user1 = new User("A",")","HN","0123456789");
// let user2 = new User("B",")","HN","0123456789");
// let user3 = new User("C",")","HN","0123456789");
// let admin = new Admin("Admin",")","HN","0123456789");
// let users = [user1,user2,user3,admin];
// console.log(users);
//yêu cầu 2:Xóa người dùng thông qua tên của họ (không xóa được admin)
// function deleteUser(name){
//     for(let i in users){
//         if(users[i].name == name && users[i].role == 0){
//             users.splice(i,1);
//         }
//     }
// }
// deleteUser("A");
// console.log(users);
//yêu cầu 3:Sửa thông tin người dùng thông qua id (không sửa được thông tin admin)
// function updateUser(id,name,email,adress,phone){
//     for(let i in users){
//         if(users[i].role == 0){
//             users[i].name = name;
//             users[i].email = email;
//             users[i].adress = adress;
//             users[i].phone = phone;
//         }
//     }
// }
// updateUser(1,"D","D","D","D");
// console.log(users);
//yêu cầu 4:Thêm 1 nick admin vào mảng danh sách người dùng. Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
// let admin2 = new Admin("Admin2",")","HN","0123456789");
// users.push(admin2);
// for(let i in users){
//     if(users[i].role == 1){
//         console.log(users[i]);
//     }
// }




//bài tập 5:tạo ra dữ liệu để in ra nội dung dưới đây
//1.HTML
//Complete: false
//2.CSS
//Complete: false
//3.Basics of JavaScript
//Complete: false
//4.Node Package Manager(npm)
//Complete: false
//5.Git
//Complete: false
// let courses = [
//     {
//         id: 1,
//         name: "HTML",
//         complete: false
//     },
//     {
//         id: 2,
//         name: "CSS",
//         complete: false
//     },
//     {
//         id: 3,
//         name: "Basics of JavaScript",
//         complete: false
//     },
//     {
//         id: 4,
//         name: "Node Package Manager(npm)",
//         complete: false
//     },
//     {
//         id: 5,
//         name: "Git",
//         complete: false
//     }
// ]
// console.log(courses);
//yêu cầu :Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
//yêu cầu 1:C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành. Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên
//yêu cầu 2:R – In ra toàn bộ các khóa học theo mẫu trên
//yêu cầu 3:U – Hỏi người dùng vị trí update khóa học. Nếu tồn tại cho người dùng nhập vào tên muốn update và trạng thái mới. Update xong in lại như trên
//yêu cầu 4:D – Hỏi người dùng vị trị của khóa học muốn xóa. Tiến hành xóa và in ra như trên
//yêu cầu 5:E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”
// let choice = prompt("Nhập vào 5 chữ cái C/R/U/D/E");
// while(choice != "E"){
//     if(choice == "C"){
//         let name = prompt("Nhập vào tên khóa học mới");
//         let complete = prompt("Nhập vào trạng thái hoàn thành");
//         let newCourse = {
//             id: courses.length + 1,
//             name: name,
//             complete: complete
//         }
//         courses.push(newCourse);
//         console.log(courses);
//     }else if(choice == "R"){
//         console.log(courses);
//     }else if(choice == "U"){
//         let index = Number(prompt("Nhập vào vị trí cần update"));
//         let name = prompt("Nhập vào tên khóa học mới");
//         let complete = prompt("Nhập vào trạng thái hoàn thành");
//         courses[index - 1].name = name;
//         courses[index - 1].complete = complete;
//         console.log(courses);
//     }else if(choice == "D"){
//         let index = Number(prompt("Nhập vào vị trí cần xóa"));
//         courses.splice(index - 1,1);
//         console.log(courses);
//     }
//     choice = prompt("Nhập vào 5 chữ cái C/R/U/D/E");
// }
// console.log("Cảm ơn bạn đã đến với Rikkei Academy");





//bài tập 6:let stores = [{ id: 1, name: "Milk", count: 100}, {id: 2, name: "Yakult", count: 100},{id: 3, name: "Butter", count: 100,}];
// let carts=[]
//Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
//C – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
//R – In ra toàn bộ các sản phẩm trong stores và carts
//U – Hỏi người dùng vị trí update trong carts. Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo. Update xong in lại stores và carts
//D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại
//E – Biến chương trình thành vòng lặp vĩnh cữu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
// ************cách 1
// let stores = [
//     { id: 1, name: "Milk", count: 100 }, 
//     { id: 2, name: "Yakult", count: 100 },
//     { id: 3, name: "Butter", count: 100 },
// ];
// let carts = [];
// let isCheck = true;
// while (isCheck) {
//     let choice = prompt("Enter C/R/U/D/E: ");
//     switch (choice.toUpperCase()) {
//     case "C":
//         let nameProduct = prompt("Nhập sản phẩm muốn mua: ");
//         let found = false; // Biến này để kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
//         for (let i in stores) {
//         if (stores[i].name === nameProduct) {
//             for (let j in carts) {
//             if (carts[j].name === nameProduct) {
//               carts[j].count++; // Nếu sản phẩm đã có trong giỏ hàng, chỉ cần tăng số lượng mua
//               found = true; // Đặt biến found thành true để không thêm sản phẩm vào giỏ hàng
//                 break;
//             }
//         }
//             if (!found) { //Nếu sản phẩm chưa có trong giỏ hàng, thêm mới vào
//             carts.push({
//                 id: stores[i].id,
//                 name: stores[i].name,
//               count: 1, // Bắt đầu với count = 1 vì là lần đầu tiên mua sản phẩm này
//             });
//         }
//           stores[i].count--; // Giảm số lượng sản phẩm trong cửa hàng đi 1
//           break; // Thoát khỏi vòng lặp sau khi đã tìm thấy sản phẩm
//         }
//         }
//         break;
//     case "R":
//         console.log("Stores:");
//         console.log(stores);//gọi lại mảng
//         console.log("Cart:");
//         console.log(carts);//gọi lại mảng
//         break;
//     case "U":
//         let indexUpdate = parseInt(prompt("Enter the ID to update: "));
//         let countUpdate = parseInt(prompt("Enter the new quantity: "));
//         let cartIndex = carts.findIndex((item) => item.id === indexUpdate);//tạo biến cartIndex để tìm giá trị tròn carts
//         if (cartIndex !== -1) { //check điều kiện 
//         let storeIndex = stores.findIndex((item) => item.id === indexUpdate);//tạo biến storeIndex để tìm giá trị trong stores
//         if (storeIndex !== -1) { //check điều kiện 
//             stores[storeIndex].count = 
//             stores[storeIndex].count + carts[cartIndex].count - countUpdate;//công thức tính:lấy giá trị của sp trong stores cộng với sp bị lấy đi và nạp vào carts.sau đó trừ cho giá trị nhập vào từ countUpdate
//             carts[cartIndex].count = countUpdate;//giá trị count trong carts bằng với giá trị từ countUpdate
//         } else {
//             console.log("Product not found in stores and carts.");
//         }
//         }
//         break;
//     case "D":
//         let indexDelete = parseInt(prompt("Enter the ID to delete: "));
//         let cartIndexToDelete = carts.findIndex((item) => item.id === indexDelete);
//         if (cartIndexToDelete !== -1) {
//         stores.find((item) => item.id === indexDelete).count +=
//             carts[cartIndexToDelete].count;
//         carts.splice(cartIndexToDelete, 1);
//         } else {
//         console.log("Product not found in cart.");
//         }
//         break;
//     case "E":
//         console.log("Thank you for shopping at Rikkei Stores!");
//         isCheck = false;
//         break;
//     default:
//         console.log("Invalid input. Please try again.");
//         break;
// }
// }
// ********cách 2
// let stores = [
//   { id: 1, name: "Milk", count: 100 },
//   { id: 2, name: "Yakult", count: 100 },
//   { id: 3, name: "Butter", count: 100 },
// ];
// let carts = [];
// let isCheck = true;

// while (isCheck) {
//   let choice = prompt("Nhập vào 5 chữ cái C/R/U/D/E");
//   switch (choice) {
//     case "C":
//       let nameProduct = prompt("Nhập sản phẩm muốn mua: ");

//     //   Tìm kiếm sản phẩm trong cửa hàng
//       let productIndexStore = stores.findIndex( //taọ biến productIndexStore để tìm giá trị bằng findIndex
//         (product) => product.name === nameProduct //tìm sản phẩm theo tên
//       );

//     //   Kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa bằng some
//     //   Phương thức some() được gọi trên mảng carts. Phương thức này sẽ trả về true nếu có ít nhất một phần tử trong mảng thỏa mãn điều kiện được chỉ định, và ngược lại trả về false.
//     //   Nếu có ít nhất một sản phẩm có tên giống nameProduct, biến productInCart sẽ được gán giá trị true, ngược lại sẽ là false.
//     //   Ví dụ, nếu bạn muốn kiểm tra xem sản phẩm có tên là "Milk" có trong giỏ hàng hay không, đoạn code này sẽ trả về true nếu có ít nhất một sản phẩm trong giỏ hàng có tên là "Milk", và ngược lại trả về false.
//       let productInCart = carts.some((product) => product.name === nameProduct);//tìm giá trị thoả mãn điều kiện trong mảng
//       if (productInCart) {
//         // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng mua
//         carts.find((product) => product.name === nameProduct).count++;
//       } else {
//         // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới vào
//         carts.push({
//           id: stores[productIndexStore].id,
//           name: stores[productIndexStore].name,
//           count: 1, // Bắt đầu với count = 1 vì là lần đầu tiên mua sản phẩm này
//         });
//       }

//     //   Giảm số lượng sản phẩm trong cửa hàng đi 1
//         stores[productIndexStore].count--;
//         break;

//     case "R":
//         console.log("Stores: ", stores);
//         console.log("Carts: ", carts);
//         break;
//         case "U":
//         let indexUpdate = parseInt(prompt("Enter the ID to update: "));
//         let countUpdate = parseInt(prompt("Enter the new quantity: "));
//         let cartIndex = carts.findIndex((item) => item.id === indexUpdate);//tạo biến cartIndex để tìm giá trị tròn carts
//         if (cartIndex !== -1) { //check điều kiện 
//         let storeIndex = stores.findIndex((item) => item.id === indexUpdate);//tạo biến storeIndex để tìm giá trị trong stores
//         if (storeIndex !== -1) { //check điều kiện 
//             stores[storeIndex].count = 
//             stores[storeIndex].count + carts[cartIndex].count - countUpdate;
//         //   công thức tính:lấy giá trị của sp trong stores cộng với sp bị lấy đi và nạp vào carts
//         //   sau đó trừ cho giá trị nhập vào từ countUpdate
//             carts[cartIndex].count = countUpdate;//giá trị count trong carts bằng với giá trị từ countUpdate
//         } else {
//             console.log("Product not found in stores and carts.");
//         }
//         }
//         break;
//         case "D":
//         let indexDelete = parseInt(prompt("Enter the ID to delete: "));
//         let cartIndexToDelete = carts.findIndex((item) => item.id === indexDelete);
//         if (cartIndexToDelete !== -1) {
//         stores.find((item) => item.id === indexDelete).count +=
//             carts[cartIndexToDelete].count;
//         carts.splice(cartIndexToDelete, 1);
//         } else {
//         console.log("Product not found in cart.");
//         }
//         break;
//     case "E":
//         isCheck = false;
//         break;

//     default:
//         console.log("Lựa chọn không hợp lệ!");
//         break;
//   }
// }


//bài tập 7:Thực hành quản lý nhân viên
//Tạo một đối tượng “staff” chứa các thuộc tính sau id, name, age, salary. Sau đó tạo một mảng “company” chứa các đối tượng “staff” và thực hiện thêm, sửa, xóa danh sách nhân viên
//bước1:Tạo một đối tượng staff và thêm chúng vào mảng company
//tạo một đối tượng staff có các thuộc tính id, name, age,salary
//Tạo mảng company rồi sử dụng phương thức push() để thêm staff vào trong mảng.hiển thị ra mà hình
// let staff = {
//     id: 1,
//     name: "Ronaldo",
//     age: 30,
//     salary: 1000
// };
// let company = [];
// company.push(staff);
// console.log(company);
//bước 2:Thêm mới nhân viên vào trong mảng company
//Tạo các biến newName, newAge, newSalary cho người dùng nhập thông tin muốn thêm mới
//Khởi tạo đối tượng “newStaff” có chứa các thuộc tính tương tự như thuộc tính của đối tượng “staff”
//Sau đó sử dụng phương thức push() để thêm mới “newStaff” vào trong mảng “company”
// let newName = prompt("Nhập vào tên nhân viên mới");
// let newAge = prompt("Nhập vào tuổi nhân viên mới");
// let newSalary = prompt("Nhập vào lương nhân viên mới");
// let newStaff = {
//     id: company.length + 1,
//     name: newName,
//     age: newAge,
//     salary: newSalary
// }
// company.push(newStaff);
// console.log(company);
//bước 3:Cập nhật thông tin cho nhân viên có trong mảng “company” (ví dụ cập nhật thuộc tính “salary” thông qua id)
//Cho người dùng nhập vào id nhân viên và mức lương muốn thay đổi.
//Sử dụng hàm findIndex để tìm vị trí index của nhân viên đó trong mảng “company”
// let inputUpdate = Number(prompt("Nhập vào id nhân viên muốn cập nhật"));
// let updateSalary = Number(prompt("Nhập vào mức lương mới"));
// let indexUpdate = company.findIndex(x => x.id === inputUpdate);
// company[indexUpdate].salary = updateSalary;
// console.log(company);
//bước 4:Xóa thông tin cho nhân viên có trong mảng “company”
//Cho người dùng nhập vào id nhân viên muốn xóa
//Sử dụng hàm findIndex để tìm vị trí index của nhân viên đó trong mảng “company”
//Sử dụng hàm splice để xóa nhân viên đó khỏi mảng
// let id = Number(prompt("Nhập vào id nhân viên muốn xóa"));
// let index = company.findIndex(x => x.id === id);
// company.splice(index,1);
// console.log(company);
//Bài toàn trên có thể biến thành ứng dụng “Quản lý danh sách nhân viên” với việc cho người dùng nhập vào C/R/U/D/E và đưa toàn bộ code phía trên vào trong vòng lặp while
// let choice = prompt("Nhập vào C/R/U/D/E");
// while(choice != "E"){
//     if(choice == "C"){
//         let newName = prompt("Nhập vào tên nhân viên mới");
//         let newAge = prompt("Nhập vào tuổi nhân viên mới");
//         let newSalary = prompt("Nhập vào lương nhân viên mới");
//         let newStaff = {
//             id: company.length + 1,
//             name: newName,
//             age: newAge,
//             salary: newSalary
//         }
//         company.push(newStaff);
//         console.log(company);
//     }else if(choice == "R"){
//         console.log(company);
//     }else if(choice == "U"){
//         let inputUpdate = Number(prompt("Nhập vào id nhân viên muốn cập nhật"));
//         let updateSalary = Number(prompt("Nhập vào mức lương mới"));
//         let indexUpdate = company.findIndex(x => x.id === inputUpdate);
//         company[indexUpdate].salary = updateSalary;
//         console.log(company);
//     }else if(choice == "D"){
//         let id = Number(prompt("Nhập vào id nhân viên muốn xóa"));
//         let index = company.findIndex(x => x.id === id);
//         company.splice(index,1);
//         console.log(company);
//     }
//     choice = prompt("Nhập vào C/R/U/D/E");
// }
// console.log("Cảm ơn bạn đã đến với Rikkei Academy");




//bài tập 8:Tạo mảng todoList có chứa các đối tượng là các công việc cần làm và trạng thái hoàn thành của chúng
//Tạo các hàm để có thể thêm mới, cập nhật hay xóa các công việc trong mảng todoList trên
//bước 1: Tạo mảng array và cho người dùng nhập vào giá trị của n qua prompt
//Tạo mảng todoList chứa các đối tượng là các task cần làm như dưới đây
// const todoList = [
//   {id: 1, todo: "Have breakfast", completed: false},
//   {id: 2, todo: "Have breakfast", completed: true},
//   {id: 3, todo: "Have breakfast", completed: false},
// ];
// let n = Number(prompt("Nhập vào số công việc cần làm"));
// let todoList = [];
// for(let i = 0; i < n; i++){
//     let todo = prompt("Nhập vào công việc cần làm");
//     let task = {
//         id: i + 1,
//     }
//     task.todo = todo;
//     task.completed = false;
//     todoList.push(task);
// }
// console.log(todoList);
//bước 2:Tạo hàm có tên là newTodo() truyển vào tham số todo là các việc cần làm
//Tạo biến newld để cập nhật id cho công việc mới
//Dùng vòng for để duyệt các phần tử trong mảng todoList để gán giá trị cho newld
//Cập nhật lại đối tượng newTodo với các thuộc tính: id, todo, completed
//Sử dụng phương thức push để thêm công việc mới vào mảng todoList
// function newTodo(todo){
//     let newld = 0;
//     for(let i in todoList){
//         newld - todoList.length
//     }
//     let newTodo = {
//         id: newld,
//         todo: todo,
//         completed: false
//     };
//     todoList.push(newTodo);
// }
// newTodo("Đi tắm");
// console.log(todoList);
//bước 3: Tạo hàm updateTodo() để cập nhật lại trạng thái cho công việc
//Tạo biến findIndex để tìm vị trí index của id cần cập nhật trạng thái trong mảng todoList
//Sử dụng hàm có sẵn findIndex (viết kiểu arrow function) để trả về kết quả
//Gán lại giá trị todoList ở vị trí index được tìm thấy bằng true
// function updateTodo(id){
//     let findIndex = todoList.findIndex(x => x.id === id);
//     todoList[findIndex].completed = true;
// }
// updateTodo(1);
// console.log(todoList);
//bươc 4:Tạo hàm removeTodo() để cập nhật lại trạng thái cho công việc
//Tạo biến check = - 1 và sử dụng kỹ thuật cắm cờ để kiểm tra id đó có tồn tại trong mảng todoList không (có thể sử dụng hàm findIndex() như ở bước 3)
//Dùng vòng for để duyệt các phần tử, nếu tìm thấy id thì gán check = i
//Ra ngoài vòng for sử dụng phương thức splice xóa đi 1 phần tử ở vị trí check
// function removeTodo(){
//     let check = -1;
//     for(let i in todoList){
//         if(todoList[i].id === id){
//             check = i;
//         }
//     }
//     todoList.splice(check,1);
// }
// removeTodo();
// console.log(todoList);





//bài tập 9:Hướng dẫn tạo đối tượng và sử dụng các phương thức để thêm, sửa, xóa và in ra đối tượng sau khi thay đổi chúng
//bước 1:Tạo đối tượng players có các thuộc tính và giá trị
// let players = {
//     name:"Messi",
//     age: 30,
//     nation:"Argentina",
//     club:"PSG"
// }
//Bước 2: Thêm thuộc tính email với giá trị bất kỳ cho đối tượng players và in ra
// players.email = "messi@gmail.com"
// console.log(players);
//Bước 3: Thay đổi giá trị thuộc tính “club” thành “Barcelona” và in ra toàn bộ các cặp key, value của đối tượng players
// players.club = "Barcelona";
// for(let i in players){
//     console.log(i + ":" + players[i]);
// }
// console.log(players);
//bước 4:xoá thuộc tính age và in lại đối tượng players
// delete players.age;
// console.log(players);

