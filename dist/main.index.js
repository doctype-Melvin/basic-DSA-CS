"use strict";
(self["webpackChunkbasic_ds_algo"] = self["webpackChunkbasic_ds_algo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n:root{\n    --bg-color: #010101;\n    --main-color: #1FC742;\n    --darker-shade: #025B18;\n    --darkest-shade: #023612;\n    --contrast: #686868;\n\n}\n\nhtml, body {\n    font-family: 'Share Tech Mono', monospace;\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.main {\n    height: 100vh;\n}\n\nh1 {\n    text-align: center;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.display {\n    display: flex;\n    flex-direction: column;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\nlabel {\n    display: flex;\n}\n\nbutton {\n    font-family: inherit;\n}\n\n#listOutput, #treeOutput {\n    min-width: 93vw;\n    min-height: 35vh;\n    background-color: var(--bg-color);\n    color: var(--main-color);\n    padding: 5px;\n}\n\n@keyframes blink {\n    0% {opacity: 1;}\n    100% {opacity: 0;}\n}\n\n.caret {\n    animation-name: blink;\n    animation-duration: 1.2s;\n    animation-iteration-count: infinite;\n}\n\n@media only screen and (min-width: 500px) {\n    .display {\n        flex-direction: row;\n        width: 90vw;\n        justify-content: space-around;\n    }\n    \n    #right {\n        min-width: 45vw;\n        min-height: 35vh;\n        background-color: var(--bg-color);\n        color: var(--main-color);\n        padding: 5px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;IACvB,wBAAwB;IACxB,mBAAmB;;AAEvB;;AAEA;IACI,yCAAyC;IACzC,aAAa;IACb,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,iCAAiC;IACjC,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,IAAI,UAAU,CAAC;IACf,MAAM,UAAU,CAAC;AACrB;;AAEA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,mCAAmC;AACvC;;AAEA;IACI;QACI,mBAAmB;QACnB,WAAW;QACX,6BAA6B;IACjC;;IAEA;QACI,eAAe;QACf,gBAAgB;QAChB,iCAAiC;QACjC,wBAAwB;QACxB,YAAY;IAChB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n:root{\n    --bg-color: #010101;\n    --main-color: #1FC742;\n    --darker-shade: #025B18;\n    --darkest-shade: #023612;\n    --contrast: #686868;\n\n}\n\nhtml, body {\n    font-family: 'Share Tech Mono', monospace;\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.main {\n    height: 100vh;\n}\n\nh1 {\n    text-align: center;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.display {\n    display: flex;\n    flex-direction: column;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\nlabel {\n    display: flex;\n}\n\nbutton {\n    font-family: inherit;\n}\n\n#listOutput, #treeOutput {\n    min-width: 93vw;\n    min-height: 35vh;\n    background-color: var(--bg-color);\n    color: var(--main-color);\n    padding: 5px;\n}\n\n@keyframes blink {\n    0% {opacity: 1;}\n    100% {opacity: 0;}\n}\n\n.caret {\n    animation-name: blink;\n    animation-duration: 1.2s;\n    animation-iteration-count: infinite;\n}\n\n@media only screen and (min-width: 500px) {\n    .display {\n        flex-direction: row;\n        width: 90vw;\n        justify-content: space-around;\n    }\n    \n    #right {\n        min-width: 45vw;\n        min-height: 35vh;\n        background-color: var(--bg-color);\n        color: var(--main-color);\n        padding: 5px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList.js */ "./src/linkedList.js");


const linkedListApp = (() => {
    // Linked List form controls and graphic output
        //Buttons
    const headBtn = document.getElementById('setHead')
    const appendBtn = document.getElementById('push')
    const prependBtn = document.getElementById('unshift')
    const indexBtn = document.getElementById('index')
    const containsBtn = document.getElementById('hasNum')
    const sizeBtn = document.getElementById('size')
    const printHeadBtn = document.getElementById('printHead')
    const tailBtn = document.getElementById('tail')
    const popBtn = document.getElementById('pop')
    const printBtn = document.getElementById('printList')

        //Input fields
    const head = document.getElementById('head')
    const append = document.getElementById('append')
    const prepend = document.getElementById('prepend')
    const atIndex = document.getElementById('atIndex')
    const contains = document.getElementById('contains')

        //Output section
    const listOutput = document.getElementById('listOutput')

        //App logic
    let list = (0,_linkedList_js__WEBPACK_IMPORTED_MODULE_0__.linkedList)() // Initialize new linkedList instance
    headBtn.addEventListener('click', () => {
        if (!head.value) {
            listOutput.textContent = 'Please enter a number'
        }
    })

})()

const binarySearchTreeApp = (() => {
    console.log('bst')
})()

/***/ }),

/***/ "./src/balance.js":
/*!************************!*\
  !*** ./src/balance.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "depth": () => (/* binding */ depth),
/* harmony export */   "height": () => (/* binding */ height),
/* harmony export */   "isBalanced": () => (/* binding */ isBalanced)
/* harmony export */ });
/* harmony import */ var _binary_trees_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binary-trees.js */ "./src/binary-trees.js");
/* harmony import */ var _buildTree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildTree.js */ "./src/buildTree.js");



function height(root){
    if (!root) return -1
    let left = height(root.left)
    let right = height(root.right)
    if (left > right){
        return ++left
    } else return ++right
}

function depth(root, node, dist = -1){
    if (!root) return null
    if (root.key === node) return ++dist
    if (node < root.key) {
       return depth(root.left, node, ++dist)
    }else if(node > root.key){
        return depth(root.right, node, ++dist)
    }
    return dist
}

function isBalanced(root){
    let result
    let left = root.left
    let right = root.right
    left = height(left)
    right = height(right)
    if (left < right) {
        result = right - left
    }
    if (right < left) {
        result = left - right
    }
    return (result > 1) ? false : true
}

/***/ }),

/***/ "./src/binary-trees.js":
/*!*****************************!*\
  !*** ./src/binary-trees.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tree": () => (/* binding */ Tree)
/* harmony export */ });
/* harmony import */ var _balance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance.js */ "./src/balance.js");
/* harmony import */ var _buildTree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildTree.js */ "./src/buildTree.js");
/* harmony import */ var _makeNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeNode.js */ "./src/makeNode.js");
/* harmony import */ var _mergesort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergesort.js */ "./src/mergesort.js");
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.js */ "./src/order.js");
/* harmony import */ var _printTree_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./printTree.js */ "./src/printTree.js");








const Tree = (array) => { //Module that holds all BST methods
  let root = null // Initialize root variable -- null if there's no array
  if (array) root = (0,_buildTree_js__WEBPACK_IMPORTED_MODULE_1__.buildTree)(array, 0, array.length - 1) // If an array is passed, create tree
  
  function insert(key){
    let newNode = (0,_makeNode_js__WEBPACK_IMPORTED_MODULE_2__.makeNode)(key)
    if (root === null) {
      root = newNode
    }else{
      insertNode(root, newNode)
    }
  }

  function insertNode(root, newNode){
    if (newNode.key < root.key) {
      if (root.left === null) {
        root.left = newNode
      }else{
        insertNode(root.left, newNode)
      }
    }
    if (newNode.key > root.key) {
      if (root.right === null) {
        root.right = newNode
      }else{
        insertNode(root.right, newNode)
      }
    }
  }

  function remove(key){
    root = removeNode(root, key)
  }

  function removeNode(root, key) {
    if (root === null) return null
    if (key < root.key) { // Move left if key is less than root key
      root.left = removeNode(root.left, key)
      return root
    }
    if (key > root.key) { // Move right if key is greater than root key
      root.right = removeNode(root.right, key)
      return root
    }
    if (root.left === null && root.right === null) { // Both children are null -- no children
      root = null
      return root
    }
    if (root.left === null) { // node has one child to the right
      root = root.right
      return root
    }
    if (root.right === null) { // node has one child to the left
      root = root.left
      return root
    }
    let aux = minNode(root.right) // Something with two children minimum node of right subtree
    root.key = aux.key

    root.right = removeNode(root.right, aux.key)
    return root
  }

    function minNode(root){
      if (root.left === null) {
        return root
      }else return minNode(root.left)
    }

    function find(node, key){
        if(node === null){
        return null
      }
      if (key < node.key){
        return find(node.left, key)
      }
      if (key > node.key){
        return find(node.right, key)
      }
      return node
    }

    function getRoot(){
      return root
    }

    function reBalance(root = getRoot()){
      let arr = (0,_order_js__WEBPACK_IMPORTED_MODULE_4__.order)('in', root)
      return Tree(arr)
    }
    
    return {
      insert,
      remove,
      find,
      getRoot,
      reBalance
  }
}

// let array = makeRandom(5)
// let a = Tree(array)
// a.insert(1)
// a.insert(3)
// a.insert(5)
// prettyPrint(a.getRoot())
// a = a.reBalance()
// prettyPrint(a.getRoot())

const times2 = (value) => value*2

function makeRandom(n){ // Creates sorted array of unique values
  let array = []
  while (array.length < n){
    let max = 666
    let min = 11
    array.push(Math.floor(Math.random()*(Math.random() * (max - min) + min)))
  }
  let sorted = (0,_mergesort_js__WEBPACK_IMPORTED_MODULE_3__.mergeSort)(array)
  return sorted.filter((item, index) => {
    return sorted.indexOf(item) === index
  })
}

/***/ }),

/***/ "./src/buildTree.js":
/*!**************************!*\
  !*** ./src/buildTree.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTree": () => (/* binding */ buildTree)
/* harmony export */ });
/* harmony import */ var _makeNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeNode.js */ "./src/makeNode.js");


function buildTree(array, start, end){
    if (start > end) return null
    let mid = parseInt((start + end) / 2)
    let newNode = (0,_makeNode_js__WEBPACK_IMPORTED_MODULE_0__.makeNode)(array[mid])
    newNode.left = buildTree(array, start, mid - 1)
    newNode.right = buildTree(array, mid + 1, end)
    return newNode
}

/***/ }),

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linkedList": () => (/* binding */ linkedList)
/* harmony export */ });
const linkedList = () => { // Factory function to create lists
    let head = null // Start of the list - will become first node
    let length = 0 // Variable to track list length
    
    const Node = (value) => { // Factory fn to create nodes
        return {
            value,
            next: null
        }
    }

    const append = (value) => { // Adds new node to end of list
        let newNode = Node(value)
        if (head === null) {
            head = newNode
        }else{
            let currentNode = head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }
        length++
    }

    const prepend = (value) => { // Adds new node to start of list
        let newNode = Node(value)
        if (head === null) {
            head = newNode
        } else {
           newNode.next = head
           head = newNode
        }
        length++
    }

    const size = () => { // Prints/Returns list length
        console.log(length)
        return length
    }

    const printHead = () => { // Prints list's head
        console.log(head)
        return head
    }

    const printTail = () => { // Prints list's tail
        let currentNode = head
        while (currentNode.next){
            currentNode = currentNode.next
        }        
        console.log(currentNode)
        return currentNode
    }

    const atIndex = (index) => { // Returns node at index
        let currentIndex = 0
        let currentNode = head
        if (index < 0 || index > length) {
            return "Out of range"
        }else{
            while (currentIndex < index) {
                currentIndex++
                currentNode = currentNode.next
            }
            console.log(currentNode)
            return currentNode
        }
    }

    const pop = () => { // Removes node at end of list
        if (head === null) {
            return "No items in list"
        } else {
            let currentNode = head
            let previousNode
            while (currentNode.next !== null) {
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = null
        }
        length--
    }

    const contains = (value) => { // Checks if list contains value
        if (head === null) {
            return "No items in list"
        } else {
            let currentNode = head
            while (currentNode){
                if (currentNode.value === value){
                    console.log(true)
                    return true
                }
                currentNode = currentNode.next
            }
            console.log(false)
            return false
        }
    }

    const find = (value) => {// Returns index of node
        if (contains(value)){
            let currentIndex = 0
            let currentNode = head
            while(currentNode.value !== value) {
                currentIndex++
                currentNode = currentNode.next
            }
            console.log(currentIndex)
            return currentIndex
        }
        return null
    }

    const toString = () => { // Prints node values
        let string = ""
        let currentNode = head
        if (length === 0) {
            console.log("There are no items")
            return null
        }else{
            while (currentNode){
                string += `(${currentNode.value}) -> `
                currentNode = currentNode.next
            }
            console.log(string + "null")
            return string + "null"
        }
    }

    const insertAt = (value, index) => { // Inserts new node at given index
        let currentNode = head
        let currentIndex = 0
        let newNode = Node(value)

        if (index < 0 || index > length) {
            console.log("Index out of range")
            return "Index out of range"
        }
        if (index === 0) {
            newNode.next = head
            head = newNode
        }else{
            let previousNode
            while (currentIndex < index) {
                currentIndex++
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = newNode
            newNode.next = currentNode
        }
        length++
    }

    const removeAt = (index) => { // Removes list item at given index
        let currentNode = head
        let currentIndex = 0
        if (index < 0 || index > length) {
            console.log("Index out of range")
            return "Index out of range"
        }
        if (index === 0) {
            currentNode.next = atIndex(index).next
            head = currentNode.next
        }else {
            let previousNode
            while (currentIndex < index) {
                currentIndex++
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next
        }
        length--
    }

    return {
        length,
        Node,
        append,
        prepend,
        size,
        printHead,
        printTail,
        atIndex,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}

// let list = linkedList()
// list.append("One")
// list.append("Two")
// list.prepend("Zero")
// list.insertAt("Three", 3)
// list.size()
// list.toString()
// list.removeAt(2)
// list.toString()
// list.size()

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList.js */ "./src/linkedList.js");
/* harmony import */ var _mergesort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergesort.js */ "./src/mergesort.js");
/* harmony import */ var _recursion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recursion.js */ "./src/recursion.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _binary_trees_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binary-trees.js */ "./src/binary-trees.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.js */ "./src/app.js");







/***/ }),

/***/ "./src/makeNode.js":
/*!*************************!*\
  !*** ./src/makeNode.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNode": () => (/* binding */ makeNode)
/* harmony export */ });
const makeNode = (key) => {
    return {
      key,
      left: null,
      right: null
    }
  }

/***/ }),

/***/ "./src/mergesort.js":
/*!**************************!*\
  !*** ./src/mergesort.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "mergeSort": () => (/* binding */ mergeSort)
/* harmony export */ });
function mergeSort(arr){ // Main fn to return sorted array
    if (arr.length <= 1){ // If the passed array's length is one or less, return array
        return arr
    }
    let left = arr.splice(0, arr.length/2) // Split the array in two
    return merge(mergeSort(left), mergeSort(arr)) // Recursively call main fn inside merge fn
}

function merge(a, b){ // Fn takes two arrays
    let result = [] 
    while(a.length > 0 && b.length > 0) { // As long as there are elements in the array 
        if (a[0] < b[0]){ // Compare the first array elements
            result.push(a.shift()) // Push to result array
        }else{
            result.push(b.shift()) // Push to result array
        }
    }
    return [...result, ...a, ...b] // Return result array but also check if there are remainders
    //and add them to the end of result array
}


/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BFT": () => (/* binding */ BFT),
/* harmony export */   "levelOrder": () => (/* binding */ levelOrder),
/* harmony export */   "levelOrderRec": () => (/* binding */ levelOrderRec),
/* harmony export */   "order": () => (/* binding */ order)
/* harmony export */ });
function levelOrder(root, cb) { // Level order traversal in iterative fashion
let queue = []
let temp = [root]
if (!root) return queue
while (temp.length !== 0){ // While the working array is not empty
    let current = temp.pop() // Sets current node to first element of working array
    if (current.left) temp.unshift(current.left)
    if (current.right) temp.unshift(current.right)
    if (!cb) {
        queue.push(current.key)
    }else {// Optional callback condition
        queue.push(cb(current.key))
    }
}
return queue
}

function BFT(root, cb) { // Setup for recursive call -- level order traversal
    let queue = []
    let temp = [root] // Array holds the root and keeps track of children -- working array
    if (!root) return queue
    else if(cb){ // Optional callback condition
        return (levelOrderRec(temp, queue)).map(item => cb(item))
    }
    else{
       return levelOrderRec(temp, queue)
    }
}

function levelOrderRec(array, queue) { // Recursion for level order traversal
    if (array.length === 0) return queue
    if (array){
        let current = array.shift() // Sets current node to first element of working array
        if (current.left) array.push(current.left)
        if (current.right) array.push(current.right)
        queue.push(current.key)
        return levelOrderRec(array, queue)
    }
}

function order(dir, node, cb){
    let order = []
    if (!node || !dir) return
    else if (cb) {
        return orderRec(dir, node, order).map(item => cb(item))
    }else{
        return orderRec(dir, node, order)
    }
}

function orderRec(dir, node, array){
    if (dir === 'in') {
        if (!node) return
        if (node) {
            orderRec(dir, node.left, array)
            array.push(node.key)
            orderRec(dir, node.right, array)
        }
    }else if (dir === 'pre') {
        if (node) {
            array.push(node.key)
            orderRec(dir, node.left, array)
            orderRec(dir, node.right, array)
        }
    }else if (dir === 'post') {
        if (node) {
            orderRec(dir, node.left, array)
            orderRec(dir, node.right, array)
            array.push(node.key)
        }
    }
    return array
}

/***/ }),

/***/ "./src/printTree.js":
/*!**************************!*\
  !*** ./src/printTree.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prettyPrint": () => (/* binding */ prettyPrint)
/* harmony export */ });
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.key}`)
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
    return ""
  }

/***/ }),

/***/ "./src/recursion.js":
/*!**************************!*\
  !*** ./src/recursion.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SumSquares": () => (/* binding */ SumSquares),
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "contains": () => (/* binding */ contains),
/* harmony export */   "countDown": () => (/* binding */ countDown),
/* harmony export */   "countDownRecursive": () => (/* binding */ countDownRecursive),
/* harmony export */   "factorial": () => (/* binding */ factorial),
/* harmony export */   "fib": () => (/* binding */ fib),
/* harmony export */   "fibs1": () => (/* binding */ fibs1),
/* harmony export */   "fibs2": () => (/* binding */ fibs2),
/* harmony export */   "fibs3": () => (/* binding */ fibs3),
/* harmony export */   "fibs4": () => (/* binding */ fibs4),
/* harmony export */   "power": () => (/* binding */ power),
/* harmony export */   "productOfArray": () => (/* binding */ productOfArray),
/* harmony export */   "replicate": () => (/* binding */ replicate),
/* harmony export */   "sumRange": () => (/* binding */ sumRange),
/* harmony export */   "totalIntegers": () => (/* binding */ totalIntegers)
/* harmony export */ });
function countDown(n) { // Loop variant of a countdown
    let num = n;
    console.log("Loop")
    for (let i = num; i >= 0; i--){
        console.log(i)
    }
}

function countDownRecursive(n) { // Countdown using recursion
    if (n < 0) return;
    else {
        console.log(n);
        countDownRecursive(n-1)
    }
}

function sumRange(n, total = 0){ // Sum up range via recursion
    if (n < 0) {
        return total
    } else {
        console.log(total)
        return sumRange(n-1, total+n)
    }
}
////Fibonacci section start

function fib(n) { // Returns Fibonacci number at position n in sequence
    return n <= 1 ? n : fib(n-1) + fib(n-2)
}

function fibs1(n) {
    let result = [0, 1]; // First two numbers in sequence 
    for (let i = 2; i < n; i++) {
      result[i] = (result[i-1] + result[i-2]) // Basic fibonacci formula
    }
    return result
}

function fibs2(n) {
    let result = []; // Empty result array
    for (let i = 0; result.length < n; i++) { // Limit array length to n
        if (i > 1) { // Indices greater than 1
            result[i] = result[i-1] + result[i-2] // Will be set by fibonacci formula
        } else {
            result[i] = i // Indices 0 and 1 are equal to i
        }
    }
    return result
}

function fibs3(n) { // Recursive
    if (n === 1) { // Base case -- if n = 1 return an array with the first two integers in sequence
        return [0, 1]
    } else {
        let temp = fibs3(n-1) // 
        temp.push(temp[temp.length-1] + temp[temp.length-2]) // Push fibonacci formula of current array
        return temp.slice(0, n) // Limit result array to n integers 
    }
}

function fibs4(n) {
    return (n < 1) ? 0 : (n < 2) ? 1 : fibs4(n-1) + fibs4(n-2)
}
////Fibonacci section end

function factorial(n) { // Returns factorial of n
    return n === 1 ? n : n*factorial(n-1)
}

function power(a, b) { // Recursive math power function
    if (b === 0) {
        return 1
    } else {
      return a * power(a, b-1)
    }
}

function all(array, cb) { // Recursive fn to pass each array item to a callback fn
    let arr = array.slice()
    if (arr.length === 0) {
        return true;
    }
    if (cb(arr[0])){
        arr.shift()
        return all(arr, cb)
    } else {
        return false;
    }
}

function productOfArray(array) { // Recursive call to multiply all array items
    if (array.length === 0) return 1
    
    return array.shift() * productOfArray(array)
}

//////////////////////////////
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}


function contains(obj, value) { // This fn combines the for..in loop with recursion
    for (let key in obj) { // Iterate over all the objects keys
        if (typeof obj[key] === 'object'){ // If the key's value holds an object
            return contains(obj[key], value) // use recursion to access the nested object
        }
        if (obj[key] === value) return true // If the key's value matches the value return true
    }
    return false // If there's no match return false
    }
/////////////////////////////

function totalIntegers(array){
    if (array.length === 0) return 0; // If there are no elements return 0

    let result = 0;
    let partial = array.shift(); // store the first available element
    if (Array.isArray(partial)) { // if the element is an array
        result += totalIntegers(partial) // call again the function with the element
    } if (Number.isInteger(partial)) { // if the element is a number/integer
        result += 1 // increment result value
    }
    return result + totalIntegers(array) // calls the fn again with the partial array
    // the last partial array has a length of 0 and triggers the base case
}

function SumSquares(val) {
    if (val.length === 0) return 0; // Base case -- if array has no elements return 0
    let result = 0;
    let partial = val.shift(); // Grabs first element of array
    if (Array.isArray(partial)) { // if first element of array is an array 
        result += SumSquares(partial) // recursively call fn with partial array and add to result
    }
    if (Number.isInteger(partial)) { // if first element of array is an integer
        result += partial*partial // add the square of integer to result
    }

    return result += SumSquares(val) // adds all recursive calls
}

function replicate(a, b) { // Creates an array of integers -- a is being replicated b times
    if (a <= 0) return []
    return [b].concat(replicate(a-1, b))
    }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFTywyQkFBMkI7QUFDbEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL2JhbGFuY2UuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9iaW5hcnktdHJlZXMuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9idWlsZFRyZWUuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9saW5rZWRMaXN0LmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL21ha2VOb2RlLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvbWVyZ2Vzb3J0LmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9wcmludFRyZWUuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9yZWN1cnNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGFyZStUZWNoK01vbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290e1xcbiAgICAtLWJnLWNvbG9yOiAjMDEwMTAxO1xcbiAgICAtLW1haW4tY29sb3I6ICMxRkM3NDI7XFxuICAgIC0tZGFya2VyLXNoYWRlOiAjMDI1QjE4O1xcbiAgICAtLWRhcmtlc3Qtc2hhZGU6ICMwMjM2MTI7XFxuICAgIC0tY29udHJhc3Q6ICM2ODY4Njg7XFxuXFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1NoYXJlIFRlY2ggTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuI2xpc3RPdXRwdXQsICN0cmVlT3V0cHV0IHtcXG4gICAgbWluLXdpZHRoOiA5M3Z3O1xcbiAgICBtaW4taGVpZ2h0OiAzNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgMCUge29wYWNpdHk6IDE7fVxcbiAgICAxMDAlIHtvcGFjaXR5OiAwO31cXG59XFxuXFxuLmNhcmV0IHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxuICAgIC5kaXNwbGF5IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcmlnaHQge1xcbiAgICAgICAgbWluLXdpZHRoOiA0NXZ3O1xcbiAgICAgICAgbWluLWhlaWdodDogMzV2aDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxJQUFJLFVBQVUsQ0FBQztJQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQ0FBaUM7UUFDakMsd0JBQXdCO1FBQ3hCLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TaGFyZStUZWNoK01vbm8mZGlzcGxheT1zd2FwJyk7XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290e1xcbiAgICAtLWJnLWNvbG9yOiAjMDEwMTAxO1xcbiAgICAtLW1haW4tY29sb3I6ICMxRkM3NDI7XFxuICAgIC0tZGFya2VyLXNoYWRlOiAjMDI1QjE4O1xcbiAgICAtLWRhcmtlc3Qtc2hhZGU6ICMwMjM2MTI7XFxuICAgIC0tY29udHJhc3Q6ICM2ODY4Njg7XFxuXFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1NoYXJlIFRlY2ggTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuI2xpc3RPdXRwdXQsICN0cmVlT3V0cHV0IHtcXG4gICAgbWluLXdpZHRoOiA5M3Z3O1xcbiAgICBtaW4taGVpZ2h0OiAzNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgMCUge29wYWNpdHk6IDE7fVxcbiAgICAxMDAlIHtvcGFjaXR5OiAwO31cXG59XFxuXFxuLmNhcmV0IHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxuICAgIC5kaXNwbGF5IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcmlnaHQge1xcbiAgICAgICAgbWluLXdpZHRoOiA0NXZ3O1xcbiAgICAgICAgbWluLWhlaWdodDogMzV2aDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGxpbmtlZExpc3QgfSBmcm9tIFwiLi9saW5rZWRMaXN0LmpzXCJcblxuY29uc3QgbGlua2VkTGlzdEFwcCA9ICgoKSA9PiB7XG4gICAgLy8gTGlua2VkIExpc3QgZm9ybSBjb250cm9scyBhbmQgZ3JhcGhpYyBvdXRwdXRcbiAgICAgICAgLy9CdXR0b25zXG4gICAgY29uc3QgaGVhZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXRIZWFkJylcbiAgICBjb25zdCBhcHBlbmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVzaCcpXG4gICAgY29uc3QgcHJlcGVuZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bnNoaWZ0JylcbiAgICBjb25zdCBpbmRleEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmRleCcpXG4gICAgY29uc3QgY29udGFpbnNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFzTnVtJylcbiAgICBjb25zdCBzaXplQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnKVxuICAgIGNvbnN0IHByaW50SGVhZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmludEhlYWQnKVxuICAgIGNvbnN0IHRhaWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFpbCcpXG4gICAgY29uc3QgcG9wQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcCcpXG4gICAgY29uc3QgcHJpbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbnRMaXN0JylcblxuICAgICAgICAvL0lucHV0IGZpZWxkc1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZCcpXG4gICAgY29uc3QgYXBwZW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGVuZCcpXG4gICAgY29uc3QgcHJlcGVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVwZW5kJylcbiAgICBjb25zdCBhdEluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0SW5kZXgnKVxuICAgIGNvbnN0IGNvbnRhaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5zJylcblxuICAgICAgICAvL091dHB1dCBzZWN0aW9uXG4gICAgY29uc3QgbGlzdE91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0T3V0cHV0JylcblxuICAgICAgICAvL0FwcCBsb2dpY1xuICAgIGxldCBsaXN0ID0gbGlua2VkTGlzdCgpIC8vIEluaXRpYWxpemUgbmV3IGxpbmtlZExpc3QgaW5zdGFuY2VcbiAgICBoZWFkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoIWhlYWQudmFsdWUpIHtcbiAgICAgICAgICAgIGxpc3RPdXRwdXQudGV4dENvbnRlbnQgPSAnUGxlYXNlIGVudGVyIGEgbnVtYmVyJ1xuICAgICAgICB9XG4gICAgfSlcblxufSkoKVxuXG5jb25zdCBiaW5hcnlTZWFyY2hUcmVlQXBwID0gKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYnN0Jylcbn0pKCkiLCJpbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vYmluYXJ5LXRyZWVzLmpzXCJcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gXCIuL2J1aWxkVHJlZS5qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBoZWlnaHQocm9vdCl7XG4gICAgaWYgKCFyb290KSByZXR1cm4gLTFcbiAgICBsZXQgbGVmdCA9IGhlaWdodChyb290LmxlZnQpXG4gICAgbGV0IHJpZ2h0ID0gaGVpZ2h0KHJvb3QucmlnaHQpXG4gICAgaWYgKGxlZnQgPiByaWdodCl7XG4gICAgICAgIHJldHVybiArK2xlZnRcbiAgICB9IGVsc2UgcmV0dXJuICsrcmlnaHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcHRoKHJvb3QsIG5vZGUsIGRpc3QgPSAtMSl7XG4gICAgaWYgKCFyb290KSByZXR1cm4gbnVsbFxuICAgIGlmIChyb290LmtleSA9PT0gbm9kZSkgcmV0dXJuICsrZGlzdFxuICAgIGlmIChub2RlIDwgcm9vdC5rZXkpIHtcbiAgICAgICByZXR1cm4gZGVwdGgocm9vdC5sZWZ0LCBub2RlLCArK2Rpc3QpXG4gICAgfWVsc2UgaWYobm9kZSA+IHJvb3Qua2V5KXtcbiAgICAgICAgcmV0dXJuIGRlcHRoKHJvb3QucmlnaHQsIG5vZGUsICsrZGlzdClcbiAgICB9XG4gICAgcmV0dXJuIGRpc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmFsYW5jZWQocm9vdCl7XG4gICAgbGV0IHJlc3VsdFxuICAgIGxldCBsZWZ0ID0gcm9vdC5sZWZ0XG4gICAgbGV0IHJpZ2h0ID0gcm9vdC5yaWdodFxuICAgIGxlZnQgPSBoZWlnaHQobGVmdClcbiAgICByaWdodCA9IGhlaWdodChyaWdodClcbiAgICBpZiAobGVmdCA8IHJpZ2h0KSB7XG4gICAgICAgIHJlc3VsdCA9IHJpZ2h0IC0gbGVmdFxuICAgIH1cbiAgICBpZiAocmlnaHQgPCBsZWZ0KSB7XG4gICAgICAgIHJlc3VsdCA9IGxlZnQgLSByaWdodFxuICAgIH1cbiAgICByZXR1cm4gKHJlc3VsdCA+IDEpID8gZmFsc2UgOiB0cnVlXG59IiwiaW1wb3J0IHsgZGVwdGgsIGhlaWdodCwgaXNCYWxhbmNlZCB9IGZyb20gXCIuL2JhbGFuY2UuanNcIlxuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSBcIi4vYnVpbGRUcmVlLmpzXCJcbmltcG9ydCB7IG1ha2VOb2RlIH0gZnJvbSBcIi4vbWFrZU5vZGUuanNcIlxuaW1wb3J0IHsgbWVyZ2VTb3J0LCBtZXJnZSB9IGZyb20gXCIuL21lcmdlc29ydC5qc1wiXG5pbXBvcnQgeyBCRlQsIGxldmVsT3JkZXIsIG9yZGVyIH0gZnJvbSBcIi4vb3JkZXIuanNcIlxuaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tIFwiLi9wcmludFRyZWUuanNcIlxuXG5cbmV4cG9ydCBjb25zdCBUcmVlID0gKGFycmF5KSA9PiB7IC8vTW9kdWxlIHRoYXQgaG9sZHMgYWxsIEJTVCBtZXRob2RzXG4gIGxldCByb290ID0gbnVsbCAvLyBJbml0aWFsaXplIHJvb3QgdmFyaWFibGUgLS0gbnVsbCBpZiB0aGVyZSdzIG5vIGFycmF5XG4gIGlmIChhcnJheSkgcm9vdCA9IGJ1aWxkVHJlZShhcnJheSwgMCwgYXJyYXkubGVuZ3RoIC0gMSkgLy8gSWYgYW4gYXJyYXkgaXMgcGFzc2VkLCBjcmVhdGUgdHJlZVxuICBcbiAgZnVuY3Rpb24gaW5zZXJ0KGtleSl7XG4gICAgbGV0IG5ld05vZGUgPSBtYWtlTm9kZShrZXkpXG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJvb3QgPSBuZXdOb2RlXG4gICAgfWVsc2V7XG4gICAgICBpbnNlcnROb2RlKHJvb3QsIG5ld05vZGUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0Tm9kZShyb290LCBuZXdOb2RlKXtcbiAgICBpZiAobmV3Tm9kZS5rZXkgPCByb290LmtleSkge1xuICAgICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICByb290LmxlZnQgPSBuZXdOb2RlXG4gICAgICB9ZWxzZXtcbiAgICAgICAgaW5zZXJ0Tm9kZShyb290LmxlZnQsIG5ld05vZGUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuZXdOb2RlLmtleSA+IHJvb3Qua2V5KSB7XG4gICAgICBpZiAocm9vdC5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICByb290LnJpZ2h0ID0gbmV3Tm9kZVxuICAgICAgfWVsc2V7XG4gICAgICAgIGluc2VydE5vZGUocm9vdC5yaWdodCwgbmV3Tm9kZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmUoa2V5KXtcbiAgICByb290ID0gcmVtb3ZlTm9kZShyb290LCBrZXkpXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVOb2RlKHJvb3QsIGtleSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGlmIChrZXkgPCByb290LmtleSkgeyAvLyBNb3ZlIGxlZnQgaWYga2V5IGlzIGxlc3MgdGhhbiByb290IGtleVxuICAgICAgcm9vdC5sZWZ0ID0gcmVtb3ZlTm9kZShyb290LmxlZnQsIGtleSlcbiAgICAgIHJldHVybiByb290XG4gICAgfVxuICAgIGlmIChrZXkgPiByb290LmtleSkgeyAvLyBNb3ZlIHJpZ2h0IGlmIGtleSBpcyBncmVhdGVyIHRoYW4gcm9vdCBrZXlcbiAgICAgIHJvb3QucmlnaHQgPSByZW1vdmVOb2RlKHJvb3QucmlnaHQsIGtleSlcbiAgICAgIHJldHVybiByb290XG4gICAgfVxuICAgIGlmIChyb290LmxlZnQgPT09IG51bGwgJiYgcm9vdC5yaWdodCA9PT0gbnVsbCkgeyAvLyBCb3RoIGNoaWxkcmVuIGFyZSBudWxsIC0tIG5vIGNoaWxkcmVuXG4gICAgICByb290ID0gbnVsbFxuICAgICAgcmV0dXJuIHJvb3RcbiAgICB9XG4gICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCkgeyAvLyBub2RlIGhhcyBvbmUgY2hpbGQgdG8gdGhlIHJpZ2h0XG4gICAgICByb290ID0gcm9vdC5yaWdodFxuICAgICAgcmV0dXJuIHJvb3RcbiAgICB9XG4gICAgaWYgKHJvb3QucmlnaHQgPT09IG51bGwpIHsgLy8gbm9kZSBoYXMgb25lIGNoaWxkIHRvIHRoZSBsZWZ0XG4gICAgICByb290ID0gcm9vdC5sZWZ0XG4gICAgICByZXR1cm4gcm9vdFxuICAgIH1cbiAgICBsZXQgYXV4ID0gbWluTm9kZShyb290LnJpZ2h0KSAvLyBTb21ldGhpbmcgd2l0aCB0d28gY2hpbGRyZW4gbWluaW11bSBub2RlIG9mIHJpZ2h0IHN1YnRyZWVcbiAgICByb290LmtleSA9IGF1eC5rZXlcblxuICAgIHJvb3QucmlnaHQgPSByZW1vdmVOb2RlKHJvb3QucmlnaHQsIGF1eC5rZXkpXG4gICAgcmV0dXJuIHJvb3RcbiAgfVxuXG4gICAgZnVuY3Rpb24gbWluTm9kZShyb290KXtcbiAgICAgIGlmIChyb290LmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJvb3RcbiAgICAgIH1lbHNlIHJldHVybiBtaW5Ob2RlKHJvb3QubGVmdClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kKG5vZGUsIGtleSl7XG4gICAgICAgIGlmKG5vZGUgPT09IG51bGwpe1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgaWYgKGtleSA8IG5vZGUua2V5KXtcbiAgICAgICAgcmV0dXJuIGZpbmQobm9kZS5sZWZ0LCBrZXkpXG4gICAgICB9XG4gICAgICBpZiAoa2V5ID4gbm9kZS5rZXkpe1xuICAgICAgICByZXR1cm4gZmluZChub2RlLnJpZ2h0LCBrZXkpXG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJvb3QoKXtcbiAgICAgIHJldHVybiByb290XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVCYWxhbmNlKHJvb3QgPSBnZXRSb290KCkpe1xuICAgICAgbGV0IGFyciA9IG9yZGVyKCdpbicsIHJvb3QpXG4gICAgICByZXR1cm4gVHJlZShhcnIpXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBpbnNlcnQsXG4gICAgICByZW1vdmUsXG4gICAgICBmaW5kLFxuICAgICAgZ2V0Um9vdCxcbiAgICAgIHJlQmFsYW5jZVxuICB9XG59XG5cbi8vIGxldCBhcnJheSA9IG1ha2VSYW5kb20oNSlcbi8vIGxldCBhID0gVHJlZShhcnJheSlcbi8vIGEuaW5zZXJ0KDEpXG4vLyBhLmluc2VydCgzKVxuLy8gYS5pbnNlcnQoNSlcbi8vIHByZXR0eVByaW50KGEuZ2V0Um9vdCgpKVxuLy8gYSA9IGEucmVCYWxhbmNlKClcbi8vIHByZXR0eVByaW50KGEuZ2V0Um9vdCgpKVxuXG5jb25zdCB0aW1lczIgPSAodmFsdWUpID0+IHZhbHVlKjJcblxuZnVuY3Rpb24gbWFrZVJhbmRvbShuKXsgLy8gQ3JlYXRlcyBzb3J0ZWQgYXJyYXkgb2YgdW5pcXVlIHZhbHVlc1xuICBsZXQgYXJyYXkgPSBbXVxuICB3aGlsZSAoYXJyYXkubGVuZ3RoIDwgbil7XG4gICAgbGV0IG1heCA9IDY2NlxuICAgIGxldCBtaW4gPSAxMVxuICAgIGFycmF5LnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pKSlcbiAgfVxuICBsZXQgc29ydGVkID0gbWVyZ2VTb3J0KGFycmF5KVxuICByZXR1cm4gc29ydGVkLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gc29ydGVkLmluZGV4T2YoaXRlbSkgPT09IGluZGV4XG4gIH0pXG59IiwiaW1wb3J0IHsgbWFrZU5vZGUgfSBmcm9tIFwiLi9tYWtlTm9kZS5qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRyZWUoYXJyYXksIHN0YXJ0LCBlbmQpe1xuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIG51bGxcbiAgICBsZXQgbWlkID0gcGFyc2VJbnQoKHN0YXJ0ICsgZW5kKSAvIDIpXG4gICAgbGV0IG5ld05vZGUgPSBtYWtlTm9kZShhcnJheVttaWRdKVxuICAgIG5ld05vZGUubGVmdCA9IGJ1aWxkVHJlZShhcnJheSwgc3RhcnQsIG1pZCAtIDEpXG4gICAgbmV3Tm9kZS5yaWdodCA9IGJ1aWxkVHJlZShhcnJheSwgbWlkICsgMSwgZW5kKVxuICAgIHJldHVybiBuZXdOb2RlXG59IiwiZXhwb3J0IGNvbnN0IGxpbmtlZExpc3QgPSAoKSA9PiB7IC8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGxpc3RzXG4gICAgbGV0IGhlYWQgPSBudWxsIC8vIFN0YXJ0IG9mIHRoZSBsaXN0IC0gd2lsbCBiZWNvbWUgZmlyc3Qgbm9kZVxuICAgIGxldCBsZW5ndGggPSAwIC8vIFZhcmlhYmxlIHRvIHRyYWNrIGxpc3QgbGVuZ3RoXG4gICAgXG4gICAgY29uc3QgTm9kZSA9ICh2YWx1ZSkgPT4geyAvLyBGYWN0b3J5IGZuIHRvIGNyZWF0ZSBub2Rlc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBuZXh0OiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmQgPSAodmFsdWUpID0+IHsgLy8gQWRkcyBuZXcgbm9kZSB0byBlbmQgb2YgbGlzdFxuICAgICAgICBsZXQgbmV3Tm9kZSA9IE5vZGUodmFsdWUpXG4gICAgICAgIGlmIChoZWFkID09PSBudWxsKSB7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLm5leHQpIHtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBuZXdOb2RlXG4gICAgfVxuICAgICAgICBsZW5ndGgrK1xuICAgIH1cblxuICAgIGNvbnN0IHByZXBlbmQgPSAodmFsdWUpID0+IHsgLy8gQWRkcyBuZXcgbm9kZSB0byBzdGFydCBvZiBsaXN0XG4gICAgICAgIGxldCBuZXdOb2RlID0gTm9kZSh2YWx1ZSlcbiAgICAgICAgaWYgKGhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIG5ld05vZGUubmV4dCA9IGhlYWRcbiAgICAgICAgICAgaGVhZCA9IG5ld05vZGVcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGgrK1xuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSAoKSA9PiB7IC8vIFByaW50cy9SZXR1cm5zIGxpc3QgbGVuZ3RoXG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aClcbiAgICAgICAgcmV0dXJuIGxlbmd0aFxuICAgIH1cblxuICAgIGNvbnN0IHByaW50SGVhZCA9ICgpID0+IHsgLy8gUHJpbnRzIGxpc3QncyBoZWFkXG4gICAgICAgIGNvbnNvbGUubG9nKGhlYWQpXG4gICAgICAgIHJldHVybiBoZWFkXG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRUYWlsID0gKCkgPT4geyAvLyBQcmludHMgbGlzdCdzIHRhaWxcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUubmV4dCl7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnROb2RlKVxuICAgICAgICByZXR1cm4gY3VycmVudE5vZGVcbiAgICB9XG5cbiAgICBjb25zdCBhdEluZGV4ID0gKGluZGV4KSA9PiB7IC8vIFJldHVybnMgbm9kZSBhdCBpbmRleFxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMFxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIk91dCBvZiByYW5nZVwiXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4KytcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnROb2RlKVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwb3AgPSAoKSA9PiB7IC8vIFJlbW92ZXMgbm9kZSBhdCBlbmQgb2YgbGlzdFxuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiTm8gaXRlbXMgaW4gbGlzdFwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNOb2RlXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzTm9kZSA9IGN1cnJlbnROb2RlXG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2aW91c05vZGUubmV4dCA9IG51bGxcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGgtLVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5zID0gKHZhbHVlKSA9PiB7IC8vIENoZWNrcyBpZiBsaXN0IGNvbnRhaW5zIHZhbHVlXG4gICAgICAgIGlmIChoZWFkID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJObyBpdGVtcyBpbiBsaXN0XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSl7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlLnZhbHVlID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coZmFsc2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAodmFsdWUpID0+IHsvLyBSZXR1cm5zIGluZGV4IG9mIG5vZGVcbiAgICAgICAgaWYgKGNvbnRhaW5zKHZhbHVlKSl7XG4gICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMFxuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICAgICAgd2hpbGUoY3VycmVudE5vZGUudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4KytcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJbmRleClcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50SW5kZXhcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4geyAvLyBQcmludHMgbm9kZSB2YWx1ZXNcbiAgICAgICAgbGV0IHN0cmluZyA9IFwiXCJcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZXJlIGFyZSBubyBpdGVtc1wiKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUpe1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBgKCR7Y3VycmVudE5vZGUudmFsdWV9KSAtPiBgXG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdHJpbmcgKyBcIm51bGxcIilcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgKyBcIm51bGxcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5zZXJ0QXQgPSAodmFsdWUsIGluZGV4KSA9PiB7IC8vIEluc2VydHMgbmV3IG5vZGUgYXQgZ2l2ZW4gaW5kZXhcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMFxuICAgICAgICBsZXQgbmV3Tm9kZSA9IE5vZGUodmFsdWUpXG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmRleCBvdXQgb2YgcmFuZ2VcIilcbiAgICAgICAgICAgIHJldHVybiBcIkluZGV4IG91dCBvZiByYW5nZVwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBuZXdOb2RlLm5leHQgPSBoZWFkXG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c05vZGVcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrXG4gICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gY3VycmVudE5vZGVcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZpb3VzTm9kZS5uZXh0ID0gbmV3Tm9kZVxuICAgICAgICAgICAgbmV3Tm9kZS5uZXh0ID0gY3VycmVudE5vZGVcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGgrK1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUF0ID0gKGluZGV4KSA9PiB7IC8vIFJlbW92ZXMgbGlzdCBpdGVtIGF0IGdpdmVuIGluZGV4XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDBcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmRleCBvdXQgb2YgcmFuZ2VcIilcbiAgICAgICAgICAgIHJldHVybiBcIkluZGV4IG91dCBvZiByYW5nZVwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5uZXh0ID0gYXRJbmRleChpbmRleCkubmV4dFxuICAgICAgICAgICAgaGVhZCA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzTm9kZVxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4KytcbiAgICAgICAgICAgICAgICBwcmV2aW91c05vZGUgPSBjdXJyZW50Tm9kZVxuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldmlvdXNOb2RlLm5leHQgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoLS1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIE5vZGUsXG4gICAgICAgIGFwcGVuZCxcbiAgICAgICAgcHJlcGVuZCxcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgcHJpbnRIZWFkLFxuICAgICAgICBwcmludFRhaWwsXG4gICAgICAgIGF0SW5kZXgsXG4gICAgICAgIHBvcCxcbiAgICAgICAgY29udGFpbnMsXG4gICAgICAgIGZpbmQsXG4gICAgICAgIHRvU3RyaW5nLFxuICAgICAgICBpbnNlcnRBdCxcbiAgICAgICAgcmVtb3ZlQXRcbiAgICB9XG59XG5cbi8vIGxldCBsaXN0ID0gbGlua2VkTGlzdCgpXG4vLyBsaXN0LmFwcGVuZChcIk9uZVwiKVxuLy8gbGlzdC5hcHBlbmQoXCJUd29cIilcbi8vIGxpc3QucHJlcGVuZChcIlplcm9cIilcbi8vIGxpc3QuaW5zZXJ0QXQoXCJUaHJlZVwiLCAzKVxuLy8gbGlzdC5zaXplKClcbi8vIGxpc3QudG9TdHJpbmcoKVxuLy8gbGlzdC5yZW1vdmVBdCgyKVxuLy8gbGlzdC50b1N0cmluZygpXG4vLyBsaXN0LnNpemUoKSIsImltcG9ydCBcIi4vbGlua2VkTGlzdC5qc1wiXG5pbXBvcnQgXCIuL21lcmdlc29ydC5qc1wiXG5pbXBvcnQgXCIuL3JlY3Vyc2lvbi5qc1wiXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgXCIuL2JpbmFyeS10cmVlcy5qc1wiXG5pbXBvcnQgXCIuL2FwcC5qc1wiIiwiZXhwb3J0IGNvbnN0IG1ha2VOb2RlID0gKGtleSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBrZXksXG4gICAgICBsZWZ0OiBudWxsLFxuICAgICAgcmlnaHQ6IG51bGxcbiAgICB9XG4gIH0iLCJleHBvcnQgZnVuY3Rpb24gbWVyZ2VTb3J0KGFycil7IC8vIE1haW4gZm4gdG8gcmV0dXJuIHNvcnRlZCBhcnJheVxuICAgIGlmIChhcnIubGVuZ3RoIDw9IDEpeyAvLyBJZiB0aGUgcGFzc2VkIGFycmF5J3MgbGVuZ3RoIGlzIG9uZSBvciBsZXNzLCByZXR1cm4gYXJyYXlcbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cbiAgICBsZXQgbGVmdCA9IGFyci5zcGxpY2UoMCwgYXJyLmxlbmd0aC8yKSAvLyBTcGxpdCB0aGUgYXJyYXkgaW4gdHdvXG4gICAgcmV0dXJuIG1lcmdlKG1lcmdlU29ydChsZWZ0KSwgbWVyZ2VTb3J0KGFycikpIC8vIFJlY3Vyc2l2ZWx5IGNhbGwgbWFpbiBmbiBpbnNpZGUgbWVyZ2UgZm5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGEsIGIpeyAvLyBGbiB0YWtlcyB0d28gYXJyYXlzXG4gICAgbGV0IHJlc3VsdCA9IFtdIFxuICAgIHdoaWxlKGEubGVuZ3RoID4gMCAmJiBiLmxlbmd0aCA+IDApIHsgLy8gQXMgbG9uZyBhcyB0aGVyZSBhcmUgZWxlbWVudHMgaW4gdGhlIGFycmF5IFxuICAgICAgICBpZiAoYVswXSA8IGJbMF0peyAvLyBDb21wYXJlIHRoZSBmaXJzdCBhcnJheSBlbGVtZW50c1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYS5zaGlmdCgpKSAvLyBQdXNoIHRvIHJlc3VsdCBhcnJheVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGIuc2hpZnQoKSkgLy8gUHVzaCB0byByZXN1bHQgYXJyYXlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gWy4uLnJlc3VsdCwgLi4uYSwgLi4uYl0gLy8gUmV0dXJuIHJlc3VsdCBhcnJheSBidXQgYWxzbyBjaGVjayBpZiB0aGVyZSBhcmUgcmVtYWluZGVyc1xuICAgIC8vYW5kIGFkZCB0aGVtIHRvIHRoZSBlbmQgb2YgcmVzdWx0IGFycmF5XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbGV2ZWxPcmRlcihyb290LCBjYikgeyAvLyBMZXZlbCBvcmRlciB0cmF2ZXJzYWwgaW4gaXRlcmF0aXZlIGZhc2hpb25cbmxldCBxdWV1ZSA9IFtdXG5sZXQgdGVtcCA9IFtyb290XVxuaWYgKCFyb290KSByZXR1cm4gcXVldWVcbndoaWxlICh0ZW1wLmxlbmd0aCAhPT0gMCl7IC8vIFdoaWxlIHRoZSB3b3JraW5nIGFycmF5IGlzIG5vdCBlbXB0eVxuICAgIGxldCBjdXJyZW50ID0gdGVtcC5wb3AoKSAvLyBTZXRzIGN1cnJlbnQgbm9kZSB0byBmaXJzdCBlbGVtZW50IG9mIHdvcmtpbmcgYXJyYXlcbiAgICBpZiAoY3VycmVudC5sZWZ0KSB0ZW1wLnVuc2hpZnQoY3VycmVudC5sZWZ0KVxuICAgIGlmIChjdXJyZW50LnJpZ2h0KSB0ZW1wLnVuc2hpZnQoY3VycmVudC5yaWdodClcbiAgICBpZiAoIWNiKSB7XG4gICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5rZXkpXG4gICAgfWVsc2Ugey8vIE9wdGlvbmFsIGNhbGxiYWNrIGNvbmRpdGlvblxuICAgICAgICBxdWV1ZS5wdXNoKGNiKGN1cnJlbnQua2V5KSlcbiAgICB9XG59XG5yZXR1cm4gcXVldWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJGVChyb290LCBjYikgeyAvLyBTZXR1cCBmb3IgcmVjdXJzaXZlIGNhbGwgLS0gbGV2ZWwgb3JkZXIgdHJhdmVyc2FsXG4gICAgbGV0IHF1ZXVlID0gW11cbiAgICBsZXQgdGVtcCA9IFtyb290XSAvLyBBcnJheSBob2xkcyB0aGUgcm9vdCBhbmQga2VlcHMgdHJhY2sgb2YgY2hpbGRyZW4gLS0gd29ya2luZyBhcnJheVxuICAgIGlmICghcm9vdCkgcmV0dXJuIHF1ZXVlXG4gICAgZWxzZSBpZihjYil7IC8vIE9wdGlvbmFsIGNhbGxiYWNrIGNvbmRpdGlvblxuICAgICAgICByZXR1cm4gKGxldmVsT3JkZXJSZWModGVtcCwgcXVldWUpKS5tYXAoaXRlbSA9PiBjYihpdGVtKSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICByZXR1cm4gbGV2ZWxPcmRlclJlYyh0ZW1wLCBxdWV1ZSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbE9yZGVyUmVjKGFycmF5LCBxdWV1ZSkgeyAvLyBSZWN1cnNpb24gZm9yIGxldmVsIG9yZGVyIHRyYXZlcnNhbFxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHJldHVybiBxdWV1ZVxuICAgIGlmIChhcnJheSl7XG4gICAgICAgIGxldCBjdXJyZW50ID0gYXJyYXkuc2hpZnQoKSAvLyBTZXRzIGN1cnJlbnQgbm9kZSB0byBmaXJzdCBlbGVtZW50IG9mIHdvcmtpbmcgYXJyYXlcbiAgICAgICAgaWYgKGN1cnJlbnQubGVmdCkgYXJyYXkucHVzaChjdXJyZW50LmxlZnQpXG4gICAgICAgIGlmIChjdXJyZW50LnJpZ2h0KSBhcnJheS5wdXNoKGN1cnJlbnQucmlnaHQpXG4gICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5rZXkpXG4gICAgICAgIHJldHVybiBsZXZlbE9yZGVyUmVjKGFycmF5LCBxdWV1ZSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlcihkaXIsIG5vZGUsIGNiKXtcbiAgICBsZXQgb3JkZXIgPSBbXVxuICAgIGlmICghbm9kZSB8fCAhZGlyKSByZXR1cm5cbiAgICBlbHNlIGlmIChjYikge1xuICAgICAgICByZXR1cm4gb3JkZXJSZWMoZGlyLCBub2RlLCBvcmRlcikubWFwKGl0ZW0gPT4gY2IoaXRlbSkpXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBvcmRlclJlYyhkaXIsIG5vZGUsIG9yZGVyKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gb3JkZXJSZWMoZGlyLCBub2RlLCBhcnJheSl7XG4gICAgaWYgKGRpciA9PT0gJ2luJykge1xuICAgICAgICBpZiAoIW5vZGUpIHJldHVyblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgb3JkZXJSZWMoZGlyLCBub2RlLmxlZnQsIGFycmF5KVxuICAgICAgICAgICAgYXJyYXkucHVzaChub2RlLmtleSlcbiAgICAgICAgICAgIG9yZGVyUmVjKGRpciwgbm9kZS5yaWdodCwgYXJyYXkpXG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZiAoZGlyID09PSAncHJlJykge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChub2RlLmtleSlcbiAgICAgICAgICAgIG9yZGVyUmVjKGRpciwgbm9kZS5sZWZ0LCBhcnJheSlcbiAgICAgICAgICAgIG9yZGVyUmVjKGRpciwgbm9kZS5yaWdodCwgYXJyYXkpXG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZiAoZGlyID09PSAncG9zdCcpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG9yZGVyUmVjKGRpciwgbm9kZS5sZWZ0LCBhcnJheSlcbiAgICAgICAgICAgIG9yZGVyUmVjKGRpciwgbm9kZS5yaWdodCwgYXJyYXkpXG4gICAgICAgICAgICBhcnJheS5wdXNoKG5vZGUua2V5KVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheVxufSIsImV4cG9ydCBjb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSlcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUua2V5fWApXG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSlcbiAgICB9XG4gICAgcmV0dXJuIFwiXCJcbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBjb3VudERvd24obikgeyAvLyBMb29wIHZhcmlhbnQgb2YgYSBjb3VudGRvd25cbiAgICBsZXQgbnVtID0gbjtcbiAgICBjb25zb2xlLmxvZyhcIkxvb3BcIilcbiAgICBmb3IgKGxldCBpID0gbnVtOyBpID49IDA7IGktLSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnREb3duUmVjdXJzaXZlKG4pIHsgLy8gQ291bnRkb3duIHVzaW5nIHJlY3Vyc2lvblxuICAgIGlmIChuIDwgMCkgcmV0dXJuO1xuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhuKTtcbiAgICAgICAgY291bnREb3duUmVjdXJzaXZlKG4tMSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1SYW5nZShuLCB0b3RhbCA9IDApeyAvLyBTdW0gdXAgcmFuZ2UgdmlhIHJlY3Vyc2lvblxuICAgIGlmIChuIDwgMCkge1xuICAgICAgICByZXR1cm4gdG90YWxcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbClcbiAgICAgICAgcmV0dXJuIHN1bVJhbmdlKG4tMSwgdG90YWwrbilcbiAgICB9XG59XG4vLy8vRmlib25hY2NpIHNlY3Rpb24gc3RhcnRcblxuZXhwb3J0IGZ1bmN0aW9uIGZpYihuKSB7IC8vIFJldHVybnMgRmlib25hY2NpIG51bWJlciBhdCBwb3NpdGlvbiBuIGluIHNlcXVlbmNlXG4gICAgcmV0dXJuIG4gPD0gMSA/IG4gOiBmaWIobi0xKSArIGZpYihuLTIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWJzMShuKSB7XG4gICAgbGV0IHJlc3VsdCA9IFswLCAxXTsgLy8gRmlyc3QgdHdvIG51bWJlcnMgaW4gc2VxdWVuY2UgXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCBuOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpXSA9IChyZXN1bHRbaS0xXSArIHJlc3VsdFtpLTJdKSAvLyBCYXNpYyBmaWJvbmFjY2kgZm9ybXVsYVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWJzMihuKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdOyAvLyBFbXB0eSByZXN1bHQgYXJyYXlcbiAgICBmb3IgKGxldCBpID0gMDsgcmVzdWx0Lmxlbmd0aCA8IG47IGkrKykgeyAvLyBMaW1pdCBhcnJheSBsZW5ndGggdG8gblxuICAgICAgICBpZiAoaSA+IDEpIHsgLy8gSW5kaWNlcyBncmVhdGVyIHRoYW4gMVxuICAgICAgICAgICAgcmVzdWx0W2ldID0gcmVzdWx0W2ktMV0gKyByZXN1bHRbaS0yXSAvLyBXaWxsIGJlIHNldCBieSBmaWJvbmFjY2kgZm9ybXVsYVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2ldID0gaSAvLyBJbmRpY2VzIDAgYW5kIDEgYXJlIGVxdWFsIHRvIGlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWJzMyhuKSB7IC8vIFJlY3Vyc2l2ZVxuICAgIGlmIChuID09PSAxKSB7IC8vIEJhc2UgY2FzZSAtLSBpZiBuID0gMSByZXR1cm4gYW4gYXJyYXkgd2l0aCB0aGUgZmlyc3QgdHdvIGludGVnZXJzIGluIHNlcXVlbmNlXG4gICAgICAgIHJldHVybiBbMCwgMV1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdGVtcCA9IGZpYnMzKG4tMSkgLy8gXG4gICAgICAgIHRlbXAucHVzaCh0ZW1wW3RlbXAubGVuZ3RoLTFdICsgdGVtcFt0ZW1wLmxlbmd0aC0yXSkgLy8gUHVzaCBmaWJvbmFjY2kgZm9ybXVsYSBvZiBjdXJyZW50IGFycmF5XG4gICAgICAgIHJldHVybiB0ZW1wLnNsaWNlKDAsIG4pIC8vIExpbWl0IHJlc3VsdCBhcnJheSB0byBuIGludGVnZXJzIFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpYnM0KG4pIHtcbiAgICByZXR1cm4gKG4gPCAxKSA/IDAgOiAobiA8IDIpID8gMSA6IGZpYnM0KG4tMSkgKyBmaWJzNChuLTIpXG59XG4vLy8vRmlib25hY2NpIHNlY3Rpb24gZW5kXG5cbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3JpYWwobikgeyAvLyBSZXR1cm5zIGZhY3RvcmlhbCBvZiBuXG4gICAgcmV0dXJuIG4gPT09IDEgPyBuIDogbipmYWN0b3JpYWwobi0xKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG93ZXIoYSwgYikgeyAvLyBSZWN1cnNpdmUgbWF0aCBwb3dlciBmdW5jdGlvblxuICAgIGlmIChiID09PSAwKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhICogcG93ZXIoYSwgYi0xKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbChhcnJheSwgY2IpIHsgLy8gUmVjdXJzaXZlIGZuIHRvIHBhc3MgZWFjaCBhcnJheSBpdGVtIHRvIGEgY2FsbGJhY2sgZm5cbiAgICBsZXQgYXJyID0gYXJyYXkuc2xpY2UoKVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2IoYXJyWzBdKSl7XG4gICAgICAgIGFyci5zaGlmdCgpXG4gICAgICAgIHJldHVybiBhbGwoYXJyLCBjYilcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdE9mQXJyYXkoYXJyYXkpIHsgLy8gUmVjdXJzaXZlIGNhbGwgdG8gbXVsdGlwbHkgYWxsIGFycmF5IGl0ZW1zXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIDFcbiAgICBcbiAgICByZXR1cm4gYXJyYXkuc2hpZnQoKSAqIHByb2R1Y3RPZkFycmF5KGFycmF5KVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBuZXN0ZWRPYmplY3QgPSB7XG4gICAgZGF0YToge1xuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBzdHVmZjoge1xuICAgICAgICAgICAgICAgIHRoaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vcmVTdHVmZjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFnaWNOdW1iZXI6IDQ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc29tZXRoaW5nOiAnZm9vMidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMob2JqLCB2YWx1ZSkgeyAvLyBUaGlzIGZuIGNvbWJpbmVzIHRoZSBmb3IuLmluIGxvb3Agd2l0aCByZWN1cnNpb25cbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7IC8vIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIG9iamVjdHMga2V5c1xuICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0Jyl7IC8vIElmIHRoZSBrZXkncyB2YWx1ZSBob2xkcyBhbiBvYmplY3RcbiAgICAgICAgICAgIHJldHVybiBjb250YWlucyhvYmpba2V5XSwgdmFsdWUpIC8vIHVzZSByZWN1cnNpb24gdG8gYWNjZXNzIHRoZSBuZXN0ZWQgb2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ialtrZXldID09PSB2YWx1ZSkgcmV0dXJuIHRydWUgLy8gSWYgdGhlIGtleSdzIHZhbHVlIG1hdGNoZXMgdGhlIHZhbHVlIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZSAvLyBJZiB0aGVyZSdzIG5vIG1hdGNoIHJldHVybiBmYWxzZVxuICAgIH1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiB0b3RhbEludGVnZXJzKGFycmF5KXtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gMDsgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIHJldHVybiAwXG5cbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBsZXQgcGFydGlhbCA9IGFycmF5LnNoaWZ0KCk7IC8vIHN0b3JlIHRoZSBmaXJzdCBhdmFpbGFibGUgZWxlbWVudFxuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnRpYWwpKSB7IC8vIGlmIHRoZSBlbGVtZW50IGlzIGFuIGFycmF5XG4gICAgICAgIHJlc3VsdCArPSB0b3RhbEludGVnZXJzKHBhcnRpYWwpIC8vIGNhbGwgYWdhaW4gdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGVsZW1lbnRcbiAgICB9IGlmIChOdW1iZXIuaXNJbnRlZ2VyKHBhcnRpYWwpKSB7IC8vIGlmIHRoZSBlbGVtZW50IGlzIGEgbnVtYmVyL2ludGVnZXJcbiAgICAgICAgcmVzdWx0ICs9IDEgLy8gaW5jcmVtZW50IHJlc3VsdCB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0ICsgdG90YWxJbnRlZ2VycyhhcnJheSkgLy8gY2FsbHMgdGhlIGZuIGFnYWluIHdpdGggdGhlIHBhcnRpYWwgYXJyYXlcbiAgICAvLyB0aGUgbGFzdCBwYXJ0aWFsIGFycmF5IGhhcyBhIGxlbmd0aCBvZiAwIGFuZCB0cmlnZ2VycyB0aGUgYmFzZSBjYXNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdW1TcXVhcmVzKHZhbCkge1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSByZXR1cm4gMDsgLy8gQmFzZSBjYXNlIC0tIGlmIGFycmF5IGhhcyBubyBlbGVtZW50cyByZXR1cm4gMFxuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGxldCBwYXJ0aWFsID0gdmFsLnNoaWZ0KCk7IC8vIEdyYWJzIGZpcnN0IGVsZW1lbnQgb2YgYXJyYXlcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJ0aWFsKSkgeyAvLyBpZiBmaXJzdCBlbGVtZW50IG9mIGFycmF5IGlzIGFuIGFycmF5IFxuICAgICAgICByZXN1bHQgKz0gU3VtU3F1YXJlcyhwYXJ0aWFsKSAvLyByZWN1cnNpdmVseSBjYWxsIGZuIHdpdGggcGFydGlhbCBhcnJheSBhbmQgYWRkIHRvIHJlc3VsdFxuICAgIH1cbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYXJ0aWFsKSkgeyAvLyBpZiBmaXJzdCBlbGVtZW50IG9mIGFycmF5IGlzIGFuIGludGVnZXJcbiAgICAgICAgcmVzdWx0ICs9IHBhcnRpYWwqcGFydGlhbCAvLyBhZGQgdGhlIHNxdWFyZSBvZiBpbnRlZ2VyIHRvIHJlc3VsdFxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQgKz0gU3VtU3F1YXJlcyh2YWwpIC8vIGFkZHMgYWxsIHJlY3Vyc2l2ZSBjYWxsc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGljYXRlKGEsIGIpIHsgLy8gQ3JlYXRlcyBhbiBhcnJheSBvZiBpbnRlZ2VycyAtLSBhIGlzIGJlaW5nIHJlcGxpY2F0ZWQgYiB0aW1lc1xuICAgIGlmIChhIDw9IDApIHJldHVybiBbXVxuICAgIHJldHVybiBbYl0uY29uY2F0KHJlcGxpY2F0ZShhLTEsIGIpKVxuICAgIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=