class Queue {
  // Your code here
  constructor() {
    this.items = [];
    this.count = 0;
    this.max = [];
  }
  
  getLength() {
    return this.count;
  }
  
  enqueue(item) {
    this.items.unshift(item);
    this.count = this.count + 1;
    if(this.max.length === 0 || this.max[0] <= item){
      this.max.unshift(item);
    }
  }
  
  dequeue() {
    if(this.count > 0) {
      this.count = this.count - 1;
    }
    var item = this.items.shift();
    if(item === this.max[0]){
      this.max.shift();
    }
    if(this.max.length === 0 ){
      var tempMax; 
      for(var i = 0; i < this.items.length; i++){
        if(tempMax < this.items[i]){
          tempMax = this.item[i];
        }
      }
      this.max[0] = tempMax;
    }
    return item;
  }
  
  peek() {
    return this.items.slice(0,1)[0];
  }
};
