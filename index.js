
// select first card
// add first card to array, cardsInPlay
// select second card
// add second card to the array,cardsInPlay
// when there are two cards in the array, assess for match
// which means compare data-card-numbers
// if cards match, alert "you found a match"
// and empty array
// if cards match, add 25 points to scoreboard
// if cards match, leave cards flipped
// if cards do not match, alert "sorry, try again"
// empty array
// turn them over to initial position
// when score is 100, alert "you won!"
// reset game by clicking on reset button 


let cardsInPlay = [];

let selectCard = document.querySelectorAll('.card') 
for(let i = 0; i < selectCard.length; i++) {
	selectCard[i].addEventListener('click', function(e) {
		this.querySelector('img').classList.remove("hidden");
		this.classList.remove("card");


		if(cardsInPlay.length < 2) {
			cardsInPlay.push(this.dataset.cardNumber)	
			console.log(cardsInPlay.length);
			checkForMatch();			
		}	
	})
}

let score = 0;
let scoreBoard = document.querySelector('.score')

let checkForMatch = function() {
	let card1 = document.querySelector(`[data-card-number="${cardsInPlay[0]}"]`)
	let card2 = document.querySelector(`[data-card-number="${cardsInPlay[1]}"]`)
	if(cardsInPlay.length === 2) {
		if(card1.dataset.cardNumber === card2.dataset.cardNumber) {	
			scoreBoard.innerText = 'Score: ' + (score+=25);
			if(score === 100) {
				scoreBoard.innerHTML = "YOU WON!" 
			}
	    } else {	
	    	scoreBoard.innerText = 'Score: ' + (score=0);    	
	        flipCardOver();    
	        alert('Try again!') 
	    }
	    	cardsInPlay.shift();
	    	cardsInPlay.shift();  
    } 

}

function flipCardOver() {
	for(var i= 0; i < selectCard.length; i++) {
	selectCard[i].querySelector("img").classList.add("hidden");
	selectCard[i].classList.add("card");
  }
}

	






