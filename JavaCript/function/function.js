//function:viết một lần sử dụng nhiều lần
//function là một khối lệnh thực hiện một nhiệm vụ cụ thể nào đó
let arr = [1, 2, 3];
let arr1 = [1, 2, 3, 4];
function arrSum(arrayNumber) {
    let sum = 0;
    for(let i = 0; i < arrayNumber.length; i++) {
        sum += arrayNumber[i];
    }
    console.log(sum);
}
arrSum(arr1);


