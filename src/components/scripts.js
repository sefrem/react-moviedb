
const cards = document.querySelectorAll(".memory-card");
const table = document.querySelector('.score-table');
const newButton = document.querySelector('.new-game');
const clearButton = document.querySelector('.clear-score');
const randomNames = ['Инкогнито', 'NoOne', 'Скрываюсь', 'Неопознанный', 'Hyde'];

let isFlipped = true, firstCard, secondCard, lockBoard, counter = 0, name, score = [];


function flipSide() {
	if(lockBoard) return  //Locking the board from any clicks before the 2 selected cards are checked and are back to their original class.
	if(this === firstCard) return //Checking if the second click is on the same card.
	this.classList.add('flip-card');

	if(isFlipped) {
		firstCard = this;
		isFlipped = false;
	}
	else {
		 secondCard = this;
		 isFlipped = true;
		 lockBoard = true;
		checkForMatch(); //checking if the cards are equal.
	}
	}

function checkForMatch() {
	if(firstCard.dataset.framework === secondCard.dataset.framework) { // if the first card is the same as the second, i remove the event listener
		firstCard.removeEventListener('click', flipSide);				// so it couldn't be flipped again in this round.
		secondCard.removeEventListener('click', flipSide);
		clearState();
		counter++;
	}
	else {
	setTimeout(() => {	// if the first card is not equal to the second one, we remove the added "flip-card" class after the 1500ms timeout.
		firstCard.classList.remove('flip-card'); 
		secondCard.classList.remove('flip-card');
		clearState();
		counter++;
	}, 1500);
}
endGame();
}

function clearState() { //this one clears the cards' variables before the new try to guess.
	[firstCard, secondCard] = [undefined, undefined];
	lockBoard = false;
}
 
function newGame() { //for the new round of the game we remove all "flip-card" classes and add event listeners for each.
cards.forEach(card => card.classList.remove('flip-card'));	
cards.forEach(card => card.addEventListener('click', flipSide));
setTimeout(() => cards.forEach(card => card.style.order = `${Math.floor(Math.random()*12)}`), 500); //we change the order property of each card to a random number after the timeout 500ms. 
clearState();																						//if do this without timeout, it is obvious to which position the card was moved.
counter = 0;
 if(localStorage.scoreBoard) { //if there is saved score board in the local storage, we update the table from it. 
	score = JSON.parse(localStorage.scoreBoard);
	tableUpdate();
} 
}

function endGame() {
	if([...cards].every(card => card.classList.contains('flip-card'))) { //If all the cards have "flip-card" class on them, 
		return new Promise(function(resolve) {								// we display the prompt window after the 500ms timeout, in order for the flip card animation to end before window appears.
			setTimeout(() => resolve(name = prompt(`GOOD ONE. It only took you ${counter} tries to end this.\nPlease enter your name to save your score`)), 500);
		})
		.then(result => scoreBoardUpdate());
	} 
}

function scoreBoardUpdate() { //for each new score we add a new "name:score" value to the "score" array and then sort it by the second element of the pair("score"). After that we update table and then save an array to the localStorage as JSON string.
	 if(name === null || name === "") name = randomNames[Math.floor(Math.random()*randomNames.length-1)];
 	score.push([`${name}`, +`${counter}`]);
 	score.sort((a, b) => a[1] > b[1] ? 1 : -1);
 	if(score.length > 5) score.pop()
 	tableUpdate();
	localStorage.setItem('scoreBoard', JSON.stringify(score)); // add each result to the local storage in the format (name:counter). Counter represents number of tries.
}

function tableUpdate() {
	clearTable();	
	score.forEach(item => { //here we add the lines from the score array.
	 	let newLine = document.createElement('tr');
	 	newLine.innerHTML = `<td>${item[0]}</td><td>${item[1]}</td>`;
	 	table.appendChild(newLine);
 	})
}

function clearTable() {
	const trTable = document.querySelectorAll('.score-table > tr'); //first we select all tr elements of the table. Only added by the script lines are direct children of the table.
	trTable.forEach(node => node.remove()); //second, we remove all the tr lines in order to add new sorted ones.
}

function clearBoard() {
	score.length = 0;
	localStorage.removeItem('scoreBoard');
	clearTable();
}

newGame();


newButton.addEventListener('click', newGame);
clearButton.addEventListener('click', clearBoard);




function finishTest() {
	cards.forEach(card => card.classList.add('flip-card'));
	
}

