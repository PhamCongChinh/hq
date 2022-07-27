"use strict";
(() => {
var exports = {};
exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 97:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "formidable"
const external_formidable_namespaceObject = require("formidable");
var external_formidable_default = /*#__PURE__*/__webpack_require__.n(external_formidable_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/upload-file.ts


const config = {
    api: {
        bodyParser: false
    }
};
async function handler(req, res) {
    req.method === "POST" ? post(req, res) : res.status(401).send("");
};
const post = async (req, res)=>{
    const uploadFolder = external_path_default().join("./", "public", "images");
    const form = external_formidable_default()({
        multiples: true,
        maxFieldsSize: 50 * 1024 * 1024,
        keepExtensions: true,
        uploadDir: uploadFolder
    });
    form.parse(req, async (err, fields, files)=>{
        return res.status(201).send(files.file.newFilename);
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(97));
module.exports = __webpack_exports__;

})();