"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueIndex = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UniqueIndex = function UniqueIndex() {
  _classCallCheck(this, UniqueIndex);

  var map = new Map();
  var set = new WeakMap();
  var id = 0;
  Object.defineProperty(this, 'add', {
    configurable: false,
    writable: false,
    value: function value(callback) {
      var existing = set.has(callback);

      if (existing) {
        return existing;
      }

      var newid = ++id;
      set.set(callback, newid);
      map.set(newid, callback);
      return newid;
    }
  });
  Object.defineProperty(this, 'has', {
    configurable: false,
    writable: false,
    value: function value(callback) {
      if (set.has(callback)) {
        return set.get(callback);
      }
    }
  });
  Object.defineProperty(this, 'get', {
    configurable: false,
    writable: false,
    value: function value(id) {
      if (map.has(id)) {
        return map.get(id);
      }
    }
  });
  Object.defineProperty(this, 'remove', {
    configurable: false,
    writable: false,
    value: function value(id) {
      var callback = map.get(id);

      if (callback) {
        set["delete"](callback);
        map["delete"](id);
      }
    }
  });
};

exports.UniqueIndex = UniqueIndex;