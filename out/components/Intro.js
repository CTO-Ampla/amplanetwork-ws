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
exports.Intro = void 0;
const React = __importStar(require("react"));
const ahooks_1 = require("ahooks");
const lib_1 = require("antd/lib");
const system_1 = require("@mui/system");
const style = {
    width: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};
const Div = (0, system_1.styled)('div') ``;
const Intro = (props) => {
    const rs = (0, ahooks_1.useResponsive)();
    //document.title = `${rs.xs ? "XS " : ""}${rs.sm ? "SM " : ""}${rs.md ? "MD " : ""}${rs.lg ? "LG " : ""}${rs.xl ? "XL" : ""}`
    const description = (React.createElement(Div, { className: "banner-content", sx: {
            paddingLeft: "5px",
            paddingRight: "5px",
        } },
        React.createElement("h1", { className: "second", style: { fontSize: rs.md ? "px" : 45 } }, "Ampla Network"),
        React.createElement("h1", { className: "main", style: { fontSize: rs.md ? 55 : 45 } }, "IT as a Service"),
        React.createElement("p", { className: "second", style: { fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15 } },
            "We use our knowledge and experience to fit your needs.",
            React.createElement("br", null),
            "Enjoy the power of a cloud company")));
    const picture = (React.createElement("img", { src: "assets/vector-coding2.png", alt: "", className: "img-fluid", style: { maxWidth: "65%" } }));
    const area1 = React.createElement(lib_1.Col, { md: 12, xs: 24 },
        React.createElement(lib_1.Flex, { justify: rs.md ? "start" : "center", style: { marginBottom: rs.md ? 0 : 20 } }, description));
    const area2 = React.createElement(lib_1.Col, { md: 12, xs: 24 },
        React.createElement(lib_1.Flex, { justify: "center" }, picture));
    return React.createElement(React.Fragment, null,
        React.createElement(Div, { sx: {
                backgroundColor: "#f5f5f5",
                width: "100%",
                display: "flex",
                justifyContent: "center",
            } },
            React.createElement(lib_1.Row, { align: "middle", style: {
                    width: "100%",
                    maxWidth: "1200px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                } },
                rs.md ? area1 : area1,
                rs.md ? area2 : area2)));
};
exports.Intro = Intro;
