var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [] ;

//check for a match
var checkForMatch = function() {
	
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!") } 
else {
alert("Sorry, try again") }
}

//for flipping the card and storing

var flipCard = function (cardId) {
cardsInPlay.push(cards[cardId]);
console.log("User flipped " + cards[cardId]);

//find number of cards in played
if (cardsInPlay.length === 2) {
checkForMatch();
}
}

flipCard(0);
flipCard(2);

