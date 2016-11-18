// IMPLEMENTATION OF STACK using LINKED LIST
var Stack = function() {
  var instance = {};

  var Node = function(val) {
    var node = {};
    node.value = val;
    node.next = null;
    return node;
  }
  var head = null;

  instance.length = 0;

  instance.pop = function() {
    if (!head) {
      console.error('Cannot pop empty stack');
    } else {
      var result = head.value;
      head = head.next;
      --this.length;
    }

    return result;
  }

  instance.push = function(val) {
    var newNode = Node(val);
    newNode.next = head;
    head = newNode;
    ++this.length;

    return head.value;
  }

  return instance;
};
