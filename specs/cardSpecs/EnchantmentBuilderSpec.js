describe("An Enchantment",function(){
    var name = "Curse of Stalked Prey",
        type1 = "Aura",
        type2 = "Curse",
        expansion = "Innistrad";

    var targetStrategy = function(obj){
        if(obj != undefined && obj instanceof Player)
            return true;
        return false;
    };

    var onDrawCardTrigger = function(player, drawState){
        if(drawState.count === 1)
            drawState.count = 2;
        return drawState;
    }

    var attachEnchantment = function(obj){
        obj.attachments.push(this);
        this.controller = obj;

        obj.addOnDrawCardTrigger(onDrawCardTrigger);
    };

    var CurseOfStalkedPrey = new CardBuilder()
        .Name(name)
        .Expansion(expansion)
        .Enchantment()
        .EnchantmentType(type1)
        .EnchantmentType(type2)
        .Targets()
        .ValidTargetStrategy(targetStrategy)
        .AttachEnchantmentMethod(attachEnchantment)
        .build();

    var curseOfStalkedPrey = new CurseOfStalkedPrey();

    var player = new Player(null, [1,2,3,4,5,6,7,8,9,10]);

    it("targets", function(){
        expect(curseOfStalkedPrey.targets).toBeTruthy();
    });

    it("can target and attach to a player", function(){
        expect(curseOfStalkedPrey.isValidTarget(player)).toBeTruthy();
        curseOfStalkedPrey.attachEnchantment(player);
        expect(player.attachments.length).toEqual(1);
        expect(player.onDrawCardTriggers.length).toEqual(1);
        player.drawCards(1);
        expect(player.hand.length).toEqual(2);
    });
});