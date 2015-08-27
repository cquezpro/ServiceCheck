package com.phonegap.plugins;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.location.LocationManager;
import android.content.Context;
/*
 * thx to http://stackoverflow.com/questions/843675/how-do-i-find-out-if-the-gps-of-an-android-device-is-enabled
 */
public class ServiceCheck extends CordovaPlugin{
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if (action.equals("checkAvailabilityServices")){
			this.checkAvailabilityServices(callbackContext);
			return true;
		}
		return false;
	}

	private void checkAvailabilityServices(CallbackContext callbackContext){
		Context context = this.cordova.getActivity().getApplicationContext();
    final LocationManager manager = (LocationManager) context.getSystemService( Context.LOCATION_SERVICE );
    if ( manager.isProviderEnabled( LocationManager.GPS_PROVIDER ) ) {
			callbackContext.success();
    }else{
			callbackContext.error(0);
		}
  }
}
