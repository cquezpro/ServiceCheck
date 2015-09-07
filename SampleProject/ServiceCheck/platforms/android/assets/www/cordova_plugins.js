cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.ServiceCheck/www/ServiceCheck.js",
        "id": "com.phonegap.plugins.ServiceCheck.ServiceCheck",
        "clobbers": [
            "ServiceCheck"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.nativesettingsopener/www/settings.js",
        "id": "com.phonegap.plugins.nativesettingsopener.Settings",
        "clobbers": [
            "cordova.plugins.settings"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.ServiceCheck": "1.0.0",
    "com.phonegap.plugins.nativesettingsopener": "1.0",
    "org.apache.cordova.network-information": "0.2.15",
    "org.apache.cordova.geolocation": "0.3.12",
    "com.google.playservices": "21.0.0"
}
// BOTTOM OF METADATA
});