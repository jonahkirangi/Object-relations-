var expect = require('chai').expect;
var	Card = require('../lib/Cards.js').Card;
var	Deck = require('../lib/Deck.js').Deck;

describe('Deck', function() {
	'use strict';
	var deck;
	var card;
	var card_dummy= {
		Rank:"Queen",
		Suit: "Hearts"
	};

	beforeEach(function() {
		deck = new Deck();
		card = new Card();
	});

	it("Should add 52 cards and no more", function() {

		for (var i=0; i<52; i++){
			expect(deck.add(card_dummy)).to.be.true;
		}
		expect(deck.add(card_dummy)).to.be.false;
		expect(deck.size()).to.equal(52);
	});

	it ("Should remove the card on the top of the deck and check for errors", function(){
		expect(deck.remove()).to.be.false;// can't remove a card when nothing has been added
		expect(deck.add({Rank:"Queen",Suit: "Hearts"})).to.be.true;
		expect(deck.add({Rank:"King",Suit: "Hearts"})).to.be.true;
		expect(deck.add({Rank:"King", Suit: "Spades"})).to.be.true;
		expect(deck.remove()).to.be.true;
	});

	it("Should be an empty deck", function(){
		expect(deck.size()).to.equal(0);
	});

	it("Should add card and return deck length (1)", function() {
		deck.add(card_dummy);
		expect(deck.size()).to.equal(1);
	});

	it("Should return failure for a card that was never added", function() {
		expect(deck.includes({Rank:"King", Suit: "Hearts"})).to.be.false;
	});

	it("Should generate 52 cards", function() {
		expect(deck.generateDECK()).to.have.length(52);
	});

});