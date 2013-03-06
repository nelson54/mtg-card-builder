var StabWound = new CardBuilder()
    .Name("Stab Wound")
    .Expansion("Return to Ravnica")
    .Enchantment()
    .EnchantmentType("Aura")
    .Targets()
    .ValidTargetStrategy(function(obj){
        if(obj.types != undefined && obj.types.indexOf("creature") != -1)
            return true;
        return false;
    })
    .AttachEnchantmentMethod(function(obj){
        obj.addAttachment(this);
        this.controller = obj.controller;

        obj.controller.game.addAddUpkeepTrigger(function(game){
            obj.controller.loseLife(2);
        });

        obj.addPowerToughnessModifier(function(powerToughness){
            return {power: powerToughness.power - 2, toughness: powerToughness.toughness - 2};
        })
    })
    .build();