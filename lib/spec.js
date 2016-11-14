var expect = chai.expect;

describe('Balanced Parens', function () {
  it('should return false if invoked with "("', function() {
    expect(balancedParens("(")).to.equal(false);
  });

  it('should return true if invoked with "()"', function() {
    expect(balancedParens("()")).to.equal(true);
  });

})

describe('MaxQueue', function () {
  it('should enqueue items', function() {
  	let queue = new Queue();
  	queue.enqueue(1)
    expect(queue.peek()).to.equal(1);
  });

  it('should return max item', function() {
  	let queue = new Queue();
  	queue.enqueue(1)
    expect(queue.getMax()]).to.equal(1);
  });

  it('should remove items', function() {
  	let queue = new Queue();
  	queue.enqueue(1);
  	queue.dequeue();
    expect(queue.getLength()).to.equal(0);
  });
})
