describe("A CardBuilder", function(){

    var name = "Runeclaw Bear",
        type = "Bear",
        expansion = "M12",
        powerToughness = 2;

    var runeclawBear = new CardBuilder()
        .Name(name)
        .Expansion(expansion)
        .Creature()
        .CreatureType(type)
        .Power(powerToughness)
        .Toughness(powerToughness);

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
});