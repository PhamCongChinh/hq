"use strict";
(() => {
var exports = {};
exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 9308:
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
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "refreshToken";
async function handler(req, res) {
    //const { refreshToken } = req.body;
    const { refreshToken  } = req.cookies;
    if (refreshToken) {
        try {
            const user = await (0,_service_jwt_sign_verify__WEBPACK_IMPORTED_MODULE_0__/* .verify */ .T)(refreshToken, refreshTokenSecret);
            console.log(user.payload);
            const newToken = (0,_service_jwt_sign_verify__WEBPACK_IMPORTED_MODULE_0__/* .sign */ .X)(user.payload, refreshTokenSecret);
            const serialised = serialize("accessToken", newToken, {
                httpOnly: true,
                secure: "production" !== "development",
                sameSite: "strict",
                maxAge: 60 * 2,
                path: "/"
            });
            res.setHeader("Set-Cookie", serialised);
            res.status(200);
        } catch (error) {
            res.status(403).json({
                message: "Invalid refresh token"
            });
        }
    }
    res.status(200).json({
        refreshToken
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ verify),
/* harmony export */   "X": () => (/* binding */ sign)
/* harmony export */ });
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
    const { payload  } = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, new TextEncoder().encode(secret));
    return payload;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9308));
module.exports = __webpack_exports__;

})();