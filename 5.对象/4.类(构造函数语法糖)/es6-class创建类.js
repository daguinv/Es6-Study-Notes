class Animal {
  // 使用构造器定义是私有属性和方法
  constructor(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sayName = function(){
      console.log(`my name is ${this.name}`);
      
    }
  }
  // 定义原型方法 定义在构造器外的函数不能被枚举
  print() {
    console.log(`种类:${this.type}`);
    console.log(`姓名:${this.name}`);
    console.log(`年龄:${this.age}`);
    console.log(`性别:${this.sex}`);
  }
}

const dog = new Animal('dog','旺财','3','male');
dog.print();

for(let i in dog){
  console.log(i);
}