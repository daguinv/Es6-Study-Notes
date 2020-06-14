/**
 * 成员速写
 * 在ES5函数返回一个对象，属性值对应函数的变量，繁琐
 */
function createUser(loginId,loginPws,nickName){
    const sayHello = function (loginId,loginPws,nickName) {
        console.log()
    }
    return {
        sayHello,
        loginId:loginId,
        loginPws : loginPws,
        nickName:nickName,
        id: Math.random()
    }
}
/**
 * 在ES6中书写方式.
 */
function newCreateUser(loginId,loginPws,nickName){
    return {
        loginId,  //属性名是loginId,同时属性值是同名的变量的值
        loginPws,
        nickName,
        id: Math.random()
    }
}
console.log(newCreateUser(1,123,100))


// 方法速写

// ES5普通
const user = {
    name:'zwq',
    age:18,
    sayHello:function(){
        console.log(this.name,this.age);
    }
}

// ES6  相当于上面的写法  语法糖
const newUser = {
    name:'zwq',
    age:18,
    sayHello(){ 
        console.log(this.name,this.age);
    }
}


//计算属性名

// ES5
/*
const prop1 = "name";
const prop2 = "age";
const prop3 = "sayhello";
const userObj = {

}
userObj[prop1] = 'zwq';
userObj[prop2] = 18;
userObj[prop3] = function(){
    console.log(this[prop1],this[prop2]);
}
// console.log(userObj[prop3]())

*/
// Es6

const prop1 = "name";
const prop2 = "age";
const prop3 = "sayhello";

// 表达式可以是函数的返回值
const userObj = {
    [prop1] : 'zwq',
    [prop2] : 18,
    [prop3](){
        console.log(this[prop1],this[prop2])
    }
}
console.log(userObj[prop3]())