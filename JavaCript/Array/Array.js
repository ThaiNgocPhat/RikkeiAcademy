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

//đẩy thêm phần tử vào mảng
//lấy code pull
// students.push("Vua lì đòn");
// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

//forEach()
//duyêt qua từng phần tử trong mảng
// students.forEach(function(student, index){
//     console.log(index, student);
// });

//filter()
//lọc ra những phần tử thỏa mãn điều kiện
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numbersFilter = numbers.filter(number => number < 3) //numbers.filter(chứa điều kiện)
// console.log(numbersFilter);

//map()
//thêm một phần tử vào mảng mà vẫn giữ nguyên mảng cũ.ta sẽ nhận được mảng cũ + phần tử mới
// const numbersMap = numbers.map(number => number * 2);
// numbersMap.push(10);
// console.log(numbersMap);

//reduce()
//tính tổng các phần tử trong mảng
// const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(total);

//find()
//tìm kiếm phần tử đầu tiên trong mảng thỏa mãn điều kiện
// const numberFind = numbers.find(number => number > 5);
// console.log(numberFind);

// const ages = [18, 22,32, 33, 16, 40];
// const ageFind = ages.find((age) => age > 25);
// console.log(ageFind);


//findIndex()
//tìm kiếm vị trí của phần tử đầu tiên thỏa mãn điều kiện
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const findIndex = numbers.findIndex(number => number > 5);
// console.log(findIndex);


//slice()
//cắt mảng
// const numbersSlice = numbers.slice(1, 4);
// console.log(numbersSlice);


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
let arr = [2,9,8,7,9];
let max = arr[0];
let secondMax = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        secondMax = max;
        max = arr[i];
    }
    else if(arr[i] > secondMax && arr[i] < max){
        secondMax = arr[i];
    }
}
console.log(secondMax);