"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@mui/system/styled"));
const config_provider_1 = __importDefault(require("antd/lib/config-provider"));
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const react_google_font_loader_1 = __importDefault(require("react-google-font-loader"));
const useResponsive_1 = require("ahooks/es/useResponsive");
const Header_1 = require("./components/Header");
const Intro_1 = require("./components/Intro");
const Who_1 = require("./components/Who");
const Lifecycle_1 = require("./components/Lifecycle");
const Footer_1 = require("./components/Footer");
const Coverage_1 = require("./components/Coverage");
const Div = (0, styled_1.default)('div') ``;
const App = () => {
    const responsive = (0, useResponsive_1.useResponsive)();
    return (react_1.default.createElement(config_provider_1.default, { theme: {
            token: {
                colorPrimary: "#b749bf",
                colorSuccess: "#10cc12",
                colorWarning: "#ccc410",
                colorError: "#cc2c10",
                colorInfo: "#1078cc",
                fontFamily: "Lato, sans-serif"
            }
        } },
        react_1.default.createElement(react_google_font_loader_1.default, { fonts: [
                {
                    font: 'Lato',
                    weights: [400, 500, 700],
                },
            ] }),
        react_1.default.createElement(Div, { sx: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflowY: "auto",
            } },
            react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement(Intro_1.Intro, null),
            react_1.default.createElement(Who_1.Who, null),
            react_1.default.createElement(Lifecycle_1.Lifecycle, null),
            react_1.default.createElement(Coverage_1.Coverage, null),
            react_1.default.createElement(Footer_1.Footer, null))));
};
const root = (0, client_1.createRoot)(document.getElementById('app'));
root.render(react_1.default.createElement(App, null));
