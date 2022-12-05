const obj1 = {a: 1};
const obj2 = {a: 1};
const obj3 = {b: 1};

function areEq(o1, o2) {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (o1[key] !== o2[key]) {
        return false;
      }
    }
    return true;  

}

console.log(areEq(obj1, obj2)); // true
console.log(areEq(obj1, obj3)); // false