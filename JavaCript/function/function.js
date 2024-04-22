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
// cách 2:sử dụng sort
// let arr = [4, 1, 2, 5, 3];
// function minNumber(arr){
//     return arr.sort((a, b) => a - b)[0];
// }
// console.log(minNumber(arr));


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
// let arr = [1, 3, 2, 5, 4];
// function sort(arr){
//     return arr.sort();
// }
// console.log(sort(arr));


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


//Bài tập 17: Hiển thị 20 số nguyên tố đầu tiên
//Gợi ý: Viết 1 function kiểm tra nó có là số nguyên tố hay không (boolean) và kết hợp while(count < 20) sau đó dùng if (nếu function thỏa mãn điều kiện) -> Hiển thị
//B1: Tạo một hàm kiểm tra số nguyên tố:
//- Nhận một số nguyên dương n
//- Duyệt từ 2 đến căn bậc hai của n:
//- Nếu n chia hết cho bất kỳ số nào trong khoảng này, trả về false
//- Nếu không có số nào chia hết, trả về true
//B2: Tạo biến đếm và đặt giá trị ban đầu là 0
//Sử dụng vòng lặp while và kiểm tra điều kiện (số lượng số nguyên tố đã tìm thấy < 20):
//- Kiểm tra nếu số hiện tại là số nguyên tố bằng cách sử dụng hàm kiểm tra
//- Nếu là số nguyên tố, tăng giá trị đếm và hiển thị số đó
// function isPrimeNumber(n){
//     if(n < 2){
//         return false;
//     }
//     for(let i = 2; i < Math.sqrt(n); i++){
//         if(n % i === 0){
//             return false;
//         }
//     }   
//     return true;
// }
// let count = 0;
// let n = 2;
// while(count < 20){
//     if(isPrimeNumber(n)){
//         console.log(n);
//         count++;
//     }
//     n++;
// }


//bài tập 18:Tổng 10 số nguyên tố đầu tiên
//B1: Tạo một hàm kiểm tra số nguyên tố:
//- Nhận một số nguyên dương n
//- Duyệt từ 2 đến căn bậc hai của n:
//- Nếu n chia hết cho bất kỳ số nào trong khoảng này, trả về false
//- Nếu không có số nào chia hết, trả về true
//B2: Tạo biến tổng và đặt giá trị ban đầu là 0
//Tạo biến đếm và đặt giá trị ban đầu là 0
//Sử dụng vòng lặp while và kiểm tra điều kiện (số lượng số nguyên tố đã tìm thấy < 10):
//- Kiểm tra nếu số hiện tại là số nguyên tố bằng cách sử dụng hàm kiểm tra
//- Nếu là số nguyên tố, cộng giá trị đó vào biến tổng và tăng giá trị đếm
//In ra tổng của 10 số nguyên tố đầu tiên
// function isPrimeNumber(n){
//     if(n < 2){
//         return false
//     }
//     for(let i = 2 ; i < Math.sqrt(n); i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true
// }
// let count = 0;
// let n = 2;
// while(count < 10){
//     if(isPrimeNumber(n)){
//         console.log(n)
//         count++;
//     }
//     n++
// }


//bài tập 19:Hiển thị số nguyên dương nhỏ nhất chia hết cho 3, 5 và 7
//B1: Tạo một hàm kiểm tra số:
//- Nhận một số nguyên dương n
//- Trả về true nếu n chia hết cho 3, 5 và 7, ngược lại trả về false
//B2: Tạo một biến number và đặt giá trị ban đầu là 1
//Sử dụng vòng lặp while và kiểm tra điều kiện hàm kiểm tra số với số hiện tại (number):
//- Nếu số hiện tại không thỏa mãn điều kiện, tăng giá trị number lên 1 và tiếp tục vòng lặp
//- Nếu số hiện tại thỏa mãn điều kiện, in ra số đó và kết thúc chương trình bằng lệnh break
// function checkNumber(n){
//     for(let i = 0; i <= n; i++){
//        if(n % 3 == 0 && n % 5 === 0 && n % 7 === 0){
//         return true;
//     }
// }
//     return false;
// }
// let number = 1;
// let isCheck = true;
// while(isCheck){
//     if(checkNumber(number)){
//         console.log(number);
//         break;
//     }
//     number++;
// }


//bài tập 20:Viết function tính ước chung lớn nhất và phân tích ước chung ra số nguyên tố và hiển thị số nguyên tố lớn nhất đó
//Ví dụ: UCLN của 48 và 60 là 12 vì 48 % 12 == 0 và 60 % 12 == 0
//Phân tích 12 ra nguyên tố: 12 = 2 *2* 3 -> In ra 3
// **Bước 1: Tính UCLN của hai số**
// _Bước 1.1: Tạo hàm để tính UCLN_
//- Đặt tên hàm là **`findGCD`**.
//- Sử dụng một vòng lặp for từ 1 đến giá trị nhỏ nhất của _a_ và _b_.
//- Trong mỗi lần lặp, kiểm tra xem i có phải là ước chung của cả _a_ và _b_ hay không bằng cách kiểm tra a%i==0 và b%i==0.
//- Nếu điều kiện trên đúng, gán giá trị của i cho biến gcd.
//- Cuối cùng, giá trị của gcd sẽ là UCLN của a và b.
// **Bước 2: Kiểm tra số nguyên tố**
//_Bước 2.1: Tạo hàm để kiểm tra số nguyên tố
//- Đặt tên hàm là **`isPrime`**.
//- Sử dụng một vòng lặp để kiểm tra từ 2 đến căn bậc hai của số đang xét.
//- Nếu số đang xét chia hết cho bất kỳ số nào trong khoảng đó, thì nó không phải là số nguyên tố.
//- Nếu không có số nào chia hết, thì số đó là số nguyên tố.
// **Bước 3: Sử dụng hàm findGCD để tính UCLN và phân tích thành số nguyên tố**
//- Gọi hàm **`findGCD`** với hai số cần tính UCLN.
//- Nhận giá trị UCLN và gán cho một biến, ví dụ: _gcd_.
//- Dùng vòng lặp để phân tích _gcd_ thành các số nguyên tố.
//- Kiểm tra từ 2 đến _gcd_ xem có phải là số nguyên tố hay không bằng cách sử dụng hàm **`isPrime`**.
//- Nếu là số nguyên tố, in ra màn hình.
// function findGCD(a, b){
//     for(let i = 1; i <= a && i <= b; i++){
//         if(a % i === 0 && b % i === 0){
//             var gcd = i;
//         }
//     }
//     return gcd;
// }
// function isPrime(n){
//     if(n < 2){
//         return false;
//     }
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// let gcd = findGCD(48, 60);
// console.log(gcd);
// for(let i = 2; i <= gcd; i++){
//     if(isPrime(i) && gcd % i === 0){
//         console.log(i);
//     }
// }


// function check(a){
//     if( a== 2){
//         return; //nếu có giá trị sau return thì sẽ nó sẽ xủa lý return dưới xong nó lên return trên để xử lý
        //ví dụ ở trường hơp này nó sẽ xủ lý phép tính ở dưới trước sau đó nó sẽ xử lý return trên
        //nhưng ở đây return ở trên không có giá trị sau return nên không xử lý tiếp phép tính mà nó sẽ trả về NaN
//     }
//     return a * check(a -1);
// }
// let result  = check(4);
// console.log(result);


// let result=1+3+"4"+6; //4+"4"+6="44"+6="446":cộng từng cặp số với nhau,còn cộng với chuỗi thì nó sẽ chuyển số đó thành chuỗi
// console.log(result);

// let x = [5,6,7,8];
// for (let a in x){
//     if(x[a] % 2 === 0){
//         console.log(x[a]);
//         break;
//     }
//     console.log(a)
// }

// console.log(1<2<3);//xét từ trái sang phải.1 < 2 => true. 1 < 3 => true
// console.log(3>2>1);//xét từ trái sang phải.3 > 2 => true. 1 > 1 => false

// let x = [3,5,6,9];
// let a = 0;
// let b = 0;
// for(let y in x){
//     if(y % 2 != 0){
//         a+=y;
//         b++
//     }
// }
// console.log(a)//đây là một string
// console.log(b)