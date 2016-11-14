var expect = chai.expect;

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

describe('MaxQueue', function () {
  it('should enqueue items', function() {
  	let queue = new Queue();
  	queue.enqueue(1)
    expect(queue.peek()).to.equal(1);
  });

  it('should return max item', function() {
  	let queue = new Queue();
  	queue.enqueue(1)
    expect(queue.max[0]).to.equal(1);
  });

  it('should remove items', function() {
  	let queue = new Queue();
  	queue.enqueue(1);
  	queue.dequeue();
    expect(queue.getLength()).to.equal(0);
  });
})
