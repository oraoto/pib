"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Php = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

if (window && document) {
  var php = new Php();

  var runScriptTag = function runScriptTag(element) {
    var src = element.getAttribute('src');

    if (src) {
      fetch(src).then(function (r) {
        return r.text();
      }).then(function (r) {
        console.log(r);
        php.run(r);
      });
      return;
    }

    var inlineCode = element.innerText.trim();
    console.log(inlineCode);

    if (inlineCode) {// php.run(inlineCode);
    }
  };

  php.addEventListener('ready', function () {
    var phpSelector = 'script[type="text/php"]';
    var htmlNode = document.body.parentElement;
    var observer = new MutationObserver(function (mutations, observer) {
      var _iterator = _createForOfIteratorHelper(mutations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;

          var _iterator2 = _createForOfIteratorHelper(mutation.addedNodes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var addedNode = _step2.value;

              if (!addedNode.matches || !addedNode.matches(phpSelector)) {
                continue;
              }

              runScriptTag(addedNode);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    observer.observe(htmlNode, {
      childList: true,
      subtree: true
    });
    var phpNodes = document.querySelectorAll(phpSelector);

    var _iterator3 = _createForOfIteratorHelper(phpNodes),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var phpNode = _step3.value;
        var code = phpNode.innerText.trim();
        runScriptTag(phpNode);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
}