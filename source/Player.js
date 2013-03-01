var Player = function(game, library){
    this.life = 20;
    this.library = library;
    this.hand = [];
    this.graveyard = [];
    this.battlefield = [];
    this.exiled = [];

    this.defaultHandSize = 7;
    this.mulligans = 0;

    this.drawHand = function(){
        this.drawCards(defaultHandSize - mulligans);
    }

    this.mulligan = function(){
        this.mulligans += 1;
        this.library = this.library.concat(hand);
        this.hand = [];
        this.shuffleLibrary();
        this.drawHand();
    }

    this.drawCard = function(){
        this.hand.push(this.library.pop());
    }

    this.drawCards = function(count){
        while(count !== 0){
            this.drawCard();
        }
    }
}