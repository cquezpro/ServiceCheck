cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.ServiceCheck/www/ServiceCheck.js",
        "id": "com.phonegap.plugins.ServiceCheck.ServiceCheck",
        "clobbers": [
            "ServiceCheck"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.ServiceCheck": "1.0.0",
    "org.apache.cordova.geolocation": "0.3.12",
    "com.google.playservices": "21.0.0"
}
// BOTTOM OF METADATA
});