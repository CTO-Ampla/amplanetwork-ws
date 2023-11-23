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
exports.Footer = void 0;
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
const Footer = (props) => {
    const rs = (0, useResponsive_1.useResponsive)();
    const [email, setEmail] = React.useState("CLick here to show the email");
    function displayEmail() {
        setEmail("info@amplanetwork.com");
    }
    return React.createElement(React.Fragment, null,
        React.createElement(Div, { sx: {
                backgroundColor: "#1b3755",
                width: "100%",
                display: "flex",
                justifyContent: "center",
            } },
            React.createElement(row_1.default, { align: "middle", style: {
                    width: "100%",
                    maxWidth: "1200px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                } },
                React.createElement(col_1.default, { xs: 24, md: 8 },
                    React.createElement(flex_1.default, { vertical: true, style: { color: "#fff", textAlign: rs.md ? "left" : "center" }, align: rs.md ? "flex-start" : "center" },
                        React.createElement("img", { src: "assets/logot2.png", alt: "Digicon", className: "img-fluid", style: { minHeight: "100px", maxHeight: "100px" } }),
                        React.createElement("p", null,
                            "Ampla Network is a 100% online IT",
                            React.createElement("br", null),
                            "Services company with unique",
                            React.createElement("br", null),
                            "building processes.")),
                    !rs.md && React.createElement("hr", { style: { border: "none", borderBottom: "1px solid #fff" } })),
                React.createElement(col_1.default, { xs: 24, md: 8 },
                    React.createElement(flex_1.default, { vertical: true, style: { color: "#fff", textAlign: rs.md ? "left" : "center" }, align: rs.md ? "flex-start" : "center" },
                        React.createElement("h3", null, "Location"),
                        React.createElement("p", null,
                            "Compass Building,",
                            React.createElement("br", null),
                            "Al Shohada Road,",
                            React.createElement("br", null),
                            "AL Hamra Industrial Zone-FZ,",
                            React.createElement("br", null),
                            React.createElement("br", null),
                            "Ras Al Khaimah,",
                            React.createElement("br", null),
                            "United Arab Emirates")),
                    !rs.md && React.createElement("hr", { style: { border: "none", borderBottom: "1px solid #fff" } })),
                React.createElement(col_1.default, { xs: 24, md: 8 },
                    React.createElement(flex_1.default, { vertical: true, style: { color: "#fff", textAlign: rs.md ? "left" : "center" }, align: rs.md ? "flex-start" : "center" },
                        React.createElement("h3", { id: "nc" }, "Contact us"),
                        React.createElement("p", null,
                            React.createElement("span", null, "Email :  "),
                            React.createElement("span", { onClick: () => displayEmail(), style: { color: "#b749bf", fontWeight: "bolder", cursor: email.includes("@") ? "default" : "pointer" } }, email),
                            React.createElement("div", { style: { marginBottom: 10 } }),
                            React.createElement("span", null, "Linkedin :  "),
                            React.createElement("a", { href: "https://www.linkedin.com/company/ampla-network/", style: { color: "#b749bf", fontWeight: "bolder", cursor: "pointer" } }, "Linkedin Ampla Network"),
                            React.createElement("div", { style: { marginBottom: 10 } }),
                            React.createElement("span", null, "Whatsapp :  "),
                            React.createElement("a", { href: "https://api.whatsapp.com/send/?phone=971585985932&text&type=phone_number&app_absent=0", style: { color: "#b749bf", fontWeight: "bolder", cursor: "pointer" } }, "Whatsapp Ampla Network")))))));
};
exports.Footer = Footer;
