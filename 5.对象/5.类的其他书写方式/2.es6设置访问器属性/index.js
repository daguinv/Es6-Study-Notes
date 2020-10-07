class Animal {
  // 使用构造器定义是私有属性和方法
  constructor(type, name, age,height) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.height = height;
    this.sayName = function(){
      console.log(`my name is ${this.name}`);
    }
  }
  // 定义访问器属性 get set 后面跟属性名
  get age(){
    return this._age;
  }
  set age(value){
    if(value > 10){
      this._age = value;
    }else{
      this._age = 10 + value;
    }
  }
  
  // 定义原型方法 定义在构造器外的函数不能被枚举
  print() {
    console.log(`种类:${this.type}`);
    console.log(`姓名:${this.name}`);
    console.log(`年龄:${this.age}`);
    console.log(`身高:${this.height}`);
  }
}

const person = new Animal('man','jam',9,166);
// person.age = 9
person.print();

