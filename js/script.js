// Put your custom code here
function flashlightToggle()
{
	window.plugins.flashlight.toggle(flashlightsuccess,error("flashlight failed"),false);
}
function flashlightsuccess()
{
	console.log("Flashlight toggled");
	window.plugins.toast.show("Flashlight toggled",'short','center');
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