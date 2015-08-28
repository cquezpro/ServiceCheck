exports.checkAvailabilityServices = function(success, error, options){
		options = options || {};
		options.alert = false || options.alert;
		cordova.exec(success, error, "ServiceCheck", "checkAvailabilityServices", [options.alert]);
};

exports.checkLocationSettings = function(success, error, options){
		options = options || {};
		options.alert = false || options.alert;
		cordova.exec(success, error, "ServiceCheck", "checkLocationSettings", [options.alert]);
};
