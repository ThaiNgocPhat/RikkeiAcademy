//bài tập 1: In ra màn hình các số từ n đến 100
// let n = parseInt(prompt("Nhập số n: "));
// for(let i = n;i <= 100 ; i++){
//     console.log(i);
// }


//bài tập 2: nhập một số và tính giai thừa của môt số
// const n = parseInt(prompt("Nhập số n: "));
// let giaiThua = 1;
// for(let i = 1; i <= n; i++){
//     giaiThua *= i;
// }
// console.log(giaiThua);


//bài tập 3:nhập từ bàn phím hai số nguyên a và b.sau đó hiển thị các số chia hết cho 3 và 5 trong khoảng từ a đến b
// let a = parseInt(prompt("Nhập số a: "));
// let b = parseInt(prompt("Nhập số b: "));
// for(let i =a; i <= b; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }


//bài tập 4:nhập một số nguyên và tính tông các số đó
//VD: 1234 => 1+2+3+4 = 10
//8243 ?? 3 -> 8243 % 10 = 3
//Math.floor(8243 / 10) = 824
//824 % 10 = 4
//Math.floor(824 / 10) = 82
//82 % 10 = 2
//Math.floor(82 / 10) = 8
//8 % 10 = 8
//Math.floor(8 / 10) = 0
// let n = parseInt(prompt("Nhập số n: "));
// let sum = 0;
// for(let i = n; i > 0; i = Math.floor(i/10)){
//     sum += i % 10;
// }   
// console.log(sum);

//bài tập 4.1:nhập một số nguyên n > 0 và viết số nghịch đảo của nó
// const n = parseInt(prompt("Nhập số n: "));
// let sum = " ";
// for(let i = n; i > 0; i = Math.floor(i/10)){
//     sum += (i % 10).toString();
// }
// console.log(sum);

//Bài tập 7: Nhập từ bàn phím số nguyên n và hiển thị ra màn hình số các ước số của n.

//Ví dụ nếu nhập n = 12 thì chương trình sẽ hiển thị ra màn hình: 6
//Giải thích: 12 có 6 ước là 1, 2, 3, 4, 6, 12.in ra tất cả giá trị ước số của n
// const n = parseInt(prompt("Nhập số n: ")); 
// let count = 0;
// for(let i = 1; i <= n; i++){
//     if(n % i === 0){ //
//         count++;
//         console.log(i);
//     }
// }

//bài tập 8:nhập từ bàn phím hai số để bình phương của số thứ nhất và số thứ hai
//vd: nhập 2 và 3 => 2^3 = 8
// let a = parseInt(prompt("Nhập số a:"));
// let b = parseInt(prompt("Nhập số b:"));
// let result = 1;
// for(let i = 1; i <= b; i++){
//     result *= a;
// }
// console.log(result); 

//bài tập 9:tìm số lớn thứ hai trong chuỗi
// let arr = [2,9,8,7,9];
// let max = arr[0];
// let secondMax = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         secondMax = max;
//         max = arr[i];
//     }
//     if(arr[i] > secondMax && arr[i] < max){
//         secondMax = arr[i];
//     }
// }
// console.log(secondMax);