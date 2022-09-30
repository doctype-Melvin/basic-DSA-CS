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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    padding: 0;\n    margin: 0;\n    font-family: 'Share Tech Mono', monospace;\n    height: 100vh;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n    text-align: center;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n@media only screen and (min-width: 500px) {\n    .container {\n        flex-direction: row;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,yCAAyC;IACzC,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI;QACI,mBAAmB;IACvB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    padding: 0;\n    margin: 0;\n    font-family: 'Share Tech Mono', monospace;\n    height: 100vh;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n    text-align: center;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n@media only screen and (min-width: 500px) {\n    .container {\n        flex-direction: row;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsNkhBQTZIO0FBQzdIO0FBQ0Esa0VBQWtFLDZCQUE2QixHQUFHLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGdEQUFnRCxvQkFBb0IsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLFFBQVEseUJBQXlCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLCtDQUErQyxrQkFBa0IsOEJBQThCLE9BQU8sR0FBRyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSw4R0FBOEcsNEJBQTRCLDZCQUE2QixHQUFHLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGdEQUFnRCxvQkFBb0IsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLFFBQVEseUJBQXlCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLCtDQUErQyxrQkFBa0IsOEJBQThCLE9BQU8sR0FBRyxtQkFBbUI7QUFDMWxEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNFOztBQUVuQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDd0Q7QUFDZDtBQUNGO0FBQ1M7QUFDRTtBQUNQOzs7QUFHckMsMEJBQTBCO0FBQ2pDO0FBQ0Esb0JBQW9CLHdEQUFTO0FBQzdCO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQVE7QUFDMUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixnREFBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0RBQVM7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDbEl3Qzs7QUFFakM7QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RPLDJCQUEyQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlNd0I7QUFDRDtBQUNBO0FBQ0g7QUFDTTs7Ozs7Ozs7Ozs7Ozs7O0FDSm5CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOTyx5QkFBeUI7QUFDaEMsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sc0JBQXNCO0FBQzdCO0FBQ0EsMENBQTBDO0FBQzFDLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CTyxnQ0FBZ0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE1BQU07QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLHlCQUF5QjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLHVDQUF1QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEVPO0FBQ1A7QUFDQSxpQ0FBaUMsT0FBTyxFQUFFLHlCQUF5QjtBQUNuRTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsU0FBUztBQUNoRTtBQUNBLGdDQUFnQyxPQUFPLEVBQUUseUJBQXlCO0FBQ2xFO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUTyx3QkFBd0I7QUFDL0I7QUFDQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTs7QUFFTyxpQ0FBaUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLGlDQUFpQztBQUN4QztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sa0JBQWtCO0FBQ3pCO0FBQ0E7O0FBRU87QUFDUCx5QkFBeUI7QUFDekIsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxxQkFBcUI7QUFDckIsb0JBQW9CLG1CQUFtQixPQUFPO0FBQzlDLHFCQUFxQjtBQUNyQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLG9CQUFvQjtBQUMzQixtQkFBbUI7QUFDbkI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTyx3QkFBd0I7QUFDL0I7QUFDQTs7QUFFTyx1QkFBdUI7QUFDOUI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRU8sMEJBQTBCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFTyxpQ0FBaUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTyxnQ0FBZ0M7QUFDdkMsMkJBQTJCO0FBQzNCLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHNDQUFzQzs7QUFFdEM7QUFDQSxpQ0FBaUM7QUFDakMsa0NBQWtDO0FBQ2xDO0FBQ0EsTUFBTSxpQ0FBaUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG9DQUFvQztBQUNwQztBQUNBLCtCQUErQjtBQUMvQixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRU8sMkJBQTJCO0FBQ2xDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9iYWxhbmNlLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvYmluYXJ5LXRyZWVzLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvYnVpbGRUcmVlLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9tYWtlTm9kZS5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL21lcmdlc29ydC5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL29yZGVyLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvcHJpbnRUcmVlLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvcmVjdXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hhcmUrVGVjaCtNb25vJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1NoYXJlIFRlY2ggTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCx5Q0FBeUM7SUFDekMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hhcmUrVGVjaCtNb25vJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1NoYXJlIFRlY2ggTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnNvbGUubG9nKCdIZWxsbyBXb3JsZCEnKSIsImltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi9iaW5hcnktdHJlZXMuanNcIlxuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSBcIi4vYnVpbGRUcmVlLmpzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGhlaWdodChyb290KXtcbiAgICBpZiAoIXJvb3QpIHJldHVybiAtMVxuICAgIGxldCBsZWZ0ID0gaGVpZ2h0KHJvb3QubGVmdClcbiAgICBsZXQgcmlnaHQgPSBoZWlnaHQocm9vdC5yaWdodClcbiAgICBpZiAobGVmdCA+IHJpZ2h0KXtcbiAgICAgICAgcmV0dXJuICsrbGVmdFxuICAgIH0gZWxzZSByZXR1cm4gKytyaWdodFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVwdGgocm9vdCwgbm9kZSwgZGlzdCA9IC0xKXtcbiAgICBpZiAoIXJvb3QpIHJldHVybiBudWxsXG4gICAgaWYgKHJvb3Qua2V5ID09PSBub2RlKSByZXR1cm4gKytkaXN0XG4gICAgaWYgKG5vZGUgPCByb290LmtleSkge1xuICAgICAgIHJldHVybiBkZXB0aChyb290LmxlZnQsIG5vZGUsICsrZGlzdClcbiAgICB9ZWxzZSBpZihub2RlID4gcm9vdC5rZXkpe1xuICAgICAgICByZXR1cm4gZGVwdGgocm9vdC5yaWdodCwgbm9kZSwgKytkaXN0KVxuICAgIH1cbiAgICByZXR1cm4gZGlzdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCYWxhbmNlZChyb290KXtcbiAgICBsZXQgcmVzdWx0XG4gICAgbGV0IGxlZnQgPSByb290LmxlZnRcbiAgICBsZXQgcmlnaHQgPSByb290LnJpZ2h0XG4gICAgbGVmdCA9IGhlaWdodChsZWZ0KVxuICAgIHJpZ2h0ID0gaGVpZ2h0KHJpZ2h0KVxuICAgIGlmIChsZWZ0IDwgcmlnaHQpIHtcbiAgICAgICAgcmVzdWx0ID0gcmlnaHQgLSBsZWZ0XG4gICAgfVxuICAgIGlmIChyaWdodCA8IGxlZnQpIHtcbiAgICAgICAgcmVzdWx0ID0gbGVmdCAtIHJpZ2h0XG4gICAgfVxuICAgIHJldHVybiAocmVzdWx0ID4gMSkgPyBmYWxzZSA6IHRydWVcbn0iLCJpbXBvcnQgeyBkZXB0aCwgaGVpZ2h0LCBpc0JhbGFuY2VkIH0gZnJvbSBcIi4vYmFsYW5jZS5qc1wiXG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tIFwiLi9idWlsZFRyZWUuanNcIlxuaW1wb3J0IHsgbWFrZU5vZGUgfSBmcm9tIFwiLi9tYWtlTm9kZS5qc1wiXG5pbXBvcnQgeyBtZXJnZVNvcnQsIG1lcmdlIH0gZnJvbSBcIi4vbWVyZ2Vzb3J0LmpzXCJcbmltcG9ydCB7IEJGVCwgbGV2ZWxPcmRlciwgb3JkZXIgfSBmcm9tIFwiLi9vcmRlci5qc1wiXG5pbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3ByaW50VHJlZS5qc1wiXG5cblxuZXhwb3J0IGNvbnN0IFRyZWUgPSAoYXJyYXkpID0+IHsgLy9Nb2R1bGUgdGhhdCBob2xkcyBhbGwgQlNUIG1ldGhvZHNcbiAgbGV0IHJvb3QgPSBudWxsIC8vIEluaXRpYWxpemUgcm9vdCB2YXJpYWJsZSAtLSBudWxsIGlmIHRoZXJlJ3Mgbm8gYXJyYXlcbiAgaWYgKGFycmF5KSByb290ID0gYnVpbGRUcmVlKGFycmF5LCAwLCBhcnJheS5sZW5ndGggLSAxKSAvLyBJZiBhbiBhcnJheSBpcyBwYXNzZWQsIGNyZWF0ZSB0cmVlXG4gIFxuICBmdW5jdGlvbiBpbnNlcnQoa2V5KXtcbiAgICBsZXQgbmV3Tm9kZSA9IG1ha2VOb2RlKGtleSlcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgcm9vdCA9IG5ld05vZGVcbiAgICB9ZWxzZXtcbiAgICAgIGluc2VydE5vZGUocm9vdCwgbmV3Tm9kZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnROb2RlKHJvb3QsIG5ld05vZGUpe1xuICAgIGlmIChuZXdOb2RlLmtleSA8IHJvb3Qua2V5KSB7XG4gICAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgIHJvb3QubGVmdCA9IG5ld05vZGVcbiAgICAgIH1lbHNle1xuICAgICAgICBpbnNlcnROb2RlKHJvb3QubGVmdCwgbmV3Tm9kZSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5ld05vZGUua2V5ID4gcm9vdC5rZXkpIHtcbiAgICAgIGlmIChyb290LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgIHJvb3QucmlnaHQgPSBuZXdOb2RlXG4gICAgICB9ZWxzZXtcbiAgICAgICAgaW5zZXJ0Tm9kZShyb290LnJpZ2h0LCBuZXdOb2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZShrZXkpe1xuICAgIHJvb3QgPSByZW1vdmVOb2RlKHJvb3QsIGtleSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU5vZGUocm9vdCwga2V5KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBudWxsXG4gICAgaWYgKGtleSA8IHJvb3Qua2V5KSB7IC8vIE1vdmUgbGVmdCBpZiBrZXkgaXMgbGVzcyB0aGFuIHJvb3Qga2V5XG4gICAgICByb290LmxlZnQgPSByZW1vdmVOb2RlKHJvb3QubGVmdCwga2V5KVxuICAgICAgcmV0dXJuIHJvb3RcbiAgICB9XG4gICAgaWYgKGtleSA+IHJvb3Qua2V5KSB7IC8vIE1vdmUgcmlnaHQgaWYga2V5IGlzIGdyZWF0ZXIgdGhhbiByb290IGtleVxuICAgICAgcm9vdC5yaWdodCA9IHJlbW92ZU5vZGUocm9vdC5yaWdodCwga2V5KVxuICAgICAgcmV0dXJuIHJvb3RcbiAgICB9XG4gICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCAmJiByb290LnJpZ2h0ID09PSBudWxsKSB7IC8vIEJvdGggY2hpbGRyZW4gYXJlIG51bGwgLS0gbm8gY2hpbGRyZW5cbiAgICAgIHJvb3QgPSBudWxsXG4gICAgICByZXR1cm4gcm9vdFxuICAgIH1cbiAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsKSB7IC8vIG5vZGUgaGFzIG9uZSBjaGlsZCB0byB0aGUgcmlnaHRcbiAgICAgIHJvb3QgPSByb290LnJpZ2h0XG4gICAgICByZXR1cm4gcm9vdFxuICAgIH1cbiAgICBpZiAocm9vdC5yaWdodCA9PT0gbnVsbCkgeyAvLyBub2RlIGhhcyBvbmUgY2hpbGQgdG8gdGhlIGxlZnRcbiAgICAgIHJvb3QgPSByb290LmxlZnRcbiAgICAgIHJldHVybiByb290XG4gICAgfVxuICAgIGxldCBhdXggPSBtaW5Ob2RlKHJvb3QucmlnaHQpIC8vIFNvbWV0aGluZyB3aXRoIHR3byBjaGlsZHJlbiBtaW5pbXVtIG5vZGUgb2YgcmlnaHQgc3VidHJlZVxuICAgIHJvb3Qua2V5ID0gYXV4LmtleVxuXG4gICAgcm9vdC5yaWdodCA9IHJlbW92ZU5vZGUocm9vdC5yaWdodCwgYXV4LmtleSlcbiAgICByZXR1cm4gcm9vdFxuICB9XG5cbiAgICBmdW5jdGlvbiBtaW5Ob2RlKHJvb3Qpe1xuICAgICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcm9vdFxuICAgICAgfWVsc2UgcmV0dXJuIG1pbk5vZGUocm9vdC5sZWZ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmQobm9kZSwga2V5KXtcbiAgICAgICAgaWYobm9kZSA9PT0gbnVsbCl7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICBpZiAoa2V5IDwgbm9kZS5rZXkpe1xuICAgICAgICByZXR1cm4gZmluZChub2RlLmxlZnQsIGtleSlcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPiBub2RlLmtleSl7XG4gICAgICAgIHJldHVybiBmaW5kKG5vZGUucmlnaHQsIGtleSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Um9vdCgpe1xuICAgICAgcmV0dXJuIHJvb3RcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZUJhbGFuY2Uocm9vdCA9IGdldFJvb3QoKSl7XG4gICAgICBsZXQgYXJyID0gb3JkZXIoJ2luJywgcm9vdClcbiAgICAgIHJldHVybiBUcmVlKGFycilcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIGluc2VydCxcbiAgICAgIHJlbW92ZSxcbiAgICAgIGZpbmQsXG4gICAgICBnZXRSb290LFxuICAgICAgcmVCYWxhbmNlXG4gIH1cbn1cblxuLy8gbGV0IGFycmF5ID0gbWFrZVJhbmRvbSg1KVxuLy8gbGV0IGEgPSBUcmVlKGFycmF5KVxuLy8gYS5pbnNlcnQoMSlcbi8vIGEuaW5zZXJ0KDMpXG4vLyBhLmluc2VydCg1KVxuLy8gcHJldHR5UHJpbnQoYS5nZXRSb290KCkpXG4vLyBhID0gYS5yZUJhbGFuY2UoKVxuLy8gcHJldHR5UHJpbnQoYS5nZXRSb290KCkpXG5cbmNvbnN0IHRpbWVzMiA9ICh2YWx1ZSkgPT4gdmFsdWUqMlxuXG5mdW5jdGlvbiBtYWtlUmFuZG9tKG4peyAvLyBDcmVhdGVzIHNvcnRlZCBhcnJheSBvZiB1bmlxdWUgdmFsdWVzXG4gIGxldCBhcnJheSA9IFtdXG4gIHdoaWxlIChhcnJheS5sZW5ndGggPCBuKXtcbiAgICBsZXQgbWF4ID0gNjY2XG4gICAgbGV0IG1pbiA9IDExXG4gICAgYXJyYXkucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbikpKVxuICB9XG4gIGxldCBzb3J0ZWQgPSBtZXJnZVNvcnQoYXJyYXkpXG4gIHJldHVybiBzb3J0ZWQuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiBzb3J0ZWQuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXhcbiAgfSlcbn0iLCJpbXBvcnQgeyBtYWtlTm9kZSB9IGZyb20gXCIuL21ha2VOb2RlLmpzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnJheSwgc3RhcnQsIGVuZCl7XG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gbnVsbFxuICAgIGxldCBtaWQgPSBwYXJzZUludCgoc3RhcnQgKyBlbmQpIC8gMilcbiAgICBsZXQgbmV3Tm9kZSA9IG1ha2VOb2RlKGFycmF5W21pZF0pXG4gICAgbmV3Tm9kZS5sZWZ0ID0gYnVpbGRUcmVlKGFycmF5LCBzdGFydCwgbWlkIC0gMSlcbiAgICBuZXdOb2RlLnJpZ2h0ID0gYnVpbGRUcmVlKGFycmF5LCBtaWQgKyAxLCBlbmQpXG4gICAgcmV0dXJuIG5ld05vZGVcbn0iLCJleHBvcnQgY29uc3QgbGlua2VkTGlzdCA9ICgpID0+IHsgLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgbGlzdHNcbiAgICBsZXQgaGVhZCA9IG51bGwgLy8gU3RhcnQgb2YgdGhlIGxpc3QgLSB3aWxsIGJlY29tZSBmaXJzdCBub2RlXG4gICAgbGV0IGxlbmd0aCA9IDAgLy8gVmFyaWFibGUgdG8gdHJhY2sgbGlzdCBsZW5ndGhcbiAgICBcbiAgICBjb25zdCBOb2RlID0gKHZhbHVlKSA9PiB7IC8vIEZhY3RvcnkgZm4gdG8gY3JlYXRlIG5vZGVzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG5leHQ6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZCA9ICh2YWx1ZSkgPT4geyAvLyBBZGRzIG5ldyBub2RlIHRvIGVuZCBvZiBsaXN0XG4gICAgICAgIGxldCBuZXdOb2RlID0gTm9kZSh2YWx1ZSlcbiAgICAgICAgaWYgKGhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUubmV4dCkge1xuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG5ld05vZGVcbiAgICB9XG4gICAgICAgIGxlbmd0aCsrXG4gICAgfVxuXG4gICAgY29uc3QgcHJlcGVuZCA9ICh2YWx1ZSkgPT4geyAvLyBBZGRzIG5ldyBub2RlIHRvIHN0YXJ0IG9mIGxpc3RcbiAgICAgICAgbGV0IG5ld05vZGUgPSBOb2RlKHZhbHVlKVxuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgbmV3Tm9kZS5uZXh0ID0gaGVhZFxuICAgICAgICAgICBoZWFkID0gbmV3Tm9kZVxuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCsrXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9ICgpID0+IHsgLy8gUHJpbnRzL1JldHVybnMgbGlzdCBsZW5ndGhcbiAgICAgICAgY29uc29sZS5sb2cobGVuZ3RoKVxuICAgICAgICByZXR1cm4gbGVuZ3RoXG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRIZWFkID0gKCkgPT4geyAvLyBQcmludHMgbGlzdCdzIGhlYWRcbiAgICAgICAgY29uc29sZS5sb2coaGVhZClcbiAgICAgICAgcmV0dXJuIGhlYWRcbiAgICB9XG5cbiAgICBjb25zdCBwcmludFRhaWwgPSAoKSA9PiB7IC8vIFByaW50cyBsaXN0J3MgdGFpbFxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkXG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5uZXh0KXtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudE5vZGUpXG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZVxuICAgIH1cblxuICAgIGNvbnN0IGF0SW5kZXggPSAoaW5kZXgpID0+IHsgLy8gUmV0dXJucyBub2RlIGF0IGluZGV4XG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiT3V0IG9mIHJhbmdlXCJcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudEluZGV4IDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgrK1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudE5vZGUpXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudE5vZGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvcCA9ICgpID0+IHsgLy8gUmVtb3ZlcyBub2RlIGF0IGVuZCBvZiBsaXN0XG4gICAgICAgIGlmIChoZWFkID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJObyBpdGVtcyBpbiBsaXN0XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgICAgIGxldCBwcmV2aW91c05vZGVcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gY3VycmVudE5vZGVcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZpb3VzTm9kZS5uZXh0ID0gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGxlbmd0aC0tXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbnMgPSAodmFsdWUpID0+IHsgLy8gQ2hlY2tzIGlmIGxpc3QgY29udGFpbnMgdmFsdWVcbiAgICAgICAgaWYgKGhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIk5vIGl0ZW1zIGluIGxpc3RcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlKXtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE5vZGUudmFsdWUgPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmYWxzZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9ICh2YWx1ZSkgPT4gey8vIFJldHVybnMgaW5kZXggb2Ygbm9kZVxuICAgICAgICBpZiAoY29udGFpbnModmFsdWUpKXtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwXG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkXG4gICAgICAgICAgICB3aGlsZShjdXJyZW50Tm9kZS52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgrK1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEluZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRJbmRleFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7IC8vIFByaW50cyBub2RlIHZhbHVlc1xuICAgICAgICBsZXQgc3RyaW5nID0gXCJcIlxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkXG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgYXJlIG5vIGl0ZW1zXCIpXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSl7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGAoJHtjdXJyZW50Tm9kZS52YWx1ZX0pIC0+IGBcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cmluZyArIFwibnVsbFwiKVxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyArIFwibnVsbFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnNlcnRBdCA9ICh2YWx1ZSwgaW5kZXgpID0+IHsgLy8gSW5zZXJ0cyBuZXcgbm9kZSBhdCBnaXZlbiBpbmRleFxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwXG4gICAgICAgIGxldCBuZXdOb2RlID0gTm9kZSh2YWx1ZSlcblxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluZGV4IG91dCBvZiByYW5nZVwiKVxuICAgICAgICAgICAgcmV0dXJuIFwiSW5kZXggb3V0IG9mIHJhbmdlXCJcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIG5ld05vZGUubmV4dCA9IGhlYWRcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzTm9kZVxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4KytcbiAgICAgICAgICAgICAgICBwcmV2aW91c05vZGUgPSBjdXJyZW50Tm9kZVxuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldmlvdXNOb2RlLm5leHQgPSBuZXdOb2RlXG4gICAgICAgICAgICBuZXdOb2RlLm5leHQgPSBjdXJyZW50Tm9kZVxuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCsrXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQXQgPSAoaW5kZXgpID0+IHsgLy8gUmVtb3ZlcyBsaXN0IGl0ZW0gYXQgZ2l2ZW4gaW5kZXhcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMFxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluZGV4IG91dCBvZiByYW5nZVwiKVxuICAgICAgICAgICAgcmV0dXJuIFwiSW5kZXggb3V0IG9mIHJhbmdlXCJcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBhdEluZGV4KGluZGV4KS5uZXh0XG4gICAgICAgICAgICBoZWFkID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNOb2RlXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudEluZGV4IDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgrK1xuICAgICAgICAgICAgICAgIHByZXZpb3VzTm9kZSA9IGN1cnJlbnROb2RlXG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2aW91c05vZGUubmV4dCA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGgtLVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgTm9kZSxcbiAgICAgICAgYXBwZW5kLFxuICAgICAgICBwcmVwZW5kLFxuICAgICAgICBzaXplLFxuICAgICAgICBwcmludEhlYWQsXG4gICAgICAgIHByaW50VGFpbCxcbiAgICAgICAgYXRJbmRleCxcbiAgICAgICAgcG9wLFxuICAgICAgICBjb250YWlucyxcbiAgICAgICAgZmluZCxcbiAgICAgICAgdG9TdHJpbmcsXG4gICAgICAgIGluc2VydEF0LFxuICAgICAgICByZW1vdmVBdFxuICAgIH1cbn1cblxuLy8gbGV0IGxpc3QgPSBsaW5rZWRMaXN0KClcbi8vIGxpc3QuYXBwZW5kKFwiT25lXCIpXG4vLyBsaXN0LmFwcGVuZChcIlR3b1wiKVxuLy8gbGlzdC5wcmVwZW5kKFwiWmVyb1wiKVxuLy8gbGlzdC5pbnNlcnRBdChcIlRocmVlXCIsIDMpXG4vLyBsaXN0LnNpemUoKVxuLy8gbGlzdC50b1N0cmluZygpXG4vLyBsaXN0LnJlbW92ZUF0KDIpXG4vLyBsaXN0LnRvU3RyaW5nKClcbi8vIGxpc3Quc2l6ZSgpIiwiaW1wb3J0IFwiLi9saW5rZWRMaXN0LmpzXCJcbmltcG9ydCBcIi4vbWVyZ2Vzb3J0LmpzXCJcbmltcG9ydCBcIi4vcmVjdXJzaW9uLmpzXCJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCBcIi4vYmluYXJ5LXRyZWVzLmpzXCJcbmltcG9ydCBcIi4vYXBwLmpzXCIiLCJleHBvcnQgY29uc3QgbWFrZU5vZGUgPSAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleSxcbiAgICAgIGxlZnQ6IG51bGwsXG4gICAgICByaWdodDogbnVsbFxuICAgIH1cbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBtZXJnZVNvcnQoYXJyKXsgLy8gTWFpbiBmbiB0byByZXR1cm4gc29ydGVkIGFycmF5XG4gICAgaWYgKGFyci5sZW5ndGggPD0gMSl7IC8vIElmIHRoZSBwYXNzZWQgYXJyYXkncyBsZW5ndGggaXMgb25lIG9yIGxlc3MsIHJldHVybiBhcnJheVxuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxuICAgIGxldCBsZWZ0ID0gYXJyLnNwbGljZSgwLCBhcnIubGVuZ3RoLzIpIC8vIFNwbGl0IHRoZSBhcnJheSBpbiB0d29cbiAgICByZXR1cm4gbWVyZ2UobWVyZ2VTb3J0KGxlZnQpLCBtZXJnZVNvcnQoYXJyKSkgLy8gUmVjdXJzaXZlbHkgY2FsbCBtYWluIGZuIGluc2lkZSBtZXJnZSBmblxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYSwgYil7IC8vIEZuIHRha2VzIHR3byBhcnJheXNcbiAgICBsZXQgcmVzdWx0ID0gW10gXG4gICAgd2hpbGUoYS5sZW5ndGggPiAwICYmIGIubGVuZ3RoID4gMCkgeyAvLyBBcyBsb25nIGFzIHRoZXJlIGFyZSBlbGVtZW50cyBpbiB0aGUgYXJyYXkgXG4gICAgICAgIGlmIChhWzBdIDwgYlswXSl7IC8vIENvbXBhcmUgdGhlIGZpcnN0IGFycmF5IGVsZW1lbnRzXG4gICAgICAgICAgICByZXN1bHQucHVzaChhLnNoaWZ0KCkpIC8vIFB1c2ggdG8gcmVzdWx0IGFycmF5XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYi5zaGlmdCgpKSAvLyBQdXNoIHRvIHJlc3VsdCBhcnJheVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbLi4ucmVzdWx0LCAuLi5hLCAuLi5iXSAvLyBSZXR1cm4gcmVzdWx0IGFycmF5IGJ1dCBhbHNvIGNoZWNrIGlmIHRoZXJlIGFyZSByZW1haW5kZXJzXG4gICAgLy9hbmQgYWRkIHRoZW0gdG8gdGhlIGVuZCBvZiByZXN1bHQgYXJyYXlcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsZXZlbE9yZGVyKHJvb3QsIGNiKSB7IC8vIExldmVsIG9yZGVyIHRyYXZlcnNhbCBpbiBpdGVyYXRpdmUgZmFzaGlvblxubGV0IHF1ZXVlID0gW11cbmxldCB0ZW1wID0gW3Jvb3RdXG5pZiAoIXJvb3QpIHJldHVybiBxdWV1ZVxud2hpbGUgKHRlbXAubGVuZ3RoICE9PSAwKXsgLy8gV2hpbGUgdGhlIHdvcmtpbmcgYXJyYXkgaXMgbm90IGVtcHR5XG4gICAgbGV0IGN1cnJlbnQgPSB0ZW1wLnBvcCgpIC8vIFNldHMgY3VycmVudCBub2RlIHRvIGZpcnN0IGVsZW1lbnQgb2Ygd29ya2luZyBhcnJheVxuICAgIGlmIChjdXJyZW50LmxlZnQpIHRlbXAudW5zaGlmdChjdXJyZW50LmxlZnQpXG4gICAgaWYgKGN1cnJlbnQucmlnaHQpIHRlbXAudW5zaGlmdChjdXJyZW50LnJpZ2h0KVxuICAgIGlmICghY2IpIHtcbiAgICAgICAgcXVldWUucHVzaChjdXJyZW50LmtleSlcbiAgICB9ZWxzZSB7Ly8gT3B0aW9uYWwgY2FsbGJhY2sgY29uZGl0aW9uXG4gICAgICAgIHF1ZXVlLnB1c2goY2IoY3VycmVudC5rZXkpKVxuICAgIH1cbn1cbnJldHVybiBxdWV1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQkZUKHJvb3QsIGNiKSB7IC8vIFNldHVwIGZvciByZWN1cnNpdmUgY2FsbCAtLSBsZXZlbCBvcmRlciB0cmF2ZXJzYWxcbiAgICBsZXQgcXVldWUgPSBbXVxuICAgIGxldCB0ZW1wID0gW3Jvb3RdIC8vIEFycmF5IGhvbGRzIHRoZSByb290IGFuZCBrZWVwcyB0cmFjayBvZiBjaGlsZHJlbiAtLSB3b3JraW5nIGFycmF5XG4gICAgaWYgKCFyb290KSByZXR1cm4gcXVldWVcbiAgICBlbHNlIGlmKGNiKXsgLy8gT3B0aW9uYWwgY2FsbGJhY2sgY29uZGl0aW9uXG4gICAgICAgIHJldHVybiAobGV2ZWxPcmRlclJlYyh0ZW1wLCBxdWV1ZSkpLm1hcChpdGVtID0+IGNiKGl0ZW0pKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgIHJldHVybiBsZXZlbE9yZGVyUmVjKHRlbXAsIHF1ZXVlKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxldmVsT3JkZXJSZWMoYXJyYXksIHF1ZXVlKSB7IC8vIFJlY3Vyc2lvbiBmb3IgbGV2ZWwgb3JkZXIgdHJhdmVyc2FsXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHF1ZXVlXG4gICAgaWYgKGFycmF5KXtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBhcnJheS5zaGlmdCgpIC8vIFNldHMgY3VycmVudCBub2RlIHRvIGZpcnN0IGVsZW1lbnQgb2Ygd29ya2luZyBhcnJheVxuICAgICAgICBpZiAoY3VycmVudC5sZWZ0KSBhcnJheS5wdXNoKGN1cnJlbnQubGVmdClcbiAgICAgICAgaWYgKGN1cnJlbnQucmlnaHQpIGFycmF5LnB1c2goY3VycmVudC5yaWdodClcbiAgICAgICAgcXVldWUucHVzaChjdXJyZW50LmtleSlcbiAgICAgICAgcmV0dXJuIGxldmVsT3JkZXJSZWMoYXJyYXksIHF1ZXVlKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyKGRpciwgbm9kZSwgY2Ipe1xuICAgIGxldCBvcmRlciA9IFtdXG4gICAgaWYgKCFub2RlIHx8ICFkaXIpIHJldHVyblxuICAgIGVsc2UgaWYgKGNiKSB7XG4gICAgICAgIHJldHVybiBvcmRlclJlYyhkaXIsIG5vZGUsIG9yZGVyKS5tYXAoaXRlbSA9PiBjYihpdGVtKSlcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIG9yZGVyUmVjKGRpciwgbm9kZSwgb3JkZXIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBvcmRlclJlYyhkaXIsIG5vZGUsIGFycmF5KXtcbiAgICBpZiAoZGlyID09PSAnaW4nKSB7XG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBvcmRlclJlYyhkaXIsIG5vZGUubGVmdCwgYXJyYXkpXG4gICAgICAgICAgICBhcnJheS5wdXNoKG5vZGUua2V5KVxuICAgICAgICAgICAgb3JkZXJSZWMoZGlyLCBub2RlLnJpZ2h0LCBhcnJheSlcbiAgICAgICAgfVxuICAgIH1lbHNlIGlmIChkaXIgPT09ICdwcmUnKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKG5vZGUua2V5KVxuICAgICAgICAgICAgb3JkZXJSZWMoZGlyLCBub2RlLmxlZnQsIGFycmF5KVxuICAgICAgICAgICAgb3JkZXJSZWMoZGlyLCBub2RlLnJpZ2h0LCBhcnJheSlcbiAgICAgICAgfVxuICAgIH1lbHNlIGlmIChkaXIgPT09ICdwb3N0Jykge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgb3JkZXJSZWMoZGlyLCBub2RlLmxlZnQsIGFycmF5KVxuICAgICAgICAgICAgb3JkZXJSZWMoZGlyLCBub2RlLnJpZ2h0LCBhcnJheSlcbiAgICAgICAgICAgIGFycmF5LnB1c2gobm9kZS5rZXkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5XG59IiwiZXhwb3J0IGNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5rZXl9YClcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKVxuICAgIH1cbiAgICByZXR1cm4gXCJcIlxuICB9IiwiZXhwb3J0IGZ1bmN0aW9uIGNvdW50RG93bihuKSB7IC8vIExvb3AgdmFyaWFudCBvZiBhIGNvdW50ZG93blxuICAgIGxldCBudW0gPSBuO1xuICAgIGNvbnNvbGUubG9nKFwiTG9vcFwiKVxuICAgIGZvciAobGV0IGkgPSBudW07IGkgPj0gMDsgaS0tKXtcbiAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudERvd25SZWN1cnNpdmUobikgeyAvLyBDb3VudGRvd24gdXNpbmcgcmVjdXJzaW9uXG4gICAgaWYgKG4gPCAwKSByZXR1cm47XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG4pO1xuICAgICAgICBjb3VudERvd25SZWN1cnNpdmUobi0xKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bVJhbmdlKG4sIHRvdGFsID0gMCl7IC8vIFN1bSB1cCByYW5nZSB2aWEgcmVjdXJzaW9uXG4gICAgaWYgKG4gPCAwKSB7XG4gICAgICAgIHJldHVybiB0b3RhbFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsKVxuICAgICAgICByZXR1cm4gc3VtUmFuZ2Uobi0xLCB0b3RhbCtuKVxuICAgIH1cbn1cbi8vLy9GaWJvbmFjY2kgc2VjdGlvbiBzdGFydFxuXG5leHBvcnQgZnVuY3Rpb24gZmliKG4pIHsgLy8gUmV0dXJucyBGaWJvbmFjY2kgbnVtYmVyIGF0IHBvc2l0aW9uIG4gaW4gc2VxdWVuY2VcbiAgICByZXR1cm4gbiA8PSAxID8gbiA6IGZpYihuLTEpICsgZmliKG4tMilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpYnMxKG4pIHtcbiAgICBsZXQgcmVzdWx0ID0gWzAsIDFdOyAvLyBGaXJzdCB0d28gbnVtYmVycyBpbiBzZXF1ZW5jZSBcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IG47IGkrKykge1xuICAgICAgcmVzdWx0W2ldID0gKHJlc3VsdFtpLTFdICsgcmVzdWx0W2ktMl0pIC8vIEJhc2ljIGZpYm9uYWNjaSBmb3JtdWxhXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpYnMyKG4pIHtcbiAgICBsZXQgcmVzdWx0ID0gW107IC8vIEVtcHR5IHJlc3VsdCBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyByZXN1bHQubGVuZ3RoIDwgbjsgaSsrKSB7IC8vIExpbWl0IGFycmF5IGxlbmd0aCB0byBuXG4gICAgICAgIGlmIChpID4gMSkgeyAvLyBJbmRpY2VzIGdyZWF0ZXIgdGhhbiAxXG4gICAgICAgICAgICByZXN1bHRbaV0gPSByZXN1bHRbaS0xXSArIHJlc3VsdFtpLTJdIC8vIFdpbGwgYmUgc2V0IGJ5IGZpYm9uYWNjaSBmb3JtdWxhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRbaV0gPSBpIC8vIEluZGljZXMgMCBhbmQgMSBhcmUgZXF1YWwgdG8gaVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpYnMzKG4pIHsgLy8gUmVjdXJzaXZlXG4gICAgaWYgKG4gPT09IDEpIHsgLy8gQmFzZSBjYXNlIC0tIGlmIG4gPSAxIHJldHVybiBhbiBhcnJheSB3aXRoIHRoZSBmaXJzdCB0d28gaW50ZWdlcnMgaW4gc2VxdWVuY2VcbiAgICAgICAgcmV0dXJuIFswLCAxXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0ZW1wID0gZmliczMobi0xKSAvLyBcbiAgICAgICAgdGVtcC5wdXNoKHRlbXBbdGVtcC5sZW5ndGgtMV0gKyB0ZW1wW3RlbXAubGVuZ3RoLTJdKSAvLyBQdXNoIGZpYm9uYWNjaSBmb3JtdWxhIG9mIGN1cnJlbnQgYXJyYXlcbiAgICAgICAgcmV0dXJuIHRlbXAuc2xpY2UoMCwgbikgLy8gTGltaXQgcmVzdWx0IGFycmF5IHRvIG4gaW50ZWdlcnMgXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmliczQobikge1xuICAgIHJldHVybiAobiA8IDEpID8gMCA6IChuIDwgMikgPyAxIDogZmliczQobi0xKSArIGZpYnM0KG4tMilcbn1cbi8vLy9GaWJvbmFjY2kgc2VjdGlvbiBlbmRcblxuZXhwb3J0IGZ1bmN0aW9uIGZhY3RvcmlhbChuKSB7IC8vIFJldHVybnMgZmFjdG9yaWFsIG9mIG5cbiAgICByZXR1cm4gbiA9PT0gMSA/IG4gOiBuKmZhY3RvcmlhbChuLTEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3dlcihhLCBiKSB7IC8vIFJlY3Vyc2l2ZSBtYXRoIHBvd2VyIGZ1bmN0aW9uXG4gICAgaWYgKGIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGEgKiBwb3dlcihhLCBiLTEpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsKGFycmF5LCBjYikgeyAvLyBSZWN1cnNpdmUgZm4gdG8gcGFzcyBlYWNoIGFycmF5IGl0ZW0gdG8gYSBjYWxsYmFjayBmblxuICAgIGxldCBhcnIgPSBhcnJheS5zbGljZSgpXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChjYihhcnJbMF0pKXtcbiAgICAgICAgYXJyLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIGFsbChhcnIsIGNiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9kdWN0T2ZBcnJheShhcnJheSkgeyAvLyBSZWN1cnNpdmUgY2FsbCB0byBtdWx0aXBseSBhbGwgYXJyYXkgaXRlbXNcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gMVxuICAgIFxuICAgIHJldHVybiBhcnJheS5zaGlmdCgpICogcHJvZHVjdE9mQXJyYXkoYXJyYXkpXG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xudmFyIG5lc3RlZE9iamVjdCA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIHN0dWZmOiB7XG4gICAgICAgICAgICAgICAgdGhpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9yZVN0dWZmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWdpY051bWJlcjogNDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb21ldGhpbmc6ICdmb28yJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyhvYmosIHZhbHVlKSB7IC8vIFRoaXMgZm4gY29tYmluZXMgdGhlIGZvci4uaW4gbG9vcCB3aXRoIHJlY3Vyc2lvblxuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHsgLy8gSXRlcmF0ZSBvdmVyIGFsbCB0aGUgb2JqZWN0cyBrZXlzXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnKXsgLy8gSWYgdGhlIGtleSdzIHZhbHVlIGhvbGRzIGFuIG9iamVjdFxuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5zKG9ialtrZXldLCB2YWx1ZSkgLy8gdXNlIHJlY3Vyc2lvbiB0byBhY2Nlc3MgdGhlIG5lc3RlZCBvYmplY3RcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqW2tleV0gPT09IHZhbHVlKSByZXR1cm4gdHJ1ZSAvLyBJZiB0aGUga2V5J3MgdmFsdWUgbWF0Y2hlcyB0aGUgdmFsdWUgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlIC8vIElmIHRoZXJlJ3Mgbm8gbWF0Y2ggcmV0dXJuIGZhbHNlXG4gICAgfVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvdGFsSW50ZWdlcnMoYXJyYXkpe1xuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHJldHVybiAwOyAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgcmV0dXJuIDBcblxuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGxldCBwYXJ0aWFsID0gYXJyYXkuc2hpZnQoKTsgLy8gc3RvcmUgdGhlIGZpcnN0IGF2YWlsYWJsZSBlbGVtZW50XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFydGlhbCkpIHsgLy8gaWYgdGhlIGVsZW1lbnQgaXMgYW4gYXJyYXlcbiAgICAgICAgcmVzdWx0ICs9IHRvdGFsSW50ZWdlcnMocGFydGlhbCkgLy8gY2FsbCBhZ2FpbiB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgZWxlbWVudFxuICAgIH0gaWYgKE51bWJlci5pc0ludGVnZXIocGFydGlhbCkpIHsgLy8gaWYgdGhlIGVsZW1lbnQgaXMgYSBudW1iZXIvaW50ZWdlclxuICAgICAgICByZXN1bHQgKz0gMSAvLyBpbmNyZW1lbnQgcmVzdWx0IHZhbHVlXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgKyB0b3RhbEludGVnZXJzKGFycmF5KSAvLyBjYWxscyB0aGUgZm4gYWdhaW4gd2l0aCB0aGUgcGFydGlhbCBhcnJheVxuICAgIC8vIHRoZSBsYXN0IHBhcnRpYWwgYXJyYXkgaGFzIGEgbGVuZ3RoIG9mIDAgYW5kIHRyaWdnZXJzIHRoZSBiYXNlIGNhc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN1bVNxdWFyZXModmFsKSB7XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHJldHVybiAwOyAvLyBCYXNlIGNhc2UgLS0gaWYgYXJyYXkgaGFzIG5vIGVsZW1lbnRzIHJldHVybiAwXG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgbGV0IHBhcnRpYWwgPSB2YWwuc2hpZnQoKTsgLy8gR3JhYnMgZmlyc3QgZWxlbWVudCBvZiBhcnJheVxuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnRpYWwpKSB7IC8vIGlmIGZpcnN0IGVsZW1lbnQgb2YgYXJyYXkgaXMgYW4gYXJyYXkgXG4gICAgICAgIHJlc3VsdCArPSBTdW1TcXVhcmVzKHBhcnRpYWwpIC8vIHJlY3Vyc2l2ZWx5IGNhbGwgZm4gd2l0aCBwYXJ0aWFsIGFycmF5IGFuZCBhZGQgdG8gcmVzdWx0XG4gICAgfVxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHBhcnRpYWwpKSB7IC8vIGlmIGZpcnN0IGVsZW1lbnQgb2YgYXJyYXkgaXMgYW4gaW50ZWdlclxuICAgICAgICByZXN1bHQgKz0gcGFydGlhbCpwYXJ0aWFsIC8vIGFkZCB0aGUgc3F1YXJlIG9mIGludGVnZXIgdG8gcmVzdWx0XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdCArPSBTdW1TcXVhcmVzKHZhbCkgLy8gYWRkcyBhbGwgcmVjdXJzaXZlIGNhbGxzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsaWNhdGUoYSwgYikgeyAvLyBDcmVhdGVzIGFuIGFycmF5IG9mIGludGVnZXJzIC0tIGEgaXMgYmVpbmcgcmVwbGljYXRlZCBiIHRpbWVzXG4gICAgaWYgKGEgPD0gMCkgcmV0dXJuIFtdXG4gICAgcmV0dXJuIFtiXS5jb25jYXQocmVwbGljYXRlKGEtMSwgYikpXG4gICAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==