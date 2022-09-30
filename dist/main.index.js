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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    font-family: 'Share Tech Mono', monospace;\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.main {\n    height: 100vh;\n}\n\nh1 {\n    text-align: center;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.display {\n    display: flex;\n    flex-direction: column;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\nlabel {\n    display: flex;\n}\n\n\n@media only screen and (min-width: 500px) {\n    .display {\n        flex-direction: row;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,yCAAyC;IACzC,aAAa;IACb,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI;QACI,mBAAmB;IACvB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    font-family: 'Share Tech Mono', monospace;\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.main {\n    height: 100vh;\n}\n\nh1 {\n    text-align: center;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.display {\n    display: flex;\n    flex-direction: column;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\nlabel {\n    display: flex;\n}\n\n\n@media only screen and (min-width: 500px) {\n    .display {\n        flex-direction: row;\n    }\n}"],"sourceRoot":""}]);
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
console.log('Hello World!')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvQixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRU8sMkJBQTJCO0FBQ2xDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9iYWxhbmNlLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvYmluYXJ5LXRyZWVzLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvYnVpbGRUcmVlLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9tYWtlTm9kZS5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL21lcmdlc29ydC5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL29yZGVyLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvcHJpbnRUcmVlLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvcmVjdXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hhcmUrVGVjaCtNb25vJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdTaGFyZSBUZWNoIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcbiAgICAuZGlzcGxheSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hhcmUrVGVjaCtNb25vJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdTaGFyZSBUZWNoIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcbiAgICAuZGlzcGxheSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc29sZS5sb2coJ0hlbGxvIFdvcmxkIScpIiwiaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL2JpbmFyeS10cmVlcy5qc1wiXG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tIFwiLi9idWlsZFRyZWUuanNcIlxuXG5leHBvcnQgZnVuY3Rpb24gaGVpZ2h0KHJvb3Qpe1xuICAgIGlmICghcm9vdCkgcmV0dXJuIC0xXG4gICAgbGV0IGxlZnQgPSBoZWlnaHQocm9vdC5sZWZ0KVxuICAgIGxldCByaWdodCA9IGhlaWdodChyb290LnJpZ2h0KVxuICAgIGlmIChsZWZ0ID4gcmlnaHQpe1xuICAgICAgICByZXR1cm4gKytsZWZ0XG4gICAgfSBlbHNlIHJldHVybiArK3JpZ2h0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXB0aChyb290LCBub2RlLCBkaXN0ID0gLTEpe1xuICAgIGlmICghcm9vdCkgcmV0dXJuIG51bGxcbiAgICBpZiAocm9vdC5rZXkgPT09IG5vZGUpIHJldHVybiArK2Rpc3RcbiAgICBpZiAobm9kZSA8IHJvb3Qua2V5KSB7XG4gICAgICAgcmV0dXJuIGRlcHRoKHJvb3QubGVmdCwgbm9kZSwgKytkaXN0KVxuICAgIH1lbHNlIGlmKG5vZGUgPiByb290LmtleSl7XG4gICAgICAgIHJldHVybiBkZXB0aChyb290LnJpZ2h0LCBub2RlLCArK2Rpc3QpXG4gICAgfVxuICAgIHJldHVybiBkaXN0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JhbGFuY2VkKHJvb3Qpe1xuICAgIGxldCByZXN1bHRcbiAgICBsZXQgbGVmdCA9IHJvb3QubGVmdFxuICAgIGxldCByaWdodCA9IHJvb3QucmlnaHRcbiAgICBsZWZ0ID0gaGVpZ2h0KGxlZnQpXG4gICAgcmlnaHQgPSBoZWlnaHQocmlnaHQpXG4gICAgaWYgKGxlZnQgPCByaWdodCkge1xuICAgICAgICByZXN1bHQgPSByaWdodCAtIGxlZnRcbiAgICB9XG4gICAgaWYgKHJpZ2h0IDwgbGVmdCkge1xuICAgICAgICByZXN1bHQgPSBsZWZ0IC0gcmlnaHRcbiAgICB9XG4gICAgcmV0dXJuIChyZXN1bHQgPiAxKSA/IGZhbHNlIDogdHJ1ZVxufSIsImltcG9ydCB7IGRlcHRoLCBoZWlnaHQsIGlzQmFsYW5jZWQgfSBmcm9tIFwiLi9iYWxhbmNlLmpzXCJcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gXCIuL2J1aWxkVHJlZS5qc1wiXG5pbXBvcnQgeyBtYWtlTm9kZSB9IGZyb20gXCIuL21ha2VOb2RlLmpzXCJcbmltcG9ydCB7IG1lcmdlU29ydCwgbWVyZ2UgfSBmcm9tIFwiLi9tZXJnZXNvcnQuanNcIlxuaW1wb3J0IHsgQkZULCBsZXZlbE9yZGVyLCBvcmRlciB9IGZyb20gXCIuL29yZGVyLmpzXCJcbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vcHJpbnRUcmVlLmpzXCJcblxuXG5leHBvcnQgY29uc3QgVHJlZSA9IChhcnJheSkgPT4geyAvL01vZHVsZSB0aGF0IGhvbGRzIGFsbCBCU1QgbWV0aG9kc1xuICBsZXQgcm9vdCA9IG51bGwgLy8gSW5pdGlhbGl6ZSByb290IHZhcmlhYmxlIC0tIG51bGwgaWYgdGhlcmUncyBubyBhcnJheVxuICBpZiAoYXJyYXkpIHJvb3QgPSBidWlsZFRyZWUoYXJyYXksIDAsIGFycmF5Lmxlbmd0aCAtIDEpIC8vIElmIGFuIGFycmF5IGlzIHBhc3NlZCwgY3JlYXRlIHRyZWVcbiAgXG4gIGZ1bmN0aW9uIGluc2VydChrZXkpe1xuICAgIGxldCBuZXdOb2RlID0gbWFrZU5vZGUoa2V5KVxuICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICByb290ID0gbmV3Tm9kZVxuICAgIH1lbHNle1xuICAgICAgaW5zZXJ0Tm9kZShyb290LCBuZXdOb2RlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydE5vZGUocm9vdCwgbmV3Tm9kZSl7XG4gICAgaWYgKG5ld05vZGUua2V5IDwgcm9vdC5rZXkpIHtcbiAgICAgIGlmIChyb290LmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgcm9vdC5sZWZ0ID0gbmV3Tm9kZVxuICAgICAgfWVsc2V7XG4gICAgICAgIGluc2VydE5vZGUocm9vdC5sZWZ0LCBuZXdOb2RlKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV3Tm9kZS5rZXkgPiByb290LmtleSkge1xuICAgICAgaWYgKHJvb3QucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgcm9vdC5yaWdodCA9IG5ld05vZGVcbiAgICAgIH1lbHNle1xuICAgICAgICBpbnNlcnROb2RlKHJvb3QucmlnaHQsIG5ld05vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlKGtleSl7XG4gICAgcm9vdCA9IHJlbW92ZU5vZGUocm9vdCwga2V5KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTm9kZShyb290LCBrZXkpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBpZiAoa2V5IDwgcm9vdC5rZXkpIHsgLy8gTW92ZSBsZWZ0IGlmIGtleSBpcyBsZXNzIHRoYW4gcm9vdCBrZXlcbiAgICAgIHJvb3QubGVmdCA9IHJlbW92ZU5vZGUocm9vdC5sZWZ0LCBrZXkpXG4gICAgICByZXR1cm4gcm9vdFxuICAgIH1cbiAgICBpZiAoa2V5ID4gcm9vdC5rZXkpIHsgLy8gTW92ZSByaWdodCBpZiBrZXkgaXMgZ3JlYXRlciB0aGFuIHJvb3Qga2V5XG4gICAgICByb290LnJpZ2h0ID0gcmVtb3ZlTm9kZShyb290LnJpZ2h0LCBrZXkpXG4gICAgICByZXR1cm4gcm9vdFxuICAgIH1cbiAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsICYmIHJvb3QucmlnaHQgPT09IG51bGwpIHsgLy8gQm90aCBjaGlsZHJlbiBhcmUgbnVsbCAtLSBubyBjaGlsZHJlblxuICAgICAgcm9vdCA9IG51bGxcbiAgICAgIHJldHVybiByb290XG4gICAgfVxuICAgIGlmIChyb290LmxlZnQgPT09IG51bGwpIHsgLy8gbm9kZSBoYXMgb25lIGNoaWxkIHRvIHRoZSByaWdodFxuICAgICAgcm9vdCA9IHJvb3QucmlnaHRcbiAgICAgIHJldHVybiByb290XG4gICAgfVxuICAgIGlmIChyb290LnJpZ2h0ID09PSBudWxsKSB7IC8vIG5vZGUgaGFzIG9uZSBjaGlsZCB0byB0aGUgbGVmdFxuICAgICAgcm9vdCA9IHJvb3QubGVmdFxuICAgICAgcmV0dXJuIHJvb3RcbiAgICB9XG4gICAgbGV0IGF1eCA9IG1pbk5vZGUocm9vdC5yaWdodCkgLy8gU29tZXRoaW5nIHdpdGggdHdvIGNoaWxkcmVuIG1pbmltdW0gbm9kZSBvZiByaWdodCBzdWJ0cmVlXG4gICAgcm9vdC5rZXkgPSBhdXgua2V5XG5cbiAgICByb290LnJpZ2h0ID0gcmVtb3ZlTm9kZShyb290LnJpZ2h0LCBhdXgua2V5KVxuICAgIHJldHVybiByb290XG4gIH1cblxuICAgIGZ1bmN0aW9uIG1pbk5vZGUocm9vdCl7XG4gICAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByb290XG4gICAgICB9ZWxzZSByZXR1cm4gbWluTm9kZShyb290LmxlZnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZChub2RlLCBrZXkpe1xuICAgICAgICBpZihub2RlID09PSBudWxsKXtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPCBub2RlLmtleSl7XG4gICAgICAgIHJldHVybiBmaW5kKG5vZGUubGVmdCwga2V5KVxuICAgICAgfVxuICAgICAgaWYgKGtleSA+IG5vZGUua2V5KXtcbiAgICAgICAgcmV0dXJuIGZpbmQobm9kZS5yaWdodCwga2V5KVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSb290KCl7XG4gICAgICByZXR1cm4gcm9vdFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlQmFsYW5jZShyb290ID0gZ2V0Um9vdCgpKXtcbiAgICAgIGxldCBhcnIgPSBvcmRlcignaW4nLCByb290KVxuICAgICAgcmV0dXJuIFRyZWUoYXJyKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgaW5zZXJ0LFxuICAgICAgcmVtb3ZlLFxuICAgICAgZmluZCxcbiAgICAgIGdldFJvb3QsXG4gICAgICByZUJhbGFuY2VcbiAgfVxufVxuXG4vLyBsZXQgYXJyYXkgPSBtYWtlUmFuZG9tKDUpXG4vLyBsZXQgYSA9IFRyZWUoYXJyYXkpXG4vLyBhLmluc2VydCgxKVxuLy8gYS5pbnNlcnQoMylcbi8vIGEuaW5zZXJ0KDUpXG4vLyBwcmV0dHlQcmludChhLmdldFJvb3QoKSlcbi8vIGEgPSBhLnJlQmFsYW5jZSgpXG4vLyBwcmV0dHlQcmludChhLmdldFJvb3QoKSlcblxuY29uc3QgdGltZXMyID0gKHZhbHVlKSA9PiB2YWx1ZSoyXG5cbmZ1bmN0aW9uIG1ha2VSYW5kb20obil7IC8vIENyZWF0ZXMgc29ydGVkIGFycmF5IG9mIHVuaXF1ZSB2YWx1ZXNcbiAgbGV0IGFycmF5ID0gW11cbiAgd2hpbGUgKGFycmF5Lmxlbmd0aCA8IG4pe1xuICAgIGxldCBtYXggPSA2NjZcbiAgICBsZXQgbWluID0gMTFcbiAgICBhcnJheS5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKSkpXG4gIH1cbiAgbGV0IHNvcnRlZCA9IG1lcmdlU29ydChhcnJheSlcbiAgcmV0dXJuIHNvcnRlZC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHNvcnRlZC5pbmRleE9mKGl0ZW0pID09PSBpbmRleFxuICB9KVxufSIsImltcG9ydCB7IG1ha2VOb2RlIH0gZnJvbSBcIi4vbWFrZU5vZGUuanNcIlxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5LCBzdGFydCwgZW5kKXtcbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBudWxsXG4gICAgbGV0IG1pZCA9IHBhcnNlSW50KChzdGFydCArIGVuZCkgLyAyKVxuICAgIGxldCBuZXdOb2RlID0gbWFrZU5vZGUoYXJyYXlbbWlkXSlcbiAgICBuZXdOb2RlLmxlZnQgPSBidWlsZFRyZWUoYXJyYXksIHN0YXJ0LCBtaWQgLSAxKVxuICAgIG5ld05vZGUucmlnaHQgPSBidWlsZFRyZWUoYXJyYXksIG1pZCArIDEsIGVuZClcbiAgICByZXR1cm4gbmV3Tm9kZVxufSIsImV4cG9ydCBjb25zdCBsaW5rZWRMaXN0ID0gKCkgPT4geyAvLyBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBsaXN0c1xuICAgIGxldCBoZWFkID0gbnVsbCAvLyBTdGFydCBvZiB0aGUgbGlzdCAtIHdpbGwgYmVjb21lIGZpcnN0IG5vZGVcbiAgICBsZXQgbGVuZ3RoID0gMCAvLyBWYXJpYWJsZSB0byB0cmFjayBsaXN0IGxlbmd0aFxuICAgIFxuICAgIGNvbnN0IE5vZGUgPSAodmFsdWUpID0+IHsgLy8gRmFjdG9yeSBmbiB0byBjcmVhdGUgbm9kZXNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYXBwZW5kID0gKHZhbHVlKSA9PiB7IC8vIEFkZHMgbmV3IG5vZGUgdG8gZW5kIG9mIGxpc3RcbiAgICAgICAgbGV0IG5ld05vZGUgPSBOb2RlKHZhbHVlKVxuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkXG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5uZXh0KSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50Tm9kZS5uZXh0ID0gbmV3Tm9kZVxuICAgIH1cbiAgICAgICAgbGVuZ3RoKytcbiAgICB9XG5cbiAgICBjb25zdCBwcmVwZW5kID0gKHZhbHVlKSA9PiB7IC8vIEFkZHMgbmV3IG5vZGUgdG8gc3RhcnQgb2YgbGlzdFxuICAgICAgICBsZXQgbmV3Tm9kZSA9IE5vZGUodmFsdWUpXG4gICAgICAgIGlmIChoZWFkID09PSBudWxsKSB7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBuZXdOb2RlLm5leHQgPSBoZWFkXG4gICAgICAgICAgIGhlYWQgPSBuZXdOb2RlXG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoKytcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gKCkgPT4geyAvLyBQcmludHMvUmV0dXJucyBsaXN0IGxlbmd0aFxuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpXG4gICAgICAgIHJldHVybiBsZW5ndGhcbiAgICB9XG5cbiAgICBjb25zdCBwcmludEhlYWQgPSAoKSA9PiB7IC8vIFByaW50cyBsaXN0J3MgaGVhZFxuICAgICAgICBjb25zb2xlLmxvZyhoZWFkKVxuICAgICAgICByZXR1cm4gaGVhZFxuICAgIH1cblxuICAgIGNvbnN0IHByaW50VGFpbCA9ICgpID0+IHsgLy8gUHJpbnRzIGxpc3QncyB0YWlsXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLm5leHQpe1xuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50Tm9kZSlcbiAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlXG4gICAgfVxuXG4gICAgY29uc3QgYXRJbmRleCA9IChpbmRleCkgPT4geyAvLyBSZXR1cm5zIG5vZGUgYXQgaW5kZXhcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDBcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJPdXQgb2YgcmFuZ2VcIlxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrXG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50Tm9kZSlcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50Tm9kZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcG9wID0gKCkgPT4geyAvLyBSZW1vdmVzIG5vZGUgYXQgZW5kIG9mIGxpc3RcbiAgICAgICAgaWYgKGhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIk5vIGl0ZW1zIGluIGxpc3RcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICAgICAgbGV0IHByZXZpb3VzTm9kZVxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c05vZGUgPSBjdXJyZW50Tm9kZVxuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldmlvdXNOb2RlLm5leHQgPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoLS1cbiAgICB9XG5cbiAgICBjb25zdCBjb250YWlucyA9ICh2YWx1ZSkgPT4geyAvLyBDaGVja3MgaWYgbGlzdCBjb250YWlucyB2YWx1ZVxuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiTm8gaXRlbXMgaW4gbGlzdFwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUpe1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZS52YWx1ZSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0cnVlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaW5kID0gKHZhbHVlKSA9PiB7Ly8gUmV0dXJucyBpbmRleCBvZiBub2RlXG4gICAgICAgIGlmIChjb250YWlucyh2YWx1ZSkpe1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDBcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgICAgIHdoaWxlKGN1cnJlbnROb2RlLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrXG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEluZGV4XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHsgLy8gUHJpbnRzIG5vZGUgdmFsdWVzXG4gICAgICAgIGxldCBzdHJpbmcgPSBcIlwiXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGVyZSBhcmUgbm8gaXRlbXNcIilcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlKXtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gYCgke2N1cnJlbnROb2RlLnZhbHVlfSkgLT4gYFxuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyaW5nICsgXCJudWxsXCIpXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nICsgXCJudWxsXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluc2VydEF0ID0gKHZhbHVlLCBpbmRleCkgPT4geyAvLyBJbnNlcnRzIG5ldyBub2RlIGF0IGdpdmVuIGluZGV4XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDBcbiAgICAgICAgbGV0IG5ld05vZGUgPSBOb2RlKHZhbHVlKVxuXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5kZXggb3V0IG9mIHJhbmdlXCIpXG4gICAgICAgICAgICByZXR1cm4gXCJJbmRleCBvdXQgb2YgcmFuZ2VcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgbmV3Tm9kZS5uZXh0ID0gaGVhZFxuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNOb2RlXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudEluZGV4IDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgrK1xuICAgICAgICAgICAgICAgIHByZXZpb3VzTm9kZSA9IGN1cnJlbnROb2RlXG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2aW91c05vZGUubmV4dCA9IG5ld05vZGVcbiAgICAgICAgICAgIG5ld05vZGUubmV4dCA9IGN1cnJlbnROb2RlXG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoKytcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVBdCA9IChpbmRleCkgPT4geyAvLyBSZW1vdmVzIGxpc3QgaXRlbSBhdCBnaXZlbiBpbmRleFxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5kZXggb3V0IG9mIHJhbmdlXCIpXG4gICAgICAgICAgICByZXR1cm4gXCJJbmRleCBvdXQgb2YgcmFuZ2VcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IGF0SW5kZXgoaW5kZXgpLm5leHRcbiAgICAgICAgICAgIGhlYWQgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c05vZGVcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrXG4gICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gY3VycmVudE5vZGVcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZpb3VzTm9kZS5uZXh0ID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICB9XG4gICAgICAgIGxlbmd0aC0tXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBOb2RlLFxuICAgICAgICBhcHBlbmQsXG4gICAgICAgIHByZXBlbmQsXG4gICAgICAgIHNpemUsXG4gICAgICAgIHByaW50SGVhZCxcbiAgICAgICAgcHJpbnRUYWlsLFxuICAgICAgICBhdEluZGV4LFxuICAgICAgICBwb3AsXG4gICAgICAgIGNvbnRhaW5zLFxuICAgICAgICBmaW5kLFxuICAgICAgICB0b1N0cmluZyxcbiAgICAgICAgaW5zZXJ0QXQsXG4gICAgICAgIHJlbW92ZUF0XG4gICAgfVxufVxuXG4vLyBsZXQgbGlzdCA9IGxpbmtlZExpc3QoKVxuLy8gbGlzdC5hcHBlbmQoXCJPbmVcIilcbi8vIGxpc3QuYXBwZW5kKFwiVHdvXCIpXG4vLyBsaXN0LnByZXBlbmQoXCJaZXJvXCIpXG4vLyBsaXN0Lmluc2VydEF0KFwiVGhyZWVcIiwgMylcbi8vIGxpc3Quc2l6ZSgpXG4vLyBsaXN0LnRvU3RyaW5nKClcbi8vIGxpc3QucmVtb3ZlQXQoMilcbi8vIGxpc3QudG9TdHJpbmcoKVxuLy8gbGlzdC5zaXplKCkiLCJpbXBvcnQgXCIuL2xpbmtlZExpc3QuanNcIlxuaW1wb3J0IFwiLi9tZXJnZXNvcnQuanNcIlxuaW1wb3J0IFwiLi9yZWN1cnNpb24uanNcIlxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IFwiLi9iaW5hcnktdHJlZXMuanNcIlxuaW1wb3J0IFwiLi9hcHAuanNcIiIsImV4cG9ydCBjb25zdCBtYWtlTm9kZSA9IChrZXkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5LFxuICAgICAgbGVmdDogbnVsbCxcbiAgICAgIHJpZ2h0OiBudWxsXG4gICAgfVxuICB9IiwiZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU29ydChhcnIpeyAvLyBNYWluIGZuIHRvIHJldHVybiBzb3J0ZWQgYXJyYXlcbiAgICBpZiAoYXJyLmxlbmd0aCA8PSAxKXsgLy8gSWYgdGhlIHBhc3NlZCBhcnJheSdzIGxlbmd0aCBpcyBvbmUgb3IgbGVzcywgcmV0dXJuIGFycmF5XG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG4gICAgbGV0IGxlZnQgPSBhcnIuc3BsaWNlKDAsIGFyci5sZW5ndGgvMikgLy8gU3BsaXQgdGhlIGFycmF5IGluIHR3b1xuICAgIHJldHVybiBtZXJnZShtZXJnZVNvcnQobGVmdCksIG1lcmdlU29ydChhcnIpKSAvLyBSZWN1cnNpdmVseSBjYWxsIG1haW4gZm4gaW5zaWRlIG1lcmdlIGZuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhLCBiKXsgLy8gRm4gdGFrZXMgdHdvIGFycmF5c1xuICAgIGxldCByZXN1bHQgPSBbXSBcbiAgICB3aGlsZShhLmxlbmd0aCA+IDAgJiYgYi5sZW5ndGggPiAwKSB7IC8vIEFzIGxvbmcgYXMgdGhlcmUgYXJlIGVsZW1lbnRzIGluIHRoZSBhcnJheSBcbiAgICAgICAgaWYgKGFbMF0gPCBiWzBdKXsgLy8gQ29tcGFyZSB0aGUgZmlyc3QgYXJyYXkgZWxlbWVudHNcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGEuc2hpZnQoKSkgLy8gUHVzaCB0byByZXN1bHQgYXJyYXlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXN1bHQucHVzaChiLnNoaWZ0KCkpIC8vIFB1c2ggdG8gcmVzdWx0IGFycmF5XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFsuLi5yZXN1bHQsIC4uLmEsIC4uLmJdIC8vIFJldHVybiByZXN1bHQgYXJyYXkgYnV0IGFsc28gY2hlY2sgaWYgdGhlcmUgYXJlIHJlbWFpbmRlcnNcbiAgICAvL2FuZCBhZGQgdGhlbSB0byB0aGUgZW5kIG9mIHJlc3VsdCBhcnJheVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxldmVsT3JkZXIocm9vdCwgY2IpIHsgLy8gTGV2ZWwgb3JkZXIgdHJhdmVyc2FsIGluIGl0ZXJhdGl2ZSBmYXNoaW9uXG5sZXQgcXVldWUgPSBbXVxubGV0IHRlbXAgPSBbcm9vdF1cbmlmICghcm9vdCkgcmV0dXJuIHF1ZXVlXG53aGlsZSAodGVtcC5sZW5ndGggIT09IDApeyAvLyBXaGlsZSB0aGUgd29ya2luZyBhcnJheSBpcyBub3QgZW1wdHlcbiAgICBsZXQgY3VycmVudCA9IHRlbXAucG9wKCkgLy8gU2V0cyBjdXJyZW50IG5vZGUgdG8gZmlyc3QgZWxlbWVudCBvZiB3b3JraW5nIGFycmF5XG4gICAgaWYgKGN1cnJlbnQubGVmdCkgdGVtcC51bnNoaWZ0KGN1cnJlbnQubGVmdClcbiAgICBpZiAoY3VycmVudC5yaWdodCkgdGVtcC51bnNoaWZ0KGN1cnJlbnQucmlnaHQpXG4gICAgaWYgKCFjYikge1xuICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQua2V5KVxuICAgIH1lbHNlIHsvLyBPcHRpb25hbCBjYWxsYmFjayBjb25kaXRpb25cbiAgICAgICAgcXVldWUucHVzaChjYihjdXJyZW50LmtleSkpXG4gICAgfVxufVxucmV0dXJuIHF1ZXVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCRlQocm9vdCwgY2IpIHsgLy8gU2V0dXAgZm9yIHJlY3Vyc2l2ZSBjYWxsIC0tIGxldmVsIG9yZGVyIHRyYXZlcnNhbFxuICAgIGxldCBxdWV1ZSA9IFtdXG4gICAgbGV0IHRlbXAgPSBbcm9vdF0gLy8gQXJyYXkgaG9sZHMgdGhlIHJvb3QgYW5kIGtlZXBzIHRyYWNrIG9mIGNoaWxkcmVuIC0tIHdvcmtpbmcgYXJyYXlcbiAgICBpZiAoIXJvb3QpIHJldHVybiBxdWV1ZVxuICAgIGVsc2UgaWYoY2IpeyAvLyBPcHRpb25hbCBjYWxsYmFjayBjb25kaXRpb25cbiAgICAgICAgcmV0dXJuIChsZXZlbE9yZGVyUmVjKHRlbXAsIHF1ZXVlKSkubWFwKGl0ZW0gPT4gY2IoaXRlbSkpXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgcmV0dXJuIGxldmVsT3JkZXJSZWModGVtcCwgcXVldWUpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV2ZWxPcmRlclJlYyhhcnJheSwgcXVldWUpIHsgLy8gUmVjdXJzaW9uIGZvciBsZXZlbCBvcmRlciB0cmF2ZXJzYWxcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gcXVldWVcbiAgICBpZiAoYXJyYXkpe1xuICAgICAgICBsZXQgY3VycmVudCA9IGFycmF5LnNoaWZ0KCkgLy8gU2V0cyBjdXJyZW50IG5vZGUgdG8gZmlyc3QgZWxlbWVudCBvZiB3b3JraW5nIGFycmF5XG4gICAgICAgIGlmIChjdXJyZW50LmxlZnQpIGFycmF5LnB1c2goY3VycmVudC5sZWZ0KVxuICAgICAgICBpZiAoY3VycmVudC5yaWdodCkgYXJyYXkucHVzaChjdXJyZW50LnJpZ2h0KVxuICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnQua2V5KVxuICAgICAgICByZXR1cm4gbGV2ZWxPcmRlclJlYyhhcnJheSwgcXVldWUpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXIoZGlyLCBub2RlLCBjYil7XG4gICAgbGV0IG9yZGVyID0gW11cbiAgICBpZiAoIW5vZGUgfHwgIWRpcikgcmV0dXJuXG4gICAgZWxzZSBpZiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIG9yZGVyUmVjKGRpciwgbm9kZSwgb3JkZXIpLm1hcChpdGVtID0+IGNiKGl0ZW0pKVxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gb3JkZXJSZWMoZGlyLCBub2RlLCBvcmRlcilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9yZGVyUmVjKGRpciwgbm9kZSwgYXJyYXkpe1xuICAgIGlmIChkaXIgPT09ICdpbicpIHtcbiAgICAgICAgaWYgKCFub2RlKSByZXR1cm5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG9yZGVyUmVjKGRpciwgbm9kZS5sZWZ0LCBhcnJheSlcbiAgICAgICAgICAgIGFycmF5LnB1c2gobm9kZS5rZXkpXG4gICAgICAgICAgICBvcmRlclJlYyhkaXIsIG5vZGUucmlnaHQsIGFycmF5KVxuICAgICAgICB9XG4gICAgfWVsc2UgaWYgKGRpciA9PT0gJ3ByZScpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2gobm9kZS5rZXkpXG4gICAgICAgICAgICBvcmRlclJlYyhkaXIsIG5vZGUubGVmdCwgYXJyYXkpXG4gICAgICAgICAgICBvcmRlclJlYyhkaXIsIG5vZGUucmlnaHQsIGFycmF5KVxuICAgICAgICB9XG4gICAgfWVsc2UgaWYgKGRpciA9PT0gJ3Bvc3QnKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBvcmRlclJlYyhkaXIsIG5vZGUubGVmdCwgYXJyYXkpXG4gICAgICAgICAgICBvcmRlclJlYyhkaXIsIG5vZGUucmlnaHQsIGFycmF5KVxuICAgICAgICAgICAgYXJyYXkucHVzaChub2RlLmtleSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlcbn0iLCJleHBvcnQgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmtleX1gKVxuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpXG4gICAgfVxuICAgIHJldHVybiBcIlwiXG4gIH0iLCJleHBvcnQgZnVuY3Rpb24gY291bnREb3duKG4pIHsgLy8gTG9vcCB2YXJpYW50IG9mIGEgY291bnRkb3duXG4gICAgbGV0IG51bSA9IG47XG4gICAgY29uc29sZS5sb2coXCJMb29wXCIpXG4gICAgZm9yIChsZXQgaSA9IG51bTsgaSA+PSAwOyBpLS0pe1xuICAgICAgICBjb25zb2xlLmxvZyhpKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50RG93blJlY3Vyc2l2ZShuKSB7IC8vIENvdW50ZG93biB1c2luZyByZWN1cnNpb25cbiAgICBpZiAobiA8IDApIHJldHVybjtcbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2cobik7XG4gICAgICAgIGNvdW50RG93blJlY3Vyc2l2ZShuLTEpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtUmFuZ2UobiwgdG90YWwgPSAwKXsgLy8gU3VtIHVwIHJhbmdlIHZpYSByZWN1cnNpb25cbiAgICBpZiAobiA8IDApIHtcbiAgICAgICAgcmV0dXJuIHRvdGFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2codG90YWwpXG4gICAgICAgIHJldHVybiBzdW1SYW5nZShuLTEsIHRvdGFsK24pXG4gICAgfVxufVxuLy8vL0ZpYm9uYWNjaSBzZWN0aW9uIHN0YXJ0XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWIobikgeyAvLyBSZXR1cm5zIEZpYm9uYWNjaSBudW1iZXIgYXQgcG9zaXRpb24gbiBpbiBzZXF1ZW5jZVxuICAgIHJldHVybiBuIDw9IDEgPyBuIDogZmliKG4tMSkgKyBmaWIobi0yKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmliczEobikge1xuICAgIGxldCByZXN1bHQgPSBbMCwgMV07IC8vIEZpcnN0IHR3byBudW1iZXJzIGluIHNlcXVlbmNlIFxuICAgIGZvciAobGV0IGkgPSAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gPSAocmVzdWx0W2ktMV0gKyByZXN1bHRbaS0yXSkgLy8gQmFzaWMgZmlib25hY2NpIGZvcm11bGFcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmliczIobikge1xuICAgIGxldCByZXN1bHQgPSBbXTsgLy8gRW1wdHkgcmVzdWx0IGFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IHJlc3VsdC5sZW5ndGggPCBuOyBpKyspIHsgLy8gTGltaXQgYXJyYXkgbGVuZ3RoIHRvIG5cbiAgICAgICAgaWYgKGkgPiAxKSB7IC8vIEluZGljZXMgZ3JlYXRlciB0aGFuIDFcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IHJlc3VsdFtpLTFdICsgcmVzdWx0W2ktMl0gLy8gV2lsbCBiZSBzZXQgYnkgZmlib25hY2NpIGZvcm11bGFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IGkgLy8gSW5kaWNlcyAwIGFuZCAxIGFyZSBlcXVhbCB0byBpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmliczMobikgeyAvLyBSZWN1cnNpdmVcbiAgICBpZiAobiA9PT0gMSkgeyAvLyBCYXNlIGNhc2UgLS0gaWYgbiA9IDEgcmV0dXJuIGFuIGFycmF5IHdpdGggdGhlIGZpcnN0IHR3byBpbnRlZ2VycyBpbiBzZXF1ZW5jZVxuICAgICAgICByZXR1cm4gWzAsIDFdXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRlbXAgPSBmaWJzMyhuLTEpIC8vIFxuICAgICAgICB0ZW1wLnB1c2godGVtcFt0ZW1wLmxlbmd0aC0xXSArIHRlbXBbdGVtcC5sZW5ndGgtMl0pIC8vIFB1c2ggZmlib25hY2NpIGZvcm11bGEgb2YgY3VycmVudCBhcnJheVxuICAgICAgICByZXR1cm4gdGVtcC5zbGljZSgwLCBuKSAvLyBMaW1pdCByZXN1bHQgYXJyYXkgdG8gbiBpbnRlZ2VycyBcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWJzNChuKSB7XG4gICAgcmV0dXJuIChuIDwgMSkgPyAwIDogKG4gPCAyKSA/IDEgOiBmaWJzNChuLTEpICsgZmliczQobi0yKVxufVxuLy8vL0ZpYm9uYWNjaSBzZWN0aW9uIGVuZFxuXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yaWFsKG4pIHsgLy8gUmV0dXJucyBmYWN0b3JpYWwgb2YgblxuICAgIHJldHVybiBuID09PSAxID8gbiA6IG4qZmFjdG9yaWFsKG4tMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvd2VyKGEsIGIpIHsgLy8gUmVjdXJzaXZlIG1hdGggcG93ZXIgZnVuY3Rpb25cbiAgICBpZiAoYiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYSAqIHBvd2VyKGEsIGItMSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGwoYXJyYXksIGNiKSB7IC8vIFJlY3Vyc2l2ZSBmbiB0byBwYXNzIGVhY2ggYXJyYXkgaXRlbSB0byBhIGNhbGxiYWNrIGZuXG4gICAgbGV0IGFyciA9IGFycmF5LnNsaWNlKClcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNiKGFyclswXSkpe1xuICAgICAgICBhcnIuc2hpZnQoKVxuICAgICAgICByZXR1cm4gYWxsKGFyciwgY2IpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3RPZkFycmF5KGFycmF5KSB7IC8vIFJlY3Vyc2l2ZSBjYWxsIHRvIG11bHRpcGx5IGFsbCBhcnJheSBpdGVtc1xuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHJldHVybiAxXG4gICAgXG4gICAgcmV0dXJuIGFycmF5LnNoaWZ0KCkgKiBwcm9kdWN0T2ZBcnJheShhcnJheSlcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG52YXIgbmVzdGVkT2JqZWN0ID0ge1xuICAgIGRhdGE6IHtcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgc3R1ZmY6IHtcbiAgICAgICAgICAgICAgICB0aGluZzoge1xuICAgICAgICAgICAgICAgICAgICBtb3JlU3R1ZmY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hZ2ljTnVtYmVyOiA0NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbWV0aGluZzogJ2ZvbzInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zKG9iaiwgdmFsdWUpIHsgLy8gVGhpcyBmbiBjb21iaW5lcyB0aGUgZm9yLi5pbiBsb29wIHdpdGggcmVjdXJzaW9uXG4gICAgZm9yIChsZXQga2V5IGluIG9iaikgeyAvLyBJdGVyYXRlIG92ZXIgYWxsIHRoZSBvYmplY3RzIGtleXNcbiAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcpeyAvLyBJZiB0aGUga2V5J3MgdmFsdWUgaG9sZHMgYW4gb2JqZWN0XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbnMob2JqW2tleV0sIHZhbHVlKSAvLyB1c2UgcmVjdXJzaW9uIHRvIGFjY2VzcyB0aGUgbmVzdGVkIG9iamVjdFxuICAgICAgICB9XG4gICAgICAgIGlmIChvYmpba2V5XSA9PT0gdmFsdWUpIHJldHVybiB0cnVlIC8vIElmIHRoZSBrZXkncyB2YWx1ZSBtYXRjaGVzIHRoZSB2YWx1ZSByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2UgLy8gSWYgdGhlcmUncyBubyBtYXRjaCByZXR1cm4gZmFsc2VcbiAgICB9XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZnVuY3Rpb24gdG90YWxJbnRlZ2VycyhhcnJheSl7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7IC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyByZXR1cm4gMFxuXG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgbGV0IHBhcnRpYWwgPSBhcnJheS5zaGlmdCgpOyAvLyBzdG9yZSB0aGUgZmlyc3QgYXZhaWxhYmxlIGVsZW1lbnRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJ0aWFsKSkgeyAvLyBpZiB0aGUgZWxlbWVudCBpcyBhbiBhcnJheVxuICAgICAgICByZXN1bHQgKz0gdG90YWxJbnRlZ2VycyhwYXJ0aWFsKSAvLyBjYWxsIGFnYWluIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBlbGVtZW50XG4gICAgfSBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYXJ0aWFsKSkgeyAvLyBpZiB0aGUgZWxlbWVudCBpcyBhIG51bWJlci9pbnRlZ2VyXG4gICAgICAgIHJlc3VsdCArPSAxIC8vIGluY3JlbWVudCByZXN1bHQgdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdCArIHRvdGFsSW50ZWdlcnMoYXJyYXkpIC8vIGNhbGxzIHRoZSBmbiBhZ2FpbiB3aXRoIHRoZSBwYXJ0aWFsIGFycmF5XG4gICAgLy8gdGhlIGxhc3QgcGFydGlhbCBhcnJheSBoYXMgYSBsZW5ndGggb2YgMCBhbmQgdHJpZ2dlcnMgdGhlIGJhc2UgY2FzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU3VtU3F1YXJlcyh2YWwpIHtcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7IC8vIEJhc2UgY2FzZSAtLSBpZiBhcnJheSBoYXMgbm8gZWxlbWVudHMgcmV0dXJuIDBcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBsZXQgcGFydGlhbCA9IHZhbC5zaGlmdCgpOyAvLyBHcmFicyBmaXJzdCBlbGVtZW50IG9mIGFycmF5XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFydGlhbCkpIHsgLy8gaWYgZmlyc3QgZWxlbWVudCBvZiBhcnJheSBpcyBhbiBhcnJheSBcbiAgICAgICAgcmVzdWx0ICs9IFN1bVNxdWFyZXMocGFydGlhbCkgLy8gcmVjdXJzaXZlbHkgY2FsbCBmbiB3aXRoIHBhcnRpYWwgYXJyYXkgYW5kIGFkZCB0byByZXN1bHRcbiAgICB9XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIocGFydGlhbCkpIHsgLy8gaWYgZmlyc3QgZWxlbWVudCBvZiBhcnJheSBpcyBhbiBpbnRlZ2VyXG4gICAgICAgIHJlc3VsdCArPSBwYXJ0aWFsKnBhcnRpYWwgLy8gYWRkIHRoZSBzcXVhcmUgb2YgaW50ZWdlciB0byByZXN1bHRcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0ICs9IFN1bVNxdWFyZXModmFsKSAvLyBhZGRzIGFsbCByZWN1cnNpdmUgY2FsbHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxpY2F0ZShhLCBiKSB7IC8vIENyZWF0ZXMgYW4gYXJyYXkgb2YgaW50ZWdlcnMgLS0gYSBpcyBiZWluZyByZXBsaWNhdGVkIGIgdGltZXNcbiAgICBpZiAoYSA8PSAwKSByZXR1cm4gW11cbiAgICByZXR1cm4gW2JdLmNvbmNhdChyZXBsaWNhdGUoYS0xLCBiKSlcbiAgICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9