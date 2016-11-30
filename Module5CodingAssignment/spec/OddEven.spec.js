describe("OddEvenGenerator", function() {
    var randomNumGenerator8;
    var randomNumGenerator3;

    beforeEach(function() {
        randomNumGenerator8 = function(to, from) {
            return 8;
        };
        randomNumGenerator3 = function(to, from) {
            return 3;
        };
    });

    it("should produce an odd number", function() {
        var result = getRandomOddOrEven1to10("odd", randomNumGenerator3);
        expect(result).toEqual(3);
    });

    it("should produce an even number", function() {
        var result = getRandomOddOrEven1to10("even", randomNumGenerator8);
        expect(result).toEqual(8);
    });

    it("should produce any number from 1 to 10", function() {
        var result = getRandomNumber(1, 10);
        expect(result).toBeGreaterThan(1);
        expect(result).toBeLessThan(10);
    })


})
