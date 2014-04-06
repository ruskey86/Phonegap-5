// JavaScript Document
window.onload = initAll;

function initAll() {
"use strict";
	var value = window.localStorage.getItem("slidervalue");
	$('#slider').val(value);
	$('#slider').slider("refresh");
	

}


function slider_save() {
	var SliderValue = $("#slider").val();
	//alert("Slider value = " + SliderValue);
	window.localStorage.setItem("slidervalue", SliderValue);
}

function slider_reset() {
	var value = window.localStorage.getItem("slidervalue");
	//alert("Slider value = " + value);
	$('#slider').val(value);
	$('#slider').slider("refresh");
}

function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {

	document.addEventListener("menubutton", onMenuKeyDown, false);
}

function onMenuKeyDown() {

	alert("Menu Button DOWN!!!");

}

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

function endApp(){

navigator.app.exitApp();

}

function hello(){
	alert("Hello user!!!!");
}

function bye() 
{
	
alert("bye bye users");	
	
	
}

<div id="menu">
				<a href="#options" data-role="button" data-theme="b" data-mini="true">Options</a>
				<a href="#about" data-role="button" data-theme="b" data-mini="true">About</a>
				<a href="http://nathanhedglin.us/" data-role="button" data-theme="b" data-mini="true">Help</a>
				<a href="#quit" data-role="button" data-theme="b" data-mini="true">Quit</a>

				<input type="button" value="Quit" data-theme="c" data-mini="true" onclick="navigator.app.exitapp()" />

			</div>

// Calc code
function pushButton(buttonValue) {
	"use strict";
     if (buttonValue === 'C') {
          document.getElementById('screen').value = '';
     }
     else {
          document.getElementById('screen').value += buttonValue;
     }
}
function calculate(equation) {
	"use strict";
     var answer = eval(equation);
     document.getElementById('screen').value = answer;
}

 
function calc()
{
"use strict";
alert("it works");
//document.getElementById("input").innerHTML=Math.tan(65);

}



