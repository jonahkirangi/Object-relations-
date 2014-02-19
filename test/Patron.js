var expect = require('chai').expect;
var Card = require('../lib/Cards.js').Card;
var	Deck = require('../lib/Deck.js').Deck;
var Patron = require('../lib/Patron.js').Patron;

describe('Patron', function() {
	'use strict';
	var deck;
	var card;
	var patron;

	beforeEach(function() {
		card = new Card();
		deck = new Deck();
		patron = new Patron();
	});

	describe('As a user, I want to recieve a card from the deck', function() {
		it("Should shuffle cards and return the top card", function() {
			expect(patron("User").getCARD()).to.have.property('Rank');
			expect(patron("User").getCARD()).to.have.property('Suit');
		});
	});


	describe("As a dealer, I have special card priveleges.", function() {
		it("Should return the remaining number of cards", function() {
			expect(patron("Dealer").getSIZE()).to.equal(52);
			expect(patron("Dealer").getCARD()).to.be.an.object;
			expect(patron("Dealer").getSIZE()).to.equal(51);
		});
	})
});