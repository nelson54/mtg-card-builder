/**
 * Created by IntelliJ IDEA.
 * User: dnelson
 * Date: 2/28/13
 * Time: 7:29 PM
 * To change this template use File | Settings | File Templates.
 */


var CardBuilder = function(){
    this.name = "UNKNOWN";
    this.types = [];

    this.isLegendary = false;
    this.hasFlash = false;

    this.methods = {};

    this.FlavorText = function(text){
        this.flavorText = text;
    };

    this.Name = function(name){
        this.name = name;
        return this;
    };

    this.Expansion = function(name){
        this.expansion = name;
        return this;
    };

    this.Set = this.Expansion;

    this.Flash = function(){
        this.hasFlash = true;
    };

    this.attachments = [];

    this.methods["addAttachment"] = function(attachment){
        if(attachment.targets && attachment.isValidTarget(this)){
            attachment.attach(this);
        }
    };

    //  Types
    this.Enchantment = function(){
        this.types.push("enchantment");
        return this;
    };

    this.Instant = function(){
        this.types.push("instant");
        return this;
    };

    this.Tribal = function(){
        this.types.push("instant");
        return this;
    };

    this.Sorcery = function(){
        this.types.push("sorcery");
        return this;
    };

    this.Creature = function(){
        this.types.push("creature");

        this.creatureTypes = [];

        this.power = 0;

        this.toughness = 0;

        this.powerToughnessModifiers = [];

        this.methods["addPowerToughnessModifier"] = function(modifier){
            this.powerToughnessModifiers.push(modifier);
        };

        this.methods["getPowerToughness"] = function(){
            var powerToughness = { power: this.power, toughness: this.toughness };

            if( this.powerToughnessModifiers.length > 0){
                for (var ptModIndex in this.powerToughnessModifiers){
                    powerToughness = this.powerToughnessModifiers[ptModIndex](powerToughness);
                }
            }

            return powerToughness;
        };

        this.methods["getPower"] = function(){
            return this.getPowerToughness().power;
        }

        this.methods["getToughness"] = function(){
            return this.getPowerToughness().toughness;
        }

        this.hasSummoningSickness = true;

        return this;
    };

    this.Artifact = function(){
        this.types.push("artifact");
        return this;
    };

    this.Land = function(){
        this.types.push("land");
        this.landTypes = [];
        return this;
    };

    this.Planeswalker = function(){
        this.planeswalkerAbilities = [];
        this.PlaneswalkerType("UNDEFINED");
        this.Loyalty(0);
        this.types.push("planeswalker");
        return this;
    };

    //Planeswalkers
    this.PlaneswalkerType = function(type){
        if(this.planeswalkerType instanceof String == false)
            throw "This must be a planeswalker.";
        this.planeswalkerType.push(type);

        return this;
    };

    this.PlaneswalkerAbility = function(loyaltyDelta, ability, text){
        if(this.planeswalkerAbilities instanceof Array == false)
            throw "This must be a planeswalker.";
        this.planeswalkerAbilities.push({Delta: loyaltyDelta, Ability: ability, Text: text});
        return this;
    };

    this.Loyalty = function(number){
        this.loyalty = number;
        return this;
    };

    //  Lands
    this.LandType = function(type){
        if(this.landTypes instanceof Array == false)
            throw "This must be a land.";
        this.landTypes.push(type);
        return this;
    };

    //  Enchantments
    this.Enchantment = function(){
        this.types.push("enchantment");

        this.enchantmentTypes = [];

        return this;
    };

    this.EnchantmentType = function(type){
        this.enchantmentTypes.push(type);

        return this;
    };

    this.Targets = function(){
        this.targets = true;

        return this;
    };

    this.ValidTargetStrategy = function(func){
        if(typeof func === "function"){
            this.methods["isValidTarget"] = func;
        }
        else
            throw "The ValidTargetStrategy must be a function.";

        return this;
    };

    this.AttachMethod = function(func){
        if(typeof func === "function"){
            this.methods["attach"] = func;
        }
        else
            throw "The AttachMethod must be a function.";

        return this;
    };

    //  Creatures
    this.CreatureType = function(type){
        if(this.creatureTypes instanceof Array == false)
            throw "This must be a creature.";
        this.creatureTypes.push(type);
        return this;
    };

    this.Flying = function(){
        this.flying = true;
        return this;
    }

    this.Reach = function(){
        this.reach = true;
    }

    this.Power = function(power){
        this.power = power;
        return this;
    };

    this.Toughness = function(toughness){
        this.toughness = toughness;
        return this;
    };

    this.Haste = function(){
        this.haste = false;
    };

    this.Vigilance = function(){
        this.vigilance = true;
    };

    this.build = function(){
        var __ctor__ = function(){},
            keys = Object.keys(this);

        for( var prop in keys ){
            var property = keys[prop];
            if(typeof this[property] != "function")
                __ctor__.prototype[property] = this[property];
        }

        for( var method in this.methods ){
            __ctor__.prototype[method] = this.methods[method];
        }

        return __ctor__;
    }
};