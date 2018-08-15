class HashTable {
  constructor(uniquenessCriteria) {
    this.list = [];
    this.uniquenessCriteria = uniquenessCriteria;

    this.insert = this.insert.bind(this);
    this._hashFunction = this._hashFunction.bind(this);
    this._isUndefined = this._isUndefined.bind(this);
    this._isArray = this._isArray.bind(this);
    this.getValue = this.getValue.bind(this);
    this.print = this.print.bind(this);
  }

  insert(key, val) {
    const {
      list,
      _hashFunction,
      _isUndefined,
      _isArray,
    } = this;

    const listIndex = _hashFunction(key);

    const isUndefined = _isUndefined(listIndex);
    console.log('listIndex: ', listIndex);
    if (isUndefined === true) {
      list[listIndex] = [[key, val]];
      return;
    }

    // insert if collision occurs
    const isArray = _isArray(listIndex);

    if (isArray === true) {
      const existingSubList = list[listIndex];
      list[listIndex] = [...existingSubList, [key, val]];
      return;
    }

    // if it's not undefined as well as not an array

    // create a new Array and push the value inside it
    // finally, set the listIndex to point to that array

    const newArray = [key, val];
    const existingSubList = list[listIndex];
    list[listIndex] = [...existingSubList, newArray];
    return;
  }

  _hashFunction(key) {
    const { length } = this.list;
    console.log('length: ', length);
    const { uniquenessCriteria: primeNum } = this;

    const hash = key % primeNum;

    if (length === 0) {
      return 0;
    }

    const listIndex = hash % primeNum;

    return listIndex;
  }

  _isUndefined(listIndex) {
    const { list } = this;

    if (list[listIndex] === undefined) {
      return true;
    }

    return false;
  }

  _isArray(listIndex) {
    const { list } = this;

    if (Array.isArray(list[listIndex]) === true) {
      return true;
    }
    return false;
  }

  getValue(key) {
    const {
      list,
      _hashFunction,
    } = this;

    const listIndex = _hashFunction(key);

    if (Array.isArray(list[listIndex]) === true) {
      // loop through the array to find the key
      const subList = list[listIndex];

      subList.forEach(([storedKey, storedVal]) => {
        if (storedKey === key) {
          return storedVal;
        }
      });
    }

    return list[listIndex];
  }

  print() {
    const { list } = this;
    console.log(list);
  }
}


module.exports = HashTable;