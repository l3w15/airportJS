describe("Airport", function() {

  var airport;
  var plane;


  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("should have a default capacity", function() {
    expect(airport.capacity()).toEqual(50);
  });

  it("should allow a capacity to be set", function() {
    airport.setCapacity(100);
    expect(airport.capacity()).toEqual(100);
  });

  it("allows planes to land", function() {
    airport.land(plane)
    expect(airport.hangar()).toContain(plane);
  });

});
