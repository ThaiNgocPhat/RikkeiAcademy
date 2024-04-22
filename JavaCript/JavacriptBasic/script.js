// alert("Hello World");
// prompt("Mày bị gay gia đình mày có biết không ?");
// document.write("Xin chào các bạn");



//interger: int- số nguyên là số không có phần thập phân
//float/double: số thực có phần thập phân
//string: chuỗi ký tự
//boolean: true/false
//null: không có giá trị    
//undefined: không được khai báo
//Uppercase: chữ hoa toàn bộ
//Lowercase: chữ thường toàn bộ
//camelCase: viết hoa chữ cái đầu của từ sau



// const fullName = "Thái Ngọc Phát";
// const myAddress = 'Thành phố Hồ Chí Minh';
// const age = 27;
// const isMale = true;
// document.write("tôi tên là " + fullName + " tôi " + age + " tuổi " + "địa chỉ của tôi ở " + myAddress + " tôi là nam giới " + isMale);


// const fullName = "Trần Thị Huyền Trân";
// const age = 18;
// const myAddress = 'Hà Nội';
// const lenghtString = myAddress.length;//độ dài chuỗi
// if (lenghtString === 0) {
//     console.log("Không được đê trống địa chỉ");
// }
// document.write("Tôi là " + fullName + ",tôi " + age + " tuổi " + ",tôi ở " + myAddress);
// document.write(`Tôi là ${fullName}, tôi ${age} tuổi, tôi ở ${myAddress}`);



//Bài tập 1: 1 form gồm tên đăng nhập và mật khẩu,tên đăng nhập phải lớn hơn 6 ký tự, mật khẩu phải lớn hơn 8 ký tự và phải viết hoa hoàn toàn
// const username = "thaingocphat123";
// const password  = "THAINGOCPHAT";
// const lengthUsername = username.length;
// const lengthPassword = password.length;
// if (lengthUsername >= 6 &&
//     lengthPassword >= 8 &&
//     password === password.toUpperCase()) {
//     console.log("Đăng nhập thành công");
// }else{
//     console.log("Đăng nhập thất bại");
// }



//Bài tập 2:Cho 1 số nguyên và kiểm tra xem số đó có phải là dương hay âm, nếu là số dương thì in ra "số dương", nếu là số âm thì in ra "số âm"
// const number = 20;
// if (number > 0) {
//     console.log("Số dương");
// }else{
//     console.log("Số âm");           
// }



//thực hiện thuật toán tính điểm trung bình của 3 môn toán lý hóa và Average = (Math +  Physics+ Chemistry)/3
// const math = parseInt(prompt("Nhập số điểm Toán"));
// const physics = parseInt(prompt("Nhập số điểm Lý"));
// const chemistry = parseInt(prompt("Nhập số điểm Hóa"));
// const average = (math + physics + chemistry) / 3;
// if (average >= 5) {
//     console.log("Qua môn");
// } else{
//     console.log("Rớt môn");
// }


//Mô tả thuật toán chuyển đổi tiền tệ từ USD sang VND
// const usd = parseInt(prompt("Nhập số tiền USD"));
// const vnd = usd * 23000;
// console.log(`${vnd} VND`);



//Mô tả thuật toán tìm giá trị lớn nhất trong ba số
// const a = parseInt(prompt("Nhập số a"));
// const b = parseInt(prompt("Nhập số b"));
// const c = parseInt(prompt("Nhập số c"));
// if (a > b && a > c) {
//     console.log(`Số lớn nhất là ${a}`);
// }else if (b > a && b > c){
//     console.log(`Số lớn nhất là ${b}`);
// }else{
//     console.log(`Số lớn nhất là ${c}`);
// }


//Mô tả thuật toán tìm giá trị lớn nhất trong dãy số
// const a = parseInt(prompt("Nhập số a"));
// const b = parseInt(prompt("Nhập số b"));
// const c = parseInt(prompt("Nhập số c"));
// const d = parseInt(prompt("Nhập số d"));
// const e = parseInt(prompt("Nhập số e"));
// let max = a;
// if (max < b) {
//     max = b;
// } if (max < c) {
//     max = c;
// } if (max < d) {
//     max = d;
// } if (max < e) {
//     max = e;
// }
// console.log(`Số lớn nhất là ${max}`);
// let max = Number.MIN_SAFE_INTEGER;
// for (let i = 0; i < 5; i++) {
//     const number = parseInt(prompt(`Nhập số thứ ${i + 1}`));
//     if (number > max) {
//         max = number;
//     }
// }
// console.log(`Số lớn nhất là ${max}`);




//Mô tả thuật toán có cấu truc điều kiện
// const a = parseInt(prompt("Nhập số a"));
// const b = parseInt(prompt("Nhập số b"));
// const c = parseInt(prompt("Nhập số c"));
// if (a + b > c && a + c > b && b + c > a) {
//     console.log("Đây là 3 cạnh của 1 tam giác");
// }else{
//     console.log("Đây không phải là 3 cạnh của 1 tam giác");
// }


//Bài tập console đơn giản
// console.log("Hello World");


//Bài tập biến, kiểu dữ liệu và toán tử
// const a = 5;
// const b = 3;
// const c = a + b;
// console.log(c);


//bài tập Variables, Data Types, and Operators
// const a = 5;
// const b = 3;
// const c = a - b;
// console.log(c);
// const d = a * b;
// console.log(d);
// const e = a / b;
// console.log(e);
// const f = a % b;
// console.log(f);
// const g = a ** b;
// console.log(g);
// const h = a++;
// console.log(h);
// const i = b--;
// console.log(i);
// const j = a > b;
// console.log(j);
// const k = a < b;
// console.log(k);
// const l = a >= b;
// console.log(l);
// const m = a <= b;
// console.log(m);
// const n = a == b;
// console.log(n);


//Toán tử || thì trả về giá trị true đầu tiên
console.log(5 || 3);//5
console.log(0 || 3);//3
console.log(Nan|| 3);//3
console.log(undefined || 3);//3
//Toán tử && thì trả về giá trị false đầu tiên
console.log(5 && 3);//3
console.log(0 && 3);//0
console.log(Nan && 3);//Nan
console.log(undefined && 3);//undefined
//Toán tử  ??:nuli coalescing operator trả về giá trị đầu tiên khác null hoặc undefined
console.log(5 ?? 3);//5
console.log(0 ?? 3);//0
console.log(Nan ?? 3);//Nan
console.log(undefined ?? 3);//3
console.log(null ?? 3);//3