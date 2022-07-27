"use strict";
(() => {
var exports = {};
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 1983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const handler = async (req, res)=>{
    const { id  } = req.query;
    if (req.method === "DELETE") {
        //const query = 'DELETE FROM category WHERE id = '+ req.query.id +' '
        //await pool.query(query)
        return res.status(200).json("Deleted");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1983));
module.exports = __webpack_exports__;

})();