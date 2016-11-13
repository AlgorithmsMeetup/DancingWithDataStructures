class Stack {
  // Your code here
  constructor() {
    this.items = [];
    this.count = 0;
  }
  
  getLength() {
    return this.count;
  }
  
  push(item) {
    this.items.push(item);
    this.count = this.count + 1;
  }
  
  pop() {
    if(this.count > 0) {
      this.count = this.count - 1;
    }
    
    return this.items.pop();
  }
  
  peek() {
    return this.items.slice(-1)[0];
  }
};

const balancedParens = (str) => {
  // Your code here
  let stack = new Stack();
  let open = { '{': '}', '[': ']', '(': ')' };
  let closed = { '}': true, ']': true, ')': true };
  
  for (var i = 0; i < str.length; i ++) {
    let chr = str[i];
    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
    	let popped = open[stack.pop()];
      if (popped !== chr) return false;
    }
  }
  return stack.count === 0;
};
