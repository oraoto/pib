"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Php = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PhpBinary = require('./php-web');

var Php = /*#__PURE__*/function (_EventTarget) {
  _inherits(Php, _EventTarget);

  var _super = _createSuper(Php);

  function Php() {
    var _this;

    _classCallCheck(this, Php);

    _this = _super.call(this);
    var FLAGS = {};
    _this.returnValue = -1;

    _this.onerror = function () {};

    _this.onoutput = function () {};

    _this.onready = function () {};

    console.log(PhpBinary);
    _this.binary = new PhpBinary({
      postRun: function postRun() {
        var event = new CustomEvent('ready');

        _this.dispatchEvent(event);

        _this.onready(event);
      },
      print: function print() {
        for (var _len = arguments.length, chunks = new Array(_len), _key = 0; _key < _len; _key++) {
          chunks[_key] = arguments[_key];
        }

        var event = new CustomEvent('output', {
          detail: chunks.map(function (c) {
            return c + "\n";
          })
        });

        _this.dispatchEvent(event);

        _this.onoutput(event);
      },
      printErr: function printErr() {
        for (var _len2 = arguments.length, chunks = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          chunks[_key2] = arguments[_key2];
        }

        var event = new CustomEvent('error', {
          detail: chunks.map(function (c) {
            return c + "\n";
          })
        });

        _this.onerror(event);

        _this.dispatchEvent(event);
      }
    }).then(function (php) {
      var retVal = php.ccall('pib_init', 'number', ["string"], []);
      return php;
    })["catch"](function (error) {
      return console.log(error);
    });
    return _this;
  }

  _createClass(Php, [{
    key: "run",
    value: function run(phpCode) {
      return this.binary.then(function (php) {
        var retVal = php.ccall('pib_eval', 'number', ["string"], ["?>".concat(phpCode)]);
        php.ccall('pib_eval', 'number', ["string"], ["fwrite(fopen('php://stdout', 'w'), PHP_EOL);"]);
        return retVal;
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      return this.binary.then(function (php) {
        return php.ccall('pib_refresh', 'number', [], []);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }]);

  return Php;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

exports.Php = Php;