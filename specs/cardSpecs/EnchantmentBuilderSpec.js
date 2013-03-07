describe("An Aura Curse",function(){

    var drawCardLoseLifeEnchantment = new DrawCardLoseLifeEnchantment();

    var player = new Player(null, [1,2,3,4,5,6,7,8,9,10]);

    it("targets", function(){
        expect(drawCardLoseLifeEnchantment.targets).toBeTruthy();
    });

    it("can target and attach to a player", function(){
        expect(player.life).toEqual(20);
        expect(drawCardLoseLifeEnchantment.isValidTarget(player)).toBeTruthy();
        player.addAttachment(drawCardLoseLifeEnchantment);
        expect(player.attachments.length).toEqual(1);
        expect(player.onDrawCardTriggers.length).toEqual(1);
        player.drawCards(1);
        expect(player.hand.length).toEqual(2);
        expect(player.life).toEqual(19);
    });
});

describe('A Aura that attaches to creatures', function(){

    var game = {addAddUpkeepTrigger : function(){}},
        player = new Player(game, [1,2,3,4,5,6,7,8]),
        runeclawBear = new RuneclawBear(),
        stabWound = new StabWound();

    runeclawBear.controller = player;

    it("can be attached to a creature", function(){
        runeclawBear.addAttachment(stabWound);
        expect(runeclawBear.attachments.length).toEqual(1);
        expect(runeclawBear.getPower()).toEqual(0)
        expect(runeclawBear.getPower()).toEqual(0)
    });




});