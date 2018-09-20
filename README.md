# cordova-plugin-patch-emulator-js
Apply patch to emulator.js


## How to Use

Install the plugin by fetching the dependencies

    $ cordova plugin add https://github.com/tkikuchi2000/cordova-plugin-patch-emulator-js.git#1.0.0

Install Android platform

    cordova platform add android
    
Run the code

    cordova prepare android

`platforms/android/cordova/lib/emulator.js` is applied patch [CB-14165](https://github.com/apache/cordova-android/pull/457/files) 
