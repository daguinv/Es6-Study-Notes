/*
邓哥心中有三个女神
有一天，邓哥决定向第一个女神表白，如果女神拒绝，则向第二个女神表白，直到所有的女神都拒绝，或有一个女神同意为止
用代码模拟上面的场景
*/
function express(num) {
  return new Promise((resolve, reject) => {
    console.log(`向第${num}个女神表白`);

    setTimeout(() => {
      if (Math.random() < 0.3) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  })
}

express(1).then((data) => {
  if (data) {
    console.log(`女神1同意了`);
    return
  } else {
    return express(2)
  }
}).then((data) => {
  if(data){
    console.log(`女神2同意了`);
  }else if(data == undefined){
    return;
  }else{
    return express(3)
  }
}).then((data) => {
  if(data == undefined){
    return;
  }else if(data){
    console.log(`女神3同意了`);
  }else{
    console.log("被所有女生拒绝了");
    
  }
})