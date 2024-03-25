//bài tập 1: viết chương trình kiểm tra một số nguyên nhập từ bàn phím có phải là số chẵn hay không
//nếu số chẵn thì in ra màn hình "Even number",nếu không phải thì in ra màn hình "Odd number"
// const number = prompt("Enter a number: ");
// if (number % 2 === 0) {
//     console.log("Even number");
// }else {
//     console.log("Odd number");
// }


//bài tập 2:hãy viết đoạn mã cung cấp đầu vào cho mức lương của hai người. Nhiệm vụ của bạn là tìm ra người có mức lương cao nhất.
//Output: Nếu người thứ nhất có mức lương cao nhất, chương trình sẽ in ra person1 lên trên màn hình cửa sổ dòng lệnh. Nếu người thứ 2 có mức lương cao nhất
//chương trình sẽ in ra person2 lên trên màn hình cửa sổ dòng lệnh.bằng toán tử ba ngôi
// const person1 = prompt("Enter the salary of person1: ");
// const person2 = prompt("Enter the salary of person2: ");
// console.log(person1 > person2 ? "person1" : "person2");
// if (person1 > person2) {
//     console.log("person1");
// }   else {
//     console.log("person2");
// }   

//bài tập 3:viết đoạn mã cung cấp nhập đầu vào là một ký tự. Nhiệm vụ của bạn là tìm xem ký tự đã cho là bảng chữ cái viết hoa
//một bảng chữ cái viết thường hay một ký tự không phải là chữ cái.
// const character = prompt("Enter a character: ");
// if (character === character.toUpperCase()) {
//     console.log("upper-case alphabet");
// }
// else if (character === character.toLowerCase()) {
//     console.log("lower-case alphabet");
// }
// else {
//     console.log("not an alphabet");
// }


//bài tập 4:Cho phương trình bậc 2: a * x^2 + b *x +c = 0 (a!=0) được nhập lần lượt từ bàn phím. Hãy viết chương trình thực hiện in ra số nghiệm của phương trình trên bằng ngôn ngữ javascript. Kết quả hiển thị ra màn hình có các dạng sau:
// Nếu phương trình vô nghiệm (không có nghiệm số thực) in ra màn hình: The equation has no solution!
// Nếu phương trình có một nghiệm số thực, in ra màn hình: The equation has one real solution!
// Nếu phương trình có 2 nghiệm số thực phân biệt,và hai nghiệm x1 và x2, in ra màn hình: The equation has two real solutions! B1: Tính delta = b*b - 4 *a *c B2: Δ > 0: thì phương trình tồn tại 2 nghiệm thực phân biệt, tương tự Δ = 0 và Δ < 0 Check cả điều kiện a = 0 thì phương trình có nghiệm gì/
// const a = parseInt(prompt("Nhập a"));
// const b = parseInt(prompt("Nhập b"));
// const c = parseInt(prompt("Nhập c"));
// let delta = b*b - 4*a*c;
// if(delta > 0) {
//     const x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     const x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     console.log(`Phương trình có hai nghiệm thực là: x1 = ${x1}, x2 = ${x2}`);
// }   else if (delta === 0) {
//     const x = -b / (2 * a);
//     console.log(`Phương trình có một nghiệm thực là: x = ${x}`);
// }  else {
//     console.log("The equation has no solution!");
// }

///kiểm tra năm nhuận
// const year = parentInt(prompt("Nhập năm: "));
// if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//     console.log(`${year} là năm nhuận`);
// } else {
//     console.log(`${year} không phải là năm nhuận`);
// }


// Cho 1 số từ 0 đến 6. Viết chương trình để in ra thứ trong tuần
// const day = parseInt(prompt("Nhập ngày"));
// let dayString;
// switch (day) {
//     case 0:
//         dayString = "Chủ nhật";
//         break;
//     case 1:
//         dayString = "Thứ 2";
//         break;
//     case 2:
//         dayString = "Thứ 3";
//         break;
//     case 3:
//         dayString = "Thứ 4";
//         break;
//     case 4:
//         dayString = "Thứ 5";
//         break;
//     case 5:
//         dayString = "Thứ 6";
//         break;
//     case 6:
//         dayString = "Thứ 7";
//         break;
// }
// console.log(dayString);


//Cho 2 biến kiểu số nguyên a, b và 1 biến kiểu ký tự c. Cả 3 biến này đều được nhập từ bàn phím. Biết biến c là 1 trong 4 ký tự 
//'+', '-', '*' hoặc '/'. Bạn hãy viết chương trình hiển thị giá trị của biểu thức khi áp dụng phép toán c lên a và b. 
//Ví dụ nếu bạn nhập a = 7, c = '+', b = 9 Thì màn hình sẽ hiển thị ra: 16 -> Gợi ý: sử dụng switch case
// const a = parseInt(prompt("Enter a: "));
// const c = prompt("Enter c: ");
// const b = parseInt(prompt("Enter b: "));
// switch (c) {
//     case '+':
//         console.log(a + b);
//         break;
//     case '-':
//         console.log(a - b);
//         break;
//     case '*':
//         console.log(a * b);
//         break;
//     case '/':
//         console.log(a / b);
//         break;
//     default:
//         console.log("Lỗi");
//         break;
// }



//Viết chương trình nhập vào tháng và hiển thị ra số ngày trong tháng đó. Xét cả trường hợp năm nhuận (tháng 2 có 29 ngày) -> Gợi ý: sử dụng switch case
// const month = parseInt(prompt("Nhập tháng"));
// const year = parseInt(prompt("Nhập năm"));
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(`${month}/${year} có 31 ngày`)
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(`${month}/${year} có 30 ngày`);
//         break;
//     case 2:
//         if (year % 4 ===0 && year % 100 !== 0 || year % 400 === 0) {
//             console.log(`${month}/${year} có 29 ngày`);
//         } else {
//             console.log(`${month}/${year} có 28 ngày`);
//         }
//         break;
//     default:
//         console.log("Tháng không hợp lệ");
//         break;
// }

//LUYỆN TẬP VỀ VÒNG LẶP

//bài tập 1:tinh tông các số từ 1 đến n
// const n = parseInt(prompt("Nhập n: "));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }  
// console.log(sum);

//bài tập 2:tính giai thừa của n
// const n = parseInt(prompt("Nhập n: "));
// let giaiThua = 1;
// for (let i = 1; i <= n; i++) {
//     giaiThua *= i;
// }
// console.log(giaiThua);

//bài tập 3:tính tổng số lẻ
// const n = parseInt(prompt("Nhập n: "));
// let sum = 0;
// for (let i = 1; i <= n; i += 2) {
//     sum += i;
// }
// console.log(sum);

//bài tập 4: Dãy Fibonacci
// const n = parseInt(prompt("Nhập n: "));
// let f1 = 1;
// let f2 = 1;
// console.log(f1);
// console.log(f2);
// let fn = 0;
// for (let i = 3;i <= n; i++){
//     fn = f1 + f2;
//     console.log(fn);
//     f1 = f2;
//     f2 = fn;
// }

//bài 7:Đếm số chữ số trong một số
// const n = parseInt(prompt("Nhập số n: "));
// let count = 0;
// for(let i = n; i > 0; i = Math.floor(i/10)){
//     count++;
// }
// console.log(count);

//bài 8:nhập số N và tính tổng số N đấy
// const n = parseInt(prompt("Nhập số n: "));
// let sum = 0;
// for (let i = n; i > 0;i = Math.floor(i/10)) {
//     sum += i % 10;
// }
// console.log(sum);

//bài tập 9:xác định số lớn nhất trong dãy số
// const n = parseInt(prompt("Nhập số n: "));
// let max = 0;
// for ( let i = n; i > 0; i = Math.floor(i/10)) {
//     if (i % 10 > max) {
//         max = i % 10;
//     }
// }
// console.log(max);

//bài tập 10:tính tổng bình phương tự nhiên liên tiếp
// const n = parseInt(prompt("Nhập số n: "));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i * i;
// }
// console.log(sum);

//bài tập 11: chuỗi palindrome
// const number = parseInt(prompt("Nhập số n: "));
// let palindrome = " ";
// for (let i = number; i > 0; i = Math.floor(i/10)) {
//     palindrome += (i % 10).toString();
// }
// if (number == palindrome) {
//     console.log("Đây là chuỗi palindrome");
// }   else {
//     console.log("Đây không phải là chuỗi palindrome");
// }

//bài 12:nhập một số kiểm tra xem đó có phải là số nguyên tố hay không
// const n = parseInt(prompt("Nhập số n: "));
// for(let i = 2; i <= Math.sqrt(n); i++){
//     if(n % i == 0){
//         console.log(`${n} không phải là số nguyên tố`);

//     } else {
//         console.log(`${n} là số nguyên tố`);
//     }
// }
// const n = parseInt(prompt("Nhập số n: "));
// let isPrime = true;
// for(let i = 2; i <= Math.sqrt(n); i++){
//     if(n % i == 0){
//         isPrime = false;
//     }
// }
// if(isPrime){
//     console.log(`${n} là số nguyên tố`);
// } else {
//     console.log(`${n} không phải là số nguyên tố`);
// }

//bài 13:hiển thị ra số dương đầu tiên chia hết cho 3,5,7 bằng vòng lặp for
// for(let i = 1; ; i++){
//     if(i % 3 == 0 && i % 5 == 0 && i % 7 == 0){
//         console.log(i);
//         break;
//     }
// }
// while(true){
//     const n = parseInt(prompt("Nhập số n: "));
//     if(n % 3 == 0 && n % 5 == 0 && n % 7 == 0){
//         console.log(n);
//         break;
//     }
// }

//bài tập 14:nhập 1 số nguyên n, in ra giai thừa của số đó,dùng vòng lặp while
// const n = parseInt(prompt("Nhập số n: "));
// let i = 1;
// let giaiThua = 1;
// while(i <= n){
//     giaiThua *= i;
//     i++;
// }
// console.log(giaiThua);


//bài tập 15: viết ra chuoưng trình in ra các số từ 1 đến 100.nếu chia hết cho 3 thì in ra
//"fiZZ",nếu chia hết cho 5 thì in ra "Buzz",nếu chia hết cho cả 3 và 5 thì in ra "FizzBuzz"
// const n = parseInt(prompt("Nhập số n: "));
// let i = 1;
// while (i <= n) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
//     i++;
// }

//bài tập 16: tính tổng 30 số đầu tiên chia hết cho 5.dùng while để giải
// let count = 0;
// let sum = 0 
// let i = 1;
// while(count < 30){
//     if(i % 5 == 0){
//         count++;
//         sum +=i;
//     }
//     i++;
// }
// console.log(sum);


//bài tập 17:nhập số N và in ra tất cả các số ước của N,sử dụng while để giải
// const n = parseInt(prompt("Nhập số n: "));
// let i = 1;
// while(i <= n){
//     if(n % i == 0){
//         console.log(i);
//     }
//     i++;
// }
// const n = parseInt(prompt("Nhập số n: "));
// for(let i = 1; i <= n; i++){
//     if(n % i == 0){
//         console.log(i);
//     }
// }

//bài tập 18:Viết một ứng dụng để in ra màn hình console một bảng cửu chương từ 1 đến 10.sử dụng for,while để giải
// for(let i = 1; i <= 10; i++){
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
//     console.log(`_ _ _ _ _ _ _`)
// }
// let i = 1;
// const n = parseInt(prompt(`Bang cuu chuong cua n`));
// let a = undefined;

// while (i <= 10) {
//     a=n*i;
//   console.log(`${n} * ${i} = ${a}`);
//     i++;
// }


//bài tập 19:game đoán số
//có một biến boolean đúng sai.thoát vòng lặp
//tạo một biến count = 0 đến số lần đoán,nếu số nhập vào bằng với số Game thì break để kết thúc vòng lặp while
//nếu đoán ba lần không đúng thì thoát vòng lặp và in ra "bạn thua cuộc"
// let number = 8;
// let count = 0;
// while (count < 3) {
//     let n = parseInt(prompt(`nhap tu 1 den 10`))
//     if (n == number) { alert(`dung roi bro`); break; }
//     else if (n > number) { alert(`so nho hon`); }
//     else if (n < number) { alert(`so lon hon`); }
//     count++;

// }
// if (count == 3) { alert(`ban da thua`) }



//bài tập 20:Viết chương trình nhập vào số N. Hiển thị các số nguyên tố từ 0 → N.	
// const n = parseInt(prompt("Nhập số n: "));
// while (n < 2) {
//     n = parseInt(prompt("Nhập lại số n: "));
// }
// for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }



// bài tập 21:tính tổng 30 số đầu tiên chia hết cho 7.dùng while để giải
// let count = 0; tạo biến đếm
// let sum = 0; tạo biến cộng
// let i = 1; khi dùng while phải thêm dữ liệu này
// while(count < 30){
//     if(i % 7 == 0){
//         count++;
//         sum +=i;
//     }
//     i++;
// }
// console.log(sum);


//bài tập 22:tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5
//trong khoảng 2000 đến 3200(tính cả 2000 và 3200).các số thu được in ra một chuỗi trên một dòng
//và được phân cách bởi dấu phẩy
// let sum = " ";
// for (let i = 2000; i <= 3200; i++) {
//     if (i % 7 === 0 && i % 5 !== 0) {
//         sum += i + ", ";
//     }
// }
// console.log(sum);
// let i = 1;
// let sum = '';
// while(i <= 3200){
//     if(i % 7 === 0 && i % 5 !== 0){
//         sum += i + ", ";
//     }
//     i++;
// }
// console.log(sum);


//baì tập 23 continue:hãy đếm số lượng các số lẻ không chia hết cho 5 và 7
//nằm trong một khoảng a và b,với a và b nhập từ bàn phím
// let count = 0;
// for(let i = 3; i <= 9; i++){
//     if(i % 2 !== 0 && i % 5 !== 0 && i % 7 !== 0){
//         count++;
//     }
// }
// console.log(count);
// let count = 0;
// for( let  i = 3; i <= 9; i++){
//     if( i % 2 === 0 || i % 5 === 0 || i % 7 === 0){
//     continue;
// }
//     count++;
//     console.log(i);
// }
// console.log(`Số thoả mãn là ${count} `);

//bài tập 24:nhập một số nguyên dương n > 0 từ bàn phím
//in ra giá trị tổng bình phương của tất cả các số lẻ nhỏ hơn hoặc bằng n
//dùng while và continue để giải
// const n = parseInt (prompt("Nhập số n:"));
// let sum = 0;
// let i = 1;
// while(i <= n){
//     if(i % 2 === 0){
//         i++;
//         continue;
//     }
//     sum += i * i;
//     i++;
// }
// console.log(sum);
// for(let i = 1; i <= n; i++){
//     if(i % 2 === 0){
//         continue;
//     }
//     sum += i * i;
// }
// console.log(sum);

//bài tập 25:Chúng ta sẽ phát triển một ứng dụng nhiều chức năng cho phép người dùng chọn chức năng để sử dụng.
//Menu gồm :
//- Kiểm tra tính chẵn lẻ của 1 số.
//- Kiểm tra số nguyên tố.
//- Kiểm tra một số có chia hết cho 3 không.
//- Thoát
//Gợi ý các bước thực hiện:
//Bước 1: Khai báo biến choice để ghi nhớ lựa chọn của người dùng.
//Bước 2: Sử dụng vòng lặp while để hiển thị menu như yêu cầu và cho phép người dùng nhập lựa chọn của họ.
//Bước 3: Sử dụng cấu trúc điều kiện switch … case để xét giá trị người dùng nhập vào và điều hướng đến chức năng tương
//ứng . Nếu người dùng nhập không hợp lệ thì thông báo nhập sai và yêu cầu nhập lại.
// let choice;
// let isCheck = true;
// while(isCheck){
//     choice = parseInt(prompt(`Mời bạn nhập số mình chọn: .
//     1.Kiểm tra tính chẵn lẻ của số.
//     2.Kiểm tra số nguyên tố.
//     3.Kiểm tra số có chia hết cho 3 hay không
//     4.Thoát`));
//     switch(choice){
//         case 1:
//             const number = parseInt(prompt("Nhập số: "));
//             if(number % 2 === 0){
//                 console.log("Số chẵn");
//             } else {
//                 console.log("Số lẻ");
//             }
//             break;
//         case 2:
//             const number2 = parseInt(prompt("Nhập số: "));
//             let isPrime = true;
//             for(let i = 2; i <= Math.sqrt(number2); i++){
//                 if(number2 % i === 0){
//                     isPrime = false;
//                     break;
//                 }
//             }
//             if(isPrime){
//                 console.log("Số nguyên tố");
//             } else {
//                 console.log("Không phải số nguyên tố");
//             }
//             break;
//         case 3:
//             const number3 = parseInt(prompt("Nhập số: "));
//             if(number3 % 3 === 0){
//                 console.log("Số chia hết cho 3");
//             } else {
//                 console.log("Số không chia hết cho 3");
//             }
//             break;
//         case 4:
//             isCheck = false;
//             break;
//         default:
//             console.log("Nhập sai, vui lòng nhập lại");
//             break;
//     }
//}


//Trong phần này, chúng ta sẽ phát triển một ứng dụng tính chu vi và diện tích theo từng loại hình dựa trên menu chức năng.
//Menu gồm :
//- Tính chu vi và diện tích hình chữ nhật .
//- Tính chu vi và diện tích hình tam giác
//- Tính chu vi và diện tích hình tròn.
//- Thoát
//Gợi ý các bước thực hiện:
//Bước 1: Khai báo biến choice để ghi nhớ lựa chọn của người dùng.
//Bước 2: Sử dụng vòng lặp while để hiển thị menu như yêu cầu và cho phép người dùng nhập lựa chọn của họ.
//Bước 3: Sử dụng cấu trúc điều kiện switch … case để xét giá trị người dùng nhập vào và điều hướng đến chức năng tương
var choice;
let isCheck = true;
while(isCheck){
    choice = parseInt(prompt(`Mời bạn nhập số mình chọn: .
    1.Tính chu vi và diện tích hình chữ nhật.
    2.Tính chu vi và diện tích hình tam giác.
    3.tính chu vi và diện tích hình tròn.
    4.Thoát`));
    switch(choice){
        case 1:
            var length = parseInt(prompt("Mời bạn nhập chiều dài: "));
            var width = parseInt(prompt("Mời bạn nhập chiều rộng: "));
            let choice2 = parseInt(prompt(`Mời bàn chọn bàn nhậu tiếp thep: 
            1.Tính chu vi hình chữ nhật.
            2.Tính diện tích hình chữ nhật.`))
            switch(choice2){
                case 1:
                    console.log(`Chu vi hình chữ nhật là: ${(length + width) * 2}`);
                    break;
                case 2:
                    console.log(`Dtich hình chữ nhật là: ${length * width}`);
                    break;
            }
            break;
        case 2:
            const a = parseInt(prompt("Nhập cạnh a: "));
            const b = parseInt(prompt("Nhập cạnh b: "));
            const c = parseInt(prompt("Nhập cạnh c: "));
            const p = (a + b + c) / 2;
            let choice3 = parseInt(prompt(`Mời bạn chọn bước tiếp theo:
            1.Tính chu vi hình tam giác.
            2.Tính diện tích hình tam giác.`));
            switch(choice3){
                case 1:
                    console.log(`Chu vi hình tam giác là: ${a + b + c}`);
                    break;
                case 2:
                    console.log(`Diện tích hình tam giác là: ${Math.sqrt(p * (p - a) * (p - b) * (p - c))}`);
                    break;
            }
            break;
        case 3:
            const r = parseInt(prompt("Nhập bán kính: "));
            let choice4 = parseInt(prompt(`Mời bạn chọn bước tiếp theo:
            1.Tính chu vi hình tròn.
            2.Tính diện tích hình tròn.`));
            switch(choice4){
                case 1:
                    console.log(`Chu vi hình tròn là: ${2 * Math.PI * r}`);
                    break;
                case 2:
                    console.log(`Diện tích hình tròn là: ${Math.PI * r * r}`);
                    break;
            }
            break;
        case 4:
            isCheck = false;
            break;
        default:
            console.log("Nhập sai, vui lòng nhập lại");
            break;
    }
}

//số mũ tự nhiên
//cho một số tự nhiên N và số mũ P được nhập từ bàn phím
//hãy viết chương trình tính giá trị của N^P
//yêu cầu 0 <= P,N <= 15
// const N = parseInt(prompt("Nhập số N: "));//số tự nhiên
// const P = parseInt(prompt("Nhập số mũ P: "));//số mũ
// let result = 1;//kết quả
// for (let i = 0; i < P; i++) { //i chạy từ 0 đến P
//     result *= N; //result = result * N;
// }
// console.log(result);