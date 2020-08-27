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
  var index = 0;
  Object.defineProperty(this, 'add', {
    configurable: false,
    writable: false,
    value: function value(callback) {
      var existing = set.has(callback);

      if (existing) {
        return existing;
      }

      var newIndex = ++index;
      set.set(callback, newIndex);
      map.set(newIndex, callback);
      return newIndex;
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
    value: function value(index) {
      if (map.has(index)) {
        return map.get(index);
      }
    }
  });
  Object.defineProperty(this, 'remove', {
    configurable: false,
    writable: false,
    value: function value(index) {
      var callback = map.get(index);

      if (callback) {
        set["delete"](callback);
        map["delete"](index);
      }
    }
  });
};

exports.UniqueIndex = UniqueIndex;