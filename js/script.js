// Put your custom code here
window.onload = function(){
	var flashlightstate = false;
};

function flashlightToggle()
{
	if (flashlightstate)
	{
		window.plugins.flashlight.switchOn(flashlightOn, error("Flashlight failed to turn on"), false);
		window.plugins.toast.show('Flashlight On', 'short', 'center');
		flashlightstate = false;
	}
	else
	{
		window.plugins.flashlight.switchOff(flashlightOff, error("Flashlight failed to turn off"), false);
		window.plugins.toast.show('Flashlight Off','short','center');
		flashlightstate = true;
	}

}

function flashlightOn()
{
	console.log("Flashlight on");
	window.plugins.toast.show("Flashlight on");
}

function flashlightOff()
{
	console.log("Flashlight off");
	window.plugins.toast.show("Flashlight off");
}

function error(message)
{
	console.log(message);
	window.plugins.toast.show(message, 'long', 'center');
}

document.addEventListener("backbutton", function()
{
	// pass exitApp as callbacks to the switchOff method
	window.plugins.flashlight.switchOff(exitApp, exitApp);
}, false);

function exitApp()
{
	navigator.app.exitApp();
}