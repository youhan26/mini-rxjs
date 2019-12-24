(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global['mini-rxjs'] = {}));
}(this, (function (exports) { 'use strict';

	function Observable() {}

	function Subject() {}

	function merge() {}

	exports.Observable = Observable;
	exports.Subject = Subject;
	exports.merge = merge;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
