describe("An Enchantment",function(){

    var onDrawCardTrigger = function(player, drawState){
        if(drawState.count === 1){
            player.loseLife(1);
            drawState.count = 2;
        }
        return drawState;
    };

    var EnchantPlayerWhenTheyDrawACardDraw2CardsAndThatPlayerLoses1LifeInstead = new CardBuilder()
        .Name("Enchant Player When They Draw A Card Draw 2 Cards And Lose 1 Life Instead")
        .Expansion("Made Up Set")
        .Enchantment()
        .EnchantmentType("Aura")
        .EnchantmentType("Curse")
        .Targets()
        .ValidTargetStrategy(function(obj){
            if(obj instanceof Player)
                return true;
            return false;
        })
        .AttachEnchantmentMethod(function(obj){
            obj.attachments.push(this);
            this.controller = obj;

            obj.addOnDrawCardTrigger(onDrawCardTrigger);
        })
        .build();

    var enchantPlayerWhenTheyDrawACardDraw2CardsAndThatPlayerLoses1LifeInstead = new EnchantPlayerWhenTheyDrawACardDraw2CardsAndThatPlayerLoses1LifeInstead();

    var player = new Player(null, [1,2,3,4,5,6,7,8,9,10]);

    it("targets", function(){
        expect(enchantPlayerWhenTheyDrawACardDraw2CardsAndThatPlayerLoses1LifeInstead.targets).toBeTruthy();
    });

    it("can target and attach to a player", function(){
        expect(player.life).toEqual(20);
        expect(enchantPlayerWhenTheyDrawACardDraw2CardsAndThatPlayerLoses1LifeInstead.isValidTarget(player)).toBeTruthy();
        player.attachEnchantment(enchantPlayerWhenTheyDrawACardDraw2CardsAndThatPlayerLoses1LifeInstead);
        expect(player.attachments.length).toEqual(1);
        expect(player.onDrawCardTriggers.length).toEqual(1);
        player.drawCards(1);
        expect(player.hand.length).toEqual(2);
        expect(player.life).toEqual(19);
    });
});