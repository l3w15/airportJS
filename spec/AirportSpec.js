describe("Airport", function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("initialize", funtion() {
    it("should have a default capacity", function() {
      expect(airport.capacity()).toEqual(50);
    });
  });
});
