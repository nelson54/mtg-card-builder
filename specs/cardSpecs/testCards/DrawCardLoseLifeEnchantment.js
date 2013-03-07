var DrawCardLoseLifeEnchantment = new CardBuilder()
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

        obj.addOnDrawCardTrigger(function(player, drawState){
            if(drawState.count === 1){
                player.loseLife(1);
                drawState.count = 2;
            }
            return drawState;
        });
    })
    .build();