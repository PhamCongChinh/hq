"use strict";
(() => {
var exports = {};
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 4742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ db)
});

;// CONCATENATED MODULE: external "mysql2/promise"
const promise_namespaceObject = require("mysql2/promise");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise_namespaceObject);
;// CONCATENATED MODULE: ./db/index.tsx

const pool = promise_default().createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 1
});
/* harmony default export */ const db = (pool);


/***/ }),

/***/ 7733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4742);

const handler = async (req, res)=>{
    if (req.method === "GET") {
        const [rows, fields] = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query("SELECT * FROM category");
        return res.status(200).json(rows);
    }
    if (req.method === "POST") {
        const query = 'INSERT INTO category (name, slug, image) VALUES ("' + req.body.name + '", "' + req.body.slug + '", "' + req.body.file + '")';
        await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(query);
        return res.status(204);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7733));
module.exports = __webpack_exports__;

})();