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
exports.Coverage = void 0;
const React = __importStar(require("react"));
const useResponsive_1 = require("ahooks/es/useResponsive");
const col_1 = __importDefault(require("antd/lib/col"));
const flex_1 = __importDefault(require("antd/lib/flex"));
const row_1 = __importDefault(require("antd/lib/row"));
const styled_1 = __importDefault(require("@mui/system/styled"));
const LifecycleItem_1 = require("./LifecycleItem");
const style = {
    width: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};
const Div = (0, styled_1.default)('div') ``;
const Span = (0, styled_1.default)('span') ``;
const Coverage = (props) => {
    const rs = (0, useResponsive_1.useResponsive)();
    //document.title = `${rs.xs ? "XS " : ""}${rs.sm ? "SM " : ""}${rs.md ? "MD " : ""}${rs.lg ? "LG " : ""}${rs.xl ? "XL" : ""}`
    return React.createElement(React.Fragment, null,
        React.createElement(Div, { sx: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "20px",
                paddingBottom: "20px",
                backgroundColor: "#ffffff"
            } },
            React.createElement(row_1.default, { align: "middle", style: {
                    width: "100%",
                    maxWidth: "1200px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                } },
                React.createElement(col_1.default, { xs: 24 },
                    React.createElement(flex_1.default, { vertical: true, align: "center", justify: rs.md ? "center" : "center", style: { marginBottom: rs.md ? 0 : 20 } },
                        React.createElement("h1", { className: "main", style: { margin: 0, fontSize: rs.md ? 30 : 30 } }, "Coverage"),
                        React.createElement("p", { className: "second", style: { margin: 0, fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15, textAlign: rs.md ? "center" : "center" } },
                            "Our coverage starts from mobile, to reach the Desktop",
                            React.createElement("br", null),
                            " and all the way to the Web")))),
            React.createElement(row_1.default, { className: "second" },
                React.createElement(LifecycleItem_1.LifeCycleItem, { icon: "mobile", bullets: ["Native mobile application", "Responsive website", "Progressive Web App"], isLeftPic: true }),
                React.createElement(LifecycleItem_1.LifeCycleItem, { icon: "web", bullets: ["Marketing Website", "Complex application", "Frontend and Admin Backoffice"], isLeftPic: false }),
                React.createElement(LifecycleItem_1.LifeCycleItem, { icon: "desktop", bullets: ["Standalone executable", "Desktop cross plateform", "Windows / Mac / Linux"], isLeftPic: true, noLine: true }))),
        React.createElement(Div, { sx: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "20px",
                paddingBottom: "20px",
                backgroundColor: "#f5f5f5"
            } },
            React.createElement(row_1.default, { align: "middle", style: {
                    width: "100%",
                    maxWidth: "1200px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                } },
                React.createElement(col_1.default, { xs: 24 },
                    React.createElement(flex_1.default, { vertical: true, align: "center", justify: rs.md ? "center" : "center", style: { marginBottom: rs.md ? 0 : 20 } },
                        React.createElement("h1", { className: "main", style: { margin: 0, fontSize: rs.md ? 30 : 30 } }, "Stack"),
                        React.createElement("p", { className: "second", style: { margin: 0, fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15, textAlign: rs.md ? "center" : "center" } },
                            "Our technical stack does not spread across all technologies,",
                            React.createElement("br", null),
                            " but we are experts in the following ones")))),
            React.createElement(row_1.default, { className: "second" },
                React.createElement(LifecycleItem_1.LifeCycleItem, { md: 6, ext: "svg", icon: "react", bullets: ["React Native for the mobile", "React for the web & Desktop"], isLeftPic: true }),
                React.createElement(LifecycleItem_1.LifeCycleItem, { md: 6, ext: "svg", icon: "node", bullets: ["Node JS for the backend", "Fast iteration for fast delivery"], isLeftPic: false }),
                React.createElement(LifecycleItem_1.LifeCycleItem, { md: 6, ext: "svg", icon: "electron", bullets: ["Electron for the Desktop", "One Tech, all plateforms"], isLeftPic: true }),
                React.createElement(LifecycleItem_1.LifeCycleItem, { md: 6, ext: "svg", icon: "ts", bullets: ["Typescript everywhere", "One language to rule them all"], isLeftPic: false, noLine: true }))));
};
exports.Coverage = Coverage;
