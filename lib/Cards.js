exports.Card = function(Card){

	var constructor = function() {};
	constructor.prototype.getTitle = function() {
		return Card;
	};

	return new constructor();

};
