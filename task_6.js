const arr = [1, 2, 3, 4];

function powArr(arr) {
    let newArray = [];
    for (let i = 0 ; i < arr.length; i++) {
        newArr.push(arr[i]**2);
    }
    return newArray; 
}  

