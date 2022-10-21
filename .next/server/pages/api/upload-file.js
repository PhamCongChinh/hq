"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/upload-file";
exports.ids = ["pages/api/upload-file"];
exports.modules = {

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/upload-file.ts":
/*!**********************************!*\
  !*** ./pages/api/upload-file.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    req.method === \"POST\" ? post(req, res) : res.status(401).send(\"\");\n};\nconst post = async (req, res)=>{\n    const uploadFolder = path__WEBPACK_IMPORTED_MODULE_1___default().join(\"./\", \"public\", \"images\");\n    const form = formidable__WEBPACK_IMPORTED_MODULE_0___default()({\n        multiples: true,\n        maxFieldsSize: 50 * 1024 * 1024,\n        keepExtensions: true,\n        uploadDir: uploadFolder\n    });\n    form.parse(req, async (err, fields, files)=>{\n        return res.status(201).send(files.image.newFilename);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLWZpbGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1DO0FBRVo7QUFFaEIsTUFBTUUsTUFBTSxHQUFHO0lBQ2xCQyxHQUFHLEVBQUU7UUFDSEMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDSixDQUFDO0FBRWEsZUFBZUMsT0FBTyxDQUNqQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3RCO0lBQ0VELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sR0FBR0MsSUFBSSxDQUFDSCxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxHQUFHQSxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQztDQUNwRTtBQUVELE1BQU1GLElBQUksR0FBRyxPQUFPSCxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBQzlELE1BQU1LLFlBQVksR0FBR1gsZ0RBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztJQUN4RCxNQUFNYSxJQUFJLEdBQUdkLGlEQUFVLENBQUM7UUFDcEJlLFNBQVMsRUFBRSxJQUFJO1FBQ2ZDLGFBQWEsRUFBRSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUk7UUFDL0JDLGNBQWMsRUFBRSxJQUFJO1FBQ3BCQyxTQUFTLEVBQUVOLFlBQVk7S0FDMUIsQ0FBQztJQUNGRSxJQUFJLENBQUNLLEtBQUssQ0FBQ2IsR0FBRyxFQUFFLE9BQU9jLEdBQVEsRUFBRUMsTUFBVyxFQUFFQyxLQUFVLEdBQUs7UUFDekQsT0FBT2YsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ1csS0FBSyxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FBQztLQUN2RCxDQUFDO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGlldGJpaHEvLi9wYWdlcy9hcGkvdXBsb2FkLWZpbGUudHM/ZGU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZm9ybWlkYWJsZSBmcm9tICdmb3JtaWRhYmxlJ1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6IHtcclxuICAgICAgYm9keVBhcnNlcjogZmFsc2UsIC8vIERpc2FsbG93IGJvZHkgcGFyc2luZywgY29uc3VtZSBhcyBzdHJlYW1cclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gICAgcmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIgPyBwb3N0KHJlcSwgcmVzKSA6IHJlcy5zdGF0dXMoNDAxKS5zZW5kKFwiXCIpXHJcbn1cclxuXHJcbmNvbnN0IHBvc3QgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHVwbG9hZEZvbGRlciA9IHBhdGguam9pbignLi8nLCBcInB1YmxpY1wiLCBcImltYWdlc1wiKVxyXG4gICAgY29uc3QgZm9ybSA9IGZvcm1pZGFibGUoeyBcclxuICAgICAgICBtdWx0aXBsZXM6IHRydWUsIFxyXG4gICAgICAgIG1heEZpZWxkc1NpemU6IDUwICogMTAyNCAqIDEwMjQsIC8vNU1CXHJcbiAgICAgICAga2VlcEV4dGVuc2lvbnM6IHRydWUsXHJcbiAgICAgICAgdXBsb2FkRGlyOiB1cGxvYWRGb2xkZXIsXHJcbiAgICB9KVxyXG4gICAgZm9ybS5wYXJzZShyZXEsIGFzeW5jIChlcnI6IGFueSwgZmllbGRzOiBhbnksIGZpbGVzOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoZmlsZXMuaW1hZ2UubmV3RmlsZW5hbWUpXHJcbiAgICB9KVxyXG59Il0sIm5hbWVzIjpbImZvcm1pZGFibGUiLCJwYXRoIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwb3N0Iiwic3RhdHVzIiwic2VuZCIsInVwbG9hZEZvbGRlciIsImpvaW4iLCJmb3JtIiwibXVsdGlwbGVzIiwibWF4RmllbGRzU2l6ZSIsImtlZXBFeHRlbnNpb25zIiwidXBsb2FkRGlyIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImltYWdlIiwibmV3RmlsZW5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload-file.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload-file.ts"));
module.exports = __webpack_exports__;

})();