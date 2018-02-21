function Weather() {
  this._STORM_CHANCES = 0.7;
};

Weather.prototype = {
  isStormy: function() {
    return (Math.random() > this._STORM_CHANCES)
  },

}

// Weather.prototype.randomWeather = function() {
//     var rand = Math.floor(Math.random() * this._weatherOptions.length);
//     return this._weatherOptions[rand];
//   }
