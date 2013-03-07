var Player = function(game, library, opponents){
    this.game = game;
    this.opponents = opponents;
    this.life = 20;
    this.library = library.map(function(card){ return card.uniqueId = _.uniqueId("card_")});
    this.hand = [];
    this.graveyard = [];
    this.battlefield = [];
    this.exiled = [];

    this.defaultHandSize = 7;
    this.mulligans = 0;

    this.manaPool = [];

    this.attachments = [];

    this.onGainLifeTriggers = [];
    this.onLoseLifeTriggers = [];
    this.onDrawCardTriggers = [];

    this.addOnDrawCardTrigger = function(trigger){
        this.onDrawCardTriggers.push(trigger);
    };

    this.addAttachment = function(attachment){
        if(attachment.targets && attachment.isValidTarget(this)){
            attachment.attach(this);
        }
    };

    this.drawHandForGame = function(){
        this.drawCards(this.defaultHandSize - this.mulligans);
    };

    this.loseLife = function(damage){
        this.life -= damage;
    };

    this.gainLife = function(life){
        this.life += life;
    };

    this.mulligan = function(){
        this.mulligans += 1;
        this.library = this.library.concat(this.hand);
        this.hand = [];
        this.shuffleLibrary();
        this.drawHandForGame();
    };

    this.drawCard = function(){
        this.hand.push(this.library.pop());
    };

    this.drawCards = function(count){
        var drawState = {count : count};

        for(var trigger in this.onDrawCardTriggers){
            drawState = this.onDrawCardTriggers[trigger](this, drawState);
        }

        while(drawState.count !== 0){
            this.drawCard();
            drawState.count -= 1;
        }
    };

    this.shuffleLibrary = function(){
        this.library.sort(function () { if (Math.random()<.5) return -1; else return 1; });
    }
};