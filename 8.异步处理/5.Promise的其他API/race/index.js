
function getRandom(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}

let parms = []
for(let i = 0; i < 10; i++){
  parms.push(new Promise((resolve,reject)=> {
    setTimeout(() => {
      if(Math.random() < 0.5){
        console.log(i,"完成");
        resolve()
      }else{
        console.log(i,"失败");        
        reject();
      }
    }, getRandom(1000,5000));
  }
  ))
}

Promise.race(parms).then((data) => {
  console.log("有人完成啦");
},() =>{
  console.log("有人失败啦"); 
})