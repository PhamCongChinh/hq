"use strict";
exports.id = 872;
exports.ids = [872];
exports.modules = {

/***/ 5872:
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
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
        className: "flex justify-between bg-slate-900 font-bold text-sm text-white p-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Trang ch\u1EE7"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/dashboard",
                        children: "Dashboard"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Ng\u01B0\u1EDDi d\xf9ng"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>handlerLogout(),
                        className: "",
                        children: "\u0110\u0103ng xu\u1EA5t"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const LayoutDashboard_Header = (Header);

;// CONCATENATED MODULE: ./components/LayoutDashboard/Footer.tsx

const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
                children: [
                    "\xa9 2022 ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://flowbite.com/",
                        className: "hover:underline",
                        children: "Flowbite\u2122"
                    }),
                    ". All Rights Reserved."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "mr-4 hover:underline md:mr-6 ",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "mr-4 hover:underline md:mr-6",
                            children: "Privacy Policy"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "mr-4 hover:underline md:mr-6",
                            children: "Licensing"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "hover:underline",
                            children: "Contact"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const LayoutDashboard_Footer = (Footer);

;// CONCATENATED MODULE: ./components/LayoutDashboard/Sidebar.tsx


const Sidebar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("aside", {
        className: "w-64",
        "aria-label": "Sidebar",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 text-gray-100",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard",
                            className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ml-3",
                                children: "Dashboard"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard/users",
                            className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ml-3",
                                children: "Ng\u01B0\u1EDDi d\xf9ng"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard/categories",
                            className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ml-3",
                                children: "Chuy\xean m\u1EE5c"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard/categories/create",
                            className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ml-3",
                                children: "T\u1EA1o m\u1EDBi"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard/categories",
                            className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ml-3",
                                children: "C\u1EADp nh\u1EADt"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard/categories",
                            className: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ml-3",
                                children: "X\xf3a"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                type: "button",
                                className: "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                                "aria-controls": "dropdown-example",
                                "data-collapse-toggle": "dropdown-example",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        "aria-hidden": "true",
                                        className: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
                                            clipRule: "evenodd"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "flex-1 ml-3 text-left whitespace-nowrap",
                                        "sidebar-toggle-item": "",
                                        children: "E-commerce"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        "sidebar-toggle-item": "",
                                        className: "w-6 h-6",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                id: "dropdown-example",
                                className: "hidden py-2 space-y-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                                            children: "Products"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                                            children: "Billing"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                                            children: "Invoice"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const LayoutDashboard_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./components/LayoutDashboard/index.tsx





const Layout = ({ children , title ="TypeScript Next.js Stripe Example"  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "basis-2/12 bg-white shadow-xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutDashboard_Sidebar, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "basis-10/12 bg-slate-100",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LayoutDashboard_Header, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
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