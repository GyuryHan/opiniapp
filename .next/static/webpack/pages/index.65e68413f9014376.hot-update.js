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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar DUMMY_DATA = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/9/95/Faro_del_cabo_Espartel%2C_Marruecos%2C_2015-12-11%2C_DD_02.JPG\",\n        address: \"Some address 5. 12345 Some City\",\n        description: \"This is a first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/4/41/Iceberg_with_hole_near_Sandersons_Hope_2007-07-28_2.jpg\",\n        address: \"Some address 5. 12345 Some City\",\n        description: \"This is a second meetup\"\n    }, \n];\nfunction Homepage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"/Users/tetw/Desktop/udemy/nextjs/meeting-app/pages/index.js\",\n        lineNumber: 24,\n        columnNumber: 10\n    }, this);\n}\n_c = Homepage;\nvar __N_SSG = true;\n// 페이지 요청 들어올 때마다 프리 제너레이트\n// 항상 바뀌는 데이터가 없다면 getStaticProps() 가 나음\n// 인증과 같이 req 필요한 경우는 이방식으로 사용해야함\n// export async function getServerSideProps(context) {\n//   const req = context.req;\n//   const res = context.res;\n//   return {\n//     props: {\n//       meetups: DUMMY_DATA,\n//     },\n//   };\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDMEQ7QUFFMUQsSUFBTUMsVUFBVSxHQUFHO0lBQ2pCO1FBQ0VDLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLEtBQUssRUFDSCxvSEFBb0g7UUFDdEhDLE9BQU8sRUFBRSxpQ0FBaUM7UUFDMUNDLFdBQVcsRUFBRSx3QkFBd0I7S0FDdEM7SUFDRDtRQUNFSixFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCQyxLQUFLLEVBQ0gsNkdBQTZHO1FBQy9HQyxPQUFPLEVBQUUsaUNBQWlDO1FBQzFDQyxXQUFXLEVBQUUseUJBQXlCO0tBQ3ZDO0NBQ0Y7QUFFRCxTQUFTQyxRQUFRLENBQUNDLEtBQUssRUFBRTtJQUN2QixxQkFBTyw4REFBQ1Isc0VBQVU7UUFBQ1MsT0FBTyxFQUFFRCxLQUFLLENBQUNDLE9BQU87Ozs7O1lBQUksQ0FBQztDQUMvQztBQUZRRixLQUFBQSxRQUFROztBQTRCakI7QUFDb0M7QUFDTjtBQUU5QixzREFBc0Q7QUFDdEQsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QixhQUFhO0FBQ2IsZUFBZTtBQUNmLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsT0FBTztBQUNQLElBQUk7QUFFSiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XG5cbmNvbnN0IERVTU1ZX0RBVEEgPSBbXG4gIHtcbiAgICBpZDogXCJtMVwiLFxuICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvOS85NS9GYXJvX2RlbF9jYWJvX0VzcGFydGVsJTJDX01hcnJ1ZWNvcyUyQ18yMDE1LTEyLTExJTJDX0REXzAyLkpQR1wiLFxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDUuIDEyMzQ1IFNvbWUgQ2l0eVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXBcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIm0yXCIsXG4gICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNC80MS9JY2ViZXJnX3dpdGhfaG9sZV9uZWFyX1NhbmRlcnNvbnNfSG9wZV8yMDA3LTA3LTI4XzIuanBnXCIsXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgNS4gMTIzNDUgU29tZSBDaXR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNlY29uZCBtZWV0dXBcIixcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIEhvbWVwYWdlKHByb3BzKSB7XG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcbn1cblxuLy9TU0cgUGFnZVxuLy8gYXBpIO2MqOy5rSDsmYTro4zrkJwg7ZuEIO2OmOydtOyngOqwgCDroIzrjZTrp4Eg65CY64+E66GdIO2VqCAoY29tcG9uZW507JeQ7IScIOu2iOqwgOuKpSBwYWdlcyDtj7TrjZQg7JWI7JeQIOyeiOuKlCDqsoPrp4wg6rCA64qlKVxuLy8g67CR7JeQIGdldFNlcnZlclNpZGVQcm9wcygpIOuztOuLpCDruaDrpoQgKO2VreyDgSDri6Tsi5wg66eM65Oc64qUIOuMgOyLoCDsupDsi5ztlZjqs6Ag64uk7IucIOyCrOyaqe2VmOq4sCDrlYzrrLjsl5ApXG4vLyDrjbDsnbTthLDqsIAg7ZWt7IOBIOuzgO2VmOyngCDslYrripQg6rK97Jqw7JeUIOydtOuwqeyLneycvOuhnCDsgqzsmqlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9neXVyeTpyYmZsd2tkN0BjbHVzdGVyMC4wZHMyend3Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cHM6IG1lXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgICAvLyAoMTDstIjsl5Ag7ZWcIOuyiOyUqSDrjbDsnbTthLAg67Cb7JWE7Ji0LiDrjbDsnbTthLAg67OA6rK965CY64qUIOyLnOqwhOydhCDrhKPslrTso7zrqbTrkKgpXG4gIH07XG59XG5cbi8vIO2OmOydtOyngCDsmpTssq0g65Ok7Ja07JisIOuVjOuniOuLpCDtlITrpqwg7KCc64SI66CI7J207Yq4XG4vLyDtla3sg4Eg67CU64CM64qUIOuNsOydtO2EsOqwgCDsl4bri6TrqbQgZ2V0U3RhdGljUHJvcHMoKSDqsIAg64KY7J2MXG4vLyDsnbjspp3qs7wg6rCZ7J20IHJlcSDtlYTsmpTtlZwg6rK97Jqw64qUIOydtOuwqeyLneycvOuhnCDsgqzsmqntlbTslbztlahcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgbWVldHVwczogRFVNTVlfREFUQSxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcbiJdLCJuYW1lcyI6WyJNZWV0dXBMaXN0IiwiRFVNTVlfREFUQSIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVwYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});