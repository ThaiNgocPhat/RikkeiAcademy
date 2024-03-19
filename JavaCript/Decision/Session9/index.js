//kiểm tra năm nhuận
// const year = parseInt(prompt("Nhập năm"));
// if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//     console.log(`${year} là năm nhuận`);
// } else{
//     console.log(`${year} không phải là năm nhuận`);
// }


//luyên tập vói cấu trúc switch case
// const day = parseInt(prompt("Nhập ngày"));
// const month = parseInt(prompt("Nhập tháng"));
// const year = parseInt(prompt("Nhập năm"));
// let monthString;
// switch (month) {
//     case 1:
//         monthString = "Tháng 1";
//         break;
//     case 2:
//         monthString = "Tháng 2";
//         break;
//     case 3:
//         monthString = "Tháng 3";
//         break;
//     case 4:
//         monthString = "Tháng 4";
//         break;
//     case 5:
//         monthString = "Tháng 5";
//         break;
//     case 6:
//         monthString = "Tháng 6";
//         break;
//     case 7:
//         monthString = "Tháng 7";
//         break;
//     case 8:
//         monthString = "Tháng 8";
//         break;
//     case 9:
//         monthString = "Tháng 9";
//         break;
//     case 10:
//         monthString = "Tháng 10";
//         break;
//     case 11:
//         monthString = "Tháng 11";
//         break;
//     case 12:
//         monthString = "Tháng 12";
//         break;
//     default:
//         monthString = "Không xác định";
//         break;
// }
// console.log(`${day} ${monthString} ${year}`);


//luyện tập với toán tử 3 ngôi
// const a = parseInt(prompt("Nhập số a"));
// const b = parseInt(prompt("Nhập số b"));
// const max = a > b ? a : b;
// console.log(`Số lớn nhất là ${max}`);


//tính chỉ số cân nặng của cơ thể
// const weight = parseFloat(prompt("Nhập cân nặng của bạn (kg)"));
// const height = parseFloat(prompt("Nhập chiều cao của bạn (m)"));
// const BMI = weight / (height * height);
// let BMIString;
// if (BMI < 16) {
//     BMIString = "Gầy cấp độ III";
// }
// else if (BMI < 17) {
//     BMIString = "Gầy cấp độ II";
// }
// else if (BMI < 18.5) {
//     BMIString = "Gầy cấp độ I";
// }
// else if (BMI < 25) {
//     BMIString = "Bình thường";
// }
// else if (BMI < 30) {
//     BMIString = "Thừa cân";
// }
// else if (BMI < 35) {
//     BMIString = "Béo phì cấp độ I";
// }
// else if (BMI < 40) {
//     BMIString = "Béo phì cấp độ II";
// }
// else {
//     BMIString = "Béo phì cấp độ III";
// }
// console.log(`Chỉ số BMI của bạn là ${BMI}, ${BMIString}`);


//máy tính đoen giản
// const a = parseInt(prompt("Nhập số a"));
// const b = parseInt(prompt("Nhập số b"));
// const operator = prompt("Nhập phép toán (+, -, *, /)");
// let result;
// switch (operator) {
//     case "+":
//         result = a + b;
//         break;
//     case "-":
//         result = a - b;
//         break;
//     case "*":
//         result = a * b;
//         break;
//     case "/":
//         result = a / b;
//         break;
//     default:
//         result = "Phép toán không hợp lệ";
//         break;
// }
// console.log(`Kết quả của phép toán ${a} ${operator} ${b} là ${result}`);



//tìm max-min
// const a = parseInt(prompt("Nhập số a"));
// const b = parseInt(prompt("Nhập số b"));
// const c = parseInt(prompt("Nhập số c"));
// let max = a;
// let min = a;
// if (max < b) {
//     max = b;
// }
// if (max < c) {
//     max = c;
// }
// if (min > b) {
//     min = b;
// }
// if (min > c) {
//     min = c;
// }
// console.log(`Số lớn nhất là ${max}`);
// console.log(`Số nhỏ nhất là ${min}`);


//ứng dụng tìm cung hoàng đạo
// const day = parseInt(prompt("Nhập ngày sinh"));
// const month = parseInt(prompt("Nhập tháng sinh"));
// let horoscope;
// switch (month) {
//     case 1:
//         if (day <= 20) {
//             horoscope = "Ma Kết";
//         } else {    
//             horoscope = "Bảo Bình";
//         }
//         break;
//     case 2:
//         if (day <= 19) {
//             horoscope = "Bảo Bình";
//         } else {
//             horoscope = "Song Ngư";
//         }   
//         break;
//     case 3:
//         if (day <= 21) {
//             horoscope = "Song Ngư";
//         } else {
//             horoscope = "Bạch Dương";
//         }
//         break;
//     case 4:
//         if (day <= 20) {
//             horoscope = "Bạch Dương";
//         } else {
//             horoscope = "Kim Ngưu";
//         }
//         break;
//     case 5:
//         if (day <= 21) {
//             horoscope = "Kim Ngưu";
//         }
//         else {
//             horoscope = "Song Tử";
//         }
//         break;
//     case 6:
//         if (day <= 22) {
//             horoscope = "Song Tử";
//         } else {
//             horoscope = "Cự Giải";
//         }
//         break;
//     case 7:
//         if (day <= 22) {
//             horoscope = "Cự Giải";
//         } else {
//             horoscope = "Sư Tử";
//         }
//         break;
//     case 8:
//         if (day <= 23) {
//             horoscope = "Sư Tử";
//         } else {
//             horoscope = "Xử Nữ";
//         }
//         break;
//     case 9:
//         if (day <= 23) {
//             horoscope = "Xử Nữ";
//         } else {
//             horoscope = "Thiên Bình";
//         }
//         break;
//     case 10:
//         if (day <= 23) {
//             horoscope = "Thiên Bình";
//         } else {
//             horoscope = "Thần Nông";
//         }
//         break;
//     case 11:
//         if (day <= 22) {
//             horoscope = "Thần Nông";
//         } else {
//             horoscope = "Nhân Mã";
//         }
//         break;
//     case 12:
//         if (day <= 21) {
//             horoscope = "Nhân Mã";
//         } else {
//             horoscope = "Ma Kết";
//         }
//         break;
//     default:
//         horoscope = "Không xác định";
//         break;
// }




