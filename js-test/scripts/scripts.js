function clickHandler() {
	alert("lol, you got scammed");
}

function getRandom() {
	let min = parseInt(document.getElementById("minValue").value);
	let max = parseInt(document.getElementById("maxValue").value);
	let result = parseInt(Math.random()*(max - min)) + min;
	console.log(result);
}