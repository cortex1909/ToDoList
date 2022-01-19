/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none;\n}\n\nq:before, q:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.deleteBtn {\n  background: transparent;\n  color: red;\n  font-size: 2rem;\n  outline: none;\n  border: none;\n  text-shadow: 1px 1px 5px red;\n}\n\n.deleteToDoBtn {\n  background: transparent;\n  color: red;\n  font-size: 2rem;\n  outline: none;\n  border: none;\n  text-shadow: 1px 1px 5px red;\n}\n\n.checkToDoBtn {\n  background: transparent;\n  color: red;\n  font-size: 2rem;\n  outline: none;\n  border: none;\n  text-shadow: 1px 1px 5px red;\n}\n\n.checkToDoBtn.checked {\n  color: greenyellow;\n  text-shadow: 1px 1px 5px greenyellow;\n}\n\n.createProjectBtn {\n  width: 100%;\n  height: 50px;\n  background: none;\n  border: 1px solid #08ff1d;\n  border-radius: 5px;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.createTaskBtn {\n  float: right;\n  width: 150px;\n  height: 50px;\n  background: none;\n  border: 1px solid #08ff1d;\n  border-radius: 5px;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.heading {\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.project {\n  color: white;\n  background: none;\n  border: none;\n  font-style: italic;\n  font-size: 1.2rem;\n}\n\n.project:hover {\n  text-decoration: underline;\n}\n\n.modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.modal .body {\n  color: white;\n  font-size: 1.3rem;\n  text-align: center;\n}\n\n.modal .body h2 .closeBtn {\n  background: none;\n  color: red;\n  border: none;\n  font-size: 1.5rem;\n}\n\n.modal .body .createTaskBtn {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.modal .body form {\n  margin-top: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.modal .body form input {\n  margin-bottom: 5px;\n}\n\n.modal .body form .radioChoice {\n  margin-top: 10px;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nbody {\n  position: relative;\n  min-height: 100vh;\n  background-color: #7786a7;\n}\n\nheader {\n  width: 100%;\n  background-color: #627091;\n}\n\nheader nav {\n  min-height: 100px;\n  line-height: 100px;\n  margin-left: 30px;\n  color: white;\n  font-size: 1.4rem;\n}\n\n.container {\n  width: 90%;\n  margin: 0 auto;\n  background-color: #7786a7;\n  padding: 35px 0;\n  display: -ms-grid;\n  display: grid;\n      grid-template-areas: 'aside main';\n  -ms-grid-columns: max-content auto;\n      grid-template-columns: -webkit-max-content auto;\n      grid-template-columns: max-content auto;\n}\n\n.container aside {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: aside;\n  margin-bottom: 35px;\n  border-right: 5px double #2e416f;\n  background-color: #627091;\n  padding: 20px 20px;\n}\n\n.container aside ul li {\n  border: 1px solid #2e416f;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.container main {\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  grid-area: main;\n  background-color: #627091;\n  padding: 20px 20px;\n  margin-bottom: 35px;\n}\n\n.container main table {\n  width: 80%;\n  margin: 10px auto;\n}\n\n.container main table th {\n  color: white;\n  font-size: 1.2rem;\n  font-weight: bold;\n  border: 3px solid #2e416f;\n  padding: 5px 0;\n}\n\n.container main table tbody tr {\n  color: white;\n  font-size: 1.2rem;\n  text-align: center;\n  border: 2px solid #2e416f;\n  line-height: 2rem;\n}\n\n.container main table tbody tr td {\n  padding: 5px 0;\n}\n\n.container main table tbody tr td.biggerFont {\n  font-size: 2rem;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: #2e416f;\n  color: #fff;\n  height: 35px;\n}\n\nfooter .text {\n  text-align: center;\n  line-height: 35px;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/assets/css/_base.scss","webpack://./src/assets/css/style.css","webpack://./src/assets/css/_components.scss","webpack://./src/assets/css/_layout.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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




let ProjectList = []

const createDefaultProjects = () => {
  createNewProject('Default Project', 'default_project')
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
      ;(0,_script__WEBPACK_IMPORTED_MODULE_2__.initialization)()
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
    const projectName = prompt('Enter project name', 'Project name')
    const NewProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName)
    ProjectList.push(NewProject)
    const _projectID = NewProject.GetID()
    ;(0,_script__WEBPACK_IMPORTED_MODULE_2__.initialization)(_projectID)
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
  NewProject.createNewTask('Default Task #2', '2022-31-01.', 'med')
  NewProject.createNewTask('Default Task #3', '2022-25-02', 'low')

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
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);




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
      _asideAllProjects__WEBPACK_IMPORTED_MODULE_1__.ProjectList.filter((project) => {
        if (project.projectID === projectID) {
          project.tasks = displayTasks
        }
      })
      tableRow.remove()
    })

    tableRow.append(tableCellOne)
    tableRow.append(tableCellTwo)
    tableRow.append(tableCellThree)
    tableRow.append(tableCellFour)
    if (task.priority === 'high') {
      tableRow.style.backgroundColor = '#f003'
    } else if (task.priority === 'med') {
      tableRow.style.backgroundColor = '#ffa5004f'
    } else if (task.priority === 'low') {
      tableRow.style.backgroundColor = '#ffff005e'
    }
    tableBody.appendChild(tableRow)
    return tableBody
  })

  tableElement.appendChild(tableBody)
  mainElement.appendChild(tableElement)
  const createTaskBtn = document.createElement('button')
  createTaskBtn.classList.add('createTaskBtn')
  createTaskBtn.innerHTML = 'Create'
  createTaskBtn.addEventListener('click', () => {
    const modalElement = document.createElement('div')
    modalElement.classList.add('modal')
    const modalBody = document.createElement('div')
    modalBody.classList.add('body')
    const h2Element = document.createElement('h2')
    h2Element.innerHTML = `Create New Task for "${projectID}"`
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('closeBtn')
    closeBtn.innerHTML = '&#9746;'
    modalBody.appendChild(h2Element)
    h2Element.appendChild(closeBtn)
    const formElement = document.createElement('form')

    const TaskNameInput = document.createElement('input')
    TaskNameInput.type = 'text'
    TaskNameInput.placeholder = 'Name of Task'

    const DueDateInput = document.createElement('input')
    DueDateInput.type = 'date'
    DueDateInput.placeholder = 'Due Date'

    formElement.appendChild(TaskNameInput)
    formElement.appendChild(DueDateInput)

    const radioChoice = document.createElement('div')
    radioChoice.classList.add('radioChoice')

    const lowPriority = document.createElement('input')
    lowPriority.type = 'radio'
    lowPriority.name = 'priorityCheck'
    lowPriority.value = 'low'
    const lowPriorityLabel = document.createElement('label')
    lowPriorityLabel.for = lowPriority
    lowPriorityLabel.innerHTML = 'Low Priority'
    radioChoice.appendChild(lowPriority)
    radioChoice.appendChild(lowPriorityLabel)

    const mediumPriority = document.createElement('input')
    mediumPriority.type = 'radio'
    mediumPriority.name = 'priorityCheck'
    mediumPriority.value = 'med'
    const mediumPriorityLabel = document.createElement('label')
    mediumPriorityLabel.for = mediumPriority
    mediumPriorityLabel.innerHTML = 'Medium Priority'
    radioChoice.appendChild(mediumPriority)
    radioChoice.appendChild(mediumPriorityLabel)

    const highPriority = document.createElement('input')
    highPriority.type = 'radio'
    highPriority.name = 'priorityCheck'
    highPriority.value = 'high'
    const highPriorityLabel = document.createElement('label')
    highPriorityLabel.for = highPriority
    highPriorityLabel.innerHTML = 'High Priority'
    radioChoice.appendChild(highPriority)
    radioChoice.appendChild(highPriorityLabel)
    formElement.appendChild(radioChoice)

    const createTask = document.createElement('button')
    createTask.classList.add('createTaskBtn')
    createTask.innerHTML = 'Create'
    modalBody.appendChild(formElement)
    modalBody.appendChild(createTask)
    modalElement.appendChild(modalBody)
    mainElement.appendChild(modalElement)

    closeBtn.addEventListener('click', () => {
      modalElement.style.display = 'none'
    })
    createTask.addEventListener('click', () => {
      const radioCheck = document.querySelector(
        'input[name="priorityCheck"]:checked'
      )
      const array = {
        projectID: projectID,
        taskID: uniqid__WEBPACK_IMPORTED_MODULE_3___default()(),
        taskName: TaskNameInput.value,
        taskDate: DueDateInput.value,
        priority: radioCheck.value,
        isFinished: false,
      }
      displayTasks.push(array)
      ;(0,_script__WEBPACK_IMPORTED_MODULE_0__.initialization)(projectID)
    })
  })
  mainElement.appendChild(createTaskBtn)
  return mainElement
}
//taskName, taskDate, priroity


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

  const GetID = () => {
    return projectID
  }

  return { name, tasks, projectID, createNewTask, GetID }
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







const toDoListDOM = (projectID) => {
  const container = document.createElement('div')
  container.classList.add('container')

  container.appendChild((0,_assets_js_asideAllProjects__WEBPACK_IMPORTED_MODULE_3__.asideDOM)(projectID))
  container.appendChild((0,_assets_js_mainAllToDos__WEBPACK_IMPORTED_MODULE_4__.mainDOM)(projectID))

  document.body.appendChild(container)
}

const initialization = (projectID) => {
  document.body.innerHTML = ''
  ;(0,_assets_js_header__WEBPACK_IMPORTED_MODULE_1__["default"])()
  toDoListDOM(projectID)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFlBQVksT0FBTyxXQUFXLGVBQWUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFFBQVEsTUFBTSxZQUFZLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxRQUFRLE1BQU0sWUFBWSxhQUFhLFFBQVEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsTUFBTSxZQUFZLFFBQVEsTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxlQUFlLFFBQVEsS0FBSyxXQUFXLFdBQVcsYUFBYSxRQUFRLE1BQU0sWUFBWSxXQUFXLFlBQVksWUFBWSxRQUFRLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxhQUFhLFlBQVksWUFBWSxXQUFXLFlBQVksWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLFFBQVEsS0FBSyxhQUFhLFlBQVksYUFBYSxRQUFRLE1BQU0sV0FBVyxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxVQUFVLFdBQVcsUUFBUSxLQUFLLFdBQVcsV0FBVyxhQUFhLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLGFBQWEsUUFB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V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0aW5nLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3Rlc3RpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rlc3RpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2NkZDYiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Rlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vc3JjL2Fzc2V0cy9qcy9hc2lkZUFsbFByb2plY3RzLmpzIiwid2VicGFjazovL3Rlc3RpbmcvLi9zcmMvYXNzZXRzL2pzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90ZXN0aW5nLy4vc3JjL2Fzc2V0cy9qcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL3NyYy9hc3NldHMvanMvbWFpbkFsbFRvRG9zLmpzIiwid2VicGFjazovL3Rlc3RpbmcvLi9zcmMvYXNzZXRzL2pzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vdGVzdGluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXN0aW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rlc3Rpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rlc3Rpbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZXN0aW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVzdGluZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Rlc3Rpbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rlc3Rpbmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4uZGVsZXRlQnRuIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggcmVkO1xcbn1cXG5cXG4uZGVsZXRlVG9Eb0J0biB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4IHJlZDtcXG59XFxuXFxuLmNoZWNrVG9Eb0J0biB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4IHJlZDtcXG59XFxuXFxuLmNoZWNrVG9Eb0J0bi5jaGVja2VkIHtcXG4gIGNvbG9yOiBncmVlbnllbGxvdztcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCBncmVlbnllbGxvdztcXG59XFxuXFxuLmNyZWF0ZVByb2plY3RCdG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzA4ZmYxZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY3JlYXRlVGFza0J0biB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzA4ZmYxZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4ubW9kYWwgLmJvZHkge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbCAuYm9keSBoMiAuY2xvc2VCdG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1vZGFsIC5ib2R5IC5jcmVhdGVUYXNrQnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm1vZGFsIC5ib2R5IGZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwgLmJvZHkgZm9ybSBpbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5tb2RhbCAuYm9keSBmb3JtIC5yYWRpb0Nob2ljZSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5odG1sIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3ODZhNztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyNzA5MTtcXG59XFxuXFxuaGVhZGVyIG5hdiB7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3ODZhNztcXG4gIHBhZGRpbmc6IDM1cHggMDtcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYXNpZGUgbWFpbic7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiBtYXgtY29udGVudCBhdXRvO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLXdlYmtpdC1tYXgtY29udGVudCBhdXRvO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciBhc2lkZSB7XFxuICAtbXMtZ3JpZC1yb3c6IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLWFyZWE6IGFzaWRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG4gIGJvcmRlci1yaWdodDogNXB4IGRvdWJsZSAjMmU0MTZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyNzA5MTtcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXG59XFxuXFxuLmNvbnRhaW5lciBhc2lkZSB1bCBsaSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMmU0MTZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250YWluZXIgbWFpbiB7XFxuICAtbXMtZ3JpZC1yb3c6IDE7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI3MDkxO1xcbiAgcGFkZGluZzogMjBweCAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG59XFxuXFxuLmNvbnRhaW5lciBtYWluIHRhYmxlIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciBtYWluIHRhYmxlIHRoIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMmU0MTZmO1xcbiAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5jb250YWluZXIgbWFpbiB0YWJsZSB0Ym9keSB0ciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyZTQxNmY7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciBtYWluIHRhYmxlIHRib2R5IHRyIHRkIHtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uY29udGFpbmVyIG1haW4gdGFibGUgdGJvZHkgdHIgdGQuYmlnZ2VyRm9udCB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTQxNmY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuZm9vdGVyIC50ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9fY29tcG9uZW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9fbGF5b3V0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUErRUUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUNEMUI7O0FESUEsZ0RBQUE7QUFFQTs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FDRmhCOztBREtBO0VBQ0UsY0FBYztBQ0ZoQjs7QURLQTs7RUFFRSxnQkFBZ0I7QUNGbEI7O0FES0E7O0VBRUUsWUFBWTtBQ0ZkOztBREtBO0VBR0ksV0FBVztFQUNYLGFBQWE7QUNKakI7O0FEUUE7RUFHSSxXQUFXO0VBQ1gsYUFBYTtBQ1BqQjs7QURXQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUNSbkI7O0FDaElBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBNEI7QURtSTlCOztBQ2pJQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osNEJBQTRCO0FEb0k5Qjs7QUNsSUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7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LGNBT1E7QUZvUVI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQSxvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgSGFsw6FzeiDDgWTDoW0gPGFkYW1AYWltZm9ybS5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBvcyA9IHJlcXVpcmUoJ29zJyk7IFxuICAgIGlmKG9zLm5ldHdvcmtJbnRlcmZhY2VzKSB2YXIgbmV0d29ya0ludGVyZmFjZXMgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgbG9vcDpcbiAgICAgICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldICE9PSB1bmRlZmluZWQgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbiAgICB9XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgeyBtYWluRE9NIH0gZnJvbSAnLi9tYWluQWxsVG9Eb3MnXG5pbXBvcnQgeyBpbml0aWFsaXphdGlvbiB9IGZyb20gJy4uLy4uL3NjcmlwdCdcblxuZXhwb3J0IGxldCBQcm9qZWN0TGlzdCA9IFtdXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNyZWF0ZU5ld1Byb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcsICdkZWZhdWx0X3Byb2plY3QnKVxufVxuXG5leHBvcnQgY29uc3QgYXNpZGVET00gPSAoKSA9PiB7XG4gIGNvbnN0IGFzaWRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJylcbiAgY29uc3QgaGVhZGluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBoZWFkaW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJylcbiAgaGVhZGluZ0VsZW1lbnQuaW5uZXJIVE1MID0gJ0FsbCBhdmFpbGFibGUgcHJvamVjdHM6J1xuICBjb25zdCBwcm9qZWN0TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwcm9qZWN0TGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnKVxuICBjb25zdCBsaXN0QWxsUHJvamVjdFVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuXG4gIGFzaWRlRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nRWxlbWVudClcbiAgYXNpZGVFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RMaXN0RWxlbWVudClcbiAgcHJvamVjdExpc3RFbGVtZW50LmFwcGVuZENoaWxkKGxpc3RBbGxQcm9qZWN0VUwpXG5cbiAgUHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGxpc3RBbGxQcm9qZWN0c0xJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGNvbnN0IGJ1dHRvbkxpbmtUb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbkxpbmtUb1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgYnV0dG9uTGlua1RvUHJvamVjdC5pbm5lckhUTUwgPSBgJHtwcm9qZWN0Lm5hbWV9YFxuICAgIGJ1dHRvbkxpbmtUb1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtYWluRE9NKHByb2plY3QucHJvamVjdElEKVxuICAgIH0pXG4gICAgY29uc3QgYnV0dG9uRGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uRGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdG4nKVxuICAgIGJ1dHRvbkRlbGV0ZVByb2plY3QuaW5uZXJIVE1MID0gJyYjOTc0NjsnXG4gICAgaWYgKHByb2plY3QucHJvamVjdElEID09PSAnZGVmYXVsdF9wcm9qZWN0Jykge1xuICAgICAgYnV0dG9uRGVsZXRlUHJvamVjdC5kaXNhYmxlZCA9IHRydWVcbiAgICAgIGJ1dHRvbkRlbGV0ZVByb2plY3Quc3R5bGUuY29sb3IgPSAnZ3JheSdcbiAgICAgIGJ1dHRvbkRlbGV0ZVByb2plY3Quc3R5bGUudGV4dFNoYWRvdyA9ICcxcHggMXB4IDVweCBncmF5J1xuICAgIH1cbiAgICBidXR0b25EZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgUHJvamVjdExpc3QgPSBQcm9qZWN0TGlzdC5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnByb2plY3RJRCAhPSBwcm9qZWN0LnByb2plY3RJRFxuICAgICAgKVxuICAgICAgbGlzdEFsbFByb2plY3RzTEkucmVtb3ZlKClcbiAgICAgIGluaXRpYWxpemF0aW9uKClcbiAgICB9KVxuICAgIGxpc3RBbGxQcm9qZWN0c0xJLmFwcGVuZENoaWxkKGJ1dHRvbkxpbmtUb1Byb2plY3QpXG4gICAgbGlzdEFsbFByb2plY3RzTEkuYXBwZW5kQ2hpbGQoYnV0dG9uRGVsZXRlUHJvamVjdClcbiAgICBsaXN0QWxsUHJvamVjdFVMLmFwcGVuZENoaWxkKGxpc3RBbGxQcm9qZWN0c0xJKVxuICAgIHJldHVybiBsaXN0QWxsUHJvamVjdFVMXG4gIH0pXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBjcmVhdGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVByb2plY3RCdG4nKVxuICBjcmVhdGVQcm9qZWN0QnRuLmlubmVySFRNTCA9ICdDcmVhdGUnXG4gIGNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoJ0VudGVyIHByb2plY3QgbmFtZScsICdQcm9qZWN0IG5hbWUnKVxuICAgIGNvbnN0IE5ld1Byb2plY3QgPSBQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgIFByb2plY3RMaXN0LnB1c2goTmV3UHJvamVjdClcbiAgICBjb25zdCBfcHJvamVjdElEID0gTmV3UHJvamVjdC5HZXRJRCgpXG4gICAgaW5pdGlhbGl6YXRpb24oX3Byb2plY3RJRClcbiAgfSlcbiAgYXNpZGVFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RCdG4pXG4gIHJldHVybiBhc2lkZUVsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAocHJvamVjdE5hbWUsIElEKSA9PiB7XG4gIGNvbnN0IE5ld1Byb2plY3QgPSBQcm9qZWN0KHByb2plY3ROYW1lLCBJRClcbiAgTmV3UHJvamVjdC5jcmVhdGVOZXdUYXNrKFxuICAgIGBQcm9qZWN0IElEICR7TmV3UHJvamVjdC5wcm9qZWN0SUR9YCxcbiAgICAnMTMuMS4yMDIyLicsXG4gICAgJ2hpZ2gnXG4gIClcbiAgTmV3UHJvamVjdC5jcmVhdGVOZXdUYXNrKCdEZWZhdWx0IFRhc2sgIzInLCAnMjAyMi0zMS0wMS4nLCAnbWVkJylcbiAgTmV3UHJvamVjdC5jcmVhdGVOZXdUYXNrKCdEZWZhdWx0IFRhc2sgIzMnLCAnMjAyMi0yNS0wMicsICdsb3cnKVxuXG4gIFByb2plY3RMaXN0LnB1c2goTmV3UHJvamVjdClcbn1cbiIsImNvbnN0IHN0b2NrRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuXG4gIGZvb3Rlci5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J3RleHQnPiZjb3B5OyAyMDIyPC9kaXY+XCJcblxuICBjb25zdCBib2R5UmV0dXJuID0gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpXG5cbiAgcmV0dXJuIGJvZHlSZXR1cm5cbn1cblxuY29uc3QgYXBwZW5kRm9vdGVyID0gKCkgPT4ge1xuICBzdG9ja0Zvb3RlcigpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZEZvb3RlclxuIiwiY29uc3Qgc3RvY2tIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICBwLmlubmVySFRNTCA9IGBjb3J0ZXgxOSA8c3Ryb25nPiR7ZG9jdW1lbnQudGl0bGV9PC9zdHJvbmc+YFxuXG4gIG5hdi5hcHBlbmRDaGlsZChwKVxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KVxuICBjb25zdCBib2R5UmV0dXJuID0gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgcmV0dXJuIGJvZHlSZXR1cm5cbn1cblxuY29uc3QgYXBwZW5kSGVhZGVyID0gKCkgPT4ge1xuICBzdG9ja0hlYWRlcigpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZEhlYWRlclxuIiwiaW1wb3J0IHsgaW5pdGlhbGl6YXRpb24gfSBmcm9tICcuLi8uLi9zY3JpcHQnXG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gJy4vYXNpZGVBbGxQcm9qZWN0cydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCdcbmltcG9ydCB1bmlxaWQgZnJvbSAndW5pcWlkJ1xuY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcblxuY29uc3QgcHJpbnRIZWFkTmFtZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHRhYmxlSGVhZE5hbWVzID0gW1xuICAgICdOYW1lIG9mIFRhc2snLFxuICAgICdEdWUgRGF0ZScsXG4gICAgJ0NoZWNrIGZvciBTb2x2ZWQnLFxuICAgICdEZWxldGUgVGFzaycsXG4gIF1cbiAgY29uc3QgdGhlYWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKVxuICBjb25zdCB0YWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gIGxldCB0YWJsZUhlYWRcbiAgdGFibGVIZWFkTmFtZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIHRhYmxlSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJylcbiAgICB0YWJsZUhlYWQuaW5uZXJIVE1MID0gZWxlbWVudFxuICAgIHRhYmxlUm93RWxlbWVudC5hcHBlbmRDaGlsZCh0YWJsZUhlYWQpXG4gICAgcmV0dXJuIHRhYmxlUm93RWxlbWVudFxuICB9KVxuICB0aGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGVSb3dFbGVtZW50KVxuXG4gIHJldHVybiB0aGVhZEVsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0IG1haW5ET00gPSAocHJvamVjdElEID0gJ2RlZmF1bHRfcHJvamVjdCcpID0+IHtcbiAgY29uc3QgdHJ1ZU1hcmsgPSBgJiM5NzQ1O2BcbiAgY29uc3QgZmFsc2VNYXJrID0gYCYjOTc0NjtgXG5cbiAgbWFpbkVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgY29uc3QgaGVhZGluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBoZWFkaW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJylcbiAgaGVhZGluZ0VsZW1lbnQuaW5uZXJIVE1MID0gYEFsbCBUby1EbyBmcm9tIHByb2plY3QgJHtcbiAgICBwcm9qZWN0SUQgPT09IHVuZGVmaW5lZCA/ICc+PkNsaWNrIE9uIFByb2plY3Q8PCcgOiBwcm9qZWN0SURcbiAgfWBcbiAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZ0VsZW1lbnQpXG4gIGNvbnN0IHRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJylcbiAgdGFibGVFbGVtZW50LmFwcGVuZENoaWxkKHByaW50SGVhZE5hbWVzKCkpXG4gIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5JylcblxuICBjb25zdCBkaXNwbGF5UHJvamVjdCA9IFByb2plY3RMaXN0LmZpbHRlcihcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0SUQgPT09IHByb2plY3RJRFxuICApXG4gIGxldCBkaXNwbGF5VGFza3NcbiAgZGlzcGxheVByb2plY3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiAoZGlzcGxheVRhc2tzID0gYXR0cmlidXRlLnRhc2tzKSlcblxuICBkaXNwbGF5VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuICAgIGNvbnN0IHRhYmxlQ2VsbE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICB0YWJsZUNlbGxPbmUuaW5uZXJIVE1MID0gdGFzay50YXNrTmFtZVxuICAgIGNvbnN0IHRhYmxlQ2VsbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcbiAgICB0YWJsZUNlbGxUd28uaW5uZXJIVE1MID0gdGFzay50YXNrRGF0ZVxuICAgIGNvbnN0IHRhYmxlQ2VsbFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgIGNvbnN0IGlzRmluaXNoZWRDaGVja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaWYgKHRhc2suaXNGaW5pc2hlZCkge1xuICAgICAgaXNGaW5pc2hlZENoZWNrQnRuLmNsYXNzTGlzdC5hZGQoJ2NoZWNrVG9Eb0J0bicsICdjaGVja2VkJylcbiAgICAgIGlzRmluaXNoZWRDaGVja0J0bi5pbm5lckhUTUwgPSAnJiM5NzQ1OydcbiAgICAgIHRhYmxlQ2VsbFRocmVlLmFwcGVuZENoaWxkKGlzRmluaXNoZWRDaGVja0J0bilcbiAgICB9IGVsc2Uge1xuICAgICAgaXNGaW5pc2hlZENoZWNrQnRuLmNsYXNzTGlzdC5hZGQoJ2NoZWNrVG9Eb0J0bicpXG4gICAgICBpc0ZpbmlzaGVkQ2hlY2tCdG4uaW5uZXJIVE1MID0gJyYjOTc0NjsnXG4gICAgICB0YWJsZUNlbGxUaHJlZS5hcHBlbmRDaGlsZChpc0ZpbmlzaGVkQ2hlY2tCdG4pXG4gICAgfVxuICAgIGlzRmluaXNoZWRDaGVja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0YXNrLmlzRmluaXNoZWQpIHtcbiAgICAgICAgdGFzay5pc0ZpbmlzaGVkID0gZmFsc2VcbiAgICAgICAgaXNGaW5pc2hlZENoZWNrQnRuLmlubmVySFRNTCA9ICcmIzk3NDY7J1xuICAgICAgICBpc0ZpbmlzaGVkQ2hlY2tCdG4uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpXG4gICAgICB9IGVsc2UgaWYgKCF0YXNrLmlzRmluaXNoZWQpIHtcbiAgICAgICAgdGFzay5pc0ZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICBpc0ZpbmlzaGVkQ2hlY2tCdG4uaW5uZXJIVE1MID0gJyYjOTc0NTsnXG4gICAgICAgIGlzRmluaXNoZWRDaGVja0J0bi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJylcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IHRhYmxlQ2VsbEZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgY29uc3QgZGVsZXRlVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGVsZXRlVG9Eb0J0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGVUb0RvQnRuJylcbiAgICBkZWxldGVUb0RvQnRuLmlubmVySFRNTCA9ICcmIzk3NDY7J1xuICAgIHRhYmxlQ2VsbEZvdXIuYXBwZW5kQ2hpbGQoZGVsZXRlVG9Eb0J0bilcbiAgICBkZWxldGVUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGlzcGxheVRhc2tzID0gZGlzcGxheVRhc2tzLmZpbHRlcigodGFza3MpID0+IHRhc2tzICE9IHRhc2spXG4gICAgICBQcm9qZWN0TGlzdC5maWx0ZXIoKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QucHJvamVjdElEID09PSBwcm9qZWN0SUQpIHtcbiAgICAgICAgICBwcm9qZWN0LnRhc2tzID0gZGlzcGxheVRhc2tzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0YWJsZVJvdy5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICB0YWJsZVJvdy5hcHBlbmQodGFibGVDZWxsT25lKVxuICAgIHRhYmxlUm93LmFwcGVuZCh0YWJsZUNlbGxUd28pXG4gICAgdGFibGVSb3cuYXBwZW5kKHRhYmxlQ2VsbFRocmVlKVxuICAgIHRhYmxlUm93LmFwcGVuZCh0YWJsZUNlbGxGb3VyKVxuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgIHRhYmxlUm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjAwMydcbiAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdtZWQnKSB7XG4gICAgICB0YWJsZVJvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmYTUwMDRmJ1xuICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgIHRhYmxlUm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZjAwNWUnXG4gICAgfVxuICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZCh0YWJsZVJvdylcbiAgICByZXR1cm4gdGFibGVCb2R5XG4gIH0pXG5cbiAgdGFibGVFbGVtZW50LmFwcGVuZENoaWxkKHRhYmxlQm9keSlcbiAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGVFbGVtZW50KVxuICBjb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgY3JlYXRlVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUYXNrQnRuJylcbiAgY3JlYXRlVGFza0J0bi5pbm5lckhUTUwgPSAnQ3JlYXRlJ1xuICBjcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vZGFsQm9keS5jbGFzc0xpc3QuYWRkKCdib2R5JylcbiAgICBjb25zdCBoMkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaDJFbGVtZW50LmlubmVySFRNTCA9IGBDcmVhdGUgTmV3IFRhc2sgZm9yIFwiJHtwcm9qZWN0SUR9XCJgXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlQnRuJylcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnJiM5NzQ2OydcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoaDJFbGVtZW50KVxuICAgIGgyRWxlbWVudC5hcHBlbmRDaGlsZChjbG9zZUJ0bilcbiAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuXG4gICAgY29uc3QgVGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBUYXNrTmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBUYXNrTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ05hbWUgb2YgVGFzaydcblxuICAgIGNvbnN0IER1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBEdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJ1xuICAgIER1ZURhdGVJbnB1dC5wbGFjZWhvbGRlciA9ICdEdWUgRGF0ZSdcblxuICAgIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKFRhc2tOYW1lSW5wdXQpXG4gICAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoRHVlRGF0ZUlucHV0KVxuXG4gICAgY29uc3QgcmFkaW9DaG9pY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJhZGlvQ2hvaWNlLmNsYXNzTGlzdC5hZGQoJ3JhZGlvQ2hvaWNlJylcblxuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGxvd1ByaW9yaXR5LnR5cGUgPSAncmFkaW8nXG4gICAgbG93UHJpb3JpdHkubmFtZSA9ICdwcmlvcml0eUNoZWNrJ1xuICAgIGxvd1ByaW9yaXR5LnZhbHVlID0gJ2xvdydcbiAgICBjb25zdCBsb3dQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxvd1ByaW9yaXR5TGFiZWwuZm9yID0gbG93UHJpb3JpdHlcbiAgICBsb3dQcmlvcml0eUxhYmVsLmlubmVySFRNTCA9ICdMb3cgUHJpb3JpdHknXG4gICAgcmFkaW9DaG9pY2UuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpXG4gICAgcmFkaW9DaG9pY2UuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlMYWJlbClcblxuICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG1lZGl1bVByaW9yaXR5LnR5cGUgPSAncmFkaW8nXG4gICAgbWVkaXVtUHJpb3JpdHkubmFtZSA9ICdwcmlvcml0eUNoZWNrJ1xuICAgIG1lZGl1bVByaW9yaXR5LnZhbHVlID0gJ21lZCdcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIG1lZGl1bVByaW9yaXR5TGFiZWwuZm9yID0gbWVkaXVtUHJpb3JpdHlcbiAgICBtZWRpdW1Qcmlvcml0eUxhYmVsLmlubmVySFRNTCA9ICdNZWRpdW0gUHJpb3JpdHknXG4gICAgcmFkaW9DaG9pY2UuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpXG4gICAgcmFkaW9DaG9pY2UuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHlMYWJlbClcblxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBoaWdoUHJpb3JpdHkudHlwZSA9ICdyYWRpbydcbiAgICBoaWdoUHJpb3JpdHkubmFtZSA9ICdwcmlvcml0eUNoZWNrJ1xuICAgIGhpZ2hQcmlvcml0eS52YWx1ZSA9ICdoaWdoJ1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGhpZ2hQcmlvcml0eUxhYmVsLmZvciA9IGhpZ2hQcmlvcml0eVxuICAgIGhpZ2hQcmlvcml0eUxhYmVsLmlubmVySFRNTCA9ICdIaWdoIFByaW9yaXR5J1xuICAgIHJhZGlvQ2hvaWNlLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSlcbiAgICByYWRpb0Nob2ljZS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlMYWJlbClcbiAgICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChyYWRpb0Nob2ljZSlcblxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNyZWF0ZVRhc2suY2xhc3NMaXN0LmFkZCgnY3JlYXRlVGFza0J0bicpXG4gICAgY3JlYXRlVGFzay5pbm5lckhUTUwgPSAnQ3JlYXRlJ1xuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudClcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlVGFzaylcbiAgICBtb2RhbEVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kYWxCb2R5KVxuICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsRWxlbWVudClcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9KVxuICAgIGNyZWF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCByYWRpb0NoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ2lucHV0W25hbWU9XCJwcmlvcml0eUNoZWNrXCJdOmNoZWNrZWQnXG4gICAgICApXG4gICAgICBjb25zdCBhcnJheSA9IHtcbiAgICAgICAgcHJvamVjdElEOiBwcm9qZWN0SUQsXG4gICAgICAgIHRhc2tJRDogdW5pcWlkKCksXG4gICAgICAgIHRhc2tOYW1lOiBUYXNrTmFtZUlucHV0LnZhbHVlLFxuICAgICAgICB0YXNrRGF0ZTogRHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogcmFkaW9DaGVjay52YWx1ZSxcbiAgICAgICAgaXNGaW5pc2hlZDogZmFsc2UsXG4gICAgICB9XG4gICAgICBkaXNwbGF5VGFza3MucHVzaChhcnJheSlcbiAgICAgIGluaXRpYWxpemF0aW9uKHByb2plY3RJRClcbiAgICB9KVxuICB9KVxuICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQnRuKVxuICByZXR1cm4gbWFpbkVsZW1lbnRcbn1cbi8vdGFza05hbWUsIHRhc2tEYXRlLCBwcmlyb2l0eVxuIiwiaW1wb3J0IHVuaXFpZCBmcm9tICd1bmlxaWQnXG5jb25zdCBQcm9qZWN0ID0gKG5hbWUsIGRlZmF1bHRfaWQpID0+IHtcbiAgbGV0IHByb2plY3RJRFxuICBpZiAoZGVmYXVsdF9pZCkge1xuICAgIHByb2plY3RJRCA9IGRlZmF1bHRfaWRcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0SUQgPSB1bmlxaWQoKVxuICB9XG4gIGxldCB0YXNrcyA9IFtdXG5cbiAgY29uc3QgY3JlYXRlTmV3VGFzayA9ICh0YXNrTmFtZSwgdGFza0RhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgSUQgPSB1bmlxaWQoKVxuICAgIGNvbnN0IGlzRmluaXNoZWQgPSBmYWxzZVxuICAgIGNvbnN0IHB1c2hPYmplY3QgPSB7XG4gICAgICBwcm9qZWN0SUQ6IHByb2plY3RJRCxcbiAgICAgIHRhc2tJRDogSUQsXG4gICAgICB0YXNrTmFtZTogdGFza05hbWUsXG4gICAgICB0YXNrRGF0ZTogdGFza0RhdGUsXG4gICAgICBpc0ZpbmlzaGVkOiBpc0ZpbmlzaGVkLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIH1cbiAgICB0YXNrcy5wdXNoKHB1c2hPYmplY3QpXG4gIH1cblxuICBjb25zdCBHZXRJRCA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdElEXG4gIH1cblxuICByZXR1cm4geyBuYW1lLCB0YXNrcywgcHJvamVjdElELCBjcmVhdGVOZXdUYXNrLCBHZXRJRCB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RcbiIsImltcG9ydCAnLi9hc3NldHMvY3NzL3N0eWxlLmNzcydcbmltcG9ydCBhcHBlbmRIZWFkZXIgZnJvbSAnLi9hc3NldHMvanMvaGVhZGVyJ1xuaW1wb3J0IGFwcGVuZEZvb3RlciBmcm9tICcuL2Fzc2V0cy9qcy9mb290ZXInXG5pbXBvcnQgeyBhc2lkZURPTSB9IGZyb20gJy4vYXNzZXRzL2pzL2FzaWRlQWxsUHJvamVjdHMnXG5pbXBvcnQgeyBtYWluRE9NIH0gZnJvbSAnLi9hc3NldHMvanMvbWFpbkFsbFRvRG9zJ1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3RzIH0gZnJvbSAnLi9hc3NldHMvanMvYXNpZGVBbGxQcm9qZWN0cydcblxuY29uc3QgdG9Eb0xpc3RET00gPSAocHJvamVjdElEKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhc2lkZURPTShwcm9qZWN0SUQpKVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkRPTShwcm9qZWN0SUQpKVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6YXRpb24gPSAocHJvamVjdElEKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJydcbiAgYXBwZW5kSGVhZGVyKClcbiAgdG9Eb0xpc3RET00ocHJvamVjdElEKVxuICBhcHBlbmRGb290ZXIoKVxufVxuXG5jcmVhdGVEZWZhdWx0UHJvamVjdHMoKVxuaW5pdGlhbGl6YXRpb24oKVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==