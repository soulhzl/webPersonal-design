var usb = require('usb');
usb.on('attach', function(device) { 
	console.log(device);
	
});

usb.on('detach', function(device) { 
	console.log(device);
});