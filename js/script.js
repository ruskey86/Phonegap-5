function flashlightToggle()
{
		//window.plugins.flashlight.switchOn(success,fail,false);
		window.plugins.flashlight.toggle(success,fail,false);
		window.plugins.toast.show('flashlight toggled','short','center',false);	
}
function success()
{
	console.log("Success");
}
function fail()
{
	console.log("Fail");
}