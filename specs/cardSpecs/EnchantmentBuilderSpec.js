describe("An Enchantment",function(){
    var name = "Enchant Player When They Draw A Card Draw Another Card",
        type1 = "Aura",
        type2 = "Curse",
        expansion = "MadeUpSet";

    var targetStrategy = function(obj){
        if(obj instanceof Player)
            return true;
        return false;
    };

    var onDrawCardTrigger = function(player, drawState){
        if(drawState.count === 1)
            drawState.count = 2;
        return drawState;
    };

    var attachEnchantment = function(obj){
        obj.attachments.push(this);
        this.controller = obj;

        obj.addOnDrawCardTrigger(onDrawCardTrigger);
    };

    var EnchantPlayerWhenTheyDrawACardDrawAnotherCard = new CardBuilder()
        .Name(name)
        .Expansion(expansion)
        .Enchantment()
        .EnchantmentType(type1)
        .EnchantmentType(type2)
        .Targets()
        .ValidTargetStrategy(targetStrategy)
        .AttachEnchantmentMethod(attachEnchantment)
        .build();

    var enchantPlayerWhenTheyDrawACardDrawAnotherCard = new EnchantPlayerWhenTheyDrawACardDrawAnotherCard();

    var player = new Player(null, [1,2,3,4,5,6,7,8,9,10]);

    it("targets", function(){
        expect(enchantPlayerWhenTheyDrawACardDrawAnotherCard.targets).toBeTruthy();
    });

    it("can target and attach to a player", function(){
        expect(enchantPlayerWhenTheyDrawACardDrawAnotherCard.isValidTarget(player)).toBeTruthy();
        enchantPlayerWhenTheyDrawACardDrawAnotherCard.attachEnchantment(player);
        expect(player.attachments.length).toEqual(1);
        expect(player.onDrawCardTriggers.length).toEqual(1);
        player.drawCards(1);
        expect(player.hand.length).toEqual(2);
    });
});