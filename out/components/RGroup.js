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
exports.RBox = exports.RGroup = void 0;
const React = __importStar(require("react"));
const ahooks_1 = require("ahooks");
/**
 * A responsive container that groups multiple `RBox` elements together.
 * Only the `RBox` elements that match the current breakpoint are displayed.
 * @param children The `RBox` elements to group together.
 */
const RGroup = (props) => {
    const responsive = (0, ahooks_1.useResponsive)();
    const { children } = props;
    const childrenArray = Array.isArray(children) ? children : [children];
    // Determine the current breakpoint based on the `responsive` hook.
    let higherBreakpoint = "xs";
    if (responsive.sm) {
        higherBreakpoint = "sm";
    }
    if (responsive.md) {
        higherBreakpoint = "md";
    }
    if (responsive.lg) {
        higherBreakpoint = "lg";
    }
    if (responsive.xl) {
        higherBreakpoint = "xl";
    }
    // Filter the `childrenArray` to only include the `RBox` elements that match the current breakpoint.
    const childrenArrayFiltered = childrenArray.filter((child) => {
        const { xs, sm, md, lg, xl, plus, less } = child.props;
        if (higherBreakpoint === "xs" && xs) {
            return true;
        }
        if (higherBreakpoint === "sm" && sm) {
            return true;
        }
        if (higherBreakpoint === "md" && md) {
            return true;
        }
        if (higherBreakpoint === "lg" && lg) {
            return true;
        }
        if (higherBreakpoint === "xl" && xl) {
            return true;
        }
        // Determine the current breakpoint based on the `xs`, `sm`, `md`, `lg`, `xl`, `plus`, and `less` props.
        let currentPlusBreakPoint = "xs";
        let currentLessBreakPoint = "";
        if (xs) {
            currentLessBreakPoint = "xs";
        }
        if (sm) {
            currentPlusBreakPoint = "sm";
            currentLessBreakPoint = currentLessBreakPoint.length ? currentLessBreakPoint : "sm";
        }
        if (md) {
            currentPlusBreakPoint = "md";
            currentLessBreakPoint = currentLessBreakPoint.length ? currentLessBreakPoint : "md";
        }
        if (lg) {
            currentPlusBreakPoint = "lg";
            currentLessBreakPoint = currentLessBreakPoint.length ? currentLessBreakPoint : "lg";
        }
        if (xl) {
            currentPlusBreakPoint = "xl";
            currentLessBreakPoint = currentLessBreakPoint.length ? currentLessBreakPoint : "xl";
        }
        // Check if the `plus` prop matches the current breakpoint.
        if (plus) {
            if ("xs sm md lg xl".split(currentPlusBreakPoint)[1].indexOf(higherBreakpoint) !== -1)
                return true;
        }
        // Check if the `less` prop matches the current breakpoint.
        if (less) {
            if ("xs sm md lg xl".split(currentLessBreakPoint)[0].indexOf(higherBreakpoint) !== -1)
                return true;
        }
        return false;
    });
    // Render the filtered `childrenArray`.
    return React.createElement(React.Fragment, null, childrenArrayFiltered);
};
exports.RGroup = RGroup;
const RBox = (props) => {
    return React.createElement(React.Fragment, null, props.children);
};
exports.RBox = RBox;
