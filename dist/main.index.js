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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFTztBQUNQLHNDQUFzQzs7QUFFdEM7QUFDQSxpQ0FBaUM7QUFDakMsa0NBQWtDO0FBQ2xDO0FBQ0EsTUFBTSxpQ0FBaUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG9DQUFvQztBQUNwQztBQUNBLCtCQUErQjtBQUMvQixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRU8sMkJBQTJCO0FBQ2xDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9iYWxhbmNlLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvYmluYXJ5LXRyZWVzLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvYnVpbGRUcmVlLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vYmFzaWMtZHMtYWxnby8uL3NyYy9tYWtlTm9kZS5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL21lcmdlc29ydC5qcyIsIndlYnBhY2s6Ly9iYXNpYy1kcy1hbGdvLy4vc3JjL29yZGVyLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvcHJpbnRUcmVlLmpzIiwid2VicGFjazovL2Jhc2ljLWRzLWFsZ28vLi9zcmMvcmVjdXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zb2xlLmxvZygnSGVsbG8gV29ybGQhJykiLCJpbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vYmluYXJ5LXRyZWVzLmpzXCJcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gXCIuL2J1aWxkVHJlZS5qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBoZWlnaHQocm9vdCl7XG4gICAgaWYgKCFyb290KSByZXR1cm4gLTFcbiAgICBsZXQgbGVmdCA9IGhlaWdodChyb290LmxlZnQpXG4gICAgbGV0IHJpZ2h0ID0gaGVpZ2h0KHJvb3QucmlnaHQpXG4gICAgaWYgKGxlZnQgPiByaWdodCl7XG4gICAgICAgIHJldHVybiArK2xlZnRcbiAgICB9IGVsc2UgcmV0dXJuICsrcmlnaHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcHRoKHJvb3QsIG5vZGUsIGRpc3QgPSAtMSl7XG4gICAgaWYgKCFyb290KSByZXR1cm4gbnVsbFxuICAgIGlmIChyb290LmtleSA9PT0gbm9kZSkgcmV0dXJuICsrZGlzdFxuICAgIGlmIChub2RlIDwgcm9vdC5rZXkpIHtcbiAgICAgICByZXR1cm4gZGVwdGgocm9vdC5sZWZ0LCBub2RlLCArK2Rpc3QpXG4gICAgfWVsc2UgaWYobm9kZSA+IHJvb3Qua2V5KXtcbiAgICAgICAgcmV0dXJuIGRlcHRoKHJvb3QucmlnaHQsIG5vZGUsICsrZGlzdClcbiAgICB9XG4gICAgcmV0dXJuIGRpc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmFsYW5jZWQocm9vdCl7XG4gICAgbGV0IHJlc3VsdFxuICAgIGxldCBsZWZ0ID0gcm9vdC5sZWZ0XG4gICAgbGV0IHJpZ2h0ID0gcm9vdC5yaWdodFxuICAgIGxlZnQgPSBoZWlnaHQobGVmdClcbiAgICByaWdodCA9IGhlaWdodChyaWdodClcbiAgICBpZiAobGVmdCA8IHJpZ2h0KSB7XG4gICAgICAgIHJlc3VsdCA9IHJpZ2h0IC0gbGVmdFxuICAgIH1cbiAgICBpZiAocmlnaHQgPCBsZWZ0KSB7XG4gICAgICAgIHJlc3VsdCA9IGxlZnQgLSByaWdodFxuICAgIH1cbiAgICByZXR1cm4gKHJlc3VsdCA+IDEpID8gZmFsc2UgOiB0cnVlXG59IiwiaW1wb3J0IHsgZGVwdGgsIGhlaWdodCwgaXNCYWxhbmNlZCB9IGZyb20gXCIuL2JhbGFuY2UuanNcIlxuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSBcIi4vYnVpbGRUcmVlLmpzXCJcbmltcG9ydCB7IG1ha2VOb2RlIH0gZnJvbSBcIi4vbWFrZU5vZGUuanNcIlxuaW1wb3J0IHsgbWVyZ2VTb3J0LCBtZXJnZSB9IGZyb20gXCIuL21lcmdlc29ydC5qc1wiXG5pbXBvcnQgeyBCRlQsIGxldmVsT3JkZXIsIG9yZGVyIH0gZnJvbSBcIi4vb3JkZXIuanNcIlxuaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tIFwiLi9wcmludFRyZWUuanNcIlxuXG5cbmV4cG9ydCBjb25zdCBUcmVlID0gKGFycmF5KSA9PiB7IC8vTW9kdWxlIHRoYXQgaG9sZHMgYWxsIEJTVCBtZXRob2RzXG4gIGxldCByb290ID0gbnVsbCAvLyBJbml0aWFsaXplIHJvb3QgdmFyaWFibGUgLS0gbnVsbCBpZiB0aGVyZSdzIG5vIGFycmF5XG4gIGlmIChhcnJheSkgcm9vdCA9IGJ1aWxkVHJlZShhcnJheSwgMCwgYXJyYXkubGVuZ3RoIC0gMSkgLy8gSWYgYW4gYXJyYXkgaXMgcGFzc2VkLCBjcmVhdGUgdHJlZVxuICBcbiAgZnVuY3Rpb24gaW5zZXJ0KGtleSl7XG4gICAgbGV0IG5ld05vZGUgPSBtYWtlTm9kZShrZXkpXG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJvb3QgPSBuZXdOb2RlXG4gICAgfWVsc2V7XG4gICAgICBpbnNlcnROb2RlKHJvb3QsIG5ld05vZGUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0Tm9kZShyb290LCBuZXdOb2RlKXtcbiAgICBpZiAobmV3Tm9kZS5rZXkgPCByb290LmtleSkge1xuICAgICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICByb290LmxlZnQgPSBuZXdOb2RlXG4gICAgICB9ZWxzZXtcbiAgICAgICAgaW5zZXJ0Tm9kZShyb290LmxlZnQsIG5ld05vZGUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuZXdOb2RlLmtleSA+IHJvb3Qua2V5KSB7XG4gICAgICBpZiAocm9vdC5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICByb290LnJpZ2h0ID0gbmV3Tm9kZVxuICAgICAgfWVsc2V7XG4gICAgICAgIGluc2VydE5vZGUocm9vdC5yaWdodCwgbmV3Tm9kZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmUoa2V5KXtcbiAgICByb290ID0gcmVtb3ZlTm9kZShyb290LCBrZXkpXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVOb2RlKHJvb3QsIGtleSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGlmIChrZXkgPCByb290LmtleSkgeyAvLyBNb3ZlIGxlZnQgaWYga2V5IGlzIGxlc3MgdGhhbiByb290IGtleVxuICAgICAgcm9vdC5sZWZ0ID0gcmVtb3ZlTm9kZShyb290LmxlZnQsIGtleSlcbiAgICAgIHJldHVybiByb290XG4gICAgfVxuICAgIGlmIChrZXkgPiByb290LmtleSkgeyAvLyBNb3ZlIHJpZ2h0IGlmIGtleSBpcyBncmVhdGVyIHRoYW4gcm9vdCBrZXlcbiAgICAgIHJvb3QucmlnaHQgPSByZW1vdmVOb2RlKHJvb3QucmlnaHQsIGtleSlcbiAgICAgIHJldHVybiByb290XG4gICAgfVxuICAgIGlmIChyb290LmxlZnQgPT09IG51bGwgJiYgcm9vdC5yaWdodCA9PT0gbnVsbCkgeyAvLyBCb3RoIGNoaWxkcmVuIGFyZSBudWxsIC0tIG5vIGNoaWxkcmVuXG4gICAgICByb290ID0gbnVsbFxuICAgICAgcmV0dXJuIHJvb3RcbiAgICB9XG4gICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCkgeyAvLyBub2RlIGhhcyBvbmUgY2hpbGQgdG8gdGhlIHJpZ2h0XG4gICAgICByb290ID0gcm9vdC5yaWdodFxuICAgICAgcmV0dXJuIHJvb3RcbiAgICB9XG4gICAgaWYgKHJvb3QucmlnaHQgPT09IG51bGwpIHsgLy8gbm9kZSBoYXMgb25lIGNoaWxkIHRvIHRoZSBsZWZ0XG4gICAgICByb290ID0gcm9vdC5sZWZ0XG4gICAgICByZXR1cm4gcm9vdFxuICAgIH1cbiAgICBsZXQgYXV4ID0gbWluTm9kZShyb290LnJpZ2h0KSAvLyBTb21ldGhpbmcgd2l0aCB0d28gY2hpbGRyZW4gbWluaW11bSBub2RlIG9mIHJpZ2h0IHN1YnRyZWVcbiAgICByb290LmtleSA9IGF1eC5rZXlcblxuICAgIHJvb3QucmlnaHQgPSByZW1vdmVOb2RlKHJvb3QucmlnaHQsIGF1eC5rZXkpXG4gICAgcmV0dXJuIHJvb3RcbiAgfVxuXG4gICAgZnVuY3Rpb24gbWluTm9kZShyb290KXtcbiAgICAgIGlmIChyb290LmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJvb3RcbiAgICAgIH1lbHNlIHJldHVybiBtaW5Ob2RlKHJvb3QubGVmdClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kKG5vZGUsIGtleSl7XG4gICAgICAgIGlmKG5vZGUgPT09IG51bGwpe1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgaWYgKGtleSA8IG5vZGUua2V5KXtcbiAgICAgICAgcmV0dXJuIGZpbmQobm9kZS5sZWZ0LCBrZXkpXG4gICAgICB9XG4gICAgICBpZiAoa2V5ID4gbm9kZS5rZXkpe1xuICAgICAgICByZXR1cm4gZmluZChub2RlLnJpZ2h0LCBrZXkpXG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJvb3QoKXtcbiAgICAgIHJldHVybiByb290XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVCYWxhbmNlKHJvb3QgPSBnZXRSb290KCkpe1xuICAgICAgbGV0IGFyciA9IG9yZGVyKCdpbicsIHJvb3QpXG4gICAgICByZXR1cm4gVHJlZShhcnIpXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBpbnNlcnQsXG4gICAgICByZW1vdmUsXG4gICAgICBmaW5kLFxuICAgICAgZ2V0Um9vdCxcbiAgICAgIHJlQmFsYW5jZVxuICB9XG59XG5cbi8vIGxldCBhcnJheSA9IG1ha2VSYW5kb20oNSlcbi8vIGxldCBhID0gVHJlZShhcnJheSlcbi8vIGEuaW5zZXJ0KDEpXG4vLyBhLmluc2VydCgzKVxuLy8gYS5pbnNlcnQoNSlcbi8vIHByZXR0eVByaW50KGEuZ2V0Um9vdCgpKVxuLy8gYSA9IGEucmVCYWxhbmNlKClcbi8vIHByZXR0eVByaW50KGEuZ2V0Um9vdCgpKVxuXG5jb25zdCB0aW1lczIgPSAodmFsdWUpID0+IHZhbHVlKjJcblxuZnVuY3Rpb24gbWFrZVJhbmRvbShuKXsgLy8gQ3JlYXRlcyBzb3J0ZWQgYXJyYXkgb2YgdW5pcXVlIHZhbHVlc1xuICBsZXQgYXJyYXkgPSBbXVxuICB3aGlsZSAoYXJyYXkubGVuZ3RoIDwgbil7XG4gICAgbGV0IG1heCA9IDY2NlxuICAgIGxldCBtaW4gPSAxMVxuICAgIGFycmF5LnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pKSlcbiAgfVxuICBsZXQgc29ydGVkID0gbWVyZ2VTb3J0KGFycmF5KVxuICByZXR1cm4gc29ydGVkLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gc29ydGVkLmluZGV4T2YoaXRlbSkgPT09IGluZGV4XG4gIH0pXG59IiwiaW1wb3J0IHsgbWFrZU5vZGUgfSBmcm9tIFwiLi9tYWtlTm9kZS5qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRyZWUoYXJyYXksIHN0YXJ0LCBlbmQpe1xuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIG51bGxcbiAgICBsZXQgbWlkID0gcGFyc2VJbnQoKHN0YXJ0ICsgZW5kKSAvIDIpXG4gICAgbGV0IG5ld05vZGUgPSBtYWtlTm9kZShhcnJheVttaWRdKVxuICAgIG5ld05vZGUubGVmdCA9IGJ1aWxkVHJlZShhcnJheSwgc3RhcnQsIG1pZCAtIDEpXG4gICAgbmV3Tm9kZS5yaWdodCA9IGJ1aWxkVHJlZShhcnJheSwgbWlkICsgMSwgZW5kKVxuICAgIHJldHVybiBuZXdOb2RlXG59IiwiZXhwb3J0IGNvbnN0IGxpbmtlZExpc3QgPSAoKSA9PiB7IC8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGxpc3RzXG4gICAgbGV0IGhlYWQgPSBudWxsIC8vIFN0YXJ0IG9mIHRoZSBsaXN0IC0gd2lsbCBiZWNvbWUgZmlyc3Qgbm9kZVxuICAgIGxldCBsZW5ndGggPSAwIC8vIFZhcmlhYmxlIHRvIHRyYWNrIGxpc3QgbGVuZ3RoXG4gICAgXG4gICAgY29uc3QgTm9kZSA9ICh2YWx1ZSkgPT4geyAvLyBGYWN0b3J5IGZuIHRvIGNyZWF0ZSBub2Rlc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBuZXh0OiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmQgPSAodmFsdWUpID0+IHsgLy8gQWRkcyBuZXcgbm9kZSB0byBlbmQgb2YgbGlzdFxuICAgICAgICBsZXQgbmV3Tm9kZSA9IE5vZGUodmFsdWUpXG4gICAgICAgIGlmIChoZWFkID09PSBudWxsKSB7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLm5leHQpIHtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBuZXdOb2RlXG4gICAgfVxuICAgICAgICBsZW5ndGgrK1xuICAgIH1cblxuICAgIGNvbnN0IHByZXBlbmQgPSAodmFsdWUpID0+IHsgLy8gQWRkcyBuZXcgbm9kZSB0byBzdGFydCBvZiBsaXN0XG4gICAgICAgIGxldCBuZXdOb2RlID0gTm9kZSh2YWx1ZSlcbiAgICAgICAgaWYgKGhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIG5ld05vZGUubmV4dCA9IGhlYWRcbiAgICAgICAgICAgaGVhZCA9IG5ld05vZGVcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGgrK1xuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSAoKSA9PiB7IC8vIFByaW50cy9SZXR1cm5zIGxpc3QgbGVuZ3RoXG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aClcbiAgICAgICAgcmV0dXJuIGxlbmd0aFxuICAgIH1cblxuICAgIGNvbnN0IHByaW50SGVhZCA9ICgpID0+IHsgLy8gUHJpbnRzIGxpc3QncyBoZWFkXG4gICAgICAgIGNvbnNvbGUubG9nKGhlYWQpXG4gICAgICAgIHJldHVybiBoZWFkXG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRUYWlsID0gKCkgPT4geyAvLyBQcmludHMgbGlzdCdzIHRhaWxcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUubmV4dCl7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnROb2RlKVxuICAgICAgICByZXR1cm4gY3VycmVudE5vZGVcbiAgICB9XG5cbiAgICBjb25zdCBhdEluZGV4ID0gKGluZGV4KSA9PiB7IC8vIFJldHVybnMgbm9kZSBhdCBpbmRleFxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMFxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIk91dCBvZiByYW5nZVwiXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4KytcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnROb2RlKVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwb3AgPSAoKSA9PiB7IC8vIFJlbW92ZXMgbm9kZSBhdCBlbmQgb2YgbGlzdFxuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiTm8gaXRlbXMgaW4gbGlzdFwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNOb2RlXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzTm9kZSA9IGN1cnJlbnROb2RlXG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2aW91c05vZGUubmV4dCA9IG51bGxcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGgtLVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5zID0gKHZhbHVlKSA9PiB7IC8vIENoZWNrcyBpZiBsaXN0IGNvbnRhaW5zIHZhbHVlXG4gICAgICAgIGlmIChoZWFkID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJObyBpdGVtcyBpbiBsaXN0XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSl7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlLnZhbHVlID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coZmFsc2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAodmFsdWUpID0+IHsvLyBSZXR1cm5zIGluZGV4IG9mIG5vZGVcbiAgICAgICAgaWYgKGNvbnRhaW5zKHZhbHVlKSl7XG4gICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMFxuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICAgICAgd2hpbGUoY3VycmVudE5vZGUudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4KytcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJbmRleClcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50SW5kZXhcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4geyAvLyBQcmludHMgbm9kZSB2YWx1ZXNcbiAgICAgICAgbGV0IHN0cmluZyA9IFwiXCJcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZXJlIGFyZSBubyBpdGVtc1wiKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUpe1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBgKCR7Y3VycmVudE5vZGUudmFsdWV9KSAtPiBgXG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdHJpbmcgKyBcIm51bGxcIilcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgKyBcIm51bGxcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5zZXJ0QXQgPSAodmFsdWUsIGluZGV4KSA9PiB7IC8vIEluc2VydHMgbmV3IG5vZGUgYXQgZ2l2ZW4gaW5kZXhcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZFxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMFxuICAgICAgICBsZXQgbmV3Tm9kZSA9IE5vZGUodmFsdWUpXG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmRleCBvdXQgb2YgcmFuZ2VcIilcbiAgICAgICAgICAgIHJldHVybiBcIkluZGV4IG91dCBvZiByYW5nZVwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBuZXdOb2RlLm5leHQgPSBoZWFkXG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c05vZGVcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrXG4gICAgICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gY3VycmVudE5vZGVcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZpb3VzTm9kZS5uZXh0ID0gbmV3Tm9kZVxuICAgICAgICAgICAgbmV3Tm9kZS5uZXh0ID0gY3VycmVudE5vZGVcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGgrK1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUF0ID0gKGluZGV4KSA9PiB7IC8vIFJlbW92ZXMgbGlzdCBpdGVtIGF0IGdpdmVuIGluZGV4XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWRcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDBcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmRleCBvdXQgb2YgcmFuZ2VcIilcbiAgICAgICAgICAgIHJldHVybiBcIkluZGV4IG91dCBvZiByYW5nZVwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5uZXh0ID0gYXRJbmRleChpbmRleCkubmV4dFxuICAgICAgICAgICAgaGVhZCA9IGN1cnJlbnROb2RlLm5leHRcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzTm9kZVxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4KytcbiAgICAgICAgICAgICAgICBwcmV2aW91c05vZGUgPSBjdXJyZW50Tm9kZVxuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldmlvdXNOb2RlLm5leHQgPSBjdXJyZW50Tm9kZS5uZXh0XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoLS1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIE5vZGUsXG4gICAgICAgIGFwcGVuZCxcbiAgICAgICAgcHJlcGVuZCxcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgcHJpbnRIZWFkLFxuICAgICAgICBwcmludFRhaWwsXG4gICAgICAgIGF0SW5kZXgsXG4gICAgICAgIHBvcCxcbiAgICAgICAgY29udGFpbnMsXG4gICAgICAgIGZpbmQsXG4gICAgICAgIHRvU3RyaW5nLFxuICAgICAgICBpbnNlcnRBdCxcbiAgICAgICAgcmVtb3ZlQXRcbiAgICB9XG59XG5cbi8vIGxldCBsaXN0ID0gbGlua2VkTGlzdCgpXG4vLyBsaXN0LmFwcGVuZChcIk9uZVwiKVxuLy8gbGlzdC5hcHBlbmQoXCJUd29cIilcbi8vIGxpc3QucHJlcGVuZChcIlplcm9cIilcbi8vIGxpc3QuaW5zZXJ0QXQoXCJUaHJlZVwiLCAzKVxuLy8gbGlzdC5zaXplKClcbi8vIGxpc3QudG9TdHJpbmcoKVxuLy8gbGlzdC5yZW1vdmVBdCgyKVxuLy8gbGlzdC50b1N0cmluZygpXG4vLyBsaXN0LnNpemUoKSIsImltcG9ydCBcIi4vbGlua2VkTGlzdC5qc1wiXG5pbXBvcnQgXCIuL21lcmdlc29ydC5qc1wiXG5pbXBvcnQgXCIuL3JlY3Vyc2lvbi5qc1wiXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgXCIuL2JpbmFyeS10cmVlcy5qc1wiXG5pbXBvcnQgXCIuL2FwcC5qc1wiIiwiZXhwb3J0IGNvbnN0IG1ha2VOb2RlID0gKGtleSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBrZXksXG4gICAgICBsZWZ0OiBudWxsLFxuICAgICAgcmlnaHQ6IG51bGxcbiAgICB9XG4gIH0iLCJleHBvcnQgZnVuY3Rpb24gbWVyZ2VTb3J0KGFycil7IC8vIE1haW4gZm4gdG8gcmV0dXJuIHNvcnRlZCBhcnJheVxuICAgIGlmIChhcnIubGVuZ3RoIDw9IDEpeyAvLyBJZiB0aGUgcGFzc2VkIGFycmF5J3MgbGVuZ3RoIGlzIG9uZSBvciBsZXNzLCByZXR1cm4gYXJyYXlcbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cbiAgICBsZXQgbGVmdCA9IGFyci5zcGxpY2UoMCwgYXJyLmxlbmd0aC8yKSAvLyBTcGxpdCB0aGUgYXJyYXkgaW4gdHdvXG4gICAgcmV0dXJuIG1lcmdlKG1lcmdlU29ydChsZWZ0KSwgbWVyZ2VTb3J0KGFycikpIC8vIFJlY3Vyc2l2ZWx5IGNhbGwgbWFpbiBmbiBpbnNpZGUgbWVyZ2UgZm5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGEsIGIpeyAvLyBGbiB0YWtlcyB0d28gYXJyYXlzXG4gICAgbGV0IHJlc3VsdCA9IFtdIFxuICAgIHdoaWxlKGEubGVuZ3RoID4gMCAmJiBiLmxlbmd0aCA+IDApIHsgLy8gQXMgbG9uZyBhcyB0aGVyZSBhcmUgZWxlbWVudHMgaW4gdGhlIGFycmF5IFxuICAgICAgICBpZiAoYVswXSA8IGJbMF0peyAvLyBDb21wYXJlIHRoZSBmaXJzdCBhcnJheSBlbGVtZW50c1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYS5zaGlmdCgpKSAvLyBQdXNoIHRvIHJlc3VsdCBhcnJheVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGIuc2hpZnQoKSkgLy8gUHVzaCB0byByZXN1bHQgYXJyYXlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gWy4uLnJlc3VsdCwgLi4uYSwgLi4uYl0gLy8gUmV0dXJuIHJlc3VsdCBhcnJheSBidXQgYWxzbyBjaGVjayBpZiB0aGVyZSBhcmUgcmVtYWluZGVyc1xuICAgIC8vYW5kIGFkZCB0aGVtIHRvIHRoZSBlbmQgb2YgcmVzdWx0IGFycmF5XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbGV2ZWxPcmRlcihyb290LCBjYikgeyAvLyBMZXZlbCBvcmRlciB0cmF2ZXJzYWwgaW4gaXRlcmF0aXZlIGZhc2hpb25cbmxldCBxdWV1ZSA9IFtdXG5sZXQgdGVtcCA9IFtyb290XVxuaWYgKCFyb290KSByZXR1cm4gcXVldWVcbndoaWxlICh0ZW1wLmxlbmd0aCAhPT0gMCl7IC8vIFdoaWxlIHRoZSB3b3JraW5nIGFycmF5IGlzIG5vdCBlbXB0eVxuICAgIGxldCBjdXJyZW50ID0gdGVtcC5wb3AoKSAvLyBTZXRzIGN1cnJlbnQgbm9kZSB0byBmaXJzdCBlbGVtZW50IG9mIHdvcmtpbmcgYXJyYXlcbiAgICBpZiAoY3VycmVudC5sZWZ0KSB0ZW1wLnVuc2hpZnQoY3VycmVudC5sZWZ0KVxuICAgIGlmIChjdXJyZW50LnJpZ2h0KSB0ZW1wLnVuc2hpZnQoY3VycmVudC5yaWdodClcbiAgICBpZiAoIWNiKSB7XG4gICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5rZXkpXG4gICAgfWVsc2Ugey8vIE9wdGlvbmFsIGNhbGxiYWNrIGNvbmRpdGlvblxuICAgICAgICBxdWV1ZS5wdXNoKGNiKGN1cnJlbnQua2V5KSlcbiAgICB9XG59XG5yZXR1cm4gcXVldWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJGVChyb290LCBjYikgeyAvLyBTZXR1cCBmb3IgcmVjdXJzaXZlIGNhbGwgLS0gbGV2ZWwgb3JkZXIgdHJhdmVyc2FsXG4gICAgbGV0IHF1ZXVlID0gW11cbiAgICBsZXQgdGVtcCA9IFtyb290XSAvLyBBcnJheSBob2xkcyB0aGUgcm9vdCBhbmQga2VlcHMgdHJhY2sgb2YgY2hpbGRyZW4gLS0gd29ya2luZyBhcnJheVxuICAgIGlmICghcm9vdCkgcmV0dXJuIHF1ZXVlXG4gICAgZWxzZSBpZihjYil7IC8vIE9wdGlvbmFsIGNhbGxiYWNrIGNvbmRpdGlvblxuICAgICAgICByZXR1cm4gKGxldmVsT3JkZXJSZWModGVtcCwgcXVldWUpKS5tYXAoaXRlbSA9PiBjYihpdGVtKSlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICByZXR1cm4gbGV2ZWxPcmRlclJlYyh0ZW1wLCBxdWV1ZSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbE9yZGVyUmVjKGFycmF5LCBxdWV1ZSkgeyAvLyBSZWN1cnNpb24gZm9yIGxldmVsIG9yZGVyIHRyYXZlcnNhbFxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHJldHVybiBxdWV1ZVxuICAgIGlmIChhcnJheSl7XG4gICAgICAgIGxldCBjdXJyZW50ID0gYXJyYXkuc2hpZnQoKSAvLyBTZXRzIGN1cnJlbnQgbm9kZSB0byBmaXJzdCBlbGVtZW50IG9mIHdvcmtpbmcgYXJyYXlcbiAgICAgICAgaWYgKGN1cnJlbnQubGVmdCkgYXJyYXkucHVzaChjdXJyZW50LmxlZnQpXG4gICAgICAgIGlmIChjdXJyZW50LnJpZ2h0KSBhcnJheS5wdXNoKGN1cnJlbnQucmlnaHQpXG4gICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5rZXkpXG4gICAgICAgIHJldHVybiBsZXZlbE9yZGVyUmVjKGFycmF5LCBxdWV1ZSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlcihkaXIsIG5vZGUsIGNiKXtcbiAgICBsZXQgb3JkZXIgPSBbXVxuICAgIGlmICghbm9kZSB8fCAhZGlyKSByZXR1cm5cbiAgICBlbHNlIGlmIChjYikge1xuICAgICAgICByZXR1cm4gb3JkZXJSZWMoZGlyLCBub2RlLCBvcmRlcikubWFwKGl0ZW0gPT4gY2IoaXRlbSkpXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBvcmRlclJlYyhkaXIsIG5vZGUsIG9yZGVyKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gb3JkZXJSZWMoZGlyLCBub2RlLCBhcnJheSl7XG4gICAgaWYgKGRpciA9PT0gJ2luJykge1xuICAgICAgICBpZiAoIW5vZGUpIHJldHVyblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgb3JkZXJSZWMoZGlyLCBub2RlLmxlZnQsIGFycmF5KVxuICAgICAgICAgICAgYXJyYXkucHVzaChub2RlLmtleSlcbiAgICAgICAgICAgIG9yZGVyUmVjKGRpciwgbm9kZS5yaWdodCwgYXJyYXkpXG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZiAoZGlyID09PSAncHJlJykge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChub2RlLmtleSlcbiAgICAgICAgICAgIG9yZGVyUmVjKGRpciwgbm9kZS5sZWZ0LCBhcnJheSlcbiAgICAgICAgICAgIG9yZGVyUmVjKGRpciwgbm9kZS5yaWdodCwgYXJyYXkpXG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZiAoZGlyID09PSAncG9zdCcpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG9yZGVyUmVjKGRpciwgbm9kZS5sZWZ0LCBhcnJheSlcbiAgICAgICAgICAgIG9yZGVyUmVjKGRpciwgbm9kZS5yaWdodCwgYXJyYXkpXG4gICAgICAgICAgICBhcnJheS5wdXNoKG5vZGUua2V5KVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheVxufSIsImV4cG9ydCBjb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSlcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUua2V5fWApXG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSlcbiAgICB9XG4gICAgcmV0dXJuIFwiXCJcbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBjb3VudERvd24obikgeyAvLyBMb29wIHZhcmlhbnQgb2YgYSBjb3VudGRvd25cbiAgICBsZXQgbnVtID0gbjtcbiAgICBjb25zb2xlLmxvZyhcIkxvb3BcIilcbiAgICBmb3IgKGxldCBpID0gbnVtOyBpID49IDA7IGktLSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnREb3duUmVjdXJzaXZlKG4pIHsgLy8gQ291bnRkb3duIHVzaW5nIHJlY3Vyc2lvblxuICAgIGlmIChuIDwgMCkgcmV0dXJuO1xuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhuKTtcbiAgICAgICAgY291bnREb3duUmVjdXJzaXZlKG4tMSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1SYW5nZShuLCB0b3RhbCA9IDApeyAvLyBTdW0gdXAgcmFuZ2UgdmlhIHJlY3Vyc2lvblxuICAgIGlmIChuIDwgMCkge1xuICAgICAgICByZXR1cm4gdG90YWxcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbClcbiAgICAgICAgcmV0dXJuIHN1bVJhbmdlKG4tMSwgdG90YWwrbilcbiAgICB9XG59XG4vLy8vRmlib25hY2NpIHNlY3Rpb24gc3RhcnRcblxuZXhwb3J0IGZ1bmN0aW9uIGZpYihuKSB7IC8vIFJldHVybnMgRmlib25hY2NpIG51bWJlciBhdCBwb3NpdGlvbiBuIGluIHNlcXVlbmNlXG4gICAgcmV0dXJuIG4gPD0gMSA/IG4gOiBmaWIobi0xKSArIGZpYihuLTIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWJzMShuKSB7XG4gICAgbGV0IHJlc3VsdCA9IFswLCAxXTsgLy8gRmlyc3QgdHdvIG51bWJlcnMgaW4gc2VxdWVuY2UgXG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPCBuOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpXSA9IChyZXN1bHRbaS0xXSArIHJlc3VsdFtpLTJdKSAvLyBCYXNpYyBmaWJvbmFjY2kgZm9ybXVsYVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWJzMihuKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdOyAvLyBFbXB0eSByZXN1bHQgYXJyYXlcbiAgICBmb3IgKGxldCBpID0gMDsgcmVzdWx0Lmxlbmd0aCA8IG47IGkrKykgeyAvLyBMaW1pdCBhcnJheSBsZW5ndGggdG8gblxuICAgICAgICBpZiAoaSA+IDEpIHsgLy8gSW5kaWNlcyBncmVhdGVyIHRoYW4gMVxuICAgICAgICAgICAgcmVzdWx0W2ldID0gcmVzdWx0W2ktMV0gKyByZXN1bHRbaS0yXSAvLyBXaWxsIGJlIHNldCBieSBmaWJvbmFjY2kgZm9ybXVsYVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2ldID0gaSAvLyBJbmRpY2VzIDAgYW5kIDEgYXJlIGVxdWFsIHRvIGlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWJzMyhuKSB7IC8vIFJlY3Vyc2l2ZVxuICAgIGlmIChuID09PSAxKSB7IC8vIEJhc2UgY2FzZSAtLSBpZiBuID0gMSByZXR1cm4gYW4gYXJyYXkgd2l0aCB0aGUgZmlyc3QgdHdvIGludGVnZXJzIGluIHNlcXVlbmNlXG4gICAgICAgIHJldHVybiBbMCwgMV1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdGVtcCA9IGZpYnMzKG4tMSkgLy8gXG4gICAgICAgIHRlbXAucHVzaCh0ZW1wW3RlbXAubGVuZ3RoLTFdICsgdGVtcFt0ZW1wLmxlbmd0aC0yXSkgLy8gUHVzaCBmaWJvbmFjY2kgZm9ybXVsYSBvZiBjdXJyZW50IGFycmF5XG4gICAgICAgIHJldHVybiB0ZW1wLnNsaWNlKDAsIG4pIC8vIExpbWl0IHJlc3VsdCBhcnJheSB0byBuIGludGVnZXJzIFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpYnM0KG4pIHtcbiAgICByZXR1cm4gKG4gPCAxKSA/IDAgOiAobiA8IDIpID8gMSA6IGZpYnM0KG4tMSkgKyBmaWJzNChuLTIpXG59XG4vLy8vRmlib25hY2NpIHNlY3Rpb24gZW5kXG5cbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3JpYWwobikgeyAvLyBSZXR1cm5zIGZhY3RvcmlhbCBvZiBuXG4gICAgcmV0dXJuIG4gPT09IDEgPyBuIDogbipmYWN0b3JpYWwobi0xKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG93ZXIoYSwgYikgeyAvLyBSZWN1cnNpdmUgbWF0aCBwb3dlciBmdW5jdGlvblxuICAgIGlmIChiID09PSAwKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhICogcG93ZXIoYSwgYi0xKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbChhcnJheSwgY2IpIHsgLy8gUmVjdXJzaXZlIGZuIHRvIHBhc3MgZWFjaCBhcnJheSBpdGVtIHRvIGEgY2FsbGJhY2sgZm5cbiAgICBsZXQgYXJyID0gYXJyYXkuc2xpY2UoKVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2IoYXJyWzBdKSl7XG4gICAgICAgIGFyci5zaGlmdCgpXG4gICAgICAgIHJldHVybiBhbGwoYXJyLCBjYilcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdE9mQXJyYXkoYXJyYXkpIHsgLy8gUmVjdXJzaXZlIGNhbGwgdG8gbXVsdGlwbHkgYWxsIGFycmF5IGl0ZW1zXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIDFcbiAgICBcbiAgICByZXR1cm4gYXJyYXkuc2hpZnQoKSAqIHByb2R1Y3RPZkFycmF5KGFycmF5KVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbnZhciBuZXN0ZWRPYmplY3QgPSB7XG4gICAgZGF0YToge1xuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBzdHVmZjoge1xuICAgICAgICAgICAgICAgIHRoaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vcmVTdHVmZjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFnaWNOdW1iZXI6IDQ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc29tZXRoaW5nOiAnZm9vMidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnMob2JqLCB2YWx1ZSkgeyAvLyBUaGlzIGZuIGNvbWJpbmVzIHRoZSBmb3IuLmluIGxvb3Agd2l0aCByZWN1cnNpb25cbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7IC8vIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIG9iamVjdHMga2V5c1xuICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnb2JqZWN0Jyl7IC8vIElmIHRoZSBrZXkncyB2YWx1ZSBob2xkcyBhbiBvYmplY3RcbiAgICAgICAgICAgIHJldHVybiBjb250YWlucyhvYmpba2V5XSwgdmFsdWUpIC8vIHVzZSByZWN1cnNpb24gdG8gYWNjZXNzIHRoZSBuZXN0ZWQgb2JqZWN0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9ialtrZXldID09PSB2YWx1ZSkgcmV0dXJuIHRydWUgLy8gSWYgdGhlIGtleSdzIHZhbHVlIG1hdGNoZXMgdGhlIHZhbHVlIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZSAvLyBJZiB0aGVyZSdzIG5vIG1hdGNoIHJldHVybiBmYWxzZVxuICAgIH1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiB0b3RhbEludGVnZXJzKGFycmF5KXtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gMDsgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIHJldHVybiAwXG5cbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBsZXQgcGFydGlhbCA9IGFycmF5LnNoaWZ0KCk7IC8vIHN0b3JlIHRoZSBmaXJzdCBhdmFpbGFibGUgZWxlbWVudFxuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnRpYWwpKSB7IC8vIGlmIHRoZSBlbGVtZW50IGlzIGFuIGFycmF5XG4gICAgICAgIHJlc3VsdCArPSB0b3RhbEludGVnZXJzKHBhcnRpYWwpIC8vIGNhbGwgYWdhaW4gdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGVsZW1lbnRcbiAgICB9IGlmIChOdW1iZXIuaXNJbnRlZ2VyKHBhcnRpYWwpKSB7IC8vIGlmIHRoZSBlbGVtZW50IGlzIGEgbnVtYmVyL2ludGVnZXJcbiAgICAgICAgcmVzdWx0ICs9IDEgLy8gaW5jcmVtZW50IHJlc3VsdCB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0ICsgdG90YWxJbnRlZ2VycyhhcnJheSkgLy8gY2FsbHMgdGhlIGZuIGFnYWluIHdpdGggdGhlIHBhcnRpYWwgYXJyYXlcbiAgICAvLyB0aGUgbGFzdCBwYXJ0aWFsIGFycmF5IGhhcyBhIGxlbmd0aCBvZiAwIGFuZCB0cmlnZ2VycyB0aGUgYmFzZSBjYXNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdW1TcXVhcmVzKHZhbCkge1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSByZXR1cm4gMDsgLy8gQmFzZSBjYXNlIC0tIGlmIGFycmF5IGhhcyBubyBlbGVtZW50cyByZXR1cm4gMFxuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGxldCBwYXJ0aWFsID0gdmFsLnNoaWZ0KCk7IC8vIEdyYWJzIGZpcnN0IGVsZW1lbnQgb2YgYXJyYXlcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJ0aWFsKSkgeyAvLyBpZiBmaXJzdCBlbGVtZW50IG9mIGFycmF5IGlzIGFuIGFycmF5IFxuICAgICAgICByZXN1bHQgKz0gU3VtU3F1YXJlcyhwYXJ0aWFsKSAvLyByZWN1cnNpdmVseSBjYWxsIGZuIHdpdGggcGFydGlhbCBhcnJheSBhbmQgYWRkIHRvIHJlc3VsdFxuICAgIH1cbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYXJ0aWFsKSkgeyAvLyBpZiBmaXJzdCBlbGVtZW50IG9mIGFycmF5IGlzIGFuIGludGVnZXJcbiAgICAgICAgcmVzdWx0ICs9IHBhcnRpYWwqcGFydGlhbCAvLyBhZGQgdGhlIHNxdWFyZSBvZiBpbnRlZ2VyIHRvIHJlc3VsdFxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQgKz0gU3VtU3F1YXJlcyh2YWwpIC8vIGFkZHMgYWxsIHJlY3Vyc2l2ZSBjYWxsc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGljYXRlKGEsIGIpIHsgLy8gQ3JlYXRlcyBhbiBhcnJheSBvZiBpbnRlZ2VycyAtLSBhIGlzIGJlaW5nIHJlcGxpY2F0ZWQgYiB0aW1lc1xuICAgIGlmIChhIDw9IDApIHJldHVybiBbXVxuICAgIHJldHVybiBbYl0uY29uY2F0KHJlcGxpY2F0ZShhLTEsIGIpKVxuICAgIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=