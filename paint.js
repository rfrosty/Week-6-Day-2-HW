const Paint = function (litres) {
  this.litres = litres;
}

Paint.prototype.checkEmpty = function () {
  if (this.litres >= 0) {
    return "not empty";
  } else {
    return "empty";
  }
};

Paint.prototype.empty = function () {
  this.litres = 0;
};

module.exports = Paint;
