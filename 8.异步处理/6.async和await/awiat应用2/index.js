// 向第一个女生表白，如果拒绝表白下一个，直到所有女生拒绝为止
function express(n){
  return new Promise((resolve,reject) => {
    console.log(`表白第${n}个女生`);
    setTimeout(() => {
      if(Math.random() < 0.2){
        resolve(true)
      }else{
        resolve(false)
      }
    }, 1000);
  })
}
const gods = [1,2,3,4,5];
async function resules(){
  let res;
  for(let i = 0; i < gods.length; i++){
    res = await express(gods[i])
    if(res){
      console.log(`女生${gods[i]}同意了`);
      break;
    }else{
      console.log(`女生${gods[i]}拒绝了`);
    }
  }
}
resules();