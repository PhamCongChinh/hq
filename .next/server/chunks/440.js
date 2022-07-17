"use strict";
exports.id = 440;
exports.ids = [440];
exports.modules = {

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
;// CONCATENATED MODULE: ./components/Layout/Header.tsx


const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
    });
};
/* harmony default export */ const Layout_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout/index.tsx




const Layout = ({ children , title ="TypeScript Next.js Stripe Example"  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full fixed z-10 bg-gray-50 pt-2 border px-4 md:px-0",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex mx-auto max-w-6xl justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "md:hidden flex cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "h-6 w-6 text-blue-500",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M4 6h16M4 12h16M4 18h16"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-xs text-blue-500 font-normal cursor-pointer",
                                        children: "C\xf4ng ty TNHH th\u01B0\u01A1ng m\u1EA1i v\xe0 s\u1EA3n xu\u1EA5t HQ"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/shop/cart",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "relative inline-block",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-5 w-5 text-blue-500",
                                                        viewBox: "0 0 18 18",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "absolute top-1 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-blue-500",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden md:flex mx-auto max-w-6xl py-3 text-white font-semibold",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "pr-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Trang ch\u1EE7"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "px-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/gioi-thieu.html",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Gi\u1EDBi thi\u1EC7u"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "px-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/san-pham.html",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "S\u1EA3n ph\u1EA9m"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "px-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/tin-tuc.html",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Tin t\u1EE9c"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "px-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/khach-hang.html",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Kh\xe1ch h\xe0ng"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "px-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/nha-san-xuat.html",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Nh\xe0 s\u1EA3n xu\u1EA5t"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "px-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/tuyen-dung.html",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Tuy\u1EC3n d\u1EE5ng"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "px-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/dich-vu.html",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "D\u1ECBch v\u1EE5"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "px-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/lien-he.html",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Li\xean h\u1EC7"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Header, {}),
            children
        ]
    });
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;