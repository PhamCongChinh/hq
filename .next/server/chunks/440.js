"use strict";
exports.id = 440;
exports.ids = [440];
exports.modules = {

/***/ 440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Layout/Header.tsx

const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            className: "text-red-700",
            children: "This is Header"
        })
    });
};
/* harmony default export */ const Layout_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout/index.tsx



const Layout = ({ children , title ="TypeScript Next.js Stripe Example"  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-content",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "light",
                                children: "Stripe Sample"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "Next.js, TypeScript, and Stripe"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Header, {}),
            children
        ]
    });
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;