var score = 0;

function reset() {
	// reset score to zero
	score = 0;
	document.getElementById('result').innerHTML = score;
}

function addFive() {
	score += 5;
	document.getElementById('result').innerHTML = score;
}

function addTen() {
	score += 10;
	document.getElementById('result').innerHTML = score;
}

function minusOne() {
	score--;
	document.getElementById('result').innerHTML = score;
}

document.getElementById('zero').onclick = reset;
document.getElementById('add5').onclick = addFive;
document.getElementById('add10').onclick = addTen;
document.getElementById('sub1').onclick = minusOne;