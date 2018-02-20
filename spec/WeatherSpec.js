describe("Weather", function() {

  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("sets the weather to sunny", function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(weather.randomWeather()).toEqual("sunny");
  });

  it("sets the weather to sunny", function() {
    spyOn(Math, 'random').and.returnValue(0.8);
    expect(weather.randomWeather()).toEqual("stormy");
  });
});
