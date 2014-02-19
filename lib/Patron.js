var Deck = require('../lib/Deck.js').Deck;

exports.Patron = function(card) {
	var ShuffledDeck=[];
	var controller = new Deck();
	controller.generateDECK();

	var constructor = function() {};

		constructor.prototype.getCARD = function(){
			var out = controller.getCARD(controller.size() -1);
			controller.remove();
			return out;
		};
			// return (Cards.indexOf(Card) > -1) ? true : false;

		constructor.prototype.getSIZE = function() {
			return controller.size();
		}

	return new constructor();

};