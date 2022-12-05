function foo(x) {
    function boo(y) {
      return x+y;
    }
    return boo ;
  }

let a = foo(5);
let b = a(4);
console.log(b);
let c = a(115);
console.log(c);
let x = foo(111);
let y = x(4);
console.log(y);