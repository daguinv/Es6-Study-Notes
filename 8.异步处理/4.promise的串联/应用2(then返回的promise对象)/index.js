const pro2 =  new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve(2)
  }, 2000);
}).then((data)=>{
  return data;
})

const pro = new Promise((resolve,reject) => {
  resolve(1)
}).then((data) => {
  return pro2;  //当返回的是一个promise对象，会将新promise对象的后续处理的返回值返回给新的promise对象
}).then((data) => {
  console.log(data); //2秒后打印数字2
})