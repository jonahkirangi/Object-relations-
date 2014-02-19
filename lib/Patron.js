var Deck = require('../lib/Deck.js').Deck;

exports.Patron = function() {
	var ShuffledDeck=[];
	var controller = new Deck();
	controller.generateDECK();

	function getSIZE() {
		return controller.size();
	}

	function getCARD(){
		controller.remove();
		return controller.getCARD(controller.size()-1);
	}

	var outFunctions = function printTest(input) {

		if (input === "User")
			return{
				getCARD:getCARD
				// getSIZE:getSIZE
			}
		if (input === "Dealer")
			return{
				getCARD:getCARD,
				getSIZE:getSIZE
			}
	}

	return outFunctions

};