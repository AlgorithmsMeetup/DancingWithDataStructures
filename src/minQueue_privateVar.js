'use strict'; // this line is required because ES6 classes are written in strict mode.

// those of you who have background in OOD languages will probably wonder if JavaScript allows for private class variables.
// JavaScript is OOD-ish.
// Private variable naming convention is to prefix private variable names with underscore character.

// >>>>> PRIVATE VARIABLE SET UP .... ugly, right?
let _items = new WeakMap();
let _min = new WeakMap();
let _count = new WeakMap();
// <<<<<
class Queue {
  // Your code here
  constructor() {
    // >>> instantiate private variable
    _items.set(this, []);
    _min.set(this, []);
    _count.set(this, 0);
    // <<<
  }
  
  getLength() {
    // >>> private variable access
    let count = _count.get(this);
    // <<<
    return count;
  }
  
  enqueue(item) {
    // >>> private variable access
    let items = _items.get(this);
    let count = _count.get(this);
    let min = _min.get(this);
    // <<<

    items.unshift(item);
    count = count + 1;
    if(min.length === 0 || min[0] >= item){
      min.unshift(item);
    }

    return items[0];
  }
  
  dequeue() {
    // >>> private variable access
    let items = _items.get(this);
    let count = _count.get(this);
    let min = _min.get(this);
    // <<<

    if(count > 0) {
      count = count - 1;
    }
    var item = items.shift();
    if(item === min[0]){
      min.shift();
    }
    return item;
  }
  
  peek() {
    // >>> private variable access
    let items = _items.get(this);
    // <<<
    return items.slice(0,1)[0];
  }

  getMin() {
    // >>> private variable access
    let min = _min.get(this);
    // <<<
    return min[0];
  }
};


let q = new Queue();

console.log('en: ', q.enqueue(13));
console.log(q.enqueue(12));
console.log(q.enqueue(10));
console.log(q.enqueue(1));
console.log('de: ', q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());


