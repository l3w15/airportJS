function Airport() {
  const defaultCapacity = 50;
  this._capacity = defaultCapacity;
  this._hangar = []
};

Airport.prototype = {
  capacity: function() {
    return this._capacity;
  },

  setCapacity: function(size) {
    this._capacity = size;
  },

  land: function(plane) {
    if (this._hangar.length < this._capacity) {
      this._hangar.push(plane);
    } else {
      throw 'Airport is at full capacity';
    }
  },

  hangar: function() {
    return this._hangar;
  },

  takeOff: function(plane) {
    var index = this._hangar.indexOf(plane);
    this._hangar.splice(index, 1);
    return "Plane " + plane + " has taken off";
  },
};

//
// capacity = function() {
//   return this._capacity
// };
//
// Airport.prototype.setCapacity = function(size) {
//   this._capacity = size
// };
//
// Airport.prototype.land = function(plane) {
//   this._hangar.push(plane)
// };
//
// Airport.prototype.hangar = function() {
//   return this._hangar
// };
//
// Airport.prototype.takeOff = function(plane) {
//   var index = this._hangar.indexOf(plane);
//   this._hangar.splice(index, 1)
// };
