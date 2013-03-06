describe("A Player", function(){
   var player;

    beforeEach(function() {
        player = new Player(null, [1,2,3,4,5,6,7,8,9,10]);
    });

    it("has a hand that it can shuffle", function(){
        player.shuffleLibrary();
        expect(player.library.length).toEqual(10);
    });

    it("can draw 7 cards to its hand at the start of each turn", function(){
        player.drawHandForGame();
        expect(player.library.length).toEqual(3);
        expect(player.hand.length).toEqual(7);
    });

    it("can mulligan from 7 down", function(){
        player.drawHandForGame();
        player.mulligan();
        expect(player.hand.length).toEqual(6);
        player.mulligan();
        expect(player.hand.length).toEqual(5);
        player.mulligan();
        expect(player.hand.length).toEqual(4);
        player.mulligan();
        expect(player.hand.length).toEqual(3);
    });

    it("can draw a card", function(){
        player.drawHandForGame();
        player.drawCard();
        expect(player.hand.length).toEqual(8);
        expect(player.library.length).toEqual(2);
    });

});