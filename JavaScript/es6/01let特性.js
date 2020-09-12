// 1.不可以重复声明变量
var a = 1;
var a = 2;

let b = 1;
// let b = 2; // SyntaxError: Identifier 'a' has already been declared

// 2.块级作用域
{
  var c = 1;
}
console.log(c);
{
  let d = 1;
}
// console.log(d); // ReferenceError: d is not defined

// 3.不存在变量提升
console.log(e); // undefined
var e = 1; 
console.log(f); // ReferenceError: Cannot access 'f' before initialization
let f = 1;

// 4.不影响作用域链：
{
  let g = 1;
  function ss () {
    console.log(g); // 输出 1 虽然是let申明 但是并不影响js执行解析去外部寻找指定的变量
  }
  ss();
}