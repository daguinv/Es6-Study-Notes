// 面向对象中，将一个对象所有成员的定义统称为类

// 构造函数 构造器
function Animal(type,name,age,sex){
  this.type = type;
  this.name = name;
  this.age = age;
  this.sex = sex;
}

// 定义原型方法
Animal.prototype.print = function(){
  console.log(`种类:${this.type}`);
  console.log(`姓名:${this.name}`);
  console.log(`年龄:${this.age}`);
  console.log(`性别:${this.sex}`);  
}

const dog = new Animal('dog','旺财','3','male');
dog.print();


for(let i in dog){
  console.log(i);
}