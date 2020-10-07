class Animal {
  constructor(type, name, age, sex) {
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

// 使用extents关键字实现继承
class Dog extends Animal{
  constructor(name,age,sex){
    // super 当函数使用表-- 父类构造函数
    // 继承的属性
    super('犬类',name,age,sex);
    this.master = "zwq";
  }
  short(){
    console.log("wangwang~~"); 
  }
  // 重写父类方法
  print(){
    // 在这里需要调用父类的print函数
    // super当做对象使用表 -- 父类的原型对象
    super.print();
    console.log(`主人 : ${this.master}`)
  }
}

let dog = new Dog('点点',3,'male')
console.log(dog);

// class Dog extends Animal{
//   // 不写constructor构造器,则会自动创建默认的构造器(和父类一致),默认super()传入参数相当于下面的写法
  // constructor(type,name,age,sex){
  //   super(type,name,age,sex);
  // }
// }