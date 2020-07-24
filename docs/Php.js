'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
	function ExtendableBuiltin() {
		var instance = Reflect.construct(cls, Array.from(arguments));
		Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
		return instance;
	}

	ExtendableBuiltin.prototype = Object.create(cls.prototype, {
		constructor: {
			value: cls,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (Object.setPrototypeOf) {
		Object.setPrototypeOf(ExtendableBuiltin, cls);
	} else {
		ExtendableBuiltin.__proto__ = cls;
	}

	return ExtendableBuiltin;
}

var PhpWebBin = require('./php-web');

var Php = exports.Php = function (_extendableBuiltin2) {
	_inherits(Php, _extendableBuiltin2);

	function Php() {
		_classCallCheck(this, Php);

		var _this = _possibleConstructorReturn(this, (Php.__proto__ || Object.getPrototypeOf(Php)).call(this));

		var FLAGS = {};

		_this.returnValue = -1;

		_this.onerror = function () {
			console.log('READY!!!');
		};
		_this.onoutput = function () {};
		_this.onready = function () {};

		_this.binary = PhpWebBin({

			postRun: function postRun() {
				var event = new CustomEvent('ready');
				_this.dispatchEvent(event);
				_this.onready(event);
			},

			print: function print() {
				for (var _len = arguments.length, chunks = Array(_len), _key = 0; _key < _len; _key++) {
					chunks[_key] = arguments[_key];
				}

				var event = new CustomEvent('output', { detail: chunks });
				_this.dispatchEvent(event);
				_this.onoutput(event);
			},

			printErr: function printErr() {
				for (var _len2 = arguments.length, chunks = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					chunks[_key2] = arguments[_key2];
				}

				var event = new CustomEvent('error', { detail: chunks });
				// this.onerror(event);
				_this.dispatchEvent(event);
			}

		});
		return _this;
	}

	_createClass(Php, [{
		key: 'run',
		value: function run(phpCode) {
			var _this2 = this;

			return new Promise(function (accept) {
				return _this2.binary.then(function (php) {

					var retVal = php.ccall('pib_eval', 'number', ["string"], ['?>' + phpCode]);

					php.ccall('pib_eval', 'number', ["string"], ['echo "\n"']);

					console.log(phpCode, retVal);

					accept(retVal);
				});
			});
		}
	}]);

	return Php;
}(_extendableBuiltin(EventTarget));