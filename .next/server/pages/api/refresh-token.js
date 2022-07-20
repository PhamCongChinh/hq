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
exports.id = "pages/api/refresh-token";
exports.ids = ["pages/api/refresh-token"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./db/index.tsx":
/*!**********************!*\
  !*** ./db/index.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mysql2 = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst connection = mysql2.createConnection({\n    host: process.env.MYSQL_HOST,\n    user: process.env.MYSQL_USER,\n    password: process.env.MYSQL_PASS,\n    database: process.env.MYSQL_NAME\n});\n/*async function sql(query_string: string, values: []) {\r\n    try {\r\n        const result = await connection.query(query_string, values)\r\n        await connection.end()\r\n        return result\r\n    } catch (error:any) {\r\n        throw Error(error.message)\r\n    }\r\n}*/ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0FBT2hDLE1BQU1DLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxnQkFBZ0IsQ0FBQztJQUN2Q0MsSUFBSSxFQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtJQUM3QkMsSUFBSSxFQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csVUFBVTtJQUM3QkMsUUFBUSxFQUFHTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssVUFBVTtJQUNqQ0MsUUFBUSxFQUFHUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sVUFBVTtDQUNwQyxDQUFDO0FBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGlldGJpaHEvLi9kYi9pbmRleC50c3g/ZDFkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBteXNxbDIgPSByZXF1aXJlKCdteXNxbDInKVxyXG5cclxuaW50ZXJmYWNlIERhdGEge1xyXG4gICAgcXVlcnlfc3RyaW5nOiBzdHJpbmcsXHJcbiAgICB2YWx1ZXM6IFtdXHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSBteXNxbDIuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0IDogcHJvY2Vzcy5lbnYuTVlTUUxfSE9TVCxcclxuICAgIHVzZXIgOiBwcm9jZXNzLmVudi5NWVNRTF9VU0VSLFxyXG4gICAgcGFzc3dvcmQgOiBwcm9jZXNzLmVudi5NWVNRTF9QQVNTLFxyXG4gICAgZGF0YWJhc2UgOiBwcm9jZXNzLmVudi5NWVNRTF9OQU1FXHJcbn0pXHJcblxyXG4vKmFzeW5jIGZ1bmN0aW9uIHNxbChxdWVyeV9zdHJpbmc6IHN0cmluZywgdmFsdWVzOiBbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KHF1ZXJ5X3N0cmluZywgdmFsdWVzKVxyXG4gICAgICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKClcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IGNhdGNoIChlcnJvcjphbnkpIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgfVxyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Rpb24iXSwibmFtZXMiOlsibXlzcWwyIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNWVNRTF9IT1NUIiwidXNlciIsIk1ZU1FMX1VTRVIiLCJwYXNzd29yZCIsIk1ZU1FMX1BBU1MiLCJkYXRhYmFzZSIsIk1ZU1FMX05BTUUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/index.tsx\n");

/***/ }),

/***/ "(api)/./pages/api/refresh-token.ts":
/*!************************************!*\
  !*** ./pages/api/refresh-token.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db/index.tsx\");\nconst { serialize  } = __webpack_require__(/*! cookie */ \"cookie\");\nconst refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || \"refreshToken\";\n\nasync function handler(req, res) {\n    _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query('SELECT * FROM `user` WHERE `username` = \"admin\"', (results)=>{\n        console.log(results);\n    });\n    /*if (refreshToken) {\r\n        try {\r\n            const { payload } = await verify(refreshToken, refreshTokenSecret)\r\n            const newToken = await sign(payload, refreshTokenSecret)\r\n            const serialised = serialize(\"accessToken\", newToken, {\r\n                httpOnly: true,\r\n                secure: process.env.NODE_ENV !== \"development\",\r\n                sameSite: \"strict\",\r\n                maxAge: 60 * 2,\r\n                path: \"/\"\r\n            })\r\n            res.setHeader('Set-Cookie', serialised)\r\n            res.status(200)\r\n        } catch (error) {\r\n            res.status(403).json({\r\n                message: 'Invalid refresh token',\r\n            })\r\n        }\r\n    }*/ res.status(200).json({\n        refreshToken: \"asd\"\n    });\n//res.status(200).json({ refreshToken })\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVmcmVzaC10b2tlbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sRUFBRUEsU0FBUyxHQUFFLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsQ0FBQztBQUN2QyxNQUFNQyxrQkFBa0IsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLG9CQUFvQixJQUFJLGNBQWM7QUFFNUM7QUFPbEIsZUFBZUUsT0FBTyxDQUNqQ0MsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzVCO0lBQ0VILGlEQUFnQixDQUFDLGlEQUFpRCxFQUFFLENBQUNLLE9BQVksR0FBSztRQUNsRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztLQUN2QixDQUFDO0lBQ0Y7UUFvQnNCSztLQUFtQixDQUFDO0FBQzFDLHdDQUF3QztDQUMzQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoaWV0YmlocS8uL3BhZ2VzL2FwaS9yZWZyZXNoLXRva2VuLnRzP2VjNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgdmVyaWZ5LCBzaWduIH0gZnJvbSAnLi4vLi4vc2VydmljZS9qd3Rfc2lnbl92ZXJpZnknO1xyXG5jb25zdCB7IHNlcmlhbGl6ZSB9ID0gcmVxdWlyZSgnY29va2llJylcclxuY29uc3QgcmVmcmVzaFRva2VuU2VjcmV0ID0gcHJvY2Vzcy5lbnYuUkVGUkVTSF9UT0tFTl9TRUNSRVQgfHwgXCJyZWZyZXNoVG9rZW5cIlxyXG5cclxuaW1wb3J0IGNvbm5lY3Rpb24gZnJvbSAnLi4vLi4vZGInXHJcbmltcG9ydCB7IHR5cGUgfSBmcm9tICdvcyc7XHJcblxyXG50eXBlIERhdGEgPSB7XHJcbiAgICByZWZyZXNoVG9rZW46IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XHJcbikge1xyXG4gICAgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBgdXNlcmAgV0hFUkUgYHVzZXJuYW1lYCA9IFwiYWRtaW5cIicsIChyZXN1bHRzOkRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG4gICAgfSlcclxuICAgIC8qaWYgKHJlZnJlc2hUb2tlbikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYXdhaXQgdmVyaWZ5KHJlZnJlc2hUb2tlbiwgcmVmcmVzaFRva2VuU2VjcmV0KVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUb2tlbiA9IGF3YWl0IHNpZ24ocGF5bG9hZCwgcmVmcmVzaFRva2VuU2VjcmV0KVxyXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpc2VkID0gc2VyaWFsaXplKFwiYWNjZXNzVG9rZW5cIiwgbmV3VG9rZW4sIHtcclxuICAgICAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgc2FtZVNpdGU6IFwic3RyaWN0XCIsXHJcbiAgICAgICAgICAgICAgICBtYXhBZ2U6IDYwICogMixcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwiL1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBzZXJpYWxpc2VkKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMClcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnSW52YWxpZCByZWZyZXNoIHRva2VuJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9Ki9cclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7cmVmcmVzaFRva2VuOidhc2QnfSlcclxuICAgIC8vcmVzLnN0YXR1cygyMDApLmpzb24oeyByZWZyZXNoVG9rZW4gfSlcclxufVxyXG4iXSwibmFtZXMiOlsic2VyaWFsaXplIiwicmVxdWlyZSIsInJlZnJlc2hUb2tlblNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJSRUZSRVNIX1RPS0VOX1NFQ1JFVCIsImNvbm5lY3Rpb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJyZWZyZXNoVG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/refresh-token.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/refresh-token.ts"));
module.exports = __webpack_exports__;

})();