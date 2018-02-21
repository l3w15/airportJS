describe("Weather", function() {

  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("sets the weather to sunny", function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(weather.isStormy()).toEqual(false);
  });

  it("sets the weather to stormy", function() {
    spyOn(Math, 'random').and.returnValue(0.8);
    expect(weather.isStormy()).toEqual(true);
  });
});
