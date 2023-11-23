"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderMobile = void 0;
const system_1 = require("@mui/system");
const react_1 = __importDefault(require("react"));
const HeaderMobile = () => {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(system_1.Box, { sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
                fontFamily: 'barlow',
                fontSize: 40,
                fontWeight: 600,
                color: '#123863',
            } },
            react_1.default.createElement("span", null, "Ampla Network"),
            react_1.default.createElement("span", { style: { color: "#be11cb" } }, "IT as a service")),
        react_1.default.createElement(system_1.Box, { sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
                fontFamily: 'barlow',
                fontSize: 20,
                fontWeight: 800,
                color: '#123863',
            } },
            react_1.default.createElement("span", { style: { marginTop: 10, padding: 30, textAlign: "center" } }, "We use our knowledge and experience to fit your needs. Enjoy the power of a cloud company")));
};
exports.HeaderMobile = HeaderMobile;
