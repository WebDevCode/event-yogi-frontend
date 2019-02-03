webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/MobileMenu.js":
/*!**********************************!*\
  !*** ./components/MobileMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParentMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParentMenu */ "./components/ParentMenu.js");
/* harmony import */ var _testmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testmenu */ "./components/testmenu.js");
var _jsxFileName = "C:\\Users\\u0144362\\Desktop\\event-yogi\\frontend\\components\\MobileMenu.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var MobileMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileMenu, _React$Component);

  function MobileMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MobileMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MobileMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      menu: [],
      currentMenu: [],
      prevMenu: [],
      isTopLevel: true,
      isSecondLevel: false,
      isThirdLevel: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubMenuClick", function (item) {
      return function (e) {
        e.preventDefault();

        _this.setState(_objectSpread({}, _this.state, {
          currentMenu: item.subMenu,
          prevMenu: _this.state.menu,
          isTopLevel: !_this.state.isTopLevel,
          isSecondLevel: !_this.state.isSecondLevel
        }));

        e.stopPropagation();
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleContainerClick", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });

    return _this;
  }

  _createClass(MobileMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(_objectSpread({}, this.state, {
        menu: _testmenu__WEBPACK_IMPORTED_MODULE_2__["default"],
        currentMenu: _testmenu__WEBPACK_IMPORTED_MODULE_2__["default"]
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-menu-wrapper ".concat(this.props.isOpen ? "active" : "inactive"),
        onClick: this.props.handleMenuClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-menu ".concat(this.props.isOpen ? "active slideUp" : "inactive slideDown"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-menu-header level is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "chevron_left"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-item",
        onClick: this.handleContainerClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Browse Categories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-right",
        onClick: this.props.handleMenuClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "close")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParentMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
        menu: this.state.currentMenu,
        handleSubMenuClick: this.handleSubMenuClick,
        menuClass: this.state.isTopLevel ? "mobile-nav" : this.state.isSecondLevel ? "mobile-nav-second" : "mobile-nav-third",
        animated: prevMenu.length > 0 ? "slideFromRight" : "slideFromLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })));
    }
  }]);

  return MobileMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

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
      handleSubMenuClick = props.handleSubMenuClick,
      menuClass = props.menuClass,
      animated = props.animated;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "".concat(menuClass, " ").concat(animated),
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
//# sourceMappingURL=_app.js.6d0cd026191af85a26ca.hot-update.js.map