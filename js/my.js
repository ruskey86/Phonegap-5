// Put your custom code here
function flashlightOn()
{
	// switch on
	window.plugins.flashlight.switchOn(success, error);

	// success/error callbacks may be passed
	console.log("flashlight on");
	
	window.plugins.toast.show('Flashlight On','long','center');
}
function success()
{
	console.log("Light ON");
}
function error()
{
	console.log("Error");
}

