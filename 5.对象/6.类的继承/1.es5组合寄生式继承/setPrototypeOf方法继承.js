// 父类
function Animal(type, name, age, sex) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Animal.prototype.print = function () {
  console.log(`种类 : ${this.type}`);
  console.log(`名字 : ${this.name}`);
  console.log(`年龄 : ${this.age}`);
  console.log(`性别 : ${this.sex}`);
}

// 子类
function Dog(name, age, sex) {
  Animal.call(this, '犬类', name, age, sex);
}

// 使用es6的Object.setPrototypeOf(obj,prototype)--> 指定obj的原型到prototype上
Object.setPrototypeOf(Dog.prototype, Animal.prototype);


Dog.prototype.sayName = function () {
  console.log(this.name);
}

const dog = new Dog("点点", 3, 'male');



