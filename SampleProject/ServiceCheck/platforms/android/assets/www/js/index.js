/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       /*ServiceCheck.checkAvailabilityServices(function() {
			alert("Google play service is enabled!");
	   },
	   function() {
			alert("Google play service is disabled!");
	   });*/
	   
	   
	/*   var settingNames = array(
    "open",
    "accessibility",
    "add_account",
    "airplane_mode",
    "apn",
    "application_details",
    "application_development",
    "application",
    "bluetooth",
    "captioning",
    "cast",
    "data_roaming",
    "date",
    "device_info",
    "display",
    "dream",
    "home",
    "input_method",
    "input_method_subtype",
    "internal_storage",
    "locale",
    "location_source",
    "manage_all_applications",
    "manage_applications",
    "memory_card",
    "network_operator",
    "nfcsharing",
    "nfc_payment",
    "nfc_settings",
    "print",
    "privacy",
    "quick_launch",
    "search",
    "security",
    "settings",
    "show_regulatory_info",
    "sound",
    "sync",
    "usage_access",
    "user_dictionary",
    "voice_input",
    "wifi_ip",
    "wifi",
    "wireless");*/
	   //This section check GPS setting.
	   ServiceCheck.checkLocationSettings(function() {
			alert("GPS is enabled!");
	   },
	   function() {
			alert("GPS is disabled! App will open Location Setting.");
			if(typeof cordova.plugins.settings.openSetting != undefined) {
				cordova.plugins.settings.openSetting("location_source", 
					function(){
						console.log("opened location_source settings")
					}, function(){
						console.log("failed to location_source nfc settings")
				});
			}
			return ;
	   }); 
	   
	   //This section check Network connection.
	   var networkState = navigator.connection.type;
		var states = {};
		states[Connection.UNKNOWN]  = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI]     = 'WiFi connection';
		states[Connection.CELL_2G]  = 'Cell 2G connection';
		states[Connection.CELL_3G]  = 'Cell 3G connection';
		states[Connection.CELL_4G]  = 'Cell 4G connection';
		states[Connection.CELL]     = 'Cell generic connection';
		states[Connection.NONE]     = 'No network connection';

		if(networkState == Connection.NONE || networkState == Connection.UNKNOWN) {
			alert("Network is disconnected! App will open network setting.");
			if(typeof cordova.plugins.settings.openSetting != undefined) {
				cordova.plugins.settings.openSetting("wifi", 
					function(){
						console.log("opened wifi settings")
					}, function(){
						console.log("failed to open wifi settings")
				});
				return ;
			}
		}else{
			alert("Network is connected!");
		}
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
    }
};

app.initialize();