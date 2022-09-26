function clickHandler() {
	alert("lol, you got scammed");
}

function getRandom() {
	let min = parseInt(document.getElementById("minValue").value);
	let max = parseInt(document.getElementById("maxValue").value);
	let result = parseInt(Math.random()*(max - min)) + min;
	console.log(result);
}

function addBloat() {
	let ele = document.createElement("article");
	ele.setAttribute("class", "bloated");
	document.getElementById("main").appendChild(ele);
}

function removeFromPlay(id) {
	document.getElementById(id).remove();
}

function addExecutioner(target) {
	let executioner = document.createElement("button");
	executioner.setAttribute("class", "executioner");
	executioner.setAttribute("type", "button");
	executioner.setAttribute("onclick", "removeFromPlay('"+target.id+"')");
	executioner.innerHTML = 'X';
	let executionerContainer = document.createElement("div");
	executionerContainer.setAttribute("class", "full-line-container");
	executionerContainer.append(executioner)
	document.getElementById(target.id).prepend(executionerContainer);
}

function manageExecutioners() {
	let cards = document.getElementsByClassName("card");
	for (i in cards) {
		if (cards.hasOwnProperty(i)) {
			addExecutioner(cards[i]);
		}
	}
}

document.addEventListener("DOMContentLoaded", manageExecutioners);