const obj = {
  name:"zwq",
  age:18,
  [Symbol.iterator](){
    let i = 0;
    const names = Object.keys(this)
    return {
      next : () => {
        let key = names[i];
        let value = this[names[i]];
        const result =  {
          value: {key,value},
          done: i >= names.length
        }
        i++;
        return result;
      }
    }
  }
}
// 对象上没有Symbol.iterator属性，不是可迭代的。我们可以手动封装迭代器，让他可以迭代

const a = obj[Symbol.iterator]();
// 给对象封装迭代器后可以使用 for-of 遍历
for(let i of obj){
  console.log(i);
}

// 当在数组或函数里展开的必须是可迭代对象 
// 没有添加封装的迭代属性时是// TypeError: obj is not iterable
let array = [...obj]; 
console.log(array);

function fn(...obj){
  console.log(obj);
  
}
fn(...obj);  //调用迭代器，把值拿到，知道不能迭代为止
