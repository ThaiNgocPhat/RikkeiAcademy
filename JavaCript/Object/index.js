//bài tập 1:quản lý danh sách làm việc trong ngày
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
let student = {
    id: 1,
    name: 'Nguyễn Văn A',
    gender: 'nam',
    age: 20,
    mark: 8
}
let newStudents = {
    id: 2,
    name:'Lê Thị B',
    gender: 'nữ',
    age: 22,
    mark: 9
}
let students = [];
students.push(student,newStudents);
console.log(students);
//Với dữ liệu từ bài 3 hãy tìm ra học sinh có điểm trung bình cao hơn 
//và in ra toàn bộ thông tin của học sinh đó
let max = 0;
let index = 0;
for(let i in students){
    if(students[i].mark > max){
        max = students[i].mark;
        index = i;
    }
}
console.log(students[index]);
console.log(max);
//Tạo thêm đối tượng “newStudent2” với các thuộc tính tương tự như đối tượng “newStudent” với value bất kỳ.
// Sau đó thêm vào mảng “students” (ở bài 2). 
//Tính điểm trung bình của các học sinh trong mảng students trên. 
//Nếu trên 7.5 thì đánh giá lớp khá, từ 5 đến 7.5 thì đánh giá lớp trung bình, dưới 5 là lớp yếu
let newStudents2 ={
    id: 3,
    name:'Trần Văn C',
    gender: 'other',
    age: 21,
    mark: 7
}
students.push(newStudents2);
console.log(students);
let TB = 0;
for(let i in students){
    TB += students[i].mark;
}
const avg = TB/students.length;
console.log(avg);

if(avg > 7.5){
    console.log("Khá")
}else if(5 < avg && avg < 7.5){
    console.log("Trung bình")
}else{
    console.log("Yếu")
}