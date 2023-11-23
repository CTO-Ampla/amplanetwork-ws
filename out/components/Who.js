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
exports.Who = void 0;
const React = __importStar(require("react"));
const useResponsive_1 = require("ahooks/es/useResponsive");
const col_1 = __importDefault(require("antd/lib/col"));
const flex_1 = __importDefault(require("antd/lib/flex"));
const row_1 = __importDefault(require("antd/lib/row"));
const styled_1 = __importDefault(require("@mui/system/styled"));
const style = {
    width: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};
const Div = (0, styled_1.default)('div') ``;
const Span = (0, styled_1.default)('span') ``;
const Who = (props) => {
    const rs = (0, useResponsive_1.useResponsive)();
    const [price, setPrice] = React.useState("250 USD");
    /*React.useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
  
          // Coordonnées approximatives des Émirats Arabes Unis
          const UAE_BOUNDS = {
            north: 26.209816,
            south: 22.0,
            west: 51.0,
            east: 57.116516
          };
  
          const isInUAE = lat >= UAE_BOUNDS.south && lat <= UAE_BOUNDS.north &&
                          lon >= UAE_BOUNDS.west && lon <= UAE_BOUNDS.east;
  
          if (isInUAE) {
            setPrice("920 AED");
          } else {
            console.log("L'utilisateur n'est pas aux Émirats Arabes Unis.");
          }
        });
      }
    }, []);*/
    //document.title = `${rs.xs ? "XS " : ""}${rs.sm ? "SM " : ""}${rs.md ? "MD " : ""}${rs.lg ? "LG " : ""}${rs.xl ? "XL" : ""}`
    const description = (React.createElement(Div, { className: "banner-content", sx: {
            paddingLeft: "5px",
            paddingRight: "5px",
            textAlign: "left"
        } },
        React.createElement("p", { className: "second", style: { fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15, textAlign: rs.md ? "center" : "center" } },
            "We fully operate online and we are always available for you.",
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(Span, { sx: { fontStyle: "italic" } }, "Dubai outsourcing with a French style."))));
    const picture = (React.createElement("img", { src: "assets/vector-dubai.png", alt: "", className: "img-fluid", style: { maxWidth: "50%" } }));
    const area1 = React.createElement(col_1.default, { md: 12, xs: 24 },
        React.createElement(flex_1.default, { justify: rs.md ? "center" : "center", style: { marginBottom: rs.md ? 0 : 20 } }, picture));
    const area2 = React.createElement(col_1.default, { md: 12, xs: 24 },
        React.createElement(flex_1.default, { justify: "center" }, description));
    return React.createElement(React.Fragment, null,
        React.createElement(row_1.default, { align: "middle", style: {
                width: "100%",
                maxWidth: "1200px",
                backgroundColor: "#fff",
                paddingTop: "20px",
                paddingBottom: "20px",
            } },
            rs.md ? area1 : area2,
            rs.md ? area2 : area1));
};
exports.Who = Who;
