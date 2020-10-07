// 抽象类：Animal不是用来创建对象的
class Animal {
  constructor(type, name, age, sex) {
    if(new.target === Animal){
      throw new TypeError("不能通过Animal创建对象,应该通过子类创建")
      
    }
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  print() {
    console.log(`种类 : ${this.type}`);
    console.log(`名字 : ${this.name}`);
    console.log(`年龄 : ${this.age}`);
    console.log(`性别 : ${this.sex}`);
  }
}

class Dog extends Animal{
  constructor(name,age,sex){
    super('犬类',name,age,sex);
    this.master = "zwq";
  }
}

let dog = new Dog('点点',3,'male')
console.log(dog);
