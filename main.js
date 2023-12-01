/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/CollapsibleWidget.js":
/*!*************************************!*\
  !*** ./src/js/CollapsibleWidget.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CollapsibleWidget; }
/* harmony export */ });
class CollapsibleWidget {
  constructor(container) {
    this.container = container;
    this.btnCollapse = this.container.querySelector('.btn_collapse');
    this.collapsibleContainer = this.container.querySelector('.collapsible_container');
    this.collapseStatus = false;
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }
  activation() {
    this.btnCollapse.addEventListener('click', this.toggleCollapse);
  }
  toggleCollapse() {
    this.collapseStatus = this.collapseStatus === false;
    this.collapsibleContainer.classList.toggle('show');
    this.container.classList.toggle('rolled-up');
  }
}

/***/ }),

/***/ "./src/js/FeedbackWidget.js":
/*!**********************************!*\
  !*** ./src/js/FeedbackWidget.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FeedbackWidget; }
/* harmony export */ });
class FeedbackWidget {
  constructor(container) {
    this.container = container;
    this.btnOpen = this.container.querySelector('.open_popup');
    this.popupBox = this.container.querySelector('.popup_box');
    this.btnHide = this.container.querySelector('.btn_hide-popup');
    this.openPopup = this.openPopup.bind(this);
    this.hidepopup = this.hidepopup.bind(this);
  }
  activation() {
    this.btnOpen.addEventListener('click', this.openPopup);
  }
  openPopup() {
    this.btnOpen.classList.add('hidden_button');
    this.popupBox.classList.remove('hide_popup');
    this.btnHide.addEventListener('click', this.hidepopup);
  }
  hidepopup() {
    this.popupBox.classList.add('hide_popup');
    this.btnHide.removeEventListener('click', this.hidepopup);
    this.btnOpen.classList.remove('hidden_button');
  }
}

/***/ }),

/***/ "./src/js/LikerWidget.js":
/*!*******************************!*\
  !*** ./src/js/LikerWidget.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LikerWidget; }
/* harmony export */ });
class LikerWidget {
  constructor(container, animationBox) {
    this.container = container;
    this.animationBox = animationBox;
    this.btnGoLike = this.container.querySelector('.add_like');
    this.heart = this.container.querySelector('.heart');
    this.goLike = this.goLike.bind(this);
  }
  actiation() {
    this.btnGoLike.addEventListener('click', this.goLike);
  }
  goLike() {
    const flyingHeart = this.heart.cloneNode(true);
    flyingHeart.style.animationName = this.getRandomAnimation();
    const coordinatesBox = this.container.getBoundingClientRect();
    const {
      top,
      left,
      width
    } = this.btnGoLike.getBoundingClientRect();
    flyingHeart.style.top = `${top - coordinatesBox.top}px`;
    flyingHeart.style.left = `${left - coordinatesBox.left + width / 2 - 20}px`;
    this.container.append(flyingHeart);
    flyingHeart.addEventListener('animationend', () => {
      flyingHeart.remove();
    });
    flyingHeart.classList.add('move');
  }
  getRandomAnimation() {
    return this.animationBox[Math.floor(Math.random() * this.animationBox.length)];
  }
}

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollapsibleWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollapsibleWidget */ "./src/js/CollapsibleWidget.js");
/* harmony import */ var _FeedbackWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackWidget */ "./src/js/FeedbackWidget.js");
/* harmony import */ var _LikerWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LikerWidget */ "./src/js/LikerWidget.js");



const collapseBox = document.querySelector('.collapse_box');
const collapsible = new _CollapsibleWidget__WEBPACK_IMPORTED_MODULE_0__["default"](collapseBox);
collapsible.activation();
const chatBox = document.querySelector('.chat_box');
const feedback = new _FeedbackWidget__WEBPACK_IMPORTED_MODULE_1__["default"](chatBox);
feedback.activation();
const likerBox = document.querySelector('.liker_box');
const animationBox = ['flying-heart-1', 'flying-heart-2', 'flying-heart-3', 'flying-heart-4'];
const liker = new _LikerWidget__WEBPACK_IMPORTED_MODULE_2__["default"](likerBox, animationBox);
liker.actiation();

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Animation</title>\n</head>\n<body>\n  <div class=\"container\">\n\n    <!-- Collapse -->\n\n    <div class=\"collapse_box box\">\n        <h2 class=\"box_title\">Collapse</h2>\n        <button class=\"btn_collapse\" type=\"button\">Collapse</button>\n        <div class=\"collapsible_container\">\n            <p class=\"collapsible_text\">\n                Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n                Dolorum optio quaerat atque quos praesentium neque quis facilis,\n                tenetur eius exercitationem iure excepturi laboriosam amet hic vel fugit, \n                explicabo similique impedit!\n            </p>\n            <p class=\"collapsible_text\">\n                Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n                Dolorum optio quaerat atque quos praesentium neque quis facilis,\n                tenetur eius exercitationem iure excepturi laboriosam amet hic vel fugit, \n                explicabo similique impedit!\n            </p>\n        </div>\n    </div>\n\n    <!-- Chat -->\n\n    <div class=\"chat_box box\">\n        <h2 class=\"box_title\">Chat</h2>\n        <button type=\"button\" class=\"open_popup\"></button>\n        <div class=\"popup_box hide_popup\">\n            <div class=\"popup_header\">\n                <h4 class=\"popup_title\">Напишите нам</h4>\n                <button class=\"btn_hide-popup\" aria-label=\"Скрыть окно обратной связи\"></button>\n            </div>            \n            <textarea name=\"enter\" class=\"enter-text_feedback\"></textarea>\n            <button type=\"button\" class=\"send_feedback\">Отправить</button>\n        </div>\n    </div>\n\n    <!-- Liker -->\n    \n    <div class=\"liker_box box\">\n        <h2 class=\"box_title\">Liker</h2>\n        <div class=\"heart\"></div>\n        <button type=\"button\" class=\"add_like\">Like</button>\n    </div>\n  </div>\n</body>\n</html>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/licenses.txt":
/*!**************************!*\
  !*** ./src/licenses.txt ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "licenses.txt";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _licenses_txt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./licenses.txt */ "./src/licenses.txt");




}();
/******/ })()
;
//# sourceMappingURL=main.js.map