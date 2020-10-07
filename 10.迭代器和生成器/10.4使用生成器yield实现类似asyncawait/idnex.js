/**
 * 由于async和await是es7出现的，而es7的promise使用then还是比较繁琐的，于是在这期间借用了生成器来简化then
 */
function* iterator() {
  const result = yield 1;
  console.log(result);

  const response = yield fetch("http://101.132.72.36:5100/api/local");
  const locations = yield response.json();
  console.log(locations);
}
function run(iterator) {
  // 执行iterator函数返回一个生成器
  const iteratorObj = iterator();  
  // 执行next() 先让代码运行起来
  let result = iteratorObj.next();
  handle();
  // 对result进行处理
  function handle() {
    // 如果已经迭代完成，就return，不做任何操作
    if (result.done) {
      return;
    } else {
      // 判断返回的是Promise还是其他值
      if (typeof result.value.then == "function") {
        result.value.then((data) =>{
          result = iteratorObj.next(data);
          handle(result);
        },(err) =>{
          result = iteratorObj.next(err);
          handle(result);
        })
      } else {
        result = iteratorObj.next(result.value)
        handle(result)
      }
    }
  }
}
run(iterator)