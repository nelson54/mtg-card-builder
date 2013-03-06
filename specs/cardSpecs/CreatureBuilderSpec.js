describe("A creature", function(){

    var runeclawBear = new RuneclawBear();

    it("can make a new CardBuilder", function(){
        expect(typeof new CardBuilder()).toBe('object');
    });

    it("can make named card", function(){
        expect(runeclawBear.name).toBe(name);
    });

    it("can make a creature with power and toughness", function(){
        expect(runeclawBear.types.indexOf("creature")).not.toEqual(-1);
        expect(runeclawBear.power).toBe(2);
        expect(runeclawBear.toughness).toBe(2);
    });

    it("can make a constructor for a creature", function(){
        expect(typeof RuneclawBear).toBe("function");
        expect(runeclawBear.name).toBe(name);
    });
});