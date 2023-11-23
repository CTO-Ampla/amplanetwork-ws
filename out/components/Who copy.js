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
exports.Who = void 0;
const React = __importStar(require("react"));
const ahooks_1 = require("ahooks");
const antd_1 = require("antd");
const system_1 = require("@mui/system");
const style = {
    width: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};
const Div = (0, system_1.styled)('div') ``;
const Span = (0, system_1.styled)('span') ``;
const Who = (props) => {
    const rs = (0, ahooks_1.useResponsive)();
    document.title = `${rs.xs ? "XS " : ""}${rs.sm ? "SM " : ""}${rs.md ? "MD " : ""}${rs.lg ? "LG " : ""}${rs.xl ? "XL" : ""}`;
    const description = (React.createElement(Div, { className: "banner-content", sx: {
            paddingLeft: "5px",
            paddingRight: "5px",
            textAlign: "left"
        } },
        React.createElement("p", { className: "second", style: { fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15, textAlign: rs.md ? "left" : "center" } },
            "We fully operate online and we are always available for you.",
            React.createElement("br", null),
            React.createElement("br", null),
            "Our best talents are all over the world, no compromise on quality, still the best price",
            React.createElement("br", null),
            React.createElement("br", null),
            "We apply fix daily rate of ",
            React.createElement(Span, { sx: { color: "#b749bf", fontWeight: "bolder" } }, "250 USD"),
            " per day per resource.")));
    const picture = (React.createElement("img", { src: "assets/vector-earth.png", alt: "", className: "img-fluid", style: { maxWidth: "65%" } }));
    const area1 = React.createElement(antd_1.Col, { md: 12, xs: 24 },
        React.createElement(antd_1.Flex, { justify: rs.md ? "start" : "center", style: { marginBottom: rs.md ? 0 : 20 } }, picture));
    const area2 = React.createElement(antd_1.Col, { md: 12, xs: 24 },
        React.createElement(antd_1.Flex, { justify: "center" }, description));
    return React.createElement(React.Fragment, null,
        React.createElement(antd_1.Row, { align: "middle", style: {
                width: "100%",
                maxWidth: "1200px",
                backgroundColor: "#fff",
                paddingTop: "20px",
                paddingBottom: "20px",
            } },
            rs.md ? area1 : area2,
            rs.md ? area2 : area1));
};
exports.Who = Who;
