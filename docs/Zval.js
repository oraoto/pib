"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZVal = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ZVal = function ZVal(wrappedValue) {
  _classCallCheck(this, ZVal);

  this.wrapped = wrappedValue;
  this.refCount = 1;
};

exports.ZVal = ZVal;