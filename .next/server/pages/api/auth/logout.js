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
exports.id = "pages/api/auth/logout";
exports.ids = ["pages/api/auth/logout"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/auth/logout.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/logout.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { serialize  } = __webpack_require__(/*! cookie */ \"cookie\");\nfunction handler(req, res) {\n    const { cookies  } = req;\n    const token = cookies.accessToken;\n    if (!token) {\n        return res.json({\n            message: \"not logged in ...\"\n        });\n    } else {\n        const serialised = serialize(\"accessToken\", null, {\n            httpOnly: true,\n            secure: \"development\" !== \"development\",\n            sameSite: \"strict\",\n            maxAge: -1,\n            path: \"/\"\n        });\n        res.setHeader(\"Set-Cookie\", serialised);\n        res.status(200).json({\n            message: \"Logout Success\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dvdXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sRUFBQ0EsU0FBUyxHQUFDLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsQ0FBQztBQUt0QixTQUFTQyxPQUFPLENBQzNCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDNUI7SUFDRSxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRixHQUFHO0lBRXZCLE1BQU1HLEtBQUssR0FBR0QsT0FBTyxDQUFDRSxXQUFXO0lBRWpDLElBQUksQ0FBQ0QsS0FBSyxFQUFFO1FBQ1IsT0FBT0YsR0FBRyxDQUFDSSxJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFDLG1CQUFtQjtTQUFDLENBQUM7S0FDakQsTUFBSTtRQUVELE1BQU1DLFVBQVUsR0FBR1YsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUU7WUFDOUNXLFFBQVEsRUFBRSxJQUFJO1lBQ2RDLE1BQU0sRUFBRUMsYUFyQlAsS0FxQmdDLGFBQWE7WUFDOUNDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ1ZDLElBQUksRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUVGWixHQUFHLENBQUNhLFNBQVMsQ0FBQyxZQUFZLEVBQUVQLFVBQVUsQ0FBQztRQUN2Q04sR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNWLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUMsZ0JBQWdCO1NBQUMsQ0FBQztLQUNuRDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhpZXRiaWhxLy4vcGFnZXMvYXBpL2F1dGgvbG9nb3V0LnRzP2Q5M2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuY29uc3Qge3NlcmlhbGl6ZX0gPSByZXF1aXJlKCdjb29raWUnKVxyXG50eXBlIERhdGEgPSB7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuICAgIGNvbnN0IHsgY29va2llcyB9ID0gcmVxXHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVzLmFjY2Vzc1Rva2VuXHJcblxyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7bWVzc2FnZTpcIm5vdCBsb2dnZWQgaW4gLi4uXCJ9KVxyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlcmlhbGlzZWQgPSBzZXJpYWxpemUoXCJhY2Nlc3NUb2tlblwiLCBudWxsLCB7XHJcbiAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIsXHJcbiAgICAgICAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxyXG4gICAgICAgICAgICBtYXhBZ2U6IC0xLFxyXG4gICAgICAgICAgICBwYXRoOiBcIi9cIlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBzZXJpYWxpc2VkKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOlwiTG9nb3V0IFN1Y2Nlc3NcIn0pXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29va2llcyIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJqc29uIiwibWVzc2FnZSIsInNlcmlhbGlzZWQiLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJzYW1lU2l0ZSIsIm1heEFnZSIsInBhdGgiLCJzZXRIZWFkZXIiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/logout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/logout.ts"));
module.exports = __webpack_exports__;

})();