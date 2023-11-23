import { BaseTerminal } from "./core/BaseTerminal";
import { IColorTerminalDelegate } from "./core/Constant";
import { IColor16Terminal } from "./core/Constant";
export declare class Terminal extends BaseTerminal implements IColor16Terminal<Terminal> {
    red: IColorTerminalDelegate<Terminal>;
    black: IColorTerminalDelegate<Terminal>;
    green: IColorTerminalDelegate<Terminal>;
    yellow: IColorTerminalDelegate<Terminal>;
    blue: IColorTerminalDelegate<Terminal>;
    magenta: IColorTerminalDelegate<Terminal>;
    cyan: IColorTerminalDelegate<Terminal>;
    lightGray: IColorTerminalDelegate<Terminal>;
    darkGray: IColorTerminalDelegate<Terminal>;
    lightRed: IColorTerminalDelegate<Terminal>;
    lightGreen: IColorTerminalDelegate<Terminal>;
    lightYellow: IColorTerminalDelegate<Terminal>;
    lightBlue: IColorTerminalDelegate<Terminal>;
    lightMagenta: IColorTerminalDelegate<Terminal>;
    lightCyan: IColorTerminalDelegate<Terminal>;
    white: IColorTerminalDelegate<Terminal>;
    bgRed: IColorTerminalDelegate<Terminal>;
    bgBlack: IColorTerminalDelegate<Terminal>;
    bgGreen: IColorTerminalDelegate<Terminal>;
    bgYellow: IColorTerminalDelegate<Terminal>;
    bgBlue: IColorTerminalDelegate<Terminal>;
    bgMagenta: IColorTerminalDelegate<Terminal>;
    bgCyan: IColorTerminalDelegate<Terminal>;
    bgLightGray: IColorTerminalDelegate<Terminal>;
    bgDarkGray: IColorTerminalDelegate<Terminal>;
    bgLightRed: IColorTerminalDelegate<Terminal>;
    bgLightGreen: IColorTerminalDelegate<Terminal>;
    bgLightYellow: IColorTerminalDelegate<Terminal>;
    bgLightBlue: IColorTerminalDelegate<Terminal>;
    bgLightMagenta: IColorTerminalDelegate<Terminal>;
    bgLightCyan: IColorTerminalDelegate<Terminal>;
    bgWhite: IColorTerminalDelegate<Terminal>;
    bold: IColorTerminalDelegate<Terminal>;
    dim: IColorTerminalDelegate<Terminal>;
    italic: IColorTerminalDelegate<Terminal>;
    underline: IColorTerminalDelegate<Terminal>;
    inverse: IColorTerminalDelegate<Terminal>;
    hidden: IColorTerminalDelegate<Terminal>;
    strikethrough: IColorTerminalDelegate<Terminal>;
    drawColoredText(text: string, foreColor?: number | undefined, backColor?: number | undefined): this;
    getAndClearBuffer(): string;
    constructor();
}
