//demo 1
// let students = ["Anh", "Trân", "Tính", "Sáng"];
// console.log(students.length);
// console.log(students[0]);
// console.log(students.length - 1);
//truy xuất các phần tử trong mảng
// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

//for of()
// for (let student of students){
//     console.log(student);
// }

//push():đẩy thêm phần tử vào mảng cuối cùng
// let students = ["Anh", "Trân", "Tính", "Sáng"];
// students.push("Phát");
// console.log(students);

//splice():thêm phần tử vào vị trí bất kỳ trong mảng
// let students = ["Anh", "Trân", "Tính", "Sáng"];
// students.splice(1, 0, "Phát");
// console.log(students);


//join():chuyển mảng thành chuỗi
// let students = ["Anh", "Trân", "Tính", "Sáng"];
// let studentsString = students.join(", ");
// console.log(studentsString);

//reverse():đảo ngược mảng
// let students = ["Anh", "Trân", "Tính", "Sáng"];
// students.reverse();
// console.log(students);


//forEach():duyêt qua từng phần tử trong mảng
// students.forEach(function(student, index){
//     console.log(index, student);
// });

//filter():lọc ra những phần tử thỏa mãn điều kiện
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numbersFilter = numbers.filter(number => number < 3) //numbers.filter(chứa điều kiện)
// console.log(numbersFilter);

//map():thêm một phần tử vào mảng mà vẫn giữ nguyên mảng cũ.ta sẽ nhận được mảng cũ + phần tử mới
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numbersMap = numbers.map((numbers) => numbers * 2);
// console.log(numbersMap);


//sort():sắp xếp mảng(tăng dần, giảm dần)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);
// console.log(numbers);


//concat():nối mảng với mảng khác
// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];
// let arr = [...numbers1, ...numbers2];
// console.log(arr);
// const numbers3 = numbers1.concat(numbers2);
// console.log(numbers3);  

//reduce():tính tổng các phần tử trong mảng
// const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(total);

//find():tìm kiếm phần tử đầu tiên trong mảng thỏa mãn điều kiện
// const numberFind = numbers.find(number => number > 5);
// console.log(numberFind);
// const ages = [18, 22,32, 33, 16, 40];
// const ageFind = ages.find((age) => age > 25);
// console.log(ageFind);

//for in (): lấy ra index của mảng
// for(let index in students){
// console.log(studenta);

//findIndex():tìm kiếm vị trí của phần tử đầu tiên thỏa mãn điều kiện
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const findIndex = numbers.findIndex(number => number > 5);
// console.log(findIndex);


//slice():cắt mảng từ vị trí bắt đầu đến vị trí kết thúc
// const numbersSlice = numbers.slice(1, 4);
// console.log(numbersSlice);


//toString():chuyển mảng thành chuỗi
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numbersString = numbers.toString();
// console.log(numbersString);

// BÀI TẬP MẢNG

//bài tập 1:nhập một số x và tìm vị trí giá trị x,nếu có in ra vị trí, nếu không in ra -1
// let arr = [2,4,5,7,8];
// let position = -1;
// let x = parseInt(prompt("Nhập vào một số x: "));
// for(let i = 0; i < arr.length; i++){
//     if(x === arr[i]){
//         position = i;
//     }
// }
// console.log(position);

//bài tập 2: tính tổng các phần tử trong mảng
// let arr = [1,2,3,4,5];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

//bai tap 3: tìm số lớn nhất và nhỏ nhất trong mảng
// let arr = [3,4,5,4,5];
// let max = arr[0];
// let min = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log(`${max} và ${min}`);


//bài tập 4: sắp xếp theo thứ tự tăng dần trong một mảng
// let arr = [2,9,6,9,7,8];
// for(let i = 0; i < arr.length; i++){
//     for(let j = i +1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);
// let arrSort = arr.sort((a,b) => a - b);
// console.log(arrSort);


//bài tập 5:in mảng theo thứ tự nghịch đảo
// let arr = [2,9,8,7,9];
// let arrReverse = arr.reverse((a,b) => a - b);
// console.log(arrReverse);


//bài tập 6:tìm phần tử lớn thứ hai trong mảng
// let arr = [2,9,8,7,9];
// let max = arr[0];
// let secondMax = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         secondMax = max;
//         max = arr[i];
//     }
//     else if(arr[i] > secondMax && arr[i] < max){
//         secondMax = arr[i];
//     }
// }
// console.log(secondMax);

// bài tập 7:sắp xếp từ nhỏ đến lớn và đảo ngược mảng
// let x = [1,4,2,5,9];
// let xSort = x.sort((a,b) => a - b);
// let xReverse = x.reverse();
// console.log(xReverse);
// for(let i = x.length -1; i >= 0; i--){
//     console.log(x[i])
// }

//bài tập 8:Viết một chương trình JavaScript để tìm một giá tri được nhập vào từ hộp thoại có nằm trong mảng hay không.
//Nếu có in ra vị trí của phần tử đó.
// let arr = [2,4,5,7,8];
// let x = parseInt(prompt("Nhập vào một số x: "));
// for(let i = 0; i < arr.length; i++){
//     if(x === arr[i]){
//         console.log(`Giá trị ${x} nằm ở vị trí ${i}`);
//     } else {
//         console.log("-1");
//     }
// } 


//bài tập 9: thêm sửa xoá bằng splice
//(splice(start, deleteCount, item1, item2, ...))
//thay thế số 9 bằng số 1
// let arr = [1,4,2,5,9];
// arr.splice(4, 1, 1);
// console.log(arr);
//xoá số 4 và số 2
// arr.splice(1, 2);
// console.log(arr);
//thêm số 8 vào vị trí đầu tiên
// arr.splice(0, 0, 8);
// console.log(arr);

//bài tập 10:Mô phỏng ứng dụng todo list, tạo sẵn một mảng todoList có sẵn 2 phần tử
//Sử dụng những kiến thức thao tác với mảng (C/R/U/D), hỏi người dùng command mà người dùng muốn nhập vào thông qua 4 chữ cái C/R/U/D :
//sử dụng switch case để thực hiện các chức năng tương ứng
//C — Create:Cho người dùng nhập vào todo mới, sau đó in ra toàn bộ phần tử có trong todoList theo dạng :
//1. Go to bed at 11pm
//2. Do homework at 8pm 
//3. New todo
//R — Read:In ra toàn bộ phần tử có trong todoList giống phần C
//U — Update:Hỏi người dùng vị trí phần tử muốn update
//Hỏi người dùng nội dung muốn update → tiến hành update
//Sau đó in ra toàn bộ phần tử có trong todoList giống phần C
//D — Delete:Hỏi người dùng vị trí phần tử muốn delete
//Tiến hành delete
//Sau đó in ra toàn bộ phần tử có trong todoList giống phần C
// let todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
// let choice = prompt("Enter your command (C/R/U/D): ");
// switch(choice){
//     case "C":
//         let newTodo = prompt("Enter new todo: ");
//         todoList.push(newTodo);
//         for(let i = 0; i < todoList.length; i++){
//             console.log(`${i + 1}. ${todoList[i]}`);
//         }
//         break;
//     case "R":
//         for(let i = 0; i < todoList.length; i++){
//             console.log(`${i + 1}. ${todoList[i]}`);
//         }
//         break;
//     case "U":
//         let updatePosition = parseInt(prompt("Enter position you want to update: "));
//         let updateContent = prompt("Enter new content: ");
//         todoList[updatePosition - 1] = updateContent;
//         for(let i = 0; i < todoList.length; i++){
//             console.log(`${i + 1}. ${todoList[i]}`);
//         }
//         break;
//     case "D":
//         let deletePosition = parseInt(prompt("Enter position you want to delete: "));
//         todoList.splice(deletePosition - 1, 1);
//         for(let i = 0; i < todoList.length; i++){
//             console.log(`${i + 1}. ${todoList[i]}`);
//         }
//         break;
//     default:
//         console.log("Invalid command");
//         break;
// }

//bài tập 1:Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và 
//hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
// let arr = [100,0,12,5,50,22,23,99,90,100];
// let count = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] >= 10){
//         count++;
//     }
// }
// console.log(count);


//bài tập 2:Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau. 
// Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
// let arr = [100,0,12,5,50,22,23,99,90,10];
// let count = 0;
// let max = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//         count = i;
//     }
// }
// console.log(`Phần tử lớn nhất là ${max} và nằm ở vị trí ${count}`);


//bài tập 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên. 
//Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.
// let arr = [100,0,12,5,50,22,23,99,90,10];
// let max = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         arr[i] = max;
//     }
// }   
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// let average = sum / arr.length;
// console.log(`Phần tử lớn nhất là ${max} và giá trị trung bình của mảng là ${average}`);


//bài tập 4:Viết chương trình khởi tạo nhập vào một mảng số nguyên 
//và đảo ngược các phần tử trong mảng đó.
// let arr = [100,0,12,5,50,22,23,99,90,10];
// arr.reverse();
// console.log(arr);


//bài tập 5:Viết chương trình đếm số nguyên âm trong một chuỗi.
// let arr = [100,0,12,5,50,22,23,99,90,10];
// let count = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         count++;
//     }
// }
// console.log(count);


//bài tập 6: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. 
//Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không? 
//Nếu có thuộc mảng số nguyên thì in ra "Number X is in the array" 
//còn lại in ra "Number X is not in the array".
// let arr = [100,0,12,5,50,22,23,99,90,10];
// let x = parseInt(prompt("Nhập vào một số x: "));
// let check = false;
// for(let i = 0; i < arr.length; i++){
//     if(x === arr[i]){
//         check = true;
//     }
// }if(check){
//     console.log(`Number ${x} is in the array`);
// }
// else{
//     console.log(`Number ${x} is not in the array`);
// }


//bài tập 7:Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. 
//Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không? Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.
// let arr = [100,0,12,5,50,22,23,99,90,10];
// let x = parseInt(prompt("Nhập vào một số x: "));
// let check = false;
// for(let i = 0; i < arr.length; i++){
//     if(x === arr[i]){
//         check = true;
//         arr.splice(i, 1);
//     }
// }if(check){
//     console.log(arr);
// }else{
//     console.log(`Number ${x} is not in the array`);
// }


//bài tập 8:Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. 
//Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
// let arr = [100,0,12,5,50,22,23,99,90,10];
// arr.sort((a,b) => b - a);
// console.log(arr);


//bài tập 9:Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử, 
//gọi là mảng a và b. Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên. 
//Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c.
// let a = [1,2,3,4,5,6,7,8,9,10];
// let b = [11,12,13,14,15,16,17,18,19,20];
// let c = [...a, ...b];
// let c = a.concat(b);
// console.log(c)

//bài tập ngoại truyện:Write a JavaScript program that accepts a number as input and inserts dashes (-) 
//between each even number. For example if you accept 025468 the output should be 0-254-6-8.   
// const str = "245468";
// const strSplit = str.split("");
// let result = []; 
// for (let i = 0; i < strSplit.length; i++) {
//     if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) { //i - 1 là hai số liền nhau
//     result.push('-', str[i]);
//     } else {
//     result.push(str[i]);
//     }
// }
// console.log(result.join('')); // Output: 2-454-6-8
// const number = 245468;
// const numberString = number.toString();
// let result = [];
// for (let i = 0; i < numberString.length; i++) {
//     if (numberString[i - 1] % 2 === 0 && numberString[i] % 2 === 0) {
//         result.push('-', numberString[i]);
//     } else {
//         result.push(numberString[i]);
// }
// }
// console.log(result.join(''));