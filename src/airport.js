function Airport() {
  const defaultCapacity = 50;
  this._capacity = defaultCapacity;
  this._hangar = []
};

Airport.prototype.capacity = function() {
  return this._capacity
};

Airport.prototype.setCapacity = function(size) {
  this._capacity = size
};

Airport.prototype.land = function(plane) {
  this._hangar.push(plane)
};

Airport.prototype.hangar = function() {
  return this._hangar
};
