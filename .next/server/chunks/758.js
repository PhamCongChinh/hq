"use strict";
exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 4758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LayoutDashboard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/LayoutDashboard/Header.tsx



const Header = ()=>{
    const router = (0,router_.useRouter)();
    const handlerLogout = async ()=>{
        await external_axios_default().get("/api/auth/logout").then((res)=>{
            if (res.status === 200) {
                router.push("/login");
            }
        }).catch((err)=>{
            console.log(err);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-slate-900 font-bold text-xl py-1 border-b-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-white",
                children: "Header"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>handlerLogout(),
                className: "text-white",
                children: "Logout"
            })
        ]
    });
};
/* harmony default export */ const LayoutDashboard_Header = (Header);

;// CONCATENATED MODULE: ./components/LayoutDashboard/Footer.tsx

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-gray-900 text-white p-4 border-t",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "max-w-6xl mx-auto grid grid-flow-row auto-rows-max md:grid-cols-2",
            children: "Copyright Ph\u1EA1m C\xf4ng Ch\xednh"
        })
    });
};
/* harmony default export */ const LayoutDashboard_Footer = (Footer);

;// CONCATENATED MODULE: ./components/LayoutDashboard/index.tsx




const Layout = ({ children , title ="TypeScript Next.js Stripe Example"  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "basis-2/12 bg-white shadow-xl",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-center font-bold text-xl py-1 border-b-2",
                                children: "Admin"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "list-disc text-black",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "pl-3",
                                        children: "Now this is "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "pl-3",
                                        children: "Now this is "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "pl-3",
                                        children: "Now this is "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "pl-3",
                                        children: "Now this is "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "pl-3",
                                        children: "Now this is "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "pl-3",
                                        children: "Now this is "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "pl-3",
                                        children: "Now this is "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "pl-3",
                                        children: "Now this is "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "pl-3",
                                        children: "Now this is "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "pl-3",
                                        children: "Now this is "
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "basis-10/12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LayoutDashboard_Header, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg-slate-100",
                                children: children
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LayoutDashboard_Footer, {})
        ]
    });
/* harmony default export */ const LayoutDashboard = (Layout);


/***/ })

};
;