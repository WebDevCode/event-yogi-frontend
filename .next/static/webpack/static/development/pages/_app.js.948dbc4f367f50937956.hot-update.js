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
      isThirdLevel: false,
      animatedClass: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBackClick", function (e) {
      e.preventDefault();

      if (_this.state.isSecondLevel) {
        _this.setState(_objectSpread({}, _this.state, {
          currentMenu: _this.state.prevMenu,
          prevMenu: [],
          isTopLevel: !_this.state.isTopLevel,
          isSecondLevel: !_this.state.isSecondLevel
        }));
      } else if (_this.state.isThirdLevel) {
        _this.setState(_objectSpread({}, _this.state, {
          currentMenu: _this.state.prevMenu,
          prevMenu: _this.state.menu,
          isSecondLevel: !_this.state.isSecondLevel,
          isThirdLevel: !_this.state.isThirdLevel
        }));
      }

      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubMenuClick", function (item) {
      return function (e) {
        e.preventDefault();

        if (_this.state.isSecondLevel) {
          _this.setState(_objectSpread({}, _this.state, {
            prevMenu: _this.state.currentMenu,
            currentMenu: item.subMenu,
            isTopLevel: false,
            isSecondLevel: !_this.state.isSecondLevel,
            isThirdLevel: !_this.state.isThirdLevel,
            animatedClass: "slideFromRight2"
          }));
        } else {
          _this.setState(_objectSpread({}, _this.state, {
            currentMenu: item.subMenu,
            prevMenu: _this.state.menu,
            isTopLevel: !_this.state.isTopLevel,
            isSecondLevel: !_this.state.isSecondLevel,
            animatedClass: "slideFromRight"
          }));
        }

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
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-menu ".concat(this.props.isOpen ? "active slideUp" : "inactive slideDown"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-menu-header level is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-item",
        onClick: this.handleBackClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "chevron_left"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-item",
        onClick: this.handleContainerClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Browse Categories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-right",
        onClick: this.props.handleMenuClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "close")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParentMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
        menu: this.state.currentMenu,
        handleSubMenuClick: this.handleSubMenuClick,
        menuClass: this.state.isTopLevel ? "mobile-nav" : this.state.isSecondLevel ? "mobile-nav-second" : "mobile-nav-third",
        animated: this.state.animatedClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })));
    }
  }]);

  return MobileMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ })

})
//# sourceMappingURL=_app.js.948dbc4f367f50937956.hot-update.js.map