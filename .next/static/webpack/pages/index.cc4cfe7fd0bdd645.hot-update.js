"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\nfunction Homepage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"\\uBBF8\\uD305\\uC5B4\\uD50C\"\n                }, void 0, false, {\n                    fileName: \"/Users/tetw/Desktop/udemy/nextjs/meeting-app/pages/index.js\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tetw/Desktop/udemy/nextjs/meeting-app/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                meetups: props.meetups\n            }, void 0, false, {\n                fileName: \"/Users/tetw/Desktop/udemy/nextjs/meeting-app/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true);\n}\n_c = Homepage;\nvar __N_SSG = true;\n// 페이지 요청 들어올 때마다 프리 제너레이트\n// 항상 바뀌는 데이터가 없다면 getStaticProps() 가 나음\n// 인증과 같이 req 필요한 경우는 이방식으로 사용해야함\n// export async function getServerSideProps(context) {\n//   const req = context.req;\n//   const res = context.res;\n//   return {\n//     props: {\n//       meetups: DUMMY_DATA,\n//     },\n//   };\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUU2QjtBQUUxRCxTQUFTRSxRQUFRLENBQUNDLEtBQUssRUFBRTtJQUN2QixxQkFDRTs7MEJBQ0UsOERBQUNILGtEQUFJOzBCQUNELDRFQUFDSSxPQUFLOzhCQUFDLDBCQUFJOzs7Ozt3QkFBZ0I7Ozs7O29CQUNoQjswQkFDZiw4REFBQ0gsc0VBQVU7Z0JBQUNJLE9BQU8sRUFBRUYsS0FBSyxDQUFDRSxPQUFPOzs7OztvQkFBSTtZQUFBLEdBQ3hDOztvQkFBRyxDQUNIO0NBQ0g7QUFUUUgsS0FBQUEsUUFBUTs7QUEwQ2pCO0FBQ29DO0FBQ047QUFFOUIsc0RBQXNEO0FBQ3RELDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsYUFBYTtBQUNiLGVBQWU7QUFDZiw2QkFBNkI7QUFDN0IsU0FBUztBQUNULE9BQU87QUFDUCxJQUFJO0FBRUosK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xuXG5mdW5jdGlvbiBIb21lcGFnZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+66+47YyF7Ja07ZSMPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xuICAgIDwvPlxuICApO1xufVxuXG4vL1NTRyBQYWdlXG4vLyBhcGkg7Yyo7LmtIOyZhOujjOuQnCDtm4Qg7Y6Y7J207KeA6rCAIOugjOuNlOungSDrkJjrj4TroZ0g7ZWoIChjb21wb25lbnTsl5DshJwg67aI6rCA64qlIHBhZ2VzIO2PtOuNlCDslYjsl5Ag7J6I64qUIOqyg+unjCDqsIDriqUpXG4vLyDrsJHsl5AgZ2V0U2VydmVyU2lkZVByb3BzKCkg67O064ukIOu5oOumhCAo7ZWt7IOBIOuLpOyLnCDrp4zrk5zripQg64yA7IugIOy6kOyLnO2VmOqzoCDri6Tsi5wg7IKs7Jqp7ZWY6riwIOuVjOusuOyXkClcbi8vIOuNsOydtO2EsOqwgCDtla3sg4Eg67OA7ZWY7KeAIOyViuuKlCDqsr3smrDsl5Qg7J2067Cp7Iud7Jy866GcIOyCrOyaqVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2d5dXJ5OnJiZmx3a2Q3QGNsdXN0ZXIwLjBkczJ6d3cubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG5cbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgICB9KSksXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICAgIC8vICgx7LSI7JeQIO2VnCDrsojslKkg642w7J207YSwIOuwm+yVhOyYtC4g642w7J207YSwIOuzgOqyveuQmOuKlCDsi5zqsITsnYQg64Sj7Ja07KO866m065CoKVxuICB9O1xufVxuXG4vLyDtjpjsnbTsp4Ag7JqU7LKtIOuTpOyWtOyYrCDrlYzrp4jri6Qg7ZSE66asIOygnOuEiOugiOydtO2KuFxuLy8g7ZWt7IOBIOuwlOuAjOuKlCDrjbDsnbTthLDqsIAg7JeG64uk66m0IGdldFN0YXRpY1Byb3BzKCkg6rCAIOuCmOydjFxuLy8g7J247Kad6rO8IOqwmeydtCByZXEg7ZWE7JqU7ZWcIOqyveyasOuKlCDsnbTrsKnsi53snLzroZwg7IKs7Jqp7ZW07JW87ZWoXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX0RBVEEsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2U7XG4iXSwibmFtZXMiOlsiSGVhZCIsIk1lZXR1cExpc3QiLCJIb21lcGFnZSIsInByb3BzIiwidGl0bGUiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});