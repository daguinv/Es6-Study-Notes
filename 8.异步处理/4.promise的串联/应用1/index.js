
const pro = new Promise((resolve, reject) => {
  reject(1)
}).then((data) => {
  return data + 100
}, (data) => {
  return data + 10
}).then(data => {
  console.log(data); //11
}, data => {
  console.log("no");

})

// 新的promise的状态只看上一个promise是否发生错误
// 当上一个promise的状态是rejected，但是rejected函数里没有发生错误，新的promise执行的也是resolved状态