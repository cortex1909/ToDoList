/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/c2-event-handler/cjs/event-handler.js":
/*!************************************************************!*\
  !*** ./node_modules/c2-event-handler/cjs/event-handler.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


var on = function (event, fn) {
    var _this = this;

    if (typeof event !== 'string' || !event.length || typeof fn === 'undefined') return;

    if (event.indexOf(' ') > -1) {
        event.split(' ').forEach(function (eventName) {
            on.call(_this, eventName, fn);
        });
        return;
    }

    this._events = this._events || {};
    this._events[event] = this._events[event] || [];
    this._events[event].push(fn);
};

var off = function (event, fn) {
    var _this2 = this;

    if (typeof event !== 'string' || !event.length) return;

    if (event.indexOf(' ') > -1) {
        event.split(' ').forEach(function (eventName) {
            off.call(_this2, eventName, fn);
        });
        return;
    }

    this._events = this._events || {};

    if (event in this._events === false) return;

    if (typeof fn === 'undefined') {
        delete this._events[event];
        return;
    }

    var index = this._events[event].indexOf(fn);
    if (index > -1) {
        if (this._events[event].length === 1) {
            delete this._events[event];
        } else {
            this._events[event].splice(index, 1);
        }
    }
};

var emit = function (event) {
    var _this3 = this;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    var lastIndex = event.lastIndexOf(':');
    if (lastIndex > -1) {
        emit.call.apply(emit, [this, event.substring(0, lastIndex)].concat(args));
    }

    this._events = this._events || {};

    if (event in this._events === false) return;

    this._events[event].forEach(function (fn) {
        fn.apply(_this3, args);
    });
};

var EventConstructor = function () {};

var proto = EventConstructor.prototype;
proto.on = on;
proto.off = off;
proto.emit = emit;

// legacy extensions
proto.bind = on;
proto.unbind = off;
proto.trigger = emit;

var handler = function (_class) {

    // constructor
    if (arguments.length === 0) {
        return new EventConstructor();
    }

    // mixin
    if (typeof _class === 'function') {
        _class.prototype.on = on;
        _class.prototype.off = off;
        _class.prototype.emit = emit;
    }

    if (typeof _class === 'object') {
        _class.on = on;
        _class.off = off;
        _class.emit = emit;
    }

    return _class;
};

handler.EventConstructor = EventConstructor;

module.exports = handler;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none;\n}\n\nq:before, q:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.deleteBtn {\n  background: transparent;\n  color: red;\n  font-size: 2rem;\n  outline: none;\n  border: none;\n  text-shadow: 1px 1px 5px red;\n}\n\n.deleteToDoBtn {\n  background: transparent;\n  color: red;\n  font-size: 2rem;\n  outline: none;\n  border: none;\n  text-shadow: 1px 1px 5px red;\n}\n\n.checkToDoBtn {\n  background: transparent;\n  color: red;\n  font-size: 2rem;\n  outline: none;\n  border: none;\n  text-shadow: 1px 1px 5px red;\n}\n\n.checkToDoBtn.checked {\n  color: greenyellow;\n  text-shadow: 1px 1px 5px greenyellow;\n}\n\n.createProjectBtn {\n  width: 100%;\n  height: 50px;\n  background: none;\n  border: 1px solid #08ff1d;\n  border-radius: 5px;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.createTaskBtn {\n  float: right;\n  width: 150px;\n  height: 50px;\n  background: none;\n  border: 1px solid #08ff1d;\n  border-radius: 5px;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.heading {\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.project {\n  color: white;\n  background: none;\n  border: none;\n  font-style: italic;\n  font-size: 1.2rem;\n}\n\n.project:hover {\n  text-decoration: underline;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nbody {\n  position: relative;\n  min-height: 100vh;\n  background-color: #7786a7;\n}\n\nheader {\n  width: 100%;\n  background-color: #627091;\n}\n\nheader nav {\n  min-height: 100px;\n  line-height: 100px;\n  margin-left: 30px;\n  color: white;\n  font-size: 1.4rem;\n}\n\n.container {\n  width: 90%;\n  margin: 0 auto;\n  background-color: #7786a7;\n  padding: 35px 0;\n  display: -ms-grid;\n  display: grid;\n      grid-template-areas: 'aside main';\n  -ms-grid-columns: max-content auto;\n      grid-template-columns: -webkit-max-content auto;\n      grid-template-columns: max-content auto;\n}\n\n.container aside {\n  height: calc(100vh - (100px + 35px + 70px + 40px));\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: aside;\n  border-right: 5px double #2e416f;\n  background-color: #627091;\n  padding: 20px 20px;\n}\n\n.container aside ul li {\n  border: 1px solid #2e416f;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.container main {\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  grid-area: main;\n  height: calc(100vh - (100px + 35px + 70px + 40px));\n  background-color: #627091;\n  padding: 20px 20px;\n}\n\n.container main table {\n  width: 80%;\n  margin: 10px auto;\n}\n\n.container main table th {\n  color: white;\n  font-size: 1.2rem;\n  font-weight: bold;\n  border: 3px solid #2e416f;\n  padding: 5px 0;\n}\n\n.container main table tbody tr {\n  color: white;\n  font-size: 1.2rem;\n  text-align: center;\n  border: 2px solid #2e416f;\n  line-height: 2rem;\n}\n\n.container main table tbody tr td {\n  padding: 5px 0;\n}\n\n.container main table tbody tr td.biggerFont {\n  font-size: 2rem;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: #2e416f;\n  color: #fff;\n  height: 35px;\n}\n\nfooter .text {\n  text-align: center;\n  line-height: 35px;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/assets/css/_base.scss","webpack://./src/assets/css/style.css","webpack://./src/assets/css/_components.scss","webpack://./src/assets/css/_layout.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ "./node_modules/vanilla-js-modal/cjs/modal-handler.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-js-modal/cjs/modal-handler.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * vanilla-js-modal
 * https://github.com/TheC2Group/vanilla-js-modal
 * @version 1.0.1
 * @license MIT (c) The C2 Group (c2experience.com)
 */


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var eventHandler = _interopDefault(__webpack_require__(/*! c2-event-handler */ "./node_modules/c2-event-handler/cjs/event-handler.js"));

var handler = eventHandler({}); // private variables

var _collection = {};
var _index = 0;
var _active = [];
var _restore = [];
var _options = {
  zIndexStart: 1000,
  appendTo: document.forms.length > 0 && document.forms[0].parentElement === document.body ? document.forms[0] : document.body // Try to detect .NET webforms and append to the .NET form

}; // default options for a modal instance

var _defaults = {
  hasOverlay: true,
  overlayClass: 'Overlay',
  overlayIsOff: true,
  attr: 'data-state',
  onState: 'on',
  offState: 'off',
  verticallyCenterModal: true
}; // Need IE9+ polyfill for closest

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
} // Pass in the objects to merge as arguments.
// For a deep extend, set the first argument to `true`.


var extend = function extend() {
  // Variables
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length; // Check if a deep merge

  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0];
    i++;
  } // Merge the object into the extended object


  var merge = function merge(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        // If deep merge and property is an object, merge properties
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop]);
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  }; // Loop through each object and conduct a merge


  for (; i < length; i++) {
    var obj = arguments[i];
    merge(obj);
  }

  return extended;
};
/**
 * get the distance to the top of the window if the modal was centered
 * @param modal
 * @return {Number}
 */


var getModalTop = function getModalTop(modal) {
  var wHeight = window.innerHeight;
  var mHeight = modal.offsetHeight;
  var scrollTop = window.pageYOffset;
  var top = Math.max((wHeight - mHeight) / 2, 0) + scrollTop;
  return top + 'px';
};
/**
 * get the active modal
 * @return {Object} modal instance
 */


var getActiveModal = function getActiveModal() {
  if (_active.length === 0) return null;
  return _active[_active.length - 1];
};
/**
 * new Modal class
 */


var Modal = function Modal(el, id, options) {
  // assign the modal element
  this.el = el; // assign the modal id

  this.id = id;
  this.opts = extend(_defaults, options);
  this.isOpen = false;

  if (this.opts.hasOverlay) {
    // create overlay
    this.overlay = document.createElement('div');
    this.overlay.setAttribute('class', this.opts.overlayClass);

    if (this.opts.overlayIsOff) {
      this.overlay.setAttribute('data-state', this.opts.offState);
    } else {
      this.overlay.setAttribute('data-state', this.opts.onState);
    } // append the modal and overlay to the body


    _options.appendTo.appendChild(this.overlay);
  }

  _options.appendTo.appendChild(this.el);

  this.el.setAttribute('tabindex', '-1');
  this.el.setAttribute('role', 'dialog');
};

eventHandler(Modal);
/**
 * modal.open()
 */

Modal.prototype.open = function () {
  if (this.isOpen) return;
  this.isOpen = true; // add modal to the stack

  _active.push(this);

  _restore.push(document.activeElement);

  var calculatedZIndex = _options.zIndexStart + _active.length;
  var calculatedTop = 0;

  if (this.opts.hasOverlay) {
    // activate overlay
    this.overlay.style.zIndex = calculatedZIndex;
    this.overlay.setAttribute(this.opts.attr, this.opts.onState);
  }

  if (this.opts.verticallyCenterModal) {
    calculatedTop = getModalTop(this.el);
  } // open modal


  this.el.style.zIndex = calculatedZIndex;
  this.el.style.top = calculatedTop;
  this.el.setAttribute(this.opts.attr, this.opts.onState);
  this.emit('open');
  handler.emit('open', this);
};
/**
 * modal.close()
 */


Modal.prototype.close = function () {
  if (!this.isOpen) return;
  this.isOpen = false; // remove modal from the stack

  var indexOf = _active.indexOf(this);

  var restore;

  if (indexOf > -1) {
    _active.splice(indexOf, 1);

    restore = _restore.splice(indexOf, 1)[0];
  }

  if (this.opts.hasOverlay) {
    // deactivate overlay
    this.overlay.setAttribute(this.opts.attr, this.opts.offState);
  } // close modal


  this.el.setAttribute(this.opts.attr, this.opts.offState); // restore the focus to the previously active element

  restore.focus();
  this.emit('close');
  handler.emit('close', this);
};
/**
 * modal.verticallyCenter()
 */


Modal.prototype.verticallyCenter = function () {
  this.el.style.top = getModalTop(this.el);
};
/**
 * MODAL.config()
 * @param {Object} overwrite MODAL options
 */


var _config = function _config(options) {
  extend(_options, options);
};
/**
 * MODAL.setDefaults()
 * @param {Object} overwrite modal defaults
 */


var _setDefaults = function _setDefaults(defaults) {
  extend(_defaults, defaults);
};
/**
 * MODAL.create()
 * @param element or selector
 * @param {Object} options
 * @return {Object} new modal instance
 */


var _create = function _create(el, options) {
  var id; // early return of cached modal

  if (typeof el === 'string') {
    id = el.indexOf('#') === 0 ? el.substr(1) : el;

    if (_collection.hasOwnProperty(id)) {
      return _collection[id];
    }
  }

  var el = document.querySelector(el);
  if (!el) return; // determine the modal id

  id = el.getAttribute('id') || '_' + ++_index; // return the modal if it exists

  if (_collection.hasOwnProperty(id)) {
    return _collection[id];
  } // create the modal


  var modal = new Modal(el, id, options); // add the modal to the collection

  _collection[id] = modal;
  return modal;
};
/**
 * MODAL.closeAll()
 */


var _closeAll = function _closeAll() {
  while (_active.length > 0) {
    getActiveModal().close();
  }
};
/**
 * MODAL.closeActive()
 */


var _closeActive = function _closeActive() {
  var active = getActiveModal();

  if (active) {
    active.close();
  }
};
/**
 * MODAL.open()
 * @param {String} id
 */


var _open = function _open(id) {
  if (!_collection.hasOwnProperty(id)) return;

  _collection[id].open();
};
/**
 * MODAL.close()
 * @param {String} id
 */


var _close = function _close(id) {
  if (!_collection.hasOwnProperty(id)) return;

  _collection[id].close();
};
/**
 * MODAL.verticallyCenter()
 * @param {String} id
 */


var _verticallyCenter = function _verticallyCenter(id) {
  if (!_collection.hasOwnProperty(id)) return;

  _collection[id].verticallyCenter();
}; // bind events to trap the focus and close on 'esc'


document.addEventListener('keydown', function (e) {
  if (e.which !== 27) return;
  var activeModal = getActiveModal();
  if (!activeModal) return;
  activeModal.close();
});
document.addEventListener('focus', function (e) {
  var activeModal = getActiveModal();
  var selectorIsInModal = false;

  if (activeModal) {
    var activeModalId = activeModal.el.getAttribute('id');
    selectorIsInModal = e.target.closest('#' + activeModalId) !== null ? true : false;
  }

  if (!activeModal || selectorIsInModal) return;
  e.stopPropagation();
  activeModal.el.focus();
}, true);
var modalHandler = extend(handler, {
  config: _config,
  setDefaults: _setDefaults,
  create: _create,
  closeAll: _closeAll,
  closeActive: _closeActive,
  open: _open,
  close: _close,
  verticallyCenter: _verticallyCenter
});

module.exports = modalHandler;


/***/ }),

/***/ "./src/assets/js/asideAllProjects.js":
/*!*******************************************!*\
  !*** ./src/assets/js/asideAllProjects.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList),
/* harmony export */   "createDefaultProjects": () => (/* binding */ createDefaultProjects),
/* harmony export */   "asideDOM": () => (/* binding */ asideDOM),
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/assets/js/project.js");
/* harmony import */ var _mainAllToDos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainAllToDos */ "./src/assets/js/mainAllToDos.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../script */ "./src/script.js");



// @ts-ignore
let MODAL = __webpack_require__(/*! vanilla-js-modal */ "./node_modules/vanilla-js-modal/cjs/modal-handler.js")

let ProjectList = []

const createDefaultProjects = () => {
  createNewProject('Default Project', 'default_project')
  createNewProject('Made Project')
}

const asideDOM = () => {
  const asideElement = document.createElement('aside')
  const headingElement = document.createElement('div')
  headingElement.classList.add('heading')
  headingElement.innerHTML = 'All available projects:'
  const projectListElement = document.createElement('div')
  projectListElement.classList.add('projectList')
  const listAllProjectUL = document.createElement('ul')

  asideElement.appendChild(headingElement)
  asideElement.appendChild(projectListElement)
  projectListElement.appendChild(listAllProjectUL)

  ProjectList.forEach((project) => {
    const listAllProjectsLI = document.createElement('li')
    const buttonLinkToProject = document.createElement('button')
    buttonLinkToProject.classList.add('project')
    buttonLinkToProject.innerHTML = `${project.name}`
    buttonLinkToProject.addEventListener('click', () => {
      ;(0,_mainAllToDos__WEBPACK_IMPORTED_MODULE_1__.mainDOM)(project.projectID)
    })
    const buttonDeleteProject = document.createElement('button')
    buttonDeleteProject.classList.add('deleteBtn')
    buttonDeleteProject.innerHTML = '&#9746;'
    if (project.projectID === 'default_project') {
      buttonDeleteProject.disabled = true
      buttonDeleteProject.style.color = 'gray'
      buttonDeleteProject.style.textShadow = '1px 1px 5px gray'
    }
    buttonDeleteProject.addEventListener('click', () => {
      ProjectList = ProjectList.filter(
        (item) => item.projectID != project.projectID
      )
      listAllProjectsLI.remove()
    })
    listAllProjectsLI.appendChild(buttonLinkToProject)
    listAllProjectsLI.appendChild(buttonDeleteProject)
    listAllProjectUL.appendChild(listAllProjectsLI)
    return listAllProjectUL
  })
  const createProjectBtn = document.createElement('button')
  createProjectBtn.classList.add('createProjectBtn')
  createProjectBtn.innerHTML = 'Create'
  createProjectBtn.addEventListener('click', () => {
    var modal = MODAL.create('#Modal')
    modal.open()
  })
  asideElement.appendChild(createProjectBtn)
  return asideElement
}

const createNewProject = (projectName, ID) => {
  const NewProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName, ID)
  NewProject.createNewTask(
    `Project ID ${NewProject.projectID}`,
    '13.1.2022.',
    'high'
  )
  NewProject.createNewTask('Default Task #2', '13.2.2022.', 'med')
  NewProject.createNewTask('Default Task #3', '13.3.2022.', 'low')
  NewProject.createNewTask('Default Task #4', '13.4.2022.', 'no')
  ProjectList.push(NewProject)
}


/***/ }),

/***/ "./src/assets/js/footer.js":
/*!*********************************!*\
  !*** ./src/assets/js/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const stockFooter = () => {
  const footer = document.createElement('footer')

  footer.innerHTML = "<div class='text'>&copy; 2022</div>"

  const bodyReturn = document.body.appendChild(footer)

  return bodyReturn
}

const appendFooter = () => {
  stockFooter()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendFooter);


/***/ }),

/***/ "./src/assets/js/header.js":
/*!*********************************!*\
  !*** ./src/assets/js/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const stockHeader = () => {
  const header = document.createElement('header')
  const nav = document.createElement('nav')
  const p = document.createElement('p')

  p.innerHTML = `cortex19 <strong>${document.title}</strong>`

  nav.appendChild(p)
  header.appendChild(nav)
  const bodyReturn = document.body.appendChild(header)

  return bodyReturn
}

const appendHeader = () => {
  stockHeader()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendHeader);


/***/ }),

/***/ "./src/assets/js/mainAllToDos.js":
/*!***************************************!*\
  !*** ./src/assets/js/mainAllToDos.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainDOM": () => (/* binding */ mainDOM)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script */ "./src/script.js");
/* harmony import */ var _asideAllProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asideAllProjects */ "./src/assets/js/asideAllProjects.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/assets/js/project.js");



const mainElement = document.createElement('main')

const printHeadNames = () => {
  const tableHeadNames = [
    'Name of Task',
    'Due Date',
    'Check for Solved',
    'Delete Task',
  ]
  const theadElement = document.createElement('thead')
  const tableRowElement = document.createElement('tr')
  let tableHead
  tableHeadNames.forEach((element) => {
    tableHead = document.createElement('th')
    tableHead.innerHTML = element
    tableRowElement.appendChild(tableHead)
    return tableRowElement
  })
  theadElement.appendChild(tableRowElement)

  return theadElement
}

const mainDOM = (projectID = 'default_project') => {
  const trueMark = `&#9745;`
  const falseMark = `&#9746;`

  mainElement.innerHTML = ''
  const headingElement = document.createElement('div')
  headingElement.classList.add('heading')
  headingElement.innerHTML = `All To-Do from project ${
    projectID === undefined ? '>>Click On Project<<' : projectID
  }`
  mainElement.appendChild(headingElement)
  const tableElement = document.createElement('table')
  tableElement.appendChild(printHeadNames())
  const tableBody = document.createElement('tbody')

  const displayProject = _asideAllProjects__WEBPACK_IMPORTED_MODULE_1__.ProjectList.filter(
    (project) => project.projectID === projectID
  )
  let displayTasks
  displayProject.forEach((attribute) => (displayTasks = attribute.tasks))

  displayTasks.forEach((task) => {
    const tableRow = document.createElement('tr')
    const tableCellOne = document.createElement('td')
    tableCellOne.innerHTML = task.taskName
    const tableCellTwo = document.createElement('td')
    tableCellTwo.innerHTML = task.taskDate
    const tableCellThree = document.createElement('td')
    const isFinishedCheckBtn = document.createElement('button')
    if (task.isFinished) {
      isFinishedCheckBtn.classList.add('checkToDoBtn', 'checked')
      isFinishedCheckBtn.innerHTML = '&#9745;'
      tableCellThree.appendChild(isFinishedCheckBtn)
    } else {
      isFinishedCheckBtn.classList.add('checkToDoBtn')
      isFinishedCheckBtn.innerHTML = '&#9746;'
      tableCellThree.appendChild(isFinishedCheckBtn)
    }
    isFinishedCheckBtn.addEventListener('click', () => {
      if (task.isFinished) {
        task.isFinished = false
        isFinishedCheckBtn.innerHTML = '&#9746;'
        isFinishedCheckBtn.classList.remove('checked')
      } else if (!task.isFinished) {
        task.isFinished = true
        isFinishedCheckBtn.innerHTML = '&#9745;'
        isFinishedCheckBtn.classList.add('checked')
      }
    })
    const tableCellFour = document.createElement('td')
    const deleteToDoBtn = document.createElement('button')
    deleteToDoBtn.classList.add('deleteToDoBtn')
    deleteToDoBtn.innerHTML = '&#9746;'
    tableCellFour.appendChild(deleteToDoBtn)
    deleteToDoBtn.addEventListener('click', () => {
      displayTasks = displayTasks.filter((tasks) => tasks != task)
      tableRow.remove()
    })

    tableRow.append(tableCellOne)
    tableRow.append(tableCellTwo)
    tableRow.append(tableCellThree)
    tableRow.append(tableCellFour)
    tableBody.appendChild(tableRow)
    return tableBody
  })

  tableElement.appendChild(tableBody)
  mainElement.appendChild(tableElement)
  const createTaskBtn = document.createElement('button')
  createTaskBtn.classList.add('createTaskBtn')
  createTaskBtn.innerHTML = 'Create'
  mainElement.appendChild(createTaskBtn)
  return mainElement
}


/***/ }),

/***/ "./src/assets/js/project.js":
/*!**********************************!*\
  !*** ./src/assets/js/project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);

const Project = (name, default_id) => {
  let projectID
  if (default_id) {
    projectID = default_id
  } else {
    projectID = uniqid__WEBPACK_IMPORTED_MODULE_0___default()()
  }
  let tasks = []

  const createNewTask = (taskName, taskDate, priority) => {
    const ID = uniqid__WEBPACK_IMPORTED_MODULE_0___default()()
    const isFinished = false
    const pushObject = {
      projectID: projectID,
      taskID: ID,
      taskName: taskName,
      taskDate: taskDate,
      isFinished: isFinished,
      priority: priority,
    }
    tasks.push(pushObject)
  }

  return { name, tasks, projectID, createNewTask }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialization": () => (/* binding */ initialization)
/* harmony export */ });
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_js_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/header */ "./src/assets/js/header.js");
/* harmony import */ var _assets_js_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/footer */ "./src/assets/js/footer.js");
/* harmony import */ var _assets_js_asideAllProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/js/asideAllProjects */ "./src/assets/js/asideAllProjects.js");
/* harmony import */ var _assets_js_mainAllToDos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/js/mainAllToDos */ "./src/assets/js/mainAllToDos.js");







const toDoListDOM = () => {
  const container = document.createElement('div')
  container.classList.add('container')

  container.appendChild((0,_assets_js_asideAllProjects__WEBPACK_IMPORTED_MODULE_3__.asideDOM)())
  container.appendChild((0,_assets_js_mainAllToDos__WEBPACK_IMPORTED_MODULE_4__.mainDOM)())

  document.body.appendChild(container)
}

const initialization = () => {
  document.body.innerHTML = ''
  ;(0,_assets_js_header__WEBPACK_IMPORTED_MODULE_1__["default"])()
  toDoListDOM()
  ;(0,_assets_js_footer__WEBPACK_IMPORTED_MODULE_2__["default"])()
}

;(0,_assets_js_asideAllProjects__WEBPACK_IMPORTED_MODULE_3__.createDefaultProjects)()
initialization()


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL2MyLWV2ZW50LWhhbmRsZXIvY2pzL2V2ZW50LWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcz9jZGQ2Iiwid2VicGFjazovL3Rlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL25vZGVfbW9kdWxlcy92YW5pbGxhLWpzLW1vZGFsL2Nqcy9tb2RhbC1oYW5kbGVyLmpzIiwid2VicGFjazovL3Rlc3RpbmcvLi9zcmMvYXNzZXRzL2pzL2FzaWRlQWxsUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL3NyYy9hc3NldHMvanMvZm9vdGVyLmpzIiwid2VicGFjazovL3Rlc3RpbmcvLi9zcmMvYXNzZXRzL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vc3JjL2Fzc2V0cy9qcy9tYWluQWxsVG9Eb3MuanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL3NyYy9hc3NldHMvanMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rlc3Rpbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVzdGluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVzdGluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3Rpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXN0aW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVzdGluZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVzdGluZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb24gPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFldmVudC5sZW5ndGggfHwgdHlwZW9mIGZuID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgaWYgKGV2ZW50LmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgIGV2ZW50LnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBvbi5jYWxsKF90aGlzLCBldmVudE5hbWUsIGZuKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gICAgdGhpcy5fZXZlbnRzW2V2ZW50XSA9IHRoaXMuX2V2ZW50c1tldmVudF0gfHwgW107XG4gICAgdGhpcy5fZXZlbnRzW2V2ZW50XS5wdXNoKGZuKTtcbn07XG5cbnZhciBvZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZXZlbnQubGVuZ3RoKSByZXR1cm47XG5cbiAgICBpZiAoZXZlbnQuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgZXZlbnQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIG9mZi5jYWxsKF90aGlzMiwgZXZlbnROYW1lLCBmbik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuXG4gICAgaWYgKGV2ZW50IGluIHRoaXMuX2V2ZW50cyA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgZm4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZXZlbnRzW2V2ZW50XS5pbmRleE9mKGZuKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnRzW2V2ZW50XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgbGFzdEluZGV4ID0gZXZlbnQubGFzdEluZGV4T2YoJzonKTtcbiAgICBpZiAobGFzdEluZGV4ID4gLTEpIHtcbiAgICAgICAgZW1pdC5jYWxsLmFwcGx5KGVtaXQsIFt0aGlzLCBldmVudC5zdWJzdHJpbmcoMCwgbGFzdEluZGV4KV0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG5cbiAgICBpZiAoZXZlbnQgaW4gdGhpcy5fZXZlbnRzID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICBmbi5hcHBseShfdGhpczMsIGFyZ3MpO1xuICAgIH0pO1xufTtcblxudmFyIEV2ZW50Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7fTtcblxudmFyIHByb3RvID0gRXZlbnRDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5wcm90by5vbiA9IG9uO1xucHJvdG8ub2ZmID0gb2ZmO1xucHJvdG8uZW1pdCA9IGVtaXQ7XG5cbi8vIGxlZ2FjeSBleHRlbnNpb25zXG5wcm90by5iaW5kID0gb247XG5wcm90by51bmJpbmQgPSBvZmY7XG5wcm90by50cmlnZ2VyID0gZW1pdDtcblxudmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoX2NsYXNzKSB7XG5cbiAgICAvLyBjb25zdHJ1Y3RvclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXZlbnRDb25zdHJ1Y3RvcigpO1xuICAgIH1cblxuICAgIC8vIG1peGluXG4gICAgaWYgKHR5cGVvZiBfY2xhc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX2NsYXNzLnByb3RvdHlwZS5vbiA9IG9uO1xuICAgICAgICBfY2xhc3MucHJvdG90eXBlLm9mZiA9IG9mZjtcbiAgICAgICAgX2NsYXNzLnByb3RvdHlwZS5lbWl0ID0gZW1pdDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9jbGFzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgX2NsYXNzLm9uID0gb247XG4gICAgICAgIF9jbGFzcy5vZmYgPSBvZmY7XG4gICAgICAgIF9jbGFzcy5lbWl0ID0gZW1pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NsYXNzO1xufTtcblxuaGFuZGxlci5FdmVudENvbnN0cnVjdG9yID0gRXZlbnRDb25zdHJ1Y3RvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBoYW5kbGVyOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4uZGVsZXRlQnRuIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggcmVkO1xcbn1cXG5cXG4uZGVsZXRlVG9Eb0J0biB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4IHJlZDtcXG59XFxuXFxuLmNoZWNrVG9Eb0J0biB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4IHJlZDtcXG59XFxuXFxuLmNoZWNrVG9Eb0J0bi5jaGVja2VkIHtcXG4gIGNvbG9yOiBncmVlbnllbGxvdztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCBncmVlbnllbGxvdztcXG59XFxuXFxuLmNyZWF0ZVByb2plY3RCdG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzA4ZmYxZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY3JlYXRlVGFza0J0biB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzA4ZmYxZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmh0bWwge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc4NmE3O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI3MDkxO1xcbn1cXG5cXG5oZWFkZXIgbmF2IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc4NmE3O1xcbiAgcGFkZGluZzogMzVweCAwO1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdhc2lkZSBtYWluJztcXG4gIC1tcy1ncmlkLWNvbHVtbnM6IG1heC1jb250ZW50IGF1dG87XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAtd2Via2l0LW1heC1jb250ZW50IGF1dG87XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIGFzaWRlIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtICgxMDBweCArIDM1cHggKyA3MHB4ICsgNDBweCkpO1xcbiAgLW1zLWdyaWQtcm93OiAxO1xcbiAgLW1zLWdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1hcmVhOiBhc2lkZTtcXG4gIGJvcmRlci1yaWdodDogNXB4IGRvdWJsZSAjMmU0MTZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyNzA5MTtcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXG59XFxuXFxuLmNvbnRhaW5lciBhc2lkZSB1bCBsaSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMmU0MTZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250YWluZXIgbWFpbiB7XFxuICAtbXMtZ3JpZC1yb3c6IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoMTAwcHggKyAzNXB4ICsgNzBweCArIDQwcHgpKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjcwOTE7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxufVxcblxcbi5jb250YWluZXIgbWFpbiB0YWJsZSB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbi5jb250YWluZXIgbWFpbiB0YWJsZSB0aCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzJlNDE2ZjtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uY29udGFpbmVyIG1haW4gdGFibGUgdGJvZHkgdHIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMmU0MTZmO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbi5jb250YWluZXIgbWFpbiB0YWJsZSB0Ym9keSB0ciB0ZCB7XFxuICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLmNvbnRhaW5lciBtYWluIHRhYmxlIHRib2R5IHRyIHRkLmJpZ2dlckZvbnQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU0MTZmO1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbmZvb3RlciAudGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzVweDtcXG59XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvX2NvbXBvbmVudHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvX2xheW91dC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBK0VFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FDRDFCOztBRElBLGdEQUFBO0FBRUE7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQ0ZoQjs7QURLQTtFQUNFLGNBQWM7QUNGaEI7O0FES0E7O0VBRUUsZ0JBQWdCO0FDRmxCOztBREtBOztFQUVFLFlBQVk7QUNGZDs7QURLQTtFQUdJLFdBQVc7RUFDWCxhQUFhO0FDSmpCOztBRFFBO0VBR0ksV0FBVztFQUNYLGFBQWE7QUNQakI7O0FEV0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FDUm5COztBQ2hJQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osNEJBQTRCO0FEbUk5Qjs7QUNqSUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLDRCQUE0QjtBRG9JOUI7O0FDbElBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQXFCO0VBQ3JCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLDRCQUE0QjtBRHFJOUI7O0FDM0lBO0VBUUksa0JBQWtCO0VBQ2xCLG9DQUFvQztBRHVJeEM7O0FDcElBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUR1SW5COztBQ3JJQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBRHdJbkI7O0FDcklBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0FEd0kzQjs7QUN0SUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FEeUluQjs7QUM5SUE7RUFPSSwwQkFBMEI7QUQySTlCOztBRTdNQTtFQUNFLDhCQUFzQjtVQUN0QixzQkFBdUI7RUFDeEIsdUJBQUE7QUZnTkQ7O0FBRUE7RUU5TUUsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNqQix5QkFBQTtBRmdORDs7QUFFQTtFRTlNRSxXQUFBO0VBUUQseUJBQUE7QUZ5TUQ7O0FBRUE7RUVoTkksaUJBQWE7RUFDYixrQkFBaUI7RUFDakIsaUJBQVk7RUFDWixZQUFXO0VBQ1osaUJBQUE7QUZrTkg7O0FBRUE7RUUvTUUsVUFBUTtFQUNSLGNBQUE7RUFDQSx5QkFBZTtFQUNmLGVBQWE7RUFDYixpQkFBQTtFQUNBLGFBQUE7TUFtREQsaUNBQUE7RUYrSkMsa0NBQWtDO01Fek5wQywrQ0FRUTtNQUNKLHVDQUFRO0FGbU5aOztBQUVBO0VFak5JLGtEQUFrQjtFQVluQixlQUFBO0VGd01ELGtCQUFrQjtFRWpPcEIsZ0JBY0k7RUFFSSxnQ0FBeUI7RUFDekIseUJBQWtCO0VBQ2xCLGtCQUFpQjtBRm9OekI7O0FBRUE7RUVsTlEseUJBQWlCO0VBQ2xCLGtCQUFBO0VGb05MLGlCQUFpQjtFRTNPbkIsY0EwQk87RUFDSCxvQkFBZTtFQUNmLG9CQUFRO0VBQ1IsYUFBQTtFQUNBLHlCQUFrQjtNQTJCbkIsc0JBQUE7VUZ5TE8sbUJBQW1CO0VFbFA3Qix5QkErQlU7TUFDSixzQkFBVTtVQUNGLDhCQUFTO0FGcU52Qjs7QUV0UEE7RUFtQ1EsZUFBWTtFQUNaLGtCQUFpQjtFQUNqQixlQUFhO0VBQ2Isa0RBQXlCO0VBQ3pCLHlCQUFjO0VBQ2Ysa0JBQUE7QUZ1TlA7O0FBRUE7RUVyTlUsVUFBUztFQUNULGlCQUFZO0FGdU50Qjs7QUFFQTtFQUNFLFlBQVk7RUV2UWQsaUJBK0JJO0VBa0JRLGlCQUFjO0VBSWYseUJBQUE7RUZzTlQsY0FBYztBRTNRaEI7O0FGOFFBO0VBQ0UsWUFBWTtFRW5OZCxpQkFBTztFQUNMLGtCQUFrQjtFQUNsQix5QkFBUztFQUNULGlCQUFXO0FGcU5iOztBQUVBO0VFL01DLGNBQUE7QUZpTkQ7O0FBRUE7RUVyTkksZUFBYTtBRnVOakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQSxvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgSGFsw6FzeiDDgWTDoW0gPGFkYW1AYWltZm9ybS5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBvcyA9IHJlcXVpcmUoJ29zJyk7IFxuICAgIGlmKG9zLm5ldHdvcmtJbnRlcmZhY2VzKSB2YXIgbmV0d29ya0ludGVyZmFjZXMgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgbG9vcDpcbiAgICAgICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldICE9PSB1bmRlZmluZWQgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbiAgICB9XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCIvKiFcbiAqIHZhbmlsbGEtanMtbW9kYWxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9UaGVDMkdyb3VwL3ZhbmlsbGEtanMtbW9kYWxcbiAqIEB2ZXJzaW9uIDEuMC4xXG4gKiBAbGljZW5zZSBNSVQgKGMpIFRoZSBDMiBHcm91cCAoYzJleHBlcmllbmNlLmNvbSlcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIGV2ZW50SGFuZGxlciA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdjMi1ldmVudC1oYW5kbGVyJykpO1xuXG52YXIgaGFuZGxlciA9IGV2ZW50SGFuZGxlcih7fSk7IC8vIHByaXZhdGUgdmFyaWFibGVzXG5cbnZhciBfY29sbGVjdGlvbiA9IHt9O1xudmFyIF9pbmRleCA9IDA7XG52YXIgX2FjdGl2ZSA9IFtdO1xudmFyIF9yZXN0b3JlID0gW107XG52YXIgX29wdGlvbnMgPSB7XG4gIHpJbmRleFN0YXJ0OiAxMDAwLFxuICBhcHBlbmRUbzogZG9jdW1lbnQuZm9ybXMubGVuZ3RoID4gMCAmJiBkb2N1bWVudC5mb3Jtc1swXS5wYXJlbnRFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5ID8gZG9jdW1lbnQuZm9ybXNbMF0gOiBkb2N1bWVudC5ib2R5IC8vIFRyeSB0byBkZXRlY3QgLk5FVCB3ZWJmb3JtcyBhbmQgYXBwZW5kIHRvIHRoZSAuTkVUIGZvcm1cblxufTsgLy8gZGVmYXVsdCBvcHRpb25zIGZvciBhIG1vZGFsIGluc3RhbmNlXG5cbnZhciBfZGVmYXVsdHMgPSB7XG4gIGhhc092ZXJsYXk6IHRydWUsXG4gIG92ZXJsYXlDbGFzczogJ092ZXJsYXknLFxuICBvdmVybGF5SXNPZmY6IHRydWUsXG4gIGF0dHI6ICdkYXRhLXN0YXRlJyxcbiAgb25TdGF0ZTogJ29uJyxcbiAgb2ZmU3RhdGU6ICdvZmYnLFxuICB2ZXJ0aWNhbGx5Q2VudGVyTW9kYWw6IHRydWVcbn07IC8vIE5lZWQgSUU5KyBwb2x5ZmlsbCBmb3IgY2xvc2VzdFxuXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiAocykge1xuICAgIHZhciBlbCA9IHRoaXM7XG5cbiAgICBkbyB7XG4gICAgICBpZiAoZWwubWF0Y2hlcyhzKSkgcmV0dXJuIGVsO1xuICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50IHx8IGVsLnBhcmVudE5vZGU7XG4gICAgfSB3aGlsZSAoZWwgIT09IG51bGwgJiYgZWwubm9kZVR5cGUgPT09IDEpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59IC8vIFBhc3MgaW4gdGhlIG9iamVjdHMgdG8gbWVyZ2UgYXMgYXJndW1lbnRzLlxuLy8gRm9yIGEgZGVlcCBleHRlbmQsIHNldCB0aGUgZmlyc3QgYXJndW1lbnQgdG8gYHRydWVgLlxuXG5cbnZhciBleHRlbmQgPSBmdW5jdGlvbiBleHRlbmQoKSB7XG4gIC8vIFZhcmlhYmxlc1xuICB2YXIgZXh0ZW5kZWQgPSB7fTtcbiAgdmFyIGRlZXAgPSBmYWxzZTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgLy8gQ2hlY2sgaWYgYSBkZWVwIG1lcmdlXG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHNbMF0pID09PSAnW29iamVjdCBCb29sZWFuXScpIHtcbiAgICBkZWVwID0gYXJndW1lbnRzWzBdO1xuICAgIGkrKztcbiAgfSAvLyBNZXJnZSB0aGUgb2JqZWN0IGludG8gdGhlIGV4dGVuZGVkIG9iamVjdFxuXG5cbiAgdmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2Uob2JqKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAvLyBJZiBkZWVwIG1lcmdlIGFuZCBwcm9wZXJ0eSBpcyBhbiBvYmplY3QsIG1lcmdlIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKGRlZXAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtwcm9wXSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBleHRlbmQodHJ1ZSwgZXh0ZW5kZWRbcHJvcF0sIG9ialtwcm9wXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07IC8vIExvb3AgdGhyb3VnaCBlYWNoIG9iamVjdCBhbmQgY29uZHVjdCBhIG1lcmdlXG5cblxuICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICBtZXJnZShvYmopO1xuICB9XG5cbiAgcmV0dXJuIGV4dGVuZGVkO1xufTtcbi8qKlxuICogZ2V0IHRoZSBkaXN0YW5jZSB0byB0aGUgdG9wIG9mIHRoZSB3aW5kb3cgaWYgdGhlIG1vZGFsIHdhcyBjZW50ZXJlZFxuICogQHBhcmFtIG1vZGFsXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblxuXG52YXIgZ2V0TW9kYWxUb3AgPSBmdW5jdGlvbiBnZXRNb2RhbFRvcChtb2RhbCkge1xuICB2YXIgd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIG1IZWlnaHQgPSBtb2RhbC5vZmZzZXRIZWlnaHQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIHZhciB0b3AgPSBNYXRoLm1heCgod0hlaWdodCAtIG1IZWlnaHQpIC8gMiwgMCkgKyBzY3JvbGxUb3A7XG4gIHJldHVybiB0b3AgKyAncHgnO1xufTtcbi8qKlxuICogZ2V0IHRoZSBhY3RpdmUgbW9kYWxcbiAqIEByZXR1cm4ge09iamVjdH0gbW9kYWwgaW5zdGFuY2VcbiAqL1xuXG5cbnZhciBnZXRBY3RpdmVNb2RhbCA9IGZ1bmN0aW9uIGdldEFjdGl2ZU1vZGFsKCkge1xuICBpZiAoX2FjdGl2ZS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICByZXR1cm4gX2FjdGl2ZVtfYWN0aXZlLmxlbmd0aCAtIDFdO1xufTtcbi8qKlxuICogbmV3IE1vZGFsIGNsYXNzXG4gKi9cblxuXG52YXIgTW9kYWwgPSBmdW5jdGlvbiBNb2RhbChlbCwgaWQsIG9wdGlvbnMpIHtcbiAgLy8gYXNzaWduIHRoZSBtb2RhbCBlbGVtZW50XG4gIHRoaXMuZWwgPSBlbDsgLy8gYXNzaWduIHRoZSBtb2RhbCBpZFxuXG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy5vcHRzID0gZXh0ZW5kKF9kZWZhdWx0cywgb3B0aW9ucyk7XG4gIHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cbiAgaWYgKHRoaXMub3B0cy5oYXNPdmVybGF5KSB7XG4gICAgLy8gY3JlYXRlIG92ZXJsYXlcbiAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLm92ZXJsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0cy5vdmVybGF5Q2xhc3MpO1xuXG4gICAgaWYgKHRoaXMub3B0cy5vdmVybGF5SXNPZmYpIHtcbiAgICAgIHRoaXMub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCB0aGlzLm9wdHMub2ZmU3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm92ZXJsYXkuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgdGhpcy5vcHRzLm9uU3RhdGUpO1xuICAgIH0gLy8gYXBwZW5kIHRoZSBtb2RhbCBhbmQgb3ZlcmxheSB0byB0aGUgYm9keVxuXG5cbiAgICBfb3B0aW9ucy5hcHBlbmRUby5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICB9XG5cbiAgX29wdGlvbnMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG5cbiAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xufTtcblxuZXZlbnRIYW5kbGVyKE1vZGFsKTtcbi8qKlxuICogbW9kYWwub3BlbigpXG4gKi9cblxuTW9kYWwucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmlzT3BlbikgcmV0dXJuO1xuICB0aGlzLmlzT3BlbiA9IHRydWU7IC8vIGFkZCBtb2RhbCB0byB0aGUgc3RhY2tcblxuICBfYWN0aXZlLnB1c2godGhpcyk7XG5cbiAgX3Jlc3RvcmUucHVzaChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICB2YXIgY2FsY3VsYXRlZFpJbmRleCA9IF9vcHRpb25zLnpJbmRleFN0YXJ0ICsgX2FjdGl2ZS5sZW5ndGg7XG4gIHZhciBjYWxjdWxhdGVkVG9wID0gMDtcblxuICBpZiAodGhpcy5vcHRzLmhhc092ZXJsYXkpIHtcbiAgICAvLyBhY3RpdmF0ZSBvdmVybGF5XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlLnpJbmRleCA9IGNhbGN1bGF0ZWRaSW5kZXg7XG4gICAgdGhpcy5vdmVybGF5LnNldEF0dHJpYnV0ZSh0aGlzLm9wdHMuYXR0ciwgdGhpcy5vcHRzLm9uU3RhdGUpO1xuICB9XG5cbiAgaWYgKHRoaXMub3B0cy52ZXJ0aWNhbGx5Q2VudGVyTW9kYWwpIHtcbiAgICBjYWxjdWxhdGVkVG9wID0gZ2V0TW9kYWxUb3AodGhpcy5lbCk7XG4gIH0gLy8gb3BlbiBtb2RhbFxuXG5cbiAgdGhpcy5lbC5zdHlsZS56SW5kZXggPSBjYWxjdWxhdGVkWkluZGV4O1xuICB0aGlzLmVsLnN0eWxlLnRvcCA9IGNhbGN1bGF0ZWRUb3A7XG4gIHRoaXMuZWwuc2V0QXR0cmlidXRlKHRoaXMub3B0cy5hdHRyLCB0aGlzLm9wdHMub25TdGF0ZSk7XG4gIHRoaXMuZW1pdCgnb3BlbicpO1xuICBoYW5kbGVyLmVtaXQoJ29wZW4nLCB0aGlzKTtcbn07XG4vKipcbiAqIG1vZGFsLmNsb3NlKClcbiAqL1xuXG5cbk1vZGFsLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmlzT3BlbikgcmV0dXJuO1xuICB0aGlzLmlzT3BlbiA9IGZhbHNlOyAvLyByZW1vdmUgbW9kYWwgZnJvbSB0aGUgc3RhY2tcblxuICB2YXIgaW5kZXhPZiA9IF9hY3RpdmUuaW5kZXhPZih0aGlzKTtcblxuICB2YXIgcmVzdG9yZTtcblxuICBpZiAoaW5kZXhPZiA+IC0xKSB7XG4gICAgX2FjdGl2ZS5zcGxpY2UoaW5kZXhPZiwgMSk7XG5cbiAgICByZXN0b3JlID0gX3Jlc3RvcmUuc3BsaWNlKGluZGV4T2YsIDEpWzBdO1xuICB9XG5cbiAgaWYgKHRoaXMub3B0cy5oYXNPdmVybGF5KSB7XG4gICAgLy8gZGVhY3RpdmF0ZSBvdmVybGF5XG4gICAgdGhpcy5vdmVybGF5LnNldEF0dHJpYnV0ZSh0aGlzLm9wdHMuYXR0ciwgdGhpcy5vcHRzLm9mZlN0YXRlKTtcbiAgfSAvLyBjbG9zZSBtb2RhbFxuXG5cbiAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUodGhpcy5vcHRzLmF0dHIsIHRoaXMub3B0cy5vZmZTdGF0ZSk7IC8vIHJlc3RvcmUgdGhlIGZvY3VzIHRvIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBlbGVtZW50XG5cbiAgcmVzdG9yZS5mb2N1cygpO1xuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gIGhhbmRsZXIuZW1pdCgnY2xvc2UnLCB0aGlzKTtcbn07XG4vKipcbiAqIG1vZGFsLnZlcnRpY2FsbHlDZW50ZXIoKVxuICovXG5cblxuTW9kYWwucHJvdG90eXBlLnZlcnRpY2FsbHlDZW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZWwuc3R5bGUudG9wID0gZ2V0TW9kYWxUb3AodGhpcy5lbCk7XG59O1xuLyoqXG4gKiBNT0RBTC5jb25maWcoKVxuICogQHBhcmFtIHtPYmplY3R9IG92ZXJ3cml0ZSBNT0RBTCBvcHRpb25zXG4gKi9cblxuXG52YXIgX2NvbmZpZyA9IGZ1bmN0aW9uIF9jb25maWcob3B0aW9ucykge1xuICBleHRlbmQoX29wdGlvbnMsIG9wdGlvbnMpO1xufTtcbi8qKlxuICogTU9EQUwuc2V0RGVmYXVsdHMoKVxuICogQHBhcmFtIHtPYmplY3R9IG92ZXJ3cml0ZSBtb2RhbCBkZWZhdWx0c1xuICovXG5cblxudmFyIF9zZXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9zZXREZWZhdWx0cyhkZWZhdWx0cykge1xuICBleHRlbmQoX2RlZmF1bHRzLCBkZWZhdWx0cyk7XG59O1xuLyoqXG4gKiBNT0RBTC5jcmVhdGUoKVxuICogQHBhcmFtIGVsZW1lbnQgb3Igc2VsZWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5ldyBtb2RhbCBpbnN0YW5jZVxuICovXG5cblxudmFyIF9jcmVhdGUgPSBmdW5jdGlvbiBfY3JlYXRlKGVsLCBvcHRpb25zKSB7XG4gIHZhciBpZDsgLy8gZWFybHkgcmV0dXJuIG9mIGNhY2hlZCBtb2RhbFxuXG4gIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWQgPSBlbC5pbmRleE9mKCcjJykgPT09IDAgPyBlbC5zdWJzdHIoMSkgOiBlbDtcblxuICAgIGlmIChfY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgIHJldHVybiBfY29sbGVjdGlvbltpZF07XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gIGlmICghZWwpIHJldHVybjsgLy8gZGV0ZXJtaW5lIHRoZSBtb2RhbCBpZFxuXG4gIGlkID0gZWwuZ2V0QXR0cmlidXRlKCdpZCcpIHx8ICdfJyArICsrX2luZGV4OyAvLyByZXR1cm4gdGhlIG1vZGFsIGlmIGl0IGV4aXN0c1xuXG4gIGlmIChfY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICByZXR1cm4gX2NvbGxlY3Rpb25baWRdO1xuICB9IC8vIGNyZWF0ZSB0aGUgbW9kYWxcblxuXG4gIHZhciBtb2RhbCA9IG5ldyBNb2RhbChlbCwgaWQsIG9wdGlvbnMpOyAvLyBhZGQgdGhlIG1vZGFsIHRvIHRoZSBjb2xsZWN0aW9uXG5cbiAgX2NvbGxlY3Rpb25baWRdID0gbW9kYWw7XG4gIHJldHVybiBtb2RhbDtcbn07XG4vKipcbiAqIE1PREFMLmNsb3NlQWxsKClcbiAqL1xuXG5cbnZhciBfY2xvc2VBbGwgPSBmdW5jdGlvbiBfY2xvc2VBbGwoKSB7XG4gIHdoaWxlIChfYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICBnZXRBY3RpdmVNb2RhbCgpLmNsb3NlKCk7XG4gIH1cbn07XG4vKipcbiAqIE1PREFMLmNsb3NlQWN0aXZlKClcbiAqL1xuXG5cbnZhciBfY2xvc2VBY3RpdmUgPSBmdW5jdGlvbiBfY2xvc2VBY3RpdmUoKSB7XG4gIHZhciBhY3RpdmUgPSBnZXRBY3RpdmVNb2RhbCgpO1xuXG4gIGlmIChhY3RpdmUpIHtcbiAgICBhY3RpdmUuY2xvc2UoKTtcbiAgfVxufTtcbi8qKlxuICogTU9EQUwub3BlbigpXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqL1xuXG5cbnZhciBfb3BlbiA9IGZ1bmN0aW9uIF9vcGVuKGlkKSB7XG4gIGlmICghX2NvbGxlY3Rpb24uaGFzT3duUHJvcGVydHkoaWQpKSByZXR1cm47XG5cbiAgX2NvbGxlY3Rpb25baWRdLm9wZW4oKTtcbn07XG4vKipcbiAqIE1PREFMLmNsb3NlKClcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICovXG5cblxudmFyIF9jbG9zZSA9IGZ1bmN0aW9uIF9jbG9zZShpZCkge1xuICBpZiAoIV9jb2xsZWN0aW9uLmhhc093blByb3BlcnR5KGlkKSkgcmV0dXJuO1xuXG4gIF9jb2xsZWN0aW9uW2lkXS5jbG9zZSgpO1xufTtcbi8qKlxuICogTU9EQUwudmVydGljYWxseUNlbnRlcigpXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqL1xuXG5cbnZhciBfdmVydGljYWxseUNlbnRlciA9IGZ1bmN0aW9uIF92ZXJ0aWNhbGx5Q2VudGVyKGlkKSB7XG4gIGlmICghX2NvbGxlY3Rpb24uaGFzT3duUHJvcGVydHkoaWQpKSByZXR1cm47XG5cbiAgX2NvbGxlY3Rpb25baWRdLnZlcnRpY2FsbHlDZW50ZXIoKTtcbn07IC8vIGJpbmQgZXZlbnRzIHRvIHRyYXAgdGhlIGZvY3VzIGFuZCBjbG9zZSBvbiAnZXNjJ1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS53aGljaCAhPT0gMjcpIHJldHVybjtcbiAgdmFyIGFjdGl2ZU1vZGFsID0gZ2V0QWN0aXZlTW9kYWwoKTtcbiAgaWYgKCFhY3RpdmVNb2RhbCkgcmV0dXJuO1xuICBhY3RpdmVNb2RhbC5jbG9zZSgpO1xufSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uIChlKSB7XG4gIHZhciBhY3RpdmVNb2RhbCA9IGdldEFjdGl2ZU1vZGFsKCk7XG4gIHZhciBzZWxlY3RvcklzSW5Nb2RhbCA9IGZhbHNlO1xuXG4gIGlmIChhY3RpdmVNb2RhbCkge1xuICAgIHZhciBhY3RpdmVNb2RhbElkID0gYWN0aXZlTW9kYWwuZWwuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIHNlbGVjdG9ySXNJbk1vZGFsID0gZS50YXJnZXQuY2xvc2VzdCgnIycgKyBhY3RpdmVNb2RhbElkKSAhPT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIGlmICghYWN0aXZlTW9kYWwgfHwgc2VsZWN0b3JJc0luTW9kYWwpIHJldHVybjtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgYWN0aXZlTW9kYWwuZWwuZm9jdXMoKTtcbn0sIHRydWUpO1xudmFyIG1vZGFsSGFuZGxlciA9IGV4dGVuZChoYW5kbGVyLCB7XG4gIGNvbmZpZzogX2NvbmZpZyxcbiAgc2V0RGVmYXVsdHM6IF9zZXREZWZhdWx0cyxcbiAgY3JlYXRlOiBfY3JlYXRlLFxuICBjbG9zZUFsbDogX2Nsb3NlQWxsLFxuICBjbG9zZUFjdGl2ZTogX2Nsb3NlQWN0aXZlLFxuICBvcGVuOiBfb3BlbixcbiAgY2xvc2U6IF9jbG9zZSxcbiAgdmVydGljYWxseUNlbnRlcjogX3ZlcnRpY2FsbHlDZW50ZXJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGFsSGFuZGxlcjtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCdcbmltcG9ydCB7IG1haW5ET00gfSBmcm9tICcuL21haW5BbGxUb0RvcydcbmltcG9ydCB7IGluaXRpYWxpemF0aW9uIH0gZnJvbSAnLi4vLi4vc2NyaXB0J1xuLy8gQHRzLWlnbm9yZVxubGV0IE1PREFMID0gcmVxdWlyZSgndmFuaWxsYS1qcy1tb2RhbCcpXG5cbmV4cG9ydCBsZXQgUHJvamVjdExpc3QgPSBbXVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRGVmYXVsdFByb2plY3RzID0gKCkgPT4ge1xuICBjcmVhdGVOZXdQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QnLCAnZGVmYXVsdF9wcm9qZWN0JylcbiAgY3JlYXRlTmV3UHJvamVjdCgnTWFkZSBQcm9qZWN0Jylcbn1cblxuZXhwb3J0IGNvbnN0IGFzaWRlRE9NID0gKCkgPT4ge1xuICBjb25zdCBhc2lkZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpXG4gIGNvbnN0IGhlYWRpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaGVhZGluZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpXG4gIGhlYWRpbmdFbGVtZW50LmlubmVySFRNTCA9ICdBbGwgYXZhaWxhYmxlIHByb2plY3RzOidcbiAgY29uc3QgcHJvamVjdExpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcHJvamVjdExpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0JylcbiAgY29uc3QgbGlzdEFsbFByb2plY3RVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcblxuICBhc2lkZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZ0VsZW1lbnQpXG4gIGFzaWRlRWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEVsZW1lbnQpXG4gIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChsaXN0QWxsUHJvamVjdFVMKVxuXG4gIFByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBsaXN0QWxsUHJvamVjdHNMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBidXR0b25MaW5rVG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b25MaW5rVG9Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgIGJ1dHRvbkxpbmtUb1Byb2plY3QuaW5uZXJIVE1MID0gYCR7cHJvamVjdC5uYW1lfWBcbiAgICBidXR0b25MaW5rVG9Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWFpbkRPTShwcm9qZWN0LnByb2plY3RJRClcbiAgICB9KVxuICAgIGNvbnN0IGJ1dHRvbkRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbkRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnRuJylcbiAgICBidXR0b25EZWxldGVQcm9qZWN0LmlubmVySFRNTCA9ICcmIzk3NDY7J1xuICAgIGlmIChwcm9qZWN0LnByb2plY3RJRCA9PT0gJ2RlZmF1bHRfcHJvamVjdCcpIHtcbiAgICAgIGJ1dHRvbkRlbGV0ZVByb2plY3QuZGlzYWJsZWQgPSB0cnVlXG4gICAgICBidXR0b25EZWxldGVQcm9qZWN0LnN0eWxlLmNvbG9yID0gJ2dyYXknXG4gICAgICBidXR0b25EZWxldGVQcm9qZWN0LnN0eWxlLnRleHRTaGFkb3cgPSAnMXB4IDFweCA1cHggZ3JheSdcbiAgICB9XG4gICAgYnV0dG9uRGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFByb2plY3RMaXN0ID0gUHJvamVjdExpc3QuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5wcm9qZWN0SUQgIT0gcHJvamVjdC5wcm9qZWN0SURcbiAgICAgIClcbiAgICAgIGxpc3RBbGxQcm9qZWN0c0xJLnJlbW92ZSgpXG4gICAgfSlcbiAgICBsaXN0QWxsUHJvamVjdHNMSS5hcHBlbmRDaGlsZChidXR0b25MaW5rVG9Qcm9qZWN0KVxuICAgIGxpc3RBbGxQcm9qZWN0c0xJLmFwcGVuZENoaWxkKGJ1dHRvbkRlbGV0ZVByb2plY3QpXG4gICAgbGlzdEFsbFByb2plY3RVTC5hcHBlbmRDaGlsZChsaXN0QWxsUHJvamVjdHNMSSlcbiAgICByZXR1cm4gbGlzdEFsbFByb2plY3RVTFxuICB9KVxuICBjb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgY3JlYXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdjcmVhdGVQcm9qZWN0QnRuJylcbiAgY3JlYXRlUHJvamVjdEJ0bi5pbm5lckhUTUwgPSAnQ3JlYXRlJ1xuICBjcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHZhciBtb2RhbCA9IE1PREFMLmNyZWF0ZSgnI01vZGFsJylcbiAgICBtb2RhbC5vcGVuKClcbiAgfSlcbiAgYXNpZGVFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RCdG4pXG4gIHJldHVybiBhc2lkZUVsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAocHJvamVjdE5hbWUsIElEKSA9PiB7XG4gIGNvbnN0IE5ld1Byb2plY3QgPSBQcm9qZWN0KHByb2plY3ROYW1lLCBJRClcbiAgTmV3UHJvamVjdC5jcmVhdGVOZXdUYXNrKFxuICAgIGBQcm9qZWN0IElEICR7TmV3UHJvamVjdC5wcm9qZWN0SUR9YCxcbiAgICAnMTMuMS4yMDIyLicsXG4gICAgJ2hpZ2gnXG4gIClcbiAgTmV3UHJvamVjdC5jcmVhdGVOZXdUYXNrKCdEZWZhdWx0IFRhc2sgIzInLCAnMTMuMi4yMDIyLicsICdtZWQnKVxuICBOZXdQcm9qZWN0LmNyZWF0ZU5ld1Rhc2soJ0RlZmF1bHQgVGFzayAjMycsICcxMy4zLjIwMjIuJywgJ2xvdycpXG4gIE5ld1Byb2plY3QuY3JlYXRlTmV3VGFzaygnRGVmYXVsdCBUYXNrICM0JywgJzEzLjQuMjAyMi4nLCAnbm8nKVxuICBQcm9qZWN0TGlzdC5wdXNoKE5ld1Byb2plY3QpXG59XG4iLCJjb25zdCBzdG9ja0Zvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcblxuICBmb290ZXIuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSd0ZXh0Jz4mY29weTsgMjAyMjwvZGl2PlwiXG5cbiAgY29uc3QgYm9keVJldHVybiA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKVxuXG4gIHJldHVybiBib2R5UmV0dXJuXG59XG5cbmNvbnN0IGFwcGVuZEZvb3RlciA9ICgpID0+IHtcbiAgc3RvY2tGb290ZXIoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRGb290ZXJcbiIsImNvbnN0IHN0b2NrSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgcC5pbm5lckhUTUwgPSBgY29ydGV4MTkgPHN0cm9uZz4ke2RvY3VtZW50LnRpdGxlfTwvc3Ryb25nPmBcblxuICBuYXYuYXBwZW5kQ2hpbGQocClcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdilcbiAgY29uc3QgYm9keVJldHVybiA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gIHJldHVybiBib2R5UmV0dXJuXG59XG5cbmNvbnN0IGFwcGVuZEhlYWRlciA9ICgpID0+IHtcbiAgc3RvY2tIZWFkZXIoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRIZWFkZXJcbiIsImltcG9ydCB7IGluaXRpYWxpemF0aW9uIH0gZnJvbSAnLi4vLi4vc2NyaXB0J1xuaW1wb3J0IHsgUHJvamVjdExpc3QgfSBmcm9tICcuL2FzaWRlQWxsUHJvamVjdHMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnXG5jb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuXG5jb25zdCBwcmludEhlYWROYW1lcyA9ICgpID0+IHtcbiAgY29uc3QgdGFibGVIZWFkTmFtZXMgPSBbXG4gICAgJ05hbWUgb2YgVGFzaycsXG4gICAgJ0R1ZSBEYXRlJyxcbiAgICAnQ2hlY2sgZm9yIFNvbHZlZCcsXG4gICAgJ0RlbGV0ZSBUYXNrJyxcbiAgXVxuICBjb25zdCB0aGVhZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpXG4gIGNvbnN0IHRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgbGV0IHRhYmxlSGVhZFxuICB0YWJsZUhlYWROYW1lcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgdGFibGVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKVxuICAgIHRhYmxlSGVhZC5pbm5lckhUTUwgPSBlbGVtZW50XG4gICAgdGFibGVSb3dFbGVtZW50LmFwcGVuZENoaWxkKHRhYmxlSGVhZClcbiAgICByZXR1cm4gdGFibGVSb3dFbGVtZW50XG4gIH0pXG4gIHRoZWFkRWxlbWVudC5hcHBlbmRDaGlsZCh0YWJsZVJvd0VsZW1lbnQpXG5cbiAgcmV0dXJuIHRoZWFkRWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgbWFpbkRPTSA9IChwcm9qZWN0SUQgPSAnZGVmYXVsdF9wcm9qZWN0JykgPT4ge1xuICBjb25zdCB0cnVlTWFyayA9IGAmIzk3NDU7YFxuICBjb25zdCBmYWxzZU1hcmsgPSBgJiM5NzQ2O2BcblxuICBtYWluRWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICBjb25zdCBoZWFkaW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGhlYWRpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKVxuICBoZWFkaW5nRWxlbWVudC5pbm5lckhUTUwgPSBgQWxsIFRvLURvIGZyb20gcHJvamVjdCAke1xuICAgIHByb2plY3RJRCA9PT0gdW5kZWZpbmVkID8gJz4+Q2xpY2sgT24gUHJvamVjdDw8JyA6IHByb2plY3RJRFxuICB9YFxuICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nRWxlbWVudClcbiAgY29uc3QgdGFibGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKVxuICB0YWJsZUVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpbnRIZWFkTmFtZXMoKSlcbiAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKVxuXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gUHJvamVjdExpc3QuZmlsdGVyKFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3RJRCA9PT0gcHJvamVjdElEXG4gIClcbiAgbGV0IGRpc3BsYXlUYXNrc1xuICBkaXNwbGF5UHJvamVjdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IChkaXNwbGF5VGFza3MgPSBhdHRyaWJ1dGUudGFza3MpKVxuXG4gIGRpc3BsYXlUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgY29uc3QgdGFibGVDZWxsT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgIHRhYmxlQ2VsbE9uZS5pbm5lckhUTUwgPSB0YXNrLnRhc2tOYW1lXG4gICAgY29uc3QgdGFibGVDZWxsVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgIHRhYmxlQ2VsbFR3by5pbm5lckhUTUwgPSB0YXNrLnRhc2tEYXRlXG4gICAgY29uc3QgdGFibGVDZWxsVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgY29uc3QgaXNGaW5pc2hlZENoZWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBpZiAodGFzay5pc0ZpbmlzaGVkKSB7XG4gICAgICBpc0ZpbmlzaGVkQ2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgnY2hlY2tUb0RvQnRuJywgJ2NoZWNrZWQnKVxuICAgICAgaXNGaW5pc2hlZENoZWNrQnRuLmlubmVySFRNTCA9ICcmIzk3NDU7J1xuICAgICAgdGFibGVDZWxsVGhyZWUuYXBwZW5kQ2hpbGQoaXNGaW5pc2hlZENoZWNrQnRuKVxuICAgIH0gZWxzZSB7XG4gICAgICBpc0ZpbmlzaGVkQ2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgnY2hlY2tUb0RvQnRuJylcbiAgICAgIGlzRmluaXNoZWRDaGVja0J0bi5pbm5lckhUTUwgPSAnJiM5NzQ2OydcbiAgICAgIHRhYmxlQ2VsbFRocmVlLmFwcGVuZENoaWxkKGlzRmluaXNoZWRDaGVja0J0bilcbiAgICB9XG4gICAgaXNGaW5pc2hlZENoZWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRhc2suaXNGaW5pc2hlZCkge1xuICAgICAgICB0YXNrLmlzRmluaXNoZWQgPSBmYWxzZVxuICAgICAgICBpc0ZpbmlzaGVkQ2hlY2tCdG4uaW5uZXJIVE1MID0gJyYjOTc0NjsnXG4gICAgICAgIGlzRmluaXNoZWRDaGVja0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJylcbiAgICAgIH0gZWxzZSBpZiAoIXRhc2suaXNGaW5pc2hlZCkge1xuICAgICAgICB0YXNrLmlzRmluaXNoZWQgPSB0cnVlXG4gICAgICAgIGlzRmluaXNoZWRDaGVja0J0bi5pbm5lckhUTUwgPSAnJiM5NzQ1OydcbiAgICAgICAgaXNGaW5pc2hlZENoZWNrQnRuLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgdGFibGVDZWxsRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICBjb25zdCBkZWxldGVUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkZWxldGVUb0RvQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRvRG9CdG4nKVxuICAgIGRlbGV0ZVRvRG9CdG4uaW5uZXJIVE1MID0gJyYjOTc0NjsnXG4gICAgdGFibGVDZWxsRm91ci5hcHBlbmRDaGlsZChkZWxldGVUb0RvQnRuKVxuICAgIGRlbGV0ZVRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5VGFza3MgPSBkaXNwbGF5VGFza3MuZmlsdGVyKCh0YXNrcykgPT4gdGFza3MgIT0gdGFzaylcbiAgICAgIHRhYmxlUm93LnJlbW92ZSgpXG4gICAgfSlcblxuICAgIHRhYmxlUm93LmFwcGVuZCh0YWJsZUNlbGxPbmUpXG4gICAgdGFibGVSb3cuYXBwZW5kKHRhYmxlQ2VsbFR3bylcbiAgICB0YWJsZVJvdy5hcHBlbmQodGFibGVDZWxsVGhyZWUpXG4gICAgdGFibGVSb3cuYXBwZW5kKHRhYmxlQ2VsbEZvdXIpXG4gICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHRhYmxlUm93KVxuICAgIHJldHVybiB0YWJsZUJvZHlcbiAgfSlcblxuICB0YWJsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGVCb2R5KVxuICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZCh0YWJsZUVsZW1lbnQpXG4gIGNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBjcmVhdGVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRhc2tCdG4nKVxuICBjcmVhdGVUYXNrQnRuLmlubmVySFRNTCA9ICdDcmVhdGUnXG4gIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tCdG4pXG4gIHJldHVybiBtYWluRWxlbWVudFxufVxuIiwiaW1wb3J0IHVuaXFpZCBmcm9tICd1bmlxaWQnXG5jb25zdCBQcm9qZWN0ID0gKG5hbWUsIGRlZmF1bHRfaWQpID0+IHtcbiAgbGV0IHByb2plY3RJRFxuICBpZiAoZGVmYXVsdF9pZCkge1xuICAgIHByb2plY3RJRCA9IGRlZmF1bHRfaWRcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0SUQgPSB1bmlxaWQoKVxuICB9XG4gIGxldCB0YXNrcyA9IFtdXG5cbiAgY29uc3QgY3JlYXRlTmV3VGFzayA9ICh0YXNrTmFtZSwgdGFza0RhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgSUQgPSB1bmlxaWQoKVxuICAgIGNvbnN0IGlzRmluaXNoZWQgPSBmYWxzZVxuICAgIGNvbnN0IHB1c2hPYmplY3QgPSB7XG4gICAgICBwcm9qZWN0SUQ6IHByb2plY3RJRCxcbiAgICAgIHRhc2tJRDogSUQsXG4gICAgICB0YXNrTmFtZTogdGFza05hbWUsXG4gICAgICB0YXNrRGF0ZTogdGFza0RhdGUsXG4gICAgICBpc0ZpbmlzaGVkOiBpc0ZpbmlzaGVkLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIH1cbiAgICB0YXNrcy5wdXNoKHB1c2hPYmplY3QpXG4gIH1cblxuICByZXR1cm4geyBuYW1lLCB0YXNrcywgcHJvamVjdElELCBjcmVhdGVOZXdUYXNrIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxuIiwiaW1wb3J0ICcuL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJ1xuaW1wb3J0IGFwcGVuZEhlYWRlciBmcm9tICcuL2Fzc2V0cy9qcy9oZWFkZXInXG5pbXBvcnQgYXBwZW5kRm9vdGVyIGZyb20gJy4vYXNzZXRzL2pzL2Zvb3RlcidcbmltcG9ydCB7IGFzaWRlRE9NIH0gZnJvbSAnLi9hc3NldHMvanMvYXNpZGVBbGxQcm9qZWN0cydcbmltcG9ydCB7IG1haW5ET00gfSBmcm9tICcuL2Fzc2V0cy9qcy9tYWluQWxsVG9Eb3MnXG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0UHJvamVjdHMgfSBmcm9tICcuL2Fzc2V0cy9qcy9hc2lkZUFsbFByb2plY3RzJ1xuXG5jb25zdCB0b0RvTGlzdERPTSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFzaWRlRE9NKCkpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluRE9NKCkpXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXphdGlvbiA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJ1xuICBhcHBlbmRIZWFkZXIoKVxuICB0b0RvTGlzdERPTSgpXG4gIGFwcGVuZEZvb3RlcigpXG59XG5cbmNyZWF0ZURlZmF1bHRQcm9qZWN0cygpXG5pbml0aWFsaXphdGlvbigpXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9