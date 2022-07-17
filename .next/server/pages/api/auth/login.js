"use strict";
(() => {
var exports = {};
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 9539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _service_jwt_sign_verify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4853);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service_jwt_sign_verify__WEBPACK_IMPORTED_MODULE_0__]);
_service_jwt_sign_verify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const { serialize  } = __webpack_require__(4802);
const secret = process.env.SECRET || "secret";
async function handler(req, res) {
    const { username , password  } = req.body;
    if (username === "admin" && password === "admin") {
        const token = await (0,_service_jwt_sign_verify__WEBPACK_IMPORTED_MODULE_0__/* .sign */ .X)(username, secret);
        console.log(token);
        const serialised = serialize("jwtoken", token, {
            httpOnly: true,
            secure: "production" !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
        });
        res.setHeader("Set-Cookie", serialised);
        res.status(200).json({
            message: "Success"
        });
    } else {
        res.status(401).json({
            message: "Invalid credentials!"
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ sign)
/* harmony export */ });
/* unused harmony export verify */
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jose__WEBPACK_IMPORTED_MODULE_0__]);
jose__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function sign(payload, secret) {
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60 * 60;
    return new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT({
        payload
    }).setProtectedHeader({
        alg: "HS256",
        typ: "JWT"
    }).setExpirationTime(exp).setIssuedAt(iat).setNotBefore(iat).sign(new TextEncoder().encode(secret));
}
async function verify(token, secret) {
    const { payload  } = await jwtVerify(token, new TextEncoder().encode(secret));
    return payload;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9539));
module.exports = __webpack_exports__;

})();