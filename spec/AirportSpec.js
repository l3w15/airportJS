describe("Airport", function() {

  var airport;
  var plane;
  var weather;


  beforeEach(function() {
    plane = new Plane();
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it("should have a default capacity", function() {
    expect(airport.capacity()).toEqual(50);
  });

  it("should allow a capacity to be set", function() {
    airport.setCapacity(100);
    expect(airport.capacity()).toEqual(100);
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
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
         airport.land(new Plane);
      }
      expect(function() { airport.land(plane) })
      .toThrow("Airport is at full capacity");
    });

    it("will not allow a plane to land if it has already landed", function(){
      airport.land(plane)
      expect(function() { airport.land(plane) })
      .toThrow("That plane has already landed");
    });

    it("will not allow a plane to take off unless it has landed at the airport", function(){
      expect(function() { airport.takeOff(plane) })
      .toThrow("That plane is not at this airport");
    });
  });
  describe('under stormy conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('will not allow a plane to land', function(){
      expect(function() {airport.land(plane)}).toThrow('it is too stormy to land');
    });
    it ('will not allow plane to take off', function(){
        expect(function() {airport.takeOff(plane)}).toThrow('it is too stormy to take off');
    });
  });
});
