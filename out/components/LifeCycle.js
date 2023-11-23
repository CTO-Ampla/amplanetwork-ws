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
exports.Lifecycle = void 0;
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
const Lifecycle = (props) => {
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
                        React.createElement("h1", { className: "main", style: { margin: 0, fontSize: rs.md ? 30 : 30 } }, "Lifecycle"),
                        React.createElement("p", { className: "second", style: { margin: 0, fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15, textAlign: rs.md ? "center" : "center" } }, "Our process is simple and efficient")))),
            React.createElement(row_1.default, { className: "second" },
                React.createElement(LifecycleItem_1.LifeCycleItem, { icon: "task", bullets: ["Your project is converted in tasks", "Tasks are dispatched in 2 weeks milestones"], isLeftPic: true }),
                React.createElement(LifecycleItem_1.LifeCycleItem, { icon: "screen", bullets: ["Developpers do one task", "Then take another one till the end"], isLeftPic: false }),
                React.createElement(LifecycleItem_1.LifeCycleItem, { icon: "qa", bullets: ["When the tasks are done", "A QA will test each of them"], isLeftPic: true }),
                React.createElement(LifecycleItem_1.LifeCycleItem, { icon: "cloud", bullets: ["After QA tests", "We prepare a push online"], isLeftPic: false }),
                React.createElement(LifecycleItem_1.LifeCycleItem, { icon: "video", bullets: ["A video of the milestone is recorded", "This will be your material to assist you in your tests"], isLeftPic: true }),
                React.createElement(LifecycleItem_1.LifeCycleItem, { icon: "email", bullets: ["We send your access for testing", "Directly to your mailbox"], isLeftPic: false, noLine: true }))));
};
exports.Lifecycle = Lifecycle;
