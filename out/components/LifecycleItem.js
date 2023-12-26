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
exports.LifeCycleItem = void 0;
const React = __importStar(require("react"));
const useResponsive_1 = require("ahooks/es/useResponsive");
const col_1 = __importDefault(require("antd/lib/col"));
const flex_1 = __importDefault(require("antd/lib/flex"));
const row_1 = __importDefault(require("antd/lib/row"));
const styled_1 = __importDefault(require("@mui/system/styled"));
const style = {
    width: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};
const Div = (0, styled_1.default)('div') ``;
const Span = (0, styled_1.default)('span') ``;
const LifeCycleItem = (props) => {
    var _a, _b, _c, _d;
    const rs = (0, useResponsive_1.useResponsive)();
    const md = React.createElement(React.Fragment, null,
        React.createElement(col_1.default, { xs: 24, md: (_a = props.md) !== null && _a !== void 0 ? _a : 8, style: { marginBottom: 35, marginTop: 35 } },
            React.createElement(row_1.default, { align: "stretch", justify: "center" },
                React.createElement(col_1.default, { xs: 24, style: { display: "flex" } },
                    React.createElement(flex_1.default, { justify: "center", align: "center", style: { width: "100%" } },
                        React.createElement("img", { src: `assets/ico-${props.icon}.${(_b = props.ext) !== null && _b !== void 0 ? _b : "png"}`, alt: "", className: "img-fluid", style: { height: "60px", marginLeft: 10 } }))),
                React.createElement(col_1.default, { xs: 24 },
                    React.createElement("ul", { style: { listStyleType: "none", textAlign: "center", paddingLeft: 15, paddingRight: 15 } }, props.bullets.map((bullet, index) => React.createElement("li", { key: index }, bullet)))))));
    const xs = (props.isLeftPic
        ? React.createElement(col_1.default, { xs: 24, md: 8 },
            React.createElement(row_1.default, { align: "stretch", justify: "center" },
                React.createElement(col_1.default, { xs: 4, style: { display: "flex" } },
                    React.createElement(flex_1.default, { justify: "center", align: "center", style: { width: "100%" } },
                        React.createElement("img", { src: `assets/ico-${props.icon}.${(_c = props.ext) !== null && _c !== void 0 ? _c : "png"}`, alt: "", className: "img-fluid", style: { height: "40px", marginLeft: 10 } }))),
                React.createElement(col_1.default, { xs: 20 },
                    React.createElement("ul", { style: { listStyleType: "none", textAlign: "left", paddingLeft: 15, paddingRight: 15 } }, props.bullets.map((bullet, index) => React.createElement("li", { key: index }, bullet))))),
            !props.noLine && React.createElement("hr", { style: { border: "none", borderBottom: "1px solid #b749bf", width: "75%", paddingTop: 3, paddingBottom: 3 } }))
        : React.createElement(col_1.default, { xs: 24, md: 8 },
            React.createElement(row_1.default, { align: "stretch", justify: "center" },
                React.createElement(col_1.default, { xs: 20 },
                    React.createElement("ul", { style: { listStyleType: "none", textAlign: "right", paddingLeft: 15, paddingRight: 15 } }, props.bullets.map((bullet, index) => React.createElement("li", { key: index }, bullet)))),
                React.createElement(col_1.default, { xs: 4, style: { display: "flex", justifyContent: "flex-end" } },
                    React.createElement(flex_1.default, { justify: "center", align: "center", style: { width: "100%" } },
                        React.createElement("img", { src: `assets/ico-${props.icon}.${(_d = props.ext) !== null && _d !== void 0 ? _d : "png"}`, alt: "", className: "img-fluid", style: { height: "40px", marginRight: 10 } })))),
            !props.noLine && React.createElement("hr", { style: { border: "none", borderBottom: "1px solid #1b3755", width: "75%", paddingTop: 3, paddingBottom: 3 } })));
    return React.createElement(React.Fragment, null, rs.md ? md : xs);
};
exports.LifeCycleItem = LifeCycleItem;
