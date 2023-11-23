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
exports.ServiceCard = void 0;
const React = __importStar(require("react"));
const card_1 = __importDefault(require("antd/lib/card"));
const image_1 = __importDefault(require("antd/lib/image"));
const Box_1 = __importDefault(require("@mui/system/Box"));
const lib_1 = require("antd/lib");
const ServiceCard = (props) => {
    return React.createElement(React.Fragment, null,
        React.createElement(card_1.default, { style: { marginTop: 0, borderColor: props.reverse ? "#123863" : "#be11cb", borderWidth: 2 }, headStyle: { height: 150 } },
            React.createElement(Box_1.default, { sx: { display: "flex", justifyContent: "center", alignItems: "flex-end", padding: 2, height: "80px" } },
                React.createElement(image_1.default, { src: `assets/${props.titleIcon}`, preview: false, width: 70 })),
            React.createElement(Box_1.default, { sx: { textAlign: "center", fontSize: 20, fontWeight: 500, backgroundColor: props.reverse ? "#be11cb" : "#123863", color: "white", marginBottom: 2, borderRadius: 2, lineHeight: "50px" } },
                React.createElement("span", null, props.title)),
            React.createElement(Box_1.default, { sx: { textAlign: "justify", fontSize: 14, fontWeight: 500, color: "#123863" } }, props.children),
            React.createElement(lib_1.Button, { type: "primary", size: "large", style: { borderRadius: 20, marginTop: "10px", width: "100%", backgroundColor: props.reverse ? "#123863" : "" } }, "Read more...")));
};
exports.ServiceCard = ServiceCard;
