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
      menu: {
        menuTitle: "Browse Categories",
        prevTitle: "",
        menuTree: [{
          name: "Home",
          url: "/"
        }, {
          name: "Register",
          url: "/register",
          hasSubMenu: true,
          subMenu: [{
            name: "Another Route",
            url: "/another"
          }]
        }, {
          name: "User",
          url: "/user",
          hasSubMenu: true,
          subMenu: [{
            name: "Orders",
            url: "/orders",
            hasSubMenu: true,
            subMenu: [{
              name: "Track",
              url: "/track"
            }, {
              name: "Account",
              url: "/account"
            }]
          }, {
            name: "Logout",
            url: "/logout"
          }]
        }]
      },
      activeSubMenu: [],
      previousMenu: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleContainerClick", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBackClick", function (e) {
      e.preventDefault();

      _this.setState(_objectSpread({}, _this.state, {
        activeSubMenu: _this.state.previousMenu,
        previousMenu: [],
        menu: _objectSpread({}, _this.state.menu, {
          menuTitle: _this.state.menu.prevTitle,
          prevTitle: "Browse Categories"
        })
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "menuItemSubClick", function (name, subMenu) {
      return function (e) {
        e.preventDefault();

        _this.setState(_objectSpread({}, _this.state, {
          previousMenu: _this.state.activeSubMenu,
          activeSubMenu: subMenu,
          menu: _objectSpread({}, _this.state.menu, {
            prevTitle: _this.state.menu.menuTitle,
            menuTitle: name
          })
        }));

        e.stopPropagation();
      };
    });

    return _this;
  }

  _createClass(MobileMenu, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-menu ".concat(this.props.isOpen ? "active" : "inactive"),
        onClick: this.props.menuClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        onClick: this.handleContainerClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level is-mobile mobile-menu-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, this.state.previousMenu.length > 0 || this.state.activeSubMenu.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "level-item",
        onClick: this.handleBackClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "chevron_left"))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, this.state.menu.menuTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "level-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "level-item",
        onClick: this.props.menuClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "close")))), this.state.activeSubMenu.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParentMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
        show: this.state.previousMenu.length > 0 ? "level3Menu" : "level2Menu",
        menu: this.state.activeSubMenu,
        menuItemSubClick: this.menuItemSubClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ParentMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
        show: "primary",
        menu: this.state.menu.menuTree,
        menuItemSubClick: this.menuItemSubClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
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
//# sourceMappingURL=_app.js.aa224d0cfbde95341bba.hot-update.js.map