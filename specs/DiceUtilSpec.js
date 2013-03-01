describe("a DiceUtil", function(){
    it("can roll a D6 and get a number", function(){
        expect(typeof DiceUtil.rollD6()).toBe("number")
    });

    it("can roll hundreds of D6's", function(){
        expect(Math.min.apply(Math, DiceUtil._rollNumberOfXSizeDice(500, 6))).toEqual(1);
        expect(Math.max.apply(Math, DiceUtil._rollNumberOfXSizeDice(500, 6))).toEqual(6);
        expect(DiceUtil._rollNumberOfXSizeDice(500, 6).length).toEqual(500)
    });
});