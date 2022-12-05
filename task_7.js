const arr = [0, "2", 3, 4, "s"];

function castArr(arr) {
    let newArray = [];
    let newItems = 0;
    for (let i = 0 ; i < arr.length; i++) {
        const item = arr[i];
        if (typeof item === 'string') {
            newItems = Number(item);
            newArray.push(newItems);
        } else if (typeof item === 'number') {
            newItems = Boolean(item);
            newArray.push(newItems);
            }
        }
        return newArray; 
}
let result = castArr(arr);
console.log(result);
