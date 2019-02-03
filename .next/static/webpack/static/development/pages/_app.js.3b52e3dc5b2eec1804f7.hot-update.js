webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/MenuLink.js":
false,

/***/ "./components/MenuLinkWithSub.js":
false,

/***/ "./components/ParentMenu.js":
/*!**********************************!*\
  !*** ./components/ParentMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\u0144362\\Desktop\\event-yogi\\frontend\\components\\ParentMenu.js";



var ParentMenu = function ParentMenu(props) {
  var menu = props.menu,
      handleSubMenuClick = props.handleSubMenuClick,
      animated = props.animated;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "mobile-nav ".concat(animated),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, menu.map(function (menuItem) {
    return menuItem.hasOwnProperty("hasSubMenu") && menuItem.hasSubMenu == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "level is-mobile",
      key: menuItem.id,
      onClick: handleSubMenuClick(menuItem),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "level-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, menuItem.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "level-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "level-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "chevron_right")))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "level is-mobile",
      key: menuItem.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "level-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: menuItem.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, menuItem.name))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParentMenu);

/***/ })

})
//# sourceMappingURL=_app.js.3b52e3dc5b2eec1804f7.hot-update.js.map