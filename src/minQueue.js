'use strict'; // this line is required because ES6 classes are written in strict mode.

class Queue {
  // Your code here
  constructor() {
    this.items = [];
    this.count = 0;
    this.min = [];
  }
  
  getLength() {
    return this.count;
  }
  
  enqueue(item) {
    this.items.unshift(item);
    this.count = this.count + 1;
    if(this.min.length === 0 || this.min[0] >= item){
      this.min.unshift(item);
    }
  }
  
  dequeue() {
    if(this.count > 0) {
      this.count = this.count - 1;
    }
    var item = this.items.shift();
    if(item === this.min[0]){
      this.min.shift();
    }
    return item;
  }
  
  peek() {
    return this.items.slice(0,1)[0];
  }

  getMin() {
    return this.min[0];
  }
};

