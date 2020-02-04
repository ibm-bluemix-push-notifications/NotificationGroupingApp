/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {pushAppGUID, pushClientSecret, pushRegion} from './app.json';
import {Push} from 'bmd-push-react-native';
import { DeviceEventEmitter } from 'react-native';

AppRegistry.registerComponent(appName, () => App);


Push.init({
	"appGUID":pushAppGUID,
	"clientSecret":PushClientSecret,
	"region":pushRegion,
}).then(function(response) {
    //alert("Success: " + response);
    var options = {};
    Push.register(options).then(function(response) {
        alert("Success: " + response);
    }).catch(function(e) {
        alert("Register Error: " + e);
    });

}).catch(function(e) {
	alert("Init Error: " + e);
});

DeviceEventEmitter.addListener("onPushReceived", function(notification: Event) {
	alert(JSON.stringify(notification));
});

Push.registerNotificationsCallback("onPushReceived");