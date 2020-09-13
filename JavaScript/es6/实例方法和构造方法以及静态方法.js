function Dog() {
  // 实例方法
  this.eat = function () {
    console.log('eat......');
  }
}
// 实例方法 / 原型方法
Dog.prototype.fight = function () {
  console.log('fight.......');
}

// Dog.eat(); // 实例方法不可以这样调用
// Dog.fight();

let dog = new Dog();
dog.eat(); // 实例方法正确的调用
dog.fight(); // 实例方法正确的调用
Dog.prototype.fight(); // 原型实例方法也可以这样调用

// 静态方法
Dog.say = function () {
  console.log('wangwangwangwangwang....');
}

Dog.say(); // 静态方法调用


// TODO 构造函数的执行步骤 如果直接执行构造函数不使用new关键字那么当前的this就是window/global,否则this是指定new 的实例对象
// function Dog(){
//   // 1.创建this变量，指向空对象
//   let this = {}; 
//   // 2.属性和方法被加入到this引用的对象中
//   this.name = '1111';
//   this.say = function(){
//     return "I am " + this.name;
//   }
//   // 3.返回this对象
//   return this;
// }

