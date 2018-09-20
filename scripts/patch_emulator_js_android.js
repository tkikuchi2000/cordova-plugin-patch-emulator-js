var fs = require('fs');

function isExistFile(file) {
  try {
    fs.statSync(file);
    return true;
  } catch(err) {
    if (err.code === 'ENOENT') {
      console.log(`File not found: ${file}`);
      return false;
    }
  }
}

module.exports = function(context) {
  var path = context.requireCordovaModule('path');
  var deferred = context.requireCordovaModule('q').defer();

  var pluginDir = path.dirname(context.opts.plugin.pluginInfo.filepath);
  var modPath = path.join(pluginDir, 'scripts/mod_emulator.js');
  var targetPath = path.join(context.opts.projectRoot, 'platforms/android/cordova/lib/emulator.js');

  // write file
  if (isExistFile(modPath) && isExistFile(targetPath)) {
    var modFile = fs.readFileSync(modPath, 'utf-8');
    fs.writeFileSync(targetPath, modFile, 'utf-8');
    deferred.resolve();
  } else {
    deferred.reject();
  }

  return deferred.promise;
};
