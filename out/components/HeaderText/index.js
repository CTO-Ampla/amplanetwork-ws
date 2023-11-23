"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderText = void 0;
const react_1 = __importDefault(require("react"));
const RGroup_1 = require("../RGroup");
const HeaderDesktop_1 = require("./HeaderDesktop");
const HeaderMobile_1 = require("./HeaderMobile");
const HeaderText = () => {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(RGroup_1.RGroup, null,
            react_1.default.createElement(RGroup_1.RBox, { md: true, plus: true },
                react_1.default.createElement(HeaderDesktop_1.HeaderDesktop, null)),
            react_1.default.createElement(RGroup_1.RBox, { sm: true, less: true },
                react_1.default.createElement(HeaderMobile_1.HeaderMobile, null))));
};
exports.HeaderText = HeaderText;
