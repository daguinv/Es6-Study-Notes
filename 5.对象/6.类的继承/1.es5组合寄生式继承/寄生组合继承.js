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

function Dog(name, age, sex) {
  Animal.call(this, '犬类', name, age, sex);
}

inherit(Dog,Animal);
Dog.prototype.sayName = function(){
  console.log(this.name);
}

const dog = new Dog("点点",3,'male');

// 传入子类构造函数和父类构造函数实现
function inherit(current, target) {
  var prototype = object(target.prototype);
  prototype.constructor = current;
  current.prototype = prototype;
}

//返回一个创建好的对象,并未对象指定原型为传入函数的参数 
function object(o){
  function F(){};
  F.prototype = o;
  return new F();
}

