/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getData(url) {
    return new Promise(function (resolve, reject) {

        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'json';

        request.onload = function () {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        };

        request.onerror = function () {
            reject(Error('Network Error!'));
        };

        request.send();
    });
}

exports.default = getData;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getData = __webpack_require__(0);

var _getData2 = _interopRequireDefault(_getData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = '../../data/base.json';
var navItem = document.getElementById('js-nav');

(0, _getData2.default)(baseUrl).then(function (blob) {

    var html = Object.entries(blob).map(function (data) {
        return '\n            <li class="nav-item">\n                <a class="nav-link" href="#">' + data[0] + '</a>\n            </li>\n        ';
    }).join('');

    navItem.innerHTML = html;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getData = __webpack_require__(0);

var _getData2 = _interopRequireDefault(_getData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detailLinks = document.querySelectorAll('.card-link');
var filmWrapper = document.getElementById('js-film');

document.addEventListener('click', function (event) {
    if (event.target.className === 'card-link') {
        event.preventDefault();
        // filmWrapper.style.display = 'none';
        console.log(event.target.dataset.url);

        (0, _getData2.default)(event.target.dataset.url).then(function (data) {
            return console.log(data);
        });
    }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getData = __webpack_require__(0);

var _getData2 = _interopRequireDefault(_getData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filmsUrl = '../../data/films.json';
var filmWrapper = document.getElementById('js-film');

(0, _getData2.default)(filmsUrl).then(function (_ref) {
    var results = _ref.results;


    var html = results.map(function (_ref2) {
        var title = _ref2.title,
            url = _ref2.url,
            release_date = _ref2.release_date,
            episode_id = _ref2.episode_id,
            director = _ref2.director,
            opening_crawl = _ref2.opening_crawl;


        return '\n            <div class="col-4 mb-5">\n                <div class="card">\n                \n                    <img class="card-img-top" src="./src/images/' + episode_id + '.jpg" alt="Card image cap">\n                    \n                    <div class="card-body">\n                        <h5 class="card-title js-card-title">' + title + '</h5>\n                        <p class="card-text js-card-description">' + opening_crawl + '</p>\n                    </div>\n                    \n                    <ul class="list-group list-group-flush">\n                        <li class="list-group-item">\n                            Director: ' + director + '\n                        </li>\n                        <li class="list-group-item">\n                            Released Date: ' + release_date + '\n                        </li>\n                        <li class="list-group-item">\n                            Episode ID: ' + episode_id + '\n                        </li>\n                    </ul>\n                    \n                    <div class="card-body">\n                        <a data-url="' + url + '" class="card-link">Details</a>\n                    </div>\n\n                </div>\n            </div>\n        ';
    }).join('');

    filmWrapper.innerHTML = html;
});

/***/ })
/******/ ]);