webpackHotUpdate("static\\development\\pages\\_app.js",{

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
/* harmony import */ var _MenuLinkWithSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuLinkWithSub */ "./components/MenuLinkWithSub.js");
/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuLink */ "./components/MenuLink.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\u0144362\\Desktop\\event-yogi\\frontend\\components\\ParentMenu.js";





var ParentMenu = function ParentMenu(props) {
  var menu = props.menu,
      handleSubMenuClick = props.handleSubMenuClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "mobile-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, menu.map(function (menuItem) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "level is-mobile",
      key: menuItem.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "level-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, menuItem.hasOwnProperty("hasSubMenu") && menuItem.hasSubMenu == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      onClick: handleSubMenuClick(menuItem),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, menuItem.name) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: menuItem.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, menuItem.name))), menuItem.hasOwnProperty("hasSubMenu") && menuItem.hasSubMenu == true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "level-right",
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "chevron_right"))) : null);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParentMenu);

/***/ })

})
//# sourceMappingURL=_app.js.9e498f2527c07d7d88a6.hot-update.js.map