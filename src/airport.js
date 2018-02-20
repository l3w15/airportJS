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
    this._landingChecks(plane);
    this._hangar.push(plane);
  },

  _isFull: function() {
    return this._hangar.length >= this._capacity
  },

  _landingChecks: function(plane) {
    if (this._isFull()) {
    throw "Airport is at full capacity";
    }

    if (this._isAtAirport(plane)) {
      throw "That plane has already landed";
    }
  },

  _takeOffChecks: function(plane) {
    if (!this._isAtAirport(plane)) {
      throw "That plane is not at this airport";
    }
  },

  _isAtAirport: function(plane) {
    return this._hangar.includes(plane);
  },

  hangar: function() {
    return this._hangar;
  },

  takeOff: function(plane) {
    this._takeOffChecks(plane);
    var index = this._hangar.indexOf(plane);
    this._hangar.splice(index, 1);
    return "Plane " + plane + " has taken off";
  },
};
