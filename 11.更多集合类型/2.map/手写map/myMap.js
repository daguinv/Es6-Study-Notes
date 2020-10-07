class MyMap {
  constructor(iterator = []) {
    if (typeof iterator[Symbol.iterator] != "function") {
      throw new TypeError(`${iterator} is not iterable (cannot read property Symbol(Symbol.iterator))`)
    }
    this._iterator = [];
    for (let item of iterator) {
      if (!(item instanceof Array)) {
        throw new TypeError(`Iterator value ${item} is not an entry object`)
      }
      this.set(...item)
    }
  }
  set(key, value) {
    for (let i of this._iterator) {
      if (this.isEqual(i[0], key)) {
        i[1] = value
        return this;
      }
    }
    this._iterator.push([key, value]);
  }
  get(key) {
    for (let i of this._iterator) {
      if (this.isEqual(i[0], key)) {
        return i[1];
      }
    }
  }
  delete(key) {
    for (let i = 0; i < this._iterator.length; i++) {
      
      let [target] = this._iterator[i];
      if (target == key) {
        this._iterator.splice(i, 1);
        return true
      }
    }
    return false;
  }
  has(item) {
    for (let i of this._iterator) {
      if (this.isEqual(i[0], item)) {
        return true;
      }
    }
    return false;
  }
  clear() {
    this._iterator.length = 0;
  }
  get size() {
    return this._iterator.length;
  }
  isEqual(val1, val2) {
    if (val1 === 0 && val2 === 0) {
      return true;
    }
    return Object.is(val1, val2);
  }
  *[Symbol.iterator]() {
    for (let i of this._iterator) {
      yield i;
    }
  }
}