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
exports.Split = void 0;
const React = __importStar(require("react"));
function createElements(_def, splits) {
    var _a;
    let def = {};
    if (typeof _def === "string" || typeof _def === "number") {
        def.size = _def;
    }
    else {
        def = _def;
    }
    def.type = def.type || "h";
    def.size = def.size || 1;
    const style = {
        flex: 1,
        display: "flex",
        overflowX: def.hScroll ? "auto" : "hidden",
        overflowY: def.vScroll ? "auto" : "hidden",
        justifyContent: "flex-start",
        alignItems: "stretch",
    };
    if (typeof def.size === "number") {
        style.flex = def.size;
    }
    if (def.width) {
        style.minWidth =
            style.width =
                style.maxWidth = def.width;
    }
    if (def.height) {
        style.minHeight =
            style.height =
                style.maxHeight = def.height;
    }
    def.type[0] === "h" && (style.flexDirection = def.type === "h"
        ? "row"
        : "row-reverse");
    def.type[0] === "v" && (style.flexDirection = def.type === "v"
        ? "column"
        : "column-reverse");
    const children = [];
    (_a = def.def) === null || _a === void 0 ? void 0 : _a.forEach((def, i) => {
        children.push(createElements(def, splits));
    });
    return React.createElement("div", { style: style }, children.length ? children : splits.shift());
}
const Split = (props) => {
    const elt = createElements(Object.assign({}, props), [...props.splits]);
    const style = Object.assign({ display: "flex", flexDirection: "row", justifyContent: "stretch", alignItems: "stretch" }, props.style);
    if (props.width) {
        style.width = props.width;
        style.minWidth = props.width;
        style.maxWidth = props.width;
    }
    if (props.height) {
        style.height = props.height;
        style.minHeight = props.height;
        style.maxHeight = props.height;
    }
    return React.createElement(React.Fragment, null,
        React.createElement("div", { style: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "100px" } },
            React.createElement("div", { style: style }, elt)));
};
exports.Split = Split;
