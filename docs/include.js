(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    var val = aliases[name];
    return (val && name !== val) ? expandAlias(val) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("drupal-init.php", function(exports, require, module) {
module.exports = "<?php\n\nini_set('session.save_path', '/home/web_user');\n\n$stdErr = fopen('php://stderr', 'w');\n$errors = [];\n\nregister_shutdown_function(function() use($stdErr, &$errors){\n    fwrite($stdErr, json_encode(['session_id' => session_id()]) . \"\\n\");\n    fwrite($stdErr, print_r($errors,1));\n    fwrite($stdErr, print_r(error_get_last(),1));\n});\n\nset_error_handler(function(...$args) use($stdErr, &$errors){\n\tfwrite($stdErr, print_r($args,1));\n});\n\n$origin  = 'http://localhost:3333';\n$docroot = '/php-wasm/preload/drupal-7.59';\n$path    = '/';\n$script  = 'index.php';\n\n$_SERVER['REQUEST_URI']     = $docroot . $path;\n$_SERVER['REMOTE_ADDR']     = '127.0.0.1';\n$_SERVER['SERVER_NAME']     = $origin;\n$_SERVER['SERVER_PORT']     = 3333;\n$_SERVER['REQUEST_METHOD']  = 'GET';\n$_SERVER['SCRIPT_FILENAME'] = $docroot . '/' . $script;\n$_SERVER['SCRIPT_NAME']     = $docroot . '/' . $script;\n$_SERVER['PHP_SELF']        = $docroot . '/' . $script;\n\nchdir($docroot);\n\nrequire $script;\n"
});

;require.register("drupal-request.php", function(exports, require, module) {
module.exports = "<?php\nini_set('session.save_path', '/home/web_user');\nsession_start();\nsession_id('${session_id}');\n\n$stdErr = fopen('php://stderr', 'w');\n$errors = [];\n\nregister_shutdown_function(function() use($stdErr, &$errors){\n    fwrite($stdErr, json_encode(['session_id' => session_id()]) . \"\\n\" );\n    fwrite($stdErr, var_export($errors,1) . \"\\n\");\n});\n\nset_error_handler(function(...$args) use($stdErr, &$errors){\n\t$errors[] = $args;\n});\n\n$request = (object) json_decode(\n\t'${JSON.stringify(event.data)}'\n\t, JSON_OBJECT_AS_ARRAY\n);\n\nparse_str(substr($request->_GET, 1), $_GET);\n\n$_POST = $request->_POST;\n\n$origin  = 'http://localhost:3333';\n$docroot = '/preload/drupal-7.59';\n$script  = 'index.php';\n\n$path    = $request->path;\n\n$_SERVER['REQUEST_URI']     = $path;\n$_SERVER['REMOTE_ADDR']     = '127.0.0.1';\n$_SERVER['SERVER_NAME']     = $origin;\n$_SERVER['SERVER_PORT']     = 3333;\n$_SERVER['REQUEST_METHOD']  = 'GET';\n$_SERVER['SCRIPT_FILENAME'] = $docroot . '/' . $script;\n$_SERVER['SCRIPT_NAME']     = $docroot . '/' . $script;\n$_SERVER['PHP_SELF']        = $docroot . '/' . $script;\n$_SERVER['DOCUMENT_ROOT']   = '/';\n\n$databases['default']['default'] = array(\n\t'database' => '/drupal-7.db'\n\t, 'driver' => 'sqlite'\n);\n\nchdir($docroot);\n\nrequire $script;\n"
});

;require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');

