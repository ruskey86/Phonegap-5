window.onload = init;

var menuOpen = false;
var menuDiv = "";

function init() {
	document.addEventListener("deviceready", startup, false);
}

function startup() {
	console.log("Business time...");
	menuDiv = document.querySelector("#menu");

	document.addEventListener("menubutton", doMenu, false);
}

function doMenu() {
	console.log("The menu was clicked...");
	if (menuOpen) {
		console.log("close the menu");
		menuDiv.style.display = "none";
		menuOpen = false;
	} else {
		console.log("open the menu");
		menuDiv.style.display = "block";
		menuOpen = true;
	}

}