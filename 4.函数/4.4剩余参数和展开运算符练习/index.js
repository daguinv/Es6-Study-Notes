/**
 * 将所有文本框的value值转换成数字放入数组
 */
function getValues(){
    const numberArr = [];
    const inputs = document.querySelectorAll('input');
    for(let i = 0; i < inputs.length; i++){
        numberArr.push(+inputs[i].value)
    }
    return numberArr;
}
const btn = document.getElementById("btn");

btn.onclick = function(){
    //Math.max()函数由于传入的不固定的参数,不是数组，所以使用...运算符非常方便的解决了问题，而在Es5中
    // spanMax.innerText =  Math.max.apply(Math,getValues());
    // Es6
    spanMax.innerText = Math.max(...getValues());
    spanMin.innerText = Math.min(...getValues());
}