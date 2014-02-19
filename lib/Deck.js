var Card = require('../lib/Cards.js').Card;

exports.Deck = function() {
	var Cards=[];

	var card_dummy= [
		{	Rank:"Queen",Suit: "Hearts"},
		{	Rank:"King",Suit: "Hearts"	},
		{	Rank:"Ace",	Suit: "Spades"	}
	];

	var constructor = function() {};
		constructor.prototype.add = function(Card){
			if (this.size() >= 52){
				return false; //can't add anymore cards
			}
			else {
				Cards.push(Card);
				return true;
			}
		};

		constructor.prototype.remove = function (){
			if (this.size() > 0){
				Cards.pop();
				return true				
			}
			return false;
		};

		constructor.prototype.size = function() {
			return Cards.length;
		};

		//magic method for our cards
		constructor.prototype.includes = function(Card) {
			for (var each in Cards){
				if (JSON.stringify(Cards[each]) === JSON.stringify(Card) ){
					return true;
				}
			}
			return false;
		};
			// return (Cards.indexOf(Card) > -1) ? true : false;

		constructor.prototype.generateDECK = function(){
		
			for (var i=0; i<52; i++){
				var randomNumber = Math.floor(Math.random() * 3);
				var tempCard = new Card(card_dummy[randomNumber]).getTitle();
				this.add(tempCard);
			}
			return Cards;
		};

		constructor.prototype.getCARD = function(num) {
			return Cards[num];
		};

	return new constructor();

};