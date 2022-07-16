"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 993:
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ 353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./db/index.tsx
const mysql2 = __webpack_require__(993);
const connection = mysql2.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_NAME
});
/*async function sql(query_string: string, values: []) {
    try {
        const result = await connection.query(query_string, values)
        await connection.end()
        return result
    } catch (error:any) {
        throw Error(error.message)
    }
}*/ /* harmony default export */ const db = (connection);

;// CONCATENATED MODULE: ./pages/api/user.ts

function handler(req, res) {
    const data = db.query("SELECT * FROM user", (err, results, fields)=>{
        console.log("Ket qua: ", results);
        res.status(200).send(results);
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(353));
module.exports = __webpack_exports__;

})();