"use strict";
var options = {
	feed: false,
	sidebar: false,
	recommended: false,
	chat: false,
	playlists: false,
	endscreen: false,
	cards: false,
	comments: false,
	merch: false,
	meta: false,
	bar: false,
	header: false,
	notifs: true,
	left: false
};

function makeChanges() {
	chrome.storage.sync.get(settings => {
		Object.keys(options).forEach(key => {
			if (settings.hasOwnProperty(key)) document.getElementById(key).checked = settings[key];
			else document.getElementById(key).checked = options[key];
		});
	});
}
 function update() {
		Object.keys(options).forEach(key => options[key] = document.getElementById(key).checked);
		chrome.storage.sync.clear();
		chrome.storage.sync.set(options);
	}
document.addEventListener("DOMContentLoaded", makeChanges);

var option = document.getElementsByTagName("input");
for (var i = 0; i < option.length; i++) {
	option[i].addEventListener('change',update);
}