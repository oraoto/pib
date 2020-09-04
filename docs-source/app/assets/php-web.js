
var PHP = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(PHP) {
  PHP = PHP || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof PHP !== 'undefined' ? PHP : {};


// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)

  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads++;
  (function() {
   var loadPackage = function(metadata) {
  
      var PACKAGE_PATH;
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof location !== 'undefined') {
        // worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      } else {
        throw 'using preloaded data can only be done on a web page or in a web worker';
      }
      var PACKAGE_NAME = '../../build/php-web.data';
      var REMOTE_PACKAGE_BASE = 'php-web.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
    
      var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];
      var PACKAGE_UUID = metadata['package_uuid'];
    
      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };
    
        var fetchedCallback = null;
        var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

        if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
          if (fetchedCallback) {
            fetchedCallback(data);
            fetchedCallback = null;
          } else {
            fetched = data;
          }
        }, handleError);
      
    function runWithFS() {
  
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
  Module['FS_createPath']('/', 'preload', true, true);
Module['FS_createPath']('/preload', 'Zend', true, true);
Module['FS_createPath']('/preload', 'drupal-7.59', true, true);
Module['FS_createPath']('/preload/drupal-7.59', 'misc', true, true);
Module['FS_createPath']('/preload/drupal-7.59/misc', 'ui', true, true);
Module['FS_createPath']('/preload/drupal-7.59/misc/ui', 'images', true, true);
Module['FS_createPath']('/preload/drupal-7.59/misc', 'farbtastic', true, true);
Module['FS_createPath']('/preload/drupal-7.59', 'themes', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes', 'seven', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes/seven', 'images', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes', 'stark', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes', 'engines', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes/engines', 'phptemplate', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes', 'garland', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes/garland', 'color', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes/garland', 'images', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes', 'bartik', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes/bartik', 'color', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes/bartik', 'images', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes/bartik', 'css', true, true);
Module['FS_createPath']('/preload/drupal-7.59/themes/bartik', 'templates', true, true);
Module['FS_createPath']('/preload/drupal-7.59', 'includes', true, true);
Module['FS_createPath']('/preload/drupal-7.59/includes', 'filetransfer', true, true);
Module['FS_createPath']('/preload/drupal-7.59/includes', 'database', true, true);
Module['FS_createPath']('/preload/drupal-7.59/includes/database', 'mysql', true, true);
Module['FS_createPath']('/preload/drupal-7.59/includes/database', 'sqlite', true, true);
Module['FS_createPath']('/preload/drupal-7.59/includes/database', 'pgsql', true, true);
Module['FS_createPath']('/preload/drupal-7.59', 'modules', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'system', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/system', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'taxonomy', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'poll', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'path', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'filter', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/filter', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'update', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/update', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/update/tests', 'themes', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/update/tests/themes', 'update_test_subtheme', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/update/tests/themes', 'update_test_basetheme', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/update/tests/themes', 'update_test_admintheme', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'node', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/node', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'toolbar', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'aggregator', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/aggregator', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'book', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'field_ui', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'profile', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'search', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/search', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'blog', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'user', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/user', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'image', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/image', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'overlay', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/overlay', 'images', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'color', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/color', 'images', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'contextual', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/contextual', 'images', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'trigger', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/trigger', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'syslog', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'contact', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'comment', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'statistics', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'simpletest', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest', 'lib', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/lib', 'Drupal', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/lib/Drupal', 'simpletest', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/lib/Drupal/simpletest', 'Tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests', 'themes', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/themes', 'test_subtheme', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/themes', 'test_theme_nyan_cat', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/themes/test_theme_nyan_cat', 'templates', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/themes', 'engines', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/themes/engines', 'nyan_cat', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/themes', 'test_basetheme', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/themes', 'test_theme', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/themes/test_theme', 'templates', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests', 'drupal_autoload_test', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests', 'psr_0_test', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/psr_0_test', 'lib', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/psr_0_test/lib', 'Drupal', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/psr_0_test/lib/Drupal', 'psr_0_test', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/psr_0_test/lib/Drupal/psr_0_test', 'Tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/psr_0_test/lib/Drupal/psr_0_test/Tests', 'Nested', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests', 'drupal_system_listing_compatible_test', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests', 'upgrade', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests', 'psr_4_test', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/psr_4_test', 'src', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/psr_4_test/src', 'Tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests/psr_4_test/src/Tests', 'Nested', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/tests', 'drupal_system_listing_incompatible_test', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest', 'src', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/src', 'Tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest', 'files', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/files', 'css_test_files', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/simpletest/files/css_test_files', 'css_subfolder', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'menu', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'dblog', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'tracker', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'file', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/file', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/file', 'icons', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'forum', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'dashboard', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'translation', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/translation', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'locale', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/locale', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/locale/tests', 'translations', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'block', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/block', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/block/tests', 'themes', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/block/tests/themes', 'block_test_theme', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'help', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'field', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/field', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/field', 'modules', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/field/modules', 'list', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/field/modules/list', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/field/modules', 'field_sql_storage', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/field/modules', 'number', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/field/modules', 'options', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/field/modules', 'text', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/field', 'theme', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'openid', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/openid', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'rdf', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules/rdf', 'tests', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'php', true, true);
Module['FS_createPath']('/preload/drupal-7.59/modules', 'shortcut', true, true);
Module['FS_createPath']('/preload/drupal-7.59', 'sites', true, true);
Module['FS_createPath']('/preload/drupal-7.59/sites', 'all', true, true);
Module['FS_createPath']('/preload/drupal-7.59/sites/all', 'libraries', true, true);
Module['FS_createPath']('/preload/drupal-7.59/sites/all', 'themes', true, true);
Module['FS_createPath']('/preload/drupal-7.59/sites/all', 'modules', true, true);
Module['FS_createPath']('/preload/drupal-7.59/sites', 'default', true, true);
Module['FS_createPath']('/preload/drupal-7.59/sites/default', 'files', true, true);
Module['FS_createPath']('/preload/drupal-7.59/sites/default/files', 'drowser-files', true, true);
Module['FS_createPath']('/preload/drupal-7.59', 'scripts', true, true);
Module['FS_createPath']('/preload/drupal-7.59', 'profiles', true, true);
Module['FS_createPath']('/preload/drupal-7.59/profiles', 'testing', true, true);
Module['FS_createPath']('/preload/drupal-7.59/profiles/testing', 'modules', true, true);
Module['FS_createPath']('/preload/drupal-7.59/profiles/testing/modules', 'drupal_system_listing_compatible_test', true, true);
Module['FS_createPath']('/preload/drupal-7.59/profiles/testing/modules', 'drupal_system_listing_incompatible_test', true, true);
Module['FS_createPath']('/preload/drupal-7.59/profiles', 'standard', true, true);
Module['FS_createPath']('/preload/drupal-7.59/profiles/standard', 'translations', true, true);
Module['FS_createPath']('/preload/drupal-7.59/profiles', 'minimal', true, true);
Module['FS_createPath']('/preload/drupal-7.59/profiles/minimal', 'translations', true, true);

      /** @constructor */
      function DataRequest(start, end, audio) {
        this.start = start;
        this.end = end;
        this.audio = audio;
      }
      DataRequest.prototype = {
        requests: {},
        open: function(mode, name) {
          this.name = name;
          this.requests[name] = this;
          Module['addRunDependency']('fp ' + this.name);
        },
        send: function() {},
        onload: function() {
          var byteArray = this.byteArray.subarray(this.start, this.end);
          this.finish(byteArray);
        },
        finish: function(byteArray) {
          var that = this;
  
          Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
          Module['removeRunDependency']('fp ' + that.name);
  
          this.requests[this.name] = null;
        }
      };
  
          var files = metadata['files'];
          for (var i = 0; i < files.length; ++i) {
            new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio']).open('GET', files[i]['filename']);
          }
  
    
      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        
          // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;
    
            var files = metadata['files'];
            for (var i = 0; i < files.length; ++i) {
              DataRequest.prototype.requests[files[i].filename].onload();
            }
                Module['removeRunDependency']('datafile_../../build/php-web.data');

      };
      Module['addRunDependency']('datafile_../../build/php-web.data');
    
      if (!Module.preloadResults) Module.preloadResults = {};
    
        Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
        if (fetched) {
          processPackageData(fetched);
          fetched = null;
        } else {
          fetchedCallback = processPackageData;
        }
      
    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }
  
   }
   loadPackage({"files": [{"filename": "/preload/Zend/bench.php", "start": 0, "end": 7634, "audio": 0}, {"filename": "/preload/drupal-7.59/CHANGELOG.txt", "start": 7634, "end": 119613, "audio": 0}, {"filename": "/preload/drupal-7.59/robots.txt", "start": 119613, "end": 121802, "audio": 0}, {"filename": "/preload/drupal-7.59/LICENSE.txt", "start": 121802, "end": 139894, "audio": 0}, {"filename": "/preload/drupal-7.59/update.php", "start": 139894, "end": 159880, "audio": 0}, {"filename": "/preload/drupal-7.59/MAINTAINERS.txt", "start": 159880, "end": 168590, "audio": 0}, {"filename": "/preload/drupal-7.59/.gitignore", "start": 168590, "end": 168764, "audio": 0}, {"filename": "/preload/drupal-7.59/xmlrpc.php", "start": 168764, "end": 169181, "audio": 0}, {"filename": "/preload/drupal-7.59/index.php", "start": 169181, "end": 169710, "audio": 0}, {"filename": "/preload/drupal-7.59/install.php", "start": 169710, "end": 170413, "audio": 0}, {"filename": "/preload/drupal-7.59/INSTALL.mysql.txt", "start": 170413, "end": 172130, "audio": 0}, {"filename": "/preload/drupal-7.59/INSTALL.sqlite.txt", "start": 172130, "end": 173428, "audio": 0}, {"filename": "/preload/drupal-7.59/COPYRIGHT.txt", "start": 173428, "end": 174909, "audio": 0}, {"filename": "/preload/drupal-7.59/.editorconfig", "start": 174909, "end": 175226, "audio": 0}, {"filename": "/preload/drupal-7.59/authorize.php", "start": 175226, "end": 181830, "audio": 0}, {"filename": "/preload/drupal-7.59/INSTALL.pgsql.txt", "start": 181830, "end": 183704, "audio": 0}, {"filename": "/preload/drupal-7.59/.htaccess", "start": 183704, "end": 189816, "audio": 0}, {"filename": "/preload/drupal-7.59/cron.php", "start": 189816, "end": 190536, "audio": 0}, {"filename": "/preload/drupal-7.59/README.txt", "start": 190536, "end": 195918, "audio": 0}, {"filename": "/preload/drupal-7.59/web.config", "start": 195918, "end": 198118, "audio": 0}, {"filename": "/preload/drupal-7.59/UPGRADE.txt", "start": 198118, "end": 208241, "audio": 0}, {"filename": "/preload/drupal-7.59/INSTALL.txt", "start": 208241, "end": 226236, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/menu-leaf.png", "start": 226236, "end": 226362, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/favicon.ico", "start": 226362, "end": 231792, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/powered-blue-88x31.png", "start": 231792, "end": 233801, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/textarea.js", "start": 233801, "end": 234721, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/jquery.once.js", "start": 234721, "end": 237695, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/collapse.js", "start": 237695, "end": 241018, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/powered-gray-88x31.png", "start": 241018, "end": 242986, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/jquery.js", "start": 242986, "end": 321588, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/machine-name.js", "start": 321588, "end": 326702, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/tableheader.js", "start": 326702, "end": 332032, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/powered-black-135x42.png", "start": 332032, "end": 334731, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/permissions.png", "start": 334731, "end": 334973, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/form.js", "start": 334973, "end": 337433, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/timezone.js", "start": 337433, "end": 339991, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/autocomplete.js", "start": 339991, "end": 348417, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/grippie.png", "start": 348417, "end": 348523, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/message-16-help.png", "start": 348523, "end": 349191, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/feed.png", "start": 349191, "end": 349847, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/throbber.gif", "start": 349847, "end": 351183, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/watchdog-ok.png", "start": 351183, "end": 351558, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/progress.js", "start": 351558, "end": 354670, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/message-24-error.png", "start": 354670, "end": 355403, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/throbber-active.gif", "start": 355403, "end": 356636, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/vertical-tabs-rtl.css", "start": 356636, "end": 356901, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/powered-gray-80x15.png", "start": 356901, "end": 357599, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/menu-expanded.png", "start": 357599, "end": 357705, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/menu-collapsed.png", "start": 357705, "end": 357810, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/print-rtl.css", "start": 357810, "end": 357866, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/states.js", "start": 357866, "end": 375370, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ajax.js", "start": 375370, "end": 400405, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/forum-icons.png", "start": 400405, "end": 402170, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/message-16-error.png", "start": 402170, "end": 402689, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/jquery.form.js", "start": 402689, "end": 412602, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/message-16-info.png", "start": 412602, "end": 413335, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/powered-blue-135x42.png", "start": 413335, "end": 416214, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/vertical-tabs.css", "start": 416214, "end": 418271, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/print.css", "start": 418271, "end": 418562, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/message-24-ok.png", "start": 418562, "end": 419620, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/powered-gray-135x42.png", "start": 419620, "end": 422214, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/arrow-desc.png", "start": 422214, "end": 422332, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/configure.png", "start": 422332, "end": 422580, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/jquery.ba-bbq.js", "start": 422580, "end": 426699, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/powered-blue-80x15.png", "start": 426699, "end": 427642, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/help.png", "start": 427642, "end": 427936, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/watchdog-warning.png", "start": 427936, "end": 428254, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/authorize.js", "start": 428254, "end": 429222, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/batch.js", "start": 429222, "end": 430161, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/tabledrag.js", "start": 430161, "end": 472944, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/progress.gif", "start": 472944, "end": 478816, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/draggable.png", "start": 478816, "end": 479084, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/drupal.js", "start": 479084, "end": 499303, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/jquery.cookie.js", "start": 499303, "end": 500264, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/arrow-asc.png", "start": 500264, "end": 500382, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/druplicon.png", "start": 500382, "end": 504287, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/menu-collapsed-rtl.png", "start": 504287, "end": 504394, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/message-24-help.png", "start": 504394, "end": 505482, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/tree-bottom.png", "start": 505482, "end": 505611, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/powered-black-80x15.png", "start": 505611, "end": 507059, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/throbber-inactive.png", "start": 507059, "end": 507379, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/watchdog-error.png", "start": 507379, "end": 508159, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/tableselect.js", "start": 508159, "end": 512092, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/message-24-warning.png", "start": 512092, "end": 512845, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/message-24-info.png", "start": 512845, "end": 513856, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/powered-black-88x31.png", "start": 513856, "end": 515861, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/message-16-warning.png", "start": 515861, "end": 516303, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/vertical-tabs.js", "start": 516303, "end": 522634, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/tree.png", "start": 522634, "end": 522764, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/message-16-ok.png", "start": 522764, "end": 523403, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.button.css", "start": 523403, "end": 525874, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.core.min.js", "start": 525874, "end": 530199, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.accordion.css", "start": 530199, "end": 531265, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.pulsate.min.js", "start": 531265, "end": 532216, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.resizable.css", "start": 532216, "end": 533388, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.resizable.min.js", "start": 533388, "end": 550754, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.accordion.min.js", "start": 550754, "end": 559752, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.datepicker.min.js", "start": 559752, "end": 595379, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.tabs.css", "start": 595379, "end": 596762, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.core.min.js", "start": 596762, "end": 607591, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.fade.min.js", "start": 607591, "end": 608168, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.fold.min.js", "start": 608168, "end": 609297, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.position.min.js", "start": 609297, "end": 612910, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.draggable.min.js", "start": 612910, "end": 631462, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.clip.min.js", "start": 631462, "end": 632524, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.widget.min.js", "start": 632524, "end": 635798, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.progressbar.min.js", "start": 635798, "end": 637619, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.datepicker.css", "start": 637619, "end": 641666, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.transfer.min.js", "start": 641666, "end": 642482, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.mouse.min.js", "start": 642482, "end": 645215, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.drop.min.js", "start": 645215, "end": 646286, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.blind.min.js", "start": 646286, "end": 647157, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.autocomplete.css", "start": 647157, "end": 648264, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.dialog.min.js", "start": 648264, "end": 659785, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.selectable.min.js", "start": 659785, "end": 664090, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.slider.css", "start": 664090, "end": 665231, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.slide.min.js", "start": 665231, "end": 666293, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.dialog.css", "start": 666293, "end": 667656, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.scale.min.js", "start": 667656, "end": 671580, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.progressbar.css", "start": 671580, "end": 671938, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.button.min.js", "start": 671938, "end": 678602, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.theme.css", "start": 678602, "end": 697745, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.bounce.min.js", "start": 697745, "end": 699417, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.autocomplete.min.js", "start": 699417, "end": 708170, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.slider.min.js", "start": 708170, "end": 718492, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.shake.min.js", "start": 718492, "end": 719625, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.sortable.min.js", "start": 719625, "end": 743315, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.explode.min.js", "start": 743315, "end": 744959, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.selectable.css", "start": 744959, "end": 745282, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.droppable.min.js", "start": 745282, "end": 751052, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.effects.highlight.min.js", "start": 751052, "end": 751966, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.core.css", "start": 751966, "end": 753425, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/jquery.ui.tabs.min.js", "start": 753425, "end": 765053, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-bg_glass_65_ffffff_1x400.png", "start": 765053, "end": 765158, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-bg_flat_0_aaaaaa_40x100.png", "start": 765158, "end": 765338, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-icons_2e83ff_256x240.png", "start": 765338, "end": 769707, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-icons_222222_256x240.png", "start": 769707, "end": 774076, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-bg_highlight-soft_75_cccccc_1x100.png", "start": 774076, "end": 774177, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-icons_454545_256x240.png", "start": 774177, "end": 778546, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-bg_glass_75_e6e6e6_1x400.png", "start": 778546, "end": 778656, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-icons_cd0a0a_256x240.png", "start": 778656, "end": 783025, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-bg_glass_95_fef1ec_1x400.png", "start": 783025, "end": 783144, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-bg_glass_55_fbf9ee_1x400.png", "start": 783144, "end": 783264, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-bg_glass_75_dadada_1x400.png", "start": 783264, "end": 783375, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-bg_flat_75_ffffff_40x100.png", "start": 783375, "end": 783553, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/ui/images/ui-icons_888888_256x240.png", "start": 783553, "end": 787922, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/farbtastic/farbtastic.js", "start": 787922, "end": 791990, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/farbtastic/marker.png", "start": 791990, "end": 792427, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/farbtastic/wheel.png", "start": 792427, "end": 804016, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/farbtastic/mask.png", "start": 804016, "end": 806017, "audio": 0}, {"filename": "/preload/drupal-7.59/misc/farbtastic/farbtastic.css", "start": 806017, "end": 806593, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/README.txt", "start": 806593, "end": 807037, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/page.tpl.php", "start": 807037, "end": 808166, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/maintenance-page.tpl.php", "start": 808166, "end": 809476, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/vertical-tabs-rtl.css", "start": 809476, "end": 809982, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/template.php", "start": 809982, "end": 814688, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/style.css", "start": 814688, "end": 833142, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/ie6.css", "start": 833142, "end": 833410, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/seven.info", "start": 833410, "end": 833961, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/reset.css", "start": 833961, "end": 836908, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/logo.png", "start": 836908, "end": 840813, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/vertical-tabs.css", "start": 840813, "end": 843226, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/ie7.css", "start": 843226, "end": 843594, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/screenshot.png", "start": 843594, "end": 855892, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/jquery.ui.theme.css", "start": 855892, "end": 871126, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/ie.css", "start": 871126, "end": 871430, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/style-rtl.css", "start": 871430, "end": 875192, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/list-item.png", "start": 875192, "end": 875387, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/add.png", "start": 875387, "end": 875547, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/ui-icons-454545-256x240.png", "start": 875547, "end": 879249, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/task-check.png", "start": 879249, "end": 879510, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/buttons.png", "start": 879510, "end": 880296, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/task-item-rtl.png", "start": 880296, "end": 880474, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/ui-icons-ffffff-256x240.png", "start": 880474, "end": 884176, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/ui-icons-222222-256x240.png", "start": 884176, "end": 887878, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/list-item-rtl.png", "start": 887878, "end": 888103, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/task-item.png", "start": 888103, "end": 888208, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/fc.png", "start": 888208, "end": 888290, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/arrow-next.png", "start": 888290, "end": 888408, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/arrow-desc.png", "start": 888408, "end": 888503, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/ui-icons-800000-256x240.png", "start": 888503, "end": 892205, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/arrow-asc.png", "start": 892205, "end": 892293, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/ui-icons-888888-256x240.png", "start": 892293, "end": 895995, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/fc-rtl.png", "start": 895995, "end": 896071, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/seven/images/arrow-prev.png", "start": 896071, "end": 896186, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/stark/layout.css", "start": 896186, "end": 897390, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/stark/logo.png", "start": 897390, "end": 899716, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/stark/README.txt", "start": 899716, "end": 900720, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/stark/stark.info", "start": 900720, "end": 901159, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/stark/screenshot.png", "start": 901159, "end": 912821, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/engines/phptemplate/phptemplate.engine", "start": 912821, "end": 913393, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/fix-ie.css", "start": 913393, "end": 914713, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/page.tpl.php", "start": 914713, "end": 917627, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/node.tpl.php", "start": 917627, "end": 918619, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/maintenance-page.tpl.php", "start": 918619, "end": 921368, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/garland.info", "start": 921368, "end": 921776, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/template.php", "start": 921776, "end": 926442, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/style.css", "start": 926442, "end": 947228, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/logo.png", "start": 947228, "end": 952344, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/print.css", "start": 952344, "end": 953391, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/theme-settings.php", "start": 953391, "end": 954144, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/screenshot.png", "start": 954144, "end": 965094, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/fix-ie-rtl.css", "start": 965094, "end": 966256, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/comment.tpl.php", "start": 966256, "end": 967070, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/style-rtl.css", "start": 967070, "end": 972037, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/color/preview.css", "start": 972037, "end": 972959, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/color/base.png", "start": 972959, "end": 993853, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/color/preview.png", "start": 993853, "end": 1003818, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/color/color.inc", "start": 1003818, "end": 1009777, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/bg-bar-white.png", "start": 1009777, "end": 1009880, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/bg-bar.png", "start": 1009880, "end": 1010005, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/bg-navigation-item.png", "start": 1010005, "end": 1010504, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/menu-leaf.gif", "start": 1010504, "end": 1010678, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/gradient-inner.png", "start": 1010678, "end": 1010866, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/bg-content-left.png", "start": 1010866, "end": 1013755, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/bg-tab.png", "start": 1013755, "end": 1013870, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/menu-collapsed-rtl.gif", "start": 1013870, "end": 1014046, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/task-list.png", "start": 1014046, "end": 1014174, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/bg-navigation.png", "start": 1014174, "end": 1014278, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/body.png", "start": 1014278, "end": 1014958, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/menu-collapsed.gif", "start": 1014958, "end": 1015134, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/bg-content.png", "start": 1015134, "end": 1015619, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/bg-content-right.png", "start": 1015619, "end": 1018438, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/bg-navigation-item-hover.png", "start": 1018438, "end": 1018879, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/garland/images/menu-expanded.gif", "start": 1018879, "end": 1019062, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/bartik.info", "start": 1019062, "end": 1020130, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/template.php", "start": 1020130, "end": 1026047, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/logo.png", "start": 1026047, "end": 1029526, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/screenshot.png", "start": 1029526, "end": 1049184, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/color/preview.css", "start": 1049184, "end": 1053555, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/color/preview.js", "start": 1053555, "end": 1055573, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/color/base.png", "start": 1055573, "end": 1055679, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/color/preview.png", "start": 1055679, "end": 1055785, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/color/preview.html", "start": 1055785, "end": 1057940, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/color/color.inc", "start": 1057940, "end": 1061521, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/images/add.png", "start": 1061521, "end": 1061615, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/images/buttons.png", "start": 1061615, "end": 1062446, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/images/search-button.png", "start": 1062446, "end": 1063171, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/images/tabs-border.png", "start": 1063171, "end": 1063254, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/images/comment-arrow.gif", "start": 1063254, "end": 1063351, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/images/comment-arrow-rtl.gif", "start": 1063351, "end": 1063448, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/css/layout.css", "start": 1063448, "end": 1065082, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/css/layout-rtl.css", "start": 1065082, "end": 1065465, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/css/maintenance-page.css", "start": 1065465, "end": 1066778, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/css/style.css", "start": 1066778, "end": 1099480, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/css/ie6.css", "start": 1099480, "end": 1099777, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/css/colors.css", "start": 1099777, "end": 1101089, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/css/print.css", "start": 1101089, "end": 1101745, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/css/ie-rtl.css", "start": 1101745, "end": 1102594, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/css/ie.css", "start": 1102594, "end": 1103713, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/css/style-rtl.css", "start": 1103713, "end": 1108580, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/templates/page.tpl.php", "start": 1108580, "end": 1118810, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/templates/node.tpl.php", "start": 1118810, "end": 1124214, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/templates/maintenance-page.tpl.php", "start": 1124214, "end": 1126780, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/templates/comment-wrapper.tpl.php", "start": 1126780, "end": 1128782, "audio": 0}, {"filename": "/preload/drupal-7.59/themes/bartik/templates/comment.tpl.php", "start": 1128782, "end": 1132786, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/errors.inc", "start": 1132786, "end": 1143661, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/stream_wrappers.inc", "start": 1143661, "end": 1171899, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/file.mimetypes.inc", "start": 1171899, "end": 1196271, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/registry.inc", "start": 1196271, "end": 1202783, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/install.core.inc", "start": 1202783, "end": 1282622, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/unicode.inc", "start": 1282622, "end": 1305377, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/actions.inc", "start": 1305377, "end": 1319193, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/language.inc", "start": 1319193, "end": 1338665, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/bootstrap.inc", "start": 1338665, "end": 1474031, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/cache-install.inc", "start": 1474031, "end": 1476518, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/xmlrpcs.inc", "start": 1476518, "end": 1488351, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/ajax.inc", "start": 1488351, "end": 1538808, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/cache.inc", "start": 1538808, "end": 1559858, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/theme.maintenance.inc", "start": 1559858, "end": 1566928, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/session.inc", "start": 1566928, "end": 1585312, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/entity.inc", "start": 1585312, "end": 1635267, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/archiver.inc", "start": 1635267, "end": 1636968, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/common.inc", "start": 1636968, "end": 1951833, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/locale.inc", "start": 1951833, "end": 2038282, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/pager.inc", "start": 2038282, "end": 2060836, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/lock.inc", "start": 2060836, "end": 2070261, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/tablesort.inc", "start": 2070261, "end": 2077708, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/update.inc", "start": 2077708, "end": 2137124, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/authorize.inc", "start": 2137124, "end": 2150788, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/path.inc", "start": 2150788, "end": 2171594, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/utility.inc", "start": 2171594, "end": 2173585, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/iso.inc", "start": 2173585, "end": 2189155, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/batch.queue.inc", "start": 2189155, "end": 2191465, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/theme.inc", "start": 2191465, "end": 2306247, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/request-sanitizer.inc", "start": 2306247, "end": 2310395, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/unicode.entities.inc", "start": 2310395, "end": 2315882, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/module.inc", "start": 2315882, "end": 2359539, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/date.inc", "start": 2359539, "end": 2364045, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/image.inc", "start": 2364045, "end": 2377461, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/graph.inc", "start": 2377461, "end": 2382289, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/mail.inc", "start": 2382289, "end": 2405532, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/batch.inc", "start": 2405532, "end": 2423041, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/xmlrpc.inc", "start": 2423041, "end": 2441869, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/updater.inc", "start": 2441869, "end": 2455544, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/json-encode.inc", "start": 2455544, "end": 2458732, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/menu.inc", "start": 2458732, "end": 2600503, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/install.inc", "start": 2600503, "end": 2644848, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/form.inc", "start": 2644848, "end": 2845198, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/password.inc", "start": 2845198, "end": 2854719, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/file.inc", "start": 2854719, "end": 2946563, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/token.inc", "start": 2946563, "end": 2956427, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/filetransfer/local.inc", "start": 2956427, "end": 2959204, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/filetransfer/ssh.inc", "start": 2959204, "end": 2963333, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/filetransfer/filetransfer.inc", "start": 2963333, "end": 2975342, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/filetransfer/ftp.inc", "start": 2975342, "end": 2980132, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/schema.inc", "start": 2980132, "end": 3007502, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/select.inc", "start": 3007502, "end": 3058244, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/query.inc", "start": 3058244, "end": 3115670, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/database.inc", "start": 3115670, "end": 3213038, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/prefetch.inc", "start": 3213038, "end": 3227028, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/log.inc", "start": 3227028, "end": 3231900, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/mysql/schema.inc", "start": 3231900, "end": 3250876, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/mysql/query.inc", "start": 3250876, "end": 3253787, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/mysql/database.inc", "start": 3253787, "end": 3263926, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/mysql/install.inc", "start": 3263926, "end": 3264555, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/sqlite/schema.inc", "start": 3264555, "end": 3287957, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/sqlite/select.inc", "start": 3287957, "end": 3288361, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/sqlite/query.inc", "start": 3288361, "end": 3292867, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/sqlite/database.inc", "start": 3292867, "end": 3310914, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/sqlite/install.inc", "start": 3310914, "end": 3312539, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/pgsql/schema.inc", "start": 3312539, "end": 3335590, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/pgsql/select.inc", "start": 3335590, "end": 3339047, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/pgsql/query.inc", "start": 3339047, "end": 3346919, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/pgsql/database.inc", "start": 3346919, "end": 3355131, "audio": 0}, {"filename": "/preload/drupal-7.59/includes/database/pgsql/install.inc", "start": 3355131, "end": 3362265, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/README.txt", "start": 3362265, "end": 3362713, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.cron.js", "start": 3362713, "end": 3363202, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.archiver.inc", "start": 3363202, "end": 3366297, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/region.tpl.php", "start": 3366297, "end": 3367603, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.messages.css", "start": 3367603, "end": 3368564, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.api.php", "start": 3368564, "end": 3572171, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.queue.inc", "start": 3572171, "end": 3584822, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.menus.css", "start": 3584822, "end": 3586857, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/page.tpl.php", "start": 3586857, "end": 3593792, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.messages-rtl.css", "start": 3593792, "end": 3593968, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.admin.css", "start": 3593968, "end": 3599085, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.theme.css", "start": 3599085, "end": 3602796, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/maintenance-page.tpl.php", "start": 3602796, "end": 3605814, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.admin-rtl.css", "start": 3605814, "end": 3607288, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.mail.inc", "start": 3607288, "end": 3611933, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.admin.inc", "start": 3611933, "end": 3728581, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.tar.inc", "start": 3728581, "end": 3813354, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.tokens.inc", "start": 3813354, "end": 3821491, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/theme.api.php", "start": 3821491, "end": 3830482, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.base.css", "start": 3830482, "end": 3835910, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.maintenance.css", "start": 3835910, "end": 3836721, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/form.api.php", "start": 3836721, "end": 3841860, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.theme-rtl.css", "start": 3841860, "end": 3842671, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.install", "start": 3842671, "end": 3964111, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.menus-rtl.css", "start": 3964111, "end": 3964662, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.updater.inc", "start": 3964662, "end": 3969419, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.test", "start": 3969419, "end": 4091135, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/language.api.php", "start": 4091135, "end": 4097699, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.js", "start": 4097699, "end": 4102396, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.info", "start": 4102396, "end": 4102857, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/image.gd.inc", "start": 4102857, "end": 4116972, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/html.tpl.php", "start": 4116972, "end": 4119705, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.module", "start": 4119705, "end": 4262984, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/system.base-rtl.css", "start": 4262984, "end": 4263857, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/tests/cron_queue_test.info", "start": 4263857, "end": 4264126, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/tests/system_cron_test.info", "start": 4264126, "end": 4264400, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/tests/system_cron_test.module", "start": 4264400, "end": 4264708, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/system/tests/cron_queue_test.module", "start": 4264708, "end": 4265256, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/taxonomy/taxonomy.test", "start": 4265256, "end": 4348623, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/taxonomy/taxonomy.install", "start": 4348623, "end": 4379516, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/taxonomy/taxonomy-term.tpl.php", "start": 4379516, "end": 4381660, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/taxonomy/taxonomy.css", "start": 4381660, "end": 4381892, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/taxonomy/taxonomy.api.php", "start": 4381892, "end": 4387944, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/taxonomy/taxonomy.tokens.inc", "start": 4387944, "end": 4393972, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/taxonomy/taxonomy.admin.inc", "start": 4393972, "end": 4430550, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/taxonomy/taxonomy.js", "start": 4430550, "end": 4432320, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/taxonomy/taxonomy.pages.inc", "start": 4432320, "end": 4439033, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/taxonomy/taxonomy.module", "start": 4439033, "end": 4510771, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/taxonomy/taxonomy.info", "start": 4510771, "end": 4511123, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll-bar--block.tpl.php", "start": 4511123, "end": 4511832, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll.install", "start": 4511832, "end": 4517912, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll-bar.tpl.php", "start": 4517912, "end": 4518687, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll.tokens.inc", "start": 4518687, "end": 4521584, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll-rtl.css", "start": 4521584, "end": 4521718, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll.test", "start": 4521718, "end": 4555980, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll-vote.tpl.php", "start": 4555980, "end": 4556777, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll.css", "start": 4556777, "end": 4557586, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll.info", "start": 4557586, "end": 4557929, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll.module", "start": 4557929, "end": 4588661, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll-results.tpl.php", "start": 4588661, "end": 4589450, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll.pages.inc", "start": 4589450, "end": 4592577, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/poll/poll-results--block.tpl.php", "start": 4592577, "end": 4593399, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/path/path.js", "start": 4593399, "end": 4593819, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/path/path.api.php", "start": 4593819, "end": 4595303, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/path/path.info", "start": 4595303, "end": 4595586, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/path/path.test", "start": 4595586, "end": 4615762, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/path/path.admin.inc", "start": 4615762, "end": 4625711, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/path/path.module", "start": 4625711, "end": 4637733, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/filter.api.php", "start": 4637733, "end": 4649546, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/filter.test", "start": 4649546, "end": 4739578, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/filter.css", "start": 4739578, "end": 4740501, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/filter.js", "start": 4740501, "end": 4741057, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/filter.module", "start": 4741057, "end": 4809090, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/filter.info", "start": 4809090, "end": 4809412, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/filter.admin.js", "start": 4809412, "end": 4810992, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/filter.install", "start": 4810992, "end": 4826799, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/filter.pages.inc", "start": 4826799, "end": 4829222, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/filter.admin.inc", "start": 4829222, "end": 4843983, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/tests/filter.url-output.txt", "start": 4843983, "end": 4847621, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/filter/tests/filter.url-input.txt", "start": 4847621, "end": 4849804, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.info", "start": 4849804, "end": 4850181, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.authorize.inc", "start": 4850181, "end": 4862377, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.fetch.inc", "start": 4862377, "end": 4877429, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.css", "start": 4877429, "end": 4879457, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.test", "start": 4879457, "end": 4914379, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.install", "start": 4914379, "end": 4920752, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.compare.inc", "start": 4920752, "end": 4956212, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.module", "start": 4956212, "end": 4995019, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.manager.inc", "start": 4995019, "end": 5029681, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.api.php", "start": 5029681, "end": 5034839, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.settings.inc", "start": 5034839, "end": 5039663, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update.report.inc", "start": 5039663, "end": 5052149, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/update-rtl.css", "start": 5052149, "end": 5052666, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/aaa_update_test.1_0.xml", "start": 5052666, "end": 5053871, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/drupal.1.xml", "start": 5053871, "end": 5055614, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/ccc_update_test.1_0.xml", "start": 5055614, "end": 5056819, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/update_test.module", "start": 5056819, "end": 5063062, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/ccc_update_test.module", "start": 5063062, "end": 5063129, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/update_test_basetheme.1_1-sec.xml", "start": 5063129, "end": 5065110, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/bbb_update_test.module", "start": 5065110, "end": 5065177, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/aaa_update_test.no-releases.xml", "start": 5065177, "end": 5065305, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/bbb_update_test.1_0.xml", "start": 5065305, "end": 5066510, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/update_test_subtheme.1_0.xml", "start": 5066510, "end": 5067744, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/drupal.dev.xml", "start": 5067744, "end": 5069434, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/aaa_update_test.module", "start": 5069434, "end": 5069501, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/ccc_update_test.info", "start": 5069501, "end": 5069750, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/aaa_update_test.tar.gz", "start": 5069750, "end": 5070133, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/drupal.2-sec.xml", "start": 5070133, "end": 5072552, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/drupal.0.xml", "start": 5072552, "end": 5073691, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/update_test.info", "start": 5073691, "end": 5073954, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/bbb_update_test.info", "start": 5073954, "end": 5074203, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/aaa_update_test.info", "start": 5074203, "end": 5074452, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/themes/update_test_subtheme/update_test_subtheme.info", "start": 5074452, "end": 5074744, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/themes/update_test_basetheme/update_test_basetheme.info", "start": 5074744, "end": 5075004, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/update/tests/themes/update_test_admintheme/update_test_admintheme.info", "start": 5075004, "end": 5075242, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/content_types.js", "start": 5075242, "end": 5076447, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/content_types.inc", "start": 5076447, "end": 5092029, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/node.api.php", "start": 5092029, "end": 5141632, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/node.test", "start": 5141632, "end": 5260134, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/node.tpl.php", "start": 5260134, "end": 5265094, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/node.pages.inc", "start": 5265094, "end": 5289645, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/node.install", "start": 5289645, "end": 5320913, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/node.admin.inc", "start": 5320913, "end": 5344738, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/node.module", "start": 5344738, "end": 5484201, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/node.css", "start": 5484201, "end": 5484345, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/node.info", "start": 5484345, "end": 5484731, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/node.tokens.inc", "start": 5484731, "end": 5491484, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/node.js", "start": 5491484, "end": 5493087, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/tests/node_access_test.module", "start": 5493087, "end": 5499403, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/tests/node_test_exception.module", "start": 5499403, "end": 5499709, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/tests/node_access_test.install", "start": 5499709, "end": 5500738, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/tests/node_test_exception.info", "start": 5500738, "end": 5501030, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/tests/node_access_test.info", "start": 5501030, "end": 5501312, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/tests/node_test.info", "start": 5501312, "end": 5501584, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/node/tests/node_test.module", "start": 5501584, "end": 5506672, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/toolbar/toolbar.css", "start": 5506672, "end": 5510048, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/toolbar/toolbar.tpl.php", "start": 5510048, "end": 5511388, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/toolbar/toolbar.js", "start": 5511388, "end": 5514408, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/toolbar/toolbar.module", "start": 5514408, "end": 5525366, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/toolbar/toolbar.info", "start": 5525366, "end": 5525666, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/toolbar/toolbar-rtl.css", "start": 5525666, "end": 5526227, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/toolbar/toolbar.png", "start": 5526227, "end": 5526785, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator-rtl.css", "start": 5526785, "end": 5526909, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator-summary-item.tpl.php", "start": 5526909, "end": 5527624, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator.processor.inc", "start": 5527624, "end": 5535692, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator.pages.inc", "start": 5535692, "end": 5555562, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator.module", "start": 5555562, "end": 5584530, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator-item.tpl.php", "start": 5584530, "end": 5585826, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator.fetcher.inc", "start": 5585826, "end": 5587522, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator.info", "start": 5587522, "end": 5587901, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator.test", "start": 5587901, "end": 5628826, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator.api.php", "start": 5628826, "end": 5636205, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator-summary-items.tpl.php", "start": 5636205, "end": 5636857, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator-feed-source.tpl.php", "start": 5636857, "end": 5637962, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator.parser.inc", "start": 5637962, "end": 5647520, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator.install", "start": 5647520, "end": 5657388, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator.admin.inc", "start": 5657388, "end": 5681808, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator.css", "start": 5681808, "end": 5682587, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/aggregator-wrapper.tpl.php", "start": 5682587, "end": 5682984, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/tests/aggregator_test_rss091.xml", "start": 5682984, "end": 5685577, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/tests/aggregator_test.module", "start": 5685577, "end": 5687659, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/tests/aggregator_test_title_entities.xml", "start": 5687659, "end": 5688100, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/tests/aggregator_test.info", "start": 5688100, "end": 5688384, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/aggregator/tests/aggregator_test_atom.xml", "start": 5688384, "end": 5688956, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book.info", "start": 5688956, "end": 5689310, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book.test", "start": 5689310, "end": 5704787, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book.admin.inc", "start": 5704787, "end": 5714392, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book.js", "start": 5714392, "end": 5714981, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book-rtl.css", "start": 5714981, "end": 5715195, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book.pages.inc", "start": 5715195, "end": 5722551, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book.css", "start": 5722551, "end": 5723587, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book-export-html.tpl.php", "start": 5723587, "end": 5725489, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book-all-books-block.tpl.php", "start": 5725489, "end": 5726175, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book-navigation.tpl.php", "start": 5726175, "end": 5728262, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book-node-export-html.tpl.php", "start": 5728262, "end": 5728948, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book.module", "start": 5728948, "end": 5776891, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/book/book.install", "start": 5776891, "end": 5779229, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field_ui/field_ui.css", "start": 5779229, "end": 5780993, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field_ui/field_ui.test", "start": 5780993, "end": 5812394, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field_ui/field_ui.api.php", "start": 5812394, "end": 5818499, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field_ui/field_ui.module", "start": 5818499, "end": 5840098, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field_ui/field_ui.admin.inc", "start": 5840098, "end": 5919550, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field_ui/field_ui-rtl.css", "start": 5919550, "end": 5919729, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field_ui/field_ui.info", "start": 5919729, "end": 5920011, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field_ui/field_ui.js", "start": 5920011, "end": 5931815, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/profile/profile-block.tpl.php", "start": 5931815, "end": 5933180, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/profile/profile.pages.inc", "start": 5933180, "end": 5937695, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/profile/profile.admin.inc", "start": 5937695, "end": 5955819, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/profile/profile.test", "start": 5955819, "end": 5975217, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/profile/profile.js", "start": 5975217, "end": 5977914, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/profile/profile.module", "start": 5977914, "end": 6000964, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/profile/profile-listing.tpl.php", "start": 6000964, "end": 6002610, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/profile/profile-wrapper.tpl.php", "start": 6002610, "end": 6003429, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/profile/profile.info", "start": 6003429, "end": 6004002, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/profile/profile.install", "start": 6004002, "end": 6008877, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/profile/profile.css", "start": 6008877, "end": 6009045, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search.css", "start": 6009045, "end": 6009609, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search.module", "start": 6009609, "end": 6060805, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search-rtl.css", "start": 6060805, "end": 6061026, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search-result.tpl.php", "start": 6061026, "end": 6064343, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search.test", "start": 6064343, "end": 6147378, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search.admin.inc", "start": 6147378, "end": 6155464, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search.extender.inc", "start": 6155464, "end": 6173014, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search.pages.inc", "start": 6173014, "end": 6178758, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search.install", "start": 6178758, "end": 6184125, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search.info", "start": 6184125, "end": 6184486, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search-results.tpl.php", "start": 6184486, "end": 6185537, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search.api.php", "start": 6185537, "end": 6198713, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/search-block-form.tpl.php", "start": 6198713, "end": 6199885, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/tests/search_extra_type.info", "start": 6199885, "end": 6200157, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/tests/UnicodeTest.txt", "start": 6200157, "end": 6245402, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/tests/search_embedded_form.info", "start": 6245402, "end": 6245696, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/tests/search_extra_type.module", "start": 6245696, "end": 6247368, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/tests/search_embedded_form.module", "start": 6247368, "end": 6249315, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/tests/search_node_tags.module", "start": 6249315, "end": 6249832, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/search/tests/search_node_tags.info", "start": 6249832, "end": 6250112, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/blog/blog.pages.inc", "start": 6250112, "end": 6253606, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/blog/blog.module", "start": 6253606, "end": 6262715, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/blog/blog.install", "start": 6262715, "end": 6263119, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/blog/blog.test", "start": 6263119, "end": 6271605, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/blog/blog.info", "start": 6271605, "end": 6271848, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user.module", "start": 6271848, "end": 6416420, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user.pages.inc", "start": 6416420, "end": 6439785, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user-profile-item.tpl.php", "start": 6439785, "end": 6440703, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user.info", "start": 6440703, "end": 6441068, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user.test", "start": 6441068, "end": 6552722, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user-profile-category.tpl.php", "start": 6552722, "end": 6553723, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user.permissions.js", "start": 6553723, "end": 6556446, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user.css", "start": 6556446, "end": 6558273, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user-rtl.css", "start": 6558273, "end": 6558783, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user.api.php", "start": 6558783, "end": 6574481, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user.js", "start": 6574481, "end": 6581081, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user.admin.inc", "start": 6581081, "end": 6620525, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user.install", "start": 6620525, "end": 6650525, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user-profile.tpl.php", "start": 6650525, "end": 6652214, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user-picture.tpl.php", "start": 6652214, "end": 6652821, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/user.tokens.inc", "start": 6652821, "end": 6656914, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/tests/user_form_test.module", "start": 6656914, "end": 6659222, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/user/tests/user_form_test.info", "start": 6659222, "end": 6659496, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/image.test", "start": 6659496, "end": 6741431, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/image.install", "start": 6741431, "end": 6756569, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/image.info", "start": 6756569, "end": 6756889, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/image.css", "start": 6756889, "end": 6757114, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/image.effects.inc", "start": 6757114, "end": 6769448, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/image.admin.inc", "start": 6769448, "end": 6802889, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/sample.png", "start": 6802889, "end": 6970999, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/image-rtl.css", "start": 6970999, "end": 6971138, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/image.field.inc", "start": 6971138, "end": 6992206, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/image.admin.css", "start": 6992206, "end": 6993322, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/image.api.php", "start": 6993322, "end": 7000536, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/image.module", "start": 7000536, "end": 7048780, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/tests/image_module_test.info", "start": 7048780, "end": 7049102, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/image/tests/image_module_test.module", "start": 7049102, "end": 7050330, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/overlay.module", "start": 7050330, "end": 7086799, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/overlay.tpl.php", "start": 7086799, "end": 7088167, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/overlay.info", "start": 7088167, "end": 7088427, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/overlay-child-rtl.css", "start": 7088427, "end": 7088998, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/overlay.api.php", "start": 7088998, "end": 7090055, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/overlay.install", "start": 7090055, "end": 7090535, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/overlay-parent.js", "start": 7090535, "end": 7128959, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/overlay-parent.css", "start": 7128959, "end": 7130081, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/overlay-child.js", "start": 7130081, "end": 7136777, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/overlay-child.css", "start": 7136777, "end": 7140128, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/images/background.png", "start": 7140128, "end": 7140204, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/images/close.png", "start": 7140204, "end": 7140548, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/overlay/images/close-rtl.png", "start": 7140548, "end": 7140916, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/color.js", "start": 7140916, "end": 7148533, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/preview.js", "start": 7148533, "end": 7150001, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/color.css", "start": 7150001, "end": 7151448, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/color-rtl.css", "start": 7151448, "end": 7152166, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/color.module", "start": 7152166, "end": 7179753, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/color.test", "start": 7179753, "end": 7184031, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/color.info", "start": 7184031, "end": 7184321, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/color.install", "start": 7184321, "end": 7186600, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/preview.html", "start": 7186600, "end": 7187162, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/images/lock.png", "start": 7187162, "end": 7187392, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/images/hook.png", "start": 7187392, "end": 7187508, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/color/images/hook-rtl.png", "start": 7187508, "end": 7187624, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contextual/contextual-rtl.css", "start": 7187624, "end": 7188032, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contextual/contextual.js", "start": 7188032, "end": 7189836, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contextual/contextual.api.php", "start": 7189836, "end": 7190895, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contextual/contextual.css", "start": 7190895, "end": 7193235, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contextual/contextual.test", "start": 7193235, "end": 7195161, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contextual/contextual.info", "start": 7195161, "end": 7195472, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contextual/contextual.module", "start": 7195472, "end": 7201159, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contextual/images/gear-select.png", "start": 7201159, "end": 7201665, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/trigger/trigger.info", "start": 7201665, "end": 7202015, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/trigger/trigger.module", "start": 7202015, "end": 7222622, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/trigger/trigger.install", "start": 7222622, "end": 7226225, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/trigger/trigger.admin.inc", "start": 7226225, "end": 7236973, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/trigger/trigger.test", "start": 7236973, "end": 7267605, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/trigger/trigger.api.php", "start": 7267605, "end": 7270290, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/trigger/tests/trigger_test.module", "start": 7270290, "end": 7274197, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/trigger/tests/trigger_test.info", "start": 7274197, "end": 7274439, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/syslog/syslog.install", "start": 7274439, "end": 7274705, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/syslog/syslog.module", "start": 7274705, "end": 7280717, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/syslog/syslog.info", "start": 7280717, "end": 7281025, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/syslog/syslog.test", "start": 7281025, "end": 7282236, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contact/contact.module", "start": 7282236, "end": 7293881, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contact/contact.install", "start": 7293881, "end": 7298034, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contact/contact.test", "start": 7298034, "end": 7318717, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contact/contact.info", "start": 7318717, "end": 7319038, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contact/contact.admin.inc", "start": 7319038, "end": 7326436, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/contact/contact.pages.inc", "start": 7326436, "end": 7336271, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment.pages.inc", "start": 7336271, "end": 7340866, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment.test", "start": 7340866, "end": 7437311, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment.api.php", "start": 7437311, "end": 7441204, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment-node-form.js", "start": 7441204, "end": 7442254, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment-wrapper.tpl.php", "start": 7442254, "end": 7444280, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment.tokens.inc", "start": 7444280, "end": 7452131, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment.install", "start": 7452131, "end": 7470410, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment.module", "start": 7470410, "end": 7563706, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment-rtl.css", "start": 7563706, "end": 7563761, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment.admin.inc", "start": 7563761, "end": 7573088, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment.css", "start": 7573088, "end": 7573272, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment.tpl.php", "start": 7573272, "end": 7576921, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/comment/comment.info", "start": 7576921, "end": 7577316, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/statistics/statistics.js", "start": 7577316, "end": 7577531, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/statistics/statistics.install", "start": 7577531, "end": 7581815, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/statistics/statistics.tokens.inc", "start": 7581815, "end": 7583598, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/statistics/statistics.module", "start": 7583598, "end": 7602745, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/statistics/statistics.php", "start": 7602745, "end": 7603717, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/statistics/statistics.pages.inc", "start": 7603717, "end": 7606977, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/statistics/statistics.test", "start": 7606977, "end": 7626104, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/statistics/statistics.admin.inc", "start": 7626104, "end": 7638233, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/statistics/statistics.info", "start": 7638233, "end": 7638543, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/simpletest.pages.inc", "start": 7638543, "end": 7656557, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/simpletest.css", "start": 7656557, "end": 7658065, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/drupal_web_test_case.php", "start": 7658065, "end": 7794305, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/simpletest.js", "start": 7794305, "end": 7797899, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/simpletest.install", "start": 7797899, "end": 7804739, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/simpletest.api.php", "start": 7804739, "end": 7805959, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/simpletest.test", "start": 7805959, "end": 7836260, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/simpletest.info", "start": 7836260, "end": 7838281, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/simpletest.module", "start": 7838281, "end": 7862465, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/lib/Drupal/simpletest/Tests/PSR0WebTest.php", "start": 7862465, "end": 7862860, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/module_test.file.inc", "start": 7862860, "end": 7863063, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/batch_test.module", "start": 7863063, "end": 7876698, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/image.test", "start": 7876698, "end": 7897597, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/ajax_test.module", "start": 7897597, "end": 7899486, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/session_test.info", "start": 7899486, "end": 7899753, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/boot_test_1.module", "start": 7899753, "end": 7900303, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/entity_cache_test_dependency.info", "start": 7900303, "end": 7900597, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/form_test.module", "start": 7900597, "end": 7960769, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/filter_test.info", "start": 7960769, "end": 7961031, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/entity_cache_test.info", "start": 7961031, "end": 7961349, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/theme_test.inc", "start": 7961349, "end": 7961721, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/url_alter_test.module", "start": 7961721, "end": 7963516, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_script_test.install", "start": 7963516, "end": 7965464, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/xmlrpc_test.info", "start": 7965464, "end": 7965766, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/url_alter_test.info", "start": 7965766, "end": 7966037, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_incompatible_module_version_dependencies_test.module", "start": 7966037, "end": 7966043, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/menu.test", "start": 7966043, "end": 8039393, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/form.test", "start": 8039393, "end": 8132649, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/url_alter_test.install", "start": 8132649, "end": 8132916, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/actions.test", "start": 8132916, "end": 8138756, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/http.php", "start": 8138756, "end": 8139653, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/form_test.file.inc", "start": 8139653, "end": 8141086, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/filetransfer.test", "start": 8141086, "end": 8145630, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/entity_crud_hook_test.module", "start": 8145630, "end": 8151773, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/pager.test", "start": 8151773, "end": 8157262, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/filter_test.module", "start": 8157262, "end": 8158979, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/ajax_test.info", "start": 8158979, "end": 8159239, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/image_test.module", "start": 8159239, "end": 8162482, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_test_2.module", "start": 8162482, "end": 8162488, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/menu_test.module", "start": 8162488, "end": 8180851, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_test_1.install", "start": 8180851, "end": 8182478, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_test.module", "start": 8182478, "end": 8201070, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/module.test", "start": 8201070, "end": 8217754, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_incompatible_core_version_dependencies_test.module", "start": 8217754, "end": 8217760, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/boot.test", "start": 8217760, "end": 8218944, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/module_test.implementations.inc", "start": 8218944, "end": 8219115, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/ajax_forms_test.info", "start": 8219115, "end": 8219381, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/mail.test", "start": 8219381, "end": 8238603, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/https.php", "start": 8238603, "end": 8239463, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/error_test.module", "start": 8239463, "end": 8241394, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/requirements2_test.info", "start": 8241394, "end": 8241785, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_incompatible_core_version_test.module", "start": 8241785, "end": 8241791, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/graph.test", "start": 8241791, "end": 8248168, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/xmlrpc_test.module", "start": 8248168, "end": 8251347, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_dependencies_test.module", "start": 8251347, "end": 8251353, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_test_3.module", "start": 8251353, "end": 8251359, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/xmlrpc.test", "start": 8251359, "end": 8262756, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/boot_test_2.info", "start": 8262756, "end": 8263032, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_dependencies_test.info", "start": 8263032, "end": 8263353, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/entity_crud_hook_test.test", "start": 8263353, "end": 8276124, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_test_2.install", "start": 8276124, "end": 8277331, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/requirements2_test.module", "start": 8277331, "end": 8277461, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update.test", "start": 8277461, "end": 8282260, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/batch_test.callbacks.inc", "start": 8282260, "end": 8286766, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/theme_test.template_test.tpl.php", "start": 8286766, "end": 8286832, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/error.test", "start": 8286832, "end": 8291518, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_incompatible_core_version_test.info", "start": 8291518, "end": 8291817, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_test_3.install", "start": 8291817, "end": 8292253, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/entity_query_access_test.info", "start": 8292253, "end": 8292541, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/theme_test.module", "start": 8292541, "end": 8297656, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/common_test.module", "start": 8297656, "end": 8305414, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_incompatible_module_version_test.info", "start": 8305414, "end": 8305711, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/actions_loop_test.module", "start": 8305711, "end": 8308310, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system.base.css", "start": 8308310, "end": 8308453, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/password.test", "start": 8308453, "end": 8311980, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/form_test.info", "start": 8311980, "end": 8312241, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/theme_test.info", "start": 8312241, "end": 8312506, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/common_test_cron_helper.module", "start": 8312506, "end": 8312868, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/file_test.info", "start": 8312868, "end": 8313158, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/menu_test.info", "start": 8313158, "end": 8313425, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/module_test.install", "start": 8313425, "end": 8314355, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/file.test", "start": 8314355, "end": 8426268, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/taxonomy_test.module", "start": 8426268, "end": 8429688, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_incompatible_module_version_test.module", "start": 8429688, "end": 8429694, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/bootstrap.test", "start": 8429694, "end": 8472801, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/entity_query.test", "start": 8472801, "end": 8539992, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/entity_crud.test", "start": 8539992, "end": 8541901, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/session_test.module", "start": 8541901, "end": 8547485, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/batch.test", "start": 8547485, "end": 8564369, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/actions_loop_test.install", "start": 8564369, "end": 8564575, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/database_test.test", "start": 8564575, "end": 8712166, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/ajax.test", "start": 8712166, "end": 8738946, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/schema.test", "start": 8738946, "end": 8752718, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/path_test.module", "start": 8752718, "end": 8753128, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_test_3.info", "start": 8753128, "end": 8753388, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_test_1.info", "start": 8753388, "end": 8753648, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/common_test.info", "start": 8753648, "end": 8753988, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/actions_loop_test.info", "start": 8753988, "end": 8754255, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/unicode.test", "start": 8754255, "end": 8765406, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/entity_cache_test_dependency.module", "start": 8765406, "end": 8765711, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_test.install", "start": 8765711, "end": 8766249, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_test_1.module", "start": 8766249, "end": 8766255, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/requirements1_test.module", "start": 8766255, "end": 8766366, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/tablesort.test", "start": 8766366, "end": 8771149, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/theme.test", "start": 8771149, "end": 8797899, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/ajax_forms_test.module", "start": 8797899, "end": 8814857, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/entity_crud_hook_test.info", "start": 8814857, "end": 8815129, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/boot_test_2.module", "start": 8815129, "end": 8815318, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/batch_test.info", "start": 8815318, "end": 8815582, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/taxonomy_test.install", "start": 8815582, "end": 8816329, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/image_test.info", "start": 8816329, "end": 8816593, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_test_2.info", "start": 8816593, "end": 8816853, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/common_test.css", "start": 8816853, "end": 8816932, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/session.test", "start": 8816932, "end": 8840284, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/lock.test", "start": 8840284, "end": 8842908, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/path.test", "start": 8842908, "end": 8856492, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/requirements1_test.info", "start": 8856492, "end": 8856804, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_script_test.info", "start": 8856804, "end": 8857078, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/database_test.info", "start": 8857078, "end": 8857346, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/requirements1_test.install", "start": 8857346, "end": 8857851, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_incompatible_core_version_dependencies_test.info", "start": 8857851, "end": 8858218, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/error_test.info", "start": 8858218, "end": 8858490, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/cache.test", "start": 8858490, "end": 8874241, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/update_script_test.module", "start": 8874241, "end": 8874660, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/module_test.info", "start": 8874660, "end": 8874927, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/registry.test", "start": 8874927, "end": 8879699, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/boot_test_1.info", "start": 8879699, "end": 8879970, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_project_namespace_test.module", "start": 8879970, "end": 8879976, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/file_test.module", "start": 8879976, "end": 8892498, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/common_test_info.txt", "start": 8892498, "end": 8892832, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/common_test.print.css", "start": 8892832, "end": 8892911, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/path_test.info", "start": 8892911, "end": 8893178, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/module_test.module", "start": 8893178, "end": 8897356, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/taxonomy_test.info", "start": 8897356, "end": 8897660, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/common.test", "start": 8897660, "end": 9036438, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/entity_query_access_test.module", "start": 9036438, "end": 9037973, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_test.info", "start": 9037973, "end": 9038258, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/database_test.install", "start": 9038258, "end": 9044111, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_project_namespace_test.info", "start": 9044111, "end": 9044444, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/entity_cache_test.module", "start": 9044444, "end": 9045317, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/common_test_cron_helper.info", "start": 9045317, "end": 9045611, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/database_test.module", "start": 9045611, "end": 9052275, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/system_incompatible_module_version_dependencies_test.info", "start": 9052275, "end": 9052716, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/themes/test_subtheme/test_subtheme.info", "start": 9052716, "end": 9053039, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/themes/test_theme_nyan_cat/test_theme_nyan_cat.info", "start": 9053039, "end": 9053316, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/themes/test_theme_nyan_cat/templates/theme_test_template_test.nyan-cat.html", "start": 9053316, "end": 9053321, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/themes/engines/nyan_cat/nyan_cat.engine", "start": 9053321, "end": 9054639, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/themes/test_basetheme/test_basetheme.info", "start": 9054639, "end": 9054990, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/themes/test_theme/template.php", "start": 9054990, "end": 9055571, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/themes/test_theme/test_theme.info", "start": 9055571, "end": 9056617, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/themes/test_theme/templates/node--1.tpl.php", "start": 9056617, "end": 9056680, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/drupal_autoload_test/drupal_autoload_test_class.inc", "start": 9056680, "end": 9056895, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/drupal_autoload_test/drupal_autoload_test_trait.sh", "start": 9056895, "end": 9057297, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/drupal_autoload_test/drupal_autoload_test_interface.inc", "start": 9057297, "end": 9057488, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/drupal_autoload_test/drupal_autoload_test.info", "start": 9057488, "end": 9057859, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/drupal_autoload_test/drupal_autoload_test.module", "start": 9057859, "end": 9058438, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/psr_0_test/psr_0_test.module", "start": 9058438, "end": 9058444, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/psr_0_test/psr_0_test.info", "start": 9058444, "end": 9058698, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/psr_0_test/lib/Drupal/psr_0_test/Tests/ExampleTest.php", "start": 9058698, "end": 9059119, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/psr_0_test/lib/Drupal/psr_0_test/Tests/Nested/NestedExampleTest.php", "start": 9059119, "end": 9059560, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/drupal_system_listing_compatible_test/drupal_system_listing_compatible_test.module", "start": 9059560, "end": 9059566, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/drupal_system_listing_compatible_test/drupal_system_listing_compatible_test.info", "start": 9059566, "end": 9059880, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.bare.database.php", "start": 9059880, "end": 9295348, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.upload.database.php", "start": 9295348, "end": 9307260, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.translatable.database.php", "start": 9307260, "end": 9309538, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-7.bare.standard_all.database.php.gz", "start": 9309538, "end": 9386962, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.poll.test", "start": 9386962, "end": 9389063, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.forum.database.php", "start": 9389063, "end": 9393823, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.locale.test", "start": 9393823, "end": 9398226, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.user-no-password-token.database.php", "start": 9398226, "end": 9398496, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.filled.database.php", "start": 9398496, "end": 9975739, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.user-password-token.database.php", "start": 9975739, "end": 9976853, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/update.trigger.test", "start": 9976853, "end": 9977929, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.upload.test", "start": 9977929, "end": 9983142, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/update.field.test", "start": 9983142, "end": 9984867, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-7.field.database.php", "start": 9984867, "end": 9985347, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-7.aggregator.database.php", "start": 9985347, "end": 10006374, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.duplicate-permission.database.php", "start": 10006374, "end": 10006549, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-7.trigger.database.php", "start": 10006549, "end": 10007058, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-7.filled.standard_all.database.php.gz", "start": 10007058, "end": 10104661, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.node_type_broken.database.php", "start": 10104661, "end": 10105312, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.comment.test", "start": 10105312, "end": 10106189, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/update.aggregator.test", "start": 10106189, "end": 10107683, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/update.user.test", "start": 10107683, "end": 10108611, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.taxonomy.test", "start": 10108611, "end": 10117852, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-7.bare.minimal.database.php.gz", "start": 10117852, "end": 10157695, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.forum.test", "start": 10157695, "end": 10160026, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.user.test", "start": 10160026, "end": 10163627, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.trigger.test", "start": 10163627, "end": 10164839, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.locale.database.php", "start": 10164839, "end": 10170302, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.trigger.database.php", "start": 10170302, "end": 10171943, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.menu.test", "start": 10171943, "end": 10175713, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-7.filled.minimal.database.php.gz", "start": 10175713, "end": 10217518, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.filter.test", "start": 10217518, "end": 10219415, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.menu.database.php", "start": 10219415, "end": 10223209, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.test", "start": 10223209, "end": 10248352, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.translatable.test", "start": 10248352, "end": 10250358, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/upgrade.node.test", "start": 10250358, "end": 10255824, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/upgrade/drupal-6.comments.database.php", "start": 10255824, "end": 10256571, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/psr_4_test/psr_4_test.info", "start": 10256571, "end": 10256825, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/psr_4_test/psr_4_test.module", "start": 10256825, "end": 10256831, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/psr_4_test/src/Tests/ExampleTest.php", "start": 10256831, "end": 10257252, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/psr_4_test/src/Tests/Nested/NestedExampleTest.php", "start": 10257252, "end": 10257693, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/drupal_system_listing_incompatible_test/drupal_system_listing_incompatible_test.info", "start": 10257693, "end": 10258009, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/tests/drupal_system_listing_incompatible_test/drupal_system_listing_incompatible_test.module", "start": 10258009, "end": 10258015, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/src/Tests/PSR4WebTest.php", "start": 10258015, "end": 10258410, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/image-test.png", "start": 10258410, "end": 10258535, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/sql-1.txt", "start": 10258535, "end": 10258576, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/php-2.php", "start": 10258576, "end": 10258620, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/image-test.jpg", "start": 10258620, "end": 10260521, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/image-test.gif", "start": 10260521, "end": 10260704, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/javascript-2.script", "start": 10260704, "end": 10260761, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/php-1.txt", "start": 10260761, "end": 10260808, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/image-test-transparent-out-of-range.gif", "start": 10260808, "end": 10260991, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/image-test-no-transparency.gif", "start": 10260991, "end": 10261955, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/html-2.html", "start": 10261955, "end": 10261979, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/README.txt", "start": 10261979, "end": 10262223, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/html-1.txt", "start": 10262223, "end": 10262247, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/image-2.jpg", "start": 10262247, "end": 10264078, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/sql-2.sql", "start": 10264078, "end": 10264119, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/image-1.png", "start": 10264119, "end": 10303444, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/javascript-1.txt", "start": 10303444, "end": 10303502, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/import1.css", "start": 10303502, "end": 10304509, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/comment_hacks.css.optimized.css", "start": 10304509, "end": 10305353, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/css_input_without_import.css.unoptimized.css", "start": 10305353, "end": 10306507, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/comment_hacks.css", "start": 10306507, "end": 10368422, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/css_input_without_import.css", "start": 10368422, "end": 10369576, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/import2.css", "start": 10369576, "end": 10369647, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/comment_hacks.css.unoptimized.css", "start": 10369647, "end": 10431562, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/css_input_without_import.css.optimized.css", "start": 10431562, "end": 10432374, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/css_input_with_import.css.optimized.css", "start": 10432374, "end": 10433667, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/css_input_with_import.css.unoptimized.css", "start": 10433667, "end": 10435184, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/css_input_with_import.css", "start": 10435184, "end": 10435667, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/css_subfolder/css_input_with_import.css.optimized.css", "start": 10435667, "end": 10436880, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/css_subfolder/css_input_with_import.css.unoptimized.css", "start": 10436880, "end": 10438314, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/simpletest/files/css_test_files/css_subfolder/css_input_with_import.css", "start": 10438314, "end": 10438717, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/menu/menu.api.php", "start": 10438717, "end": 10441296, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/menu/menu.css", "start": 10441296, "end": 10441413, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/menu/menu.test", "start": 10441413, "end": 10469165, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/menu/menu.admin.js", "start": 10469165, "end": 10470593, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/menu/menu.install", "start": 10470593, "end": 10477721, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/menu/menu.admin.inc", "start": 10477721, "end": 10506025, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/menu/menu.module", "start": 10506025, "end": 10534366, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/menu/menu.js", "start": 10534366, "end": 10536861, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/menu/menu.info", "start": 10536861, "end": 10537172, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dblog/dblog.info", "start": 10537172, "end": 10537450, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dblog/dblog.admin.inc", "start": 10537450, "end": 10549535, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dblog/dblog.install", "start": 10549535, "end": 10553925, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dblog/dblog.test", "start": 10553925, "end": 10582130, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dblog/dblog.css", "start": 10582130, "end": 10583528, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dblog/dblog-rtl.css", "start": 10583528, "end": 10583703, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dblog/dblog.module", "start": 10583703, "end": 10591053, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/tracker/tracker.info", "start": 10591053, "end": 10591347, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/tracker/tracker.install", "start": 10591347, "end": 10597508, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/tracker/tracker.module", "start": 10597508, "end": 10610452, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/tracker/tracker.css", "start": 10610452, "end": 10610543, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/tracker/tracker.test", "start": 10610543, "end": 10622146, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/tracker/tracker.pages.inc", "start": 10622146, "end": 10627683, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/file.field.inc", "start": 10627683, "end": 10663542, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/file.js", "start": 10663542, "end": 10669717, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/file.api.php", "start": 10669717, "end": 10671657, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/file.css", "start": 10671657, "end": 10672229, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/file.install", "start": 10672229, "end": 10676149, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/file.module", "start": 10676149, "end": 10718821, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/file.info", "start": 10718821, "end": 10719094, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/tests/file.test", "start": 10719094, "end": 10803003, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/tests/file_module_test.module", "start": 10803003, "end": 10805230, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/tests/file_module_test.info", "start": 10805230, "end": 10805500, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/text-x-script.png", "start": 10805500, "end": 10805776, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/video-x-generic.png", "start": 10805776, "end": 10805990, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/text-x-generic.png", "start": 10805990, "end": 10806210, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/application-octet-stream.png", "start": 10806210, "end": 10806399, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/package-x-generic.png", "start": 10806399, "end": 10806659, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/audio-x-generic.png", "start": 10806659, "end": 10806973, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/application-x-executable.png", "start": 10806973, "end": 10807162, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/x-office-spreadsheet.png", "start": 10807162, "end": 10807345, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/x-office-presentation.png", "start": 10807345, "end": 10807526, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/application-pdf.png", "start": 10807526, "end": 10807872, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/x-office-document.png", "start": 10807872, "end": 10808068, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/image-x-generic.png", "start": 10808068, "end": 10808453, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/text-plain.png", "start": 10808453, "end": 10808673, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/file/icons/text-html.png", "start": 10808673, "end": 10808938, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum-list.tpl.php", "start": 10808938, "end": 10812281, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum.test", "start": 10812281, "end": 10837865, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum.info", "start": 10837865, "end": 10838228, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum.module", "start": 10838228, "end": 10887124, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum.install", "start": 10887124, "end": 10900711, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum.css", "start": 10900711, "end": 10901767, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum.pages.inc", "start": 10901767, "end": 10902805, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forums.tpl.php", "start": 10902805, "end": 10903355, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum-rtl.css", "start": 10903355, "end": 10903753, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum-icon.tpl.php", "start": 10903753, "end": 10904444, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum-topic-list.tpl.php", "start": 10904444, "end": 10906941, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum-submitted.tpl.php", "start": 10906941, "end": 10907652, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/forum/forum.admin.inc", "start": 10907652, "end": 10919656, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dashboard/dashboard.test", "start": 10919656, "end": 10926039, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dashboard/dashboard.module", "start": 10926039, "end": 10952823, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dashboard/dashboard-rtl.css", "start": 10952823, "end": 10953542, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dashboard/dashboard.install", "start": 10953542, "end": 10955491, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dashboard/dashboard.js", "start": 10955491, "end": 10962587, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dashboard/dashboard.info", "start": 10962587, "end": 10963012, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dashboard/dashboard.api.php", "start": 10963012, "end": 10964073, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/dashboard/dashboard.css", "start": 10964073, "end": 10966508, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/translation/translation.module", "start": 10966508, "end": 10989912, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/translation/translation.pages.inc", "start": 10989912, "end": 10993190, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/translation/translation.info", "start": 10993190, "end": 10993511, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/translation/translation.test", "start": 10993511, "end": 11015598, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/translation/tests/translation_test.info", "start": 11015598, "end": 11015886, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/translation/tests/translation_test.module", "start": 11015886, "end": 11016093, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/locale.test", "start": 11016093, "end": 11144996, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/locale.admin.inc", "start": 11144996, "end": 11198175, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/locale-rtl.css", "start": 11198175, "end": 11198486, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/locale.datepicker.js", "start": 11198486, "end": 11200596, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/locale.css", "start": 11200596, "end": 11201471, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/locale.module", "start": 11201471, "end": 11247718, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/locale.install", "start": 11247718, "end": 11262633, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/locale.api.php", "start": 11262633, "end": 11263542, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/locale.info", "start": 11263542, "end": 11263926, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/tests/locale_test.module", "start": 11263926, "end": 11269471, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/tests/locale_test.info", "start": 11269471, "end": 11269739, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/tests/locale_test.js", "start": 11269739, "end": 11271468, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/locale/tests/translations/test.xx.po", "start": 11271468, "end": 11271908, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/block.admin.inc", "start": 11271908, "end": 11296559, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/block.css", "start": 11296559, "end": 11297302, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/block.info", "start": 11297302, "end": 11297696, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/block.tpl.php", "start": 11297696, "end": 11300153, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/block-admin-display-form.tpl.php", "start": 11300153, "end": 11302830, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/block.test", "start": 11302830, "end": 11342025, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/block.api.php", "start": 11342025, "end": 11357695, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/block.js", "start": 11357695, "end": 11363920, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/block.install", "start": 11363920, "end": 11381130, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/block.module", "start": 11381130, "end": 11421005, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/tests/block_test.module", "start": 11421005, "end": 11422543, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/tests/block_test.info", "start": 11422543, "end": 11422785, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/tests/themes/block_test_theme/page.tpl.php", "start": 11422785, "end": 11426227, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/block/tests/themes/block_test_theme/block_test_theme.info", "start": 11426227, "end": 11426733, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/help/help.module", "start": 11426733, "end": 11431023, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/help/help.info", "start": 11431023, "end": 11431276, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/help/help-rtl.css", "start": 11431276, "end": 11431409, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/help/help.css", "start": 11431409, "end": 11431547, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/help/help.admin.inc", "start": 11431547, "end": 11434094, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/help/help.test", "start": 11434094, "end": 11438586, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/field.default.inc", "start": 11438586, "end": 11448622, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/field.api.php", "start": 11448622, "end": 11548411, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/field.module", "start": 11548411, "end": 11598410, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/field.crud.inc", "start": 11598410, "end": 11638127, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/field.attach.inc", "start": 11638127, "end": 11694439, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/field.multilingual.inc", "start": 11694439, "end": 11705913, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/field.form.inc", "start": 11705913, "end": 11728710, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/field.install", "start": 11728710, "end": 11744403, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/field.info", "start": 11744403, "end": 11744855, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/field.info.class.inc", "start": 11744855, "end": 11766882, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/field.info.inc", "start": 11766882, "end": 11793006, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/tests/field.test", "start": 11793006, "end": 11960596, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/tests/field_test.install", "start": 11960596, "end": 11964918, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/tests/field_test.info", "start": 11964918, "end": 11965218, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/tests/field_test.entity.inc", "start": 11965218, "end": 11979981, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/tests/field_test.field.inc", "start": 11979981, "end": 11992059, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/tests/field_test.module", "start": 11992059, "end": 12001448, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/tests/field_test.storage.inc", "start": 12001448, "end": 12015770, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/list/list.module", "start": 12015770, "end": 12033393, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/list/list.info", "start": 12033393, "end": 12033734, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/list/list.install", "start": 12033734, "end": 12037555, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/list/tests/list_test.module", "start": 12037555, "end": 12038269, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/list/tests/list_test.info", "start": 12038269, "end": 12038534, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/list/tests/list.test", "start": 12038534, "end": 12056809, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/field_sql_storage/field_sql_storage.install", "start": 12056809, "end": 12063575, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/field_sql_storage/field_sql_storage.module", "start": 12063575, "end": 12093144, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/field_sql_storage/field_sql_storage.info", "start": 12093144, "end": 12093464, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/field_sql_storage/field_sql_storage.test", "start": 12093464, "end": 12119960, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/number/number.info", "start": 12119960, "end": 12120233, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/number/number.module", "start": 12120233, "end": 12135796, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/number/number.install", "start": 12135796, "end": 12136669, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/number/number.test", "start": 12136669, "end": 12142848, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/options/options.test", "start": 12142848, "end": 12166178, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/options/options.api.php", "start": 12166178, "end": 12168623, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/options/options.info", "start": 12168623, "end": 12168952, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/options/options.module", "start": 12168952, "end": 12181454, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/text/text.info", "start": 12181454, "end": 12181743, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/text/text.install", "start": 12181743, "end": 12183885, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/text/text.module", "start": 12183885, "end": 12205000, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/text/text.test", "start": 12205000, "end": 12223581, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/modules/text/text.js", "start": 12223581, "end": 12225358, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/theme/field.css", "start": 12225358, "end": 12225908, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/theme/field-rtl.css", "start": 12225908, "end": 12226229, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/field/theme/field.tpl.php", "start": 12226229, "end": 12229167, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/openid.test", "start": 12229167, "end": 12266666, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/openid-rtl.css", "start": 12266666, "end": 12267046, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/login-bg.png", "start": 12267046, "end": 12267251, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/openid.api.php", "start": 12267251, "end": 12270588, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/openid.module", "start": 12270588, "end": 12311888, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/openid.css", "start": 12311888, "end": 12312928, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/openid.js", "start": 12312928, "end": 12314757, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/openid.inc", "start": 12314757, "end": 12341589, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/openid.info", "start": 12341589, "end": 12341861, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/openid.install", "start": 12341861, "end": 12348822, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/openid.pages.inc", "start": 12348822, "end": 12352603, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/tests/openid_test.module", "start": 12352603, "end": 12367156, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/tests/openid_test.install", "start": 12367156, "end": 12367599, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/openid/tests/openid_test.info", "start": 12367599, "end": 12367890, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/rdf/rdf.api.php", "start": 12367890, "end": 12371526, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/rdf/rdf.info", "start": 12371526, "end": 12371890, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/rdf/rdf.test", "start": 12371890, "end": 12407476, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/rdf/rdf.install", "start": 12407476, "end": 12408768, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/rdf/rdf.module", "start": 12408768, "end": 12443108, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/rdf/tests/rdf_test.module", "start": 12443108, "end": 12444699, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/rdf/tests/rdf_test.install", "start": 12444699, "end": 12445171, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/rdf/tests/rdf_test.info", "start": 12445171, "end": 12445462, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/php/php.info", "start": 12445462, "end": 12445735, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/php/php.module", "start": 12445735, "end": 12453396, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/php/php.install", "start": 12453396, "end": 12455012, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/php/php.test", "start": 12455012, "end": 12459579, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/shortcut/shortcut.admin.inc", "start": 12459579, "end": 12486461, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/shortcut/shortcut.test", "start": 12486461, "end": 12500123, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/shortcut/shortcut.info", "start": 12500123, "end": 12500458, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/shortcut/shortcut-rtl.css", "start": 12500458, "end": 12501525, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/shortcut/shortcut.png", "start": 12501525, "end": 12502083, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/shortcut/shortcut.install", "start": 12502083, "end": 12505136, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/shortcut/shortcut.css", "start": 12505136, "end": 12507544, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/shortcut/shortcut.module", "start": 12507544, "end": 12534743, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/shortcut/shortcut.admin.js", "start": 12534743, "end": 12539228, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/shortcut/shortcut.api.php", "start": 12539228, "end": 12540467, "audio": 0}, {"filename": "/preload/drupal-7.59/modules/shortcut/shortcut.admin.css", "start": 12540467, "end": 12540571, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/example.sites.php", "start": 12540571, "end": 12542936, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/README.txt", "start": 12542936, "end": 12543840, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/all/libraries/README.txt", "start": 12543840, "end": 12543991, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/all/themes/README.txt", "start": 12543991, "end": 12545011, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/all/modules/README.txt", "start": 12545011, "end": 12546485, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/default/default.settings.php", "start": 12546485, "end": 12572747, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/default/logo.png", "start": 12572747, "end": 12587050, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/default/settings.php", "start": 12587050, "end": 12613560, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/default/files/.ht.sqlite", "start": 12613560, "end": 15861688, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/default/files/.htaccess", "start": 15861688, "end": 15862164, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/default/files/drowser-files/.ht.sqlite", "start": 15862164, "end": 19376532, "audio": 0}, {"filename": "/preload/drupal-7.59/sites/default/files/drowser-files/.htaccess", "start": 19376532, "end": 19377008, "audio": 0}, {"filename": "/preload/drupal-7.59/scripts/generate-d7-content.sh", "start": 19377008, "end": 19387798, "audio": 0}, {"filename": "/preload/drupal-7.59/scripts/test.script", "start": 19387798, "end": 19387983, "audio": 0}, {"filename": "/preload/drupal-7.59/scripts/dump-database-d6.sh", "start": 19387983, "end": 19390938, "audio": 0}, {"filename": "/preload/drupal-7.59/scripts/cron-curl.sh", "start": 19390938, "end": 19391004, "audio": 0}, {"filename": "/preload/drupal-7.59/scripts/code-clean.sh", "start": 19391004, "end": 19391573, "audio": 0}, {"filename": "/preload/drupal-7.59/scripts/cron-lynx.sh", "start": 19391573, "end": 19391651, "audio": 0}, {"filename": "/preload/drupal-7.59/scripts/generate-d6-content.sh", "start": 19391651, "end": 19398523, "audio": 0}, {"filename": "/preload/drupal-7.59/scripts/drupal.sh", "start": 19398523, "end": 19402787, "audio": 0}, {"filename": "/preload/drupal-7.59/scripts/dump-database-d7.sh", "start": 19402787, "end": 19405360, "audio": 0}, {"filename": "/preload/drupal-7.59/scripts/password-hash.sh", "start": 19405360, "end": 19407727, "audio": 0}, {"filename": "/preload/drupal-7.59/scripts/run-tests.sh", "start": 19407727, "end": 19433201, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/README.txt", "start": 19433201, "end": 19434242, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/testing/testing.info", "start": 19434242, "end": 19434519, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/testing/testing.install", "start": 19434519, "end": 19435130, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/testing/testing.profile", "start": 19435130, "end": 19435189, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/testing/modules/drupal_system_listing_compatible_test/drupal_system_listing_compatible_test.module", "start": 19435189, "end": 19435195, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/testing/modules/drupal_system_listing_compatible_test/drupal_system_listing_compatible_test.test", "start": 19435195, "end": 19436286, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/testing/modules/drupal_system_listing_compatible_test/drupal_system_listing_compatible_test.info", "start": 19436286, "end": 19436653, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/testing/modules/drupal_system_listing_incompatible_test/drupal_system_listing_incompatible_test.info", "start": 19436653, "end": 19437149, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/testing/modules/drupal_system_listing_incompatible_test/drupal_system_listing_incompatible_test.module", "start": 19437149, "end": 19437155, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/standard/standard.profile", "start": 19437155, "end": 19437613, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/standard/standard.install", "start": 19437613, "end": 19449447, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/standard/standard.info", "start": 19449447, "end": 19450189, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/standard/translations/README.txt", "start": 19450189, "end": 19450281, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/minimal/minimal.install", "start": 19450281, "end": 19452345, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/minimal/minimal.profile", "start": 19452345, "end": 19452801, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/minimal/minimal.info", "start": 19452801, "end": 19453071, "audio": 0}, {"filename": "/preload/drupal-7.59/profiles/minimal/translations/README.txt", "start": 19453071, "end": 19453163, "audio": 0}], "remote_package_size": 19453163, "package_uuid": "d1d78c68-43f7-4288-b377-66d3d0b3fe95"});
  
  })();
  


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = true;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;




// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;


// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }


  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {




  read_ = function shell_read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };




  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}


// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message





// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;

function dynamicAlloc(size) {
  var ret = HEAP32[DYNAMICTOP_PTR>>2];
  var end = (ret + size + 15) & -16;
  HEAP32[DYNAMICTOP_PTR>>2] = end;
  return ret;
}

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

var asm2wasmImports = { // special asm2wasm imports
    "f64-rem": function(x, y) {
        return x % y;
    },
    "debugger": function() {
    }
};






var jsCallStartIndex = 1;
var functionPointers = new Array(0);

// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  var table = wasmTable;

  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < table.length; i++) {
      var item = table.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.


  var ret;
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    ret = freeTableIndexes.pop();
  } else {
    ret = table.length;
    // Grow the table
    try {
      table.grow(1);
    } catch (err) {
      if (!(err instanceof RangeError)) {
        throw err;
      }
      throw 'Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH.';
    }
  }

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    table.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    table.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunctionWasm(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {


  var base = 0;
  for (var i = base; i < base + 0; i++) {
    if (!functionPointers[i]) {
      functionPointers[i] = func;
      return jsCallStartIndex + i;
    }
  }
  throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';

}

function removeFunction(index) {

  functionPointers[index-jsCallStartIndex] = null;
}



var funcWrappers = {};

function getFuncWrapper(func, sig) {
  if (!func) return; // on null pointer, return undefined
  assert(sig);
  if (!funcWrappers[sig]) {
    funcWrappers[sig] = {};
  }
  var sigCache = funcWrappers[sig];
  if (!sigCache[func]) {
    // optimize away arguments usage in common cases
    if (sig.length === 1) {
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func);
      };
    } else if (sig.length === 2) {
      sigCache[func] = function dynCall_wrapper(arg) {
        return dynCall(sig, func, [arg]);
      };
    } else {
      // general case
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func, Array.prototype.slice.call(arguments));
      };
    }
  }
  return sigCache[func];
}







function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

/** @param {Array=} args */
function dynCall(sig, ptr, args) {
  if (args && args.length) {
    return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
  } else {
    return Module['dynCall_' + sig].call(null, ptr);
  }
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};


// The address globals begin at. Very low in memory, for code size and optimization opportunities.
// Above 0 is static memory, starting with globals.
// Then the stack.
// Then 'dynamic' memory for sbrk.
var GLOBAL_BASE = 1024;





// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html


var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];


if (typeof WebAssembly !== 'object') {
  err('no native wasm support detected');
}




// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}






// Wasm globals

var wasmMemory;

// In fastcomp asm.js, we don't need a wasm Table at all.
// In the wasm backend, we polyfill the WebAssembly object,
// so this creates a (non-native-wasm) table for us.
var wasmTable = new WebAssembly.Table({
  'initial': 6775,
  'maximum': 6775,
  'element': 'anyfunc'
});


//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_DYNAMIC = 2; // Cannot be freed except through sbrk
var ALLOC_NONE = 3; // Do not allocate

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((TypedArray|Array<number>|number), string, number, number=)} */
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc,
    stackAlloc,
    dynamicAlloc][allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var stop;
    ptr = ret;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!runtimeInitialized) return dynamicAlloc(size);
  return _malloc(size);
}




// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}





// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}



// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var STATIC_BASE = 1024,
    STACK_BASE = 2559888,
    STACKTOP = STACK_BASE,
    STACK_MAX = 7802768,
    DYNAMIC_BASE = 7802768,
    DYNAMICTOP_PTR = 2559696;



var TOTAL_STACK = 5242880;

var INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 1073741824;









// In non-standalone/normal mode, we create the memory here.



// Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm
// memory is created in the wasm, not in JS.)

  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else
  {
    wasmMemory = new WebAssembly.Memory({
      'initial': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
    });
  }


if (wasmMemory) {
  buffer = wasmMemory.buffer;
}

// If the user provides an incorrect length, just use that length instead rather than providing the user to
// specifically provide the memory length with Module['INITIAL_MEMORY'].
INITIAL_INITIAL_MEMORY = buffer.byteLength;
updateGlobalBufferAndViews(buffer);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;














function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback(Module); // Pass the module as the first argument.
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
TTY.init();
SOCKFS.root = FS.mount(SOCKFS, {}, null);
PIPEFS.root = FS.mount(PIPEFS, {}, null);
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  FS.ignorePermissions = false;
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

/** @param {number|boolean=} ignore */
function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
/** @param {number|boolean=} ignore */
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc


var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_max = Math.max;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;



// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  out(what);
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Throw a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  throw new WebAssembly.RuntimeError(what);
}


var memoryInitializer = null;












function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}




var wasmBinaryFile = 'php-web.wasm';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary() {
  try {
    if (wasmBinary) {
      return new Uint8Array(wasmBinary);
    }

    if (readBinary) {
      return readBinary(wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary();
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return new Promise(function(resolve, reject) {
    resolve(getBinary());
  });
}



// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg
    ,
    'global': {
      'NaN': NaN,
      'Infinity': Infinity
    },
    'global.Math': Math,
    'asm2wasm': asm2wasmImports
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;
    Module['asm'] = exports;
    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');


  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }


  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);
      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.
  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiatedSource, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiatedSource);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}

Module['asm'] = createWasm;

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = [function($0, $1) { const target = Module.targets.get($0) || window; const property = UTF8ToString($1); const result = target[property]; console.log('target/prop:', $0, target, property, typeof result, result); if(!result || !['function','object'].includes(typeof result)) { const jsRet = 'OK' + String(result); const len = lengthBytesUTF8(jsRet) + 1; const strLoc = _malloc(len); stringToUTF8(jsRet, strLoc, len); return strLoc; } const jsRet = 'XX'; const len = lengthBytesUTF8(jsRet) + 1; const strLoc = _malloc(len); stringToUTF8(jsRet, strLoc, len); return strLoc; },
 function($0, $1) { const target = Module.targets.get($0) || window; const property = UTF8ToString($1); const result = target[property]; console.log('target/prop:', $0, target, property, typeof result, result); if(['function','object'].includes(typeof result)) { let index = Module.targets.has(result); if(!index) { index = Module.targets.add(result); } console.log(index); return index; } console.log(0); return 0; },
 function($0, $1, $2) { const target = Module.targets.get($0) || window; const eventName = UTF8ToString($1); const funcPtr = $2; const options = {}; const callback = () => { Module.ccall( 'exec_callback' , 'number' , ["number"] , [funcPtr] ); }; target.addEventListener(eventName, callback, options); const remover = () => { target.removeEventListener(eventName, callback, options); return $2; }; return Module.callbacks.add(remover); },
 function($0) { const remover = Module.callbacks.get($0); return remover(); },
 function($0, $1) { const target = Module.targets.get($0) || document; const querySelector = UTF8ToString($1); const result = target.querySelector(querySelector); if(!result) { return 0; } let index = Module.targets.has(result) || 0; if(!index) { index = Module.targets.add(result); } return index; },
 function($0) { const jsRet = String(eval(UTF8ToString($0))); const len = lengthBytesUTF8(jsRet) + 1; const strLoc = _malloc(len); stringToUTF8(jsRet, strLoc, len); return strLoc; },
 function($0, $1) { const funcName = UTF8ToString($0); const argJson = UTF8ToString($1); const func = window[funcName]; const args = JSON.parse(argJson || '[]') || []; const jsRet = String(func(...args)); const len = lengthBytesUTF8(jsRet) + 1; const strLoc = _malloc(len); stringToUTF8(jsRet, strLoc, len); return strLoc; },
 function($0, $1) { const timeout = Number(UTF8ToString($0)); const funcPtr = $1; setTimeout(()=>{ Module.ccall( 'exec_callback' , 'number' , ["number"] , [funcPtr] ); Module.ccall( 'del_callback' , 'number' , ["number"] , [funcPtr] ); }, timeout); }];

function _emscripten_asm_const_iii(code, a0, a1) {
  return ASM_CONSTS[code](a0, a1);
}

function _emscripten_asm_const_ii(code, a0) {
  return ASM_CONSTS[code](a0);
}

function _emscripten_asm_const_iiii(code, a0, a1, a2) {
  return ASM_CONSTS[code](a0, a1, a2);
}




// STATICTOP = STATIC_BASE + 2558864;
/* global initializers */  __ATINIT__.push({ func: function() { ___emscripten_environ_constructor() } });








/* no memory initializer */
var tempDoublePtr = 2559872;

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
}

function copyTempDouble(ptr) {
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];
  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];
  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];
  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];
}

// {{PRE_LIBRARY}}


  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b__Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var err = new Error();
      if (!err.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          err = e;
        }
        if (!err.stack) {
          return '(no stack trace available)';
        }
      }
      return err.stack.toString();
    }

   

   

   

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  
  var ENV={};
  
  function __getExecutableName() {
      return thisProgram || './this.program';
    }function ___buildEnvironment(environ) {
      // WARNING: Arbitrary limit!
      var MAX_ENV_VALUES = 64;
      var TOTAL_ENV_SIZE = 1024;
  
      // Statically allocate memory for the environment.
      var poolPtr;
      var envPtr;
      if (!___buildEnvironment.called) {
        ___buildEnvironment.called = true;
        // Set default values. Use string keys for Closure Compiler compatibility.
        ENV['USER'] = 'web_user';
        ENV['LOGNAME'] = 'web_user';
        ENV['PATH'] = '/';
        ENV['PWD'] = '/';
        ENV['HOME'] = '/home/web_user';
        // Browser language detection #8751
        ENV['LANG'] = ((typeof navigator === 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        ENV['_'] = __getExecutableName();
        // Allocate memory.
        poolPtr = getMemory(TOTAL_ENV_SIZE);
        envPtr = getMemory(MAX_ENV_VALUES * 4);
        HEAP32[((envPtr)>>2)]=poolPtr;
        HEAP32[((environ)>>2)]=envPtr;
      } else {
        envPtr = HEAP32[((environ)>>2)];
        poolPtr = HEAP32[((envPtr)>>2)];
      }
  
      // Collect key=value lines.
      var strings = [];
      var totalSize = 0;
      for (var key in ENV) {
        if (typeof ENV[key] === 'string') {
          var line = key + '=' + ENV[key];
          strings.push(line);
          totalSize += line.length;
        }
      }
      if (totalSize > TOTAL_ENV_SIZE) {
        throw new Error('Environment size exceeded TOTAL_ENV_SIZE!');
      }
  
      // Make new.
      var ptrSize = 4;
      for (var i = 0; i < strings.length; i++) {
        var line = strings[i];
        writeAsciiToMemory(line, poolPtr);
        HEAP32[(((envPtr)+(i * ptrSize))>>2)]=poolPtr;
        poolPtr += line.length + 1;
      }
      HEAP32[(((envPtr)+(strings.length * ptrSize))>>2)]=0;
    }

  
  
  var _emscripten_get_now;_emscripten_get_now = function() { return performance.now(); }
  ;
  
  var _emscripten_get_now_is_monotonic=true;;
  
  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)]=value;
      return value;
    }function _clock_gettime(clk_id, tp) {
      // int clock_gettime(clockid_t clk_id, struct timespec *tp);
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[((tp)>>2)]=(now/1000)|0; // seconds
      HEAP32[(((tp)+(4))>>2)]=((now % 1000)*1000*1000)|0; // nanoseconds
      return 0;
    }function ___clock_gettime(a0,a1
  ) {
  return _clock_gettime(a0,a1);
  }

  function ___map_file(pathname, size) {
      setErrNo(63);
      return -1;
    }

  
  
  
  var PATH={splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  
  var PATH_FS={resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  var MEMFS={ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },getFileDataAsRegularArray:function(node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
          return arr; // Returns a copy of the original data.
        }
        return node.contents; // No-op, the file contents are already in a JS array. Return as-is.
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
        return;
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) { // Resize a typed array if that is being used as the backing store.
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
          return;
        }
        // Backing with a JS array.
        if (!node.contents) node.contents = [];
        if (node.contents.length > newSize) node.contents.length = newSize;
        else while (node.contents.length < newSize) node.contents.push(0);
        node.usedBytes = newSize;
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset, offset + length), position); // Use typed array write if available.
          else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, address, length, position, prot, flags) {
          // We don't currently support location hints for the address of the mapping
          assert(address === 0);
  
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return setErrNo(e.errno);
      },lookupPath:function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function(parentid, name) {
        var hash = 0;
  
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function(node) {
        FS.hashRemoveNode(node);
      },isRoot:function(node) {
        return node === node.parent;
      },isMountpoint:function(node) {
        return !!node.mounted;
      },isFile:function(mode) {
        return (mode & 61440) === 32768;
      },isDir:function(mode) {
        return (mode & 61440) === 16384;
      },isLink:function(mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function(mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function(mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function(mode) {
        return (mode & 61440) === 4096;
      },isSocket:function(mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return 2;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return 2;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:function(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:function(fd) {
        return FS.streams[fd];
      },createStream:function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function(fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function() {
          throw new FS.ErrnoError(70);
        }},major:function(dev) {
        return ((dev) >> 8);
      },minor:function(dev) {
        return ((dev) & 0xff);
      },makedev:function(ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function(dev) {
        return FS.devices[dev];
      },getMounts:function(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function(populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function(type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },lookup:function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:function(path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(10);
        }
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          err("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:function(path) {
        return FS.stat(path, true);
      },chmod:function(path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function(path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          err("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:function(stream) {
        return stream.fd === null;
      },llseek:function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          err("FS.trackingDelegate['onWriteToFile']('"+stream.path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function(stream, address, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },msync:function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function(stream) {
        return 0;
      },ioctl:function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function() {
        return FS.currentPath;
      },chdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device;
        if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
          // for modern web browsers
          var randomBuffer = new Uint8Array(1);
          random_device = function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
        } else
        {}
        if (!random_device) {
          // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
          random_device = function() { abort("random_device"); };
        }
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode('/proc/self', 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        var stdout = FS.open('/dev/stdout', 'w');
        var stderr = FS.open('/dev/stderr', 'w');
      },ensureErrnoError:function() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
          };
          this.setErrno(errno);
          this.message = 'FS error';
  
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:function(input, output, error) {
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function(canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function(parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function(relative, base) {
        return PATH_FS.resolve(base, relative);
      },standardizePath:function(path) {
        return PATH.normalize(path);
      },findObject:function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          setErrNo(ret.error);
          return null;
        }
      },analyzePath:function(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function(parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function(parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function(parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) setErrNo(29);
        return success;
      },createLazyFile:function(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(29);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(29);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function() {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};var SYSCALLS={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd, path) {
        if (path[0] !== '/') {
          // relative path
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)]=stat.dev;
        HEAP32[(((buf)+(4))>>2)]=0;
        HEAP32[(((buf)+(8))>>2)]=stat.ino;
        HEAP32[(((buf)+(12))>>2)]=stat.mode;
        HEAP32[(((buf)+(16))>>2)]=stat.nlink;
        HEAP32[(((buf)+(20))>>2)]=stat.uid;
        HEAP32[(((buf)+(24))>>2)]=stat.gid;
        HEAP32[(((buf)+(28))>>2)]=stat.rdev;
        HEAP32[(((buf)+(32))>>2)]=0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)]=tempI64[0],HEAP32[(((buf)+(44))>>2)]=tempI64[1]);
        HEAP32[(((buf)+(48))>>2)]=4096;
        HEAP32[(((buf)+(52))>>2)]=stat.blocks;
        HEAP32[(((buf)+(56))>>2)]=(stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)]=0;
        HEAP32[(((buf)+(64))>>2)]=(stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)]=0;
        HEAP32[(((buf)+(72))>>2)]=(stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)]=0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)]=tempI64[0],HEAP32[(((buf)+(84))>>2)]=tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        return low;
      }};function ___sys_unlink(path) {try {
  
      path = SYSCALLS.getStr(path);
      FS.unlink(path);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall10(a0
  ) {
  return ___sys_unlink(a0);
  }

  
  
  
  var ERRNO_CODES={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};var SOCKFS={mount:function(mount) {
        // If Module['websocket'] has already been defined (e.g. for configuring
        // the subprotocol/url) use that, if not initialise it to a new object.
        Module['websocket'] = (Module['websocket'] && 
                               ('object' === typeof Module['websocket'])) ? Module['websocket'] : {};
  
        // Add the Event registration mechanism to the exported websocket configuration
        // object so we can register network callbacks from native JavaScript too.
        // For more documentation see system/include/emscripten/emscripten.h
        Module['websocket']._callbacks = {};
        Module['websocket']['on'] = /** @this{Object} */ function(event, callback) {
  	    if ('function' === typeof callback) {
  		  this._callbacks[event] = callback;
          }
  	    return this;
        };
  
        Module['websocket'].emit = /** @this{Object} */ function(event, param) {
  	    if ('function' === typeof this._callbacks[event]) {
  		  this._callbacks[event].call(this, param);
          }
        };
  
        // If debug is enabled register simple default logging callbacks for each Event.
  
        return FS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createSocket:function(family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6)); // if SOCK_STREAM, must be tcp
        }
  
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          error: null, // Used in getsockopt for SOL_SOCKET/SO_ERROR test
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
  
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
  
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: FS.modeStringToFlags('r+'),
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
  
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
  
        return sock;
      },getSocket:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function(stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function(stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function(stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function() {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function(sock, addr, port) {
          var ws;
  
          if (typeof addr === 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
  
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              // runtimeConfig gets set to true if WebSocket runtime configuration is available.
              var runtimeConfig = (Module['websocket'] && ('object' === typeof Module['websocket']));
  
              // The default value is 'ws://' the replace is needed because the compiler replaces '//' comments with '#'
              // comments without checking context, so we'd end up with ws:#, the replace swaps the '#' for '//' again.
              var url = 'ws:#'.replace('#', '//');
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['url']) {
                  url = Module['websocket']['url']; // Fetch runtime WebSocket URL config.
                }
              }
  
              if (url === 'ws://' || url === 'wss://') { // Is the supplied URL config just a prefix, if so complete it.
                var parts = addr.split('/');
                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join('/');
              }
  
              // Make the WebSocket subprotocol (Sec-WebSocket-Protocol) default to binary if no configuration is set.
              var subProtocols = 'binary'; // The default value is 'binary'
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['subprotocol']) {
                  subProtocols = Module['websocket']['subprotocol']; // Fetch runtime WebSocket subprotocol config.
                }
              }
  
              // The default WebSocket options
              var opts = undefined;
  
              if (subProtocols !== 'null') {
                // The regex trims the string (removes spaces at the beginning and end, then splits the string by
                // <any space>,<any space> into an Array. Whitespace removal is important for Websockify and ws.
                subProtocols = subProtocols.replace(/^ +| +$/g,"").split(/ *, */);
  
                // The node ws library API for specifying optional subprotocol is slightly different than the browser's.
                opts = ENVIRONMENT_IS_NODE ? {'protocol': subProtocols.toString()} : subProtocols;
              }
  
              // some webservers (azure) does not support subprotocol header
              if (runtimeConfig && null === Module['websocket']['subprotocol']) {
                subProtocols = 'null';
                opts = undefined;
              }
  
              // If node we use the ws library.
              var WebSocketConstructor;
              {
                WebSocketConstructor = WebSocket;
              }
              ws = new WebSocketConstructor(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
  
  
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
  
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
  
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport !== 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
  
          return peer;
        },getPeer:function(sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function(sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function(sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function(sock, peer) {
          var first = true;
  
          var handleOpen = function () {
  
            Module['websocket'].emit('open', sock.stream.fd);
  
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
  
          function handleMessage(data) {
            if (typeof data === 'string') {
              var encoder = new TextEncoder(); // should be utf-8
              data = encoder.encode(data); // make a typed array from the string
            } else {
              assert(data.byteLength !== undefined); // must receive an ArrayBuffer
              if (data.byteLength == 0) {
                // An empty ArrayBuffer will emit a pseudo disconnect event
                // as recv/recvmsg will return zero which indicates that a socket
                // has performed a shutdown although the connection has not been disconnected yet.
                return;
              } else {
                data = new Uint8Array(data); // make a typed array view on the array buffer
              }
            }
  
  
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
  
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
            Module['websocket'].emit('message', sock.stream.fd);
          };
  
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer);  // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('close', function() {
              Module['websocket'].emit('close', sock.stream.fd);
            });
            peer.socket.on('error', function(error) {
              // Although the ws library may pass errors that may be more descriptive than
              // ECONNREFUSED they are not necessarily the expected error code e.g. 
              // ENOTFOUND on getaddrinfo seems to be node.js specific, so using ECONNREFUSED
              // is still probably the most useful thing to do.
              sock.error = ERRNO_CODES.ECONNREFUSED; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onclose = function() {
              Module['websocket'].emit('close', sock.stream.fd);
            };
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
            peer.socket.onerror = function(error) {
              // The WebSocket spec only allows a 'simple event' to be thrown on error,
              // so we only really know as much as ECONNREFUSED.
              sock.error = ERRNO_CODES.ECONNREFUSED; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
            };
          }
        },poll:function(sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
  
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
  
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
  
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
  
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
  
          return mask;
        },ioctl:function(sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[((arg)>>2)]=bytes;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },close:function(sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function(sock, addr, port) {
          if (typeof sock.saddr !== 'undefined' || typeof sock.sport !== 'undefined') {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port;
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError)) throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
            }
          }
        },connect:function(sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
  
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
  
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr !== 'undefined' && typeof sock.dport !== 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
  
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
  
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },listen:function(sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
        },accept:function(listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function(sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function(sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
  
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
  
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
  
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          if (ArrayBuffer.isView(buffer)) {
            offset += buffer.byteOffset;
            buffer = buffer.buffer;
          }
  
          var data;
            data = buffer.slice(offset, offset + length);
  
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
  
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },recvmsg:function(sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
  
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
  
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              }
              else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              else {
                // else, our socket is in a valid state but truly has nothing available
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
  
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
  
  
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
  
          return res;
        }}};
  
  
  function __inet_pton4_raw(str) {
      var b = str.split('.');
      for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp)) return null;
        b[i] = tmp;
      }
      return (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) >>> 0;
    }
  
  
  /** @suppress {checkTypes} */
  function jstoi_q(str) {
      return parseInt(str);
    }function __inet_pton6_raw(str) {
      var words;
      var w, offset, z, i;
      /* http://home.deds.nl/~aeron/regex/ */
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      // Z placeholder to keep track of zeros when splitting the string on ":"
      if (str.indexOf("::") === 0) {
        str = str.replace("::", "Z:"); // leading zeros case
      } else {
        str = str.replace("::", ":Z:");
      }
  
      if (str.indexOf(".") > 0) {
        // parse IPv4 embedded stress
        str = str.replace(new RegExp('[.]', 'g'), ":");
        words = str.split(":");
        words[words.length-4] = jstoi_q(words[words.length-4]) + jstoi_q(words[words.length-3])*256;
        words[words.length-3] = jstoi_q(words[words.length-2]) + jstoi_q(words[words.length-1])*256;
        words = words.slice(0, words.length-2);
      } else {
        words = str.split(":");
      }
  
      offset = 0; z = 0;
      for (w=0; w < words.length; w++) {
        if (typeof words[w] === 'string') {
          if (words[w] === 'Z') {
            // compressed zeros - write appropriate number of zero words
            for (z = 0; z < (8 - words.length+1); z++) {
              parts[w+z] = 0;
            }
            offset = z-1;
          } else {
            // parse hex to field to 16-bit value and write it in network byte-order
            parts[w+offset] = _htons(parseInt(words[w],16));
          }
        } else {
          // parsed IPv4 words
          parts[w+offset] = words[w];
        }
      }
      return [
        (parts[1] << 16) | parts[0],
        (parts[3] << 16) | parts[2],
        (parts[5] << 16) | parts[4],
        (parts[7] << 16) | parts[6]
      ];
    }var DNS={address_map:{id:1,addrs:{},names:{}},lookup_name:function (name) {
        // If the name is already a valid ipv4 / ipv6 address, don't generate a fake one.
        var res = __inet_pton4_raw(name);
        if (res !== null) {
          return name;
        }
        res = __inet_pton6_raw(name);
        if (res !== null) {
          return name;
        }
  
        // See if this name is already mapped.
        var addr;
  
        if (DNS.address_map.addrs[name]) {
          addr = DNS.address_map.addrs[name];
        } else {
          var id = DNS.address_map.id++;
          assert(id < 65535, 'exceeded max address mappings of 65535');
  
          addr = '172.29.' + (id & 0xff) + '.' + (id & 0xff00);
  
          DNS.address_map.names[addr] = name;
          DNS.address_map.addrs[name] = addr;
        }
  
        return addr;
      },lookup_addr:function (addr) {
        if (DNS.address_map.names[addr]) {
          return DNS.address_map.names[addr];
        }
  
        return null;
      }};
  
  
  var Sockets={BUFFER_SIZE:10240,MAX_BUFFER_SIZE:10485760,nextFd:1,fds:{},nextport:1,maxport:65535,peer:null,connections:{},portmap:{},localAddr:4261412874,addrPool:[33554442,50331658,67108874,83886090,100663306,117440522,134217738,150994954,167772170,184549386,201326602,218103818,234881034]};
  
  function __inet_ntop4_raw(addr) {
      return (addr & 0xff) + '.' + ((addr >> 8) & 0xff) + '.' + ((addr >> 16) & 0xff) + '.' + ((addr >> 24) & 0xff)
    }
  
  function __inet_ntop6_raw(ints) {
      //  ref:  http://www.ietf.org/rfc/rfc2373.txt - section 2.5.4
      //  Format for IPv4 compatible and mapped  128-bit IPv6 Addresses
      //  128-bits are split into eight 16-bit words
      //  stored in network byte order (big-endian)
      //  |                80 bits               | 16 |      32 bits        |
      //  +-----------------------------------------------------------------+
      //  |               10 bytes               |  2 |      4 bytes        |
      //  +--------------------------------------+--------------------------+
      //  +               5 words                |  1 |      2 words        |
      //  +--------------------------------------+--------------------------+
      //  |0000..............................0000|0000|    IPv4 ADDRESS     | (compatible)
      //  +--------------------------------------+----+---------------------+
      //  |0000..............................0000|FFFF|    IPv4 ADDRESS     | (mapped)
      //  +--------------------------------------+----+---------------------+
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [
        ints[0] & 0xffff,
        (ints[0] >> 16),
        ints[1] & 0xffff,
        (ints[1] >> 16),
        ints[2] & 0xffff,
        (ints[2] >> 16),
        ints[3] & 0xffff,
        (ints[3] >> 16)
      ];
  
      // Handle IPv4-compatible, IPv4-mapped, loopback and any/unspecified addresses
  
      var hasipv4 = true;
      var v4part = "";
      // check if the 10 high-order bytes are all zeros (first 5 words)
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) { hasipv4 = false; break; }
      }
  
      if (hasipv4) {
        // low-order 32-bits store an IPv4 address (bytes 13 to 16) (last 2 words)
        v4part = __inet_ntop4_raw(parts[6] | (parts[7] << 16));
        // IPv4-mapped IPv6 address if 16-bit value (bytes 11 and 12) == 0xFFFF (6th word)
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        // IPv4-compatible IPv6 address if 16-bit value (bytes 11 and 12) == 0x0000 (6th word)
        if (parts[5] === 0) {
          str = "::";
          //special case IPv6 addresses
          if(v4part === "0.0.0.0") v4part = ""; // any/unspecified address
          if(v4part === "0.0.0.1") v4part = "1";// loopback address
          str += v4part;
          return str;
        }
      }
  
      // Handle all other IPv6 addresses
  
      // first run to find the longest contiguous zero words
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
  
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          // compress contiguous zeros - to produce "::"
          if (parts[word] === 0 && word >= zstart && word < (zstart + longest) ) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0) str += ":"; //leading zeros case
            }
            continue;
          }
        }
        // converts 16-bit words from big-endian to little-endian before converting to hex string
        str += Number(_ntohs(parts[word] & 0xffff)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }function __read_sockaddr(sa, salen) {
      // family / port offsets are common to both sockaddr_in and sockaddr_in6
      var family = HEAP16[((sa)>>1)];
      var port = _ntohs(HEAPU16[(((sa)+(2))>>1)]);
      var addr;
  
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[(((sa)+(4))>>2)];
          addr = __inet_ntop4_raw(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [
            HEAP32[(((sa)+(8))>>2)],
            HEAP32[(((sa)+(12))>>2)],
            HEAP32[(((sa)+(16))>>2)],
            HEAP32[(((sa)+(20))>>2)]
          ];
          addr = __inet_ntop6_raw(addr);
          break;
        default:
          return { errno: 5 };
      }
  
      return { family: family, addr: addr, port: port };
    }
  
  function __write_sockaddr(sa, family, addr, port) {
      switch (family) {
        case 2:
          addr = __inet_pton4_raw(addr);
          HEAP16[((sa)>>1)]=family;
          HEAP32[(((sa)+(4))>>2)]=addr;
          HEAP16[(((sa)+(2))>>1)]=_htons(port);
          break;
        case 10:
          addr = __inet_pton6_raw(addr);
          HEAP32[((sa)>>2)]=family;
          HEAP32[(((sa)+(8))>>2)]=addr[0];
          HEAP32[(((sa)+(12))>>2)]=addr[1];
          HEAP32[(((sa)+(16))>>2)]=addr[2];
          HEAP32[(((sa)+(20))>>2)]=addr[3];
          HEAP16[(((sa)+(2))>>1)]=_htons(port);
          HEAP32[(((sa)+(4))>>2)]=0;
          HEAP32[(((sa)+(24))>>2)]=0;
          break;
        default:
          return { errno: 5 };
      }
      // kind of lame, but let's match _read_sockaddr's interface
      return {};
    }function ___sys_socketcall(call, socketvararg) {try {
  
      // socketcalls pass the rest of the arguments in a struct
      SYSCALLS.varargs = socketvararg;
  
      var getSocketFromFD = function() {
        var socket = SOCKFS.getSocket(SYSCALLS.get());
        if (!socket) throw new FS.ErrnoError(8);
        return socket;
      };
      /** @param {boolean=} allowNull */
      var getSocketAddress = function(allowNull) {
        var addrp = SYSCALLS.get(), addrlen = SYSCALLS.get();
        if (allowNull && addrp === 0) return null;
        var info = __read_sockaddr(addrp, addrlen);
        if (info.errno) throw new FS.ErrnoError(info.errno);
        info.addr = DNS.lookup_addr(info.addr) || info.addr;
        return info;
      };
  
      switch (call) {
        case 1: { // socket
          var domain = SYSCALLS.get(), type = SYSCALLS.get(), protocol = SYSCALLS.get();
          var sock = SOCKFS.createSocket(domain, type, protocol);
          return sock.stream.fd;
        }
        case 2: { // bind
          var sock = getSocketFromFD(), info = getSocketAddress();
          sock.sock_ops.bind(sock, info.addr, info.port);
          return 0;
        }
        case 3: { // connect
          var sock = getSocketFromFD(), info = getSocketAddress();
          sock.sock_ops.connect(sock, info.addr, info.port);
          return 0;
        }
        case 4: { // listen
          var sock = getSocketFromFD(), backlog = SYSCALLS.get();
          sock.sock_ops.listen(sock, backlog);
          return 0;
        }
        case 5: { // accept
          var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
          var newsock = sock.sock_ops.accept(sock);
          if (addr) {
            var res = __write_sockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport);
          }
          return newsock.stream.fd;
        }
        case 6: { // getsockname
          var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
          // TODO: sock.saddr should never be undefined, see TODO in websocket_sock_ops.getname
          var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || '0.0.0.0'), sock.sport);
          return 0;
        }
        case 7: { // getpeername
          var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
          if (!sock.daddr) {
            return -53; // The socket is not connected.
          }
          var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport);
          return 0;
        }
        case 11: { // sendto
          var sock = getSocketFromFD(), message = SYSCALLS.get(), length = SYSCALLS.get(), flags = SYSCALLS.get(), dest = getSocketAddress(true);
          if (!dest) {
            // send, no address provided
            return FS.write(sock.stream, HEAP8,message, length);
          } else {
            // sendto an address
            return sock.sock_ops.sendmsg(sock, HEAP8,message, length, dest.addr, dest.port);
          }
        }
        case 12: { // recvfrom
          var sock = getSocketFromFD(), buf = SYSCALLS.get(), len = SYSCALLS.get(), flags = SYSCALLS.get(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
          var msg = sock.sock_ops.recvmsg(sock, len);
          if (!msg) return 0; // socket is closed
          if (addr) {
            var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port);
          }
          HEAPU8.set(msg.buffer, buf);
          return msg.buffer.byteLength;
        }
        case 14: { // setsockopt
          return -50; // The option is unknown at the level indicated.
        }
        case 15: { // getsockopt
          var sock = getSocketFromFD(), level = SYSCALLS.get(), optname = SYSCALLS.get(), optval = SYSCALLS.get(), optlen = SYSCALLS.get();
          // Minimal getsockopt aimed at resolving https://github.com/emscripten-core/emscripten/issues/2211
          // so only supports SOL_SOCKET with SO_ERROR.
          if (level === 1) {
            if (optname === 4) {
              HEAP32[((optval)>>2)]=sock.error;
              HEAP32[((optlen)>>2)]=4;
              sock.error = null; // Clear the error (The SO_ERROR option obtains and then clears this field).
              return 0;
            }
          }
          return -50; // The option is unknown at the level indicated.
        }
        case 16: { // sendmsg
          var sock = getSocketFromFD(), message = SYSCALLS.get(), flags = SYSCALLS.get();
          var iov = HEAP32[(((message)+(8))>>2)];
          var num = HEAP32[(((message)+(12))>>2)];
          // read the address and port to send to
          var addr, port;
          var name = HEAP32[((message)>>2)];
          var namelen = HEAP32[(((message)+(4))>>2)];
          if (name) {
            var info = __read_sockaddr(name, namelen);
            if (info.errno) return -info.errno;
            port = info.port;
            addr = DNS.lookup_addr(info.addr) || info.addr;
          }
          // concatenate scatter-gather arrays into one message buffer
          var total = 0;
          for (var i = 0; i < num; i++) {
            total += HEAP32[(((iov)+((8 * i) + 4))>>2)];
          }
          var view = new Uint8Array(total);
          var offset = 0;
          for (var i = 0; i < num; i++) {
            var iovbase = HEAP32[(((iov)+((8 * i) + 0))>>2)];
            var iovlen = HEAP32[(((iov)+((8 * i) + 4))>>2)];
            for (var j = 0; j < iovlen; j++) {  
              view[offset++] = HEAP8[(((iovbase)+(j))>>0)];
            }
          }
          // write the buffer
          return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port);
        }
        case 17: { // recvmsg
          var sock = getSocketFromFD(), message = SYSCALLS.get(), flags = SYSCALLS.get();
          var iov = HEAP32[(((message)+(8))>>2)];
          var num = HEAP32[(((message)+(12))>>2)];
          // get the total amount of data we can read across all arrays
          var total = 0;
          for (var i = 0; i < num; i++) {
            total += HEAP32[(((iov)+((8 * i) + 4))>>2)];
          }
          // try to read total data
          var msg = sock.sock_ops.recvmsg(sock, total);
          if (!msg) return 0; // socket is closed
  
          // TODO honor flags:
          // MSG_OOB
          // Requests out-of-band data. The significance and semantics of out-of-band data are protocol-specific.
          // MSG_PEEK
          // Peeks at the incoming message.
          // MSG_WAITALL
          // Requests that the function block until the full amount of data requested can be returned. The function may return a smaller amount of data if a signal is caught, if the connection is terminated, if MSG_PEEK was specified, or if an error is pending for the socket.
  
          // write the source address out
          var name = HEAP32[((message)>>2)];
          if (name) {
            var res = __write_sockaddr(name, sock.family, DNS.lookup_name(msg.addr), msg.port);
          }
          // write the buffer out to the scatter-gather arrays
          var bytesRead = 0;
          var bytesRemaining = msg.buffer.byteLength;
          for (var i = 0; bytesRemaining > 0 && i < num; i++) {
            var iovbase = HEAP32[(((iov)+((8 * i) + 0))>>2)];
            var iovlen = HEAP32[(((iov)+((8 * i) + 4))>>2)];
            if (!iovlen) {
              continue;
            }
            var length = Math.min(iovlen, bytesRemaining);
            var buf = msg.buffer.subarray(bytesRead, bytesRead + length);
            HEAPU8.set(buf, iovbase + bytesRead);
            bytesRead += length;
            bytesRemaining -= length;
          }
  
          // TODO set msghdr.msg_flags
          // MSG_EOR
          // End of record was received (if supported by the protocol).
          // MSG_OOB
          // Out-of-band data was received.
          // MSG_TRUNC
          // Normal data was truncated.
          // MSG_CTRUNC
  
          return bytesRead;
        }
        default: {
          return -52; // unsupported feature
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall102(a0,a1
  ) {
  return ___sys_socketcall(a0,a1);
  }

  
  function ___sys_wait4(pid, wstart, options, rusage) {try {
  
      abort('cannot wait on child processes');
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall114(a0,a1,a2,a3
  ) {
  return ___sys_wait4(a0,a1,a2,a3);
  }

  
  function ___sys_chdir(path) {try {
  
      path = SYSCALLS.getStr(path);
      FS.chdir(path);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall12(a0
  ) {
  return ___sys_chdir(a0);
  }

  
  function ___sys_uname(buf) {try {
  
      if (!buf) return -21
      var layout = {"__size__":390,"sysname":0,"nodename":65,"release":130,"version":195,"machine":260,"domainname":325};
      var copyString = function(element, value) {
        var offset = layout[element];
        writeAsciiToMemory(value, buf + offset);
      };
      copyString('sysname', 'Emscripten');
      copyString('nodename', 'emscripten');
      copyString('release', '1.0');
      copyString('version', '#1');
      copyString('machine', 'x86-JS');
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall122(a0
  ) {
  return ___sys_uname(a0);
  }

  
  function ___sys__newselect(nfds, readfds, writefds, exceptfds, timeout) {try {
  
      // readfds are supported,
      // writefds checks socket open status
      // exceptfds not supported
      // timeout is always 0 - fully async
  
      var total = 0;
      
      var srcReadLow = (readfds ? HEAP32[((readfds)>>2)] : 0),
          srcReadHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0);
      var srcWriteLow = (writefds ? HEAP32[((writefds)>>2)] : 0),
          srcWriteHigh = (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0);
      var srcExceptLow = (exceptfds ? HEAP32[((exceptfds)>>2)] : 0),
          srcExceptHigh = (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
  
      var dstReadLow = 0,
          dstReadHigh = 0;
      var dstWriteLow = 0,
          dstWriteHigh = 0;
      var dstExceptLow = 0,
          dstExceptHigh = 0;
  
      var allLow = (readfds ? HEAP32[((readfds)>>2)] : 0) |
                   (writefds ? HEAP32[((writefds)>>2)] : 0) |
                   (exceptfds ? HEAP32[((exceptfds)>>2)] : 0);
      var allHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0) |
                    (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0) |
                    (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
  
      var check = function(fd, low, high, val) {
        return (fd < 32 ? (low & val) : (high & val));
      };
  
      for (var fd = 0; fd < nfds; fd++) {
        var mask = 1 << (fd % 32);
        if (!(check(fd, allLow, allHigh, mask))) {
          continue;  // index isn't in the set
        }
  
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
  
        var flags = SYSCALLS.DEFAULT_POLLMASK;
  
        if (stream.stream_ops.poll) {
          flags = stream.stream_ops.poll(stream);
        }
  
        if ((flags & 1) && check(fd, srcReadLow, srcReadHigh, mask)) {
          fd < 32 ? (dstReadLow = dstReadLow | mask) : (dstReadHigh = dstReadHigh | mask);
          total++;
        }
        if ((flags & 4) && check(fd, srcWriteLow, srcWriteHigh, mask)) {
          fd < 32 ? (dstWriteLow = dstWriteLow | mask) : (dstWriteHigh = dstWriteHigh | mask);
          total++;
        }
        if ((flags & 2) && check(fd, srcExceptLow, srcExceptHigh, mask)) {
          fd < 32 ? (dstExceptLow = dstExceptLow | mask) : (dstExceptHigh = dstExceptHigh | mask);
          total++;
        }
      }
  
      if (readfds) {
        HEAP32[((readfds)>>2)]=dstReadLow;
        HEAP32[(((readfds)+(4))>>2)]=dstReadHigh;
      }
      if (writefds) {
        HEAP32[((writefds)>>2)]=dstWriteLow;
        HEAP32[(((writefds)+(4))>>2)]=dstWriteHigh;
      }
      if (exceptfds) {
        HEAP32[((exceptfds)>>2)]=dstExceptLow;
        HEAP32[(((exceptfds)+(4))>>2)]=dstExceptHigh;
      }
      
      return total;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall142(a0,a1,a2,a3,a4
  ) {
  return ___sys__newselect(a0,a1,a2,a3,a4);
  }

  
  function ___sys_chmod(path, mode) {try {
  
      path = SYSCALLS.getStr(path);
      FS.chmod(path, mode);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall15(a0,a1
  ) {
  return ___sys_chmod(a0,a1);
  }

  
  function ___sys_mremap(old_addr, old_size, new_size, flags) {
      return -48; // never succeed
    }function ___syscall163(a0,a1,a2,a3,a4
  ) {
  return ___sys_mremap(a0,a1,a2,a3,a4);
  }

  
  function ___sys_poll(fds, nfds, timeout) {try {
  
      var nonzero = 0;
      for (var i = 0; i < nfds; i++) {
        var pollfd = fds + 8 * i;
        var fd = HEAP32[((pollfd)>>2)];
        var events = HEAP16[(((pollfd)+(4))>>1)];
        var mask = 32;
        var stream = FS.getStream(fd);
        if (stream) {
          mask = SYSCALLS.DEFAULT_POLLMASK;
          if (stream.stream_ops.poll) {
            mask = stream.stream_ops.poll(stream);
          }
        }
        mask &= events | 8 | 16;
        if (mask) nonzero++;
        HEAP16[(((pollfd)+(6))>>1)]=mask;
      }
      return nonzero;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall168(a0,a1,a2
  ) {
  return ___sys_poll(a0,a1,a2);
  }

  
  function ___sys_getcwd(buf, size) {try {
  
      if (size === 0) return -28;
      var cwd = FS.cwd();
      var cwdLengthInBytes = lengthBytesUTF8(cwd);
      if (size < cwdLengthInBytes + 1) return -68;
      stringToUTF8(cwd, buf, size);
      return buf;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall183(a0,a1
  ) {
  return ___sys_getcwd(a0,a1);
  }

  
  
  
  
   function syscallMmap2(addr, len, prot, flags, fd, off) {
      off <<= 12; // undo pgoffset
      var ptr;
      var allocated = false;
  
      // addr argument must be page aligned if MAP_FIXED flag is set.
      if ((flags & 16) !== 0 && (addr % 16384) !== 0) {
        return -28;
      }
  
      // MAP_ANONYMOUS (aka MAP_ANON) isn't actually defined by POSIX spec,
      // but it is widely used way to allocate memory pages on Linux, BSD and Mac.
      // In this case fd argument is ignored.
      if ((flags & 32) !== 0) {
        ptr = _memalign(16384, len);
        if (!ptr) return -48;
        _memset(ptr, 0, len);
        allocated = true;
      } else {
        var info = FS.getStream(fd);
        if (!info) return -8;
        var res = FS.mmap(info, addr, len, off, prot, flags);
        ptr = res.ptr;
        allocated = res.allocated;
      }
      SYSCALLS.mappings[ptr] = { malloc: ptr, len: len, allocated: allocated, fd: fd, prot: prot, flags: flags, offset: off };
      return ptr;
    }function ___sys_mmap2(addr, len, prot, flags, fd, off) {try {
  
      return syscallMmap2(addr, len, prot, flags, fd, off);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall192(a0,a1,a2,a3,a4,a5
  ) {
  return ___sys_mmap2(a0,a1,a2,a3,a4,a5);
  }

  
  function ___sys_ftruncate64(fd, zero, low, high) {try {
  
      var length = SYSCALLS.get64(low, high);
      FS.ftruncate(fd, length);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall194(a0,a1,a2,a3
  ) {
  return ___sys_ftruncate64(a0,a1,a2,a3);
  }

  
  function ___sys_stat64(path, buf) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall195(a0,a1
  ) {
  return ___sys_stat64(a0,a1);
  }

  
  function ___sys_lstat64(path, buf) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.lstat, path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall196(a0,a1
  ) {
  return ___sys_lstat64(a0,a1);
  }

  
  function ___sys_fstat64(fd, buf) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return SYSCALLS.doStat(FS.stat, stream.path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall197(a0,a1
  ) {
  return ___sys_fstat64(a0,a1);
  }

  
  function ___sys_lchown32(path, owner, group) {try {
  
      path = SYSCALLS.getStr(path);
      FS.chown(path, owner, group); // XXX we ignore the 'l' aspect, and do the same as chown
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall198(a0,a1,a2
  ) {
  return ___sys_lchown32(a0,a1,a2);
  }

  
  
  function ___sys_getegid32() {
      return 0;
    }function ___sys_getuid32(
  ) {
  return ___sys_getegid32();
  }function ___syscall199(
  ) {
  return ___sys_getuid32();
  }

  
  function ___sys_getpid() {
      return 42;
    }function ___syscall20(
  ) {
  return ___sys_getpid();
  }

  
  function ___sys_getgid32(
  ) {
  return ___sys_getegid32();
  }function ___syscall200(
  ) {
  return ___sys_getgid32();
  }

  
  function ___sys_geteuid32(
  ) {
  return ___sys_getegid32();
  }function ___syscall201(
  ) {
  return ___sys_geteuid32();
  }

  
  function ___sys_getgroups32(size, list) {
      if (size < 1) return -28;
      HEAP32[((list)>>2)]=0;
      return 1;
    }function ___syscall205(a0,a1
  ) {
  return ___sys_getgroups32(a0,a1);
  }

  
  function ___sys_fchown32(fd, owner, group) {try {
  
      FS.fchown(fd, owner, group);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall207(a0,a1,a2
  ) {
  return ___sys_fchown32(a0,a1,a2);
  }

  
  function ___sys_chown32(path, owner, group) {try {
  
      path = SYSCALLS.getStr(path);
      FS.chown(path, owner, group);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall212(a0,a1,a2
  ) {
  return ___sys_chown32(a0,a1,a2);
  }

  
  function ___sys_madvise1(addr, length, advice) {
      return 0; // advice is welcome, but ignored
    }function ___syscall219(a0,a1,a2
  ) {
  return ___sys_madvise1(a0,a1,a2);
  }

  
  function ___sys_getdents64(fd, dirp, count) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd)
      if (!stream.getdents) {
        stream.getdents = FS.readdir(stream.path);
      }
  
      var struct_size = 280;
      var pos = 0;
      var off = FS.llseek(stream, 0, 1);
  
      var idx = Math.floor(off / struct_size);
  
      while (idx < stream.getdents.length && pos + struct_size <= count) {
        var id;
        var type;
        var name = stream.getdents[idx];
        if (name[0] === '.') {
          id = 1;
          type = 4; // DT_DIR
        } else {
          var child = FS.lookupNode(stream.node, name);
          id = child.id;
          type = FS.isChrdev(child.mode) ? 2 :  // DT_CHR, character device.
                 FS.isDir(child.mode) ? 4 :     // DT_DIR, directory.
                 FS.isLink(child.mode) ? 10 :   // DT_LNK, symbolic link.
                 8;                             // DT_REG, regular file.
        }
        (tempI64 = [id>>>0,(tempDouble=id,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((dirp + pos)>>2)]=tempI64[0],HEAP32[(((dirp + pos)+(4))>>2)]=tempI64[1]);
        (tempI64 = [(idx + 1) * struct_size>>>0,(tempDouble=(idx + 1) * struct_size,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((dirp + pos)+(8))>>2)]=tempI64[0],HEAP32[(((dirp + pos)+(12))>>2)]=tempI64[1]);
        HEAP16[(((dirp + pos)+(16))>>1)]=280;
        HEAP8[(((dirp + pos)+(18))>>0)]=type;
        stringToUTF8(name, dirp + pos + 19, 256);
        pos += struct_size;
        idx += 1;
      }
      FS.llseek(stream, idx * struct_size, 0);
      return pos;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall220(a0,a1,a2
  ) {
  return ___sys_getdents64(a0,a1,a2);
  }

  
  function ___sys_fcntl64(fd, cmd, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 12:
        /* case 12: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)]=2;
          return 0;
        }
        case 13:
        case 14:
        /* case 13: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 14: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall221(a0,a1,a2
  ) {
  return ___sys_fcntl64(a0,a1,a2);
  }

  
  function ___sys_statfs64(path, size, buf) {try {
  
      path = SYSCALLS.getStr(path);
      // NOTE: None of the constants here are true. We're just returning safe and
      //       sane values.
      HEAP32[(((buf)+(4))>>2)]=4096;
      HEAP32[(((buf)+(40))>>2)]=4096;
      HEAP32[(((buf)+(8))>>2)]=1000000;
      HEAP32[(((buf)+(12))>>2)]=500000;
      HEAP32[(((buf)+(16))>>2)]=500000;
      HEAP32[(((buf)+(20))>>2)]=FS.nextInode;
      HEAP32[(((buf)+(24))>>2)]=1000000;
      HEAP32[(((buf)+(28))>>2)]=42;
      HEAP32[(((buf)+(44))>>2)]=2;  // ST_NOSUID
      HEAP32[(((buf)+(36))>>2)]=255;
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall268(a0,a1,a2
  ) {
  return ___sys_statfs64(a0,a1,a2);
  }

  
  function ___sys_read(fd, buf, count) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return FS.read(stream, HEAP8,buf, count);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall3(a0,a1,a2
  ) {
  return ___sys_read(a0,a1,a2);
  }

  
  function ___sys_access(path, amode) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doAccess(path, amode);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall33(a0,a1
  ) {
  return ___sys_access(a0,a1);
  }

  
  function ___sys_nice(inc) {
      return -63; // no meaning to nice for our single-process environment
    }function ___syscall34(a0
  ) {
  return ___sys_nice(a0);
  }

  
  function ___sys_rename(old_path, new_path) {try {
  
      old_path = SYSCALLS.getStr(old_path);
      new_path = SYSCALLS.getStr(new_path);
      FS.rename(old_path, new_path);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall38(a0,a1
  ) {
  return ___sys_rename(a0,a1);
  }

  
  function ___sys_mkdir(path, mode) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doMkdir(path, mode);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall39(a0,a1
  ) {
  return ___sys_mkdir(a0,a1);
  }

  
  function ___sys_rmdir(path) {try {
  
      path = SYSCALLS.getStr(path);
      FS.rmdir(path);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall40(a0
  ) {
  return ___sys_rmdir(a0);
  }

  
  function ___sys_dup(fd) {try {
  
      var old = SYSCALLS.getStreamFromFD(fd);
      return FS.open(old.path, old.flags, 0).fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall41(a0
  ) {
  return ___sys_dup(a0);
  }

  
  
  var PIPEFS={BUCKET_BUFFER_SIZE:8192,mount:function (mount) {
        // Do not pollute the real root directory or its child nodes with pipes
        // Looks like it is OK to create another pseudo-root node not linked to the FS.root hierarchy this way
        return FS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createPipe:function () {
        var pipe = {
          buckets: []
        };
  
        pipe.buckets.push({
          buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
          offset: 0,
          roffset: 0
        });
  
        var rName = PIPEFS.nextname();
        var wName = PIPEFS.nextname();
        var rNode = FS.createNode(PIPEFS.root, rName, 4096, 0);
        var wNode = FS.createNode(PIPEFS.root, wName, 4096, 0);
  
        rNode.pipe = pipe;
        wNode.pipe = pipe;
  
        var readableStream = FS.createStream({
          path: rName,
          node: rNode,
          flags: FS.modeStringToFlags('r'),
          seekable: false,
          stream_ops: PIPEFS.stream_ops
        });
        rNode.stream = readableStream;
  
        var writableStream = FS.createStream({
          path: wName,
          node: wNode,
          flags: FS.modeStringToFlags('w'),
          seekable: false,
          stream_ops: PIPEFS.stream_ops
        });
        wNode.stream = writableStream;
  
        return {
          readable_fd: readableStream.fd,
          writable_fd: writableStream.fd
        };
      },stream_ops:{poll:function (stream) {
          var pipe = stream.node.pipe;
  
          if ((stream.flags & 2097155) === 1) {
            return (256 | 4);
          } else {
            if (pipe.buckets.length > 0) {
              for (var i = 0; i < pipe.buckets.length; i++) {
                var bucket = pipe.buckets[i];
                if (bucket.offset - bucket.roffset > 0) {
                  return (64 | 1);
                }
              }
            }
          }
  
          return 0;
        },ioctl:function (stream, request, varargs) {
          return ERRNO_CODES.EINVAL;
        },fsync:function (stream) {
          return ERRNO_CODES.EINVAL;
        },read:function (stream, buffer, offset, length, position /* ignored */) {
          var pipe = stream.node.pipe;
          var currentLength = 0;
  
          for (var i = 0; i < pipe.buckets.length; i++) {
            var bucket = pipe.buckets[i];
            currentLength += bucket.offset - bucket.roffset;
          }
  
          assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
          var data = buffer.subarray(offset, offset + length);
  
          if (length <= 0) {
            return 0;
          }
          if (currentLength == 0) {
            // Behave as if the read end is always non-blocking
            throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
          }
          var toRead = Math.min(currentLength, length);
  
          var totalRead = toRead;
          var toRemove = 0;
  
          for (var i = 0; i < pipe.buckets.length; i++) {
            var currBucket = pipe.buckets[i];
            var bucketSize = currBucket.offset - currBucket.roffset;
  
            if (toRead <= bucketSize) {
              var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
              if (toRead < bucketSize) {
                tmpSlice = tmpSlice.subarray(0, toRead);
                currBucket.roffset += toRead;
              } else {
                toRemove++;
              }
              data.set(tmpSlice);
              break;
            } else {
              var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
              data.set(tmpSlice);
              data = data.subarray(tmpSlice.byteLength);
              toRead -= tmpSlice.byteLength;
              toRemove++;
            }
          }
  
          if (toRemove && toRemove == pipe.buckets.length) {
            // Do not generate excessive garbage in use cases such as
            // write several bytes, read everything, write several bytes, read everything...
            toRemove--;
            pipe.buckets[toRemove].offset = 0;
            pipe.buckets[toRemove].roffset = 0;
          }
  
          pipe.buckets.splice(0, toRemove);
  
          return totalRead;
        },write:function (stream, buffer, offset, length, position /* ignored */) {
          var pipe = stream.node.pipe;
  
          assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
          var data = buffer.subarray(offset, offset + length);
  
          var dataLen = data.byteLength;
          if (dataLen <= 0) {
            return 0;
          }
  
          var currBucket = null;
  
          if (pipe.buckets.length == 0) {
            currBucket = {
              buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
              offset: 0,
              roffset: 0
            };
            pipe.buckets.push(currBucket);
          } else {
            currBucket = pipe.buckets[pipe.buckets.length - 1];
          }
  
          assert(currBucket.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
  
          var freeBytesInCurrBuffer = PIPEFS.BUCKET_BUFFER_SIZE - currBucket.offset;
          if (freeBytesInCurrBuffer >= dataLen) {
            currBucket.buffer.set(data, currBucket.offset);
            currBucket.offset += dataLen;
            return dataLen;
          } else if (freeBytesInCurrBuffer > 0) {
            currBucket.buffer.set(data.subarray(0, freeBytesInCurrBuffer), currBucket.offset);
            currBucket.offset += freeBytesInCurrBuffer;
            data = data.subarray(freeBytesInCurrBuffer, data.byteLength);
          }
  
          var numBuckets = (data.byteLength / PIPEFS.BUCKET_BUFFER_SIZE) | 0;
          var remElements = data.byteLength % PIPEFS.BUCKET_BUFFER_SIZE;
  
          for (var i = 0; i < numBuckets; i++) {
            var newBucket = {
              buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
              offset: PIPEFS.BUCKET_BUFFER_SIZE,
              roffset: 0
            };
            pipe.buckets.push(newBucket);
            newBucket.buffer.set(data.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE));
            data = data.subarray(PIPEFS.BUCKET_BUFFER_SIZE, data.byteLength);
          }
  
          if (remElements > 0) {
            var newBucket = {
              buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
              offset: data.byteLength,
              roffset: 0
            };
            pipe.buckets.push(newBucket);
            newBucket.buffer.set(data);
          }
  
          return dataLen;
        },close:function (stream) {
          var pipe = stream.node.pipe;
          pipe.buckets = null;
        }},nextname:function () {
        if (!PIPEFS.nextname.current) {
          PIPEFS.nextname.current = 0;
        }
        return 'pipe[' + (PIPEFS.nextname.current++) + ']';
      }};function ___sys_pipe(fdPtr) {try {
  
      if (fdPtr == 0) {
        throw new FS.ErrnoError(21);
      }
  
      var res = PIPEFS.createPipe();
  
      HEAP32[((fdPtr)>>2)]=res.readable_fd;
      HEAP32[(((fdPtr)+(4))>>2)]=res.writable_fd;
  
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall42(a0
  ) {
  return ___sys_pipe(a0);
  }

  
  function ___sys_open(path, flags, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var pathname = SYSCALLS.getStr(path);
      var mode = SYSCALLS.get();
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall5(a0,a1,a2
  ) {
  return ___sys_open(a0,a1,a2);
  }

  
  function ___sys_ioctl(fd, op, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)]=0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall54(a0,a1,a2
  ) {
  return ___sys_ioctl(a0,a1,a2);
  }

  
  function ___sys_umask(mask) {try {
  
      var old = SYSCALLS.umask;
      SYSCALLS.umask = mask;
      return old;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall60(a0
  ) {
  return ___sys_umask(a0);
  }

  
  function ___sys_dup2(oldfd, suggestFD) {try {
  
      var old = SYSCALLS.getStreamFromFD(oldfd);
      if (old.fd === suggestFD) return suggestFD;
      return SYSCALLS.doDup(old.path, old.flags, suggestFD);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall63(a0,a1
  ) {
  return ___sys_dup2(a0,a1);
  }

  
  function ___sys_getrusage(who, usage) {try {
  
      _memset(usage, 0, 136);
      HEAP32[((usage)>>2)]=1; // fake some values
      HEAP32[(((usage)+(4))>>2)]=2;
      HEAP32[(((usage)+(8))>>2)]=3;
      HEAP32[(((usage)+(12))>>2)]=4;
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall77(a0,a1
  ) {
  return ___sys_getrusage(a0,a1);
  }

  
  function ___sys_symlink(target, linkpath) {try {
  
      target = SYSCALLS.getStr(target);
      linkpath = SYSCALLS.getStr(linkpath);
      FS.symlink(target, linkpath);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall83(a0,a1
  ) {
  return ___sys_symlink(a0,a1);
  }

  
  function ___sys_readlink(path, buf, bufsize) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doReadlink(path, buf, bufsize);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall85(a0,a1,a2
  ) {
  return ___sys_readlink(a0,a1,a2);
  }

  
  function ___sys_link(oldpath, newpath) {
      return -34; // no hardlinks for us
    }function ___syscall9(a0,a1
  ) {
  return ___sys_link(a0,a1);
  }

  
  
  function syscallMunmap(addr, len) {
      if ((addr | 0) === -1 || len === 0) {
        return -28;
      }
      // TODO: support unmmap'ing parts of allocations
      var info = SYSCALLS.mappings[addr];
      if (!info) return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        if (info.prot & 2) {
          SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
        }
        FS.munmap(stream);
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }function ___sys_munmap(addr, len) {try {
  
      return syscallMunmap(addr, len);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall91(a0,a1
  ) {
  return ___sys_munmap(a0,a1);
  }

  
  function ___sys_fchmod(fd, mode) {try {
  
      FS.fchmod(fd, mode);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }function ___syscall94(a0,a1
  ) {
  return ___sys_fchmod(a0,a1);
  }

  
  function _fd_close(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }function ___wasi_fd_close(a0
  ) {
  return _fd_close(a0);
  }

  
  function _fd_fdstat_get(fd, pbuf) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      // All character devices are terminals (other things a Linux system would
      // assume is a character device, like the mouse, we have special APIs for).
      var type = stream.tty ? 2 :
                 FS.isDir(stream.mode) ? 3 :
                 FS.isLink(stream.mode) ? 7 :
                 4;
      HEAP8[((pbuf)>>0)]=type;
      // TODO HEAP16[(((pbuf)+(2))>>1)]=?;
      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(8))>>2)]=tempI64[0],HEAP32[(((pbuf)+(12))>>2)]=tempI64[1]);
      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(16))>>2)]=tempI64[0],HEAP32[(((pbuf)+(20))>>2)]=tempI64[1]);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }function ___wasi_fd_fdstat_get(a0,a1
  ) {
  return _fd_fdstat_get(a0,a1);
  }

  
  function _fd_read(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }function ___wasi_fd_read(a0,a1,a2,a3
  ) {
  return _fd_read(a0,a1,a2,a3);
  }

  
  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)]=tempI64[0],HEAP32[(((newOffset)+(4))>>2)]=tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }function ___wasi_fd_seek(a0,a1,a2,a3,a4
  ) {
  return _fd_seek(a0,a1,a2,a3,a4);
  }

  
  function _fd_sync(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      if (stream.stream_ops && stream.stream_ops.fsync) {
        return -stream.stream_ops.fsync(stream);
      }
      return 0; // we can't do anything synchronously; the in-memory FS is already synced to
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }function ___wasi_fd_sync(a0
  ) {
  return _fd_sync(a0);
  }

  
  function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }function ___wasi_fd_write(a0,a1,a2,a3
  ) {
  return _fd_write(a0,a1,a2,a3);
  }

  
  function _exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      exit(status);
    }function __exit(a0
  ) {
  return _exit(a0);
  }

  function _abort() {
      abort();
    }

  
  var ___tm_formatted=2559792;
  
  
  function _tzset() {
      // TODO: Use (malleable) environment variables instead of system settings.
      if (_tzset.called) return;
      _tzset.called = true;
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by getTimezoneOffset().
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAP32[((__get_timezone())>>2)]=(new Date()).getTimezoneOffset() * 60;
  
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      HEAP32[((__get_daylight())>>2)]=Number(winter.getTimezoneOffset() != summer.getTimezoneOffset());
  
      function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT";
      };
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = allocateUTF8(winterName);
      var summerNamePtr = allocateUTF8(summerName);
      if (summer.getTimezoneOffset() < winter.getTimezoneOffset()) {
        // Northern hemisphere
        HEAP32[((__get_tzname())>>2)]=winterNamePtr;
        HEAP32[(((__get_tzname())+(4))>>2)]=summerNamePtr;
      } else {
        HEAP32[((__get_tzname())>>2)]=summerNamePtr;
        HEAP32[(((__get_tzname())+(4))>>2)]=winterNamePtr;
      }
    }function _mktime(tmPtr) {
      _tzset();
      var date = new Date(HEAP32[(((tmPtr)+(20))>>2)] + 1900,
                          HEAP32[(((tmPtr)+(16))>>2)],
                          HEAP32[(((tmPtr)+(12))>>2)],
                          HEAP32[(((tmPtr)+(8))>>2)],
                          HEAP32[(((tmPtr)+(4))>>2)],
                          HEAP32[((tmPtr)>>2)],
                          0);
  
      // There's an ambiguous hour when the time goes back; the tm_isdst field is
      // used to disambiguate it.  Date() basically guesses, so we fix it up if it
      // guessed wrong, or fill in tm_isdst with the guess if it's -1.
      var dst = HEAP32[(((tmPtr)+(32))>>2)];
      var guessedOffset = date.getTimezoneOffset();
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dstOffset = Math.min(winterOffset, summerOffset); // DST is in December in South
      if (dst < 0) {
        // Attention: some regions don't have DST at all.
        HEAP32[(((tmPtr)+(32))>>2)]=Number(summerOffset != winterOffset && dstOffset == guessedOffset);
      } else if ((dst > 0) != (dstOffset == guessedOffset)) {
        var nonDstOffset = Math.max(winterOffset, summerOffset);
        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
        // Don't try setMinutes(date.getMinutes() + ...) -- it's messed up.
        date.setTime(date.getTime() + (trueOffset - guessedOffset)*60000);
      }
  
      HEAP32[(((tmPtr)+(24))>>2)]=date.getDay();
      var yday = ((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)]=yday;
  
      return (date.getTime() / 1000)|0;
    }function _asctime_r(tmPtr, buf) {
      var date = {
        tm_sec: HEAP32[((tmPtr)>>2)],
        tm_min: HEAP32[(((tmPtr)+(4))>>2)],
        tm_hour: HEAP32[(((tmPtr)+(8))>>2)],
        tm_mday: HEAP32[(((tmPtr)+(12))>>2)],
        tm_mon: HEAP32[(((tmPtr)+(16))>>2)],
        tm_year: HEAP32[(((tmPtr)+(20))>>2)],
        tm_wday: HEAP32[(((tmPtr)+(24))>>2)]
      };
      var days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
      var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
      var s = days[date.tm_wday] + ' ' + months[date.tm_mon] +
          (date.tm_mday < 10 ? '  ' : ' ') + date.tm_mday +
          (date.tm_hour < 10 ? ' 0' : ' ') + date.tm_hour +
          (date.tm_min < 10 ? ':0' : ':') + date.tm_min +
          (date.tm_sec < 10 ? ':0' : ':') + date.tm_sec +
          ' ' + (1900 + date.tm_year) + "\n";
  
      // asctime_r is specced to behave in an undefined manner if the algorithm would attempt
      // to write out more than 26 bytes (including the null terminator).
      // See http://pubs.opengroup.org/onlinepubs/9699919799/functions/asctime.html
      // Our undefined behavior is to truncate the write to at most 26 bytes, including null terminator.
      stringToUTF8(s, buf, 26);
      return buf;
    }

  function _chroot(path) {
      // int chroot(const char *path);
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/chroot.html
      setErrNo(2);
      return -1;
    }


  function _difftime(time1, time0) {
      return time1 - time0;
    }

  function _dlclose(handle) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }

  function _dlerror() {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }

  function _dlopen(filename, flag) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }

  function _dlsym(handle, symbol) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }

  function _emscripten_asm_const_int() {}

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }

   

  
  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
      }
    }function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      var oldSize = _emscripten_get_heap_size();
      // With pthreads, races can happen (another thread might increase the size in between), so return a failure, and let the caller retry.
  
  
      var PAGE_MULTIPLE = 65536;
  
      // Memory resize rules:
      // 1. When resizing, always produce a resized heap that is at least 16MB (to avoid tiny heap sizes receiving lots of repeated resizes at startup)
      // 2. Always increase heap size to at least the requested size, rounded up to next page multiple.
      // 3a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap geometrically: increase the heap size according to 
      //                                         MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%),
      //                                         At most overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 3b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap linearly: increase the heap size by at least MEMORY_GROWTH_LINEAR_STEP bytes.
      // 4. Max size for the heap is capped at 2048MB-PAGE_MULTIPLE, or by MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 5. If we were unable to allocate as much memory, it may be due to over-eager decision to excessively reserve due to (3) above.
      //    Hence if an allocation fails, cut down on the amount of excess growth, in an attempt to succeed to perform a smaller allocation.
  
      var maxHeapSize = 2147483648 - PAGE_MULTIPLE;
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      var minHeapSize = 16777216;
  
      // Loop through potential heap size increases. If we attempt a too eager reservation that fails, cut down on the
      // attempted size and reserve a smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for(var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), PAGE_MULTIPLE));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    }

  function _execl(path, arg0, varArgs) {
      // int execl(const char *path, const char *arg0, ... /*, (char *)0 */);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/exec.html
      // We don't support executing external code.
      setErrNo(45);
      return -1;
    }

  function _execle(a0,a1,a2
  ) {
  return _execl(a0,a1,a2);
  }

  function _execvp(a0,a1,a2
  ) {
  return _execl(a0,a1,a2);
  }


  function _flock(fd, operation) {
      // int flock(int fd, int operation);
      // Pretend to succeed
      return 0;
    }

  function _fork() {
      // pid_t fork(void);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fork.html
      // We don't support multiple processes.
      setErrNo(6);
      return -1;
    }

  /** @type {function(...*):?} */
  function _getdtablesize(
  ) {
  err('missing function: getdtablesize'); abort(-1);
  }

  function _getenv(name) {
      // char *getenv(const char *name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/getenv.html
      if (name === 0) return 0;
      name = UTF8ToString(name);
      if (!ENV.hasOwnProperty(name)) return 0;
  
      if (_getenv.ret) _free(_getenv.ret);
      _getenv.ret = allocateUTF8(ENV[name]);
      return _getenv.ret;
    }

  function _getgrnam() { throw 'getgrnam: TODO' }

  
  function _gethostbyname(name) {
      name = UTF8ToString(name);
  
      // generate hostent
      var ret = _malloc(20); // XXX possibly leaked, as are others here
      var nameBuf = _malloc(name.length+1);
      stringToUTF8(name, nameBuf, name.length+1);
      HEAP32[((ret)>>2)]=nameBuf;
      var aliasesBuf = _malloc(4);
      HEAP32[((aliasesBuf)>>2)]=0;
      HEAP32[(((ret)+(4))>>2)]=aliasesBuf;
      var afinet = 2;
      HEAP32[(((ret)+(8))>>2)]=afinet;
      HEAP32[(((ret)+(12))>>2)]=4;
      var addrListBuf = _malloc(12);
      HEAP32[((addrListBuf)>>2)]=addrListBuf+8;
      HEAP32[(((addrListBuf)+(4))>>2)]=0;
      HEAP32[(((addrListBuf)+(8))>>2)]=__inet_pton4_raw(DNS.lookup_name(name));
      HEAP32[(((ret)+(16))>>2)]=addrListBuf;
      return ret;
    }function _gethostbyaddr(addr, addrlen, type) {
      if (type !== 2) {
        setErrNo(5);
        // TODO: set h_errno
        return null;
      }
      addr = HEAP32[((addr)>>2)]; // addr is in_addr
      var host = __inet_ntop4_raw(addr);
      var lookup = DNS.lookup_addr(host);
      if (lookup) {
        host = lookup;
      }
      var hostp = allocate(intArrayFromString(host), 'i8', ALLOC_STACK);
      return _gethostbyname(hostp);
    }

  function _gethostbyname_r(name, ret, buf, buflen, out, err) {
      var data = _gethostbyname(name);
      _memcpy(ret, data, 20);
      _free(data);
      HEAP32[((err)>>2)]=0;
      HEAP32[((out)>>2)]=ret;
      return 0;
    }

  function _getloadavg(loadavg, nelem) {
      // int getloadavg(double loadavg[], int nelem);
      // http://linux.die.net/man/3/getloadavg
      var limit = Math.min(nelem, 3);
      var doubleSize = 8;
      for (var i = 0; i < limit; i++) {
        HEAPF64[(((loadavg)+(i * doubleSize))>>3)]=0.1;
      }
      return limit;
    }

  
  
  var Protocols={list:[],map:{}};function _setprotoent(stayopen) {
      // void setprotoent(int stayopen);
  
      // Allocate and populate a protoent structure given a name, protocol number and array of aliases
      function allocprotoent(name, proto, aliases) {
        // write name into buffer
        var nameBuf = _malloc(name.length + 1);
        writeAsciiToMemory(name, nameBuf);
  
        // write aliases into buffer
        var j = 0;
        var length = aliases.length;
        var aliasListBuf = _malloc((length + 1) * 4); // Use length + 1 so we have space for the terminating NULL ptr.
  
        for (var i = 0; i < length; i++, j += 4) {
          var alias = aliases[i];
          var aliasBuf = _malloc(alias.length + 1);
          writeAsciiToMemory(alias, aliasBuf);
          HEAP32[(((aliasListBuf)+(j))>>2)]=aliasBuf;
        }
        HEAP32[(((aliasListBuf)+(j))>>2)]=0; // Terminating NULL pointer.
  
        // generate protoent
        var pe = _malloc(12);
        HEAP32[((pe)>>2)]=nameBuf;
        HEAP32[(((pe)+(4))>>2)]=aliasListBuf;
        HEAP32[(((pe)+(8))>>2)]=proto;
        return pe;
      };
  
      // Populate the protocol 'database'. The entries are limited to tcp and udp, though it is fairly trivial
      // to add extra entries from /etc/protocols if desired - though not sure if that'd actually be useful.
      var list = Protocols.list;
      var map  = Protocols.map;
      if (list.length === 0) {
          var entry = allocprotoent('tcp', 6, ['TCP']);
          list.push(entry);
          map['tcp'] = map['6'] = entry;
          entry = allocprotoent('udp', 17, ['UDP']);
          list.push(entry);
          map['udp'] = map['17'] = entry;
      }
  
      _setprotoent.index = 0;
    }function _getprotobyname(name) {
      // struct protoent *getprotobyname(const char *);
      name = UTF8ToString(name);
      _setprotoent(true);
      var result = Protocols.map[name];
      return result;
    }

  function _getprotobynumber(number) {
      // struct protoent *getprotobynumber(int proto);
      _setprotoent(true);
      var result = Protocols.map[number];
      return result;
    }

  function _getpwnam() { throw 'getpwnam: TODO' }

  function _getpwuid() { throw 'getpwuid: TODO' }

  function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[((ptr)>>2)]=(now/1000)|0; // seconds
      HEAP32[(((ptr)+(4))>>2)]=((now % 1000)*1000)|0; // microseconds
      return 0;
    }

  
  var ___tm_timezone=(stringToUTF8("GMT", 2559776, 4), 2559776);function _gmtime_r(time, tmPtr) {
      var date = new Date(HEAP32[((time)>>2)]*1000);
      HEAP32[((tmPtr)>>2)]=date.getUTCSeconds();
      HEAP32[(((tmPtr)+(4))>>2)]=date.getUTCMinutes();
      HEAP32[(((tmPtr)+(8))>>2)]=date.getUTCHours();
      HEAP32[(((tmPtr)+(12))>>2)]=date.getUTCDate();
      HEAP32[(((tmPtr)+(16))>>2)]=date.getUTCMonth();
      HEAP32[(((tmPtr)+(20))>>2)]=date.getUTCFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)]=date.getUTCDay();
      HEAP32[(((tmPtr)+(36))>>2)]=0;
      HEAP32[(((tmPtr)+(32))>>2)]=0;
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = ((date.getTime() - start) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)]=yday;
      HEAP32[(((tmPtr)+(40))>>2)]=___tm_timezone;
  
      return tmPtr;
    }

  function _kill(pid, sig) {
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/kill.html
      // Makes no sense in a single-process environment.
  	  // Should kill itself somtimes depending on `pid`
      setErrNo(ERRNO_CODES.EPERM);
      return -1;
    }

   

   

  function _llvm_bswap_i64(l, h) {
      var retl = _llvm_bswap_i32(h)>>>0;
      var reth = _llvm_bswap_i32(l)>>>0;
      return ((setTempRet0(reth),retl)|0);
    }

  
  function _llvm_log10_f32(x) {
      return Math.log(x) / Math.LN10; // TODO: Math.log10, when browser support is there
    }function _llvm_log10_f64(a0
  ) {
  return _llvm_log10_f32(a0);
  }

  function _llvm_stackrestore(p) {
      var self = _llvm_stacksave;
      var ret = self.LLVM_SAVEDSTACKS[p];
      self.LLVM_SAVEDSTACKS.splice(p, 1);
      stackRestore(ret);
    }

  function _llvm_stacksave() {
      var self = _llvm_stacksave;
      if (!self.LLVM_SAVEDSTACKS) {
        self.LLVM_SAVEDSTACKS = [];
      }
      self.LLVM_SAVEDSTACKS.push(stackSave());
      return self.LLVM_SAVEDSTACKS.length-1;
    }

  function _localtime_r(time, tmPtr) {
      _tzset();
      var date = new Date(HEAP32[((time)>>2)]*1000);
      HEAP32[((tmPtr)>>2)]=date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)]=date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)]=date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)]=date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)]=date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)]=date.getFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)]=date.getDay();
  
      var start = new Date(date.getFullYear(), 0, 1);
      var yday = ((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)]=yday;
      HEAP32[(((tmPtr)+(36))>>2)]=-(date.getTimezoneOffset() * 60);
  
      // Attention: DST is in December in South, and some regions don't have DST at all.
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
      HEAP32[(((tmPtr)+(32))>>2)]=dst;
  
      var zonePtr = HEAP32[(((__get_tzname())+(dst ? 4 : 0))>>2)];
      HEAP32[(((tmPtr)+(40))>>2)]=zonePtr;
  
      return tmPtr;
    }

  
   function _longjmp(env, value) {
      _setThrew(env, value || 1);
      throw 'longjmp';
    }

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    } 

   



  
  function _usleep(useconds) {
      // int usleep(useconds_t useconds);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/usleep.html
      // We're single-threaded, so use a busy loop. Super-ugly.
      var start = _emscripten_get_now();
      while (_emscripten_get_now() - start < useconds / 1000) {
        // Do nothing.
      }
    }
  Module["_usleep"] = _usleep;function _nanosleep(rqtp, rmtp) {
      // int nanosleep(const struct timespec  *rqtp, struct timespec *rmtp);
      if (rqtp === 0) {
        setErrNo(28);
        return -1;
      }
      var seconds = HEAP32[((rqtp)>>2)];
      var nanoseconds = HEAP32[(((rqtp)+(4))>>2)];
      if (nanoseconds < 0 || nanoseconds > 999999999 || seconds < 0) {
        setErrNo(28);
        return -1;
      }
      if (rmtp !== 0) {
        HEAP32[((rmtp)>>2)]=0;
        HEAP32[(((rmtp)+(4))>>2)]=0;
      }
      return _usleep((seconds * 1e6) + (nanoseconds / 1000));
    }

  /** @type {function(...*):?} */
  function _popen(
  ) {
  err('missing function: popen'); abort(-1);
  }

  function _pthread_create() {
      return 6;
    }

  function _pthread_join() {}

  function _pthread_mutexattr_destroy() {}

  function _pthread_mutexattr_init() {}

  function _pthread_mutexattr_settype() {}

  function _pthread_setcancelstate() { return 0; }

  function _putenv(string) {
      // int putenv(char *string);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/putenv.html
      // WARNING: According to the standard (and the glibc implementation), the
      //          string is taken by reference so future changes are reflected.
      //          We copy it instead, possibly breaking some uses.
      if (string === 0) {
        setErrNo(28);
        return -1;
      }
      string = UTF8ToString(string);
      var splitPoint = string.indexOf('=')
      if (string === '' || string.indexOf('=') === -1) {
        setErrNo(28);
        return -1;
      }
      var name = string.slice(0, splitPoint);
      var value = string.slice(splitPoint + 1);
      if (!(name in ENV) || ENV[name] !== value) {
        ENV[name] = value;
        ___buildEnvironment(__get_environ());
      }
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }

  function _setitimer() {
      throw 'setitimer() is not implemented yet';
    }

  function _sigaction(signum, act, oldact) {
      //int sigaction(int signum, const struct sigaction *act, struct sigaction *oldact);
      return 0;
    }

  function _sigaddset(set, signum) {
      HEAP32[((set)>>2)]=HEAP32[((set)>>2)]| (1 << (signum-1));
      return 0;
    }

  function _sigdelset(set, signum) {
      HEAP32[((set)>>2)]=HEAP32[((set)>>2)]& (~(1 << (signum-1)));
      return 0;
    }

  function _sigemptyset(set) {
      HEAP32[((set)>>2)]=0;
      return 0;
    }

  function _sigfillset(set) {
      HEAP32[((set)>>2)]=-1>>>0;
      return 0;
    }

  
  var __sigalrm_handler=0;function _signal(sig, func) {
      if (sig == 14 /*SIGALRM*/) {
        __sigalrm_handler = func;
      } else {
      }
      return 0;
    }

  function _sigprocmask() {
      return 0;
    }

  
  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  
  var __MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];
  
  var __MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while(days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value === 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            } else {
              return thisDate.getFullYear();
            }
          } else {
            return thisDate.getFullYear()-1;
          }
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Sunday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year+1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7-janFirst.getDay());
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Sunday?
          if (compareByDay(firstSunday, endDate) < 0) {
            // calculate difference in days between first Sunday and endDate
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstSundayUntilEndJanuary = 31-firstSunday.getDate();
            var days = firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
  
          return compareByDay(firstSunday, janFirst) === 0 ? '01': '00';
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var janFourthThisYear = new Date(date.tm_year+1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year+1901, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          var endDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            // if given date is before this years first week, then it belongs to the 53rd week of last year
            return '53';
          }
  
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            // if given date is after next years first week, then it belongs to the 01th week of next year
            return '01';
          }
  
          // given date is in between CW 01..53 of this calendar year
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year+1900) {
            // first CW of this year starts last year
            daysDifference = date.tm_yday+32-firstWeekStartThisYear.getDate()
          } else {
            // first CW of this year starts this year
            daysDifference = date.tm_yday+1-firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference/7), 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Monday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7-janFirst.getDay()+1);
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Monday?
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstMondayUntilEndJanuary = 31-firstMonday.getDate();
            var days = firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01': '00';
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }

  function _strptime(buf, format, tm) {
      // char *strptime(const char *restrict buf, const char *restrict format, struct tm *restrict tm);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strptime.html
      var pattern = UTF8ToString(format);
  
      // escape special characters
      // TODO: not sure we really need to escape all of these in JS regexps
      var SPECIAL_CHARS = '\\!@#$^&*()+=-[]/{}|:<>?,.';
      for (var i=0, ii=SPECIAL_CHARS.length; i<ii; ++i) {
        pattern = pattern.replace(new RegExp('\\'+SPECIAL_CHARS[i], 'g'), '\\'+SPECIAL_CHARS[i]);
      }
  
      // reduce number of matchers
      var EQUIVALENT_MATCHERS = {
        '%A':  '%a',
        '%B':  '%b',
        '%c':  '%a %b %d %H:%M:%S %Y',
        '%D':  '%m\\/%d\\/%y',
        '%e':  '%d',
        '%F':  '%Y-%m-%d',
        '%h':  '%b',
        '%R':  '%H\\:%M',
        '%r':  '%I\\:%M\\:%S\\s%p',
        '%T':  '%H\\:%M\\:%S',
        '%x':  '%m\\/%d\\/(?:%y|%Y)',
        '%X':  '%H\\:%M\\:%S'
      };
      for (var matcher in EQUIVALENT_MATCHERS) {
        pattern = pattern.replace(matcher, EQUIVALENT_MATCHERS[matcher]);
      }
  
      // TODO: take care of locale
  
      var DATE_PATTERNS = {
        /* weeday name */     '%a': '(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)',
        /* month name */      '%b': '(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)',
        /* century */         '%C': '\\d\\d',
        /* day of month */    '%d': '0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31',
        /* hour (24hr) */     '%H': '\\d(?!\\d)|[0,1]\\d|20|21|22|23',
        /* hour (12hr) */     '%I': '\\d(?!\\d)|0\\d|10|11|12',
        /* day of year */     '%j': '00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d',
        /* month */           '%m': '0[1-9]|[1-9](?!\\d)|10|11|12',
        /* minutes */         '%M': '0\\d|\\d(?!\\d)|[1-5]\\d',
        /* whitespace */      '%n': '\\s',
        /* AM/PM */           '%p': 'AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.',
        /* seconds */         '%S': '0\\d|\\d(?!\\d)|[1-5]\\d|60',
        /* week number */     '%U': '0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53',
        /* week number */     '%W': '0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53',
        /* weekday number */  '%w': '[0-6]',
        /* 2-digit year */    '%y': '\\d\\d',
        /* 4-digit year */    '%Y': '\\d\\d\\d\\d',
        /* % */               '%%': '%',
        /* whitespace */      '%t': '\\s',
      };
  
      var MONTH_NUMBERS = {JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11};
      var DAY_NUMBERS_SUN_FIRST = {SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6};
      var DAY_NUMBERS_MON_FIRST = {MON: 0, TUE: 1, WED: 2, THU: 3, FRI: 4, SAT: 5, SUN: 6};
  
      for (var datePattern in DATE_PATTERNS) {
        pattern = pattern.replace(datePattern, '('+datePattern+DATE_PATTERNS[datePattern]+')');
      }
  
      // take care of capturing groups
      var capture = [];
      for (var i=pattern.indexOf('%'); i>=0; i=pattern.indexOf('%')) {
        capture.push(pattern[i+1]);
        pattern = pattern.replace(new RegExp('\\%'+pattern[i+1], 'g'), '');
      }
  
      var matches = new RegExp('^'+pattern, "i").exec(UTF8ToString(buf))
      // out(UTF8ToString(buf)+ ' is matched by '+((new RegExp('^'+pattern)).source)+' into: '+JSON.stringify(matches));
  
      function initDate() {
        function fixup(value, min, max) {
          return (typeof value !== 'number' || isNaN(value)) ? min : (value>=min ? (value<=max ? value: max): min);
        };
        return {
          year: fixup(HEAP32[(((tm)+(20))>>2)] + 1900 , 1970, 9999),
          month: fixup(HEAP32[(((tm)+(16))>>2)], 0, 11),
          day: fixup(HEAP32[(((tm)+(12))>>2)], 1, 31),
          hour: fixup(HEAP32[(((tm)+(8))>>2)], 0, 23),
          min: fixup(HEAP32[(((tm)+(4))>>2)], 0, 59),
          sec: fixup(HEAP32[((tm)>>2)], 0, 59)
        };
      };
  
      if (matches) {
        var date = initDate();
        var value;
  
        var getMatch = function(symbol) {
          var pos = capture.indexOf(symbol);
          // check if symbol appears in regexp
          if (pos >= 0) {
            // return matched value or null (falsy!) for non-matches
            return matches[pos+1];
          }
          return;
        };
  
        // seconds
        if ((value=getMatch('S'))) {
          date.sec = jstoi_q(value);
        }
  
        // minutes
        if ((value=getMatch('M'))) {
          date.min = jstoi_q(value);
        }
  
        // hours
        if ((value=getMatch('H'))) {
          // 24h clock
          date.hour = jstoi_q(value);
        } else if ((value = getMatch('I'))) {
          // AM/PM clock
          var hour = jstoi_q(value);
          if ((value=getMatch('p'))) {
            hour += value.toUpperCase()[0] === 'P' ? 12 : 0;
          }
          date.hour = hour;
        }
  
        // year
        if ((value=getMatch('Y'))) {
          // parse from four-digit year
          date.year = jstoi_q(value);
        } else if ((value=getMatch('y'))) {
          // parse from two-digit year...
          var year = jstoi_q(value);
          if ((value=getMatch('C'))) {
            // ...and century
            year += jstoi_q(value)*100;
          } else {
            // ...and rule-of-thumb
            year += year<69 ? 2000 : 1900;
          }
          date.year = year;
        }
  
        // month
        if ((value=getMatch('m'))) {
          // parse from month number
          date.month = jstoi_q(value)-1;
        } else if ((value=getMatch('b'))) {
          // parse from month name
          date.month = MONTH_NUMBERS[value.substring(0,3).toUpperCase()] || 0;
          // TODO: derive month from day in year+year, week number+day of week+year
        }
  
        // day
        if ((value=getMatch('d'))) {
          // get day of month directly
          date.day = jstoi_q(value);
        } else if ((value=getMatch('j'))) {
          // get day of month from day of year ...
          var day = jstoi_q(value);
          var leapYear = __isLeapYear(date.year);
          for (var month=0; month<12; ++month) {
            var daysUntilMonth = __arraySum(leapYear ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, month-1);
            if (day<=daysUntilMonth+(leapYear ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[month]) {
              date.day = day-daysUntilMonth;
            }
          }
        } else if ((value=getMatch('a'))) {
          // get day of month from weekday ...
          var weekDay = value.substring(0,3).toUpperCase();
          if ((value=getMatch('U'))) {
            // ... and week number (Sunday being first day of week)
            // Week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
            // All days in a new year preceding the first Sunday are considered to be in week 0.
            var weekDayNumber = DAY_NUMBERS_SUN_FIRST[weekDay];
            var weekNumber = jstoi_q(value);
  
            // January 1st
            var janFirst = new Date(date.year, 0, 1);
            var endDate;
            if (janFirst.getDay() === 0) {
              // Jan 1st is a Sunday, and, hence in the 1st CW
              endDate = __addDays(janFirst, weekDayNumber+7*(weekNumber-1));
            } else {
              // Jan 1st is not a Sunday, and, hence still in the 0th CW
              endDate = __addDays(janFirst, 7-janFirst.getDay()+weekDayNumber+7*(weekNumber-1));
            }
            date.day = endDate.getDate();
            date.month = endDate.getMonth();
          } else if ((value=getMatch('W'))) {
            // ... and week number (Monday being first day of week)
            // Week number of the year (Monday as the first day of the week) as a decimal number [00,53].
            // All days in a new year preceding the first Monday are considered to be in week 0.
            var weekDayNumber = DAY_NUMBERS_MON_FIRST[weekDay];
            var weekNumber = jstoi_q(value);
  
            // January 1st
            var janFirst = new Date(date.year, 0, 1);
            var endDate;
            if (janFirst.getDay()===1) {
              // Jan 1st is a Monday, and, hence in the 1st CW
               endDate = __addDays(janFirst, weekDayNumber+7*(weekNumber-1));
            } else {
              // Jan 1st is not a Monday, and, hence still in the 0th CW
              endDate = __addDays(janFirst, 7-janFirst.getDay()+1+weekDayNumber+7*(weekNumber-1));
            }
  
            date.day = endDate.getDate();
            date.month = endDate.getMonth();
          }
        }
  
        /*
        tm_sec  int seconds after the minute  0-61*
        tm_min  int minutes after the hour  0-59
        tm_hour int hours since midnight  0-23
        tm_mday int day of the month  1-31
        tm_mon  int months since January  0-11
        tm_year int years since 1900
        tm_wday int days since Sunday 0-6
        tm_yday int days since January 1  0-365
        tm_isdst  int Daylight Saving Time flag
        */
  
        var fullDate = new Date(date.year, date.month, date.day, date.hour, date.min, date.sec, 0);
        HEAP32[((tm)>>2)]=fullDate.getSeconds();
        HEAP32[(((tm)+(4))>>2)]=fullDate.getMinutes();
        HEAP32[(((tm)+(8))>>2)]=fullDate.getHours();
        HEAP32[(((tm)+(12))>>2)]=fullDate.getDate();
        HEAP32[(((tm)+(16))>>2)]=fullDate.getMonth();
        HEAP32[(((tm)+(20))>>2)]=fullDate.getFullYear()-1900;
        HEAP32[(((tm)+(24))>>2)]=fullDate.getDay();
        HEAP32[(((tm)+(28))>>2)]=__arraySum(__isLeapYear(fullDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, fullDate.getMonth()-1)+fullDate.getDate()-1;
        HEAP32[(((tm)+(32))>>2)]=0;
  
        // we need to convert the matched sequence into an integer array to take care of UTF-8 characters > 0x7F
        // TODO: not sure that intArrayFromString handles all unicode characters correctly
        return buf+intArrayFromString(matches[0]).length-1;
      }
  
      return 0;
    }

  function _sysconf(name) {
      // long sysconf(int name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
      switch(name) {
        case 30: return 16384;
        case 85:
          var maxHeapSize = 4*1024*1024*1024;
          return maxHeapSize / 16384;
        case 132:
        case 133:
        case 12:
        case 137:
        case 138:
        case 15:
        case 235:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 149:
        case 13:
        case 10:
        case 236:
        case 153:
        case 9:
        case 21:
        case 22:
        case 159:
        case 154:
        case 14:
        case 77:
        case 78:
        case 139:
        case 80:
        case 81:
        case 82:
        case 68:
        case 67:
        case 164:
        case 11:
        case 29:
        case 47:
        case 48:
        case 95:
        case 52:
        case 51:
        case 46:
        case 79:
          return 200809;
        case 27:
        case 246:
        case 127:
        case 128:
        case 23:
        case 24:
        case 160:
        case 161:
        case 181:
        case 182:
        case 242:
        case 183:
        case 184:
        case 243:
        case 244:
        case 245:
        case 165:
        case 178:
        case 179:
        case 49:
        case 50:
        case 168:
        case 169:
        case 175:
        case 170:
        case 171:
        case 172:
        case 97:
        case 76:
        case 32:
        case 173:
        case 35:
          return -1;
        case 176:
        case 177:
        case 7:
        case 155:
        case 8:
        case 157:
        case 125:
        case 126:
        case 92:
        case 93:
        case 129:
        case 130:
        case 131:
        case 94:
        case 91:
          return 1;
        case 74:
        case 60:
        case 69:
        case 70:
        case 4:
          return 1024;
        case 31:
        case 42:
        case 72:
          return 32;
        case 87:
        case 26:
        case 33:
          return 2147483647;
        case 34:
        case 1:
          return 47839;
        case 38:
        case 36:
          return 99;
        case 43:
        case 37:
          return 2048;
        case 0: return 2097152;
        case 3: return 65536;
        case 28: return 32768;
        case 44: return 32767;
        case 75: return 16384;
        case 39: return 1000;
        case 89: return 700;
        case 71: return 256;
        case 40: return 255;
        case 2: return 100;
        case 180: return 64;
        case 25: return 20;
        case 5: return 16;
        case 6: return 6;
        case 73: return 4;
        case 84: {
          if (typeof navigator === 'object') return navigator['hardwareConcurrency'] || 1;
          return 1;
        }
      }
      setErrNo(28);
      return -1;
    }

  function _time(ptr) {
      var ret = (Date.now()/1000)|0;
      if (ptr) {
        HEAP32[((ptr)>>2)]=ret;
      }
      return ret;
    }


  function _unsetenv(name) {
      // int unsetenv(const char *name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/unsetenv.html
      if (name === 0) {
        setErrNo(28);
        return -1;
      }
      name = UTF8ToString(name);
      if (name === '' || name.indexOf('=') !== -1) {
        setErrNo(28);
        return -1;
      }
      if (ENV.hasOwnProperty(name)) {
        delete ENV[name];
        ___buildEnvironment(__get_environ());
      }
      return 0;
    }


  function _utime(path, times) {
      // int utime(const char *path, const struct utimbuf *times);
      // http://pubs.opengroup.org/onlinepubs/009695399/basedefs/utime.h.html
      var time;
      if (times) {
        // NOTE: We don't keep track of access timestamps.
        var offset = 4;
        time = HEAP32[(((times)+(offset))>>2)];
        time *= 1000;
      } else {
        time = Date.now();
      }
      path = UTF8ToString(path);
      try {
        FS.utime(path, time, time);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }

  
  function _wait(stat_loc) {
      // pid_t wait(int *stat_loc);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/wait.html
      // Makes no sense in a single-process environment.
      setErrNo(12);
      return -1;
    }function _waitpid(a0
  ) {
  return _wait(a0);
  }

  
  var __readAsmConstArgsArray=[];function readAsmConstArgs(sigPtr, buf) {
      __readAsmConstArgsArray.length = 0;
      var ch;
      buf >>= 2; // Align buf up front to index Int32Array (HEAP32)
      while (ch = HEAPU8[sigPtr++]) {
        __readAsmConstArgsArray.push(ch < 105 ? HEAPF64[++buf >> 1] : HEAP32[buf]);
        ++buf;
      }
      return __readAsmConstArgsArray;
    }

var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();Module["FS_createFolder"] = FS.createFolder;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createLink"] = FS.createLink;Module["FS_createDevice"] = FS.createDevice;Module["FS_unlink"] = FS.unlink;;
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// ASM_LIBRARY EXTERN PRIMITIVES: Int8Array,Int32Array


function invoke_i(index) {
  var sp = stackSave();
  try {
    return dynCall_i(index);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return dynCall_ii(index,a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return dynCall_iii(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_iiii(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_iiiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    dynCall_v(index);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    dynCall_vi(index,a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    dynCall_vii(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viidii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_viidii(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    dynCall_viii(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_viiiii(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

var asmGlobalArg = {};

var asmLibraryArg = { "___assert_fail": ___assert_fail, "___buildEnvironment": ___buildEnvironment, "___clock_gettime": ___clock_gettime, "___map_file": ___map_file, "___sys__newselect": ___sys__newselect, "___sys_access": ___sys_access, "___sys_chdir": ___sys_chdir, "___sys_chmod": ___sys_chmod, "___sys_chown32": ___sys_chown32, "___sys_dup": ___sys_dup, "___sys_dup2": ___sys_dup2, "___sys_fchmod": ___sys_fchmod, "___sys_fchown32": ___sys_fchown32, "___sys_fcntl64": ___sys_fcntl64, "___sys_fstat64": ___sys_fstat64, "___sys_ftruncate64": ___sys_ftruncate64, "___sys_getcwd": ___sys_getcwd, "___sys_getdents64": ___sys_getdents64, "___sys_getegid32": ___sys_getegid32, "___sys_geteuid32": ___sys_geteuid32, "___sys_getgid32": ___sys_getgid32, "___sys_getgroups32": ___sys_getgroups32, "___sys_getpid": ___sys_getpid, "___sys_getrusage": ___sys_getrusage, "___sys_getuid32": ___sys_getuid32, "___sys_ioctl": ___sys_ioctl, "___sys_lchown32": ___sys_lchown32, "___sys_link": ___sys_link, "___sys_lstat64": ___sys_lstat64, "___sys_madvise1": ___sys_madvise1, "___sys_mkdir": ___sys_mkdir, "___sys_mmap2": ___sys_mmap2, "___sys_mremap": ___sys_mremap, "___sys_munmap": ___sys_munmap, "___sys_nice": ___sys_nice, "___sys_open": ___sys_open, "___sys_pipe": ___sys_pipe, "___sys_poll": ___sys_poll, "___sys_read": ___sys_read, "___sys_readlink": ___sys_readlink, "___sys_rename": ___sys_rename, "___sys_rmdir": ___sys_rmdir, "___sys_socketcall": ___sys_socketcall, "___sys_stat64": ___sys_stat64, "___sys_statfs64": ___sys_statfs64, "___sys_symlink": ___sys_symlink, "___sys_umask": ___sys_umask, "___sys_uname": ___sys_uname, "___sys_unlink": ___sys_unlink, "___sys_wait4": ___sys_wait4, "___syscall10": ___syscall10, "___syscall102": ___syscall102, "___syscall114": ___syscall114, "___syscall12": ___syscall12, "___syscall122": ___syscall122, "___syscall142": ___syscall142, "___syscall15": ___syscall15, "___syscall163": ___syscall163, "___syscall168": ___syscall168, "___syscall183": ___syscall183, "___syscall192": ___syscall192, "___syscall194": ___syscall194, "___syscall195": ___syscall195, "___syscall196": ___syscall196, "___syscall197": ___syscall197, "___syscall198": ___syscall198, "___syscall199": ___syscall199, "___syscall20": ___syscall20, "___syscall200": ___syscall200, "___syscall201": ___syscall201, "___syscall205": ___syscall205, "___syscall207": ___syscall207, "___syscall212": ___syscall212, "___syscall219": ___syscall219, "___syscall220": ___syscall220, "___syscall221": ___syscall221, "___syscall268": ___syscall268, "___syscall3": ___syscall3, "___syscall33": ___syscall33, "___syscall34": ___syscall34, "___syscall38": ___syscall38, "___syscall39": ___syscall39, "___syscall40": ___syscall40, "___syscall41": ___syscall41, "___syscall42": ___syscall42, "___syscall5": ___syscall5, "___syscall54": ___syscall54, "___syscall60": ___syscall60, "___syscall63": ___syscall63, "___syscall77": ___syscall77, "___syscall83": ___syscall83, "___syscall85": ___syscall85, "___syscall9": ___syscall9, "___syscall91": ___syscall91, "___syscall94": ___syscall94, "___wasi_fd_close": ___wasi_fd_close, "___wasi_fd_fdstat_get": ___wasi_fd_fdstat_get, "___wasi_fd_read": ___wasi_fd_read, "___wasi_fd_seek": ___wasi_fd_seek, "___wasi_fd_sync": ___wasi_fd_sync, "___wasi_fd_write": ___wasi_fd_write, "__addDays": __addDays, "__arraySum": __arraySum, "__exit": __exit, "__getExecutableName": __getExecutableName, "__inet_ntop4_raw": __inet_ntop4_raw, "__inet_ntop6_raw": __inet_ntop6_raw, "__inet_pton4_raw": __inet_pton4_raw, "__inet_pton6_raw": __inet_pton6_raw, "__isLeapYear": __isLeapYear, "__memory_base": 1024, "__read_sockaddr": __read_sockaddr, "__table_base": 0, "__write_sockaddr": __write_sockaddr, "_abort": _abort, "_asctime_r": _asctime_r, "_chroot": _chroot, "_clock_gettime": _clock_gettime, "_difftime": _difftime, "_dlclose": _dlclose, "_dlerror": _dlerror, "_dlopen": _dlopen, "_dlsym": _dlsym, "_emscripten_asm_const_ii": _emscripten_asm_const_ii, "_emscripten_asm_const_iii": _emscripten_asm_const_iii, "_emscripten_asm_const_iiii": _emscripten_asm_const_iiii, "_emscripten_asm_const_int": _emscripten_asm_const_int, "_emscripten_get_heap_size": _emscripten_get_heap_size, "_emscripten_get_now": _emscripten_get_now, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_emscripten_resize_heap": _emscripten_resize_heap, "_execl": _execl, "_execle": _execle, "_execvp": _execvp, "_exit": _exit, "_fd_close": _fd_close, "_fd_fdstat_get": _fd_fdstat_get, "_fd_read": _fd_read, "_fd_seek": _fd_seek, "_fd_sync": _fd_sync, "_fd_write": _fd_write, "_flock": _flock, "_fork": _fork, "_getdtablesize": _getdtablesize, "_getenv": _getenv, "_getgrnam": _getgrnam, "_gethostbyaddr": _gethostbyaddr, "_gethostbyname": _gethostbyname, "_gethostbyname_r": _gethostbyname_r, "_getloadavg": _getloadavg, "_getprotobyname": _getprotobyname, "_getprotobynumber": _getprotobynumber, "_getpwnam": _getpwnam, "_getpwuid": _getpwuid, "_gettimeofday": _gettimeofday, "_gmtime_r": _gmtime_r, "_kill": _kill, "_llvm_bswap_i64": _llvm_bswap_i64, "_llvm_log10_f32": _llvm_log10_f32, "_llvm_log10_f64": _llvm_log10_f64, "_llvm_stackrestore": _llvm_stackrestore, "_llvm_stacksave": _llvm_stacksave, "_localtime_r": _localtime_r, "_longjmp": _longjmp, "_mktime": _mktime, "_nanosleep": _nanosleep, "_popen": _popen, "_pthread_create": _pthread_create, "_pthread_join": _pthread_join, "_pthread_mutexattr_destroy": _pthread_mutexattr_destroy, "_pthread_mutexattr_init": _pthread_mutexattr_init, "_pthread_mutexattr_settype": _pthread_mutexattr_settype, "_pthread_setcancelstate": _pthread_setcancelstate, "_putenv": _putenv, "_setTempRet0": _setTempRet0, "_setitimer": _setitimer, "_setprotoent": _setprotoent, "_sigaction": _sigaction, "_sigaddset": _sigaddset, "_sigdelset": _sigdelset, "_sigemptyset": _sigemptyset, "_sigfillset": _sigfillset, "_signal": _signal, "_sigprocmask": _sigprocmask, "_strftime": _strftime, "_strptime": _strptime, "_sysconf": _sysconf, "_time": _time, "_tzset": _tzset, "_unsetenv": _unsetenv, "_usleep": _usleep, "_utime": _utime, "_wait": _wait, "_waitpid": _waitpid, "abort": abort, "getTempRet0": getTempRet0, "invoke_i": invoke_i, "invoke_ii": invoke_ii, "invoke_iii": invoke_iii, "invoke_iiii": invoke_iiii, "invoke_iiiii": invoke_iiiii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_v": invoke_v, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viidii": invoke_viidii, "invoke_viii": invoke_viii, "invoke_viiii": invoke_viiii, "invoke_viiiii": invoke_viiiii, "invoke_viiiiii": invoke_viiiiii, "memory": wasmMemory, "setTempRet0": setTempRet0, "table": wasmTable, "tempDoublePtr": tempDoublePtr };
// EMSCRIPTEN_START_ASM
var asm =Module["asm"]// EMSCRIPTEN_END_ASM
(asmGlobalArg, asmLibraryArg, buffer);

/** @type {function(...*):?} */
var ___emscripten_environ_constructor = Module["___emscripten_environ_constructor"] = function() {
  return (___emscripten_environ_constructor = Module["___emscripten_environ_constructor"] = Module["asm"]["___emscripten_environ_constructor"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = function() {
  return (___errno_location = Module["___errno_location"] = Module["asm"]["___errno_location"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __get_daylight = Module["__get_daylight"] = function() {
  return (__get_daylight = Module["__get_daylight"] = Module["asm"]["__get_daylight"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __get_environ = Module["__get_environ"] = function() {
  return (__get_environ = Module["__get_environ"] = Module["asm"]["__get_environ"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __get_timezone = Module["__get_timezone"] = function() {
  return (__get_timezone = Module["__get_timezone"] = Module["asm"]["__get_timezone"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __get_tzname = Module["__get_tzname"] = function() {
  return (__get_tzname = Module["__get_tzname"] = Module["asm"]["__get_tzname"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _del_callback = Module["_del_callback"] = function() {
  return (_del_callback = Module["_del_callback"] = Module["asm"]["_del_callback"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_get_sbrk_ptr = Module["_emscripten_get_sbrk_ptr"] = function() {
  return (_emscripten_get_sbrk_ptr = Module["_emscripten_get_sbrk_ptr"] = Module["asm"]["_emscripten_get_sbrk_ptr"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = function() {
  return (_emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = Module["asm"]["_emscripten_main_thread_process_queued_calls"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_replace_memory = Module["_emscripten_replace_memory"] = function() {
  return (_emscripten_replace_memory = Module["_emscripten_replace_memory"] = Module["asm"]["_emscripten_replace_memory"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _exec_callback = Module["_exec_callback"] = function() {
  return (_exec_callback = Module["_exec_callback"] = Module["asm"]["_exec_callback"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _free = Module["_free"] = function() {
  return (_free = Module["_free"] = Module["asm"]["_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htonl = Module["_htonl"] = function() {
  return (_htonl = Module["_htonl"] = Module["asm"]["_htonl"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htons = Module["_htons"] = function() {
  return (_htons = Module["_htons"] = Module["asm"]["_htons"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _llvm_bswap_i16 = Module["_llvm_bswap_i16"] = function() {
  return (_llvm_bswap_i16 = Module["_llvm_bswap_i16"] = Module["asm"]["_llvm_bswap_i16"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _llvm_bswap_i32 = Module["_llvm_bswap_i32"] = function() {
  return (_llvm_bswap_i32 = Module["_llvm_bswap_i32"] = Module["asm"]["_llvm_bswap_i32"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _main = Module["_main"] = function() {
  return (_main = Module["_main"] = Module["asm"]["_main"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = function() {
  return (_malloc = Module["_malloc"] = Module["asm"]["_malloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _memalign = Module["_memalign"] = function() {
  return (_memalign = Module["_memalign"] = Module["asm"]["_memalign"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _memcpy = Module["_memcpy"] = function() {
  return (_memcpy = Module["_memcpy"] = Module["asm"]["_memcpy"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _memmove = Module["_memmove"] = function() {
  return (_memmove = Module["_memmove"] = Module["asm"]["_memmove"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _memset = Module["_memset"] = function() {
  return (_memset = Module["_memset"] = Module["asm"]["_memset"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ntohs = Module["_ntohs"] = function() {
  return (_ntohs = Module["_ntohs"] = Module["asm"]["_ntohs"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _php_embed_init = Module["_php_embed_init"] = function() {
  return (_php_embed_init = Module["_php_embed_init"] = Module["asm"]["_php_embed_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _php_embed_shutdown = Module["_php_embed_shutdown"] = function() {
  return (_php_embed_shutdown = Module["_php_embed_shutdown"] = Module["asm"]["_php_embed_shutdown"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _pib_destroy = Module["_pib_destroy"] = function() {
  return (_pib_destroy = Module["_pib_destroy"] = Module["asm"]["_pib_destroy"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _pib_exec = Module["_pib_exec"] = function() {
  return (_pib_exec = Module["_pib_exec"] = Module["asm"]["_pib_exec"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _pib_init = Module["_pib_init"] = function() {
  return (_pib_init = Module["_pib_init"] = Module["asm"]["_pib_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _pib_refresh = Module["_pib_refresh"] = function() {
  return (_pib_refresh = Module["_pib_refresh"] = Module["asm"]["_pib_refresh"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _pib_run = Module["_pib_run"] = function() {
  return (_pib_run = Module["_pib_run"] = Module["asm"]["_pib_run"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _realloc = Module["_realloc"] = function() {
  return (_realloc = Module["_realloc"] = Module["asm"]["_realloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _saveSetjmp = Module["_saveSetjmp"] = function() {
  return (_saveSetjmp = Module["_saveSetjmp"] = Module["asm"]["_saveSetjmp"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = function() {
  return (_setThrew = Module["_setThrew"] = Module["asm"]["_setThrew"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _testSetjmp = Module["_testSetjmp"] = function() {
  return (_testSetjmp = Module["_testSetjmp"] = Module["asm"]["_testSetjmp"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _zend_eval_string = Module["_zend_eval_string"] = function() {
  return (_zend_eval_string = Module["_zend_eval_string"] = Module["asm"]["_zend_eval_string"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = function() {
  return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = function() {
  return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = function() {
  return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_d = Module["dynCall_d"] = function() {
  return (dynCall_d = Module["dynCall_d"] = Module["asm"]["dynCall_d"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_di = Module["dynCall_di"] = function() {
  return (dynCall_di = Module["dynCall_di"] = Module["asm"]["dynCall_di"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_dii = Module["dynCall_dii"] = function() {
  return (dynCall_dii = Module["dynCall_dii"] = Module["asm"]["dynCall_dii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_i = Module["dynCall_i"] = function() {
  return (dynCall_i = Module["dynCall_i"] = Module["asm"]["dynCall_i"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ii = Module["dynCall_ii"] = function() {
  return (dynCall_ii = Module["dynCall_ii"] = Module["asm"]["dynCall_ii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iidiiii = Module["dynCall_iidiiii"] = function() {
  return (dynCall_iidiiii = Module["dynCall_iidiiii"] = Module["asm"]["dynCall_iidiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iii = Module["dynCall_iii"] = function() {
  return (dynCall_iii = Module["dynCall_iii"] = Module["asm"]["dynCall_iii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiid = Module["dynCall_iiid"] = function() {
  return (dynCall_iiid = Module["dynCall_iiid"] = Module["asm"]["dynCall_iiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiii = Module["dynCall_iiii"] = function() {
  return (dynCall_iiii = Module["dynCall_iiii"] = Module["asm"]["dynCall_iiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiii = Module["dynCall_iiiii"] = function() {
  return (dynCall_iiiii = Module["dynCall_iiiii"] = Module["asm"]["dynCall_iiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiii = Module["dynCall_iiiiii"] = function() {
  return (dynCall_iiiiii = Module["dynCall_iiiiii"] = Module["asm"]["dynCall_iiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = function() {
  return (dynCall_iiiiiii = Module["dynCall_iiiiiii"] = Module["asm"]["dynCall_iiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = function() {
  return (dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = Module["asm"]["dynCall_iiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = function() {
  return (dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = function() {
  return (dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = function() {
  return (dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiij = Module["dynCall_iiiiiij"] = function() {
  return (dynCall_iiiiiij = Module["dynCall_iiiiiij"] = Module["asm"]["dynCall_iiiiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiijii = Module["dynCall_iiiiijii"] = function() {
  return (dynCall_iiiiijii = Module["dynCall_iiiiijii"] = Module["asm"]["dynCall_iiiiijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiij = Module["dynCall_iiiij"] = function() {
  return (dynCall_iiiij = Module["dynCall_iiiij"] = Module["asm"]["dynCall_iiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiji = Module["dynCall_iiiiji"] = function() {
  return (dynCall_iiiiji = Module["dynCall_iiiiji"] = Module["asm"]["dynCall_iiiiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiijii = Module["dynCall_iiiijii"] = function() {
  return (dynCall_iiiijii = Module["dynCall_iiiijii"] = Module["asm"]["dynCall_iiiijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiij = Module["dynCall_iiij"] = function() {
  return (dynCall_iiij = Module["dynCall_iiij"] = Module["asm"]["dynCall_iiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iij = Module["dynCall_iij"] = function() {
  return (dynCall_iij = Module["dynCall_iij"] = Module["asm"]["dynCall_iij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiji = Module["dynCall_iiji"] = function() {
  return (dynCall_iiji = Module["dynCall_iiji"] = Module["asm"]["dynCall_iiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iijii = Module["dynCall_iijii"] = function() {
  return (dynCall_iijii = Module["dynCall_iijii"] = Module["asm"]["dynCall_iijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ij = Module["dynCall_ij"] = function() {
  return (dynCall_ij = Module["dynCall_ij"] = Module["asm"]["dynCall_ij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_j = Module["dynCall_j"] = function() {
  return (dynCall_j = Module["dynCall_j"] = Module["asm"]["dynCall_j"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ji = Module["dynCall_ji"] = function() {
  return (dynCall_ji = Module["dynCall_ji"] = Module["asm"]["dynCall_ji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jii = Module["dynCall_jii"] = function() {
  return (dynCall_jii = Module["dynCall_jii"] = Module["asm"]["dynCall_jii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiij = Module["dynCall_jiij"] = function() {
  return (dynCall_jiij = Module["dynCall_jiij"] = Module["asm"]["dynCall_jiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = function() {
  return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jj = Module["dynCall_jj"] = function() {
  return (dynCall_jj = Module["dynCall_jj"] = Module["asm"]["dynCall_jj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_v = Module["dynCall_v"] = function() {
  return (dynCall_v = Module["dynCall_v"] = Module["asm"]["dynCall_v"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vi = Module["dynCall_vi"] = function() {
  return (dynCall_vi = Module["dynCall_vi"] = Module["asm"]["dynCall_vi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vid = Module["dynCall_vid"] = function() {
  return (dynCall_vid = Module["dynCall_vid"] = Module["asm"]["dynCall_vid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vii = Module["dynCall_vii"] = function() {
  return (dynCall_vii = Module["dynCall_vii"] = Module["asm"]["dynCall_vii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viidii = Module["dynCall_viidii"] = function() {
  return (dynCall_viidii = Module["dynCall_viidii"] = Module["asm"]["dynCall_viidii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viii = Module["dynCall_viii"] = function() {
  return (dynCall_viii = Module["dynCall_viii"] = Module["asm"]["dynCall_viii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiii = Module["dynCall_viiii"] = function() {
  return (dynCall_viiii = Module["dynCall_viiii"] = Module["asm"]["dynCall_viiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiii = Module["dynCall_viiiii"] = function() {
  return (dynCall_viiiii = Module["dynCall_viiiii"] = Module["asm"]["dynCall_viiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiii = Module["dynCall_viiiiii"] = function() {
  return (dynCall_viiiiii = Module["dynCall_viiiiii"] = Module["asm"]["dynCall_viiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = function() {
  return (dynCall_viiiiiii = Module["dynCall_viiiiiii"] = Module["asm"]["dynCall_viiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = function() {
  return (dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = Module["asm"]["dynCall_viiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = function() {
  return (dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiij = Module["dynCall_viiiij"] = function() {
  return (dynCall_viiiij = Module["dynCall_viiiij"] = Module["asm"]["dynCall_viiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viij = Module["dynCall_viij"] = function() {
  return (dynCall_viij = Module["dynCall_viij"] = Module["asm"]["dynCall_viij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiji = Module["dynCall_viiji"] = function() {
  return (dynCall_viiji = Module["dynCall_viiji"] = Module["asm"]["dynCall_viiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viijii = Module["dynCall_viijii"] = function() {
  return (dynCall_viijii = Module["dynCall_viijii"] = Module["asm"]["dynCall_viijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vij = Module["dynCall_vij"] = function() {
  return (dynCall_vij = Module["dynCall_vij"] = Module["asm"]["dynCall_vij"]).apply(null, arguments);
};
;




// === Auto-generated postamble setup entry stuff ===




Module["ccall"] = ccall;




Module["getMemory"] = getMemory;

Module["UTF8ToString"] = UTF8ToString;


Module["lengthBytesUTF8"] = lengthBytesUTF8;









Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
Module["FS_createFolder"] = FS.createFolder;
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createLink"] = FS.createLink;
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;










































































































var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;


dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function callMain(args) {

  var entryFunction = Module['_main'];


  args = args || [];

  var argc = args.length+1;
  var argv = stackAlloc((argc + 1) * 4);
  HEAP32[argv >> 2] = allocateUTF8OnStack(thisProgram);
  for (var i = 1; i < argc; i++) {
    HEAP32[(argv >> 2) + i] = allocateUTF8OnStack(args[i - 1]);
  }
  HEAP32[(argv >> 2) + argc] = 0;

  try {


    var ret = entryFunction(argc, argv);


    // In PROXY_TO_PTHREAD builds, we should never exit the runtime below, as execution is asynchronously handed
    // off to a pthread.
    // if we're not running an evented main loop, it's time to exit
      exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'unwind') {
      // running an evented main loop, don't immediately exit
      noExitRuntime = true;
      return;
    } else {
      var toLog = e;
      if (e && typeof e === 'object' && e.stack) {
        toLog = [e, e.stack];
      }
      err('exception thrown: ' + toLog);
      quit_(1, e);
    }
  } finally {
    calledMain = true;
  }
}




/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }


  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (shouldRunNow) callMain(args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;


/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    ABORT = true;
    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = false;

if (Module['noInitialRun']) shouldRunNow = false;


  noExitRuntime = true;

run();






// {{MODULE_ADDITIONS}}





  return PHP.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = PHP;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return PHP; });
    else if (typeof exports === 'object')
      exports["PHP"] = PHP;
    