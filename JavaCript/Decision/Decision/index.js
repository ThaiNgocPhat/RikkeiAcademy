//bài tập 1:Viết chuong trình nhập số tuổi một người .Nếu >= 18 tuổi thì in ra đã đủ tuổi ,ngược lại in ra chưa đủ tuổi
// const age = parseInt(prompt("Nhập tuổi của bạn"));
// const result = age >= 18 ? "Đã đủ tuổi" : "Chưa đủ tuổi";
// console.log(result);


//bài tập 2:Viết chương trình nhập số giờ trong ngày.Nếu số giờ < 18 thì in ra "Good Morning",ngược lại in ra "Good Afternoon"
// const hour = parseInt(prompt("Nhập số giờ trong ngày"));
// const result = hour < 18 ? "Good Morning" : "Good Afternoon";
// console.log(result);


//bài tập 3:Viết chươnmg trình nếu trước 10h hiển thị Good Morning, nếu thời gian chưa tới 20h hiển thị Good Day,sau 20h hiển thị Good Evening
// const time = parseInt(prompt("Nhập thời gian"));
// const result = time < 10 ? "Good Morning" : time < 20 ? "Good Day" : "Good Evening";
// console.log(result);


//bài tập 4:Viết chương trình cho người nhập một số nguyên và kiểm tra xem số đó là số chẵn hay số lẻ(sử dụng if else)
// const number = parseInt(prompt("Nhập số nguyên"));
// if (number % 2 === 0) {
    // console.log(`${number} là số chẵn`);
// }
// else {
    // console.log(`${number} là số lẻ`);
// }


//baì tập 5:Viết chương trình cho người nhập một số nguyên và kiểm tra xem số đó là số chẵn hay số lẻ(sử dụng switch case)
// const number = parseInt(prompt("Nhập số nguyên"));
// switch (number % 2) {
//     case 0:
//         console.log(`${number} là số chẵn`)
//         break;
//     case 1:
//         console.log(`${number} là số lẻ`)
//         break;
// }


//bài tập 6: Viết chương trình cho phép người dùng nhập màu vào kiểm tra.Nếu nhập 1 trong các màu : xanh, đỏ,vàng thì hiển thị màu người dùng nhập.
//Nếu nhập màu khác hiển thị màu không hợp lệ!
// const color = prompt("Nhập màu");
// switch (color) {
//     case "xanh":
//     case "đỏ":
//     case "vàng":
//         console.log(`Màu bạn nhập là ${color}`);
//         break;
//     default:
//         console.log("Màu không hợp lệ");
// }


//bài tập 7:Viết chương trình cho phép người dùng nhập vào số nguyên x:
//Nếu x==0 thì in ra x có giá trị là 0;Nếu x>0 thì in ra x là số nguyên dương.Nếu x<0 thì in ra x là số nguyên âm.
// const x = parseInt(prompt("Nhập số nguyên x"));
// if (x === 0) {
    // console.log("x có giá trị là 0");
// }
// else if (x > 0) {
    // console.log("x là số nguyên dương");
// }
// else {
    // console.log("x là số nguyên âm");
// }


//bài tập 8: Tính chỉ số cân nặng BMI :
// Viết chương trình cho phép người dùng nhập vào cân nặng(kg) và chiều cao(m);
// Sau đó hiển thị kết quả phân loại theo chỉ số BMI dưới đây.
// bmi = weight / ( height ^ 2 );
// bmi < 18.5 : Underweight
// 18.5 <= bmi < 25 : Normal
// 25 <= bmi < 30 : Overweight
// bmi >= 30 : Obese
// const weight = parseFloat(prompt("Nhập cân nặng(kg)"));
// const height = parseFloat(prompt("Nhập chiều cao(m)"));
// const bmi = weight / (height * height);
// if (bmi < 18.5) {
//     console.log("Cân nặng hơi gầy một tí!");
// }
// else if (18.5 < bmi < 25) {
//     console.log("Sức khoẻ bình thường!");
// }
// else if (bmi >= 25) {
//     console.log("Cân nặng hơi béo một tí!");
// }
// else if (25 <= bmi < 30) {
//     console.log("Chuẩn bị béo phì rồi nha");
// }
// else if (30 <= bmi < 35){
//     console.log("Béo phì cấp độ 1");
// }
// else if (35 <= bmi < 40){
//     console.log("Béo phì cấp độ 2");
// } else {
//     console.log("Béo phì cấp độ 3");
// }


//bài tập 9:Viết chương trình cho phép người dùng nhập điểm các môn:Toán,Lí,Hoá,Văn, Sử , Địa (thang điểm 10);
//Sau đó tính điểm trung bình các môn học
//Hiển thị kết quả học tập theo loại như sau:8.0 <=ĐTB<=10: xếp loại GIỎI.
//6.5<=ĐTB<=7.9: xếp loại KHÁ.
//5.0<=ĐTB<=6.4: xếp loại TRUNG BÌNH.
//ĐTB<5.0 : xếp loại YẾU.
// const toan = parseFloat(prompt("Nhập điểm môn Toán"));
// const li = parseFloat(prompt("Nhập điểm môn Lí"));
// const hoa = parseFloat(prompt("Nhập điểm môn Hoá"));
// const van = parseFloat(prompt("Nhập điểm môn Văn"));
// const su = parseFloat(prompt("Nhập điểm môn Sử"));
// const dia = parseFloat(prompt("Nhập điểm môn Địa"));
// const dtb = (toan + li + hoa + van + su + dia) / 6;
// if (dtb >= 8) {
//     console.log("Xếp loại GIỎI");
// }
// else if (8 > dtb >= 6.5) {
//     console.log("Xếp loại KHÁ");
// }
// else if (6.5 >= dtb >= 5) {
//     console.log("Xếp loại TRUNG BÌNH");
// }
// else {
//     console.log("Xếp loại YẾU");
// }

//bài tập 10:Viết chương trình nhập vào số tháng trong năm,in ra số ngày trong tháng đó.
//Ví dụ : Người dùng nhập vào số 7 thì in ra tháng 7 có 31 ngày.
// const month = parseInt(prompt("Nhập số tháng trong năm"));
// switch (month) {
    // case 1:
    // case 3:
    // case 5:
    // case 7:
    // case 8:
    // case 10:
    // case 12:
        // console.log(`Tháng ${month} có 31 ngày`);
        // break;
    // case 4:
    // case 6:
    // case 9:
    // case 11:
        // console.log(`Tháng ${month} có 30 ngày`);
        // break;
    // case 2:
        // console.log(`Tháng ${month} có 28 hoặc 29 ngày`);
        // break;
    // default:
        // console.log("Tháng không hợp lệ");
// }

//ví dụ về hai dấu bằng và ba dấu bằng
// const a = 10;
// const b = "10";
// console.log(a == b);
// console.log(a === b); 
// const c = 0;
// const d = false;
// console.log(a == b);
// console.log(a === b);

// let,var,const
//từ khoá var khai báo được nhiều lâng,let và const chỉ khai báo được một lần,const không thể thay đổi giá trị
//hositing: var có thể sử dụng trước khi khai báo,let và const không thể sử dụng trước khi khai báo
// let name = "Phat";
// var age = 20;
// const country = "Vietnam";
// console.log(name,age,country);