function setAttributes(ele, attrs) {
	for (var i in attrs) {
		if (i === 'html') {
			ele.innerHTML = attrs[i];
		} else {
			ele.setAttribute(i, attrs[i]);
		}
	}
}

function setMonoTag(type, content) {
	let holder = document.getElementsByTagName(type);
	if (holder.length === 0) {
		if (['title', 'style', 'meta', 'link', 'base'].includes(type)) {
			var destination = 'head';
		} else {
			var destination = 'body';
		}
		addElement(destination, type, content);
	} else {
		let x = holder[0];
		setAttributes(x, content);
	}
}
function addElement(destination, type, content){
	let x = document.createElement(type);
	setAttributes(x, content);
	if (destination === 'head' || destination === 'body') {
		document.getElementsByTagName(destination)[0].append(x);
	} else {
		document.getElementById(destination).append(x);
	}
}

function setBasic() {
	addElement('head', 'title', {'html': 'JavaScript-only Page'});
	addElement('head', 'link', {
		'rel': 'stylesheet',
		'href': 'styles.css'
	});
	addElement('head', 'meta', {
		'charset': 'UTF-8'
	});
	addElement('head', 'link', {
		'rel': 'stylesheet',
		'href': 'styles.css'
	});
	addElement('head', 'meta', {
		'font': 'PublicPixel',
		'license': 'By GGBotNet, used under CC0 Universal'
	});
	setAttributes(document.getElementsByTagName('body')[0], {
		'class': 'monosodic'
	});
	addElement('body', 'header', {
		'id': 'header',
		'class': 'flashing sticky-top'
	});
	addElement('header', 'nav', {
		'id': 'navbar',
		'class': ''
	});
	addElement('navbar', 'h1', {
		'id': 'main-title',
		'class': 'big',
		'html': document.getElementsByTagName('title')[0].innerHTML
	});
	addElement('header', 'p', {
		'id': 'sub-title',
		'class': 'small',
		'html': 'This page maintains itself solely on predefined javascript scripts and css stylesheets, no code on the base HTML whatsoever.'
	});
}

document.addEventListener("DOMContentLoaded", setBasic);