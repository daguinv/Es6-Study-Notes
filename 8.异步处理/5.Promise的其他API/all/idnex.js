function getRandom(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}
const proms = [];
for(let i = 0; i < 10; i++){
  proms.push(new Promise((resolve,reject) => {
    // 这里执行的是同步代码
    setTimeout(() => {
      // 执行的是异步代码
      console.log(i,"完成");
      resolve(i)
    },getRandom(1000,5000));
  }))
}
console.log(proms);
Promise.all(proms).then((data) =>{
  console.log(data);
  console.log("全部完成啦");
})