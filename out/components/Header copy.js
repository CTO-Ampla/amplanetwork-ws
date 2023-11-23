"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const antd_1 = require("antd");
const React = __importStar(require("react"));
const ahooks_1 = require("ahooks");
const style = {
    minHeight: "88px",
    maxHeight: "88px",
    width: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};
const Header = (props) => {
    const responsive = (0, ahooks_1.useResponsive)();
    document.title = `${responsive.xs ? "XS " : ""}${responsive.sm ? "SM " : ""}${responsive.md ? "MD " : ""}${responsive.lg ? "LG " : ""}${responsive.xl ? "XL" : ""}`;
    const desktop = (React.createElement("div", { style: style },
        React.createElement("img", { src: "assets/logo.png", alt: "Digicon", className: "img-fluid", style: { minHeight: "80px", maxHeight: "80px" } }),
        React.createElement("div", null),
        React.createElement(antd_1.Button, { type: "primary", style: { fontSize: "15px", fontWeight: "bolder", height: "45px" } }, "Contact Us")));
    const mobile = (React.createElement("div", { style: Object.assign(Object.assign({}, style), { flexDirection: "column" }) },
        React.createElement("img", { src: "assets/logo.png", alt: "Digicon", className: "img-fluid", style: { minHeight: "120px", maxHeight: "120px" } }),
        React.createElement(antd_1.Button, { type: "primary", style: { marginTop: "30px", fontSize: "15px", fontWeight: "bolder", height: "45px" } }, "Contact Us")));
    return React.createElement(React.Fragment, null, responsive.md ? desktop : mobile);
};
exports.Header = Header;
