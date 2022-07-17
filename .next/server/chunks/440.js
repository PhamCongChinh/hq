"use strict";
exports.id = 440;
exports.ids = [440];
exports.modules = {

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.75a1163c.png","height":145,"width":140,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAwUlEQVR42iXNvQ7BYBiG4e+8LGIQ4hTEjEUQA+nQRSzSYCUSBjFKOAUJi5KGRHsATVRSW9v3e3+0TE+eXMOtiFhEiOT5ZNcl5v9llc474G4bZ5PYGsdGP/mEmaXAoyFMreh8guNRm0Y0m4AIq+BFvS7sdpDP6UYdHw/daUEYkgKgSplKRVrMsVbV201ijTXir2FfqJDHw14366gUGwMdRaSYRQPf72SauFzi9UrrFQZBBny7ieeJbbPvs+OI47CIfAG2RZyiaKtHtwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 2440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/images/logo.png
var logo = __webpack_require__(846);
;// CONCATENATED MODULE: ./components/Layout/Header.tsx




const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "tablet:px-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: logo/* default */.Z,
                    alt: "Logo",
                    width: 100,
                    height: 100,
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-blue-500 h-8 shadow-md text-white",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/login",
                        children: "Login"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/dashboard",
                        children: "Dashboard"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Layout_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout/index.tsx



const Layout = ({ children , title ="TypeScript Next.js Stripe Example"  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Header, {}),
            children
        ]
    });
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;