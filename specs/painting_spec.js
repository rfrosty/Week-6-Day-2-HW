const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');

describe('Room', function () {
  let room;
  beforeEach(function () {
    room = new Room(10, 8,8,8,8,8,8);
  });
  it('Should be able to print area', function () {
    assert.strictEqual(room.area, 10)
  })
  it('Should start not painted', function () {
    assert.deepStrictEqual(room.painted, [])
  })
  it('Should be able to be painted', function () {
    room.bePainted("blue");
    assert.deepStrictEqual(room.painted, ["blue"])
  })
  it('Should be able to check if painted', function () {
    room.bePainted("blue");
    assert.strictEqual(room.checkIfPainted(), "Room is painted")
  })
});

describe('Paint', function () {
  let paint;
  beforeEach(function () {
    paint = new Paint(3);
  });
  it('Should have a number of litres of paint', function () {
    assert.strictEqual(paint.litres, 3)
  })
  it('Should be able to check if can is empty', function () {
    assert.strictEqual(paint.checkEmpty(), "not empty")
  })
  it('Should be able to empty itself of paint', function () {
    paint.empty()
    assert.strictEqual(paint.litres, 0)
  })
});
