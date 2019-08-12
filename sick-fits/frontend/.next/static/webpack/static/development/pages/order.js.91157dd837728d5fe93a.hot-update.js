webpackHotUpdate("static/development/pages/order.js",{

/***/ "./pages/order.js":
/*!************************!*\
  !*** ./pages/order.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PleaseSignin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PleaseSignin.js */ "./components/PleaseSignin.js");
/* harmony import */ var _components_Order_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Order.js */ "./components/Order.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_formatMoney_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/formatMoney.js */ "./lib/formatMoney.js");
/* harmony import */ var _components_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ErrorMessage.js */ "./components/ErrorMessage.js");
/* harmony import */ var _components_styles_OrderStyles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styles/OrderStyles.js */ "./components/styles/OrderStyles.js");
var _this = undefined,
    _jsxFileName = "/Users/jonathanpalacio/Desktop/side-projects/Advanced/sick-fits/frontend/pages/order.js";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_ORDER_QUERY($id: ID!) {\n    order(id: $id) {\n      id\n      charge\n      total\n      createdAt\n      user {\n        id\n      }\n      items {\n        id\n        title\n        description\n        price\n        image\n        quantity\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var SINGLE_ORDER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());

var OrderPage = function OrderPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: SINGLE_ORDER_QUERY,
    variables: {
      id: _this.props.id
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        error = _ref.error,
        loading = _ref.loading;
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    });
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Loading...");
    console.log("data: ", data);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PleaseSignin_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Order_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: props.query.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (OrderPage);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/order")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=order.js.91157dd837728d5fe93a.hot-update.js.map