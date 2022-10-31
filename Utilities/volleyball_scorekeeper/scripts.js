let setNumber = 1;
let alreadySwitched = false;

function increment(id) {
	document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML) + 1;
}

function endSet() {
	leftScore = parseInt(document.getElementById("left-team-button").innerHTML);
	rightScore = parseInt(document.getElementById("right-team-button").innerHTML);
	if (setNumber !== 3) {
		if (leftScore >= 25 || rightScore >= 25) {
			announce();
			switchSides();
		}
	} else {
		if ((leftScore === 8 || rightScore === 8) && !alreadySwitched) {
			switchSides();
			alreadySwitched = true;
		}
		if (leftScore >= 15 || rightScore >= 15) {
			announce();
			endMatch();
		}
	}
}

function endMatch() {
	document.getElementById("left-team-button").innerHTML = document.getElementById("left-team-set-3").innerHTML;
	document.getElementById("right-team-button").innerHTML = document.getElementById("right-team-set-3").innerHTML;
	document.getElementById("left-team-button").disabled = true;
	document.getElementById("right-team-button").disabled = true;
	document.getElementById("left-team-name").disabled = true;
	document.getElementById("right-team-name").disabled = true;
	document.getElementById("switch-button").removeEventListener("click", switchSides);
	document.getElementById("switch-button").innerHTML = "Reset";
	document.getElementById("switch-button").addEventListener("click", reset);
}

function reset() {
	document.getElementById("left-team-button").innerHTML = 0;
	document.getElementById("right-team-button").innerHTML = 0;
	document.getElementById("left-team-name").innerHTML = null;
	document.getElementById("right-team-name").innerHTML = null;
	for (setNumber = 1; setNumber<=3; ++setNumber) {
		document.getElementById(`left-team-set-${setNumber}`).innerHTML = null;
		document.getElementById(`right-team-set-${setNumber}`).innerHTML = null;
	}
	setNumber = 1;
	alreadySwitched = false;
	document.getElementById("switch-button").innerHTML = "Switch Sides";
	document.getElementById("switch-button").addEventListener("click", switchSides);
	document.getElementById("left-team-button").disabled = false;
	document.getElementById("right-team-button").disabled = false;
	document.getElementById("left-team-name").disabled = false;
	document.getElementById("right-team-name").disabled = false;
}

function announce() {
	if (Math.abs(leftScore - rightScore) >= 2) {
		if (leftScore > rightScore) {
			if (document.getElementById('left-team-name').value.length === 0) {
				alert(`${document.getElementById('left-team-name').placeholder} won!`);
			} else {
				alert(`${document.getElementById('left-team-name').value} won!`);
			}
		} else {
			if (document.getElementById('right-team-name').value.length === 0) {
				alert(`${document.getElementById('right-team-name').placeholder} won!`);
			} else {
				alert(`${document.getElementById('right-team-name').value} won!`);
			}
		}
		updateScoreBoard();
	}
}

function updateScoreBoard() {
	document.getElementById(`left-team-set-${setNumber}`).innerHTML = document.getElementById("left-team-button").innerHTML;
	document.getElementById(`right-team-set-${setNumber}`).innerHTML = document.getElementById("right-team-button").innerHTML;
	document.getElementById("left-team-button").innerHTML = 0;
	document.getElementById("right-team-button").innerHTML = 0;
	if (document.getElementById("left-team-button").classList.contains("glowing")) {
		document.getElementById("left-team-button").classList.toggle("glowing");
	}
	if (document.getElementById("right-team-button").classList.contains("glowing")) {
		document.getElementById("right-team-button").classList.toggle("glowing");
	}
	setNumber++;
}

function switchSides() {
	document.getElementById("current-point-container").classList.toggle("reverse-order");
}

function makeGlow(hint) {
	switch(hint) {
		case "left": {
			if (!document.getElementById("left-team-button").classList.contains("glowing")) {
				document.getElementById("left-team-button").classList.toggle("glowing");
			}
			if (document.getElementById("right-team-button").classList.contains("glowing")) {
				document.getElementById("right-team-button").classList.toggle("glowing");
			}
			break;
		}
		case "right": {
			if (document.getElementById("left-team-button").classList.contains("glowing")) {
				document.getElementById("left-team-button").classList.toggle("glowing");
			}
			if (!document.getElementById("right-team-button").classList.contains("glowing")) {
				document.getElementById("right-team-button").classList.toggle("glowing");
			}
			break;
		}
		default: {
			break;
		}
	}
}

function init() {
	document.getElementById("left-team-button").addEventListener("click", function () {
		increment("left-team-button");
		makeGlow("left");
		endSet();
	});
	document.getElementById("right-team-button").addEventListener("click", function () {
		increment("right-team-button");
		makeGlow("right");
		endSet();
	});
	document.getElementById("switch-button").addEventListener("click", switchSides);
}

document.addEventListener("DOMContentLoaded", init);
