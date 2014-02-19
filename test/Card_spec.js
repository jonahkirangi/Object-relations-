var expect = require('chai').expect,
	Card = require('../lib/Cards.js').Card;

describe('Card object tests', function() {
	'use strict';
	var card;

	beforeEach(function() {
		card = new Card({Rank:"Queen",Suit:"Hearts"});
	});

	describe('constructor', function() {
		
		it('Should be truthy', function() {
			expect(card).to.be.an.object;
		});

		it("Should not have color property", function() {
			expect(card).to.not.have.property('author');
		});
		it("Should return original card used with instantiation", function() {
			expect(card.getTitle()).to.deep.equal({Rank:"Queen",Suit:"Hearts"});
		});
		it("Should not be able to change the passed card property title", function() {
			card.Card = {Rank:"Queen",Suit:"Spades"};
			expect(card.getTitle()).to.not.equal({Rank:"Queen",Suit:"Spades"});
		});
	});



});