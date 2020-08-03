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

function makeChange() {
	chrome.storage.sync.get(settings => {
		Object.keys(options).forEach(key => {
			if (settings.hasOwnProperty(key))
				popup.setAttribute(key, settings[key]);
			else
				popup.setAttribute(key, options[key]);
		});
	});
}

var popup = document.documentElement;
makeChange();
chrome.storage.onChanged.addListener(makeChange);
