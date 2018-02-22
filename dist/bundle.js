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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getData = __webpack_require__(0);

var _getData2 = _interopRequireDefault(_getData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = '../../data/base.json';
var navItem = document.getElementById('js-nav');

(0, _getData2.default)(baseUrl).then(function (blob) {

    var html = Object.entries(blob).map(function (data) {
        return '\n            <a class="navbar-item">\n                ' + data[0] + '\n            </a>\n        ';
    }).join('');

    navItem.innerHTML = html;
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getData = __webpack_require__(0);

var _getData2 = _interopRequireDefault(_getData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detailLinks = document.querySelectorAll('.js-item-link');
var filmsWrapper = document.getElementById('js-films');
var filmWrapper = document.getElementById('js-film');

document.addEventListener('click', function (event) {

    if (event.target.parentNode.className.includes('js-item-link')) {

        event.preventDefault();
        filmsWrapper.style.display = 'none';

        var charactersDetails = [];
        var filmDetails = void 0;
        var charactersDetailsHtml = void 0;

        (0, _getData2.default)(event.target.dataset.url).then(function (data) {

            filmDetails = data;

            data.characters.map(function (character) {

                (0, _getData2.default)(character).then(function (item) {
                    charactersDetails.push(item);
                }).then(function () {
                    charactersDetailsHtml = charactersDetails.map(function (charactersDetails) {
                        return '\n                                    <tr>\n                                        <td>' + charactersDetails.name + '</td>\n                                        <td>' + charactersDetails.gender + '</td>\n                                        <td><a href="' + charactersDetails.url + '">Click</a></td>\n                                    </tr>\n                                ';
                    }).join('');
                }).then(function () {
                    var html = '\n                                <div class="columns is-vcentered has-text-centered">\n                                    <div class="column is-5 align-self-flex-start">\n                                        <figure class="image is-4by3">\n                                            <img src="./src/images/' + filmDetails.episode_id + '.jpg" alt="Description">\n                                        </figure>\n                                    </div>\n                                    \n                                    <div class="column is-6 is-offset-1">\n                                        <h1 class="title is-2">\n                                            ' + filmDetails.title + '\n                                        </h1>\n                                        <h2 class="subtitle is-4">\n                                            ' + filmDetails.opening_crawl + '\n                                        </h2>\n                                        <br>\n\n                                        <table class="table">\n                                            <thead>\n                                                <tr>\n                                                    <th>Name</th>\n                                                    <th>Gender</th>\n                                                    <th>Details</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                ' + charactersDetailsHtml + '\n                                            </tbody>\n                                        </table>\n                                    </div>\n\n                                </div>\n                            ';

                    filmWrapper.innerHTML = html;
                });
            });
        });
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getData = __webpack_require__(0);

var _getData2 = _interopRequireDefault(_getData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filmsUrl = '../../data/films.json';
var filmWrapper = document.getElementById('js-films');

(0, _getData2.default)(filmsUrl).then(function (_ref) {
    var results = _ref.results;


    var html = results.map(function (_ref2) {
        var title = _ref2.title,
            url = _ref2.url,
            release_date = _ref2.release_date,
            episode_id = _ref2.episode_id,
            director = _ref2.director,
            opening_crawl = _ref2.opening_crawl;


        return '\n            <div class="card">\n        \n                <div class="card-image">\n                    <figure class="image is-4by3">\n                    <img src="./src/images/' + episode_id + '.jpg" alt="Placeholder image">\n                    </figure>\n                </div>\n\n                <div class="card-content">\n\n                    <div class="media">\n        \n                        <div class="media-content">\n                            <p class="title is-4">' + title + '</p>\n                            <p class="subtitle is-6">' + director + '</p>\n                        </div>\n\n                    </div>\n\n                    <div class="content">\n                        <p>' + opening_crawl.slice(0, 200) + '...</p>\n                        <br>\n                        <p>Released Date: ' + release_date + '</p>\n                        \n                        <p>Episode No: ' + episode_id + '</p>\n                    </div>\n\n                    <footer class="card-footer js-item-link">\n                        <a data-url="' + url + '" class="card-footer-item button is-primary">Details</a>\n                    </footer>\n\n                </div>\n\n            </div>\n        ';
    }).join('');

    filmWrapper.innerHTML = html;
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map