const Decorator = function () {
  this.stock = [];
}

Decorator.prototype.addCan(can) = function () {
  return this.stock.push(can);
};

Decorator.prototype.totalLitresOfCan = function () {
  return this.stock.litres;
};

Decorator.prototype.enoughPaint(room) = function () {
  if (this.stock.litres >= room.area) {
    return "Enough paint";
    room.painted.push("painted");
  } else {
    return "Not enough paint";
  }
};

module.exports = Decorator;
