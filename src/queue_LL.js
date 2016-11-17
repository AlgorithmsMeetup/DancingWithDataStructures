// IMPLEMENTATION USING LINKED LIST
var Queue = function() {
  // private variables
  var queueInstance = {};
  var head = null;
  var tail = null;

  // private class
  var Node = function(val) {
    var nodeInstance = {};
    nodeInstance.value = val;
    nodeInstance.next = null;

    return nodeInstance;
  }

  queueInstance.enqueue = function(v) {
    var newNode = Node(v);

    if(!head) {
      // head = tail = newNode; <<<< shortcut
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
    ++this.length;

    return tail.value;
  }

  queueInstance.dequeue = function() {
    if (!head) {
      console.error('Cannot dequeue empty queue');
    } else {
      var n = head.value;
      head = head.next;
      --this.length;
      return n;
    }

    return undefined;
  }

  queueInstance.length = 0;

  return queueInstance;
}

var q = Queue();
console.log('length at start: ', q.length); // 0
console.log('enqueue: ');
for (var i = 0; i < 3; i++) { 
  console.log(q.enqueue(i)); // H[]T --> Head[0]Tail --> H[0, 1]T --> H[0, 1, 2]T
}

console.log('length after adding 3 items: ', q.length); // 3
console.log('dequeue: ');
for (var i = 0; i < 3; i++) {
 console.log(q.dequeue());  // Head[0, 1, 2]Tail --> H[1, 2]T --> H[2]T --> H[]T
}

console.log('length after removing everything: ', q.length); // 0
q.dequeue(); // should log error message
