"use strict";
(() => {
var exports = {};
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 4917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { sign  } = __webpack_require__(9344);
const { serialize  } = __webpack_require__(4802);
function handler(req, res) {
    const { cookies  } = req;
    const token = cookies.jwtoken;
    if (!token) {
        return res.json({
            message: "not logged in ..."
        });
    } else {
        const serialised = serialize("jwtoken", null, {
            httpOnly: true,
            secure: "production" !== "development",
            sameSite: "strict",
            maxAge: -1,
            path: "/"
        });
        res.setHeader("Set-Cookie", serialised);
        res.status(200).json({
            message: "Logout Success"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4917));
module.exports = __webpack_exports__;

})();