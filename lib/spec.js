var expect = chai.expect;
describe('Stack', function(){

});

describe('Queue', function () {
  it('should enqueue items', function() {
  	let queue = new Queue();
  	queue.enqueue(1)
    expect(queue.peek()).to.equal(1);
  });

  it('should return max item', function() {
  	let queue = new Queue();
  	queue.enqueue(1)
    expect(queue.getMax()).to.equal(1);
  });

  it('should remove items', function() {
  	let queue = new Queue();
  	queue.enqueue(1);
  	queue.dequeue();
    expect(queue.getLength()).to.equal(0);
  });
})

describe('Balanced Parens', function () {
  it('should return false if invoked with "("', function() {
    expect(balancedParens("(")).to.equal(false);
  });

  it('should return true if invoked with "()"', function() {
    expect(balancedParens("()")).to.equal(true);
  });

  it('should return true if invoked with "(hey how { is [going?]})"', function() {
    expect(balancedParens("(hey how { is [going?]})")).to.equal(true);
  });

  it('should return false if invoked with "hey )( [this] is wrong"', function() {
    expect(balancedParens("hey )( [this] is wrong")).to.equal(false);
  });
});

describe('current min of a Stack', function(){
  it('should evetually returns 1', function() {
    var stack = new Stack();
    stack.insert(4);
    stack.insert(8);
    stack.insert(1);
    var finalResult = stack.currentMin;
    expect(finalResult).to.equal(1);
  });

  it('should evetually returns 4', function() {
    var stack = new Stack();
    stack.insert(4);
    stack.insert(8);
    stack.insert(1);

    stack.remove();
    stack.remove();
    // both 1 and 8 are removed
    var finalResult = stack.currentMin;
    // returns 4;
    expect(finalResult).to.equal(4);
  });

  it('should return undefined', function(){
    var stack = new Stack();
    expect(stack.currentMin).to.equal(undefined);
  });
});
