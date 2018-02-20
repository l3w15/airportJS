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
    expect(airport.hangar()).toEqual([plane]);
  });

  it("allows a plane to take off and confirms take off", function() {
    airport.land(plane)
    expect(airport.takeOff(plane)).toEqual("Plane " + plane + " has taken off");
    expect(airport.hangar()).toEqual([]);
  });

  it("will not allow a plane to land if capacity has been reached", function(){
    for (i = 0; i < 50; i++) {
       airport.land(plane);
    }
    expect(function() { airport.land(plane) })
    .toThrow('Airport is at full capacity');
  });

});
