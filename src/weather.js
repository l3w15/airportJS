function Weather() {
  this._weatherOptions = ["sunny", "sunny", "sunny", "stormy"];
};

Weather.prototype = {
  randomWeather: function() {
    var rand = Math.floor(Math.random() * this._weatherOptions.length);
    return this._weatherOptions[rand];
  },

}

// Weather.prototype.randomWeather = function() {
//     var rand = Math.floor(Math.random() * this._weatherOptions.length);
//     return this._weatherOptions[rand];
//   }
