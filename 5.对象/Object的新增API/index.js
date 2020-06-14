console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(+0 === -0)

// Object.is
console.log(Object.is(NaN,NaN))
console.log(Object.is(-0,+0))  

//Object.assign
const obj1 = {
    name:'haha',
    age:0,
    add:'ddfa'
}
const obj2 = {
    name:'zwq',
    age:18,
    add1:"dfvggrg"
}
const newObj = Object.assign({},obj1,obj2);  //会将从第二个参数起后面的对象混合到第一个中参数对象中，然后返回第一个参数对象
console.log(newObj)



// Object.getOwnPropertNames
const objhaha = {
    name:'zwq',
    age:18,
    2:2,
    10:10,
    7:7
}
console.log(Object.getOwnPropertyNames(objhaha));  
//结果返回一个数组。数组排在前面并按升序排序，其他没动