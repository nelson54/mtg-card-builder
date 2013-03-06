var Player = function(game, library){
    this.game = game;
    this.life = 20;
    this.library = library;
    this.hand = [];
    this.graveyard = [];
    this.battlefield = [];
    this.exiled = [];

    this.defaultHandSize = 7;
    this.mulligans = 0;

    this.drawHandForGame = function(){
        this.drawCards(this.defaultHandSize - this.mulligans);
    };

    this.takeDamage = function(damage){
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
        while(count !== 0){
            this.drawCard();
            count -= 1;
        }
    };

    this.shuffleLibrary = function(){
        this.library.sort(function () { if (Math.random()<.5) return -1; else return 1; });
    }
};