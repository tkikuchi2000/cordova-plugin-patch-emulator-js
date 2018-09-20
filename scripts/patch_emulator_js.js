var android_script = require('./patch_emulator_js_android');

module.exports = function(context) {
  var Q = context.requireCordovaModule('q');
  var platforms = context.requireCordovaModule('cordova-lib/src/cordova/util').listPlatforms(context.opts.projectRoot);

  var promises = [];

  if (platforms.indexOf('android') >= 0) {
    promises.push(android_script(context));
  }

  return Q.all(promises);
};
