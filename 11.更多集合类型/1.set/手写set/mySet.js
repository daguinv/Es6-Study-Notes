class MySet{
  constructor(iterator = []){
    // 判断是否是可迭代对象
    if(typeof iterator[Symbol.iterator] !== "function"){
      throw new TypeError(`${iterator} is not iterable (cannot read property Symbol(Symbol.iterator))`)
    }
    this._iterator = [];
    for(let item of iterator){
      this.add(item)
    }
  }
  add(item){
    if(!this.has(item)){
      this._iterator.push(item);
    }
  }
  has(item){
    for(let i of this._iterator){
      if(this.isEqual(i,item)){
        return true;
      }
    }
    return false;
  }
  delete(item){
    for(let i = 0; i < this._iterator.length; i++){
      let element = this._iterator[i];
      if(this.isEqual(element ,item)){
        this._iterator.splice(i,1);
        return true;
      }
    }
    return false;
  }
  clear(){
    this._iterator.length = 0;
  }
  isEqual(val1,val2){
    if(val1 === 0 && val2 === 0){
      return true
    }
    return Object.is(val1,val2);
  }
  *[Symbol.iterator](){
    for(let i of this._iterator){
      yield i;
    }
  }
  get size(){
    return this._iterator.length
  }
  forEach(callback){
    for(let i of this._iterator){
      callback(i,i,this);
    }
  }
}