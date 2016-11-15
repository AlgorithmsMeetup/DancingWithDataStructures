# DancingWithDataStructures: Stacks and Queues
## Introduction to Data Structures
### Stack: ###
A sequential data structure that resembles a stack.
Imagine a stack of plates: you would put one on top of the other
and you would remove plates by removing the ones on top first. So basically: last in first out
![](https://dan4kent.files.wordpress.com/2015/10/stack-of-dirty-dishes.jpg)
![](http://i.imgur.com/IG8cK9U.gif)

### Queue: ###
Also a sequential data structure, just like the name suggests
it is just line that earlier data would be removed first. So: first in first out
![](http://blog-daibhandai.rhcloud.com/wp-content/uploads/2016/06/delete.jpg)
![](https://lh3.googleusercontent.com/-R0BB9DlP9qk/Vh-QWw-DarI/AAAAAAAArGE/hwlbIt56S5kHU9W5NI0mNzkAoKsNCbxxQ/w450-h315/BdnXT7h.gif)

#### Why learning these: ####
Although it is unlikely that you would have to implement these when you are coding
for work or personal projects because Array can pretty much do all things Stack and Queue

During interviews, interviewers might still asks you to re-implement them to see if
you know common data structures and algorithms.

## Implementation
### how would you implement these two classes? ###
Requirements:
1. both would need the following properties:
2. implement them without using Arrays
#### Methods: ####
for stack: insert, remove, peak,
for queue: enqueue, dequeue, peek,
#### Attributes: ####
for both: length

### Classic Questions
#### balanced Parens ####
Write a function that takes a string checks and see if all the parentheses
match correctly

Ex:
``` javascript
  balancedParens('(hi)');
  // returns true
  balancedParens('}nope{');
  // returns false
```

#### current min of a stack ####
Write a method that returns the current minimum value of a stack
without going through the entire stack.
``` javascript
  var stack = new Stack();
  stack.insert(4);
  stack.insert(8);
  stack.currentMin();
  // returns 4;
  stack.insert(1);
  stack.currentMin();
  // return 1;

  stack.remove();
  stack.remove();
  // both 1 and 8 are removed
  stack.currentMin();
  // returns 4;
```
#### using at most two stacks to implement a queue class ####
Define a Queue class by using at most two stacks
##  Reimplementation(Using Other Data Structures)
