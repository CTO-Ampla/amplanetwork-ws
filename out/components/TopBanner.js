"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBanner = void 0;
const Box_1 = __importDefault(require("@mui/system/Box"));
const row_1 = __importDefault(require("antd/lib/row"));
const col_1 = __importDefault(require("antd/lib/col"));
const image_1 = __importDefault(require("antd/lib/image"));
const button_1 = __importDefault(require("antd/lib/button"));
const react_1 = __importDefault(require("react"));
const RGroup_1 = require("./RGroup");
const TopBanner = () => {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(RGroup_1.RGroup, null,
            react_1.default.createElement(RGroup_1.RBox, { md: true, plus: true },
                react_1.default.createElement(row_1.default, null,
                    react_1.default.createElement(col_1.default, { span: 4 },
                        react_1.default.createElement(image_1.default, { src: "assets/logo.png", preview: false, width: 120, style: { marginLeft: 20 } })),
                    react_1.default.createElement(col_1.default, { span: 16 },
                        react_1.default.createElement(Box_1.default, { sx: { display: "flex", paddingTop: "50px", flexDirection: "row", justifyContent: "space-evenly", alignContent: "center", fontFamily: "Roboto", fontSize: "15px", fontWeight: 500, color: "#123863" } },
                            react_1.default.createElement("span", null, "Home"),
                            react_1.default.createElement("span", null, "Services"),
                            react_1.default.createElement("span", null, "Quotation Calculator"),
                            react_1.default.createElement("span", null, "Digital explained"))),
                    react_1.default.createElement(col_1.default, { span: 4 },
                        react_1.default.createElement(Box_1.default, { sx: { display: "flex", paddingTop: "50px", flexDirection: "row", justifyContent: "space-evenly", alignContent: "center", fontFamily: "Roboto", fontSize: "20px", fontWeight: 500, color: "#123863" } },
                            react_1.default.createElement(button_1.default, { type: "primary", size: "large", style: { borderRadius: 20, width: 120, marginTop: "-10px" } }, "Contact us"))))),
            react_1.default.createElement(RGroup_1.RBox, { sm: true, xs: true },
                react_1.default.createElement(Box_1.default, { sx: { display: "flex", justifyContent: "center" } },
                    react_1.default.createElement(image_1.default, { src: "assets/logo.png", preview: false, width: 120 })))));
};
exports.TopBanner = TopBanner;
/*

*/ 
