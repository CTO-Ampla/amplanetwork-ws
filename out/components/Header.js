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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const button_1 = __importDefault(require("antd/lib/button"));
const React = __importStar(require("react"));
const useResponsive_1 = require("ahooks/es/useResponsive");
const col_1 = __importDefault(require("antd/lib/col"));
const flex_1 = __importDefault(require("antd/lib/flex"));
const row_1 = __importDefault(require("antd/lib/row"));
const style = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
};
const Header = (props) => {
    const rs = (0, useResponsive_1.useResponsive)();
    document.title = "Ampla Network"; //`${rs.xs ? "XS " : ""}${rs.sm ? "SM " : ""}${rs.md ? "MD " : ""}${rs.lg ? "LG " : ""}${rs.xl ? "XL" : ""}`
    return React.createElement(React.Fragment, null,
        React.createElement(row_1.default, { align: "middle", style: {
                width: "100%",
                maxWidth: "1200px",
                marginBottom: rs.md ? 40 : 0
            } },
            React.createElement(col_1.default, { md: 12, xs: 24 },
                React.createElement(flex_1.default, { justify: rs.md ? "start" : "center", style: { marginBottom: rs.md ? 0 : 20 } },
                    React.createElement("img", { src: "assets/logo.png", alt: "Digicon", className: "img-fluid", style: { minHeight: "80px", maxHeight: "80px" } }))),
            React.createElement(col_1.default, { md: 12, xs: 24 },
                React.createElement(flex_1.default, { justify: rs.md ? "end" : "center", style: { marginBottom: rs.md ? 0 : 40 } },
                    React.createElement(button_1.default, { type: "primary", style: { width: rs.md ? 106 : 200, fontSize: "15px", fontWeight: "bolder", height: "45px" }, onClick: () => {
                            document.querySelector("#app > div").scrollBy({ top: 5000, behavior: "smooth" });
                        } }, "Contact Us")))));
};
exports.Header = Header;
