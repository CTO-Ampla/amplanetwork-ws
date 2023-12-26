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
const Footer_1 = require("./components/Footer");
const BlockItem_1 = require("./components/BlockItem");
const PicItem_1 = require("./components/PicItem");
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
            react_1.default.createElement(BlockItem_1.BlockItem, { title: "Scope of expertise", description: "Our expertise is splitted into 3 main areas", items: [
                    { icon: "code", bullets: ["Low code platform", "Our low code plateform handle full project lifecycle"], isLeftPic: true },
                    { icon: "ai", bullets: ["AI assisted components", "From AI Assistant", "to AI Assisted software"], isLeftPic: !true },
                    { icon: "game", bullets: ["Gamification", "Add promotional mini games", "to make your marketing astonishing."], isLeftPic: true },
                ] }),
            react_1.default.createElement(PicItem_1.PicItem, { iswhiteBg: true, picture: "assets/lowcode.png", description: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(BlockItem_1.BlockItem, { isWhiteBG: true, title: "Low code platform", description: "Low code plateform to handle full project", items: [
                            { icon: "design", bullets: ["Conception"], isLeftPic: true },
                            { icon: "implement", bullets: ["Implementation"], isLeftPic: !true },
                            { icon: "testing", bullets: ["Testing"], isLeftPic: true },
                        ] })) }),
            react_1.default.createElement(PicItem_1.PicItem, { iswhiteBg: false, picture: "assets/ai-assist.png", isPicRight: true, description: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(BlockItem_1.BlockItem, { isWhiteBG: false, title: "AI assisted components", description: "Include AI assisted components to interact with your system", items: [
                            { icon: "chatbot", bullets: ["Virtual Assistant"], isLeftPic: !true },
                            { icon: "smart", bullets: ["Smart Software"], isLeftPic: true },
                            { icon: "bi", bullets: ["Data Analytics"], isLeftPic: !true },
                        ] })) }),
            react_1.default.createElement(PicItem_1.PicItem, { iswhiteBg: true, picture: "assets/gaming.png", description: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(BlockItem_1.BlockItem, { isWhiteBG: true, title: "Gamification", description: "Add promotional mini-games to make your marketing astonishing.", items: [
                            { icon: "promo", bullets: ["Promotional"], isLeftPic: true },
                            { icon: "adv", bullets: ["Advertising"], isLeftPic: !true },
                            { icon: "mini", bullets: ["Mini games"], isLeftPic: true },
                        ] })) }),
            react_1.default.createElement(Footer_1.Footer, null))));
};
const root = (0, client_1.createRoot)(document.getElementById('app'));
root.render(react_1.default.createElement(App, null));
