"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeCards = void 0;
const react_1 = __importDefault(require("react"));
const RGroup_1 = require("../RGroup");
const col_1 = __importDefault(require("antd/lib/col"));
const row_1 = __importDefault(require("antd/lib/row"));
const ServiceCard_1 = require("./ServiceCard");
const Srv1 = react_1.default.createElement(ServiceCard_1.ServiceCard, { titleIcon: 'service01.png', title: "Quotation" },
    "If you want to know how much your project will cost, you can use our quotation calculator.",
    react_1.default.createElement("br", null),
    react_1.default.createElement("br", null),
    "It's 100% free and will give you a good idea of the cost of your project.");
const Srv2 = react_1.default.createElement(ServiceCard_1.ServiceCard, { titleIcon: 'service02.png', title: "Business Analitics", reverse: true },
    "We help you to understand your business and your customers better.",
    react_1.default.createElement("br", null),
    react_1.default.createElement("br", null),
    "Through some workshops we will guide and work with you to find the best solution for your business.");
const Srv22 = react_1.default.createElement(ServiceCard_1.ServiceCard, { titleIcon: 'service02r.png', title: "Business Analitics" },
    "We help you to understand your business and your customers better.",
    react_1.default.createElement("br", null),
    react_1.default.createElement("br", null),
    "Through some workshops we will guide and work with you to find the best solution for your business.");
const Srv3 = react_1.default.createElement(ServiceCard_1.ServiceCard, { titleIcon: 'service03.png', title: "Development" },
    "You can trust us to develop your project. We have a team of experts.",
    react_1.default.createElement("br", null),
    react_1.default.createElement("br", null),
    "Our Development process are based on the best practices of the industry. We took 20 years to tune it.");
const HomeCards = () => {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(RGroup_1.RGroup, null,
            react_1.default.createElement(RGroup_1.RBox, { lg: true, xl: true },
                react_1.default.createElement(row_1.default, null,
                    react_1.default.createElement(col_1.default, { span: 6, offset: 2 }, Srv1),
                    react_1.default.createElement(col_1.default, { span: 6, offset: 1 }, Srv2),
                    react_1.default.createElement(col_1.default, { span: 6, offset: 1 }, Srv3))),
            react_1.default.createElement(RGroup_1.RBox, { md: true },
                react_1.default.createElement(row_1.default, null,
                    react_1.default.createElement(col_1.default, { span: 9, offset: 2 }, Srv1),
                    react_1.default.createElement(col_1.default, { span: 9, offset: 2 }, Srv22),
                    react_1.default.createElement(col_1.default, { span: 20, offset: 2, style: { paddingTop: "35px" } }, Srv3))),
            react_1.default.createElement(RGroup_1.RBox, { sm: true, xs: true },
                react_1.default.createElement(row_1.default, null,
                    react_1.default.createElement(col_1.default, { span: 20, offset: 2 }, Srv1),
                    react_1.default.createElement(col_1.default, { span: 20, offset: 2, style: { paddingTop: "35px" } }, Srv22),
                    react_1.default.createElement(col_1.default, { span: 20, offset: 2, style: { paddingTop: "35px" } }, Srv3)))));
};
exports.HomeCards = HomeCards;
