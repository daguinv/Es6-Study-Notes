// 使用迭代器实现斐波那切数列
function fn(){
  let pre1,pre2;
    pre1 = 1;
    pre2 = 1;
  return {
    next(){
      const result =  {
        value:pre1 + pre2,
        done:false
      }   
      pre2 = pre1; 
      pre1 = result.value;
      return result;
    }
  }
}
let obj = fn()