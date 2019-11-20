const Room = function (area) {
  this.area = area;
  this.painted = [];
}

Room.prototype.bePainted = function (colour) {
  return this.painted.push(colour)
};

Room.prototype.checkIfPainted = function () {
  if (this.painted.length >= 1) {
    return "Room is painted";
  } else {
    return "Room is not painted";
  }
};

module.exports = Room;
