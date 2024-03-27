//function:viết một lần sử dụng nhiều lần
//function là một khối lệnh thực hiện một nhiệm vụ cụ thể nào đó


//bài tập 1:Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// function square(a){
//     return a*a;
// }
// console.log(`Bình phương của a là: ${square(5)}`);

//bài tập 2:Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được.
// function acreage(r){
// return Math.PI*r*r;
// }
// console.log(acreage(5));
// function perimeter(r) {
//   return Math.PI * r;
// }
// console.log(perimeter(5));

//bài tập 3:Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào
// function factorial(n){
//     let giaiThua = 1;
//     for(let i = 1; i <= n; i++){
//         giaiThua *= i;
//     }
//     return giaiThua;
// }
// console.log(factorial(5));

//bài tập 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không.
// Nếu là ký tự số hàm trả về true ngược lại trả về false.
// let number = prompt("Number: ")
// function checkNumber(number) {
//     if(typeof number === "number"){
//       return true;
//     }else{
//       return false;
//     }
//   }
//   console.log(checkNumber(number));

//bài tập 5:Viết hàm nhận vào 3 số nguyên bất kỳ
//trả về số nguyên có giá trị nhỏ nhất.
// let number = parseInt(prompt("Nhập số nguyên 1: "));
// let number1 = parseInt(prompt("Nhập số nguyên 2: "));
// let number2 = parseInt(prompt("Nhập số nguyên 3: "));
// function minNumber(number, number1, number2){
//   let min = number;
//   if(min > number1){
//     min = number1;
//   }else if(min > number2){
//     min = number2;
//   }
//   return min;
// }
//   console.log(minNumber(number, number1, number2));

//bài tập 6:Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không.
// Nếu là nguyên dương trả về true, ngược lại trả về false.
// let number = parseInt(prompt("Nhập số nguyên: "));
// function checkNumber(number){
//   if(number > 0){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(checkNumber(number));

//bài tập 7:Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
// let number = parseInt(prompt("Nhập số nguyên 1: "));
// let number1 = parseInt(prompt("Nhập số nguyên 2: "));
// function changeNumber(number, number1){
//   let number2 = number;
//   number = number1;
//   number1 = number2;
//   return [number, number1]
// }
// console.log(changeNumber(number,number1));

//bài tập 8:Viết hàm truyền vào mảng số nguyên bất kỳ,
// sau đó đảo ngược mảng số nguyên đó.
// let arr = [1, 2, 3, 4, 5];
// function reverseArr(arr){
//   return arr.reverse();
// }
//  console.log(reverseArr(arr));

//bài tập 9:Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, 
//kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. 
//Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
// let arr = ["a", "b", "c", "d", "e","a","a","d"];
// let char = prompt("Nhập ký tự: ");
// function checkChar(arr, char){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === char){
//             count++;
//         }
//     } 
//     if(count > 0){
//         return count;
//     }else{
//         return -1;
//     }
// }
// console.log(checkChar(arr, char));

//bài tập 10:Viết chương trình cho người dùng nhập vào 3 số
//viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó
// let number = parseInt(prompt("Nhập số nguyên 1: "));
// let number1 = parseInt(prompt("Nhập số nguyên 2: "));
// let number2 = parseInt(prompt("Nhập số nguyên 3: "));
// function minNumber(number, number1, number2){
//     let min = number;
//     if(min > number1){
//     min = number1;
//     }else if(min > number2){
//     min = number2;
//     }
//     return min;
// }
//     console.log(minNumber(number, number1, number2));


//bài 11:Viết hàm kiểm tra xem số người dùng nhập vào có phải là số nguyên tố hay không?
// let number = parseInt(prompt("Nhập số nguyên: "));
// function checkNumber(number){
//     if(number < 2){
//         return false;
//     }
//     for(let i = 2; i <= Math.sqrt(number); i++){
//         if(number % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkNumber(5));


//bài tập 12:Viết hàm trả về tất cả các cặp số có tổng bằng 10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function sum10(arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 10){
//                 result.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return result;
// }
// console.log(sum10(arr));

//bài tập 13: Cho người dùng nhập vào chuỗi kí tự. Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng
// let str = prompt("Nhập chuỗi: ");
// function checkChar(str){
//     let result = {};
//     for(let i = 0; i < str.length; i++){
//         if(result[str[i]]){
//             result[str[i]]++;
//         }else{
//             result[str[i]] = 1;
//         }
//     }
//     return result;
// }
// console.log(checkChar(str));


//bài tập 14:Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Thực thi hàm vừa khởi tạo
// function factorial(n){
//     let giaithua = 1;
//     for(let i = 1; i <= n; i++){
//         giaithua *= i;
//     }
//     return giaithua;
// }
// console.log(factorial(5))

//bài tập 15:cho một hàm bất kỳ,viết hàm để sắp xếp từ nhỏ đén lớn
let arr = [1, 3, 2, 5, 4];
function sort(arr){
    return arr.sort();
}
console.log(sort(arr));


//bài tập 16:viết chương kiểm tra xem năm người dùng nhập vô có phải là năm nhuận không
// let year = parseInt(prompt("Nhập năm: "));
// function checkYear(year){
//     if(year % 4 && year % 100 == 0 || year % 400){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(checkYear(year));